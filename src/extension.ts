import * as vscode from "vscode";

import { decompileAllRules } from "./decompiler/decompiler";

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

            let decompiledText = decompileAllRules(clipboardContent, vscode.workspace.getConfiguration("overpy").workshopLanguage);
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
}
