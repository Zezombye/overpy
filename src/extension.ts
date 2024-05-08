import * as vscode from "vscode";

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
      const position = editor.selection.active;
      vscode.window.activeTextEditor.edit(editBuilder => {
          editBuilder.insert(position, overpyTemplate);
      });

      vscode.window.showInformationMessage("Template successfully inserted!");

    } catch (e) {
      console.error(e);
      vscode.window.showErrorMessage("Error: "+e.message);
    }
  });
}
