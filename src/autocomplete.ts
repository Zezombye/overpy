import * as vscode from "vscode";

import { Action, actionKw } from "./data/actions";
import { Constant, constantValues } from "./data/constants";
import { opyConstants } from "./data/opy/constants";
import { opyModules } from "./data/opy/modules";
import { opyStringEntities } from "./data/opy/stringEntities";
import { valueFuncKw } from "./data/values";
import { showOverPyExtensionError } from "./extension";
import { DEBUG_MODE, enumMembers, postLoadTasks } from "./globalVars";
import { Argument, Value, Type, MacroData, Variable, Subroutine, AstMacroData, AstConstantData } from "./types";
import { opyFuncs } from "./data/opy/functions";
import { opyKeywords } from "./data/opy/keywords";
import { opyAnnotations } from "./data/opy/annotations";
import { preprocessingDirectives } from "./data/opy/preprocessing";
import { opyMemberFuncs } from "./data/opy/memberFunctions";
import { astToOpy } from "./decompiler/astToOpy";
import { typeToString } from "./utils/logging";
import { Ast } from "./utils/ast";
import { builtInEnumNameToAstInfo } from "./compiler/parser";
import { opyMacros } from "./data/opy/macros";

const overpyExtension = vscode.extensions.getExtension("zezombye.overpy");
if (overpyExtension === undefined) {
    const errorMessage = "Could not find the OverPy extension when initializing autocomplete";
    showOverPyExtensionError(errorMessage);
    throw new Error(errorMessage);
}
const overpyExtensionPath = encodeURI(overpyExtension.extensionPath.replace(/\\/g, "/"));

let funcDoc: Record<string, (Action | Value | (typeof opyFuncs)[string] | (typeof opyKeywords)[string]) & { isMember?: boolean }>;
export type StringEntity = {
    codepoint: number;
    description: string;
    snippet: string;
};
const stringEntities: Record<string, StringEntity> = generateEntitiesDescription(opyStringEntities);
let defaultConstValues: typeof constantValues | typeof opyConstants | typeof opyModules;
export const defaultConstCompletionLists: Record<string, vscode.CompletionList> = {};
export let constantValuesCompLists: Record<string, vscode.CompletionList> = {};
let funcList: typeof funcDoc;
export type OverpyModule = {
    class: string;
    description: string;
    args: Argument[];
    return: Type;
};
export let moduleFuncList: Record<string, OverpyModule> = {};
const metaRuleParams = structuredClone(opyAnnotations);
export let preprocessingDirectivesList: vscode.CompletionList;
export const memberFuncList: Record<string, Omit<(typeof opyMemberFuncs)[string], "class" | "description" | "return"> & Partial<Pick<(typeof opyMemberFuncs)[string], "class" | "description" | "return">>> = structuredClone(opyMemberFuncs);

export const stringEntitiesCompList = makeCompList(stringEntities);
export const metaRuleParamsCompList = makeCompList(metaRuleParams);

export let defaultCompList: vscode.CompletionList;
export let allFuncList: Record<string, Record<string, unknown>>;
export let memberCompletionItems: vscode.CompletionList;
export type AutocompleteFunctionData = {
    args: { name: string; type: string, default?: string }[] | null;
    description: string;
    class?: string;
};
export let normalMacros: Record<string, AutocompleteFunctionData> = {};
export let normalAstMacros: Record<string, AutocompleteFunctionData> = {};
export let memberMacros: Record<string, AutocompleteFunctionData> = {};
export let memberAstMacros: Record<string, AutocompleteFunctionData> = {};
export let normalAstConstants: Record<string, AutocompleteFunctionData> = {};
export let memberAstConstants: Record<string, AutocompleteFunctionData> = {};
export let globalVariables: Record<string, { description: string }> = {};
export let playerVariables: Record<string, { description: string }> = {};
export let subroutines: Record<string, AutocompleteFunctionData> = {};
export let userEnums: Record<string, Record<string, unknown>> = {};
export let activatedExtensions: string[] = [];
export const setActivatedExtensions = (val: string[]) => (activatedExtensions = val);
export let spentExtensionPoints = -1;
export const setSpentExtensionPoints = (val: number) => (spentExtensionPoints = val);
export let availableExtensionPoints = -1;
export const setAvailableExtensionPoints = (val: number) => (availableExtensionPoints = val);

postLoadTasks.push({
    task: () => {
        funcDoc = {
            ...actionKw,
            ...valueFuncKw,
            ...opyFuncs,
            ...opyMacros,
        };

        funcList = {
            ...opyKeywords,
        };

        defaultConstValues = Object.fromEntries(
            Object.entries(structuredClone({ ...constantValues, ...opyConstants, ...opyModules }))
                .filter(([key]) => !(key.startsWith("__") && key.endsWith("__")))
                .map(([key, constant]) => {
                    if (!key.endsWith("Literal")) return [key, constant];

                    return [
                        key.substring(0, key.lastIndexOf("Literal")),
                        Object.fromEntries(
                            Object.entries(constant as Record<string, Constant>)
                                .filter(([_, constantValue]) => !constantValue.onlyInOw1)
                                .map(([constantKey, constantValue]) => [constantKey, constantValue]),
                        ),
                    ];
                }),
        );

        Object.entries(defaultConstValues).forEach(([key, value]) => {
            if (typeof value === "object" && value !== null && "description" in value) {
                defaultConstCompletionLists[key] = makeCompList(value);
            }
        });

        // For each module, extract every function
        moduleFuncList = Object.fromEntries(
            Object.entries(opyModules).flatMap(([moduleName, module]) =>
                Object.entries(module)
                    // filter out description of module, leaving us with only actual functions
                    .filter(
                        (
                            funcEntry,
                        ): funcEntry is [
                            string,
                            {
                                description: string;
                                args: Argument[];
                                return: Type;
                            },
                        ] => {
                            const [_, entry] = funcEntry;
                            return typeof entry !== "string";
                        },
                    )
                    // add class property to function entry
                    .map(([functionName, func]) => [functionName, { ...func, class: moduleName }]),
            ),
        );

        funcList = {
            ...funcList,
            ...Object.fromEntries(Object.entries(funcDoc).filter(([key, value]) => !(key.startsWith("__") && key.endsWith("__")) && !key.includes(".") && !(value as Value).hideFromAutocomplete)),
        };

        preprocessingDirectivesList = makeCompList(structuredClone(preprocessingDirectives));

        Object.keys(funcDoc)
            .filter((key) => key.startsWith("."))
            .forEach((key) => {
                if ((funcDoc[key] as Value).hideFromAutocomplete) {
                    delete funcDoc[key];
                    return;
                }
                let newKeyName = key.substring(".".length);
                funcDoc[newKeyName] = funcDoc[key];
                delete funcDoc[key];
                funcDoc[newKeyName].isMember = true;
                memberFuncList[newKeyName] = funcDoc[newKeyName];
            });

        refreshAutoComplete();
    },
    priority: 1000,
});

export function refreshAutoComplete() {
    constantValuesCompLists = { ...defaultConstCompletionLists };
    for (let userEnum in userEnums) {
        if (!(userEnum in defaultConstValues)) {
            constantValuesCompLists[userEnum] = new vscode.CompletionList();
        }

        for (let userEnumMember in userEnums[userEnum]) {
            let description = "A user-defined enum member.";
            try {
                description += `\n\nValue: \`${astToOpy(userEnums[userEnum][userEnumMember] as Ast)}\``;
            } catch (e) {}

            constantValuesCompLists[userEnum].items.push(
                // @ts-expect-error - incomplete type should be okay
                makeCompItem(userEnumMember, { description: description }),
            );
        }
    }

    ["Beam", "Effect", "DynamicEffect"].forEach((constType) => {
        constantValuesCompLists[constType] = new vscode.CompletionList();
        constantValuesCompLists[constType].items = defaultConstCompletionLists[constType].items.filter((item) => !(item.label.toString() in constantValues[constType]) || !("extension" in constantValues[constType][item.label.toString()]) || activatedExtensions.includes(constantValues[constType][item.label.toString()].extension ?? "<INVALID>"));
    });

    const extensionDoc = preprocessingDirectivesList.items.filter((item) => item.label.toString() === "extension")[0];
    const extensionPreprocessorData = preprocessingDirectives["extension"];
    extensionDoc.documentation = new vscode.MarkdownString(extensionPreprocessorData.description.replace("__extensionDescription__", spentExtensionPoints < 0 ? "Compile the project once to get a breakdown of extension points and show values in autocomplete" : `As of the latest compilation, you are using **\`${spentExtensionPoints + (availableExtensionPoints < 0 ? "" : "/" + availableExtensionPoints)}\`** points.`));

    defaultCompList = makeCompList({
        ...funcList,
        ...constantValuesCompLists,
        ...normalAstConstants,
        ...normalMacros,
        ...normalAstMacros,
        ...globalVariables,
        ...subroutines,
    });
    allFuncList = {
        ...funcList,
        ...memberFuncList,
        ...moduleFuncList,
        ...normalAstConstants,
        ...normalMacros,
        ...normalAstMacros,
        ...memberAstConstants,
        ...memberMacros,
        ...memberAstMacros,
    };

    Object.keys(allFuncList).forEach((key) => (allFuncList[key].sigHelp = makeSignatureHelp(key, allFuncList[key] as OverpyModule)));
    memberCompletionItems = makeCompList({
        ...memberFuncList,
        ...memberMacros,
        ...memberAstConstants,
        ...memberAstMacros,
        ...playerVariables,
    });
}

function generateEntitiesDescription(strEntities: typeof opyStringEntities): typeof stringEntities {
    return Object.fromEntries(
        Object.entries(strEntities).map(
            (
                entry,
            ): [
                string,
                {
                    codepoint: number;
                    description: string;
                    snippet: string;
                },
            ] => [
                entry[0],
                {
                    codepoint: entry[1].codepoint,
                    description: `# ${String.fromCodePoint(entry[1].codepoint)}  \n\
U+${entry[1].codepoint.toString(16).padStart(4, "0").toUpperCase()}  \n\

${entry[1].description}`,
                    snippet: entry[0] + ";",
                },
            ],
        ),
    );
}

function makeCompList(obj: Record<string, unknown>) {
    const result = new vscode.CompletionList(
        Object.keys(obj)
            .filter((key) => typeof obj[key] === "object" && !(key.startsWith("__") && key.endsWith("__")))
            .map((key) => makeCompItem(key, obj[key] as OverpyModule)),
    );
    return result;
}

function makeCompItem(itemName: string, item: OverpyModule): vscode.CompletionItem {
    const compItem = new vscode.CompletionItem(itemName.endsWith("()") ? itemName.substring(0, itemName.length - 2) : itemName);
    compItem.label = itemName.endsWith("()") ? itemName.substring(0, itemName.length - 2) : itemName;
    compItem.documentation = generateDocFromDoc(itemName, item);
    compItem.insertText = generateSnippetFromDoc(itemName, item);
    /*if (itemName.startsWith("&")) {
      compItem.additionalTextEdits = [vscode.TextEdit.delete(//compItem.range = new vscode.Range(new vscode.Position(0,0), new vscode.Position(0,1));
  }*/
    return compItem;
}

function generateDocFromDoc(itemName: string, item: OverpyModule): vscode.MarkdownString {
    let isMemberFunctionFlag = false;
    if ("isMember" in item) {
        isMemberFunctionFlag = item.isMember === true;
    }

    let doc = "";
    if ("description" in item && typeof item.description === "string") {
        doc = item.description;
    }

    if (doc === "__iconDescription__") {
        return new vscode.MarkdownString(`![](${vscode.Uri.file(`${overpyExtensionPath}/img/icons/${itemName.toLowerCase()}.png`)}) \n\n \n\n \n\n \n\n `);
    }
    if (doc.startsWith("<txc")) {
        return new vscode.MarkdownString(`\`${doc}\`\n\n![](${vscode.Uri.file(`${overpyExtensionPath}/img/textures/${doc.toLowerCase().replace(/[ <>]/g, "")}.png`)}) \n\n \n\n \n\n \n\n `);
    }

    let result = "";
    result += doc;

    let infoStr = "";
    let argStr = "";

    if ("args" in item && Array.isArray(item.args) && (item.args.length > 1 || (item.args.length > 0 && !isMemberFunctionFlag))) {
        argStr = (item.args as Argument[]).slice(isMemberFunctionFlag ? 1 : 0).reduce((prev, arg) =>
            prev + "- `"+arg.name
            + (arg.default !== undefined ? "?" : "")
            + "`"+(arg.description ? ": "+arg.description + (arg.description?.endsWith(".") ? "" : ".") : "")
            //Add zero-width space to force line break on large constants such as HudReeval.VISIBILITY_SORT_ORDER_STRING_AND_COLOR
            + (arg.default !== undefined ? " If omitted, defaults to `"+argDefaultToString(arg).replaceAll("_", "_\u200B")+"`." : "")+"\n", ""
        );
    }

    if (argStr !== "") {
        infoStr += `Arguments:\n${argStr}\n`;
    }
    if (isMemberFunctionFlag) {
        infoStr += "Class: `Player`  \n";
    } else if (item.class) {
        infoStr += `Class: \`${item.class}\`  \n`;
    }

    if ("return" in item) {
        infoStr += "Returns: `" + typeToString(item.return as Type) + "`  \n";
    }

    if ("extension" in item) {
        infoStr += "Part of extension `" + item.extension + "`.\n";
    }

    if ("macro" in item) {
        infoStr += "This macro resolves to:\n"+ "`"+(item.macro as string).trim().replaceAll("$", "")+"`" + "\n";
    }

    if (infoStr) {
        result += "\n\n" + infoStr;
    }

    if (result === "") {
        if (DEBUG_MODE) console.log(`No documentation found for \`${itemName}\``);
        return new vscode.MarkdownString("<no documentation found>");
    }

    return new vscode.MarkdownString(result);
}

function generateSnippetFromDoc(itemName: string, item: OverpyModule) {
    if (itemName.startsWith("@")) {
        return new vscode.SnippetString(getSnippetForMetaRuleParam(itemName));
    }

    if ("snippet" in item && typeof item.snippet === "string") {
        return new vscode.SnippetString(item.snippet);
    }

    if (item.args === null || item.args === undefined) {
        return new vscode.SnippetString(itemName);
    } else {
        var isMemberFunction = false;
        if ("isMember" in item) {
            isMemberFunction = item.isMember as boolean;
        }
        if (item.args.length === 0 || (item.args.length === 1 && isMemberFunction)) {
            if (!itemName.endsWith("()")) {
                itemName += "()";
            }
            return new vscode.SnippetString(itemName);
        } else {
            return new vscode.SnippetString(itemName);
        }
    }
}

function getSnippetForMetaRuleParam(param: string) {
    if (param === "@Name") {
        return 'Name "$0"';
    }

    var result = param.substring(1);
    try {
        var ruleParam = metaRuleParams[param];
    } catch (e) {
        if (DEBUG_MODE) console.log("Could not find param " + param);
        return param;
    }
    if (ruleParam.args && ruleParam.args.length > 0) {
        if (ruleParam.args[0].values) {
            result += " ${1|";
            result += ruleParam.args[0].values.filter((x) => !(x.startsWith("__") && x.endsWith("__"))).join(",");
            result += "|}";
        } else {
            result += " ";
        }
    }
    return result;
}

function argDefaultToString(arg: Argument) {
    if (arg.type in constantValues || arg.type in builtInEnumNameToAstInfo) {
        return arg.type+"."+arg.default;
    }
    return ""+arg.default;
}

function makeSignatureHelp(funcName: string, func: OverpyModule) {
    if (func.args === null || func.args === undefined || func.args.length === 0) {
        return new vscode.SignatureHelp();
    }

    let isMemberFunction = false;
    if ("isMember" in func) {
        isMemberFunction = func.isMember as boolean;
    }

    var paramInfo = [];
    var sigStr = "";
    if (func.class) {
        sigStr += func.class + ".";
    } else if (isMemberFunction) {
        sigStr += "Player.";
    }

    sigStr += funcName + "(";

    for (var i = 0; i < func.args.length; i++) {
        if (!(i === 0 && isMemberFunction)) {
            var argName = func.args[i].name;
            let argSignature = argName;
            /*if (func.args[i].default !== undefined) {
                argSignature += "?";
            }*/
            //argSignature += ": " + typeToString(func.args[i].type);
            if (func.args[i].default !== undefined) {
                argSignature +="=" + argDefaultToString(func.args[i]);
            }
            paramInfo.push(new vscode.ParameterInformation([sigStr.length, sigStr.length + argSignature.length], new vscode.MarkdownString((func.args[i].description ? func.args[i].description+"\n\n" : "")+"Type: `"+typeToString(func.args[i].type)+"`")));
            sigStr += argSignature;
            if (i < func.args.length - 1) {
                sigStr += ", ";
            }
        }
    }

    sigStr += ")";

    if ("return" in func) {
        sigStr += " -> " + typeToString(func.return as Type);
        //throw new Error("Function '"+funcName+"' has no Return type");
    }

    var sigInfo = new vscode.SignatureInformation(sigStr);
    sigInfo.parameters = paramInfo;
    var sigHelp = new vscode.SignatureHelp();
    sigHelp.activeSignature = 0;
    sigHelp.activeParameter = 0;
    sigHelp.signatures = [sigInfo];

    return sigHelp;
}

export function generateStringEntitiesDescription(strEntities: Record<string, StringEntity>) {
    for (var entity in strEntities) {
        strEntities[entity].description = "# " + String.fromCodePoint(strEntities[entity].codepoint) + "  \nU+" + strEntities[entity].codepoint.toString(16).padStart(4, "0").toUpperCase() + " \n\n" + strEntities[entity].description;
        /*if (entity === "zero_width_space") {
          //Do not actually insert a zero width space, else it will be impossible to know where it comes from.
          strEntities[entity].snippet = "\\z";
      } else {
          strEntities[entity].snippet = String.fromCodePoint(strEntities[entity].codepoint);
      }*/
        strEntities[entity].snippet = entity + ";";
        //strEntities["&"+entity+";"] = strEntities[entity];
        //delete strEntities[entity];
    }
    return strEntities;
}

export function fillAutocompletionMacros(macros: MacroData[]) {
    normalMacros = {};
    memberMacros = {};
    for (var macro of macros) {
        let convertedMacro: AutocompleteFunctionData = {
            args: [],
            description: "",
        };
        var macroName = macro.name;
        if (macro.isFunction) {
            if (macro.args.length === 0) {
                macroName += "()";
            } else {
                for (var arg of macro.args) {
                    (convertedMacro.args as Array<any>).push({
                        name: arg,
                        type: "Object",
                    });
                }
            }
        }
        if (macro.isFunction && macro.isScript) {
            convertedMacro.description = "This macro executes the script: " + macro.scriptPath;
        } else {
            convertedMacro.description = "This macro resolves to:\n\n" + macro.replacement;
        }
        if (macro.isMember) {
            memberMacros[macroName] = convertedMacro;
        } else {
            normalMacros[macroName] = convertedMacro;
        }
    }
}

export function fillAutocompletionAstMacros(macros: AstMacroData[]) {
    normalAstMacros = {};
    memberAstMacros = {};
    for (let macro of macros) {
        let convertedMacro: AutocompleteFunctionData = {
            args: [],
            description: "",
            class: macro.class_,
        };
        var macroName = macro.name;
        if (macro.args.length === 0) {
            macroName += "()";
        } else {
            for (var arg of macro.args) {
                if (arg.name !== "self") {
                    (convertedMacro.args as Array<any>).push({
                        name: arg.name,
                        type: typeToString(arg.type),
                        default: arg.defaultStr,
                    });
                }
            }
        }
        convertedMacro.description = "This macro resolves to:\n\n`" + macro.linesStr.join("`\n`")+"`";
        if (macro.class_) {
            memberAstMacros[macroName.replace(".", "")] = convertedMacro;
        } else {
            normalAstMacros[macroName] = convertedMacro;
        }
    }
}

export function fillAutocompletionConstants(constants: AstConstantData[]) {
    normalAstConstants = {};
    memberAstConstants = {};
    for (var constant of constants) {
        let convertedConstant: AutocompleteFunctionData = {
            args: null,
            description: "This macro resolves to:\n\n`" + constant.valueStr + "`",
            class: constant.class_,
        };
        if (constant.class_) {
            memberAstConstants[constant.name.replace(".", "")] = convertedConstant;
        } else {
            normalAstConstants[constant.name] = convertedConstant;
        }
    }
}

export function fillAutocompletionVariables(globalVars: Variable[], playerVars: Variable[]) {
    globalVariables = {};
    for (var globalVar of globalVars) {
        globalVariables[globalVar.name] = {
            description: globalVar.index !== -1 ? "A global variable. (index: " + globalVar.index + ")" : "A global variable.",
        };
    }
    playerVariables = {};
    for (var playerVar of playerVars) {
        playerVariables[playerVar.name] = {
            description: playerVar.index !== -1 ? "A player variable. (index: " + playerVar.index + ")" : "A player variable.",
        };
    }
}

export function fillAutocompletionSubroutines(subroutineNames: Subroutine[]) {
    subroutines = {};
    for (var subroutine of subroutineNames) {
        subroutines[subroutine.name + "()"] = {
            args: [],
            description: subroutine.index ? "A subroutine. (index: " + subroutine.index + ")" : "A subroutine.",
        };
    }
}

export function fillAutocompletionEnums(enums: typeof enumMembers) {
    userEnums = enums;
}
