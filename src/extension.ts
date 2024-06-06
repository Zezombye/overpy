import * as vscode from "vscode";

import { decompileAllRules } from "./decompiler/decompiler";
import { compile } from "./compiler/compiler";
import { postInitialLoad } from "./globalVars";
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

    vscode.commands.registerCommand('overpy.insertTemplate', () => {
        try {

            var editor = vscode.window.activeTextEditor;
            if (editor === undefined) {
                vscode.window.showErrorMessage("No active editor found. Please open a new editor tab before re-running this command.");
                return;
            }
            const position = editor.selection.active;
            editor.edit(editBuilder => {
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
                vscode.window.showErrorMessage(`Error: ${e.message}, contact CactusPuppy about this.`);
            } else {
                console.error(e);
            }
        }
    });

    vscode.commands.registerCommand('overpy.compile', async () => {
        try {
            let activeEditor = vscode.window.activeTextEditor;
            if (activeEditor === undefined) {
                vscode.window.showErrorMessage("No active text editor tab found. Please open a new editor tab before re-running this command.");
                return;
            }
            let rootPath = activeEditor.document.fileName;
            rootPath = rootPath.replace(/\\/g, "/");
            rootPath = rootPath.substring(0, rootPath.lastIndexOf('/') + 1);

            const configuredLanguage = vscode.workspace.getConfiguration("overpy").workshopLanguage;
            if (Object.values(ow_languages).includes(configuredLanguage) === false) {
                vscode.window.showErrorMessage(`Configured OverPy language ${configuredLanguage} is not recognized as a supported language.`);
                return;
            }
            const compileResult = await compile(activeEditor.document.getText(), configuredLanguage as OWLanguage);
            for (let warning of compileResult.encounteredWarnings) {
                vscode.window.showWarningMessage(`Warning: ${warning}`);
            }
            vscode.env.clipboard.writeText(compileResult.result);

            const showElementCount = vscode.workspace.getConfiguration("overpy").showElementCountOnCompile;
            vscode.window.showInformationMessage(`Successfully compiled! (copied into clipboard${showElementCount ? `; ${compileResult.nbElements} elements` : ""})`);

            // TODO: update autocomplete
        } catch (e) {
            if (e instanceof Error) {
                console.error(e);
                vscode.window.showErrorMessage("Error: "+e.message);
            } else {
                console.error(e);
            }
        }
    });
}
