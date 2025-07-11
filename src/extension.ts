import * as vscode from "vscode";

// ! NOTE: Import order matters here! The order of imports will determine
// ! the order in which esbuild includes the files.
// !
// ! Yes, this sucks. Too bad!
import { decompileAllRules } from "./decompiler/decompiler";
import { compile } from "./compiler/compiler";
import { postInitialLoad, rootPath, overpyTemplate } from "./globalVars";
import { allFuncList, constantValuesCompLists, defaultCompList, fillAutocompletionAstMacros, fillAutocompletionConstants, fillAutocompletionEnums, fillAutocompletionMacros, fillAutocompletionSubroutines, fillAutocompletionVariables, memberCompletionItems, metaRuleParamsCompList, preprocessingDirectivesList, refreshAutoComplete, setActivatedExtensions, setAvailableExtensionPoints, setSpentExtensionPoints, stringEntitiesCompList } from "./autocomplete";
import { Argument, CompilationDiagnostic, OWLanguage, ow_languages } from "./types.d";
import { OpyError as OverpyError } from "./utils/logging";

export function activate(context: vscode.ExtensionContext) {
    postInitialLoad();
    const diagnostics = vscode.languages.createDiagnosticCollection('opy');

    vscode.commands.registerCommand("overpy.insertTemplate", () => {
        try {
            var editor = vscode.window.activeTextEditor;
            if (editor === undefined) {
                vscode.window.showErrorMessage("No active editor found. Please open a new editor tab before re-running this command.");
                return;
            }
            const position = editor.selection.active;
            editor.edit((editBuilder) => {
                editBuilder.insert(position, overpyTemplate);
            });
            vscode.window.showInformationMessage("Template successfully inserted!");
        } catch (e) {
            console.error(e);
            // @ts-ignore
            vscode.window.showErrorMessage("Error: " + e.message);
        }
    });

    vscode.commands.registerCommand("overpy.decompile", async () => {
        try {
            let clipboardContent = await vscode.env.clipboard.readText();
            if (clipboardContent.length === 0) {
                vscode.window.showErrorMessage("Clipboard is empty. Copy the workshop code you want to decompile, then re-run this command.");
                return;
            }

            const configuredLanguage = vscode.workspace.getConfiguration("overpy").workshopLanguage;
            if (Object.values(ow_languages).includes(configuredLanguage) === false) {
                vscode.window.showErrorMessage(`Configured OverPy language ${configuredLanguage} is not recognized as a supported language.`);
                return;
            }
            let decompiledText = decompileAllRules(clipboardContent, configuredLanguage as OWLanguage);
            vscode.env.clipboard.writeText(decompiledText);
            vscode.window.showInformationMessage("Successfully decompiled! (Decompiled code copied into clipboard)");
        } catch (e) {
            if (e instanceof Error) {
                showOverPyExtensionError(e.message);
            } else {
                console.error(e);
            }
        }
    });

    vscode.commands.registerCommand("overpy.compile", async () => {
        try {
            diagnostics.clear();
            let activeEditor = vscode.window.activeTextEditor;
            if (activeEditor === undefined) {
                vscode.window.showErrorMessage("No active text editor tab found. Please open a new editor tab before re-running this command.");
                return;
            }
            let mainFilePath = activeEditor.document.fileName.replace(/\\/g, "/");
            let mainFileName = mainFilePath.split("/").pop();
            let rootPath = mainFilePath.substring(0, mainFilePath.lastIndexOf("/") + 1);

            const configuredLanguage = vscode.workspace.getConfiguration("overpy").workshopLanguage;
            if (Object.values(ow_languages).includes(configuredLanguage) === false) {
                vscode.window.showErrorMessage(`Configured OverPy language ${configuredLanguage} is not recognized as a supported language.`);
                return;
            }
            const compileResult = await compile(activeEditor.document.getText(), configuredLanguage as OWLanguage, rootPath, mainFileName);
            for (let warning of compileResult.encounteredWarnings) {
                vscode.window.showWarningMessage(`Warning: ${warning.message}`);
            }
            applyCompilationDiagnostics(diagnostics, compileResult.encounteredWarnings);
            vscode.env.clipboard.writeText(compileResult.result);

            const showElementCount = vscode.workspace.getConfiguration("overpy").showElementCountOnCompile;
            vscode.window.showInformationMessage(`Successfully compiled! (copied into clipboard${showElementCount ? `; ${compileResult.nbElements} elements` : ""})`);

            fillAutocompletionMacros(compileResult.macros);
            fillAutocompletionAstMacros(Object.values(compileResult.astMacros));
            fillAutocompletionConstants(Object.values(compileResult.astConstants));
            fillAutocompletionVariables(compileResult.globalVariables, compileResult.playerVariables);
            fillAutocompletionSubroutines(compileResult.subroutines);
            fillAutocompletionEnums(compileResult.enumMembers);
            setActivatedExtensions(compileResult.activatedExtensions);
            setSpentExtensionPoints(compileResult.spentExtensionPoints);
            setAvailableExtensionPoints(compileResult.availableExtensionPoints);
            refreshAutoComplete();
        } catch (e) {
            if (e instanceof Error) {
                console.error(e);
                vscode.window.showErrorMessage("Error: " + e.message);

                if (e instanceof OverpyError) {
                    applyCompilationDiagnostics(diagnostics, [e]);
                }
            } else {
                console.error(e);
            }
        }
    });

    vscode.workspace.onDidSaveTextDocument((document) => {
        if (document.languageId === "overpy" && document.uri.scheme === "file" && vscode.workspace.getConfiguration("overpy").compileOnSave && (!vscode.workspace.getConfiguration("overpy").onlySaveOnMainFile || !document.getText().startsWith("#!mainFile "))) {
            vscode.commands.executeCommand("overpy.compile");
        }
    });

    vscode.workspace.onDidOpenTextDocument((document) => {
        if (document.languageId === "overpy" && vscode.workspace.getConfiguration("overpy").addTemplateOnNewFile && document.getText().length === 0) {
            vscode.window.showTextDocument(document, vscode.ViewColumn.Active, false).then((editor) => {
                editor.edit((editBuilder) => {
                    editBuilder.insert(new vscode.Position(0, 0), overpyTemplate);
                });
            });
        }
    });

    //Set the word pattern to not include words right before quotes, else we get the default text-based suggestions for string modifiers
    vscode.languages.setLanguageConfiguration("overpy", {
        wordPattern: /(-?\d*\.\d\w*)|([\w]+(?!["']))/g,
    });

    vscode.languages.registerCompletionItemProvider(
        "overpy",
        {
            provideCompletionItems(document, position, token, context) {
                try {
                    if (context.triggerCharacter === ".") {
                        let range = document.getWordRangeAtPosition(position.translate(0, -1));

                        if (range === undefined) {
                            //No word; probably a parenthesis.
                            return memberCompletionItems;
                        } else {
                            var word = document.getText(range);
                            if (word in constantValuesCompLists) {
                                return constantValuesCompLists[word];

                                //do not return completion suggestions for number decimals
                            } else if (isNaN(Number.parseFloat(word))) {
                                return memberCompletionItems;
                            }
                        }
                    } else if (context.triggerCharacter === "@") {
                        return metaRuleParamsCompList;
                    } else if (context.triggerCharacter === "!") {
                        if (document.getText(new vscode.Range(position.translate(0, -2), position.translate(0, -1))) === "#") {
                            return preprocessingDirectivesList;
                        } else {
                            return;
                        }
                    } else if (context.triggerCharacter === "&") {
                        //delete the '&'
                        /*vscode.window.showTextDocument(document, vscode.ViewColumn.Active, false).then(editor => {
                        editor.edit(editBuilder => {
                            editBuilder.delete(new vscode.Range(position.translate(0, -1), position));
                        });
                    });*/
                        if (document.getText(new vscode.Range(position.translate(0, -2), position.translate(0, -1))) === "\\") {
                            return stringEntitiesCompList;
                        } else {
                            return;
                        }
                    } else {
                        //Don't trigger autocompletion for string modifiers
                        if (["\"", "'"].includes(document.getText(new vscode.Range(position.translate(0, 0), position.translate(0, 1))))) {
                            return;
                        }
                        return defaultCompList;
                    }
                } catch (e) {
                    console.error(e);
                }
            },
        },
        ".",
        "@",
        "!",
        "&",
    );

    vscode.languages.registerSignatureHelpProvider(
        "overpy",
        {
            provideSignatureHelp(document, position, token, context) {
                try {
                    if (context.triggerCharacter === ")") {
                        return;
                    }
                    let funcName = null;
                    let currentArgNb = 0;
                    let parenthesisLevel = 0;
                    let i = -1;
                    let isInString = false;
                    let currentStringChar = "";
                    let potentialKeywordArg = null;
                    let equalsSignPos = null;
                    for (; i >= -position.character + 1; i--) {
                        let currentChar = document.getText(new vscode.Range(position.translate(0, i + 1), position.translate(0, i)));
                        if (!isInString) {
                            if (currentChar === ")" || currentChar === "]" || currentChar === "}") {
                                parenthesisLevel++;
                            } else if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
                                parenthesisLevel--;
                                if (parenthesisLevel < 0 && currentChar === "(") {
                                    break;
                                }
                            } else if (currentChar === '"' || currentChar === "'") {
                                isInString = true;
                                currentStringChar = currentChar;
                            } else if (parenthesisLevel === 0 && currentChar === ",") {
                                currentArgNb++;
                                if (equalsSignPos !== null) {
                                    potentialKeywordArg = document.getText(new vscode.Range(position.translate(0, i+1), position.translate(0, equalsSignPos))).trim();
                                }
                            } else if (parenthesisLevel === 0 && currentArgNb === 0 && currentChar === "=" && equalsSignPos === null) {
                                equalsSignPos = i;
                            }
                        } else {
                            if (currentChar === currentStringChar && (i === 0 || document.getText(new vscode.Range(position.translate(0, i), position.translate(0, i - 1))) !== "\\")) {
                                isInString = false;
                            }
                        }
                    }
                    if (isInString) {
                        return;
                    }
                    //get keyword arg for first argument (as there is no comma)
                    if (equalsSignPos !== null && potentialKeywordArg === null) {
                        potentialKeywordArg = document.getText(new vscode.Range(position.translate(0, i+1), position.translate(0, equalsSignPos))).trim();
                    }
                    console.log("potentialKeywordArg: '" + potentialKeywordArg+"'");
                    var range = document.getWordRangeAtPosition(position.translate(0, i));
                    if (range !== undefined) {
                        funcName = document.getText(range);
                    } else {
                        return;
                    }

                    if (funcName in allFuncList) {
                        if ("sigHelp" in allFuncList[funcName] && allFuncList[funcName].sigHelp !== null) {
                            if (potentialKeywordArg !== null && (allFuncList[funcName].args as Argument[] || []).map(x => x.name).includes(potentialKeywordArg)) {
                                currentArgNb = (allFuncList[funcName].args as Argument[]).map(x => x.name).indexOf(potentialKeywordArg);
                            }
                            (allFuncList[funcName].sigHelp as vscode.SignatureHelp).activeParameter = currentArgNb;
                            return allFuncList[funcName].sigHelp as vscode.SignatureHelp;
                        }
                    }
                    return;
                } catch (e) {
                    console.log(e);
                }
            },
        },
        ",",
        "(",
        ")",
    );
}

export function showOverPyExtensionError(message: string): void {
    vscode.window.showErrorMessage(`Error: ${message}. Please ensure the code is copied directly from Overwatch. If it is, contact CactusPuppy about this.`);
}

async function applyCompilationDiagnostics(diagnostics: vscode.DiagnosticCollection, content: CompilationDiagnostic[]) {
    const apply = new Map<string, vscode.Diagnostic[]>;

    // Collect all diagnostics first.
    for (const item of content) {
        // Place the error on the last item in the stack. Skip macro locations.
        const fileInfo = item.fileStack?.findLast(fileStack => fileStack.staticMember);

        // If path information is missing, ignore this diagnostic.
        if (!fileInfo || !(fileInfo.path ?? rootPath)) continue;

        // Use `fileInfo.path` if is is provided. Trigger document is
        // extracted with `rootPath` and `fileInfo.name`.
        const fullPath = fileInfo.path ?? rootPath + fileInfo.name;

        // Add the file to the diagnostics map.
        if (!apply.has(fullPath)) {
            apply.set(fullPath, []);
        }

        if (fileInfo.startLine === null || fileInfo.startCol === null) {
            continue;
        }

        const startPos = new vscode.Position(fileInfo.startLine - 1, fileInfo.startCol - 1);
        const endPos = fileInfo.endLine !== null && fileInfo.endCol !== null ? new vscode.Position(fileInfo.endLine - 1, fileInfo.endCol - 1) : startPos;
        const range = new vscode.Range(startPos, endPos);

        apply.get(fullPath)?.push({
            message: item.message,
            severity: item.severity === 'error' ? vscode.DiagnosticSeverity.Error : vscode.DiagnosticSeverity.Warning,
            range: range
        });
    }

    // Apply all diagnostics at once.
    for (const [fileName, list] of apply.entries()) {
        const uri = vscode.Uri.parse("file:///" + fileName);
        diagnostics.set(uri, list);
    }
}
