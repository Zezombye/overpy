import * as vscode from "vscode";

// ! NOTE: Import order matters here! The order of imports will determine
// ! the order in which esbuild includes the files.
// !
// ! Yes, this sucks. Too bad!
import { decompileAllRules } from "./decompiler/decompiler";
import { compile } from "./compiler/compiler";
import { postInitialLoad } from "./globalVars";
import {
  allFuncList,
  constantValuesCompLists,
  defaultCompList,
  fillAutocompletionEnums,
  fillAutocompletionMacros,
  fillAutocompletionSubroutines,
  fillAutocompletionVariables,
  memberCompletionItems,
  metaRuleParamsCompList,
  preprocessingDirectivesList,
  refreshAutoComplete,
  setActivatedExtensions,
  setAvailableExtensionPoints,
  setSpentExtensionPoints,
  stringEntitiesCompList,
} from "./autocomplete";
import { OWLanguage, ow_languages } from "./types.d";

const overpyTemplate = `
#OverPy starter pack

settings {
    "main": {
        "description": "Some awesome game mode"
    },
    "gamemodes": {
        "skirmish": {
            "enabledMaps": [
                "workshopIsland"
            ]
        },
        "general": {
            "heroLimit": "off",
            "respawnTime%": 30
        }
    }
}

rule "Teleport player on pressing interact":
    @Event eachPlayer
    @Condition eventPlayer.isHoldingButton(Button.INTERACT)
    eventPlayer.teleport(eventPlayer.getEyePosition() + eventPlayer.getFacingDirection()*5)
    #Hold the player in place, to reset falling velocity
    eventPlayer.startForcingPosition(eventPlayer.getPosition(), false)
    wait()
    eventPlayer.stopForcingPosition()

rule "Display position":
    @Event eachPlayer
    print("Position of {}: {}".format(eventPlayer, eventPlayer.getPosition()))
`;

export function activate(context: vscode.ExtensionContext) {
  postInitialLoad();

  vscode.commands.registerCommand("overpy.insertTemplate", () => {
    try {
      var editor = vscode.window.activeTextEditor;
      if (editor === undefined) {
        vscode.window.showErrorMessage(
          "No active editor found. Please open a new editor tab before re-running this command.",
        );
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
        vscode.window.showErrorMessage(
          "Clipboard is empty. Copy the workshop code you want to decompile, then re-run this command.",
        );
        return;
      }

      const configuredLanguage =
        vscode.workspace.getConfiguration("overpy").workshopLanguage;
      if (Object.values(ow_languages).includes(configuredLanguage) === false) {
        vscode.window.showErrorMessage(
          `Configured OverPy language ${configuredLanguage} is not recognized as a supported language.`,
        );
        return;
      }
      let decompiledText = decompileAllRules(
        clipboardContent,
        configuredLanguage as OWLanguage,
      );
      vscode.env.clipboard.writeText(decompiledText);
      vscode.window.showInformationMessage(
        "Successfully decompiled! (Decompiled code copied into clipboard)",
      );
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
      let activeEditor = vscode.window.activeTextEditor;
      if (activeEditor === undefined) {
        vscode.window.showErrorMessage(
          "No active text editor tab found. Please open a new editor tab before re-running this command.",
        );
        return;
      }
      let rootPath = activeEditor.document.fileName;
      rootPath = rootPath.replace(/\\/g, "/");
      rootPath = rootPath.substring(0, rootPath.lastIndexOf("/") + 1);

      const configuredLanguage =
        vscode.workspace.getConfiguration("overpy").workshopLanguage;
      if (Object.values(ow_languages).includes(configuredLanguage) === false) {
        vscode.window.showErrorMessage(
          `Configured OverPy language ${configuredLanguage} is not recognized as a supported language.`,
        );
        return;
      }
      const compileResult = await compile(
        activeEditor.document.getText(),
        configuredLanguage as OWLanguage,
        rootPath,
      );
      for (let warning of compileResult.encounteredWarnings) {
        vscode.window.showWarningMessage(`Warning: ${warning}`);
      }
      vscode.env.clipboard.writeText(compileResult.result);

      const showElementCount =
        vscode.workspace.getConfiguration("overpy").showElementCountOnCompile;
      vscode.window.showInformationMessage(
        `Successfully compiled! (copied into clipboard${showElementCount ? `; ${compileResult.nbElements} elements` : ""})`,
      );

      fillAutocompletionMacros(compileResult.macros);
      fillAutocompletionVariables(
        compileResult.globalVariables,
        compileResult.playerVariables,
      );
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
      } else {
        console.error(e);
      }
    }
  });

  vscode.workspace.onDidSaveTextDocument((document) => {
    if (
      document.languageId === "overpy" &&
      document.uri.scheme === "file" &&
      vscode.workspace.getConfiguration("overpy").compileOnSave &&
      (!vscode.workspace.getConfiguration("overpy").onlySaveOnMainFile ||
        !document.getText().startsWith("#!mainFile "))
    ) {
      vscode.commands.executeCommand("overpy.compile");
    }
  });

  vscode.workspace.onDidOpenTextDocument((document) => {
    if (
      document.languageId === "overpy" &&
      vscode.workspace.getConfiguration("overpy").addTemplateOnNewFile &&
      document.getText().length === 0
    ) {
      vscode.window
        .showTextDocument(document, vscode.ViewColumn.Active, false)
        .then((editor) => {
          editor.edit((editBuilder) => {
            editBuilder.insert(new vscode.Position(0, 0), overpyTemplate[0]);
          });
        });
    }
  });

  vscode.languages.registerCompletionItemProvider(
    "overpy",
    {
      provideCompletionItems(document, position, token, context) {
        //console.log(document.getText(document.getWordRangeAtPosition(position)));
        try {
          if (context.triggerCharacter === ".") {
            let range = document.getWordRangeAtPosition(
              position.translate(0, -1),
            );

            if (range === undefined) {
              //No word; probably a parenthesis.
              return memberCompletionItems;
            } else {
              var word = document.getText(range);
              if (word in constantValuesCompLists) {
                console.log(constantValuesCompLists[word]);
                return constantValuesCompLists[word];

                //do not return completion suggestions for number decimals
              } else if (isNaN(Number.parseFloat(word))) {
                return memberCompletionItems;
              }
            }
          } else if (context.triggerCharacter === "@") {
            return metaRuleParamsCompList;
          } else if (context.triggerCharacter === "!") {
            if (
              document.getText(
                new vscode.Range(
                  position.translate(0, -2),
                  position.translate(0, -1),
                ),
              ) === "#"
            ) {
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
            if (
              document.getText(
                new vscode.Range(
                  position.translate(0, -2),
                  position.translate(0, -1),
                ),
              ) === "\\"
            ) {
              return stringEntitiesCompList;
            } else {
              return;
            }
          } else {
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
          //console.log("Finding position");
          for (; i >= -position.character + 1; i--) {
            let currentChar = document.getText(
              new vscode.Range(
                position.translate(0, i + 1),
                position.translate(0, i),
              ),
            );
            //console.log("char: "+currentChar+", is in string: "+isInString+", string char: "+currentStringChar);
            if (!isInString) {
              if (
                currentChar === ")" ||
                currentChar === "]" ||
                currentChar === "}"
              ) {
                parenthesisLevel++;
              } else if (
                currentChar === "(" ||
                currentChar === "[" ||
                currentChar === "{"
              ) {
                parenthesisLevel--;
                if (parenthesisLevel < 0 && currentChar === "(") {
                  break;
                }
              } else if (currentChar === '"' || currentChar === "'") {
                isInString = true;
                currentStringChar = currentChar;
              } else if (parenthesisLevel === 0 && currentChar === ",") {
                currentArgNb++;
              }
            } else {
              if (
                currentChar === currentStringChar &&
                (i === 0 ||
                  document.getText(
                    new vscode.Range(
                      position.translate(0, i),
                      position.translate(0, i - 1),
                    ),
                  ) !== "\\")
              ) {
                isInString = false;
              }
            }
          }
          if (isInString) {
            return;
          }
          var range = document.getWordRangeAtPosition(position.translate(0, i));
          if (range !== undefined) {
            funcName = document.getText(range);
          } else {
            return;
          }

          console.log(funcName);
          if (funcName in allFuncList) {
            console.log(allFuncList[funcName]);
            console.log(
              "current arg for func " + funcName + " is " + currentArgNb,
            );
            if (
              "sigHelp" in allFuncList[funcName] &&
              allFuncList[funcName].sigHelp !== null
            ) {
              (
                allFuncList[funcName].sigHelp as vscode.SignatureHelp
              ).activeParameter = currentArgNb;
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
  vscode.window.showErrorMessage(
    `Error: ${message}, contact CactusPuppy about this.`,
  );
}
