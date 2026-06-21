import type {
    Argument,
    AstConstantData,
    AstMacroData,
    MacroData,
    Subroutine,
    Type,
    Variable,
} from "../types";
import {
    CompletionItem,
    CompletionItemKind,
    CompletionList,
    InsertTextFormat,
    MarkupKind,
    ParameterInformation,
    SignatureHelp,
    SignatureInformation,
} from "vscode-languageserver/node";

import { actionKw } from "../data/actions";
import { constantValues } from "../data/constants";
import { opyAnnotations } from "../data/opy/annotations";
import { opyConstants } from "../data/opy/constants";
import { opyFuncs } from "../data/opy/functions";
import { opyKeywords } from "../data/opy/keywords";
import { opyMacros } from "../data/opy/macros";
import { opyMemberFuncs } from "../data/opy/memberFunctions";
import { opyModules } from "../data/opy/modules";
import { preprocessingDirectives } from "../data/opy/preprocessing";
import { opyStringEntities } from "../data/opy/stringEntities";
import { valueFuncKw } from "../data/values";
import { DeclarationDocs, emptyDeclarationDocs } from "./declarationDocs";
import { builtInEnumNameToAstInfo } from "../compiler/parser";
import type { Ast } from "../utils/ast";
import {OverPyCompiler, OverPyDecompiler} from "../godClasses";

type CompletionData = {
    args?: Argument[] | null;
    class?: string | String;
    description?: string;
    extension?: string;
    hideFromAutocomplete?: boolean;
    isMember?: boolean;
    macro?: string;
    return?: Type | Type[];
    snippet?: string;
};

export type CompletionCompileResult = {
    macros: MacroData[];
    astMacros: Record<string, AstMacroData>;
    astConstants: Record<string, AstConstantData>;
    globalVariables: Variable[];
    playerVariables: Variable[];
    subroutines: Subroutine[];
    enumMembers: Record<string, Record<string, Ast>>;
    activatedExtensions: string[];
    spentExtensionPoints: number;
    availableExtensionPoints: number;
};

type DynamicCompletionData = {
    activatedExtensions: string[];
    availableExtensionPoints: number;
    declarationDocs: DeclarationDocs;
    globalVariables: Record<string, CompletionData>;
    memberAstConstants: Record<string, CompletionData>;
    memberAstMacros: Record<string, CompletionData>;
    memberMacros: Record<string, CompletionData>;
    normalAstConstants: Record<string, CompletionData>;
    normalAstMacros: Record<string, CompletionData>;
    normalMacros: Record<string, CompletionData>;
    playerVariables: Record<string, CompletionData>;
    spentExtensionPoints: number;
    subroutines: Record<string, CompletionData>;
    userEnums: Record<string, Record<string, Ast>>;
};

export type CompletionState = {
    annotationCompletions: CompletionList;
    constantValueCompletions: Record<string, CompletionList>;
    defaultCompletions: CompletionList;
    functionRegistry: Record<string, CompletionData>;
    memberCompletions: CompletionList;
    preprocessingCompletions: CompletionList;
    stringEntityCompletions: CompletionList;
};

// Retained instances, not free functions: `typeToString` (compiler) recurses via `this.typeToString`
// and throws `this.error`, and `astToOpy` (decompiler) is a prototype method bound to its instance.
// Extracting them would require detaching that `this`-dependent machinery, so the instances are
// load-bearing. They are used only for `typeToString` (signature labels) and `astToOpy` (enum-member values).
const compiler = new OverPyCompiler();
const decompiler = new OverPyDecompiler();

const emptyList = (): CompletionList => ({ isIncomplete: false, items: [] });

let baseFunctionData: Record<string, CompletionData> = {};
let baseMemberFunctionData: Record<string, CompletionData> = {};
let baseModuleFunctionData: Record<string, CompletionData> = {};
let baseConstantValueCompletions: Record<string, CompletionList> = {};
let completionState: CompletionState = {
    annotationCompletions: emptyList(),
    constantValueCompletions: {},
    defaultCompletions: emptyList(),
    functionRegistry: {},
    memberCompletions: emptyList(),
    preprocessingCompletions: emptyList(),
    stringEntityCompletions: emptyList(),
};
let initialized = false;

let dynamicCompletionData: DynamicCompletionData = {
    activatedExtensions: [],
    availableExtensionPoints: -1,
    declarationDocs: emptyDeclarationDocs(),
    globalVariables: {},
    memberAstConstants: {},
    memberAstMacros: {},
    memberMacros: {},
    normalAstConstants: {},
    normalAstMacros: {},
    normalMacros: {},
    playerVariables: {},
    spentExtensionPoints: -1,
    subroutines: {},
    userEnums: {},
};

/**
 * Per-document snapshots of the dynamic completion data, keyed by document URI. The semantic
 * token index reads from the snapshot of the document being highlighted so that symbols defined
 * in one open file never bleed into (or vanish from) the highlighting of another. The global
 * `dynamicCompletionData` above still reflects the most recently validated document and backs
 * completions/hover for the focused editor.
 */
const dynamicCompletionDataByUri = new Map<string, DynamicCompletionData>();

export function initializeCompletionState(): void {
    if (initialized) {
        return;
    }

    buildBaseCompletionData();
    initialized = true;
}

export function getCompletionState(uri?: string): CompletionState {
    initializeCompletionState();
    const dynamic = (uri !== undefined ? dynamicCompletionDataByUri.get(uri) : undefined) ?? dynamicCompletionData;
    return buildCompletionState(dynamic);
}

export function updateCompletionStateFromCompileResult(
    uri: string,
    compileResult: CompletionCompileResult,
    declarationDocs: DeclarationDocs = emptyDeclarationDocs(),
): void {
    initializeCompletionState();

    const next: DynamicCompletionData = {
        activatedExtensions: compileResult.activatedExtensions,
        availableExtensionPoints: compileResult.availableExtensionPoints,
        declarationDocs,
        globalVariables: getVariableCompletions(compileResult.globalVariables, "global", declarationDocs.variables),
        memberAstConstants: {},
        memberAstMacros: {},
        memberMacros: {},
        normalAstConstants: {},
        normalAstMacros: {},
        normalMacros: {},
        playerVariables: getVariableCompletions(compileResult.playerVariables, "player", declarationDocs.variables),
        spentExtensionPoints: compileResult.spentExtensionPoints,
        subroutines: getSubroutineCompletions(compileResult.subroutines, declarationDocs.subroutines),
        userEnums: compileResult.enumMembers,
    };

    fillMacroCompletions(next, compileResult.macros);
    fillAstMacroCompletions(next, Object.values(compileResult.astMacros), declarationDocs.macros);
    fillAstConstantCompletions(next, Object.values(compileResult.astConstants), declarationDocs.macros);

    dynamicCompletionData = next;
    dynamicCompletionDataByUri.set(uri, next);
}

/** Drops a closed document's cached completion data so its symbols stop affecting highlighting. */
export function clearDocumentCompletionData(uri: string): void {
    dynamicCompletionDataByUri.delete(uri);
}

export function makeSignatureHelp(
    funcName: string,
    func: CompletionData,
    activeParameter: number,
    keywordArgument: string | null,
): SignatureHelp | undefined {
    if (!Array.isArray(func.args) || func.args.length === 0) {
        return undefined;
    }

    if (keywordArgument !== null) {
        const keywordIndex = func.args.findIndex((arg) => arg.name === keywordArgument);
        if (keywordIndex >= 0) {
            activeParameter = keywordIndex;
        }
    }

    const isMemberFunction = func.isMember === true;
    const visibleArgs = isMemberFunction ? func.args.slice(1) : func.args;
    if (visibleArgs.length === 0) {
        return undefined;
    }

    let signatureLabel = "";
    if (func.class) {
        signatureLabel += `${func.class}.`;
    } else if (isMemberFunction) {
        signatureLabel += "Player.";
    }

    signatureLabel += `${funcName}(`;
    const parameters: ParameterInformation[] = [];

    for (let index = 0; index < visibleArgs.length; index++) {
        const arg = visibleArgs[index];
        let argLabel = arg.name;
        if (arg.default !== undefined) {
            argLabel += `=${argDefaultToString(arg)}`;
        }

        const start = signatureLabel.length;
        signatureLabel += argLabel;
        parameters.push({
            label: [start, signatureLabel.length],
            documentation: {
                kind: MarkupKind.Markdown,
                value: `${arg.description ? `${arg.description}\n\n` : ""}Type: \`${compiler.typeToString(arg.type)}\``,
            },
        });

        if (index < visibleArgs.length - 1) {
            signatureLabel += ", ";
        }
    }

    signatureLabel += ")";
    if (func.return !== undefined) {
        signatureLabel += ` -> ${compiler.typeToString(func.return as Type)}`;
    }

    const signature: SignatureInformation = {
        label: signatureLabel,
        parameters,
    };

    return {
        activeSignature: 0,
        activeParameter: Math.min(activeParameter, visibleArgs.length - 1),
        signatures: [signature],
    };
}

export function makeFunctionSignatureLabel(funcName: string, func: CompletionData): string {
    const isMemberFunction = func.isMember === true;
    const visibleArgs = Array.isArray(func.args) ? (isMemberFunction ? func.args.slice(1) : func.args) : [];

    let label = "";
    if (func.class) {
        label += `${func.class}.`;
    } else if (isMemberFunction) {
        label += "Player.";
    }

    label += `${funcName}`;
    if (func.args !== null) {
        label += "(";
        label += visibleArgs
            .map((arg) => (arg.default !== undefined ? `${arg.name}=${argDefaultToString(arg)}` : arg.name))
            .join(", ");
        label += ")";
    }

    if (func.return !== undefined) {
        label += ` -> ${compiler.typeToString(func.return as Type)}`;
    }

    return label;
}

export type SemanticSymbolKind = "function" | "method" | "macro" | "variable";

export type SemanticTokenIndex = {
    normal: Map<string, SemanticSymbolKind>;
    member: Map<string, SemanticSymbolKind>;
    enumTypes: Set<string>;
    enumMembers: Map<string, Set<string>>;
};

const identifierPattern = /^[A-Za-z_][A-Za-z0-9_]*$/;

/**
 * Builds a categorized lookup of every known symbol name for semantic highlighting.
 * `normal` holds names usable in a normal position; `member` holds names used after a `.`.
 * Keyword entries (and, def, elif, …) are deliberately excluded so the grammar keeps
 * coloring them as keywords.
 */
export function getSemanticTokenIndex(uri?: string): SemanticTokenIndex {
    initializeCompletionState();

    const dynamic = (uri !== undefined ? dynamicCompletionDataByUri.get(uri) : undefined) ?? dynamicCompletionData;

    const normal = new Map<string, SemanticSymbolKind>();
    const member = new Map<string, SemanticSymbolKind>();
    const keywordNames = new Set(Object.keys(opyKeywords)
        .concat(...Object.keys(valueFuncKw).filter(x => valueFuncKw[x].args === null))
        .concat(...Object.keys(actionKw).filter(x => actionKw[x].args === null))
        .concat(...Object.keys(opyFuncs).filter(x => opyFuncs[x].args === null))
    );

    const addNames = (
        target: Map<string, SemanticSymbolKind>,
        names: Iterable<string>,
        kind: SemanticSymbolKind,
        skip?: Set<string>,
    ): void => {
        for (const rawName of names) {
            const name = rawName.endsWith("()") ? rawName.slice(0, -2) : rawName;
            if (!identifierPattern.test(name) || (skip?.has(name) ?? false) || target.has(name)) {
                continue;
            }
            target.set(name, kind);
        }
    };

    addNames(normal, Object.keys(baseFunctionData), "function", keywordNames);
    addNames(normal, Object.keys(dynamic.normalAstConstants), "macro");
    addNames(normal, Object.keys(dynamic.normalMacros), "macro");
    addNames(normal, Object.keys(dynamic.normalAstMacros), "macro");
    addNames(normal, Object.keys(dynamic.subroutines), "function");
    addNames(normal, Object.keys(dynamic.globalVariables), "variable");

    addNames(member, Object.keys(baseMemberFunctionData), "method");
    addNames(member, Object.keys(dynamic.memberAstConstants), "macro");
    addNames(member, Object.keys(dynamic.memberMacros), "macro");
    addNames(member, Object.keys(dynamic.memberAstMacros), "macro");
    addNames(member, Object.keys(dynamic.playerVariables), "variable");

    const enumTypes = new Set<string>();
    const enumMembers = new Map<string, Set<string>>();

    const registerEnum = (typeName: string, members: Iterable<string>): void => {
        if (!identifierPattern.test(typeName)) {
            return;
        }
        const memberSet = enumMembers.get(typeName) ?? new Set<string>();
        for (const memberName of members) {
            if (!(memberName.startsWith("__") && memberName.endsWith("__"))) {
                memberSet.add(memberName);
            }
        }
        enumMembers.set(typeName, memberSet);
        enumTypes.add(typeName);
    };

    for (const [typeName, value] of Object.entries(constantValues)) {
        if (typeof value !== "object" || value === null) {
            continue;
        }
        const normalized = typeName.endsWith("Literal") ? typeName.slice(0, -"Literal".length) : typeName;
        registerEnum(normalized, Object.keys(value).filter((key) => key !== "description"));
    }

    for (const [typeName, members] of Object.entries(dynamic.userEnums)) {
        registerEnum(typeName, Object.keys(members));
    }

    return { normal, member, enumTypes, enumMembers };
}

function buildBaseCompletionData(): void {
    const funcDoc: Record<string, CompletionData> = {
        ...actionKw,
        ...valueFuncKw,
        ...opyFuncs,
        ...opyMacros,
    };

    baseFunctionData = Object.fromEntries(
        Object.entries(opyKeywords)
            .filter(([_, item]) => !item.hideFromAutocomplete)
            .map(([key, item]) => [key, item]),
    );
    baseMemberFunctionData = Object.fromEntries(Object.entries(opyMemberFuncs));

    for (const [key, value] of Object.entries(funcDoc)) {
        if (value.hideFromAutocomplete) {
            continue;
        }
        if (key.startsWith(".")) {
            baseMemberFunctionData[key.substring(1)] = { ...value, isMember: true };
            continue;
        }
        if (!key.startsWith("__") && !key.endsWith("__") && !key.includes(".")) {
            baseFunctionData[key] = value;
        }
    }

    baseModuleFunctionData = Object.fromEntries(
        Object.entries(opyModules).flatMap(([moduleName, module]) =>
            Object.entries(module)
                .filter(isModuleFunctionEntry)
                .map(([functionName, func]) => [functionName, { ...func, class: moduleName }]),
        ),
    );

    baseConstantValueCompletions = makeDefaultConstantValueCompletions();

    completionState.annotationCompletions = makeCompletionList(opyAnnotations, CompletionItemKind.Property);
    completionState.preprocessingCompletions = makeCompletionList(preprocessingDirectives, CompletionItemKind.Property);
    completionState.stringEntityCompletions = makeCompletionList(
        Object.fromEntries(
            Object.entries(opyStringEntities).map(([entity, data]) => [
                entity,
                {
                    description: `# ${String.fromCodePoint(data.codepoint)}  \nU+${data.codepoint.toString(16).padStart(4, "0").toUpperCase()}  \n\n${data.description}`,
                    snippet: `${entity};`,
                },
            ]),
        ),
        CompletionItemKind.Text,
    );
}

function buildCompletionState(dynamic: DynamicCompletionData): CompletionState {
    const constantValueCompletions = {
        ...baseConstantValueCompletions,
        ...getUserEnumCompletionLists(dynamic.userEnums, dynamic.declarationDocs.enumMembers),
    };

    for (const constType of ["Beam", "Effect", "DynamicEffect"]) {
        const baseList = baseConstantValueCompletions[constType];
        if (!baseList) {
            continue;
        }

        constantValueCompletions[constType] = {
            isIncomplete: false,
            items: baseList.items.filter((item) => {
                const constantEntry = constantValues[constType]?.[item.label];
                return !constantEntry || !("extension" in constantEntry) || dynamic.activatedExtensions.includes(constantEntry.extension ?? "<INVALID>");
            }),
        };
    }

    const defaultItems: Record<string, CompletionData> = {
        ...baseFunctionData,
        ...Object.fromEntries(
            Object.keys(constantValueCompletions).map((key) => {
                const doc = dynamic.declarationDocs.enums.get(key);
                return [key, { description: doc ? `${doc}\n\nThe \`${key}\` enum.` : `The \`${key}\` enum.` }];
            }),
        ),
        ...dynamic.normalAstConstants,
        ...dynamic.normalMacros,
        ...dynamic.normalAstMacros,
        ...dynamic.globalVariables,
        ...dynamic.subroutines,
    };

    const memberItems: Record<string, CompletionData> = {
        ...baseMemberFunctionData,
        ...dynamic.memberMacros,
        ...dynamic.memberAstConstants,
        ...dynamic.memberAstMacros,
        ...dynamic.playerVariables,
    };

    return {
        annotationCompletions: completionState.annotationCompletions,
        preprocessingCompletions: completionState.preprocessingCompletions,
        stringEntityCompletions: completionState.stringEntityCompletions,
        constantValueCompletions,
        defaultCompletions: makeCompletionList(defaultItems, CompletionItemKind.Function),
        functionRegistry: {
            ...baseFunctionData,
            ...baseMemberFunctionData,
            ...baseModuleFunctionData,
            ...dynamic.normalAstConstants,
            ...dynamic.normalMacros,
            ...dynamic.normalAstMacros,
            ...dynamic.memberAstConstants,
            ...dynamic.memberMacros,
            ...dynamic.memberAstMacros,
        },
        memberCompletions: makeCompletionList(memberItems, CompletionItemKind.Method),
    };
}

function makeDefaultConstantValueCompletions(): Record<string, CompletionList> {
    const allConstants = { ...constantValues, ...opyConstants, ...opyModules };
    const completionLists: Record<string, CompletionList> = {};

    for (const [key, value] of Object.entries(allConstants)) {
        if (key.startsWith("__") && key.endsWith("__")) {
            continue;
        }

        const normalizedKey = key.endsWith("Literal") ? key.substring(0, key.length - "Literal".length) : key;
        if (!isCompletionDataRecord(value)) {
            continue;
        }

        completionLists[normalizedKey] = makeCompletionList(filterOw2Values(value), CompletionItemKind.EnumMember);
    }

    return completionLists;
}

function getUserEnumCompletionLists(
    userEnums: Record<string, Record<string, Ast>>,
    memberDocs: Map<string, Map<string, string>>,
): Record<string, CompletionList> {
    const result: Record<string, CompletionList> = {};

    for (const [enumName, members] of Object.entries(userEnums)) {
        const enumMemberDocs = memberDocs.get(enumName);
        result[enumName] = {
            isIncomplete: false,
            items: Object.entries(members).map(([memberName, memberAst]) => {
                let description = "A user-defined enum member.";
                try {
                    description += `\n\nValue: \`${decompiler.astToOpy(memberAst)}\``;
                } catch (e) {}

                const doc = enumMemberDocs?.get(memberName);
                if (doc) {
                    description = `${doc}\n\n${description}`;
                }

                return makeCompletionItem(memberName, { description }, CompletionItemKind.EnumMember);
            }),
        };
    }

    return result;
}

function fillMacroCompletions(target: DynamicCompletionData, macros: MacroData[]): void {
    target.normalMacros = {};
    target.memberMacros = {};

    for (const macro of macros) {
        const convertedMacro: CompletionData = {
            args: macro.args ?? null,
            description: macro.isFunction && macro.isScript ? `This macro executes the script:\n  \`${macro.scriptPath}\`` : `This macro resolves to:\n\n\`\`\`\n${macro.replacement}\n\`\`\``,
        };

        let macroName = macro.name;
        if (macro.isFunction && macro.args.length > 0) {
            convertedMacro.args = macro.args.map((arg: string) => ({ name: arg, type: "Object" }));
        }

        if (macro.isMember) {
            target.memberMacros[macroName] = convertedMacro;
        } else {
            target.normalMacros[macroName] = convertedMacro;
        }
    }
}

function fillAstMacroCompletions(target: DynamicCompletionData, macros: AstMacroData[], docs: Map<string, string>): void {
    target.normalAstMacros = {};
    target.memberAstMacros = {};

    for (const macro of macros) {
        let minIndent = Math.min(...macro.linesStr.map((line) => line.match(/^\s*/)![0].length));
        const doc = docs.get((macro.class_ ?? "") + macro.name);
        const convertedMacro: CompletionData = {
            args: [],
            class: macro.class_,
            description: `${doc ? doc + "\n\n" : ""}This macro resolves to:\n\n\`\`\`\n${macro.linesStr.map((line) => line.substring(minIndent)).join("\n")}\n\`\`\``,
        };
        let macroName = macro.name;

        if (macro.args.length === 0) {
            macroName += "()";
        } else {
            convertedMacro.args = macro.args
                .filter((arg) => arg.name !== "self")
                .map((arg) => ({
                    name: arg.name,
                    type: arg.type,
                    default: arg.defaultStr,
                }));
        }

        if (macro.class_) {
            target.memberAstMacros[macroName.replace(".", "")] = convertedMacro;
        } else {
            target.normalAstMacros[macroName] = convertedMacro;
        }
    }
}

function fillAstConstantCompletions(target: DynamicCompletionData, constants: AstConstantData[], docs: Map<string, string>): void {
    target.normalAstConstants = {};
    target.memberAstConstants = {};

    for (const constant of constants) {
        const doc = docs.get((constant.class_ ?? "") + constant.name);
        const convertedConstant: CompletionData = {
            args: null,
            class: constant.class_,
            description: `${doc ? doc + "\n\n" : ""}This macro resolves to:\n\n\`\`\`\n${constant.valueStr}\n\`\`\``,
        };

        if (constant.class_) {
            target.memberAstConstants[constant.name.replace(".", "")] = convertedConstant;
        } else {
            target.normalAstConstants[constant.name] = convertedConstant;
        }
    }
}

function getVariableCompletions(
    variables: Variable[],
    scope: "global" | "player",
    docs: Map<string, string>,
): Record<string, CompletionData> {
    return Object.fromEntries(
        variables.map((variable) => {
            const base = variable.index !== -1 ? `A ${scope} variable. (index: ${variable.index})` : `A ${scope} variable.`;
            const doc = docs.get(variable.name);
            return [variable.name, { description: doc ? `${doc}\n\n${base}` : base }];
        }),
    );
}

function getSubroutineCompletions(
    subroutineNames: Subroutine[],
    docs: Map<string, string>,
): Record<string, CompletionData> {
    return Object.fromEntries(
        subroutineNames.map((subroutine) => {
            const base = subroutine.index ? `A subroutine. (index: ${subroutine.index})` : "A subroutine.";
            const doc = docs.get(subroutine.name);
            return [
                `${subroutine.name}()`,
                {
                    args: [],
                    description: doc ? `${doc}\n\n${base}` : base,
                },
            ];
        }),
    );
}

function makeCompletionList(obj: Record<string, unknown>, defaultKind: CompletionItemKind): CompletionList {
    return {
        isIncomplete: false,
        items: Object.keys(obj)
            .filter((key) => typeof obj[key] === "object" && obj[key] !== null && !(key.startsWith("__") && key.endsWith("__")))
            .map((key) => makeCompletionItem(key, obj[key] as CompletionData, getCompletionKind(key, obj[key] as CompletionData, defaultKind))),
    };
}

function makeCompletionItem(itemName: string, item: CompletionData, kind: CompletionItemKind): CompletionItem {
    const label = itemName.endsWith("()") ? itemName.substring(0, itemName.length - 2) : itemName;
    const completionItem: CompletionItem = {
        label,
        kind,
    };

    const documentation = generateDocumentation(itemName, item);
    if (documentation) {
        completionItem.documentation = {
            kind: MarkupKind.Markdown,
            value: documentation,
        };
    }

    const snippet = generateSnippet(itemName, item);
    if (snippet !== label) {
        completionItem.insertText = snippet;
        completionItem.insertTextFormat = InsertTextFormat.Snippet;
    }

    return completionItem;
}

function generateDocumentation(itemName: string, item: CompletionData): string {
    let result = typeof item.description === "string" ? item.description : "";
    const info: string[] = [];
    const isMemberFunction = item.isMember === true;

    if (Array.isArray(item.args) && (item.args.length > 1 || (item.args.length > 0 && !isMemberFunction))) {
        const args = item.args.slice(isMemberFunction ? 1 : 0).map((arg) => {
            const defaultText = arg.default !== undefined ? ` If omitted, defaults to \`${argDefaultToString(arg).replaceAll("_", "_\u200B")}\`.` : "";
            return `- \`${arg.name}${arg.default !== undefined ? "?" : ""}\`${arg.description ? `: ${arg.description}${arg.description.endsWith(".") ? "" : "."}` : ""}${defaultText}`;
        });
        info.push(`Arguments:\n${args.join("\n")}`);
    }

    if (isMemberFunction) {
        info.push("Class: `Player`");
    } else if (item.class) {
        info.push(`Class: \`${item.class}\``);
    }

    if (item.return !== undefined) {
        info.push(`Returns: \`${compiler.typeToString(item.return as Type)}\``);
    }

    if (item.extension) {
        info.push(`Part of extension \`${item.extension}\`.`);
    }

    if (item.macro) {
        info.push(`This macro resolves to:\n\`${item.macro.trim().replaceAll("$", "")}\``);
    }

    if (info.length > 0) {
        result += `${result ? "\n\n" : ""}${info.join("  \n")}`;
    }

    return result || (itemName ? `<no documentation found for \`${itemName}\`>` : "");
}

function generateSnippet(itemName: string, item: CompletionData): string {
    if (itemName.startsWith("@")) {
        return getSnippetForMetaRuleParam(itemName);
    }

    if (typeof item.snippet === "string") {
        return item.snippet;
    }

    if (!Array.isArray(item.args)) {
        return itemName;
    }

    const isMemberFunction = item.isMember === true;
    if (item.args.length === 0 || (item.args.length === 1 && isMemberFunction)) {
        return itemName.endsWith("()") ? itemName : `${itemName}()`;
    }

    return itemName;
}

function getSnippetForMetaRuleParam(param: string): string {
    if (param === "@Name") {
        return 'Name "$0"';
    }

    let result = param.substring(1);
    const ruleParam = opyAnnotations[param];
    if (ruleParam?.args?.[0]) {
        if (ruleParam.args[0].values) {
            result += ` \${1|${ruleParam.args[0].values.filter((value) => !(value.startsWith("__") && value.endsWith("__"))).join(",")}|}`;
        } else {
            result += " ";
        }
    }

    return result;
}

function argDefaultToString(arg: Argument): string {
    if (typeof arg.type === "string" && (arg.type in constantValues || arg.type in builtInEnumNameToAstInfo)) {
        return `${arg.type}.${arg.default}`;
    }

    return `${arg.default}`;
}

function getCompletionKind(itemName: string, item: CompletionData, defaultKind: CompletionItemKind): CompletionItemKind {
    if (itemName.startsWith("@")) {
        return CompletionItemKind.Property;
    }
    if (item.args === null) {
        return CompletionItemKind.Value;
    }
    if (Array.isArray(item.args)) {
        return item.isMember ? CompletionItemKind.Method : CompletionItemKind.Function;
    }
    if (defaultKind === CompletionItemKind.Function && itemName === itemName.toUpperCase()) {
        return CompletionItemKind.EnumMember;
    }
    return defaultKind;
}

function isCompletionDataRecord(value: unknown): value is Record<string, CompletionData> {
    return typeof value === "object" && value !== null && "description" in value;
}

function filterOw2Values(value: Record<string, CompletionData>): Record<string, CompletionData> {
    return Object.fromEntries(
        Object.entries(value).filter(([key, constant]) => key === "description" || !("onlyInOw1" in constant) || !constant.onlyInOw1),
    );
}

function isModuleFunctionEntry(
    entry: [string, string | { description: string; args: Argument[]; return: Type }],
): entry is [string, { description: string; args: Argument[]; return: Type }] {
    return typeof entry[1] !== "string";
}
