/*
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const actionKw =
//begin-json
{
    "return": {
        "description": "Stops execution of the action list.",
        "args": null,
        "guid": "00000000BB09",
        "return": "void",
        "en-US": "Abort",
        "es-MX": "Abortar",
        "fr-FR": "Interrompre",
        "ja-JP": "中止",
        "pt-BR": "Anular",
        "zh-CN": "中止",
        "descriptionLocalized": {
            "guid": "00000000BD5D",
            "en-US": "Stops execution of the Action list.",
            "de-DE": "Beendet die Ausführung der Aktionsliste.",
            "es-ES": "Detiene la ejecución de la lista de acciones.",
            "es-MX": "Detiene la ejecución de la lista de acciones.",
            "fr-FR": "Stoppe l’exécution de la liste d’actions.",
            "it-IT": "Interrompe l'esecuzione della lista Azioni.",
            "ja-JP": "アクション・リストの実行を停止する",
            "ko-KR": "액션 목록 실행을 중지합니다.",
            "pl-PL": "Zatrzymuje uruchomienie listy działań.",
            "pt-BR": "Interrompe a execução da lista de Ações.",
            "ru-RU": "Останавливает выполнение действий по списку.",
            "zh-CN": "停止执行动作列表。"
        }
    },
    "__abortIf__": {
        "description": "Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the execution is stopped.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000BB04",
        "return": "void",
        "en-US": "Abort If",
        "es-MX": "Abortar si",
        "fr-FR": "Interrompre si",
        "ja-JP": "中止する条件",
        "pt-BR": "Anular se",
        "zh-CN": "根据条件中止",
        "descriptionLocalized": {
            "guid": "00000000BD5E",
            "en-US": "Stops execution of the Action list if this Action's Condition evaluates to true. If it does not execution continues with the next Action.",
            "de-DE": "Beendet die Ausführung der Aktionsliste wenn die Bedingung dieser Aktion True ist. Ist sie es nicht fährt die Ausführung mit der nächsten Aktion fort.",
            "es-ES": "Detiene la ejecución de la lista de acciones si la condición de esta acción se evalúa como verdadera; en caso contrario la ejecución continúa con la siguiente acción.",
            "es-MX": "Detiene la ejecución de la lista de acciones si la condición de esta acción es verdadera. Si no es verdadera la ejecución continuará con la siguiente acción.",
            "fr-FR": "Stoppe l’exécution de la liste d’actions si la condition de cette action est évaluée comme vraie. Dans le cas contraire l’exécution continue lors de l’action suivante.",
            "it-IT": "Interrompe l'esecuzione della lista Azioni se questa Condizione dell'Azione è vera. Se non lo è l'esecuzione continua con l'Azione successiva.",
            "ja-JP": "アクションの条件が「TRUE」に変わった場合、アクション・リストの実行を停止する。スキップできない場合、次のアクションが実行される",
            "ko-KR": "이 액션의 조건이 참일 때 액션 목록 실행을 중지합니다. 그 외의 경우 다음 액션으로 진행합니다.",
            "pl-PL": "Zatrzymuje uruchomienie listy działań jeśli warunek działania jest prawdą. Jeśli nie uruchomienie będzie kontynuowane od następnego działania.",
            "pt-BR": "Interrompe a execução da lista de Ações se a Condição dessa Ação for avaliada como verdadeira. Se não for a execução passa para a Ação seguinte.",
            "ru-RU": "Останавливает выполнение действий по списку действий если условие данного действия выполняется. Если условие не выполняется происходит переход к следующему действию.",
            "zh-CN": "如果此动作的条件为”真“，则停止执行动作列表。否则，则继续执行下一条动作。"
        }
    },
    "__abortIfConditionIsFalse__": {
        "description": "Stops execution of the action list if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action.",
        "args": [],
        "guid": "00000000BB02",
        "return": "void",
        "en-US": "Abort If Condition Is False",
        "es-MX": "Abortar si la condición es falsa",
        "fr-FR": "Interrompre si la condition est fausse",
        "ja-JP": "条件が「FALSE」の場合中止",
        "pt-BR": "Anular se a Condição for Falsa",
        "zh-CN": "如条件为“假”则中止",
        "descriptionLocalized": {
            "guid": "00000000BD61",
            "en-US": "Stops execution of the Action list if at least one Condition in the Condition list is false. If all Conditions are true execution continues with the next Action.",
            "de-DE": "Beendet die Ausführung der Aktionsliste wenn mindestens eine Bedingung in der Bedingungsliste False ist. Wenn alle Bedingungen True sind fährt die Ausführung mit der nächsten Aktion fort.",
            "es-ES": "Detiene la ejecución de la lista de acciones si al menos una condición en la lista de condiciones es falsa. Si todas las condiciones son verdaderas la ejecución continúa con la siguiente acción.",
            "es-MX": "Detiene la ejecución de la lista de acciones si al menos una condición en la lista de condiciones es falsa. Si todas las condiciones son verdaderas la ejecución continuará con la siguiente acción.",
            "fr-FR": "Stoppe l’exécution de la liste d’actions si au moins une condition de la liste de conditions est fausse. Si toutes les conditions sont vraies l’exécution se poursuit lors de l’action suivante.",
            "it-IT": "Interrompe l'esecuzione della lista Azioni se almeno una Condizione della Lista Condizioni è vera. Se tutte le Condizioni sono vere l'esecuzione continua con l'Azione successiva.",
            "ja-JP": "条件リストの条件が1つ以上「FALSE」だった場合、アクション・リストの実行を停止する。すべての条件が「TRUE」である場合、引き続き次のアクションを実行する",
            "ko-KR": "조건 목록에 있는 조건 중 하나 이상이 거짓인 경우 액션 목록의 실행을 중지합니다. 모든 조건이 참인 경우 다음 액션으로 진행합니다.",
            "pl-PL": "Zatrzymuje uruchomienie listy działań jeśli przynajmniej jeden warunek z listy warunków jest fałszem. Jeśli wszystkie warunki są prawdą uruchomienie będzie kontynuowane od następnego działania.",
            "pt-BR": "Interrompe a execução da lista de Ações se pelo menos uma Condição na lista de Condições for falsa. Se todas as Condições forem verdadeiras a execução passa para a Ação seguinte.",
            "ru-RU": "Останавливает выполнение действий по списку действий если хотя бы одно условие из списка условий вернет ложное значение False. Если выполняются все условия происходит переход к следующему действию.",
            "zh-CN": "如果条件列表中至少有一项条件为“假”，则停止执行动作列表。如果所有条件均为”真“，则继续执行下一条动作。"
        }
    },
    "__abortIfConditionIsTrue__": {
        "description": "Stops execution of the action list if all conditions in the condition list are true. If any are false, execution continues with the next action.",
        "args": [],
        "guid": "00000000BB03",
        "return": "void",
        "en-US": "Abort If Condition Is True",
        "es-MX": "Abortar si la condición es verdadera",
        "fr-FR": "Interrompre si la condition est vraie",
        "ja-JP": "条件が「TRUE」の場合中止",
        "pt-BR": "Anular se a Condição for Verdadeira",
        "zh-CN": "如条件为”真“则中止",
        "descriptionLocalized": {
            "guid": "00000000BD60",
            "en-US": "Stops execution of the Action list if all Conditions in the Condition list are true. If any are false execution continues with the next Action.",
            "de-DE": "Beendet die Ausführung der Aktionsliste wenn alle Bedingungen in der Bedingungsliste True sind. Sind Bedingungen False fährt die Ausführung mit der nächsten Aktion fort.",
            "es-ES": "Detiene la ejecución de la lista de acciones si todas las condiciones en la lista de condiciones son verdaderas. Si alguna es falsa la ejecución continúa con la siguiente acción.",
            "es-MX": "Detiene la ejecución de la lista de acciones si todas las condiciones de la lista de condiciones son verdaderas. Si alguna es falsa la ejecución continuará con la siguiente acción.",
            "fr-FR": "Stoppe l’exécution de la liste d’actions si toutes les conditions de la liste de conditions sont vraies. Si une seule condition est fausse l’exécution se poursuit lors de l’action suivante.",
            "it-IT": "Interrompe l'esecuzione della lista Azioni se tutte le Condizioni della Lista Condizioni sono vere. Se non lo sono l'esecuzione continua con l'Azione successiva.",
            "ja-JP": "条件リストの条件がすべて「TRUE」である場合、アクション・リストの実行を停止する。いずれかの条件が「FALSE」の場合、次のアクションを実行する",
            "ko-KR": "조건 목록에 있는 조건 모두가 참인 경우 액션 목록의 실행을 중지합니다. 조건이 하나라도 거짓인 경우 다음 액션으로 진행합니다.",
            "pl-PL": "Zatrzymuje uruchomienie listy działań jeśli wszystkie warunki z listy warunków są prawdą. Jeśli jakikolwiek jest fałszem uruchomienie będzie kontynuowane od następnego działania.",
            "pt-BR": "Interrompe a execução da lista de Ações se todas as Condições na lista de Condições forem verdadeiras. Se qualquer uma for falsa a execução passa para a Ação seguinte.",
            "ru-RU": "Останавливает выполнение действий по списку действий если все условия из списка условий вернут верное значение True. Если любое из условий не выполняется происходит переход к следующему действию.",
            "zh-CN": "如果条件列表中所有条件均为”真“，则停止执行动作列表。如果有任何一条为“假”，则继续执行下一条动作。"
        }
    },
    "_&addHealthPool": {
        "description": "Adds a temporary health pool to a player or players. This health pool can be referenced using the Last Created Health Pool value. Up to 16 health pools of a given health type (health, armor, or shields) may exist on a player (including base pools and pools generated by abilities).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement collision is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Health Type",
                "description": "Specifies the type of health (Armor or shields) contained in the Health Pool.",
                "type": "Health",
                "default": "Armor"
            },
            {
                "name": "Max Health",
                "description": "The size of the health pool",
                "type": "unsigned float",
                "default": 100
            },
            {
                "name": "Is Recoverable",
                "description": "Whether health in this pool can be healed once it is lost. If this is value is false, then the health pool will shrink and disappear as it is damaged.",
                "type": "bool",
                "default": "true"
            },
            {
                "name": "REEVALUATION",
                "description": "If set to true and Recoverable is also true, then Max Health will be reevaluated every frame. Else, Max Health is only evaluated once when this action executes.",
                "type": "bool",
                "default": "true"
            }
        ],
        "return": "void",
        "guid": "000000011423",
        "en-US": "Add Health Pool To Player",
        "es-MX": "Añadir cantidad de salud a jugador",
        "fr-FR": "Ajouter une réserve de points de vie à un joueur",
        "ja-JP": "プレイヤーにライフプールを追加",
        "pt-BR": "Adicionar Reserva de Vida para Jogador",
        "zh-CN": "为玩家添加生命池",
        "descriptionLocalized": {
            "en-US": "Adds a temporary health pool to a player or players. This health pool can be referenced using the Last Created Health Pool value. Up to 16 health pools of a given health type (health, armor, or shields) may exist on a player (including base pools and pools generated by abilities).",
            "guid": "<unknown guid>"
        }
    },
    "_&allowButton": {
        "description": "Undoes the effect of the disallow button action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose button is being reenabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is being reenabled.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            }
        ],
        "guid": "00000000B9D0",
        "return": "void",
        "en-US": "Allow Button",
        "es-MX": "Habilitar botón",
        "fr-FR": "Autoriser un bouton",
        "ja-JP": "ボタンを有効化",
        "pt-BR": "Permitir Botão",
        "zh-CN": "可用按钮",
        "descriptionLocalized": {
            "guid": "00000000BD25",
            "en-US": "Undoes the effect of the Disallow Button Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disallow Button] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disallow Button» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar botón de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Interdire le bouton » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disallow Button per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対する「ボタンを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disallow Button 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disallow Button” Zablokuj przycisk dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Proibir Botão para um ou mais Jogadores.",
            "ru-RU": "Отменяет эффект действия [Disallow Button] для одного или нескольких игроков.",
            "zh-CN": "取消“禁用按钮”动作的效果。"
        }
    },
    "_&applyImpulse": {
        "description": "Applies an instantaneous change in velocity to the movement of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose velocity will be changed.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the impulse will be applied. This value is normalized internally.",
                "type": "Direction",
                "default": "VECTOR"
            },
            {
                "name": "SPEED",
                "description": "The magnitude of the change to the velocities of the player or players.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "Relativity",
                "default": "TO WORLD"
            },
            {
                "name": "MOTION",
                "description": "Specifies whether existing velocity that is counter to direction should first be cancelled out before applying the impulse.",
                "type": "Impulse",
                "default": "CANCEL CONTRARY MOTION"
            }
        ],
        "guid": "0000000078F6",
        "return": "void",
        "en-US": "Apply Impulse",
        "es-MX": "Aplicar impulso",
        "fr-FR": "Appliquer une impulsion",
        "ja-JP": "推進力を適用",
        "pt-BR": "Aplicar Impulso",
        "zh-CN": "施加推力",
        "descriptionLocalized": {
            "guid": "00000000BC7C",
            "en-US": "Applies an instantaneous change in velocity to the movement of one or more Players.",
            "de-DE": "Eine sofortige Änderung des Geschwindigkeitsvektors eines oder mehrerer Spieler.",
            "es-ES": "Aplica un cambio instantáneo de velocidad direccional al movimiento de uno o más jugadores.",
            "es-MX": "Aplica un cambio instantáneo en la velocidad del movimiento de uno o más jugadores.",
            "fr-FR": "Applique une modification de vélocité instantanée au mouvement d’un ou plusieurs joueurs.",
            "it-IT": "Applica un cambiamento istantaneo alla Velocità Direzionale di movimento di uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーの移動時の速度を即座に変更する",
            "ko-KR": "플레이어의 움직임에 즉각적인 속도 변화를 줍니다.",
            "pl-PL": "Zastosowuje natychmiastową zmianę prędkości ruchu jednego lub więcej graczy.",
            "pt-BR": "Aplica uma alteração instantânea de velocidade na movimentação de um ou mais Jogadores.",
            "ru-RU": "Мгновенно изменяет векторную скорость движения одного или нескольких игроков.",
            "zh-CN": "立即使一名或多名玩家的移动速度发生改变。"
        }
    },
    "_&attachTo": {
        "description": "Attaches the player (the 'child') to another player (the 'parent'). Once attached, the child will be unable to move freely until detached or teleported away. Multiple children may be attached to the same parent, but not vice versa.",
        "args": [
            {
                "name": "CHILD",
                "description": "The player that will attach to the parent. This player will be unable to move freely until detached or teleported away.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "PARENT",
                "description": "The player to whom the child will attach. This player's movement will be unaffected and will determine the child's position.",
                "type": "Player",
                "default": "LAST CREATED ENTITY"
            },
            {
                "name": "OFFSET",
                "description": "The coordinates of the child relative to the parent. For example, `vect(1,2,0)` would be above and to the left of the parent's head.",
                "type": "Position",
                "canReplaceNullVectorByNull": true,
                "default": "VECTOR"
            }
        ],
        "return": "void",
        "guid": "000000010E4F",
        "en-US": "Attach Players",
        "es-MX": "Anexar jugadores",
        "fr-FR": "Attacher les joueurs",
        "ja-JP": "プレイヤーをくっつける",
        "pt-BR": "Unir Jogadores",
        "zh-CN": "绑定玩家",
        "descriptionLocalized": {
            "en-US": "Attaches the player (the 'child') to another player (the 'parent'). Once attached, the child will be unable to move freely until detached or teleported away. Multiple children may be attached to the same parent, but not vice versa.",
            "guid": "<unknown guid>"
        }
    },
    "bigMessage": {
        "description": "Displays a large message above the reticle that is visible to specific players.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the message.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The message to be displayed.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "STRING"
            }
        ],
        "guid": "00000000BA88",
        "return": "void",
        "en-US": "Big Message",
        "es-MX": "Mensaje grande",
        "fr-FR": "Message en grand",
        "ja-JP": "大きなメッセージ",
        "pt-BR": "Mensagem Grande",
        "zh-CN": "大字体信息",
        "descriptionLocalized": {
            "guid": "00000000BD3C",
            "en-US": "Displays a large message above the reticle that is visible to specific Players.",
            "de-DE": "Zeigt eine große Nachricht über dem Fadenkreuz an die für bestimmte Spieler sichtbar ist.",
            "es-ES": "Muestra un mensaje grande encima de la retícula que es visible para determinados jugadores.",
            "es-MX": "Muestra un mensaje grande arriba de la retícula que es visible para determinados jugadores.",
            "fr-FR": "Affiche un grand message au-dessus du réticule visible pour des joueurs spécifiques.",
            "it-IT": "Visualizza un grosso messaggio sopra il reticolo di mira visibile a specifici Giocatori.",
            "ja-JP": "照準の上に、特定のプレイヤーにしか見えない大きなメッセージを表示する",
            "ko-KR": "지정된 플레이어에게 보이도록 큰 메시지를 조준선 위쪽에 표시합니다.",
            "pl-PL": "Wyświetla pod celownikiem długą wiadomość która jest widoczna dla określonych graczy.",
            "pt-BR": "Exibe uma mensagem grande acima do retículo visível para Jogadores específicos.",
            "ru-RU": "Отображает большое сообщение над прицелом указанных игроков.",
            "zh-CN": "在准星上方显示大字体信息，对指定玩家可见。"
        }
    },
    "break": {
        "description": "Goes to the end of the innermost `switch` statement, or `do/while`, `while` or `for` loop.",
        "args": null,
        "return": "void",
        "guid": "0000000105B6",
        "en-US": "Break",
        "fr-FR": "Arrêter",
        "ja-JP": "BREAK",
        "pt-BR": "Interromper",
        "zh-CN": "中断",
        "descriptionLocalized": {
            "en-US": "Goes to the end of the innermost `switch` statement, or `do/while`, `while` or `for` loop.",
            "guid": "<unknown guid>"
        }
    },
    "__callSubroutine__": {
        "description": "Pauses execution of the current rule and begins executing a subroutine rule (which is a rule with a subroutine event type). When the subroutine rule finishes, the original rule resumes execution. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        "args": [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to call. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "Subroutine",
                "default": "Sub0"
            }
        ],
        "guid": "00000001001E",
        "return": "void",
        "en-US": "Call Subroutine",
        "es-MX": "Llamada a subrutina",
        "fr-FR": "Sous-programme à appeler",
        "ja-JP": "サブルーチンの呼び出し",
        "pt-BR": "Chamar sub-rotina",
        "zh-CN": "调用子程序",
        "descriptionLocalized": {
            "guid": "000000010020",
            "en-US": "Pauses execution of the current rule and begins executing a subroutine rule which is a rule with a Subroutine event type. When the subroutine rule finishes the original rule resumes execution. The subroutine will have access to the same contextual values such as Event Player as the original rule.",
            "de-DE": "Pausiert die Ausführung der aktuellen Regel und beginnt mit der Ausführung einer Subroutinenregel einer Regel mit dem Eventtyp [Subroutine]. Wenn die Subroutinenregel endet wird die ursprüngliche Regel weiter ausgeführt. Die Subroutine erhält Zugriff auf die gleichen Kontextwerte wie die ursprüngliche Regel z. B. [Event Player].",
            "es-ES": "Pausa la ejecución de la regla actual e inicia la ejecución de una regla de subrutina que es una regla con un tipo de evento de subrutina. Cuando la regla de subrutina finaliza se reanuda la ejecución de la regla original. La subrutina tendrá acceso a los mismos valores contextuales como «Event Player» que la regla original.",
            "es-MX": "Pausa la ejecución de la regla actual y comienza a ejecutar una regla de subrutina que es una regla con un tipo de evento de subrutina. Cuando la regla de subrutina termina vuelve a ejecutarse la regla original. La subrutina tendrá acceso a los mismos valores contextuales como jugador del evento de la regla original.",
            "fr-FR": "Met en pause l’exécution de la règle actuelle et lance l’exécution d’une règle de sous-programme c’est-à-dire d’une règle dont l’évènement est de type « sous-programme ». Lorsque la règle de sous-programme se termine la règle d’origine reprend son exécution. Le sous-programme aura accès aux mêmes valeurs contextuelles telles que le « Joueur exécutant » que la règle d’origine.",
            "it-IT": "Mette in pausa l'esecuzione della regola attuale e avvia l'esecuzione di una regola subroutine ossia una regola con un tipo di evento Subroutine. Quando termina la regola della subroutine l'esecuzione della regola originale riprende. La subroutine avrà accesso agli stessi valori contestuali come Event Player della regola originale.",
            "ja-JP": "現在のルールの実行を中断して、サブルーチン・ルール（サブルーチン・イベントタイプを持つルール）の実行を開始する。サブルーチン・ルールの実行が完了すると、元のルールの実行が再開される。サブルーチンは元のルールと同じコンテキスト値（イベント・プレイヤーなど）にアクセスできる",
            "ko-KR": "현재 규칙의 실행을 일시 중지하고 서브루틴 규칙서브루틴 이벤트 유형의 규칙을 실행합니다. 서브루틴 규칙 실행이 완료되면 원래 규칙 실행을 재개합니다. 해당 서브루틴은 원래 규칙과 같이 동일한 컨텍스트 값Event Player 등을 이용할 수 있습니다.",
            "pl-PL": "Wstrzymuje uruchomienie bieżącej reguły i rozpoczyna uruchomienie reguły podprogramowej która jest regułą z typem zdarzenia podprogramowego. Kiedy wykonywanie reguły podprogramowej się zakończy wykonywanie oryginalnej reguły zostanie wznowione. Podprogram będzie miał dostęp do tych samych wartości kontekstowych np. „Event Player” Gracz w zdarzeniu co reguła oryginalna.",
            "pt-BR": "Pausa a execução da regra atual e inicia a execução da regra de sub-rotina que é uma regra com um evento do tipo Sub-rotina. Quando a regra de sub-rotina é encerrada a execução da regra original é retomada. A sub-rotina terá acesso aos mesmos valores contextuais como Jogador do Evento que a regra original.",
            "ru-RU": "Приостанавливает выполнение текущего правила и начинает выполнение правила-подпрограммы правила с типом события [Subroutine]. Когда завершается выполнение подпрограммного правила выполнение изначального правила продолжается. Подпрограмма будет иметь доступ к тем же контекстным значениям таким как [Event Player] что и изначальное правило.",
            "zh-CN": "暂停执行当前规则，并开始执行子程序规则（事件类型为”子程序“的规则）。当子程序规则结束时，原来的规则将恢复执行。子程序可以使用同样的情景变量（如事件玩家）的原始值。"
        }
    },
    "_&cancelPrimaryAction": {
        "description": "Cancels the active abilities for one or more players. Equivalent to a short stun.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to cancel active abilities for.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000109CB",
        "en-US": "Cancel Primary Action",
        "es-MX": "Cancelar acción primaria",
        "fr-FR": "Annuler l’action principale",
        "ja-JP": "メインアクションをキャンセル",
        "pt-BR": "Cancelar Ação Primária",
        "zh-CN": "取消主要动作",
        "descriptionLocalized": {
            "en-US": "Cancels the active abilities for one or more players. Equivalent to a short stun.",
            "guid": "<unknown guid>"
        }
    },
    "__chaseGlobalVariableAtRate__": {
        "description": "Gradually modifies the value of a global variable at a specific rate. (A global variable is a variable that belongs to the game itself.)",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to modify gradually.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "description": "The amount of change that will happen to the variable's value each second.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "__ChaseRateReeval__",
                "default": "DESTINATION AND RATE"
            }
        ],
        "guid": "00000000B840",
        "return": "void",
        "en-US": "Chase Global Variable At Rate",
        "es-MX": "Seguir variable global según la tasa",
        "fr-FR": "Modifier une variable globale selon une cadence",
        "ja-JP": "グローバル変数を特定のレートで追跡",
        "pt-BR": "Acompanhar Variável Global na Medida",
        "zh-CN": "追踪全局变量频率",
        "descriptionLocalized": {
            "guid": "00000000BCBB",
            "en-US": "Gradually modifies the Value of a Global Variable at a specific rate. A Global Variable is a Variable that belongs to the game itself.",
            "de-DE": "Modifiziert den Wert einer globalen Variable im Laufe der Zeit mit einer bestimmten Rate. Eine globale Variable ist eine Variable die dem Spiel selbst gehört.",
            "es-ES": "Modifica gradualmente el valor de una variable global a un ritmo concreto una variable global es una variable que pertenece a la partida en sí.",
            "es-MX": "Modifica gradualmente el valor de una variable global a una velocidad determinada. Una variable global es una variable que pertenece al propio juego.",
            "fr-FR": "Modifie graduellement la valeur d’une variable globale à un taux spécifique une variable globale est une variable rattachée à la partie même.",
            "it-IT": "Modifica gradualmente il Valore di una Variabile Globale con una frequenza specifica. Una Variabile Globale è una Variabile che appartiene al gioco stesso.",
            "ja-JP": "グローバル変数の値を、特定のレートで少しずつ変更する（グローバル変数は、ゲーム自体に所属する変数）",
            "ko-KR": "전역 변수 값을 지정된 비율로 점진적으로 수정합니다. 전역 변수Global Variable는 게임 자체에 종속된 변수입니다.",
            "pl-PL": "Stopniowo modyfikuje wartość zmiennej „Global Variable” Zmienna globalna w określonym tempie jest to zmienna która należy do samej gry.",
            "pt-BR": "Modifica gradativamente o Valor de uma Variável Global a uma taxa específica uma Variável Global é uma Variável que pertence ao jogo em si.",
            "ru-RU": "Постепенно и с определенной скоростью изменяет значение глобальной переменной то есть переменной относящейся к самой игре.",
            "zh-CN": "以指定的速率逐步改变一个全局变量的值，全局变量即属于游戏本身的变量。"
        }
    },
    "__chaseGlobalVariableOverTime__": {
        "description": "Gradually modifies the value of a global variable over time. (A global variable is a variable that belongs to the game itself.)",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to modify gradually.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the global variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "__ChaseTimeReeval__",
                "default": "DESTINATION AND DURATION"
            }
        ],
        "guid": "00000000B842",
        "return": "void",
        "en-US": "Chase Global Variable Over Time",
        "es-MX": "Seguir variable global con el tiempo",
        "fr-FR": "Modifier une variable globale sur la durée",
        "ja-JP": "グローバル変数を継続的に追跡",
        "pt-BR": "Acompanhar Variável Global ao Longo do Tempo",
        "zh-CN": "持续追踪全局变量",
        "descriptionLocalized": {
            "guid": "00000000BCAF",
            "en-US": "Gradually modifies the Value of a Global Variable over time. A Global Variable is a Variable that belongs to the game itself.",
            "de-DE": "Modifiziert den Wert einer globalen Variable im Laufe der Zeit. Eine globale Variable ist eine Variable die dem Spiel selbst gehört.",
            "es-ES": "Modifica gradualmente el valor de una variable global con el tiempo una variable global es una variable que pertenece a la partida en sí.",
            "es-MX": "Modifica gradualmente el valor de una variable global con el tiempo. Una variable global es una variable que pertenece al propio juego.",
            "fr-FR": "Modifie graduellement la valeur d’une variable globale. Une variable globale est une variable rattachée à la partie même.",
            "it-IT": "Modifica gradualmente il Valore di una Variabile Globale nel tempo. Una Variabile Globale è una Variabile che appartiene al gioco stesso.",
            "ja-JP": "グローバル変数の値を、時間をかけて少しずつ変更する。（グローバル変数は、ゲーム自体に所属する変数）",
            "ko-KR": "전역 변수 값을 시간이 지남에 따라 점진적으로 수정합니다. 전역 변수Global Variable는 게임 자체에 종속된 변수입니다.",
            "pl-PL": "Stopniowo modyfikuje wartość zmiennej „Global Variable” Zmienna globalna z upływem czasu jest to zmienna która należy do samej gry.",
            "pt-BR": "Modifica gradativamente o Valor de uma Variável Global ao longo do tempo uma Variável Global é uma Variável que pertence ao jogo em si.",
            "ru-RU": "Постепенно изменяет значение глобальной переменной глобальная переменная – это переменная которая принадлежит самой игре.",
            "zh-CN": "逐渐改变一个全局变量的值，全局变量即属于游戏本身的变量。"
        }
    },
    "__chasePlayerVariableAtRate__": {
        "description": "Gradually modifies the value of a player variable at a specific rate. (A player variable is a variable that belongs to a specific player.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify gradually.",
                "type": "PlayerVariable",
                "default": "A"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "RATE",
                "description": "The amount of change that will happen to the variable's value each second.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "__ChaseRateReeval__",
                "default": "DESTINATION AND RATE"
            }
        ],
        "guid": "00000000B83F",
        "return": "void",
        "en-US": "Chase Player Variable At Rate",
        "es-MX": "Seguir variable de jugador según la tasa",
        "fr-FR": "Modifier une variable de joueur selon une cadence",
        "ja-JP": "プレイヤー変数を特定のレートで追跡",
        "pt-BR": "Acompanhar Variável de Jogador na Medida",
        "zh-CN": "追踪玩家变量频率",
        "descriptionLocalized": {
            "guid": "00000000BCC0",
            "en-US": "Gradually modifies the Value of a Player Variable at a specific rate. A Player Variable is a Variable that belongs to a specific Player.",
            "de-DE": "Modifiziert den Wert einer Spielervariable im Laufe der Zeit mit einer bestimmten Rate. Eine Spielervariable ist eine Variable die einem bestimmten Spieler gehört.",
            "es-ES": "Modifica gradualmente el valor de una variable de jugador a un ritmo concreto una variable de jugador es una variable que pertenece a un jugador concreto.",
            "es-MX": "Modifica gradualmente el valor de una variable de jugador a una velocidad determinada. Una variable de jugador es una variable que pertenece a un jugador determinado.",
            "fr-FR": "Modifie graduellement la valeur d’une variable de joueur à un taux spécifique une variable de joueur est une variable rattachée à un joueur spécifique.",
            "it-IT": "Modifica gradualmente il Valore della Variabile Giocatore con una frequenza specifica. Una Variabile Giocatore è una Variabile che appartiene a un Giocatore specifico.",
            "ja-JP": "プレイヤー変数の値を、特定のレートで少しずつ変更する（プレイヤー変数は、特定のプレイヤーに所属する変数）",
            "ko-KR": "플레이어 변수의 값을 지정된 비율로 점진적으로 수정합니다. 플레이어 변수Player Variable는 지정된 플레이어에게 종속된 변수입니다.",
            "pl-PL": "Stopniowo modyfikuje wartość zmiennej „Player Variable” Zmienna gracza w określonym tempie jest to zmienna która należy do konkretnego gracza.",
            "pt-BR": "Modifica gradativamente o Valor de uma Variável de Jogador a uma taxa específica uma Variável de Jogador é uma Variável que pertence a um Jogador específico.",
            "ru-RU": "Постепенно и с определенной скоростью изменяет значение переменной игрока то есть переменной относящейся к указанному игроку.",
            "zh-CN": "以指定的速率逐步改变一个玩家变量的值，玩家变量即属于一个特定玩家的变量。"
        }
    },
    "__chasePlayerVariableOverTime__": {
        "description": "Gradually modifies the value of a player variable over time. (A player variable is a variable that belongs to a specific player.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify gradually.",
                "type": "PlayerVariable",
                "default": "VARIABLE"
            },
            {
                "name": "DESTINATION",
                "description": "The value that the player variable will eventually reach. The type of this value may be either a number or a vector, though the variable's existing value must be of the same type before the chase begins.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER"
            },
            {
                "name": "DURATION",
                "description": "The amount of time, in seconds, over which the variable's value will approach the destination.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "__ChaseTimeReeval__",
                "default": "DESTINATION AND DURATION"
            }
        ],
        "guid": "00000000B841",
        "return": "void",
        "en-US": "Chase Player Variable Over Time",
        "es-MX": "Seguir variable del jugador con el tiempo",
        "fr-FR": "Modifier une variable de joueur sur la durée",
        "ja-JP": "プレイヤー変数を継続的に追跡",
        "pt-BR": "Acompanhar Variável de Jogador ao Longo do Tempo",
        "zh-CN": "持续追踪玩家变量",
        "descriptionLocalized": {
            "guid": "00000000BCB5",
            "en-US": "Gradually modifies the Value of a Player Variable over time. A Player Variable is a Variable that belongs to a specific Player.",
            "de-DE": "Modifiziert den Wert einer Spielervariable im Laufe der Zeit. Eine Spielervariable ist eine Variable die einem bestimmten Spieler gehört.",
            "es-ES": "Modifica gradualmente el valor de una variable de jugador con el tiempo una variable de jugador es una variable que pertenece a un jugador concreto.",
            "es-MX": "Modifica gradualmente el valor de una variable de jugador con el tiempo. Una variable de jugador es una variable que pertenece a un jugador determinado.",
            "fr-FR": "Modifie graduellement la valeur d’une variable de joueur sur la durée une variable de joueur est une variable rattachée à un joueur spécifique.",
            "it-IT": "Modifica gradualmente il Valore della Variabile Giocatore nel tempo. Una Variabile Giocatore è una Variabile che appartiene a un Giocatore specifico.",
            "ja-JP": "プレイヤー変数の値を、時間をかけて少しずつ変更する（プレイヤー変数は、特定のプレイヤーに所属する変数）",
            "ko-KR": "플레이어 변수의 값을 시간의 경과에 따라 점진적으로 수정합니다. 플레이어 변수Player Variable는 지정된 플레이어에게 종속된 변수입니다.",
            "pl-PL": "Stopniowo modyfikuje wartość zmiennej „Player Variable” Zmienna gracza z upływem czasu jest to zmienna która należy do konkretnego gracza.",
            "pt-BR": "Modifica gradativamente o Valor de uma Variável de Jogador ao longo do tempo uma Variável de Jogador é uma Variável que pertence a um Jogador específico.",
            "ru-RU": "Постепенно изменяет значение переменной игрока то есть переменной относящейся к указанному игроку.",
            "zh-CN": "逐步改变一个玩家变量的值，玩家变量即属于一个特定玩家的变量。"
        }
    },
    "_&clearStatusEffect": {
        "description": "Clears a status that was applied from a set status action from one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players from whom the status will be removed.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "STATUS",
                "description": "The status to be removed from the player or players.",
                "type": "Status",
                "default": "HACKED"
            }
        ],
        "guid": "00000000B595",
        "return": "void",
        "en-US": "Clear Status",
        "es-MX": "Eliminar estado",
        "fr-FR": "Effacer le statut",
        "ja-JP": "ステータスをクリア",
        "pt-BR": "Apagar Status",
        "zh-CN": "清除状态",
        "descriptionLocalized": {
            "guid": "00000000BCAA",
            "en-US": "Clears a status that was applied from a Set Status Action from one or more Players.",
            "de-DE": "Entfernt einen Status von einem Spieler oder mehreren Spielern der über eine Aktion [Set Status] angewendet wurde.",
            "es-ES": "Elimina un estado aplicado con una acción «Set Status» de uno o más jugadores.",
            "es-MX": "Elimina un estado que fue aplicado con la acción Establecer estado a uno o más jugadores.",
            "fr-FR": "Supprime un statut appliqué par une action « Définir un statut » chez un ou plusieurs joueurs.",
            "it-IT": "Annulla uno stato applicato da un'Azione Set Status da parte di uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーから、「ステータスを設定」アクションで適用されたステータスをクリアする",
            "ko-KR": "Set Status 액션으로 플레이어의 상태 하나를 제거합니다.",
            "pl-PL": "Czyści status zastosowany działaniem „Set Status” Ustaw status u jednego lub więcej graczy.",
            "pt-BR": "Apaga de um ou mais Jogadores um status aplicado por uma Ação Definir Status.",
            "ru-RU": "Снимает статус который был применен к одному или нескольким игрокам действием [Set Status].",
            "zh-CN": "清除一个或多个玩家身上由”设置状态“动作施加的一个状态。"
        }
    },
    "_&communicate": {
        "description": "Causes one or more players to use an emote, voice line, or other equipped communication.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to perform the communication.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "TYPE",
                "description": "The type of communication.",
                "type": "Comms",
                "default": "VOICE LINE UP"
            }
        ],
        "guid": "00000000B9E3",
        "return": "void",
        "en-US": "Communicate",
        "es-MX": "Comunicar",
        "fr-FR": "Communiquer",
        "ja-JP": "コミュニケーション",
        "pt-BR": "Comunicar",
        "zh-CN": "交流",
        "descriptionLocalized": {
            "guid": "00000000BD2E",
            "en-US": "Causes one or more Players to use an emote voice line or other equipped communication.",
            "de-DE": "Veranlasst einen oder mehrere Spieler dazu ein Emote einen Spruch oder sonstige ausgerüstete Kommunikation zu verwenden.",
            "es-ES": "Hace que uno o más jugadores utilicen un gesto una frase u otra forma de comunicación equipada.",
            "es-MX": "Provoca que uno o más jugadores utilicen un gesto una línea de voz u otra comunicación equipada.",
            "fr-FR": "Force un ou plusieurs joueurs à utiliser une emote une réplique ou tout autre outil de communication équipé.",
            "it-IT": "Consente a uno o più Giocatori di usare un'emote una battuta audio o un'altra tipologia di comunicazione equipaggiata.",
            "ja-JP": "1人または複数のプレイヤーがエモート、ボイス・ラインもしくはその他のコミュニケーションを行う",
            "ko-KR": "플레이어가 감정 표현 음성 대사 또는 기타 장착한 의사소통 수단을 사용하도록 합니다.",
            "pl-PL": "Powoduje że jeden lub więcej graczy korzysta z emotki kwestii lub innej przygotowanej formy komunikacji.",
            "pt-BR": "Faz um ou mais Jogadores usarem um emote fala ou outra comunicação equipada.",
            "ru-RU": "Вынуждает одного или нескольких игроков использовать эмоцию реплику или другой доступный тип коммуникации.",
            "zh-CN": "使一名或多名玩家使用一个表情、语音或其他已装备的方式进行交流。"
        }
    },
    "continue": {
        "description": "Goes back to the start of the innermost loop.",
        "args": null,
        "guid": "0000000105B7",
        "return": "void",
        "en-US": "Continue",
        "es-MX": "Continuar",
        "fr-FR": "Continuer",
        "ja-JP": "CONTINUE",
        "pt-BR": "Continuar",
        "zh-CN": "继续",
        "descriptionLocalized": {
            "en-US": "Goes back to the start of the innermost loop.",
            "guid": "<unknown guid>"
        }
    },
    "createBeam": {
        "description": "Creates an in-world beam effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the effect.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "TYPE",
                "description": "The type of effect to be created.",
                "type": "Beam",
                "default": "GOOD BEAM"
            },
            {
                "name": "START POSITION",
                "description": "The effect's start position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "Position",
                "default": "EVENT PLAYER"
            },
            {
                "name": "END POSITION",
                "description": "The effect's end position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": "Position",
                "default": "EVENT PLAYER"
            },
            {
                "name": "COLOR",
                "description": "The color of the beam to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects. Only the \"good\" and \"bad\" beam effects can have color applied.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The effect will keep asking for and using new values from reevaluated inputs.",
                "type": "EffectReeval",
                "default": "VISIBLE TO, POSITION, AND RADIUS"
            }
        ],
        "guid": "00000000CE80",
        "return": "void",
        "en-US": "Create Beam Effect",
        "es-MX": "Crear efecto de rayo",
        "fr-FR": "Créer un effet de rayon",
        "ja-JP": "ビーム・エフェクトを作成",
        "pt-BR": "Criar Efeito de Feixe",
        "zh-CN": "创建光束效果",
        "descriptionLocalized": {
            "guid": "00000000CE81",
            "en-US": "Creates an in-world beam effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity use the Last Created Entity Value. This Action will fail if too many entities have been created.",
            "de-DE": "Erstellt eine Strahleffektentität in der Welt. Diese Effektentität bleibt bestehen bis sie zerstört wird. Zum Abrufen einer Referenz zu dieser Entität wird der Wert [Last Created Entity] verwendet. Diese Aktion schlägt fehl wenn zu viele Entitäten erstellt wurden.",
            "es-ES": "Crea una entidad de efecto de haz en el mundo. Esta entidad de efecto persistirá hasta su destrucción. Para obtener una referencia a esta entidad utiliza el valor de «Last Created Entity». Esta acción fallará si se han creado demasiadas entidades.",
            "es-MX": "Crea una entidad de efecto de rayo dentro del mundo. Esta entidad de efecto permanecerá intacta hasta que sea destruida. Para obtener una referencia a esta entidad utiliza el valor Última entidad creada. Esta acción no podrá realizarse si se han creado demasiadas entidades.",
            "fr-FR": "Crée une entité d’effet de rayon dans le monde qui persiste jusqu’à sa destruction. Pour obtenir une référence vers cette entité utilisez la valeur « Dernière entité créée ». Cette action échouera si trop d’entités ont été créées.",
            "it-IT": "Crea un'entità effetto raggio nel mondo di gioco. Tale entità effetto esisterà finché non verrà distrutta. Per ottenere un riferimento all'entità usa il Valore Last Created Entity. Questa Azione non andrà a buon fine se troppe entità sono già state create.",
            "ja-JP": "ワールド内のビーム・エフェクト・エンティティを作成する。このエフェクト・エンティティは破棄されるまで表示される。このエンティティへの参照を取得するには、「最新のエンティティ」の値を使用する。作成されたエンティティが多すぎると、このアクションは実行できない",
            "ko-KR": "월드 내에 광선 효과 개체를 생성합니다. 이 효과 개체는 제거하기 전까지 지속됩니다. 이 효과를 참조하려면 Last Created Entity 값을 사용하면 됩니다. 개체가 너무 많이 생성될 경우 이 액션이 실패할 수 있습니다.",
            "pl-PL": "Tworzy encję efektu wiązki w świecie która będzie się utrzymywać do jej usunięcia. Aby pozyskać odniesienie do tej encji użyj wartości „Last Created Entity” Ostatnia stworzona encja. To działanie nie powiedzie się jeśli stworzono zbyt dużo encji.",
            "pt-BR": "Cria uma entidade de efeito de feixe no mundo. Essa entidade de efeito persistirá até ser destruída. Para obter uma referência a ela use o Valor da Entidade Criada por Último. Não será possível realizar essa Ação se entidades demais tiverem sido criadas.",
            "ru-RU": "Создает в игровом мире экземпляр эффекта луча. Экземпляр эффекта будет существовать пока его не уничтожат. Чтобы получить ссылку на этот экземпляр используйте значение [Last Created Entity]. Это действие не будет выполнено если создано слишком много экземпляров.",
            "zh-CN": "创建一个地图中的光束效果实体。此实体会持续至消除为止。如果想引用此实体，可使用“上一个创建的实体”的返还值。如果已创建了太多的实体，此动作可能会失败。"
        }
    },
    "createDummy": {
        "description": "Adds a new bot to the specified slot on the specified team so long as the slot is available. This bot will only move, fire, or use abilities if executing workshop actions.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero that the bot will be. If more than one hero is provided, one will be chosen at random.",
                "type": "Hero",
                "default": "HERO"
            },
            {
                "name": "TEAM",
                "description": "The team on which to create the bot. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "SLOT",
                "description": "The player slot which will receive the bot (-1 for first available slot). Up to 6 bots may be added to each team, or 12 bots to the free-for-all team, regardless of lobby settings.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "POSITION",
                "description": "The initial position where the bot will appear.",
                "type": "Position",
                "canReplaceNullVectorByNull": true,
                "default": "VECTOR"
            },
            {
                "name": "FACING",
                "description": "The initial direction that the bot will face.",
                "type": "Direction",
                "canReplaceNullVectorByNull": true,
                "default": "VECTOR"
            }
        ],
        "guid": "00000000CA6A",
        "return": "void",
        "en-US": "Create Dummy Bot",
        "es-MX": "Crear robot de entrenamiento",
        "fr-FR": "Créer une I.A.",
        "ja-JP": "ダミーボットを作成",
        "pt-BR": "Criar Bot",
        "zh-CN": "生成机器人",
        "descriptionLocalized": {
            "guid": "00000000CA6B",
            "en-US": "Adds a new bot to the specified slot on the specified team so long as the slot is available. This bot will only move fire or use abilities if executing Workshop actions.",
            "de-DE": "Platziert einen neuen Bot im festgelegten Slot im festgelegten Team wenn dieser Slot verfügbar ist. Der Bot kann sich nur bewegen angreifen oder Fähigkeiten einsetzen wenn er Workshop-Aktionen ausführt.",
            "es-ES": "Añade un nuevo robot a la ranura especificada del equipo especificado siempre que la ranura esté disponible. Este robot solo se moverá disparará y usará habilidades si ejecuta acciones del Taller.",
            "es-MX": "Agrega un nuevo robot a la posición especificada en el equipo especificado siempre que la posición esté disponible. Este robot solo se moverá disparará o usará habilidades si se ejecutan acciones del Workshop.",
            "fr-FR": "Ajoute une nouvelle I.A. à un emplacement spécifique dans l’équipe choisie tant que l’emplacement est libre. Cette I.A. ne pourra se déplacer tirer ou utiliser des capacités que si elle exécute des actions de la Forge.",
            "it-IT": "Aggiunge un nuovo bot allo slot specifico alla squadra specifica finché lo slot è disponibile. Questo bot si muoverà sparerà e userà le abilità solo se segue le azioni del Workshop.",
            "ja-JP": "スロットが空いていれば、指定されたチームの指定されたスロットに新しいボットを1体追加する。このボットは移動、射撃のみを行い、ワークショップのアクションを実行している場合はアビリティを使用する",
            "ko-KR": "슬롯이 활성화되어 있는 동안 새로운 봇을 특정 팀의 특정 슬롯에 추가합니다. 워크샵 액션을 실행하면 봇은 이동 혹은 발사하기만 하거나 기술만을 사용합니다.",
            "pl-PL": "Dodaje nowego bota do określonego miejsca w wyznaczonej drużynie o ile miejsce jest dostępne. Bot będzie się tylko poruszać strzelać lub używać zdolności przy wykonywaniu działań z Warsztatu.",
            "pt-BR": "Adiciona um bot ao espaço especificado na equipe escolhida se ele estiver disponível. Ele só vai andar atacar e usar habilidades ao executar ações do Workshop.",
            "ru-RU": "Добавляет новый ИИ в указанную ячейку указанной команды если эта ячейка свободна. Этот ИИ будет передвигаться стрелять и применять способности только выполняя действия описанные в «Мастерской».",
            "zh-CN": "在指定队伍的指定栏位添加一个新的机器人（只要该空位可用）。机器人只能移动与射击，或根据地图工坊的动作设置使用技能。"
        }
    },
    "createEffect": {
        "description": "Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the effect.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "TYPE",
                "description": "The type of effect to be created.",
                "type": "Effect",
                "default": "SPHERE"
            },
            {
                "name": "COLOR",
                "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "POSITION",
                "description": "The effect's position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The radius of this effect.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "EffectReeval",
                "default": "VISIBLE TO, POSITION, AND RADIUS"
            }
        ],
        "guid": "00000000B8AF",
        "return": "void",
        "en-US": "Create Effect",
        "es-MX": "Crear efecto",
        "fr-FR": "Créer un effet",
        "ja-JP": "エフェクトを作成",
        "pt-BR": "Criar Efeito",
        "zh-CN": "创建效果",
        "descriptionLocalized": {
            "guid": "00000000BCCD",
            "en-US": "Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity use the Last Created Entity Value. This Action will fail if too many entities have been created.",
            "de-DE": "Erstellt eine Effektentität in der Welt. Diese Effektentität bleibt bestehen bis sie zerstört wird. Zum Abrufen einer Referenz zu dieser Entität wird der Wert [Last Created Entity] verwendet. Diese Aktion schlägt fehl wenn zu viele Entitäten erstellt wurden.",
            "es-ES": "Crea una entidad de efecto en el mundo. Esta entidad de efecto persistirá hasta su destrucción. Para obtener una referencia a ella utiliza el valor de «Last Created Entity». Esta acción fallará si se han creado demasiadas entidades.",
            "es-MX": "Crea una entidad de efecto dentro del mundo. Esta entidad de efecto permanecerá intacta hasta que sea destruida. Para obtener una referencia a esta entidad utiliza el valor Última entidad creada. Esta acción no podrá realizarse si se han creado demasiadas entidades.",
            "fr-FR": "Crée une entité d’effet dans le monde qui persiste jusqu’à sa destruction. Pour obtenir une référence vers cette entité utilisez la valeur « Dernière entité créée ». Cette action échouera si trop d’entités ont été créées.",
            "it-IT": "Crea un'entità effetto nel mondo di gioco. Tale entità effetto esisterà finché non verrà distrutta. Per ottenere un riferimento all'entità usa il Valore Last Created Entity. Questa Azione non andrà a buon fine se troppe entità sono già state create.",
            "ja-JP": "ワールド内のエフェクト・エンティティを作成する。このエフェクト・エンティティは破棄されるまで表示される。このエンティティへの参照を取得するには、「最新のエンティティ」の値を使用する。作成されたエンティティが多すぎると、このアクションは実行できない",
            "ko-KR": "월드 내에 효과 개체를 생성합니다. 이 효과 개체는 제거하기 전까지 지속됩니다. 이 효과를 참조하려면 Last Created Entity 값을 사용하면 됩니다. 개체가 너무 많이 생성될 경우 이 액션이 실패할 수 있습니다.",
            "pl-PL": "Tworzy encję efektu w świecie która będzie się utrzymywać do jej usunięcia. Aby pozyskać odniesienie do tej encji użyj wartości „Last Created Entity” Ostatnia stworzona encja. To działanie nie powiedzie się jeśli stworzono zbyt dużo encji.",
            "pt-BR": "Cria uma entidade de efeito no mundo. Essa entidade de efeito persistirá até ser destruída. Para obter uma referência a essa entidade use o Valor da Entidade Criada por Último. Não será possível realizar essa Ação se entidades demais tiverem sido criadas.",
            "ru-RU": "Создает экземпляр эффекта в игровом мире существующий до разрушения. Для получения ссылки на этот экземпляр используйте значение [Last Created Entity]. Если создано слишком много экземпляров действие завершится неудачей.",
            "zh-CN": "创建一个地图中的效果实体。此实体会持续至消除为止。如果想指定此实体，可使用“上一个创建的实体”的返还值。如果已创建了太多的实体，此动作可能会失败。"
        }
    },
    "__hudText__": {
        "description": "Creates hud text visible to specific players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the last text id value. This action will fail if too many text elements have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the hud text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
                "default": "STRING"
            },
            {
                "name": "SUBHEADER",
                "description": "The subheader text to be displayed (can be blank)",
                "type": "Object",
                "default": "NULL"
            },
            {
                "name": "TEXT",
                "description": "The body text to be displayed (can be blank)",
                "type": "Object",
                "default": "NULL"
            },
            {
                "name": "LOCATION",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "LEFT"
            },
            {
                "name": "SORT ORDER",
                "description": "The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "HEADER COLOR",
                "description": "The color of the header.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "SUBHEADER COLOR",
                "description": "The color of the subheader.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "TEXT COLOR",
                "description": "The color of the text.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        "guid": "00000000BAD3",
        "return": "void",
        "en-US": "Create HUD Text",
        "es-MX": "Crear texto del HUD",
        "fr-FR": "Créer du texte d’interface",
        "ja-JP": "HUDテキストを作成",
        "pt-BR": "Criar Texto de HUD",
        "zh-CN": "创建HUD文本",
        "descriptionLocalized": {
            "guid": "00000000BD4B",
            "en-US": "Creates HUD text visible to specific Players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text use the Last Text ID Value. This Action will fail if too many text elements have been created.",
            "de-DE": "Erstellt HUD-Text der für bestimmte Spieler an einer bestimmten Stelle auf dem Bildschirm angezeigt wird. Dieser Text bleibt sichtbar bis er zerstört wird. Zum Abrufen einer Referenz zu diesem Text wird der Wert [Last Text ID] verwendet. Diese Aktion schlägt fehl wenn zu viele Textelemente erstellt wurden.",
            "es-ES": "Crea texto de HUD visible para jugadores concretos en una ubicación específica de la pantalla. Este texto persistirá hasta su destrucción. Para obtener una referencia a este texto utiliza el valor de «Last Text ID». Esta acción fallará si se han creado demasiados elementos de texto.",
            "es-MX": "Crea texto del HUD visible para determinados jugadores en una ubicación determinada de la pantalla. Este texto permanecerá intacto hasta que sea destruido. Para obtener una referencia a este texto utiliza el valor ID de texto anterior. Esta acción no podrá realizarse si se han creado demasiados elementos de texto.",
            "fr-FR": "Crée un texte d’interface visible pour des joueurs spécifiques à un emplacement spécifique de l’écran. Ce texte persiste jusqu’à sa destruction. Pour obtenir une référence vers ce texte utilisez la valeur « Dernier identifiant de texte ». Cette action échouera si trop d’éléments textuels ont été créés.",
            "it-IT": "Crea un testo dell'HUD visibile a specifici Giocatori in una specifica posizione sullo schermo. Tale testo esisterà finché non verrà distrutto. Per ottenere un riferimento al testo usa il Valore Last Text ID. Questa Azione non andrà a buon fine se sono già stati creati troppi elementi di testo.",
            "ja-JP": "特定のプレイヤーにのみ表示されるHUDテキストを、画面の特定の位置に作成する。テキストは破棄されるまで表示される。このテキストへの参照を取得するには、「最新のテキストID」の値を使用する。作成されたテキスト要素が多すぎると、このアクションは失敗する",
            "ko-KR": "지정된 플레이어 화면의 지정된 위치에 표시할 HUD 텍스트를 생성합니다. 이 텍스트는 제거하기 전까지 지속됩니다. 이 텍스트를 참조하려면 Last Text ID 값을 사용하면 됩니다. 텍스트 요소가 너무 많이 생성될 경우 이 액션은 실패할 수 있습니다.",
            "pl-PL": "Tworzy tekst HUD-u widziany przez określonych graczy w określonym miejscu na ekranie. Tekst będzie się utrzymywać do usunięcia. Aby pozyskać odniesienie do tego tekstu użyj wartości „Last Text ID” Identyfikator ostatniego tekstu. To działanie nie powiedzie się jeśli stworzono zbyt dużo elementów tekstu.",
            "pt-BR": "Cria texto de HUD visível para Jogadores específicos em um local específico da tela. Esse texto persistirá até ser destruído. Para obter uma referência a ele use o Valor da ID de Texto Mais Recente. Não será possível realizar essa Ação se elementos de texto demais tiverem sido criados.",
            "ru-RU": "Создает текстовый объект пользовательского интерфейса видимый указанным игрокам в определенном месте экрана. Этот текст будет отображаться до своего уничтожения. Для получения ссылки на этот текстовый объект используйте значение ID последнего текстового объекта. Это действие не даст результата если было создано слишком много текстовых элементов.",
            "zh-CN": "在指定玩家屏幕上的指定位置创建一条HUD文本。此文本会持续至消除为止。如果想指定此文本，可使用“上一个文本ID”的返还值。如果已创建了太多的文本元素，此动作可能会失败。"
        }
    },
    "createIcon": {
        "description": "Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the getLastCreatedEntity() value. This action will fail if too many entities have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the icon.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "POSITION",
                "description": "The icon's position. If this value is a player, then the icon will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "VECTOR"
            },
            {
                "name": "ICON",
                "description": "The icon to be created.",
                "type": "Icon",
                "default": "ARROW: DOWN"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The icon will keep asking for and using new values from reevaluated inputs.",
                "type": "IconReeval",
                "default": "VISIBLE TO AND POSITION"
            },
            {
                "name": "ICON COLOR",
                "description": "The color of the icon to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "SHOW WHEN OFFSCREEN",
                "description": "Should this icon appear even when it is behind you?",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "guid": "00000000ACFA",
        "return": "void",
        "en-US": "Create Icon",
        "es-MX": "Crear ícono",
        "fr-FR": "Créer une icône",
        "ja-JP": "アイコンを作成",
        "pt-BR": "Criar Ícone",
        "zh-CN": "创建图标",
        "descriptionLocalized": {
            "en-US": "Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the getLastCreatedEntity() value. This action will fail if too many entities have been created.",
            "guid": "<unknown guid>"
        }
    },
    "createInWorldText": {
        "description": "Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the getLastTextId() value. This action will fail if too many text elements have been created.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the in-world text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The text to be displayed.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "STRING"
            },
            {
                "name": "POSITION",
                "description": "The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                "type": [
                    "Position",
                    "Player"
                ],
                "canReplaceNullVectorByNull": true,
                "default": "VECTOR"
            },
            {
                "name": "SCALE",
                "description": "The text's scale.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "CLIPPING",
                "description": "Specifies whether the text can be seen through walls or is instead clipped.",
                "type": "Clip",
                "default": "CLIP AGAINST SURFACES"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.",
                "type": "WorldTextReeval",
                "default": "VISIBLE TO, POSITION, AND STRING"
            },
            {
                "name": "TEXT COLOR",
                "description": "Specifies the color of the in-world text to use.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "SPECTATORS",
                "description": "Whether spectators can see the text or not.",
                "type": "SpecVisibility",
                "default": "DEFAULT VISIBILITY"
            }
        ],
        "guid": "00000000BAD0",
        "return": "void",
        "en-US": "Create In-World Text",
        "es-MX": "Crear texto dentro del mundo",
        "fr-FR": "Créer du texte en jeu",
        "ja-JP": "ワールド内テキストを作成",
        "pt-BR": "Criar Texto no Mundo",
        "zh-CN": "创建地图文本",
        "descriptionLocalized": {
            "en-US": "Creates in-world text visible to specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the getLastTextId() value. This action will fail if too many text elements have been created.",
            "guid": "<unknown guid>"
        }
    },
    "createProgressBarInWorldText": {
        "description": "Creates a progress bar in-world text visible to the specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the getLastTextId() Value. This action will fail if too many text elements have been created.",
        "args": [
            {
                "name": "Visible To",
                "description": "One or more players who will see the progress bar HUD text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "Value",
                "description": "The value of the progress bar to be displayed as a percentage from 0 to 100.",
                "type": "unsigned float",
                "default": 0
            },
            {
                "name": "Text",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
                "default": "Custom String"
            },
            {
                "name": "Position",
                "description": "The text's position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "Event Player"
            },
            {
                "name": "Scale",
                "description": "The text's scale.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "Clipping",
                "description": "Specifies whether the text can be seen through walls or is instead clipped.",
                "type": "Clip",
                "default": "CLIP AGAINST SURFACES"
            },
            {
                "name": "Progress Bar Color",
                "description": "The color of the progress bar text to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "White"
            },
            {
                "name": "Text Color",
                "description": "The color of the text to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "White"
            },
            {
                "name": "Reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.",
                "type": "ProgressWorldTextReeval",
                "default": "Visible To, Values, and Color"
            },
            {
                "name": "Non-Team Spectators",
                "description": "Whether non-team spectators can see the text or not.",
                "type": "SpecVisibility",
                "default": "Default Visibility"
            }
        ],
        "return": "void",
        "guid": "00000001233A",
        "en-US": "Create Progress Bar In-World Text",
        "es-MX": "Crear texto dentro del mundo en la barra de progreso",
        "fr-FR": "Créer du texte de barre de progression en jeu",
        "ja-JP": "進行バーのワールド内テキストを作成",
        "pt-BR": "Criar Texto de Barra de Progresso no Mundo",
        "zh-CN": "创建进度条地图文本",
        "descriptionLocalized": {
            "en-US": "Creates a progress bar in-world text visible to the specific players at a specific position in the world. This text will persist until destroyed. To obtain a reference to this text, use the getLastTextId() Value. This action will fail if too many text elements have been created.",
            "guid": "<unknown guid>"
        }
    },
    "progressBarHud": {
        "description": "Creates a progress bar HUD text visible to specified players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the getLastTextId() value. This action will fail if too many text elements have been created.",
        "args": [
            {
                "name": "Visible To",
                "description": "One or more players who will see the Progress Bar HUD text.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "Value",
                "description": "The value of the progress bar to be displayed as a percentage from 0 to 100.",
                "type": "unsigned float",
                "default": 0
            },
            {
                "name": "Text",
                "description": "The text to be displayed (can be blank)",
                "type": "Object",
                "default": "Custom String"
            },
            {
                "name": "Location",
                "description": "The location on the screen where the text will appear.",
                "type": "HudPosition",
                "default": "Left"
            },
            {
                "name": "Sort Order",
                "description": "The sort order of the text relative to other text in the same location. Text with a higher sort order will come after the text with a lower sort order.",
                "type": "float",
                "default": 0
            },
            {
                "name": "Progress Bar Color",
                "description": "The color of the progress bar to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "White"
            },
            {
                "name": "Text Color",
                "description": "The color of the text to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "White"
            },
            {
                "name": "Reevaluation",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.",
                "type": "ProgressHudReeval",
                "default": "Visible To, Values, and Color"
            },
            {
                "name": "Non-Team Spectators",
                "description": "Whether non-team spectators can see the text or not.",
                "type": "SpecVisibility",
                "default": "Default Visibility"
            }
        ],
        "return": "void",
        "guid": "0000000122F3",
        "en-US": "Create Progress Bar HUD Text",
        "es-MX": "Crear texto del HUD en la barra de progreso",
        "fr-FR": "Créer du texte d’interface de barre de progression",
        "ja-JP": "進行バーHUDテキストを作成",
        "pt-BR": "Criar Texto de HUD da Barra de Progresso",
        "zh-CN": "创建进度条HUD文本",
        "descriptionLocalized": {
            "en-US": "Creates a progress bar HUD text visible to specified players at a specific location on the screen. This text will persist until destroyed. To obtain a reference to this text, use the getLastTextId() value. This action will fail if too many text elements have been created.",
            "guid": "<unknown guid>"
        }
    },
    "damage": {
        "guid": "000000007876",
        "description": "Applies instantaneous damage to one or more players, possibly killing the players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will receive damage.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGER",
                "description": "The player who will receive credit for the damage. A damager of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            },
            {
                "name": "AMOUNT",
                "description": "The amount of damage to apply. This amount may be modified by buffs, debuffs, or armor.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "return": "void",
        "en-US": "Damage",
        "es-MX": "Infligir daño",
        "fr-FR": "Infliger des dégâts",
        "ja-JP": "ダメージ",
        "pt-BR": "Dano",
        "zh-CN": "伤害",
        "descriptionLocalized": {
            "guid": "00000000BC71",
            "en-US": "Applies instantaneous damage to one or more Players possibly killing the Players.",
            "de-DE": "Wendet sofortigen Schaden auf einen oder mehrere Spieler an sodass diese getötet werden.",
            "es-ES": "Aplica daño instantáneo a uno o más jugadores lo cual puede llegar a matarlos.",
            "es-MX": "Aplica daño instantáneo a uno o más jugadores con la posibilidad de matar a los jugadores.",
            "fr-FR": "Applique des dégâts instantanés à un ou plusieurs joueurs les tuant potentiellement.",
            "it-IT": "Applica dei danni istantanei a uno o più Giocatori eventualmente uccidendoli.",
            "ja-JP": "1人または複数のプレイヤーに即座にダメージを与える。これによってプレイヤーが倒れることもある",
            "ko-KR": "플레이어에게 즉시 피해를 적용하며 피해를 받은 대상이 죽을 수 있습니다.",
            "pl-PL": "Zadaje natychmiastowe obrażenia jednemu lub większej liczbie graczy prawdopodobnie ich zabijając.",
            "pt-BR": "Aplica dano instantâneo a um ou mais Jogadores possivelmente matando os Jogadores.",
            "ru-RU": "Наносит мгновенный урон одному или нескольким игрокам с возможностью убийства этих игроков.",
            "zh-CN": "立刻为一名或多名玩家造成伤害，可能会杀死玩家。"
        }
    },
    "declareDraw": {
        "description": "Instantly ends the match in a draw. This action has no effect in free-for-all modes.",
        "args": [],
        "guid": "00000000B9F1",
        "return": "void",
        "en-US": "Declare Match Draw",
        "es-MX": "Declarar empate de la partida",
        "fr-FR": "Déclarer le match nul",
        "ja-JP": "マッチの引き分けを宣言",
        "pt-BR": "Declarar Empate na Partida",
        "zh-CN": "宣布比赛为平局",
        "descriptionLocalized": {
            "guid": "00000000BD34",
            "en-US": "Instantly ends the match in a Draw. This Action has no effect in Free-For-All modes.",
            "de-DE": "Beendet das Match sofort mit einem Unentschieden. Diese Aktion ist nicht in klassischen Deathmatch-Modi wirksam.",
            "es-ES": "Finaliza la partida al instante con un empate. Esta acción no surte ningún efecto en modos de todos contra todos.",
            "es-MX": "Finaliza instantáneamente la partida en un empate. Esta acción no tiene efecto en los modos de todos contra todos.",
            "fr-FR": "Met immédiatement fin à la partie et déclare une égalité. Cette action n’a aucun effet en mode Chacun pour soi.",
            "it-IT": "Termina immediatamente la partita in Pareggio. Questa Azione non ha effetto nelle modalità Tutti contro tutti.",
            "ja-JP": "引き分けでマッチを即座に終了させる。このアクションはFFAモードには適応されない",
            "ko-KR": "경기를 즉시 무승부로 종료합니다. 이 액션은 개별 전투 모드에서는 효과가 없습니다.",
            "pl-PL": "Natychmiast kończy mecz remisem. Działanie nie obejmuje trybów każdy na każdego.",
            "pt-BR": "Encerra instantaneamente a partida com um Empate. Essa Ação não tem efeito nos modos Todos Contra Todos.",
            "ru-RU": "Мгновенно завершает матч ничьей. Действие не имеет эффекта в режимах FFA.",
            "zh-CN": "立即结束比赛，且结果为平局。此动作在自由混战模式中无效。"
        }
    },
    "declarePlayerVictory": {
        "description": "Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The winning player.",
                "type": "Player",
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000AD30",
        "return": "void",
        "en-US": "Declare Player Victory",
        "es-MX": "Declarar victoria del jugador",
        "fr-FR": "Déclarer la victoire d’un joueur",
        "ja-JP": "チームの勝利を宣言",
        "pt-BR": "Declarar Vitória do Jogador",
        "zh-CN": "宣告玩家胜利",
        "descriptionLocalized": {
            "guid": "00000000BC9A",
            "en-US": "Instantly ends the match with the specific Player as the winner. This Action only has an effect in Free-For-All modes.",
            "de-DE": "Beendet sofort das Match mit dem festgelegten Spieler als Sieger. Diese Aktion ist nur in klassischen Deathmatch-Modi wirksam.",
            "es-ES": "Finaliza la partida al instante con el jugador especificado como ganador. Esta acción solo surte efecto en modos de todos contra todos.",
            "es-MX": "Finaliza instantáneamente la partida y designa al jugador especificado como ganador. Esta acción solo tiene efecto en los modos de todos contra todos.",
            "fr-FR": "Met immédiatement fin à la partie et déclare le joueur spécifié en tant que vainqueur. Cette action n’a d’effet qu’en mode Chacun pour soi.",
            "it-IT": "Termina immediatamente la partita con il Giocatore specificato come vincitore. Questa Azione non ha effetto nelle modalità Tutti contro tutti.",
            "ja-JP": "特定のプレイヤーを勝者として、マッチを即座に終了させる。このアクションはFFAモードにのみ適用される",
            "ko-KR": "지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다. 이 액션은 개별 전투 모드에서만 효과가 있습니다.",
            "pl-PL": "Natychmiast kończy mecz i wybiera określonego gracza jako zwycięzcę. Działanie to dotyczy tylko trybów każdy na każdego.",
            "pt-BR": "Encerra instantaneamente a partida com o Jogador especificado como vencedor. Essa Ação só tem efeito nos modos Todos Contra Todos.",
            "ru-RU": "Сразу завершает матч с присуждением статуса победителя выбранному игроку. Действие работает только в режимах FFA.",
            "zh-CN": "立即结束比赛并指定一名玩家为胜利者。此动作只在自由混战模式中生效。"
        }
    },
    "declareRoundDraw": {
        "description": "Declare a draw for the current round. This only works in the elimination game mode.",
        "args": [],
        "return": "void",
        "guid": "00000001098F",
        "en-US": "Declare Round Draw",
        "es-MX": "Declarar ronda empatada",
        "fr-FR": "Déclarer la manche nulle",
        "ja-JP": "ラウンドの引き分けを宣言",
        "pt-BR": "Declarar Empate na Rodada",
        "zh-CN": "宣布回合为平局",
        "descriptionLocalized": {
            "guid": "000000010990",
            "en-US": "Declare a draw for the current round. This only works in the Elimination game mode.",
            "de-DE": "Erklärt ein Unentschieden für die aktuelle Runde. Funktioniert nur im Spielmodus Eliminierung.",
            "es-ES": "Declara un empate en la ronda actual. Esto solo funciona en el modo de eliminación.",
            "es-MX": "Declara un empate para la ronda actual. Solo funciona en el modo de juego Eliminación.",
            "fr-FR": "Déclare un match nul pour la manche actuelle. Fonctionne uniquement en mode de jeu Élimination.",
            "it-IT": "Dichiara un pareggio per il round attuale. Funziona solamente nella modalità Eliminazione.",
            "ja-JP": "現在のラウンドにおいて引き分けを宣言。エリミネーションのゲーム・モードでのみ有効",
            "ko-KR": "현재 라운드를 무승부로 설정합니다. 섬멸전 게임 모드에서만 작동합니다.",
            "pl-PL": "Ogłasza remis w bieżącej rundzie. Działa tylko w trybie Eliminacja.",
            "pt-BR": "Declare um empate na rodada atual. Só funciona no modo de jogo Eliminação.",
            "ru-RU": "Объявляет ничью в текущем раунде. Действует только в режиме «Ликвидация».",
            "zh-CN": "宣布当前回合为平局。只在决斗先锋模式中可用。"
        }
    },
    "declareRoundVictory": {
        "description": "Declare a team as the current round winner. This only works in the control and elimination game modes.",
        "args": [
            {
                "name": "ROUND WINNING TEAM",
                "description": "Round winning team",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "guid": "00000000BF93",
        "return": "void",
        "en-US": "Declare Round Victory",
        "es-MX": "Declarar victoria de la ronda",
        "fr-FR": "Déclarer la victoire de la manche",
        "ja-JP": "ラウンドの勝利を宣言",
        "pt-BR": "Declarar Vitória na Rodada",
        "zh-CN": "宣告回合胜利",
        "descriptionLocalized": {
            "en-US": "Declare a team as the current round winner. This only works in the control and elimination game modes.",
            "guid": "<unknown guid>"
        }
    },
    "declareTeamVictory": {
        "description": "Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The winning team.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "guid": "0000000078FD",
        "return": "void",
        "en-US": "Declare Team Victory",
        "es-MX": "Declarar la victoria del equipo",
        "fr-FR": "Déclarer la victoire d’une équipe",
        "ja-JP": "チームの勝利を宣言",
        "pt-BR": "Declarar Vitória da Equipe",
        "zh-CN": "宣告队伍胜利",
        "descriptionLocalized": {
            "guid": "00000000BC8A",
            "en-US": "Instantly ends the match with the specified Team as the winner. This Action has no effect in Free-For-All modes.",
            "de-DE": "Beendet sofort das Match mit dem festgelegten Team als Sieger. Diese Aktion ist nicht in klassischen Deathmatch-Modi wirksam.",
            "es-ES": "Finaliza la partida al instante con el equipo especificado como ganador. Esta acción no surte ningún efecto en modos de todos contra todos.",
            "es-MX": "Finaliza instantáneamente la partida y designa al equipo especificado como ganador. Esta acción no tiene efecto en los modos de todos contra todos.",
            "fr-FR": "Met immédiatement fin à la partie et déclare l’équipe spécifiée gagnante. Cette action n’a d’effet qu’en mode Chacun pour soi.",
            "it-IT": "Termina immediatamente la partita con la Squadra specificata come vincitrice. Questa Azione non ha effetto nelle modalità Tutti contro tutti.",
            "ja-JP": "指定したチームを勝者として、マッチを即座に終了させる。このアクションはFFAモードには適応されない",
            "ko-KR": "지정된 팀을 승자로 하여 경기를 즉시 종료합니다. 이 액션은 개별 전투 모드에서는 효과가 없습니다.",
            "pl-PL": "Natychmiast kończy mecz i wybiera określoną drużynę jako zwycięzców. Działanie to nie obejmuje trybów każdy na każdego.",
            "pt-BR": "Encerra instantaneamente a partida com a Equipe especificada como vencedora. Essa Ação não tem efeito nos modos Todos Contra Todos.",
            "ru-RU": "Мгновенно завершает матч с присуждением статуса победителя выбранной команде. Это действие не работает в режимах FFA.",
            "zh-CN": "立即结束比赛，并指定获胜的队伍。此动作在自由混战模式中无效。"
        }
    },
    "destroyAllDummies": {
        "description": "Removes all dummy bots from the match.",
        "args": [],
        "guid": "00000000D1D4",
        "return": "void",
        "en-US": "Destroy All Dummy Bots",
        "es-MX": "Destruir todos los robots de entrenamiento",
        "fr-FR": "Détruire toutes les I.A.",
        "ja-JP": "すべてのダミーボットを破棄",
        "pt-BR": "Destruir Todos os Bots",
        "zh-CN": "移除所有机器人",
        "descriptionLocalized": {
            "guid": "00000000D1D5",
            "en-US": "Removes all dummy bots from the match.",
            "de-DE": "Entfernt alle Bots aus dem Match.",
            "es-ES": "Elimina todos los robots de la partida.",
            "es-MX": "Quita a todos los robots de entrenamiento de la partida.",
            "fr-FR": "Retire toutes les I.A. de la partie.",
            "it-IT": "Rimuove tutti i bot di prova dalla partita.",
            "ja-JP": "すべてのダミーボットをマッチから排除する",
            "ko-KR": "모든 더미 봇을 경기에서 제외합니다.",
            "pl-PL": "Usuwa wszystkie atrapy botów z meczu.",
            "pt-BR": "Remove todos os bots da partida.",
            "ru-RU": "Удаляет все манекены из матча.",
            "zh-CN": "从比赛中移除所有机器人。"
        }
    },
    "destroyAllEffects": {
        "description": "Destroys all effect entities created by create effect.",
        "args": [],
        "guid": "00000000B8AD",
        "return": "void",
        "en-US": "Destroy All Effects",
        "es-MX": "Destruir todos los efectos",
        "fr-FR": "Détruire tous les effets",
        "ja-JP": "すべてのエフェクトを破棄",
        "pt-BR": "Destruir Todos os Efeitos",
        "zh-CN": "消除所有效果",
        "descriptionLocalized": {
            "en-US": "Destroys all effect entities created by create effect.",
            "guid": "<unknown guid>"
        }
    },
    "destroyAllHudTexts": {
        "description": "Destroys all hud text that was created by the create hud text action.",
        "args": [],
        "guid": "00000000BAD1",
        "return": "void",
        "en-US": "Destroy All HUD Text",
        "es-MX": "Destruir todo el texto del HUD",
        "fr-FR": "Détruire tous les textes d’interface",
        "ja-JP": "すべてのHUDテキストを破棄",
        "pt-BR": "Destruir Todo o Texto de HUD",
        "zh-CN": "消除所有HUD文本",
        "descriptionLocalized": {
            "en-US": "Destroys all hud text that was created by the create hud text action.",
            "guid": "<unknown guid>"
        }
    },
    "destroyAllIcons": {
        "description": "Destroys all icon entities created by create icon.",
        "args": [],
        "guid": "00000000B8AC",
        "return": "void",
        "en-US": "Destroy All Icons",
        "es-MX": "Destruir todos los íconos",
        "fr-FR": "Détruire toutes les icônes",
        "ja-JP": "すべてのアイコンを破棄",
        "pt-BR": "Destruir Todos os Ícones",
        "zh-CN": "消除所有图标",
        "descriptionLocalized": {
            "guid": "00000000BCD8",
            "en-US": "Destroys all icon entities created by Create Icon.",
            "de-DE": "Zerstört alle Iconentitäten die durch [Create Icon] erstellt wurden.",
            "es-ES": "Destruye todas las entidades de icono creadas por «Create Icon».",
            "es-MX": "Destruye todas las entidades de ícono creadas con Crear ícono.",
            "fr-FR": "Détruit toutes les entités d’icône créées par « Créer une icône ».",
            "it-IT": "Distrugge tutte le entità icona create dall'Azione Create Icon.",
            "ja-JP": "「アイコンを作成」によって作成されたすべてのアイコン・エンティティを破棄する",
            "ko-KR": "Create Icon에 의해 생성된 모든 아이콘 개체를 제거합니다.",
            "pl-PL": "Usuwa wszystkie encje symboli stworzone działaniem „Create Icon” Stwórz symbol.",
            "pt-BR": "Destrói todas as entidades de ícone criadas por Criar Ícone.",
            "ru-RU": "Уничтожает все экземпляры значков которые были созданы действием [Create Icon].",
            "zh-CN": "消除所有由”创建图标“所创建的图标实体。"
        }
    },
    "destroyAllInWorldTexts": {
        "description": "Destroys all in-world text created by create in-world text.",
        "args": [],
        "guid": "00000000B8AB",
        "return": "void",
        "en-US": "Destroy All In-World Text",
        "es-MX": "Destruir todo el texto dentro del mundo",
        "fr-FR": "Détruire tous les textes en jeu",
        "ja-JP": "すべてのワールド内テキストを破棄",
        "pt-BR": "Destruir Todo o Texto no Mundo",
        "zh-CN": "消除所有地图文本",
        "descriptionLocalized": {
            "guid": "00000000BCD9",
            "en-US": "Destroys all in-world text created by Create In-World Text.",
            "de-DE": "Zerstört sämtlichen Text in der Welt der durch [Create In-World Text] erstellt wurde.",
            "es-ES": "Destruye todo el texto del mundo creado por «Create In-World Text».",
            "es-MX": "Destruye todo el texto dentro del mundo creado con Crear texto dentro del mundo.",
            "fr-FR": "Détruit tout le texte en jeu créé par « Créer du texte en jeu ».",
            "it-IT": "Distrugge tutti i testi nel mondo di gioco creati dall'Azione Create In-World Text.",
            "ja-JP": "「ワールド内テキストを作成」によって作成されたすべてのワールド内テキストを破棄する",
            "ko-KR": "Create In-World Text에 의해 생성된 월드 내 텍스트를 모두 제거합니다.",
            "pl-PL": "Usuwa wszystkie teksty w świecie stworzone działaniem „Create In-World Text” Stwórz tekst w świecie gry.",
            "pt-BR": "Destrói todo o texto no mundo criado por Criar Texto no Mundo.",
            "ru-RU": "Уничтожает все текстовые объекты которые были созданы в игровом мире действием [Create In-World Text].",
            "zh-CN": "消除所有”创建地图文本“所创建的所有地图文本。"
        }
    },
    "destroyAllProgressBarInWorldTexts": {
        "description": "Destroys all progress bar in-world texts that were created by the createProgressBarInWorldText() Action.",
        "args": [],
        "return": "void",
        "guid": "000000012334",
        "en-US": "Destroy All Progress Bar In-World Text",
        "es-MX": "Destruir todo el texto dentro del mundo en la barra de progreso",
        "fr-FR": "Détruire tous les textes de barre de progression en jeu",
        "ja-JP": "すべての進行バーのワールド内テキストを破棄",
        "pt-BR": "Destruir Todos os Textos de Barra de Progresso no Mundo",
        "zh-CN": "消除所有进度条地图文本",
        "descriptionLocalized": {
            "en-US": "Destroys all progress bar in-world texts that were created by the createProgressBarInWorldText() Action.",
            "guid": "<unknown guid>"
        }
    },
    "destroyAllProgressBarHuds": {
        "description": "Destroys all Progress Bar HUD text that were created by the Create Progress Bar HUD Text Action.",
        "args": [],
        "return": "void",
        "guid": "0000000122E2",
        "en-US": "Destroy All Progress Bar HUD Text",
        "es-MX": "Destruir todo el texto del HUD en la barra de progreso",
        "fr-FR": "Détruire tous les textes d’interface de barre de progression",
        "ja-JP": "すべての進行バーHUDテキストを破棄",
        "pt-BR": "Destruir Todos os Textos de HUD da Barra de Progresso",
        "zh-CN": "消除所有进度条HUD文本",
        "descriptionLocalized": {
            "guid": "0000000122E3",
            "en-US": "Destroys all Progress Bar HUD text that were created by the Create Progress Bar HUD Text Action.",
            "de-DE": "Zerstört sämtlichen HUD-Text der Fortschrittsleiste der durch die Aktion [Create Progress Bar HUD Text] erstellt wurde.",
            "es-ES": "Destruye todo el texto de la barra de progreso del HUD creado por la acción «Create Progress Bar HUD Text».",
            "es-MX": "Destruye todo el texto del HUD en la barra de progreso que fue creado por la acción Crear texto del HUD en la barra de progreso.",
            "fr-FR": "Détruit tout le texte d’interface de barre de progression créé par l’action « Créer du texte d’interface de barre de progression ».",
            "it-IT": "Distrugge tutti i testi della Progress Bar HUD creati dall'Azione Create Progress Bar HUD Text.",
            "ja-JP": "「進行バーHUDテキストを作成」アクションで作成されたすべてのテキストを破棄する",
            "ko-KR": "Create Progress Bar HUD Text 액션에 의해 생성된 모든 진행도 막대 HUD 텍스트를 제거합니다.",
            "pl-PL": "Usuwa cały tekst w pasku postępu stworzone działaniem „Create Progress Bar In-World Text” Stwórz tekst w pasku postępu.",
            "pt-BR": "Destrói todos os textos de HUD da Barra de Progresso criado pela Ação Criar Texto de HUD da Barra de Progresso.",
            "ru-RU": "Убирает все тексты шкалы прогресса которые были созданы действием [Create Progress Bar HUD Text].",
            "zh-CN": "消除由“创建进度条HUD文本”动作所创建的所有进度条HUD文本。"
        }
    },
    "destroyDummy": {
        "description": "Removes the specified dummy bot from the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team to remove the dummy bot from. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "SLOT",
                "description": "The slot to remove the dummy bot from.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000CC21",
        "return": "void",
        "en-US": "Destroy Dummy Bot",
        "es-MX": "Destruir robot de entrenamiento",
        "fr-FR": "Détruire une I.A.",
        "ja-JP": "ダミーボットを破壊する",
        "pt-BR": "Destruir Bot",
        "zh-CN": "移除机器人",
        "descriptionLocalized": {
            "guid": "00000000CC29",
            "en-US": "Removes the specified dummy bot from the match.",
            "de-DE": "Entfernt den angegebenen Bot aus dem Match.",
            "es-ES": "Elimina al robot especificado de la partida.",
            "es-MX": "Quita al robot de entrenamiento especificado de la partida.",
            "fr-FR": "Retire l’I.A. spécifiée de la partie.",
            "it-IT": "Rimuove il bot di prova specificato dalla partita.",
            "ja-JP": "指定されたダミーボットをマッチから取り除く",
            "ko-KR": "특정 더미 봇을 경기에서 제외합니다.",
            "pl-PL": "Usuwa określoną atrapę bota z meczu.",
            "pt-BR": "Remove o bot especificado da partida.",
            "ru-RU": "Удаляет указанный манекен из матча.",
            "zh-CN": "从比赛中移除指定机器人。 "
        }
    },
    "destroyEffect": {
        "description": "Destroys an effect entity that was created by create effect.",
        "args": [
            {
                "name": "ENTITY",
                "description": "Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "EntityId",
                "default": "LAST CREATED ENTITY"
            }
        ],
        "guid": "00000000B8AE",
        "return": "void",
        "en-US": "Destroy Effect",
        "es-MX": "Destruir efecto",
        "fr-FR": "Détruire un effet",
        "ja-JP": "エフェクトを破棄",
        "pt-BR": "Destruir Efeito",
        "zh-CN": "消除效果",
        "descriptionLocalized": {
            "en-US": "Destroys an effect entity that was created by create effect.",
            "guid": "<unknown guid>"
        }
    },
    "destroyHudText": {
        "description": "Destroys hud text that was created by create hud text.",
        "args": [
            {
                "name": "TEXT ID",
                "description": "Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "TextId",
                "default": "LAST TEXT ID"
            }
        ],
        "guid": "00000000BAD2",
        "return": "void",
        "en-US": "Destroy HUD Text",
        "es-MX": "Destruir texto del HUD",
        "fr-FR": "Détruire du texte d’interface",
        "ja-JP": "HUDテキストを破棄",
        "pt-BR": "Destruir Texto de HUD",
        "zh-CN": "消除HUD文本",
        "descriptionLocalized": {
            "guid": "00000000BD4D",
            "en-US": "Destroys HUD text that was created by Create HUD Text.",
            "de-DE": "Zerstört HUD-Text der durch [Create HUD Text] erstellt wurde.",
            "es-ES": "Destruye el texto de HUD creado por «Create HUD Text».",
            "es-MX": "Destruye el texto del HUD que fue creado por la acción Crear texto del HUD.",
            "fr-FR": "Détruit le texte d’interface créé par l’action « Créer du texte d’interface ».",
            "it-IT": "Distrugge un testo dell'HUD creato dall'Azione Create HUD Text.",
            "ja-JP": "「HUDテキストを作成」によって作成されたHUDテキストを破棄する",
            "ko-KR": "Create HUD Text 액션에 의해 생성된 HUD 텍스트를 제거합니다.",
            "pl-PL": "Usuwa tekst HUD-u stworzony działaniem „Create HUD Text” Stwórz tekst HUD-u.",
            "pt-BR": "Destrói o texto de HUD criado por Criar Texto de HUD.",
            "ru-RU": "Уничтожает текстовый объект пользовательского интерфейса созданный действием создания текстового объекта этого интерфейса.",
            "zh-CN": "消除由”创建HUD文本“所创建的HUD文本。"
        }
    },
    "destroyIcon": {
        "description": "Destroys an icon entity that was created by create icon.",
        "args": [
            {
                "name": "ENTITY",
                "description": "Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.",
                "type": "EntityId",
                "default": "LAST CREATED ENTITY"
            }
        ],
        "guid": "00000000B4E7",
        "return": "void",
        "en-US": "Destroy Icon",
        "es-MX": "Destruir ícono",
        "fr-FR": "Détruire une icône",
        "ja-JP": "アイコンを破棄",
        "pt-BR": "Destruir Ícone",
        "zh-CN": "消除图标",
        "descriptionLocalized": {
            "guid": "00000000BC9E",
            "en-US": "Destroys an icon entity that was created by Create Icon.",
            "de-DE": "Zerstört eine Iconentität die durch [Create Icon] erstellt wurde.",
            "es-ES": "Destruye una entidad de icono creada por «Create Icon».",
            "es-MX": "Destruye una entidad de ícono creada con Crear ícono.",
            "fr-FR": "Détruit une entité d’icône créée par l’action « Créer une icône ».",
            "it-IT": "Distrugge un'entità icona creata dall'Azione Create Icon.",
            "ja-JP": "「アイコンを作成」によって作成されたアイコン・エンティティを破棄する",
            "ko-KR": "Create Icon에 의해 생성된 아이콘 개체를 제거합니다.",
            "pl-PL": "Usuwa encję symbolu stworzonego działaniem „Create Icon” Stwórz symbol.",
            "pt-BR": "Destrói uma entidade de ícone criada por Criar Ícone.",
            "ru-RU": "Разрушает экземпляр значка который был создан действием [Create Icon].",
            "zh-CN": "消除通过“创建图标”所创建的一个图标实体。"
        }
    },
    "destroyInWorldText": {
        "description": "Destroys in-world text that was created by create in-world text.",
        "args": [
            {
                "name": "TEXT ID",
                "description": "Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.",
                "type": "TextId",
                "default": "LAST TEXT ID"
            }
        ],
        "guid": "00000000BACF",
        "return": "void",
        "en-US": "Destroy In-World Text",
        "es-MX": "Destruir texto dentro del mundo",
        "fr-FR": "Détruire du texte en jeu",
        "ja-JP": "ワールド内テキストを破棄",
        "pt-BR": "Destruir Texto no Mundo",
        "zh-CN": "消除地图文本",
        "descriptionLocalized": {
            "guid": "00000000BD58",
            "en-US": "Destroys in-world text that was created by Create In-World Text.",
            "de-DE": "Zerstört Text in der Welt der durch [Create In-World Text] erstellt wurde.",
            "es-ES": "Destruye el texto del mundo creado por «Create In-World Text».",
            "es-MX": "Destruye el texto dentro del mundo creado con Crear texto dentro del mundo.",
            "fr-FR": "Détruit le texte en jeu créé par « Créer du texte en jeu ».",
            "it-IT": "Distrugge un testo del mondo di gioco creati dall'Azione Create In-World Text.",
            "ja-JP": "「ワールド内テキストを作成」で作成されたテキストを破棄する",
            "ko-KR": "Create In-World Text에 의해 생성된 월드 내 텍스트를 제거합니다.",
            "pl-PL": "Usuwa tekst w świecie stworzony działaniem „Create In-World Text” Stwórz tekst w świecie gry.",
            "pt-BR": "Destrói texto no mundo criado por Criar Texto no Mundo.",
            "ru-RU": "Уничтожает все текстовые объекты созданные в игровом мире действием [Create In-World Text].",
            "zh-CN": "清除”创建地图文本“所创建的地图文本。"
        }
    },
    "destroyProgressBarInWorldText": {
        "description": "Destroys the progress bar in-world text that was created by createProgressBarInWorldText().",
        "args": [
            {
                "name": "Text ID",
                "description": "Specifies which progress bar in-world text to destroy. This ID may be Last Text ID or a variable into which the Last Text ID was earlier stored.",
                "type": "TextId",
                "default": "Last Text ID"
            }
        ],
        "return": "void",
        "guid": "000000012336",
        "en-US": "Destroy Progress Bar In-World Text",
        "es-MX": "Destruir texto dentro del mundo en la barra de progreso",
        "fr-FR": "Détruire du texte de barre de progression en jeu",
        "ja-JP": "進行バーのワールド内テキストを破棄",
        "pt-BR": "Destruir Texto de Barra de Progresso no Mundo",
        "zh-CN": "消除进度条地图文本",
        "descriptionLocalized": {
            "en-US": "Destroys the progress bar in-world text that was created by createProgressBarInWorldText().",
            "guid": "<unknown guid>"
        }
    },
    "destroyProgressBarHud": {
        "description": "Destroys the progress bar HUD text that was created by progressBarHud().",
        "args": [
            {
                "name": "Text ID",
                "description": "Specifies which progress bar HUD text to destroy. This ID may be Last Text ID or a Variable into which Last Text ID was earlier stored.",
                "type": "TextId",
                "default": "Last Text ID"
            }
        ],
        "return": "void",
        "guid": "0000000122E4",
        "en-US": "Destroy Progress Bar HUD Text",
        "es-MX": "Destruir texto del HUD en la barra de progreso",
        "fr-FR": "Détruire le texte d’interface de barre de progression",
        "ja-JP": "進行バーHUDテキストを破棄",
        "pt-BR": "Destruir Texto de HUD da Barra de Progresso",
        "zh-CN": "消除进度条HUD文本",
        "descriptionLocalized": {
            "en-US": "Destroys the progress bar HUD text that was created by progressBarHud().",
            "guid": "<unknown guid>"
        }
    },
    "_&detach": {
        "description": "Undoes the attachment caused by the 'attachTo' action for one or more players. These players will resume normal movement from their current position.",
        "args": [
            {
                "name": "CHILDREN",
                "description": "The player or players that will become detached from their parent.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "000000010E52",
        "en-US": "Detach Players",
        "es-MX": "Separar jugadores",
        "fr-FR": "Détacher les joueurs",
        "ja-JP": "プレイヤーを離れさせる",
        "pt-BR": "Separar Jogadores",
        "zh-CN": "解除绑定",
        "descriptionLocalized": {
            "en-US": "Undoes the attachment caused by the 'attachTo' action for one or more players. These players will resume normal movement from their current position.",
            "guid": "<unknown guid>"
        }
    },
    "disableAnnouncer": {
        "description": "Disables game mode announcements from the announcer until reenabled or the match ends.",
        "args": [],
        "guid": "00000000C3F8",
        "return": "void",
        "en-US": "Disable Built-In Game Mode Announcer",
        "es-MX": "Deshabilitar el presentador integrado del modo de juego",
        "fr-FR": "Désactiver l’annonceur prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの通知を無効化",
        "pt-BR": "Desativar Narração Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设通告模式",
        "descriptionLocalized": {
            "guid": "00000000C3F7",
            "en-US": "Disables game mode announcements from the announcer until reenabled or the match ends.",
            "de-DE": "Deaktiviert die Ankündigungen des Ansagers für den Spielmodus bis sie wieder aktiviert werden oder das Match endet.",
            "es-ES": "Deshabilita los anuncios del modo de juego por parte del comentarista hasta que se rehabilite o se acabe la partida.",
            "es-MX": "Deshabilita los anuncios del presentador en el modo de juego hasta que vuelvan a habilitarse o finalice la partida.",
            "fr-FR": "Désactive les annonces de mode de jeu effectuées par l’annonceur jusqu’à leur réactivation ou la fin de la partie.",
            "it-IT": "Disabilita gli annunci dell'annunciatore fino alla sua riattivazione o al termine della partita.",
            "ja-JP": "設定を再度変更するかマッチが終了するまで、ゲーム・モードの通知を無効にする",
            "ko-KR": "다시 사용하거나 경기가 종료될 때까지 아나운서의 게임 모드 안내 음성을 사용하지 않도록 합니다.",
            "pl-PL": "Wyłącza ogłaszanie trybów gry przez komentatora dopóki nie zostanie ono wznowione lub nie zakończy się mecz.",
            "pt-BR": "Desativa todos os anúncios da narração do modo de jogo até que sejam reativados ou a partida acabar.",
            "ru-RU": "Отключает реплики комментатора игрового режима до включения или до конца матча.",
            "zh-CN": "禁用游戏模式中所有提示语音，直到重新启用或比赛结束为止。"
        }
    },
    "disableGamemodeCompletion": {
        "description": "Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.",
        "args": [],
        "guid": "00000000AD2D",
        "return": "void",
        "en-US": "Disable Built-In Game Mode Completion",
        "es-MX": "Deshabilitar la finalización integrada del modo de juego",
        "fr-FR": "Désactiver l’accomplissement prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準完了を無効化",
        "pt-BR": "Desativar Conclusão Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设完成条件",
        "descriptionLocalized": {
            "guid": "00000000BC99",
            "en-US": "Disables completion of the match from the game mode itself only allowing the match to be completed by scripting commands.",
            "de-DE": "Deaktiviert den Abschluss des Matches über den Spielmodus sodass das Match nur durch Skriptbefehle abgeschlossen werden kann.",
            "es-ES": "Deshabilita la conclusión de la partida según el propio modo de juego y solo permite que la partida finalice mediante comandos de script.",
            "es-MX": "Deshabilita la finalización de la partida en el modo de juego y solo permite que la partida se complete mediante una secuencia de comandos.",
            "fr-FR": "Empêche les règles du mode de jeu de mettre fin à la partie. Désormais il sera uniquement possible de mettre fin à la partie via les commandes de script.",
            "it-IT": "Disabilita il completamento della partita da parte della modalità di gioco stessa consentendone il completamento solo utilizzando comandi di script.",
            "ja-JP": "ゲーム・モード自体によるマッチの完了を無効化し、コマンドを記述しないとマッチを完了できなくする",
            "ko-KR": "게임 모드 자체에서 경기 종료가 되지 않도록 합니다. 스크립트 명령어로만 경기를 마칠 수 있도록 허용합니다.",
            "pl-PL": "Wyłącza kończenie meczu przez sam tryb gry co pozwala zakończyć mecz wyłącznie poprzez komendy skryptowe.",
            "pt-BR": "Desativa a conclusão da partida pelo modo de jogo em si permitindo a conclusão da partida somente por comandos de script.",
            "ru-RU": "Отключает завершение матча событиями самого режима игры оставляя возможность завершить матч только посредством скриптовых команд.",
            "zh-CN": "取消游戏模式自带的完成条件，比赛只由程序命令完成。"
        }
    },
    "_&disableGamemodeHud": {
        "description": "Disables the game mode HUD for one or more players until reenabled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their game mode HUD disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000110A8",
        "en-US": "Disable Game Mode HUD",
        "es-MX": "Deshabilitar HUD del modo de juego",
        "fr-FR": "Désactiver l’interface du mode de jeu",
        "ja-JP": "ゲーム・モードHUDを無効化",
        "pt-BR": "Desabilitar HUD de Modo de Jogo",
        "zh-CN": "隐藏游戏模式HUD",
        "descriptionLocalized": {
            "guid": "0000000110A9",
            "en-US": "Disables the Game Mode HUD for one or more Players until reenabled.",
            "de-DE": "Deaktiviert das Spielmodus-HUD für einen oder mehrere Spieler bis es wieder aktiviert wird.",
            "es-ES": "Deshabilita el HUD del modo de juego para uno o más jugadores hasta que se vuelva a activar.",
            "es-MX": "Deshabilita el HUD del modo de juego de uno o más jugadores hasta que vuelva a habilitarse.",
            "fr-FR": "Désactive l’interface du mode de jeu pour un ou plusieurs joueurs jusqu’à sa réactivation.",
            "it-IT": "Disabilita l'HUD per uno o più Giocatori fino alla riattivazione.",
            "ja-JP": "設定を再度変更するまで、1人または複数のプレイヤーのゲーム・モードHUDを表示しない",
            "ko-KR": "재활성화할 때까지 플레이어의 게임 모드 HUD를 비활성화합니다.",
            "pl-PL": "Wyłącza HUD trybu gry dla jednego lub więcej graczy do czasu ponownego włączenia.",
            "pt-BR": "Desabilitar o HUD de Modo de Jogo para um ou mais Jogadores até ele ser reabilitado.",
            "ru-RU": "Отключает игроку или игрокам интерфейс игрового режима до включения.",
            "zh-CN": "隐藏一名或多名玩家的游戏模式HUD，直到重新被显示为止。"
        }
    },
    "_&disableGamemodeInWorldUi": {
        "description": "Disables the game mode In-World UI for one or more players until reenabled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their game mode in-world UI disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "000000011242",
        "en-US": "Disable Game Mode In-World UI",
        "es-MX": "Deshabilitar IU dentro del mundo del modo de juego",
        "fr-FR": "Désactiver l’interface en jeu du mode de jeu",
        "ja-JP": "ゲーム・モードのワールド内UIを無効化",
        "pt-BR": "Desabilitar IU no Mundo do Modo de Jogo",
        "zh-CN": "隐藏游戏模式地图UI",
        "descriptionLocalized": {
            "guid": "000000011243",
            "en-US": "Disables the Game Mode In-World UI for one or more Players until reenabled.",
            "de-DE": "Deaktiviert das Spielmodus-UI in der Welt für einen oder mehrere Spieler bis es wieder aktiviert wird.",
            "es-ES": "Deshabilita la interfaz del mundo del modo de juego para uno o más jugadores hasta que se vuelva a activar.",
            "es-MX": "Deshabilita la IU dentro del mundo del modo de juego de uno o más jugadores hasta que vuelva a habilitarse.",
            "fr-FR": "Désactive l’interface en jeu du mode de jeu pour un ou plusieurs joueurs jusqu’à sa réactivation.",
            "it-IT": "Disabilita l'Interfaccia Utente del Mondo di Gioco per uno o più Giocatori fino alla riattivazione.",
            "ja-JP": "設定を再度変更するまで、1人または複数のプレイヤーのゲーム・モードのワールド内UIを表示しない",
            "ko-KR": "재활성화할 때까지 플레이어의 Game Mode In-World UI를 비활성화합니다.",
            "pl-PL": "Wyłącza interfejs w świecie gry dla jednego lub więcej graczy do czasu ponownego włączenia.",
            "pt-BR": "Desabilita a IU no Mundo do Modo de Jogo para um ou mais Jogadores até ele ser reabilitado.",
            "ru-RU": "Отключает игроку или игрокам интерфейс игрового режима отображаемый в игре до включения.",
            "zh-CN": "隐藏一名或多名玩家的游戏模式地图UI，直到重新被显示为止。"
        }
    },
    "_&disableHeroHUD": {
        "description": "Disables the Hero HUD for one or more players until reenabled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their hero HUD disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "00000001109E",
        "en-US": "Disable Hero HUD",
        "es-MX": "Deshabilitar HUD del héroe",
        "fr-FR": "Désactiver l’interface du héros",
        "ja-JP": "ヒーローHUDを無効化",
        "pt-BR": "Desabilitar HUD de Herói",
        "zh-CN": "隐藏英雄HUD",
        "descriptionLocalized": {
            "guid": "00000001109F",
            "en-US": "Disables the Hero HUD for one or more Players until reenabled.",
            "de-DE": "Deaktiviert das Helden-HUD für einen oder mehrere Spieler bis es wieder aktiviert wird.",
            "es-ES": "Deshabilita el HUD de héroe para uno o más jugadores hasta que se vuelva a activar.",
            "es-MX": "Deshabilita el HUD del héroe de uno o más jugadores hasta que vuelva a habilitarse.",
            "fr-FR": "Désactive l’interface du héros pour un ou plusieurs joueurs jusqu’à sa réactivation.",
            "it-IT": "Disabilita l'HUD Eroe per uno o più Giocatori fino alla riattivazione.",
            "ja-JP": "設定を再度変更するまで、1人または複数のプレイヤーのヒーローHUDを表示しない",
            "ko-KR": "재활성화할 때까지 플레이어의 영웅 HUD를 비활성화합니다.",
            "pl-PL": "Wyłącza HUD bohatera dla jednego lub więcej graczy do czasu ponownego włączenia.",
            "pt-BR": "Desabilita o HUD de Herói para um ou mais Jogadores até ele ser reabilitado.",
            "ru-RU": "Отключает интерфейс героя для игрока или игроков до включения.",
            "zh-CN": "隐藏一名或多名玩家的英雄HUD，直到重新被显示为止。"
        }
    },
    "_&disableKillFeed": {
        "description": "Disables the kill feed for one or more players until reenabled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their kill feed disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "000000011093",
        "en-US": "Disable Kill Feed",
        "es-MX": "Deshabilitar historial de eliminaciones",
        "fr-FR": "Désactiver le journal d’action",
        "ja-JP": "キル・フィードを無効化",
        "pt-BR": "Desabilitar Feed de Abates",
        "zh-CN": "隐藏消灭提示",
        "descriptionLocalized": {
            "guid": "000000011090",
            "en-US": "Disables the Kill Feed for one or more Players until reenabled.",
            "de-DE": "Deaktiviert den Killfeed für einen oder mehrere Spieler bis er wieder aktiviert wird.",
            "es-ES": "Deshabilita el resumen de muertes para uno o más jugadores hasta que se vuelva a activar.",
            "es-MX": "Deshabilita el historial de eliminaciones de uno o más jugadores hasta que vuelva a habilitarse.",
            "fr-FR": "Désactive le journal d’action pour un ou plusieurs joueurs jusqu’à sa réactivation.",
            "it-IT": "Disabilita i Dettagli Uccisioni per uno o più Giocatori fino alla riattivazione.",
            "ja-JP": "設定を再度変更するまで、1人または複数のプレイヤーのキル・フィードを表示しない",
            "ko-KR": "재활성화할 때까지 플레이어의 실시간 처치 정보를 비활성화합니다.",
            "pl-PL": "Wyłącza informacje o śmierciach dla jednego lub więcej graczy do czasu ponownego włączenia.",
            "pt-BR": "Desabilita o Feed de Abates para um ou mais Jogadores até ele ser reabilitado.",
            "ru-RU": "Отключает ленту убийств для игрока или игроков до включения.",
            "zh-CN": "隐藏一名或多名玩家的消灭提示，直到重新被显示为止。"
        }
    },
    "_&disableMessages": {
        "description": "Disables messages for one or more players until reenabled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their messages disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000110AE",
        "en-US": "Disable Messages",
        "es-MX": "Deshabilitar mensajes",
        "fr-FR": "Désactiver les messages",
        "ja-JP": "メッセージを無効化",
        "pt-BR": "Desabilitar Mensagens",
        "zh-CN": "隐藏信息",
        "descriptionLocalized": {
            "guid": "0000000110AF",
            "en-US": "Disables Messages for one or more Players until reenabled.",
            "de-DE": "Deaktiviert Nachrichten für einen oder mehrere Spieler bis sie wieder aktiviert werden.",
            "es-ES": "Deshabilita los mensajes para uno o más jugadores hasta que vuelva a activar.",
            "es-MX": "Deshabilita los mensajes de uno o más jugadores hasta que vuelvan a habilitarse.",
            "fr-FR": "Désactive les messages pour un ou plusieurs joueurs jusqu’à leur réactivation.",
            "it-IT": "Disabilita i Messaggi per uno o più Giocatori fino alla riattivazione.",
            "ja-JP": "再度変更するまで、1人または複数のプレイヤーのメッセージを無効にする",
            "ko-KR": "재활성화할 때까지 플레이어의 메시지를 비활성화합니다.",
            "pl-PL": "Wyłącza wiadomości dla jednego lub więcej graczy do czasu ich ponownego włączenia.",
            "pt-BR": "Desabilita Mensagens para um ou mais Jogadores até elas serem reabilitadas.",
            "ru-RU": "Отключает сообщения для игрока или игроков до включения.",
            "zh-CN": "隐藏一名或多名玩家的信息，直到重新被显示为止。"
        }
    },
    "_&disableEnvironmentCollision": {
        "description": "Causes a player or players to stop colliding with the environment (walls, ceilings, certain objects, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement collision is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Include Floors",
                "description": "If true, collision with the floors is also disabled.",
                "type": "bool",
                "default": "false"
            }
        ],
        "return": "void",
        "guid": "0000000112F9",
        "en-US": "Disable Movement Collision With Environment",
        "es-MX": "Deshabilitar colisión de movimiento con entorno",
        "fr-FR": "Désactiver la collision des mouvements avec l’environnement",
        "ja-JP": "移動時の環境との衝突判定を無効化",
        "pt-BR": "Desabilitar Colisão de Movimento com Ambiente",
        "zh-CN": "取消与环境的移动碰撞",
        "descriptionLocalized": {
            "en-US": "Causes a player or players to stop colliding with the environment (walls, ceilings, certain objects, etc.)",
            "guid": "<unknown guid>"
        }
    },
    "_&disablePlayerCollision": {
        "description": "Causes a player or players to stop colliding with other Players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement collision is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000112F7",
        "en-US": "Disable Movement Collision With Players",
        "es-MX": "Deshabilitar colisión de movimiento con jugadores",
        "fr-FR": "Désactiver la collision des mouvements avec les joueurs",
        "ja-JP": "移動時のプレイヤーとの衝突判定を無効化",
        "pt-BR": "Desabilitar Colisão de Movimento com Jogadores",
        "zh-CN": "取消与玩家的移动碰撞",
        "descriptionLocalized": {
            "guid": "000000011305",
            "en-US": "Causes a Player or Players to stop colliding with other Players.",
            "de-DE": "Bewirkt dass ein oder mehrere Spieler nicht mehr mit anderen Spielern kollidieren.",
            "es-ES": "Hace que uno o más jugadores dejen de chocar con otros jugadores.",
            "es-MX": "Provoca que uno o más jugadores dejen de colisionar con otros jugadores.",
            "fr-FR": "Force un ou plusieurs joueurs à ne plus entrer en collision avec les autres joueurs.",
            "it-IT": "Fa sì che un Giocatore o più Giocatori non collidano più con altri Giocatori.",
            "ja-JP": "プレイヤーが他のプレイヤーとぶつからなくなる",
            "ko-KR": "플레이어 간의 충돌 처리를 중지합니다.",
            "pl-PL": "Powoduje że gracz lub gracze przestają wchodzić w kolizje z innymi graczami.",
            "pt-BR": "Faz um Jogador ou Jogadores pararem de colidir com outros Jogadores.",
            "ru-RU": "Отключает для игрока или игроков столкновение с другими игроками.",
            "zh-CN": "使玩家停止与其他玩家发生碰撞。"
        }
    },
    "disableMusic": {
        "description": "Disables all game mode music until reenabled or the match ends.",
        "args": [],
        "guid": "00000000C3F4",
        "return": "void",
        "en-US": "Disable Built-In Game Mode Music",
        "es-MX": "Deshabilitar la música integrada del modo de juego",
        "fr-FR": "Désactiver la musique prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードのBGMを無効化",
        "pt-BR": "Desativar Música Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设音乐模式",
        "descriptionLocalized": {
            "guid": "00000000C3F3",
            "en-US": "Disables all game mode music until reenabled or the match ends.",
            "de-DE": "Deaktiviert sämtliche Musik des Spielmodus bis sie wieder aktiviert wird oder das Match endet.",
            "es-ES": "Deshabilita toda la música del modo de juego hasta que se rehabilite o se acabe la partida.",
            "es-MX": "Deshabilita toda la música del modo de juego hasta que vuelva a habilitarse o finalice la partida.",
            "fr-FR": "Désactive toutes les musiques du mode de jeu jusqu’à leur réactivation ou la fin de la partie.",
            "it-IT": "Disabilita la musica della modalità di gioco fino alla sua riattivazione o al termine della partita.",
            "ja-JP": "設定を再度変更するかマッチが終了するまで、すべてのゲーム・モードのBGMを無効にする",
            "ko-KR": "다시 사용하거나 경기가 종료될 때까지 모든 게임 모드 음악을 사용하지 않도록 합니다.",
            "pl-PL": "Wyłącza całą muzykę trybu gry dopóki nie włączy się jej ponownie lub nie zakończy się mecz.",
            "pt-BR": "Desativa toda a música do modo de jogo até ela ser reativada ou a partida acabar.",
            "ru-RU": "Отключает музыкальное оформление игрового режима до включения или до конца матча.",
            "zh-CN": "禁用游戏模式中所有音乐，直到重新启用或比赛结束为止。"
        }
    },
    "_&disableNameplatesFor": {
        "description": "Disables the nameplate on one or more viewed players from the perspective of one or more viewing players.",
        "args": [
            {
                "name": "Viewed Players",
                "description": "The player or players who will have their nameplates disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Viewing Players",
                "description": "The viewing player or players for whom the viewed player's nameplate will be disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "All Players"
            }
        ],
        "return": "void",
        "guid": "000000011254",
        "en-US": "Disable Nameplates",
        "es-MX": "Deshabilitar placas de nombres",
        "fr-FR": "Désactiver les noms",
        "ja-JP": "ネームプレートを無効化",
        "pt-BR": "Desabilitar Nomes",
        "zh-CN": "隐藏姓名板",
        "descriptionLocalized": {
            "guid": "000000011256",
            "en-US": "Disables the nameplate on one or more Viewed Players from the perspective of one or more Viewing Players.",
            "de-DE": "Deaktiviert die Namensplakette eines oder mehrerer betrachteter Spieler aus der Perspektive eines oder mehrerer Betrachter.",
            "es-ES": "Deshabilita el nombre de uno o más jugadores observados desde la perspectiva de uno o más jugadores observadores.",
            "es-MX": "Deshabilita las placas de nombres de uno o más jugadores observados desde la perspectiva de uno o más jugadores que observan.",
            "fr-FR": "Désactive le nom d’un ou de plusieurs joueurs observés pour un ou plusieurs joueurs spectateurs.",
            "it-IT": "Disabilita l'Indicatore Nome su uno o più Giocatori Osservati dalla prospettiva di uno o più Giocatori Osservatori.",
            "ja-JP": "1人または複数の表示側プレイヤーの視点で、1人または複数の表示対象プレイヤーのネームプレートを無効にする",
            "ko-KR": "관찰자 플레이어의 시점에서 피관찰자 플레이어의 이름표를 비활성화합니다.",
            "pl-PL": "Wyłącza „Nameplate” Pole z nazwą jednego lub więcej obserwowanych graczy z perspektywy jednego lub więcej obserwujących graczy.",
            "pt-BR": "Desabilita o nome para um ou mais Jogadores Observados da perspectiva de um ou mais Jogadores Observadores.",
            "ru-RU": "Отключает таблички с именами наблюдаемых игроков для наблюдающего игрока или игроков.",
            "zh-CN": "从观察玩家的视角看，被观察的玩家的姓名板将被隐藏。"
        }
    },
    "_&disableRespawn": {
        "description": "Disables automatic respawning for one or more players, only allowing respawning by scripting commands.",
        "args": [
            {
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B87A",
        "return": "void",
        "en-US": "Disable Built-In Game Mode Respawning",
        "es-MX": "Deshabilitar la reaparición integrada del modo de juego",
        "fr-FR": "Désactiver la réapparition prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準リスポーンを無効化",
        "pt-BR": "Desativar Ressurgimento Integrado ao Modo de Jogo",
        "zh-CN": "关闭游戏预设重生模式",
        "descriptionLocalized": {
            "guid": "00000000BCCC",
            "en-US": "Disables automatic respawning for one or more Players only allowing respawning by scripting commands.",
            "de-DE": "Deaktiviert automatisches Wiederbeleben für einen oder mehrere Spieler und erlaubt nur Wiederbeleben durch Skriptbefehle.",
            "es-ES": "Deshabilita la reaparición automática de uno o más jugadores y solo permite la reaparición mediante comandos de script.",
            "es-MX": "Deshabilita la reaparición automática de uno o más jugadores y solo les permite reaparecer mediante una secuencia de comandos.",
            "fr-FR": "Désactive la réapparition automatique pour un ou plusieurs joueurs et autorise uniquement la réapparition via des commandes de script.",
            "it-IT": "Disattiva la rigenerazione automatica di uno o più Giocatori permettendone la rigenerazione solo utilizzando comandi di script.",
            "ja-JP": "1人または複数のプレイヤーの自動リスポーンを無効化し、コマンドを記述しないとリスポーンできなくする",
            "ko-KR": "플레이어의 자동 부활 기능을 비활성화하고 스크립트 명령어를 통한 부활만 허용합니다.",
            "pl-PL": "Wyłącza automatyczne odradzanie dla jednego lub więcej graczy i pozwala na odradzanie tylko poprzez komendy skryptowe.",
            "pt-BR": "Desativa o ressurgimento automático de um ou mais Jogadores permitindo o ressurgimento somente por comandos de script.",
            "ru-RU": "Отключает автоматическое возрождение для одного или нескольких игроков оставляя возможность возрождать их только посредством скриптовых команд.",
            "zh-CN": "使一名或多名玩家不再自动重生，只允许其在程序命令控制下重生。"
        }
    },
    "_&disableScoreboard": {
        "description": "Disables the scoreboard for one or more players until reenabled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their scoreboard disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000110A5",
        "en-US": "Disable Scoreboard",
        "es-MX": "Deshabilitar marcador",
        "fr-FR": "Désactiver l’écran des scores",
        "ja-JP": "スコアボードを無効化",
        "pt-BR": "Desativar Placar",
        "zh-CN": "隐藏计分板",
        "descriptionLocalized": {
            "guid": "0000000110A6",
            "en-US": "Disables the Scoreboard for one or more Players until reenabled.",
            "de-DE": "Deaktiviert die Statistik für einen oder mehrere Spieler bis sie wieder aktiviert wird.",
            "es-ES": "Deshabilita las puntuaciones para uno o más jugadores hasta que se vuelva a activar.",
            "es-MX": "Deshabilita el marcador de uno o más jugadores hasta que vuelva a habilitarse.",
            "fr-FR": "Désactive l’écran des scores pour un ou plusieurs joueurs jusqu’à sa réactivation.",
            "it-IT": "Disabilita il Punteggio per uno o più Giocatori fino alla riattivazione.",
            "ja-JP": "設定を再度変更するまで、1人または複数のプレイヤーのスコアボードを表示しない",
            "ko-KR": "재활성화할 때까지 플레이어의 점수판을 비활성화합니다.",
            "pl-PL": "Wyłącza tablicę wyników dla jednego lub więcej graczy do czasu ponownego włączenia.",
            "pt-BR": "Desabilita o Placar para um ou mais Jogadores até ele ser reabilitado.",
            "ru-RU": "Отключает статистику для игрока или игроков до включения.",
            "zh-CN": "隐藏一名或多名玩家的消灭提示，直到重新被显示为止。"
        }
    },
    "disableScoring": {
        "description": "Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.",
        "args": [],
        "guid": "00000000ABFA",
        "return": "void",
        "en-US": "Disable Built-In Game Mode Scoring",
        "es-MX": "Deshabilitar el sistema de puntuación integrado del modo de juego",
        "fr-FR": "Désactiver le calcul des points prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準スコアリングを無効化",
        "pt-BR": "Desativar Pontuação Integrada ao Modo de Jogo",
        "zh-CN": "关闭游戏预设计分模式",
        "descriptionLocalized": {
            "guid": "00000000BC8D",
            "en-US": "Disables changes to player and team scores from the game mode itself only allowing scores to be changed by scripting commands.",
            "de-DE": "Deaktiviert Änderungen an Spieler- und Teampunkteständen über den Spielmodus selbst sodass Punktestände nur durch Skriptbefehle geändert werden können.",
            "es-ES": "Deshabilita los cambios en las puntuaciones de jugador y equipo según el propio modo de juego y solo permite que las puntuaciones cambien mediante comandos de script.",
            "es-MX": "Deshabilita los cambios en las puntuaciones del jugador y del equipo en el modo de juego y solo permite que se cambien las puntuaciones mediante una secuencia de comandos.",
            "fr-FR": "Désactive les modifications du score de joueur et d’équipe liées au mode de jeu même. Désormais il sera uniquement possible de modifier les scores via les commandes de script.",
            "it-IT": "Disabilita le variazioni ai punteggi del Giocatore e della Squadra da parte della modalità di gioco consentendo cambiamenti ai punteggi solo utilizzando comandi di script.",
            "ja-JP": "ゲーム・モード自体によるプレイヤーおよびチームのスコア変更を無効化し、コマンドを記述しないとスコアを変更できなくする",
            "ko-KR": "게임 모드 자체에서 플레이어 점수와 팀 점수를 변경하지 못하도록 하며 스크립트 명령어로만 점수 변경이 가능하도록 합니다.",
            "pl-PL": "Wyłącza zmiany wyników gracza i drużyny przez sam tryb gry co pozwala zmieniać wyniki wyłącznie poprzez komendy skryptowe.",
            "pt-BR": "Desativa as mudanças nas pontuações de jogador e de equipe do modo de jogo em si só permitindo que as pontuações sejam alteradas por comandos de script.",
            "ru-RU": "Отключает изменение счета игрока и команды самим режимом игры позволяя менять счет только посредством скриптовых команд.",
            "zh-CN": "取消游戏模式本身对玩家和队伍进行的计分，分数只会由程序命令改变。"
        }
    },
    "_&disableDeathSpectateAllPlayers": {
        "description": "Undoes the effect of the enable death spectate all players action for or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose default death spectate behavior is restored.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9B5",
        "return": "void",
        "en-US": "Disable Death Spectate All Players",
        "es-MX": "Deshabilitar la observación de todos los jugadores como espectador muerto",
        "fr-FR": "Empêcher d’observer n’importe qui après la mort",
        "ja-JP": "観戦時に全プレイヤー選択可能を無効化",
        "pt-BR": "Desativar Visualização de Todos os Jogadores na Morte",
        "zh-CN": "对所有玩家禁用死亡回放",
        "descriptionLocalized": {
            "en-US": "Undoes the effect of the enable death spectate all players action for or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&disableDeathSpectateTargetHud": {
        "description": "Undoes the effect of the enable death spectate target hud action for or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will revert to seeing their own hud while death spectating.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9B3",
        "return": "void",
        "en-US": "Disable Death Spectate Target HUD",
        "es-MX": "Deshabilitar la observación del HUD objetivo como espectador muerto",
        "fr-FR": "Empêcher de voir l’interface de la cible après la mort",
        "ja-JP": "観戦中のターゲットHUD表示を無効化",
        "pt-BR": "Desativar HUD do Alvo de Visualização na Morte",
        "zh-CN": "禁用死亡回放时目标的HUD",
        "descriptionLocalized": {
            "en-US": "Undoes the effect of the enable death spectate target hud action for or more players.",
            "guid": "<unknown guid>"
        }
    },
    "disableInspector": {
        "description": "Causes the workshop inspector to stop recording new entries. This has the benefit of reducing your script's server load, particularly when modifying arrays.",
        "args": [],
        "guid": "00000000FB2F",
        "return": "void",
        "en-US": "Disable Inspector Recording",
        "es-MX": "Desactivar registro de Inspector",
        "fr-FR": "Désactiver l’enregistrement du contrôleur",
        "ja-JP": "インスペクターでの記録を無効化",
        "pt-BR": "Desativar gravação do Inspetor",
        "zh-CN": "禁用查看器录制",
        "descriptionLocalized": {
            "guid": "00000000FB30",
            "en-US": "Causes the Workshop Inspector to stop recording new entries. This has the benefit of reducing your script's server load particularly when modifying arrays.",
            "de-DE": "Veranlasst den Workshop Inspector dazu keine neuen Einträge mehr zu erfassen. Dadurch verringert sich die Serverauslastung deines Skripts vor allem beim Modifizieren von Arrays.",
            "es-ES": "Hace que el inspector del Taller deje de registrar nuevas entradas. Tiene el beneficio de que reduce la carga de tu script en el servidor especialmente al modificar matrices.",
            "es-MX": "Hace que el Inspector de Workshop deje de registrar nuevas entradas. Esto tiene el beneficio de reducir el uso del servidor de tu secuencia de comandos sobre todo al modificar matrices.",
            "fr-FR": "Force le contrôleur de la Forge à cesser d’enregistrer de nouvelles entrées. Cela permet de réduire la charge de votre script sur le serveur en particulier lors des modifications de tableaux.",
            "it-IT": "Fa sì che il Workshop Inspector smetta di registrare nuove voci. Questa opzione permette di ridurre il carico del server dello script soprattutto quando si modificano gli array.",
            "ja-JP": "ワークショップ・インスペクターでのエントリーの記録を停止する。特に配列の操作時に、スクリプトのサーバー負荷を抑えることができる",
            "ko-KR": "워크샵 인스펙터가 새로운 입력값을 기록하는 것을 멈춥니다. 이는 스크립트의 서버 부하량을 감소시키는 효과를 가지고 있습니다. 배열을 편집할 때 특히 효과가 좋습니다.",
            "pl-PL": "Powoduje że Inspektor Warsztatu przestaje rejestrować nowe wpisy. Ma to tę zaletę że zmniejsza obciążenie serwera przez twój skrypt szczególnie podczas modyfikacji tablic.",
            "pt-BR": "Faz o Inspetor do Workshop parar de gravar novas entradas. Isso tem a vantagem de reduzir a carga do seu script no servidor principalmente na modificação de matrizes.",
            "ru-RU": "Отключает фиксацию новых записей инспектором «Мастерской». Это снижает нагрузку на сервер при выполнении скрипта в особенности при модификации массивов.",
            "zh-CN": "使地图工坊查看器无法录制新的条目。此功能可以降低你的脚本对服务器造成的负担，特别是当修改数组时。"
        }
    },
    "_&disableTextChat": {
        "description": "Disables Text Chat for one or more Players until reenabled",
        "args": [
            {
                "name": "Player",
                "description": "The player or players who will have their text chat disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            }
        ],
        "return": "void",
        "en-US": "Disable Text Chat",
        "descriptionLocalized": {
            "en-US": "Disables Text Chat for one or more Players until reenabled",
            "guid": "<unknown guid>"
        }
    },
    "_&disableVoiceChat": {
        "description": "Disables voice chat for one or more players until reenabled",
        "args": [
            {
                "name": "Player",
                "description": "The player or players who will have their text chat disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            },
            {
                "name": "disable Team Voice Chat",
                "description": "Whether or not team voice chat will be disabled.",
                "type": "bool",
                "default": true
            },
            {
                "name": "disable Match Voice Chat",
                "description": "Whether or not match voice chat will be disabled.",
                "type": "bool",
                "default": true
            },
            {
                "name": "disable Group Voice Chat",
                "description": "Whether or not group voice chat will be disabled.",
                "type": "bool",
                "default": true
            }
        ],
        "return": "void",
        "en-US": "Disable Voice Chat",
        "descriptionLocalized": {
            "en-US": "Disables voice chat for one or more players until reenabled",
            "guid": "<unknown guid>"
        }
    },
    "_&disallowButton": {
        "description": "Disables a logical button for one or more players such that pressing it has no effect.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose button is being disabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is being disabled.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            }
        ],
        "guid": "00000000B9CF",
        "return": "void",
        "en-US": "Disallow Button",
        "es-MX": "Deshabilitar botón",
        "fr-FR": "Interdire le bouton",
        "ja-JP": "ボタンを無効化",
        "pt-BR": "Proibir Botão",
        "zh-CN": "禁用按钮",
        "descriptionLocalized": {
            "guid": "00000000BD22",
            "en-US": "Disables a logical Button for one or more Players such that pressing it has no effect.",
            "de-DE": "Deaktiviert eine logische Taste für einen oder mehrere Spieler sodass das Drücken dieser Taste keinen Effekt hat.",
            "es-ES": "Deshabilita un botón lógico para uno o más jugadores de modo que pulsarlo no surta ningún efecto.",
            "es-MX": "Deshabilita un botón lógico para uno o más jugadores de modo que al presionarlo no tenga efecto.",
            "fr-FR": "Désactive un bouton logique pour un ou plusieurs joueurs ; celui-ci n’aura plus d’effet.",
            "it-IT": "Disabilita un Tasto logico per uno o più Giocatori in modo che premendolo non generi alcun effetto.",
            "ja-JP": "1人または複数のプレイヤーのロジカル・ボタンを無効化し、押しても作動しないようにする",
            "ko-KR": "플레이어가 논리적 버튼을 사용 못 하게 하여 눌러도 아무 효과 없도록 합니다.",
            "pl-PL": "Wyłącza logiczny przycisk dla jednego lub więcej graczy tak aby jego naciśniecie nie miało żadnego efektu.",
            "pt-BR": "Desativa um Botão lógico de um ou mais Jogadores para que o pressionamento do botão não tenha efeito.",
            "ru-RU": "Отключает логическую кнопку для одного или нескольких игроков из-за чего нажимать эту кнопку бесполезно.",
            "zh-CN": "禁用一名或多名玩家的逻辑按键，按下此按键后不会产生效果。"
        }
    },
    "__else__": {
        "description": "Denotes the beginning of a series of actions that will only execute if the previous If or Else If action's condition was false.",
        "args": [],
        "guid": "00000000FB34",
        "return": "void",
        "en-US": "Else",
        "es-MX": "Si no",
        "fr-FR": "Sinon",
        "ja-JP": "ELSE",
        "descriptionLocalized": {
            "guid": "00000000FB3B",
            "en-US": "Denotes the beginning of a series of actions that will only execute if the previous If or Else If action's Condition was false.",
            "de-DE": "Markiert den Beginn einer Reihe von Aktionen die nur ausgeführt werden wenn die Bedingung der vorherigen Aktion [If] oder [Else If] False war.",
            "es-ES": "Denota el comienzo de una serie de acciones que solo se ejecutarán si la condición de la anterior acción «If» o «Else If» era falsa.",
            "es-MX": "Marca el inicio de una serie de acciones que solo se ejecutarán si la anterior condición de la acción Si o Si no si fue falsa.",
            "fr-FR": "Marque le début d’une série d’actions qui ne s’exécuteront que si la condition de l’action « Si » ou « Sinon Si » précédente était fausse.",
            "it-IT": "Indica l'inizio di una serie di azioni che vengono eseguite solo se la Condizione dell'azione If o Else if precedente era falsa.",
            "ja-JP": "前にある「IF」または「ELSE IF」の判定が「FALSE」の場合に、後に続く一連のアクションを開始させる",
            "ko-KR": "이전 If 또는 Else If 액션의 조건이 거짓일 때에만 일련의 액션들이 시작됨을 의미합니다.",
            "pl-PL": "Oznacza początek serii działań które zostaną wykonane tylko wtedy gdy warunek poprzedniego działania „If” Jeśli lub „Else If” Inaczej jeśli był fałszem.",
            "pt-BR": "Denota o início de uma série de ações que só serão executadas se a Condição da ação If ou Else If anterior for falsa.",
            "ru-RU": "Обозначает начало серии действий которая будет выполняться только в том случае если условия предыдущих действий [If] или [Else If] имеют значение [False].",
            "zh-CN": "表示仅在前一个If或Else If的条件为假时，才会开始的一系列行动。"
        }
    },
    "__elif__": {
        "description": "Denotes the beginning of a series of actions that will only execute if the specified condition is true and the previous If or Else If action's condition was false.",
        "args": [
            {
                "name": "CONDITION",
                "description": "If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next else if, else, or end action at the current level.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000FB33",
        "return": "void",
        "en-US": "Else If",
        "es-MX": "Si no si",
        "fr-FR": "Sinon Si",
        "ja-JP": "ELSE IF",
        "descriptionLocalized": {
            "guid": "00000000FB3C",
            "en-US": "Denotes the beginning of a series of actions that will only execute if the specified Condition is true and the previous If or Else If action's Condition was false.",
            "de-DE": "Markiert den Beginn einer Reihe von Aktionen die nur ausgeführt werden wenn die festgelegte Bedingung True ist und die Bedingung der vorherigen Aktion [If] oder [Else If] False war.",
            "es-ES": "Denota el comienzo de una serie de acciones que solo se ejecutarán si la condición especificada es verdadera y la condición de la anterior acción «If» o «Else If» era falsa.",
            "es-MX": "Marca el inicio de una serie de acciones que solo se ejecutarán si la condición específica es verdadera y la anterior condición de la acción Si o Si no si fue falsa.",
            "fr-FR": "Marque le début d’une série d’actions qui ne s’exécuteront que si la condition spécifiée est vraie et que la condition de l’action « Si » ou « Sinon Si » précédente était fausse.",
            "it-IT": "Indica l'inizio di una serie di azioni che vengono eseguite solo se la Condizione specificata è vera e la Condizione dell'azione If o Else if precedente era falsa.",
            "ja-JP": "前にある「IF」または「ELSE IF」の判定が「FALSE」で、さらに指定した条件の判定結果が「TRUE」の場合に、後に続く一連のアクションを開始させる",
            "ko-KR": "명시된 조건들이 참이고 이전 If 또는 Else If 액션의 조건이 거짓일 때에만 일련의 액션들이 시작됨을 의미합니다.",
            "pl-PL": "Oznacza początek serii działań które zostaną wykonane tylko wtedy gdy określony warunek jest prawdziwy a warunek poprzedniego działania „If” Jeśli lub „Else If” Inaczej jeśli był fałszem.",
            "pt-BR": "Denota o início de uma série de ações que só serão executadas se a Condição especificada for verdadeira e se a Condição da ação If ou Else If anterior for falsa.",
            "ru-RU": "Обозначает начало серии действий которая будет выполняться только в том случае если указанное условие имеет значение [True] а условия предыдущих действий [If] или [Else If] имеют значение [False].",
            "zh-CN": "表示仅在指定条件为真，且前一个If或Else If的条件为假时，才会开始的一系列行动。"
        }
    },
    "enableAnnouncer": {
        "description": "Undoes the effect of the disable built-in game mode announcer action.",
        "args": [],
        "guid": "00000000C3FA",
        "return": "void",
        "en-US": "Enable Built-In Game Mode Announcer",
        "es-MX": "Habilitar presentador integrado del modo de juego",
        "fr-FR": "Activer l’annonceur prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの通知を有効化",
        "pt-BR": "Ativar Narração Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设通告模式",
        "descriptionLocalized": {
            "guid": "00000000C3F9",
            "en-US": "Undoes the effect of the Disable Built-In Game Mode Announcer Action.",
            "de-DE": "Macht den Effekt der Aktion [Disable Built-In Game Mode Announcer] rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Built-In Game Mode Announcer».",
            "es-MX": "Deshace el efecto de la acción Deshabilitar el presentador integrado del modo de juego.",
            "fr-FR": "Annule l’effet de l’action « Désactiver l’annonceur prédéfini par le mode de jeu ».",
            "it-IT": "Annulla l'effetto dell'Azione Disable Built-In Game Mode Announcer.",
            "ja-JP": "「ゲーム・モードの通知を無効化」アクションの効果を取り消す",
            "ko-KR": "Disable Built-In Game Mode Announcer 액션의 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Built-In Game Mode Announcer” Wyłącz wbudowanego komentatora.",
            "pt-BR": "Desfaz o efeito da Ação Desativar Narração Integrada ao Modo de Jogo.",
            "ru-RU": "Отменяет эффект действия [Disable Built-In Game Mode Announcer].",
            "zh-CN": "取消“关闭游戏预设通告模式”动作的效果。"
        }
    },
    "enableGamemodeCompletion": {
        "description": "Undoes the effect of the disable built-in game mode completion action.",
        "args": [],
        "guid": "00000000AD2F",
        "return": "void",
        "en-US": "Enable Built-In Game Mode Completion",
        "es-MX": "Habilitar la finalización integrada del modo de juego",
        "fr-FR": "Activer l’accomplissement prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準完了を有効化",
        "pt-BR": "Ativar Conclusão Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设完成条件",
        "descriptionLocalized": {
            "guid": "00000000BC98",
            "en-US": "Undoes the effect of the Disable Built-In Game Mode Completion Action.",
            "de-DE": "Macht den Effekt der Aktion [Disable Built-In Game Mode Completion] rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Built-In Game Mode Completion».",
            "es-MX": "Deshace el efecto de la acción Deshabilitar la finalización integrada del modo de juego.",
            "fr-FR": "Annule l’effet de l’action « Désactiver l’accomplissement prédéfini par le mode de jeu ».",
            "it-IT": "Annulla l'effetto dell'Azione Disable Built-In Game Mode Completion.",
            "ja-JP": "「ゲーム・モードの標準完了を無効化」アクションの効果を取り消す",
            "ko-KR": "Disable Built-In Game Mode Completion 액션의 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Built-In Game Mode Respawning” Wyłącz wbudowany system odrodzeń.",
            "pt-BR": "Desfaz o efeito da Ação Desativar Conclusão Integrada ao Modo de Jogo.",
            "ru-RU": "Отменяет эффект действия [Disable Built-In Game Mode Completion].",
            "zh-CN": "取消“关闭游戏预设完成条件”动作的效果。"
        }
    },
    "_&enableGamemodeHud": {
        "description": "Undoes the effect of the Disable Game Mode HUD Action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their game mode HUD enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000110A7",
        "en-US": "Enable Game Mode HUD",
        "es-MX": "Habilitar HUD del modo de juego",
        "fr-FR": "Activer l’interface du mode de jeu",
        "ja-JP": "ゲーム・モードHUDを有効化",
        "pt-BR": "Habilitar HUD de Modo de Jogo",
        "zh-CN": "显示游戏模式HUD",
        "descriptionLocalized": {
            "guid": "0000000110AA",
            "en-US": "Undoes the effect of the Disable Game Mode HUD Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Game Mode HUD] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Game Mode HUD» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar HUD del modo de juego de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver l’interface du mode de jeu » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Game Mode HUD per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対して、「ゲーム・モードHUDを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Game Mode HUD 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Game Mode HUD” Wyłącz HUD trybu gry dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desabilitar HUD de Modo de Jogo para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Game Mode HUD] для одного или нескольких игроков.",
            "zh-CN": "取消“隐藏游戏模式HUD”动作的效果。"
        }
    },
    "_&enableGamemodeInWorldUi": {
        "description": "Undoes the effect of the Disable Game Mode In-World UI Action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their game mode in-world UI enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "00000001123F",
        "en-US": "Enable Game Mode In-World UI",
        "es-MX": "Habilitar IU dentro del mundo del modo de juego",
        "fr-FR": "Activer l’interface en jeu du mode de jeu",
        "ja-JP": "ゲーム・モードのワールド内UIを有効化",
        "pt-BR": "Habilitar IU no Mundo do Modo de Jogo",
        "zh-CN": "显示游戏模式地图UI",
        "descriptionLocalized": {
            "guid": "000000011240",
            "en-US": "Undoes the effect of the Disable Game Mode In-World UI Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Game Mode In-World UI] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Game Mode In-World UI» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar IU dentro del mundo del modo de juego de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver l’interface en jeu du mode de jeu » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Game Mode In-World UI per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対して、「ゲーム・モードのワールド内UIを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Game Mode In-World UI 엑션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Game Mode In-World UI” Wyłącz interfejs w świecie gry dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desabilitar IU no Mundo do Modo de Jogo para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Game Mode In-World UI] для одного или нескольких игроков.",
            "zh-CN": "取消“隐藏游戏模式地图UI”动作的效果。"
        }
    },
    "_&enableHeroHud": {
        "description": "Undoes the effect of the Disable Hero HUD Action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their hero HUD enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "00000001109B",
        "en-US": "Enable Hero HUD",
        "es-MX": "Habilitar HUD del héroe",
        "fr-FR": "Activer l’interface du héros",
        "ja-JP": "ヒーローHUDを有効化",
        "pt-BR": "Habilitar HUD de Herói",
        "zh-CN": "显示英雄HUD",
        "descriptionLocalized": {
            "guid": "00000001109C",
            "en-US": "Undoes the effect of the Disable Hero HUD Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Hero HUD] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Hero HUD» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar HUD del héroe de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver l’interface du héros » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Hero HUD per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対して、「ヒーローHUDを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Hero HUD 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Hero HUD” Wyłącz HUD bohatera dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desabilitar HUD de Herói para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Hero HUD] для одного или нескольких игроков.",
            "zh-CN": "取消“隐藏英雄HUD”动作的效果。"
        }
    },
    "_&enableKillFeed": {
        "description": "Undoes the effect of the Disable Kill Feed Action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their kill feed enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "000000011092",
        "en-US": "Enable Kill Feed",
        "es-MX": "Habilitar historial de eliminaciones",
        "fr-FR": "Activer le journal d’action",
        "ja-JP": "キル・フィードを有効化",
        "pt-BR": "Habilitar Feed de Abates",
        "zh-CN": "显示消灭提示",
        "descriptionLocalized": {
            "guid": "000000011091",
            "en-US": "Undoes the effect of the Disable Kill Feed Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Kill Feed] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Kill Feed» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar historial de eliminaciones de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver le journal d’action » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Kill Feed per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対する「キル・フィードを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Kill Feed 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Kill Feed” Wyłącz informacje o śmierci dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desabilitar Feed de Abates para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Kill Feed] для одного или нескольких игроков.",
            "zh-CN": "取消“隐藏消灭提示”动作的效果。"
        }
    },
    "_&enableMessages": {
        "description": "Undoes the effect of the Disable Messages Action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their messages enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000110AD",
        "en-US": "Enable Messages",
        "es-MX": "Habilitar mensajes",
        "fr-FR": "Activer les messages",
        "ja-JP": "メッセージを有効化",
        "pt-BR": "Habilitar Mensagens",
        "zh-CN": "显示信息",
        "descriptionLocalized": {
            "guid": "0000000110B0",
            "en-US": "Undoes the effect of the Disable Messages Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Messages] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Messages» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar mensajes de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver les messages » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Messages per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対する「メッセージを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Messages 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Messages” Wyłącz wiadomości dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desabilitar Mensagens para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Messages] для одного или нескольких игроков.",
            "zh-CN": "取消“隐藏信息”动作的效果。"
        }
    },
    "_&enableEnvironmentCollision": {
        "description": "Undoes the effect of the Disable Movement Collision With Enviroment action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement collision is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000112FA",
        "en-US": "Enable Movement Collision With Environment",
        "es-MX": "Habilitar colisión de movimiento con entorno",
        "fr-FR": "Activer la collision des mouvements avec l’environnement",
        "ja-JP": "移動時の環境との衝突判定を有効化",
        "pt-BR": "Habilitar Colisão de Movimento com Ambiente",
        "zh-CN": "开启与环境的移动碰撞",
        "descriptionLocalized": {
            "en-US": "Undoes the effect of the Disable Movement Collision With Enviroment action for one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&enablePlayerCollision": {
        "description": "Undoes the effect of the Disable Movement Collision With Players action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement collision is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000112F8",
        "en-US": "Enable Movement Collision With Players",
        "es-MX": "Habilitar colisión de movimiento con jugadores",
        "fr-FR": "Activer la collision des mouvements avec les joueurs",
        "ja-JP": "移動時のプレイヤーとの衝突判定を有効化",
        "pt-BR": "Habilitar Colisão de Movimento com Jogadores",
        "zh-CN": "开启与玩家的移动碰撞",
        "descriptionLocalized": {
            "guid": "000000011306",
            "en-US": "Undoes the effect of the Disable Movement Collision With Players action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Movement Collision With Players] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Movement Collision With Players» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar colisión de movimiento con jugadores de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver la collision des mouvements avec les joueurs » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'azione Disable Movement Collision With Players per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対して、「移動時のプレイヤーとの衝突判定を無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Movement Collision With Players 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Movement Collision With Players” Wyłącz kolizje między graczami w ruchu dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da ação Desabilitar Colisão de Movimento com Jogadores para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Movement Collision With Players] для одного или нескольких игроков.",
            "zh-CN": "取消“取消与玩家的移动碰撞”动作的效果。"
        }
    },
    "enableMusic": {
        "description": "Undoes the effect of the disable built-in game mode music action.",
        "args": [],
        "guid": "00000000C3F6",
        "return": "void",
        "en-US": "Enable Built-In Game Mode Music",
        "es-MX": "Habilitar la música integrada del modo de juego",
        "fr-FR": "Activer la musique prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードのBGMを有効化",
        "pt-BR": "Ativar Música Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设音乐模式",
        "descriptionLocalized": {
            "guid": "00000000C3F5",
            "en-US": "Undoes the effect of the Disable Built-In Game Mode Music Action.",
            "de-DE": "Macht den Effekt der Aktion [Disable Built-In Game Mode Music] rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Built-In Game Mode Music».",
            "es-MX": "Deshace el efecto de la acción Deshabilitar la música integrada del modo de juego.",
            "fr-FR": "Annule l’effet de l’action « Désactiver la musique prédéfinie par le mode de jeu ».",
            "it-IT": "Annulla l'effetto dell'Azione Disable Built-In Game Mode Music.",
            "ja-JP": "「ゲーム・モードのBGMを無効化」アクションの効果を取り消す",
            "ko-KR": "Disable Built-In Game Mode Music 액션의 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Built-In Game Mode Music” Wyłącz wbudowaną muzykę.",
            "pt-BR": "Desfaz o efeito da Ação Desativar Música Integrada ao Modo de Jogo.",
            "ru-RU": "Отменяет эффект действия [Disable Built-In Game Mode Music].",
            "zh-CN": "取消“关闭游戏预设音乐模式”动作的效果。"
        }
    },
    "_&enableNameplatesFor": {
        "description": "Undoes the effect of Disable Nameplates for one or more viewed players from the perspective of one or more viewing players.",
        "args": [
            {
                "name": "Viewed Players",
                "description": "The player or players who will have their nameplates enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Viewing Players",
                "description": "The viewing player or players for whom the viewed player's nameplate will be enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "All Players"
            }
        ],
        "return": "void",
        "guid": "000000011253",
        "en-US": "Enable Nameplates",
        "es-MX": "Habilitar placas de nombres",
        "fr-FR": "Activer les noms",
        "ja-JP": "ネームプレートを有効化",
        "pt-BR": "Habilitar Nomes",
        "zh-CN": "显示姓名板",
        "descriptionLocalized": {
            "guid": "000000011255",
            "en-US": "Undoes the effect of Disable Nameplates for one or more Viewed Players from the perspective of one or more Viewing Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Nameplates] für einen oder mehrere betrachtete Spieler aus der Perspektive eines oder mehrerer Zuschauer rückgängig.",
            "es-ES": "Deshace el efecto «Disable Nameplates» de uno o más jugadores observados desde la perspectiva de uno o más jugadores observadores.",
            "es-MX": "Deshace el efecto de Deshabilitar placas de nombres de uno o más jugadores observados desde la perspectiva de uno o más jugadores que observan.",
            "fr-FR": "Annule l’effet de « Désactiver les noms » d’un ou de plusieurs joueurs observés pour un ou plusieurs spectateurs.",
            "it-IT": "Annulla l'effetto di Disable Nameplates per uno o più Giocatori Osservati dalla prospettiva di uno o più Giocatori Osservatori.",
            "ja-JP": "1人または複数の表示側プレイヤーの視点で、1人または複数の表示対象プレイヤーの「ネームプレートを無効化」の効果を取り消す",
            "ko-KR": "관찰자 플레이어의 시점에서 피관찰자 플레이어의 Disable Nameplates 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Nameplates” Wyłącz pola z nazwą dla jednego lub więcej obserwowanych graczy z perspektywy jednego lub więcej obserwujących graczy.",
            "pt-BR": "Desfaz o efeito de Desabilitar Nomes para um ou mais Jogadores Observados da perspectiva de um ou mais Jogadores Observadores.",
            "ru-RU": "Отменяет действие [Disable Nameplates] наблюдаемого игрока или игроков для наблюдающего игрока или игроков.",
            "zh-CN": "从观察玩家的视角看，取消被观察的玩家的“隐藏姓名板”效果。"
        }
    },
    "_&enableRespawn": {
        "description": "Undoes the effect of the disable built-in game mode respawning action for one or more players.",
        "args": [
            {
                "name": "PLAYERS",
                "description": "The player or players whose respawning is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B878",
        "return": "void",
        "en-US": "Enable Built-In Game Mode Respawning",
        "es-MX": "Habilitar la reaparición integrada del modo de juego",
        "fr-FR": "Activer la réapparition prédéfinie par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準リスポーンを有効化",
        "pt-BR": "Ativar Ressurgimento Integrado ao Modo de Jogo",
        "zh-CN": "开启游戏预设重生模式",
        "descriptionLocalized": {
            "guid": "00000000BCCB",
            "en-US": "Undoes the effect of the Disable Built-In Game Mode Respawning Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Built-In Game Mode Respawning] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Built-In Game Mode Respawning» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar la reaparición integrada del modo de juego en uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver la réapparition prédéfinie par le mode de jeu » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Built-In Game Mode Respawning per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対して、「ゲーム・モード標準リスポーンを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Built-In Game Mode Respawning 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Built-In Game Mode Respawning” Wyłącz wbudowany system odrodzeń dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desativar Ressurgimento Integrado ao Modo de Jogo para um ou mais Jogadores.",
            "ru-RU": "Отменяет эффект действия [Disable Built-In Game Mode Respawning] для одного или нескольких игроков.",
            "zh-CN": "取消“关闭游戏预设重生模式”动作的效果。"
        }
    },
    "_&enableScoreboard": {
        "description": "Undoes the effect of the Disable Scoreboard Action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will have their scoreboard enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000110A1",
        "en-US": "Enable Scoreboard",
        "es-MX": "Habilitar marcador",
        "fr-FR": "Activer l’écran des scores",
        "ja-JP": "スコアボードを有効化",
        "pt-BR": "Habilitar Placar",
        "zh-CN": "显示计分板",
        "descriptionLocalized": {
            "guid": "0000000110A2",
            "en-US": "Undoes the effect of the Disable Scoreboard Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Disable Scoreboard] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Scoreboard» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Deshabilitar marcador de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Désactiver l’écran des scores » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Disable Scoreboard per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対する「スコアボードを無効化」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Disable Scoreboard 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Scoreboard” Wyłącz tabelę wyników dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Desabilitar HUD de Herói para um ou mais Jogadores.",
            "ru-RU": "Отменяет действие [Disable Scoreboard] для одного или нескольких игроков.",
            "zh-CN": "取消“隐藏计分板”动作的效果。"
        }
    },
    "enableScoring": {
        "description": "Undoes the effect of the disable built-in game mode scoring action.",
        "args": [],
        "guid": "00000000ABF8",
        "return": "void",
        "en-US": "Enable Built-In Game Mode Scoring",
        "es-MX": "Habilitar el sistema de puntuación integrado del modo de juego",
        "fr-FR": "Activer le calcul des points prédéfini par le mode de jeu",
        "ja-JP": "ゲーム・モードの標準スコアリングを有効化",
        "pt-BR": "Ativar Pontuação Integrada ao Modo de Jogo",
        "zh-CN": "开启游戏预设计分模式",
        "descriptionLocalized": {
            "guid": "00000000BC8C",
            "en-US": "Undoes the effect of the Disable Built-In Game Mode Scoring Action.",
            "de-DE": "Macht den Effekt der Aktion [Disable Built-In Game Mode Scoring] rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Disable Built-In Game Mode Scoring».",
            "es-MX": "Deshace el efecto de la acción Deshabilitar el sistema de puntuación integrado del modo de juego.",
            "fr-FR": "Annule l’effet de l’action « Désactiver le calcul des points prédéfini par le mode de jeu ».",
            "it-IT": "Annulla l'effetto dell'Azione Disable Built-In Game Mode Scoring.",
            "ja-JP": "「ゲーム・モードの標準スコアリングを無効化」アクションの効果を取り消す",
            "ko-KR": "Disable Built-In Game Mode Scoring 액션의 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Disable Built-In Game Mode Scoring” Wyłącz wbudowany system punktacji.",
            "pt-BR": "Desfaz o efeito da Ação Desativar Pontuação Integrada ao Modo de Jogo.",
            "ru-RU": "Отменяет эффект действия [Disable Built-In Game Mode Scoring].",
            "zh-CN": "取消“关闭游戏预设计分模式”动作的效果。"
        }
    },
    "_&enableDeathSpectateAllPlayers": {
        "description": "Allows one or more players to spectate all players when dead, as opposed to only allies.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be allowed to spectate all players.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9AE",
        "return": "void",
        "en-US": "Enable Death Spectate All Players",
        "es-MX": "Habilitar la observación de todos los jugadores como espectador muerto",
        "fr-FR": "Permettre d’observer n’importe qui après la mort",
        "ja-JP": "観戦時に全プレイヤー選択可能を有効化",
        "pt-BR": "Ativar Visualização de Todos os Jogadores na Morte",
        "zh-CN": "对所有玩家启用死亡回放",
        "descriptionLocalized": {
            "guid": "00000000BCF2",
            "en-US": "Allows one or more Players to spectate all Players when dead as opposed to only allies.",
            "de-DE": "Erlaubt einem oder mehreren Spielern nach dem Tod allen Spielern zuzuschauen anstatt nur Verbündeten.",
            "es-ES": "Permite que uno o más jugadores observen a todos los jugadores mientras están muertos en lugar de solo a los aliados.",
            "es-MX": "Permite que uno o más jugadores observen a todos los jugadores como espectadores muertos en lugar de observar solo a los aliados.",
            "fr-FR": "Autorise un ou plusieurs joueurs à observer tous les joueurs après la mort au lieu d’être limité aux alliés.",
            "it-IT": "Permette a uno o più Giocatori di osservare tutti gli altri Giocatori una volta morti invece che solo gli alleati.",
            "ja-JP": "1人または複数のプレイヤーが倒れた場合、味方だけでなく、すべてのプレイヤーを観戦できるようにする",
            "ko-KR": "플레이어 사망 시 아군뿐 아니라 모든 플레이어를 관전할 수 있도록 허용합니다.",
            "pl-PL": "Pozwala jednemu lub większej liczbie martwych graczy obserwować wszystkich graczy nie tylko sojuszników.",
            "pt-BR": "Permite que um ou mais Jogadores visualizem todos os Jogadores quando estiverem mortos em vez de apenas aliados.",
            "ru-RU": "Позволяет одному или нескольким игрокам после смерти наблюдать за всеми игроками а не только за союзниками.",
            "zh-CN": "使一名或多名玩家死亡后可以观看所有玩家的比赛，而不止是自己的盟友。"
        }
    },
    "_&enableDeathSpectateTargetHud": {
        "description": "Causes one or more players to see their spectate target's hud instead of their own while death spectating.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will begin seeing their spectate targets hud while death spectating.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9B4",
        "return": "void",
        "en-US": "Enable Death Spectate Target HUD",
        "es-MX": "Habilitar la observación del HUD objetivo como espectador muerto",
        "fr-FR": "Permettre de voir l’interface de la cible après la mort",
        "ja-JP": "観戦中のターゲットHUD表示を有効化",
        "pt-BR": "Ativar HUD do Alvo de Visualização na Morte",
        "zh-CN": "启用死亡回放时目标的HUD",
        "descriptionLocalized": {
            "guid": "00000000BCFD",
            "en-US": "Causes one or more Players to see their spectate target's HUD instead of their own while death spectating.",
            "de-DE": "Bewirkt dass ein oder mehrere Spieler das HUD ihres Zuschauerziels anstelle ihres eigenen im Zuschauermodus nach dem Tod sehen.",
            "es-ES": "Provoca que uno o más jugadores vean el HUD de su objetivo de observación en lugar del suyo propio mientras están muertos.",
            "es-MX": "Causa que uno o más jugadores vean el HUD de su objetivo observado en lugar de ver su propio HUD como espectador muerto.",
            "fr-FR": "Force un ou plusieurs joueurs à voir l’interface de leur cible au lieu de la leur lorsqu’ils passent en mode Spectateur après être morts.",
            "it-IT": "Consente a uno o più Giocatori morti di vedere l'HUD del bersaglio che stanno osservando invece della propria.",
            "ja-JP": "1人または複数のプレイヤーが観戦中に自分のHUDではなく観戦ターゲットのHUDを見ることができるようになる",
            "ko-KR": "사망 후 관전 시 플레이어가 자신의 HUD 대신 관전 대상의 HUD를 볼 수 있습니다.",
            "pl-PL": "Powoduje że jeden lub więcej graczy widzi HUD celu obserwacji zamiast swojego podczas obserwacji zgonu.",
            "pt-BR": "Faz um ou mais Jogadores verem o HUD de seu alvo de visualização em vez do seu próprio HUD enquanto estiverem mortos.",
            "ru-RU": "Позволяет одному или нескольким игрокам в режиме наблюдения после смерти видеть не свой интерфейс а интерфейс наблюдаемой цели.",
            "zh-CN": "使一名或多名玩家在死亡后观战时看到目标的HUD信息，而不是他们自己的。"
        }
    },
    "enableInspector": {
        "description": "Causes the workshop inspector to resume recording new entries (in case it had been disabled earlier). Enabling recording at specific times may make it easier to debug problematic areas in your logic.",
        "args": [],
        "guid": "00000000FB2E",
        "return": "void",
        "en-US": "Enable Inspector Recording",
        "es-MX": "Activar registro de Inspector",
        "fr-FR": "Activer l’enregistrement du contrôleur",
        "ja-JP": "インスペクターでの記録を有効化",
        "pt-BR": "Ativar gravação do Inspetor",
        "zh-CN": "启用查看器录制",
        "descriptionLocalized": {
            "guid": "00000000FB31",
            "en-US": "Causes the Workshop Inspector to resume recording new entries in case it had been disabled earlier. Enabling recording at specific times may make it easier to debug problematic areas in your logic.",
            "de-DE": "Veranlasst den Workshop Inspector dazu wieder neue Einträge zu erfassen falls diese Option deaktiviert wurde. Das Aktivieren zu bestimmten Zeitpunkten erleichtert das Debugging von problematischen Stellen in der Logik.",
            "es-ES": "Hace que el inspector del Taller reanude el registro de nuevas entradas en caso de haberse deshabilitado antes. Permitir los registros en momentos específicos podría facilitar la depuración de aspectos problemáticos de tu lógica.",
            "es-MX": "Hace que el Inspector de Workshop vuelva a registrar nuevas entradas en caso de haber sido desactivado antes. Permitir el registro en momentos específicos facilita la depuración de áreas problemáticas en tu lógica.",
            "fr-FR": "Force le contrôleur de la Forge à reprendre l’enregistrement de nouvelles entrées si cela avait été précédemment désactivé. Activer l’enregistrement à certains moments peut faciliter le débogage des zones problématiques de votre logique.",
            "it-IT": "Fa sì che il Workshop Inspector ricominci a registrare nuove voci in caso l'opzione fosse stata disattivata in precedenza. Permettere la registrazione in determinati periodi può rendere più semplice eseguire il debug di determinate aree problematiche della logica.",
            "ja-JP": "ワークショップ・インスペクターでのエントリーの記録が停止している場合は再開する。特定のタイミングで記録を有効にすることで、作成したロジックの問題点をデバッグしやすくなる",
            "ko-KR": "워크샵 인스펙터가 새로운 입력값을 기록하는 것을 재개합니다. 이전에 비활성화했다면 이는 로직을 디버깅할 때 유용합니다.",
            "pl-PL": "Powoduje że Inspektor Warsztatu wznawia rejestrowanie nowych wpisów w przypadku gdy zostało wcześniej wyłączone. Włączenie nagrywania w określonych godzinach może ułatwić debugowanie problematycznych obszarów w twojej logice.",
            "pt-BR": "Faz o Inspetor do Workshop retomar a gravação de novas entradas caso tenha sido desabilitado antes. Ativar a gravação em momentos específicos pode facilitar a depuração de áreas problemáticas na sua lógica.",
            "ru-RU": "Включает фиксацию новых записей инспектором «Мастерской» в случае если ранее функция была отключена. Включение записи в определенные моменты может помочь с отладкой проблемных областей в скрипте.",
            "zh-CN": "使地图工坊查看器可以继续录制新的条目（假如之前被禁用的话）。在特定时间开启录制可以更容易地对你的脚本逻辑中出问题的地方进行错误排查。"
        }
    },
    "_&enableTextChat": {
        "description": "Undoes the effect of the Disable Text Chat Action for one or more players.",
        "args": [
            {
                "name": "Player",
                "description": "The Player or Players who will have their Text Chat enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            }
        ],
        "return": "void",
        "en-US": "Enable Text Chat",
        "descriptionLocalized": {
            "en-US": "Undoes the effect of the Disable Text Chat Action for one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&enableVoiceChat": {
        "description": "Undoes the effect of the Disable Voice Chat Action for one or more players.",
        "args": [
            {
                "name": "Player",
                "description": "The Player or Players who will have their Voice Chat enabled.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            }
        ],
        "return": "void",
        "en-US": "Enable Voice Chat",
        "descriptionLocalized": {
            "en-US": "Undoes the effect of the Disable Voice Chat Action for one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "__end__": {
        "description": "Denotes the end of a series of actions started by an if, else if, else, while, or for action.",
        "args": [],
        "guid": "00000000FB37",
        "return": "void",
        "en-US": "End",
        "es-MX": "Fin",
        "fr-FR": "Fin",
        "ja-JP": "END",
        "pt-BR": "Término",
        "descriptionLocalized": {
            "guid": "00000000FB38",
            "en-US": "Denotes the end of a series of actions started by an If Else If Else While or For action.",
            "de-DE": "Markiert das Ende einer Reihe von Aktionen die von der Aktion [If] [Else If] [Else] [While] oder [For] gestartet wurden.",
            "es-ES": "Denota el fin de una serie de acciones iniciadas por una acción «If» «Else If» «Else» «While» o «For».",
            "es-MX": "Marca el final de una serie de acciones iniciadas por una acción Si Si no si Si no Mientras o Por.",
            "fr-FR": "Marque la fin d’une série d’actions commencée par une action « Si » « Sinon Si » « Sinon » « Tant que » ou « Pour ».",
            "it-IT": "Indica il termine di una serie di azioni avviata da un'azione If Else If Else While o For.",
            "ja-JP": "「IF」、「ELSE IF」、「ELSE」、「WHILE」、「FOR」のいずれかで開始された一連のアクションを終わらせる",
            "ko-KR": "If Else If Else While 또는 For 액션으로 시작하는 액션들의 끝을 의미합니다.",
            "pl-PL": "Oznacza koniec serii działań rozpoczętych przez „If” Jeśli „Else If” Inaczej jeśli „Else” Inaczej „While” Kiedy lub „For” Przez.",
            "pt-BR": "Denota o fim de uma série de ações iniciadas por uma ação If Else If Else While ou For.",
            "ru-RU": "Обозначает конец серии действий начатых с помощью действий [If] [Else If] [Else] [While] или [For].",
            "zh-CN": "表示以If、Else If、While或For开始的一系列行动的结束。"
        }
    },
    "__forGlobalVariable__": {
        "description": "Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.",
        "args": [
            {
                "name": "CONTROL VARIABLE",
                "description": "The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "RANGE START",
                "description": "The control variable is set to this value when the loop begins.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "RANGE STOP",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "float",
                "default": "COUNT OF"
            },
            {
                "name": "STEP",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000FEE2",
        "return": "void",
        "en-US": "For Global Variable",
        "es-MX": "Para variable global",
        "fr-FR": "Pour variable globale",
        "ja-JP": "グローバル変数",
        "pt-BR": "For variável global",
        "zh-CN": "For 全局变量",
        "descriptionLocalized": {
            "guid": "00000000FB39",
            "en-US": "Denotes the beginning of a series of actions that will execute in a loop modifying the Control Variable on each loop. The corresponding End action denotes the end of the loop. If the Control Variable reaches or passes the Range Stop value then the loop exits and execution jumps to the next action after the End action.",
            "de-DE": "Markiert den Beginn einer Reihe von Aktionen die in einer Schleife ausgeführt werden und mit jeder Schleife die Kontrollvariable modifizieren. Die entsprechende Aktion [End] markiert das Ende der Schleife. Wenn die Kontrollvariable den Wert [Range Stop] erreicht oder überschreitet wird die Schleife beendet und die Ausführung springt zur nächsten Aktion nach der Aktion [End].",
            "es-ES": "Denota el comienzo de una serie de acciones que se ejecutarán en bucle y modificarán la variable de control con cada bucle. La acción «End» correspondiente denota el fin del bucle. Si la variable de control alcanza o supera el valor de detención de intervalo se abandona el bucle y la ejecución salta a la siguiente acción tras la acción «End».",
            "es-MX": "Marca el inicio de una serie de acciones que se ejecutarán en bucle y modificarán la Variable de control en cada bucle. La acción Fin correspondiente marca el final del bucle. Si la Variable de control alcanza o supera el valor de Fin de rango el bucle finalizará y se ejecutará la siguiente acción posterior a la acción Fin.",
            "fr-FR": "Marque le début d’une série d’actions qui s’exécuteront dans une boucle et modifieront la variable de contrôle à chaque boucle. L’action « Fin » correspondante marque la fin de la boucle. Si la variable de contrôle atteint ou dépasse la valeur « Fin de l’intervalle » alors la boucle se fermera et l’exécution passera à l’action suivant l’action « Fin ».",
            "it-IT": "Indica l'inizio di una serie di azioni che vengono eseguite in un ciclo modificando la Variabile di Controllo in ogni ciclo. La corrispondente azione End indica il termine del loop. Se la Variabile di Controllo raggiunge o supera il valore Range Stop il ciclo si chiude e l'esecuzione salta all'azione successiva dopo l'azione End.",
            "ja-JP": "ループごとにコントロール変数を変化させながら、後に続く一連のアクションをループさせる。対応する「END」アクションでループを終わらせる。コントロール値が「終了値」と等しいか、超えた場合はループが終了して、「END」アクションの後の次のアクションが実行される",
            "ko-KR": "반복되는 액션들의 시작을 의미하여 각 반복마다 Control Variable를 변경합니다. 이에 해당하는 End 액션은 반복의 끝을 의미합니다. Control Variable이 Range Stop 값에 다다르거나 지나치면 반복은 끝나고 실행이 End 액션 다음의 액션으로 건너뜁니다.",
            "pl-PL": "Oznacza początek serii działań które zostaną wykonane w pętli modyfikując „Control Variable” Zmienna kontrolna w każdej pętli. Odpowiednie działanie „End” Koniec oznacza koniec pętli. Jeśli „Control Variable” Zmienna kontrolna osiągnie lub przekroczy wartość „Range Stop” Koniec zakresu to pętla kończy się a wykonanie przeskakuje do następnego działania po „End” Koniec.",
            "pt-BR": "Denota o início de uma série de ações que serão executadas em loop modificando a Variável de Controle a cada loop. A ação de Término correspondente denota o fim do loop. Se a Variável de Controle atingir ou ultrapassar o valor do Fim do Intervalo então o loop se encerrará e a execução saltará para a próxima ação após a ação de Término.",
            "ru-RU": "Обозначает начало серии действий которая выполняется в цикле. Значение управляющей переменной изменяется после каждой итерации. Соответствующее действие [End] обозначает конец цикла. Если управляющая переменная достигает или пересекает значение конца диапазона цикл заканчивается а дальше выполняется следующее действие после [End].",
            "zh-CN": "表示在循环中执行的一系列行动的开始，并在每次循环时修改控制变量的值。 当前级别中的下一个End行动表示循环的结束。 如果执行至循环顶部时，控制条件达到或超过终止值，则退出循环，跳至End操作之后的下一个操作执行。"
        }
    },
    "__forPlayerVariable__": {
        "description": "Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.",
        "args": [
            {
                "name": "CONTROL PLAYER",
                "description": "The player whose variable is being modified in this loop. If multiple players are specified, the first player is used.",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "CONTROL VARIABLE",
                "description": "The variable being modified in this loop. It is set to the range start value when the loop begins, and the loop continues until the control variable reaches or passes the range stop value.",
                "type": "PlayerVariable",
                "default": "A"
            },
            {
                "name": "RANGE START",
                "description": "The control variable is set to this value when the loop begins.",
                "type": "float",
                "default": "NUMBER"
            },
            {
                "name": "RANGE STOP",
                "description": "If the control variable reaches or passes this value, then the loop will exit, and execution jumps to the next action after the end action. Whether this value is considered passed or not is based on whether the step value is negative or positive. If the control variable has already reached or passed this value when the loop begins, then the loop exits.",
                "type": "float",
                "default": "COUNT OF"
            },
            {
                "name": "STEP",
                "description": "This value is added to the control variable when the end action is reached. If this modification causes the control variable to reach or pass the range stop value, then the loop exits, and execution jumps to the next action after the end action. Otherwise, the loop continues, and execution jumps to the next action after the for action.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000FEE1",
        "return": "void",
        "en-US": "For Player Variable",
        "es-MX": "Para variable de jugador",
        "fr-FR": "Pour variable de joueur",
        "ja-JP": "プレイヤー変数",
        "pt-BR": "For variável de jogador",
        "zh-CN": "For 玩家变量",
        "descriptionLocalized": {
            "en-US": "Denotes the beginning of a series of actions that will execute in a loop, modifying the control variable on each loop. The corresponding end action denotes the end of the loop. If the control variable reaches or passes the range stop value, then the loop exits, and execution jumps to the next action after the end action.",
            "guid": "<unknown guid>"
        }
    },
    "goToAssembleHeroes": {
        "description": "Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.",
        "args": [],
        "guid": "00000000C5B5",
        "return": "void",
        "en-US": "Go To Assemble Heroes",
        "es-MX": "Ir a Forma tu equipo",
        "fr-FR": "Aller à Choisissez vos héros",
        "ja-JP": "「ヒーローを編成しよう」に移行",
        "pt-BR": "Ir para Escolher Heróis",
        "zh-CN": "前往集结英雄",
        "descriptionLocalized": {
            "guid": "00000000C5B6",
            "en-US": "Returns the match to the Assemble Heroes phase of the game mode. Only works if the game is in progress.",
            "de-DE": "Setzt das Match auf die Heldenwahlphase des Spielmodus zurück. Funktioniert nur während das Spiel im Gange ist.",
            "es-ES": "Devuelve la partida a la fase «Reunid héroes» del modo de juego. Solo funciona si la partida está en marcha.",
            "es-MX": "Regresa a la partida a la fase de Forma tu equipo del modo de juego. Solo funciona si la partida está en curso.",
            "fr-FR": "Ramène la partie à la phase Choisissez vos héros du mode de jeu. Ne fonctionne que si la partie est en cours.",
            "it-IT": "Riporta la partita alla fase di scelta degli eroi della modalità di gioco. Funziona solo se il gioco è in corso.",
            "ja-JP": "マッチをゲーム・モードの「ヒーローを編成しよう」フェーズに戻す。ゲームが進行中の場合のみ有効",
            "ko-KR": "경기를 해당 게임 모드의 영웅 선택 단계로 되돌립니다. 게임이 진행 중일 때만 작동합니다.",
            "pl-PL": "Przywraca mecz do fazy zbierania bohaterów w trybie gry. Działa tylko wtedy kiedy gra jest w toku.",
            "pt-BR": "A partida volta para a fase Escolher Heróis do modo de jogo. Só funciona se o jogo já tiver começado.",
            "ru-RU": "Возвращает матч к фазе выбора героев игрового режима. Работает только во время матча.",
            "zh-CN": "回到比赛模式的集结英雄阶段。只有在游戏正在进行中时生效。"
        }
    },
    "heal": {
        "guid": "000000007875",
        "description": "Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose health will be restored.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALER",
                "description": "The player who will receive credit for the healing. A healer of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            },
            {
                "name": "AMOUNT",
                "description": "The amount of healing to apply. This amount may be modified by buff or debuffs. Healing is capped by each player's max health.",
                "type": "float",
                "default": "NUMBER"
            }
        ],
        "return": "void",
        "en-US": "Heal",
        "es-MX": "Sanar",
        "fr-FR": "Soigner",
        "ja-JP": "回復",
        "pt-BR": "Cura",
        "zh-CN": "治疗",
        "descriptionLocalized": {
            "guid": "00000000BC6D",
            "en-US": "Provides an instantaneous heal to one or more Players. This heal will not resurrect dead Players.",
            "de-DE": "Heilt sofort einen oder mehrere Spieler. Durch diese Heilung werden gestorbene Spieler nicht wiederbelebt.",
            "es-ES": "Proporciona una sanación instantánea a uno o más jugadores. Esta sanación no resucitará jugadores muertos.",
            "es-MX": "Proporciona una sanación instantánea a uno o más jugadores. Esta sanación no resucitará a los jugadores muertos.",
            "fr-FR": "Prodigue des soins instantanés à un ou plusieurs joueurs. Ces soins ne ressuscitent pas les joueurs morts.",
            "it-IT": "Fornisce una cura istantanea a uno o più Giocatori. Tale cura non può resuscitare Giocatori morti.",
            "ja-JP": "1人または複数のプレイヤーを即座に回復する。倒れているプレイヤーの蘇生はできない",
            "ko-KR": "플레이어를 즉시 치유합니다. 이 기능으로 죽은 플레이어가 부활하지는 않습니다.",
            "pl-PL": "Zapewnia natychmiastowe leczenie jednemu lub więcej graczom. Leczenie nie ożywi martwych graczy.",
            "pt-BR": "Proporciona uma cura instantânea para um ou mais Jogadores. Essa cura não ressuscitará Jogadores mortos.",
            "ru-RU": "Мгновенно исцеляет одного или нескольких игроков. Это исцеление не воскрешает мертвых игроков.",
            "zh-CN": "立刻为一名或多名玩家恢复生命值。此治疗效果不会复活已死亡的玩家。"
        }
    },
    "__if__": {
        "description": "Denotes the beginning of a series of actions that will only execute if the specified condition is true.",
        "args": [
            {
                "name": "CONDITION",
                "description": "If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next else if, else, or end action at the current level.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000FB32",
        "return": "void",
        "en-US": "If",
        "es-MX": "Si",
        "fr-FR": "Si",
        "ja-JP": "IF",
        "descriptionLocalized": {
            "guid": "00000000FB3D",
            "en-US": "Denotes the beginning of a series of actions that will only execute if the specified Condition is true.",
            "de-DE": "Markiert den Beginn einer Reihe von Aktionen die nur ausgeführt werden wenn die festgelegte Bedingung True ist.",
            "es-ES": "Denota el comienzo de una serie de acciones que solo se ejecutarán si la condición especificada es verdadera.",
            "es-MX": "Marca el inicio de una serie de acciones que solo se ejecutarán si la condición específica es verdadera.",
            "fr-FR": "Marque le début d’une série d’actions qui ne s’exécuteront que si la condition spécifiée est vraie.",
            "it-IT": "Indica l'inizio di una serie di azioni che vengono eseguite solo se la Condizione specificata è vera.",
            "ja-JP": "指定した条件の判定結果が「TRUE」の場合に、後に続く一連のアクションを開始させる",
            "ko-KR": "명시된 조건이 참일 때만 일련의 액션들이 시작됨을 의미합니다.",
            "pl-PL": "Oznacza początek serii działań które zostaną wykonane tylko wtedy gdy określony warunek jest prawdziwy.",
            "pt-BR": "Denota o início de uma série de ações que só serão executadas se a Condição especificada for verdadeira.",
            "ru-RU": "Обозначает начало серии действий которая будет выполняться только в том случае если указанное условие имеет значение [True].",
            "zh-CN": "表示仅在指定条件为真时才会开始的一系列行动。"
        }
    },
    "kill": {
        "guid": "000000007877",
        "description": "Instantly kills one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be killed.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "KILLER",
                "description": "The player who will receive credit for the kill. A killer of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            }
        ],
        "return": "void",
        "en-US": "Kill",
        "es-MX": "Matar",
        "fr-FR": "Tuer",
        "ja-JP": "キル",
        "pt-BR": "Abater",
        "zh-CN": "击杀",
        "descriptionLocalized": {
            "guid": "00000000BC77",
            "en-US": "Instantly kills one or more Players.",
            "de-DE": "Tötet sofort einen oder mehrere Spieler.",
            "es-ES": "Mata al instante a uno o más jugadores.",
            "es-MX": "Mata instantáneamente a uno o más jugadores.",
            "fr-FR": "Tue instantanément un ou plusieurs joueurs.",
            "it-IT": "Uccide istantaneamente uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーを即座にキルする",
            "ko-KR": "플레이어를 즉시 처치합니다.",
            "pl-PL": "Natychmiast zabija jednego lub więcej graczy.",
            "pt-BR": "Mata instantaneamente um ou mais Jogadores.",
            "ru-RU": "Мгновенно убивает одного или нескольких игроков.",
            "zh-CN": "立即杀死一名或多名玩家。"
        }
    },
    "printLog": {
        "description": "Causes the workshop inspector to record a log entry.",
        "args": [
            {
                "name": "TEXT",
                "description": "The string to be logged to the workshop inspector.",
                "type": "Object",
                "default": "CUSTOM STRING"
            }
        ],
        "return": "void",
        "guid": "000000012449",
        "en-US": "Log To Inspector",
        "de-DE": "Log to Inspector",
        "es-MX": "Registro para Inspector",
        "fr-FR": "Enregistrer une entrée avec le contrôleur",
        "it-IT": "Log to Inspector",
        "ja-JP": "インスペクターに記録",
        "pt-BR": "Registrar no Inspetor",
        "ru-RU": "Log to Inspector",
        "zh-CN": "记入查看器",
        "descriptionLocalized": {
            "guid": "00000001244C",
            "en-US": "Causes the Workshop Inspector to record a log entry.",
            "de-DE": "Veranlasst den Workshop Inspector dazu einen Logeintrag zu erstellen.",
            "es-ES": "Hace que el inspector del Taller registre una entrada.",
            "es-MX": "Hace que el Inspector de Workshop registre una entrada.",
            "fr-FR": "Force le contrôleur de la Forge à enregistrer une entrée de journal.",
            "it-IT": "Provoca la registrazione di una voce di registro da parte del Workshop Inspector.",
            "ja-JP": "ワークショップ・インスペクターがログのエントリーを記録するようになる",
            "ko-KR": "워크샵 인스펙터가 로그 항목을 기록하게 합니다.",
            "pl-PL": "Powoduje że Inspektor Warsztatu rejestruje wpis do dziennika.",
            "pt-BR": "Faz com que o Inspetor da Oficina grave uma entrada no registro.",
            "ru-RU": "Инспектор «Мастерской» сделает запись в журнале.",
            "zh-CN": "使地图工坊查看器录制一条记录。"
        }
    },
    "__loop__": {
        "guid": "0000000078F5",
        "description": "Restarts the action list from the beginning. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [],
        "return": "void",
        "en-US": "Loop",
        "es-MX": "Bucle",
        "fr-FR": "Boucle",
        "ja-JP": "ループ",
        "pt-BR": "Gerar Loop",
        "zh-CN": "循环",
        "descriptionLocalized": {
            "en-US": "Restarts the action list from the beginning. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "guid": "<unknown guid>"
        }
    },
    "__loopIf__": {
        "description": "Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the loop will occur.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000BB06",
        "return": "void",
        "en-US": "Loop If",
        "es-MX": "Repetir si",
        "fr-FR": "Boucle si",
        "ja-JP": "ループする条件",
        "pt-BR": "Gerar Loop se",
        "zh-CN": "根据条件循环",
        "descriptionLocalized": {
            "en-US": "Restarts the action list from the beginning if this action's condition evaluates to true. If it does not, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "guid": "<unknown guid>"
        }
    },
    "__loopIfConditionIsFalse__": {
        "description": "Restarts the action list from the beginning if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [],
        "guid": "00000000BB05",
        "return": "void",
        "en-US": "Loop If Condition Is False",
        "es-MX": "Repetir si la condición es falsa",
        "fr-FR": "Boucle si la condition est fausse",
        "ja-JP": "条件が「FALSE」の場合ループ",
        "pt-BR": "Gerar Loop se a Condição for Falsa",
        "zh-CN": "如条件为“假”则循环",
        "descriptionLocalized": {
            "en-US": "Restarts the action list from the beginning if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "guid": "<unknown guid>"
        }
    },
    "__loopIfConditionIsTrue__": {
        "description": "Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
        "args": [],
        "guid": "000000007874",
        "return": "void",
        "en-US": "Loop If Condition Is True",
        "es-MX": "Repetir si la condición es verdadera",
        "fr-FR": "Boucle si la condition est vraie",
        "ja-JP": "条件が「TRUE」の場合ループ",
        "pt-BR": "Gerar Loop se a Condição for Verdadeira",
        "zh-CN": "如条件为”真“则循环",
        "descriptionLocalized": {
            "en-US": "Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.",
            "guid": "<unknown guid>"
        }
    },
    "__modifyGlobalVariable__": {
        "description": "Modifies the value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The global variable to modify.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "__Operation__",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "00000000786E",
        "return": "void",
        "en-US": "Modify Global Variable",
        "es-MX": "Modificar variable global",
        "fr-FR": "Modifier une variable globale",
        "ja-JP": "グローバル変数を変更",
        "pt-BR": "Modificar Variável Global",
        "zh-CN": "修改全局变量",
        "descriptionLocalized": {
            "guid": "00000000BC5B",
            "en-US": "Modifies the Value of a Global Variable which is a Variable that belongs to the game itself.",
            "de-DE": "Modifiziert den Wert einer globalen Variable. Dabei handelt es sich um eine Variable die dem Spiel selbst gehört.",
            "es-ES": "Modifica el valor de una variable global una variable que pertenece a la partida en sí.",
            "es-MX": "Modifica el valor de una variable global una variable que pertenece al propio juego.",
            "fr-FR": "Modifie la valeur d’une variable globale c’est-à-dire une variable rattachée à la partie même.",
            "it-IT": "Modifica il Valore di una Variabile Globale che è una Variabile che appartiene al gioco stesso.",
            "ja-JP": "特定のゲームにおける、現在のグローバル変数値を変更する",
            "ko-KR": "게임 자체에 종속된 전역 변수 값을 수정합니다.",
            "pl-PL": "Modyfikuje wartość zmiennej „Global Variable” Zmienna globalna która należy do samej gry.",
            "pt-BR": "Modifica o Valor de uma Variável Global que é uma Variável que pertence ao jogo em si.",
            "ru-RU": "Изменяет значение глобальной переменной то есть переменной относящейся к самой игре.",
            "zh-CN": "修改一个全局变量的值，全局变量即属于游戏本身的变量。"
        }
    },
    "__modifyGlobalVariableAtIndex__": {
        "description": "Modifies the value of a global variable at an index, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The global variable to modify.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "unsigned int",
                "default": "NUMBER"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "__Operation__",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C7E1",
        "return": "void",
        "en-US": "Modify Global Variable At Index",
        "es-MX": "Modificar variable global según el índice",
        "fr-FR": "Modifier une variable globale à l’index",
        "ja-JP": "インデックスのグローバル変数を変更",
        "pt-BR": "Modificar Variável Global no Índice",
        "zh-CN": "在索引处修改全局变量",
        "descriptionLocalized": {
            "guid": "00000000C7E2",
            "en-US": "Modifies the Value of a Global Variable at an index which is a Variable that belongs to the game itself.",
            "de-DE": "Modifiziert den Wert einer globalen Variable bei einem Index. Dabei handelt es sich um eine Variable die dem Spiel selbst gehört.",
            "es-ES": "Modifica el valor de una variable global en un índice una variable que pertenece a la partida en sí.",
            "es-MX": "Modifica el valor de una variable global según el índice una variable que pertenece al propio juego.",
            "fr-FR": "Modifie la valeur d’une variable globale à l’index c’est-à-dire une variable rattachée à la partie même.",
            "it-IT": "Modifica il Valore in un indice di una Variabile Globale che è una Variabile che appartiene al gioco stesso.",
            "ja-JP": "ゲームそのものに属する変数である、インデックスのグローバル変数値を変更する",
            "ko-KR": "인덱스에서 게임 자체에 종속된 전역 변수 값을 수정합니다.",
            "pl-PL": "Modyfikuje wartość zmiennej „Global Variable” Zmienna globalna w indeksie która jest wartością należącą do samej gry.",
            "pt-BR": "Modifica o Valor de uma Variável Global em um índice que é uma Variável que pertence ao jogo em si.",
            "ru-RU": "Изменяет значение глобальной относящейся к самой игре переменной под указанным индексом.",
            "zh-CN": "修改索引处一个全局变量的值，全局变量即属于游戏本身的变量。"
        }
    },
    "_&addToScore": {
        "description": "Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose score will change.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "SCORE",
                "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "000000007873",
        "return": "void",
        "en-US": "Modify Player Score",
        "es-MX": "Modificar puntuación del jugador",
        "fr-FR": "Modifier le score d’un joueur",
        "ja-JP": "プレイヤー・スコアを変更",
        "pt-BR": "Modificar Pontuação do Jogador",
        "zh-CN": "修改玩家分数",
        "descriptionLocalized": {
            "guid": "00000000BC68",
            "en-US": "Modifies the score kill count of one or more Players. This Action only has an effect in Free-For-All modes.",
            "de-DE": "Modifiziert den Punktestand Kill-Zähler von einem Spieler oder mehreren Spielern. Diese Aktion ist nur in klassischen Deathmatch-Modi wirksam.",
            "es-ES": "Modifica la puntuación recuento de asesinatos de uno o más jugadores. Esta acción solo surte efecto en modos de todos contra todos.",
            "es-MX": "Modifica la puntuación cantidad de eliminaciones de uno o más jugadores. Esta acción solo tiene efecto en los modos de todos contra todos.",
            "fr-FR": "Modifie le score nombre de victimes d’un ou plusieurs joueurs. Cette action n’a d’effet qu’en mode Chacun pour soi.",
            "it-IT": "Modifica il punteggio conteggio uccisioni di uno o più Giocatori. Questa Azione si applica solamente alle modalità Tutti contro tutti.",
            "ja-JP": "1人または複数のプレイヤーのスコア（キル数）を変更する。このアクションはFFAモードにのみ適用される",
            "ko-KR": "플레이어의 점수처치 수를 수정합니다. 이 액션은 개별 전투 모드에서만 효과가 있습니다.",
            "pl-PL": "Modyfikuj wynik liczbę likwidacji jednego lub więcej graczy. Działanie to dotyczy tylko trybów każdy na każdego.",
            "pt-BR": "Modifica a pontuação contagem de abates de um ou mais Jogadores. Essa Ação só tem efeito nos modos Todos Contra Todos.",
            "ru-RU": "Изменяет счет количество убийств одного или нескольких игроков. Это действие работает только в режимах FFA.",
            "zh-CN": "修改一名或多名玩家的分数（击杀数）。此动作只会在自由混战模式中生效。"
        }
    },
    "__modifyPlayerVariable__": {
        "description": "Modifies the value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify.",
                "type": "PlayerVariable",
                "default": "A"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "__Operation__",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "00000000786F",
        "return": "void",
        "en-US": "Modify Player Variable",
        "es-MX": "Modificar variable de jugador",
        "fr-FR": "Modifier une variable de joueur",
        "ja-JP": "プレイヤー変数を変更",
        "pt-BR": "Modificar Variável de Jogador",
        "zh-CN": "修改玩家变量",
        "descriptionLocalized": {
            "guid": "00000000BC5F",
            "en-US": "Modifies the Value of a Player Variable which is a Variable that belongs to a specific Player.",
            "de-DE": "Modifiziert den Wert einer Spielervariable. Dabei handelt es sich um eine Variable die einem bestimmten Spieler gehört.",
            "es-ES": "Modifica el valor de una variable de jugador una variable que pertenece a un jugador concreto.",
            "es-MX": "Modifica el valor de una variable de jugador una variable que pertenece a un jugador determinado.",
            "fr-FR": "Modifie la valeur d’une variable de joueur c’est-à-dire une variable rattachée à un joueur spécifique.",
            "it-IT": "Modifica il Valore di una Variabile Giocatore che è una Variabile che appartiene a un Giocatore specifico.",
            "ja-JP": "プレイヤー変数（特定のプレイヤーに所属する変数）の値を変更する",
            "ko-KR": "지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.",
            "pl-PL": "Modyfikuje wartość zmiennej „Player Variable” Zmienna gracza która należy do konkretnego gracza.",
            "pt-BR": "Modifica o Valor de uma Variável de Jogador que é uma Variável que pertence a um Jogador específico.",
            "ru-RU": "Меняет значение переменной игрока то есть переменной относящейся к указанному игроку.",
            "zh-CN": "修改一个玩家变量的值，玩家变量即属于一个特定玩家的变量。"
        }
    },
    "__modifyPlayerVariableAtIndex__": {
        "description": "Modifies the value of a player variable at an index, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to modify.",
                "type": "PlayerVariable",
                "default": "A"
            },
            {
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "unsigned int",
                "default": "NUMBER"
            },
            {
                "name": "OPERATION",
                "description": "The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.",
                "type": "__Operation__",
                "default": "ADD"
            },
            {
                "name": "VALUE",
                "description": "The value used for the modification. For arithmetic operations, this is the second of the two operands, with the other being the variable's existing value. For array operations, this is the value to append or remove.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C7DF",
        "return": "void",
        "en-US": "Modify Player Variable At Index",
        "es-MX": "Modificar variable de jugador según el índice",
        "fr-FR": "Modifier une variable de joueur à l’index",
        "ja-JP": "インデックスのプレイヤー変数を変更",
        "pt-BR": "Modificar Variável de Jogador no Índice",
        "zh-CN": "在索引处修改玩家变量",
        "descriptionLocalized": {
            "guid": "00000000C7E0",
            "en-US": "Modifies the Value of a Player Variable at an index which is a Variable that belongs to a specific Player.",
            "de-DE": "Modifiziert den Wert einer Spielervariable bei einem Index. Dabei handelt es sich um eine Variable die einem bestimmten Spieler gehört.",
            "es-ES": "Modifica el valor de una variable de jugador en un índice una variable que pertenece a un jugador concreto.",
            "es-MX": "Modifica el valor de una variable de jugador según el índice una variable que pertenece a un jugador determinado.",
            "fr-FR": "Modifie la valeur d’une variable de joueur à l’index c’est-à-dire une variable rattachée à un joueur spécifique.",
            "it-IT": "Modifica il Valore in un indice di una Variabile Giocatore che è una Variabile che appartiene a un Giocatore specifico.",
            "ja-JP": "特定のプレイヤーに属する変数である、インデックスのプレイヤー変数値を変更する",
            "ko-KR": "인덱스에서 지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.",
            "pl-PL": "Modyfikuje wartość zmiennej „Player Variable” Zmienna gracza w indeksie która jest wartością należącą do konkretnego gracza.",
            "pt-BR": "Modifica o Valor de uma Variável de Jogador em um índice que é uma Variável que pertence a um Jogador específico.",
            "ru-RU": "Изменяет значение переменной игрока относящейся к указанному игроку под указанным индексом.",
            "zh-CN": "修改索引处一个玩家变量的值，玩家变量即属于一个特定玩家的变量。"
        }
    },
    "addToTeamScore": {
        "description": "Modifies the score of one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams whose score will be changed.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "SCORE",
                "description": "The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB24",
        "return": "void",
        "en-US": "Modify Team Score",
        "es-MX": "Modificar puntuación del equipo",
        "fr-FR": "Modifier le score de l’équipe",
        "ja-JP": "チーム・スコアを変更",
        "pt-BR": "Modificar Pontuação da Equipe",
        "zh-CN": "修改队伍分数",
        "descriptionLocalized": {
            "guid": "00000000BD8D",
            "en-US": "Modifies the score of one or both Teams. This Action has no effect in Free-For-All modes or modes without a team score.",
            "de-DE": "Modifiziert den Punktestand eines oder beider Teams. Diese Aktion ist nicht in klassischen Deathmatch-Modi oder Modi ohne Teampunktestand wirksam.",
            "es-ES": "Modifica la puntuación de uno o ambos equipos. Esta acción no surte ningún efecto en modos de todos contra todos o modos sin puntuación de equipo.",
            "es-MX": "Modifica la puntuación de un equipo o ambos. Esta acción no tiene efecto en los modos de todos contra todos o en los modos sin puntuación de equipo.",
            "fr-FR": "Modifie le score d’une équipe ou des deux. Cette action n’a aucun effet en mode Chacun pour soi ou dans les modes dépourvus de score d’équipe.",
            "it-IT": "Modifica il punteggio di una o entrambe le Squadre. Questa Azione non ha effetto nelle modalità Tutti contro tutti senza un punteggio di squadra.",
            "ja-JP": "片方または両方のチームのスコアを変更する。このアクションはFFAモードまたはチーム・スコアのないモードには適応されない",
            "ko-KR": "한 팀 또는 두 팀 모두의 점수를 수정합니다. 이 액션은 개별 전투 모드나 팀 점수가 존재하지 않는 모드에서는 효과가 없습니다.",
            "pl-PL": "Modyfikuje wynik jednej lub obu drużyn. Działanie nie ma efektu w trybach każdy na każdego lub trybach bez wyniku drużynowego.",
            "pt-BR": "Modifica a pontuação de uma ou de ambas as Equipes. Essa Ação não tem efeito nos modos Todos Contra Todos ou em modos sem pontuação de equipe.",
            "ru-RU": "Изменяет счет одной или обеих команд. Не действует в режимах FFA и в режимах без командного счета.",
            "zh-CN": "改变一方或双方队伍的分数。此动作在自由混战模式或没有队伍分数的模式中无效。"
        }
    },
    "moveToTeam": {
        "description": "Move one or more players to the specified team and slot. This action can fail if the specified slot is not available. This action doesn't work on dummy bots.",
        "args": [
            {
                "name": "Player",
                "description": "The player or players to move.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            },
            {
                "name": "Team",
                "description": "The team on which to move the Player. The \"all\" option only works in free-for-all game modes, while the \"team\" options only work in team-based game modes.",
                "type": "Team",
                "default": "All"
            },
            {
                "name": "SLOT",
                "description": "The player slot which will receive the player (-1 for first available slot).",
                "type": "int",
                "default": -1
            }
        ],
        "return": "void",
        "en-US": "Move Player To Team",
        "descriptionLocalized": {
            "en-US": "Move one or more players to the specified team and slot. This action can fail if the specified slot is not available. This action doesn't work on dummy bots.",
            "guid": "<unknown guid>"
        }
    },
    "pauseMatchTime": {
        "description": "Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.",
        "args": [],
        "guid": "00000000B9EF",
        "return": "void",
        "en-US": "Pause Match Time",
        "es-MX": "Pausar tiempo de la partida",
        "fr-FR": "Mettre en pause le temps de jeu",
        "ja-JP": "マッチ時間をポーズする",
        "pt-BR": "Pausar Tempo da Partida",
        "zh-CN": "比赛时间暂停",
        "descriptionLocalized": {
            "guid": "00000000BD32",
            "en-US": "Pauses the match time. Players objective logic and game mode advancement criteria are unaffected by the pause.",
            "de-DE": "Pausiert die Matchzeit. Spieler Zielpunktlogik und Fortschrittskriterien des Spielmodus sind von der Pause nicht betroffen.",
            "es-ES": "Pausa el tiempo de partida. Los jugadores la lógica de los objetivos y los criterios de avance en el modo de juego no se ven afectados por la pausa.",
            "es-MX": "Pausa el tiempo de la partida. Los jugadores la lógica de los objetivos y los criterios de avance en el modo de juego no se ven afectados por la pausa.",
            "fr-FR": "Met la durée de la partie en pause. Les joueurs la logique d’objectif et les critères de progression du mode de jeu ne sont pas affectés par la pause.",
            "it-IT": "Mette in pausa il tempo della partita. I Giocatori la logica dell'obiettivo e i criteri di avanzamento della modalità di gioco non sono influenzati dalla pausa.",
            "ja-JP": "マッチ時間をポーズするプレイヤー、目標の論理、ゲーム・モード進行の判定基準はポーズに影響されない",
            "ko-KR": "경기 시간을 일시정지합니다. 플레이어 목표 로직 게임 모드 진행 기준 등은 일시정지의 영향을 받지 않습니다.",
            "pl-PL": "Pauzuje czas gry. Nie ma wpływu na graczy logikę zadań i kryteria postępów trybów gry.",
            "pt-BR": "Pausa o tempo da partida. Jogadores lógicas de objetivo e critérios de progresso no modo de jogo não são afetados pela pausa.",
            "ru-RU": "Приостанавливает отсчет времени матча. Пауза не затрагивает игроков логику выполнения задач и критерии прогресса в игровом режиме.",
            "zh-CN": "暂停比赛时间。玩家、目标点逻辑、以及游戏模式的进展标准不会受暂停的影响。"
        }
    },
    "playEffect": {
        "description": "Plays an effect at a position in the world. The lifetime of this effect is short, so it does not need to be updated or destroyed.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will be able to see the effect.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "TYPE",
                "description": "The type of effect to be created.",
                "type": "DynamicEffect",
                "default": "GOOD EXPLOSION"
            },
            {
                "name": "COLOR",
                "description": "The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer.",
                "type": "Color",
                "default": "WHITE"
            },
            {
                "name": "POSITION",
                "description": "The effect's position. If this value is a player, then the effect will play at the player's position. Otherwise, the value is interpreted as a position in the world.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "RADIUS",
                "description": "The effect's radius in meters.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB27",
        "return": "void",
        "en-US": "Play Effect",
        "es-MX": "Reproducir efecto",
        "fr-FR": "Jouer un effet",
        "ja-JP": "エフェクトを再生",
        "pt-BR": "Reproduzir Efeito",
        "zh-CN": "播放效果",
        "descriptionLocalized": {
            "guid": "00000000BD91",
            "en-US": "Plays an effect at a position in the world. The lifetime of this effect is short so it does not need to be updated or destroyed.",
            "de-DE": "Gibt einen Effekt an einer Position in der Welt wieder. Die Lebensdauer dieses Effekts ist kurz deshalb muss er nicht aktualisiert oder zerstört werden.",
            "es-ES": "Reproduce un efecto en una posición en el mundo. La duración de este efecto es corta así que no es necesario actualizarlo ni destruirlo.",
            "es-MX": "Reproduce un efecto en una posición del mundo. La duración del efecto es corta de modo que no necesita ser actualizado o destruido.",
            "fr-FR": "Déclenche un effet à une position du monde. La durée de l’effet est courte il n’est donc pas nécessaire de le mettre à jour ni de le détruire.",
            "it-IT": "Crea un effetto alla posizione del Giocatore. La durata dell'effetto è breve perciò non è necessario aggiornarlo o distruggerlo.",
            "ja-JP": "いずれかの位置でエフェクトを再生する。エフェクトの持続時間は短いため、アップデートまたは破棄する必要はない",
            "ko-KR": "월드의 한 위치에 효과를 발생시킵니다. 이 효과는 갱신되거나 제거할 필요 없도록 짧게 유지되었다가 사라집니다.",
            "pl-PL": "Odtwarza efekt w pozycji w świecie. Czas działania efektu jest krótki więc nie trzeba go aktualizować ani usuwać.",
            "pt-BR": "Reproduz um efeito em uma posição no mundo. A existência do efeito é curta então não é necessário atualizá-lo ou destruí-lo.",
            "ru-RU": "Воспроизводит эффект в указанном месте игрового мира. Время существования эффекта небольшое поэтому его не требуется обновлять или уничтожать.",
            "zh-CN": "在地图的指定位置播放一个效果。此效果的持续时间很短，所以不需要更新或消除。"
        }
    },
    "_&preloadHero": {
        "description": "Preemptively loads the specified hero or heroes into memory using the skins of the specified player or players, available memory permitting. Useful whenever rapid hero changing is possible and the next hero is known.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HERO",
                "description": "The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array, the heroes towards the beginning of the array are prioritized.",
                "type": [
                    "Hero",
                    {
                        "Array": "Hero"
                    }
                ],
                "default": "HERO"
            }
        ],
        "guid": "00000000B9B1",
        "return": "void",
        "en-US": "Preload Hero",
        "es-MX": "Precargar héroe",
        "fr-FR": "Précharger un héros",
        "ja-JP": "ヒーローをプリロード",
        "pt-BR": "Pré-carregar Herói",
        "zh-CN": "预加载英雄",
        "descriptionLocalized": {
            "guid": "00000000BCF4",
            "en-US": "Preemptively loads the specified Hero or Heroes into memory using the skins of the specified Player or Players available memory permitting. Useful whenever rapid Hero changing is possible and the next Hero is known.",
            "de-DE": "Lädt vorab den oder die festgelegten Helden in den Speicher mit den Skins des festgelegten Spielers oder der festgelegten Spieler sofern der verfügbare Speicher dies zulässt. Hilfreich wenn ein schneller Heldenwechsel möglich und der nächste Held bekannt ist.",
            "es-ES": "Carga preventivamente el héroe o los héroes especificados en la memoria usando los aspectos del jugador o los jugadores especificados siempre que lo permita la memoria disponible. Es útil cuando es posible cambiar rápidamente de héroe y se conoce cuál es el próximo héroe.",
            "es-MX": "Carga previamente el héroe o los héroes especificados en la memoria utilizando los diseños del jugador o los jugadores especificados en tanto lo permita la memoria disponible. Resulta útil cuando existe la posibilidad de cambiar rápidamente de héroe y se conoce el héroe siguiente.",
            "fr-FR": "Charge en avance le ou les héros spécifiés dans la mémoire avec les modèles du ou des joueurs spécifiés si la mémoire disponible le permet. Utile lorsqu’il est possible de changer rapidement de héros et que le héros suivant est connu.",
            "it-IT": "Carica preventivamente l'Eroe o gli Eroi specificati in memoria usando i modelli del Giocatore o dei Giocatori specificati in base alla memoria disponibile. Utile quando il cambio rapido di Eroi è attivato e l'Eroe successivo è conosciuto.",
            "ja-JP": "指定したヒーローを、指定したプレイヤーのスキンを使ってメモリに先行ロードする。メモリが空いている場合に使用可能。立て続けにヒーローを変更できる場面で、次のヒーローが分かっている場合に有益",
            "ko-KR": "지정된 플레이어의 스킨을 사용하여 지정된 영웅을 메모리에서 허용하는 만큼 먼저 불러옵니다. 빠르게 영웅을 바꿀 수 있으며 다음 영웅을 알고 있는 경우 유용합니다.",
            "pl-PL": "Wstępnie wczytuje określonego bohatera lub bohaterów do pamięci z użyciem skórek określonego gracza lub graczy jeśli dostępna pamięć pozwoli. Przydatne kiedy możliwa jest nagła zmiana bohatera i znany jest następny.",
            "pt-BR": "Carrega antecipadamente os Heróis especificados na memória usando os visuais dos Jogadores especificados desde que a memória disponível permita. Útil quando a troca rápida de Herói é possível e o próximo Herói é conhecido.",
            "ru-RU": "Предварительно загружает указанного героя или героев в память с применением обликов указанного игрока или игроков если позволяет доступный объем памяти. Это действие полезно при возможности быстрой смены героев когда известен следующий герой.",
            "zh-CN": "预先为指定的玩家将指定的英雄及皮肤加载入内存。当需要经常改变英雄且已知接下来要使用哪个英雄时适用。"
        }
    },
    "_&forceButtonPress": {
        "description": "Forces one or more players to press a button virtually for a single frame.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players for whom the virtual button input will be forced.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The button to be pressed.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            }
        ],
        "guid": "0000000078FB",
        "return": "void",
        "en-US": "Press Button",
        "es-MX": "Presionar botón",
        "fr-FR": "Appuyer sur un bouton",
        "ja-JP": "ボタンを押してください",
        "pt-BR": "Pressionar Botão",
        "zh-CN": "按下按键",
        "descriptionLocalized": {
            "guid": "00000000BC85",
            "en-US": "Forces one or more Players to press a button virtually for a single frame.",
            "de-DE": "Zwingt einen oder mehrere Spieler für einen einzelnen Frame eine Taste virtuell zu drücken.",
            "es-ES": "Fuerza a uno o más jugadores a pulsar un botón virtualmente durante un único fotograma.",
            "es-MX": "Fuerza a uno o más jugadores a presionar un botón virtualmente durante un único cuadro.",
            "fr-FR": "Force un ou plusieurs joueurs à appuyer virtuellement sur un bouton pendant une seule image.",
            "it-IT": "Forza uno o più Giocatori a premere un tasto virtualmente per un solo frame.",
            "ja-JP": "1人または複数のプレイヤーに強制的に1フレーム間仮想的にボタンを押させる",
            "ko-KR": "플레이어에 대해 한 프레임 동안 가상으로 버튼 하나를 누르도록 강제합니다.",
            "pl-PL": "Wymusza u jednego lub więcej graczy wirtualne naciśnięcie przycisku na jedną klatkę.",
            "pt-BR": "Força um ou mais Jogadores a pressionar virtualmente um botão por um único quadro.",
            "ru-RU": "Включает принудительное виртуальное нажатие кнопки в одном кадре для одного или нескольких игроков.",
            "zh-CN": "强制一名或多名玩家按下虚拟按键，持续一帧。"
        }
    },
    "_&removeAllHealthPools": {
        "description": "Removes all health pools that were added to a player or players via the Add Health Pool action.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose added health pools will be removed.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "000000011433",
        "en-US": "Remove All Health Pools From Player",
        "es-MX": "Eliminar todas las cantidades de salud del jugador",
        "fr-FR": "Retirer toutes les réserves de points de vie d’un joueur",
        "ja-JP": "プレイヤーから全てのライフプールを削除",
        "pt-BR": "Remover Todas as Reservas de Vida de Jogador",
        "zh-CN": "移除玩家的所有生命值。",
        "descriptionLocalized": {
            "guid": "000000011434",
            "en-US": "Removes all health pools that were added to a Player or Players via the Add Health Pool action.",
            "de-DE": "Entfernt alle Trefferpunktevorräte die einem oder mehreren Spielern mithilfe der Aktion [Add Health Pool] hinzugefügt wurden.",
            "es-ES": "Elimina todas las reservas de salud que se hubiesen añadido a un jugador o varios jugadores mediante la acción «Add Health Pool».",
            "es-MX": "Elimina todas las cantidades de salud añadidas a uno o más jugadores mediante la acción Añadir cantidad de salud.",
            "fr-FR": "Retire toutes les réserves de points de vie qui ont été ajoutées à un ou plusieurs joueurs via l’action « Ajouter une réserve de points de vie ».",
            "it-IT": "Rimuove tutte le riserve di salute che erano state aggiunte a un Giocatore o più Giocatori tramite l'azione Add Health Pool.",
            "ja-JP": "「ライフプールを追加」アクションでプレイヤーに追加された全てのライフプールを削除する",
            "ko-KR": "Add Health Pool 액션으로 플레이어에 추가된 모든 유효 생명력을 제거합니다.",
            "pl-PL": "Usuwa wszystkie pule zdrowia dodane graczowi lub graczom przez działanie „Add Health Pool” Dodaj pulę zdrowia.",
            "pt-BR": "Remove todas as reservas de vida que foram adicionada a um Jogador ou Jogadores por meio da ação Adicionar Reserva de Vida.",
            "ru-RU": "Удаляет все дополнительные запасы здоровья заданные для игрока или игроков действием [Add Health Pool].",
            "zh-CN": "移除由“添加生命池”行动添加的所有生命池。"
        }
    },
    "removeHealthPool": {
        "description": "Removes a health pool that was added via the Add Health Pool action.",
        "args": [
            {
                "name": "ID",
                "description": "Specifies a health pool created by the Add Health Pool action. (Health pool IDs may be obtained using the Last Created Health Pool Value.)",
                "type": "HealthPoolId",
                "default": "Last Created Health Pool"
            }
        ],
        "return": "void",
        "guid": "000000011425",
        "en-US": "Remove Health Pool From Player",
        "es-MX": "Eliminar cantidad de salud del jugador",
        "fr-FR": "Supprimer une réserve de points de vie d’un joueur",
        "ja-JP": "プレイヤーからライフプールを削除",
        "pt-BR": "Remover Reserva de Vida de Jogador",
        "zh-CN": "移除玩家的生命池",
        "descriptionLocalized": {
            "guid": "000000011426",
            "en-US": "Removes a health pool that was added via the Add Health Pool action.",
            "de-DE": "Entfernt einen Trefferpunktevorrat der mithilfe der Aktion [Add Health Pool] hinzugefügt wurde.",
            "es-ES": "Elimina una reserva de salud que se hubiese añadido mediante la acción «Add Health Pool».",
            "es-MX": "Elimina una cantidad de salud añadida mediante la acción Añadir cantidad de salud.",
            "fr-FR": "Retire une réserve de points de vie qui a été ajoutée via l’action « Ajouter une réserve de points de vie ».",
            "it-IT": "Rimuove la riserva di salute che era stata aggiunta tramite l'azione Add Health Pool.",
            "ja-JP": "「ライフプールを追加」アクションで追加されたライフプールを削除する",
            "ko-KR": "Add Health Pool 액션에 의해 추가된 유효 생명력을 제거합니다.",
            "pl-PL": "Usuwa pulę zdrowia dodaną przez działanie „Add Health Pool” Dodaj pulę zdrowia.",
            "pt-BR": "Remove uma reserva de vida adicionada por meio da ação Adicionar Reserva de Vida.",
            "ru-RU": "Удаляет запас здоровья заданный действием [Add Health Pool].",
            "zh-CN": "移除由“添加生命池”行动添加的一个生命池。"
        }
    },
    "removeFromGame": {
        "description": "Removes one or more players from the custom game. This action doesn't work on dummy bots.",
        "args": [
            {
                "name": "Player",
                "description": "The player or players to remove.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            }
        ],
        "en-US": "Remove Player",
        "return": "void",
        "descriptionLocalized": {
            "en-US": "Removes one or more players from the custom game. This action doesn't work on dummy bots.",
            "guid": "<unknown guid>"
        }
    },
    "_&startForcingName": {
        "description": "Starts forcing the name for the specified player or players (only works with AI and dummy bots).",
        "args": [
            {
                "name": "Player",
                "description": "The player whose name will be forced.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            },
            {
                "name": "Name",
                "description": "The name to be forced.",
                "type": "String",
                "default": "Custom String"
            }
        ],
        "return": "void",
        "en-US": "Start Forcing Dummy Bot Name",
        "descriptionLocalized": {
            "en-US": "Starts forcing the name for the specified player or players (only works with AI and dummy bots).",
            "guid": "<unknown guid>"
        }
    },
    "_&resetHeroAvailability": {
        "description": "Restores the list of heroes available to one or more players to the list specified by the game settings. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose hero list is being reset.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BA5A",
        "return": "void",
        "en-US": "Reset Player Hero Availability",
        "es-MX": "Restablecer disponibilidad de héroes de los jugadores",
        "fr-FR": "Réinitialiser la disponibilité du héros pour un joueur",
        "ja-JP": "プレイヤーが使用できるヒーローをリセット",
        "pt-BR": "Redefinir Disponibilidade de Heróis para o Jogador",
        "zh-CN": "重置玩家英雄可选状态",
        "descriptionLocalized": {
            "guid": "00000000BD3A",
            "en-US": "Restores the list of heroes available to one or more Players to the list specified by the game settings. If a Player's current Hero becomes unavailable the Player is forced to choose a different Hero and respawn at an appropriate spawn location.",
            "de-DE": "Setzt die Liste der Helden die einem Spieler oder mehreren Spielern zur Verfügung stehen auf die in den Spieleinstellungen festgelegte Liste zurück. Wenn der aktuelle Held eines Spielers nicht mehr verfügbar ist wird der Spieler gezwungen einen anderen Helden auszuwählen und an einem geeigneten Startpunkt wiederbelebt zu werden.",
            "es-ES": "Cambia la lista de héroes disponibles para uno o más jugadores por la lista especificada en los ajustes del juego. Si el héroe actual de un jugador deja de estar disponible el jugador se ve obligado a escoger otro héroe y reaparecer en una ubicación adecuada.",
            "es-MX": "Restablece la lista de héroes disponibles para uno o más jugadores a la lista especificada por la configuración de la partida. Si el héroe actual de un jugador ya no se encuentra disponible el jugador estará forzado a elegir un héroe diferente y reaparecer en una ubicación de reaparición apropiada.",
            "fr-FR": "Restaure la liste de héros disponibles pour un ou plusieurs joueurs qui ont alors accès à la liste spécifiée dans les paramètres du jeu. Si le héros actuel d’un joueur devient indisponible le joueur est forcé de choisir un autre héros et réapparaîtra à un point d’apparition approprié.",
            "it-IT": "Ripristina la lista di Eroi disponibili a uno o più Giocatori a quella specificata nelle impostazioni della partita. Se l'Eroe attuale di un Giocatore non è più disponibile il Giocatore sarà obbligato a scegliere un Eroe differente e tornare nell'Area di partenza appropriata.",
            "ja-JP": "1人または複数のプレイヤーが使用できるヒーローのリストを、ゲーム設定によって指定されたリストに戻す。現在のヒーローを使用できなくなった場合、プレイヤーは別のヒーローを選び、適切なスポーン地点での強制的にリスポーンする",
            "ko-KR": "플레이어가 사용할 수 있는 영웅 목록을 게임 설정에 지정한 대로 복원합니다. 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면 플레이어는 강제로 다른 영웅을 선택하여 적절한 생성 지점에서 부활합니다.",
            "pl-PL": "Przywraca listę bohaterów dostępnych jednemu lub większej liczbie graczy do listy określonej w ustawieniach gry. Jeśli bieżący bohater gracza jest niedostępny u gracza wymuszony zostaje wybór innego bohatera i odrodzenie w odpowiedniej lokalizacji odradzania.",
            "pt-BR": "Restaura a lista de heróis disponíveis para um ou mais Jogadores com a lista especificada pelas configurações do jogo. Se o Herói atual de um Jogador ficar indisponível o Jogador será forçado a escolher um Herói diferente e ressurgirá no local de ressurgimento apropriado.",
            "ru-RU": "Восстанавливает список доступных героев у одного или нескольких игроков в соответствии с ограничениями настроек игры. Если действующий герой игрока становится недоступен игроку будет предложено выбрать другого героя с возрождением в подходящем месте возрождения.",
            "zh-CN": "将一名或多名玩家可用的英雄列表恢复至游戏设置所指定的英雄列表。如果玩家当前所使用的英雄变得不可用，则此玩家将被强制选择另一名英雄，并在适当的重生位置重生。"
        }
    },
    "_&respawn": {
        "description": "Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to respawn.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "0000000078FC",
        "return": "void",
        "en-US": "Respawn",
        "es-MX": "Reaparecer",
        "fr-FR": "Réapparaître",
        "ja-JP": "リスポーン",
        "pt-BR": "Ressurgir",
        "zh-CN": "重生",
        "descriptionLocalized": {
            "guid": "00000000BC88",
            "en-US": "Respawns one or more Players at an appropriate spawn location with full health even if they were already alive.",
            "de-DE": "Belebt einen oder mehrere Spieler mit vollen Trefferpunkten an einem geeigneten Startpunkt wieder selbst wenn sie bereits lebendig waren.",
            "es-ES": "Hace reaparecer a uno o más jugadores en una ubicación adecuada y con toda la salud incluso si ya estaban vivos.",
            "es-MX": "Hace reaparecer a uno o más jugadores con la salud completa en una ubicación de reaparición apropiada incluso si dichos jugadores se encontraban vivos.",
            "fr-FR": "Fait réapparaître un ou plusieurs joueurs à un point d’apparition approprié avec tous leurs points de vie même s’ils étaient toujours en vie.",
            "it-IT": "Rigenera uno o più Giocatori in una zona di partenza appropriata con salute massima anche se erano già in vita.",
            "ja-JP": "1人または複数のプレイヤーをライフが満タンの状態で、適切なスポーン地点にリスポーンさせる。生存している場合でも同様の動作をする",
            "ko-KR": "플레이어의 생존 여부와 관계 없이 플레이어를 적절한 생성 지점에서 최대 생명력으로 부활시킵니다.",
            "pl-PL": "Ożywia jednego lub więcej graczy w odpowiedniej lokalizacji odrodzenia z pełnym zdrowiem nawet jeśli nadal żyli.",
            "pt-BR": "Faz com que um ou mais Jogadores ressurjam com vida total em um local de ressurgimento apropriado mesmo que já estivessem vivos.",
            "ru-RU": "Возрождает одного или нескольких игроков в подходящем для возрождения месте с полным здоровьем даже если они живы.",
            "zh-CN": "使一名或多名玩家在适当的重生位置重生并恢复至最大生命值，对仍然存活的玩家依然有效。"
        }
    },
    "restartMatch": {
        "description": "Restarts the match. This action only has an effect after the match has existed for 30 seconds.",
        "args": [],
        "return": "void",
        "en-US": "Restart Match",
        "descriptionLocalized": {
            "en-US": "Restarts the match. This action only has an effect after the match has existed for 30 seconds.",
            "guid": "<unknown guid>"
        }
    },
    "_&resurrect": {
        "guid": "000000007878",
        "description": "Instantly resurrects one or more players at the location they died with no transition.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be resurrected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "en-US": "Resurrect",
        "es-MX": "Resucitar",
        "fr-FR": "Ressusciter",
        "ja-JP": "蘇生",
        "pt-BR": "Ressuscitar",
        "zh-CN": "重生",
        "descriptionLocalized": {
            "guid": "00000000BC7A",
            "en-US": "Instantly resurrects one or more Players at the location they died with no transition.",
            "de-DE": "Belebt sofort und ohne Übergang einen oder mehrere Spieler an der Stelle wieder an der sie gestorben sind.",
            "es-ES": "Resucita al instante y sin transición a uno o más jugadores en la ubicación en la que murieron.",
            "es-MX": "Resucita instantáneamente a uno o más jugadores en la ubicación donde murieron sin transición.",
            "fr-FR": "Ressuscite instantanément un ou plusieurs joueurs à l’endroit où ils sont morts sans transition.",
            "it-IT": "Resuscita istantaneamente uno o più Giocatori nel luogo in cui sono morti senza alcuna transizione.",
            "ja-JP": "1人または複数のプレイヤーを倒れた場所で即座に生き返らせる。移行は発生しない",
            "ko-KR": "전환 없이 플레이어를 사망한 자리에서 즉시 부활시킵니다.",
            "pl-PL": "Natychmiast ożywia jednego lub więcej graczy w lokalizacji w której zginęli bez przejścia.",
            "pt-BR": "Ressuscita instantaneamente um ou mais Jogadores no local em que morreram sem transição.",
            "ru-RU": "Мгновенно воскрешает одного или нескольких игроков в месте их смерти без переноса.",
            "zh-CN": "立即使一名到多名玩家在其死亡的位置复活，无需等待时间。"
        }
    },
    "returnToLobby": {
        "description": "Returns the gamemode back to the custom game lobby.",
        "args": [],
        "return": "void",
        "en-US": "Return To Lobby",
        "descriptionLocalized": {
            "en-US": "Returns the gamemode back to the custom game lobby.",
            "guid": "<unknown guid>"
        }
    },
    "_&setAbility1Enabled": {
        "description": "Enables or disables ability 1 for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to ability 1 is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use ability 1. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "guid": "00000000B9B8",
        "return": "void",
        "en-US": "Set Ability 1 Enabled",
        "es-MX": "Establecer habilidad 1 habilitada",
        "fr-FR": "Définir l’activation de la capacité 1",
        "ja-JP": "アビリティ1を有効化",
        "pt-BR": "Definir Habilidade 1 como Ativada",
        "zh-CN": "设置启用技能 1",
        "descriptionLocalized": {
            "guid": "00000000BCFF",
            "en-US": "Enables or disables Ability 1 for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert Fähigkeit 1 für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Ability 1» habilidad 1 para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita la habilidad 1 de uno o más jugadores.",
            "fr-FR": "Active ou désactive la capacité 1 pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita l'Abilità 1 per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのアビリティ1を有効化または無効化する",
            "ko-KR": "플레이어의 기술 1 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza zdolność „Ability 1” Zdolność 1 dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa a Habilidade 1 para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает 1-ю способность для одного или нескольких игроков.",
            "zh-CN": "启用或禁用一名或多名玩家的技能 1。"
        }
    },
    "_&setAbility2Enabled": {
        "description": "Enables or disables ability 2 for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to ability 2 is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "guid": "00000000B9B7",
        "return": "void",
        "en-US": "Set Ability 2 Enabled",
        "es-MX": "Establecer habilidad 2 habilitada",
        "fr-FR": "Définir l’activation de la capacité 2",
        "ja-JP": "アビリティ2を有効化",
        "pt-BR": "Definir Habilidade 2 como Ativada",
        "zh-CN": "设置启用技能 2",
        "descriptionLocalized": {
            "guid": "00000000BD04",
            "en-US": "Enables or disables Ability 2 for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert Fähigkeit 2 für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Ability 2» habilidad 2 para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita la habilidad 2 de uno o más jugadores.",
            "fr-FR": "Active ou désactive la capacité 2 pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita l'Abilità 2 per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのアビリティ2を有効化または無効化する",
            "ko-KR": "플레이어의 기술 2 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza zdolność „Ability 2” Zdolność 2 dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa a Habilidade 2 para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает 2-ю способность для одного или нескольких игроков.",
            "zh-CN": "启用或禁用一名或多名玩家的技能 2。"
        }
    },
    "_&setAbilityCharge": {
        "description": "Set the ability charge count for one or more players. Affects abilities such as Tracer's Blink, Junkrat's Mines, etc.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose ability charge count will be modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Button",
                "description": "The logical button associated with the ability to be modified.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            },
            {
                "name": "Charge Count",
                "description": "The charge count that will be set.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "void",
        "guid": "00000001120C",
        "en-US": "Set Ability Charge",
        "es-MX": "Establecer carga de habilidad",
        "fr-FR": "Définir la charge de la capacité",
        "ja-JP": "アビリティのチャージを設定",
        "pt-BR": "Definir Cargas de Habilidade",
        "zh-CN": "设置技能充能",
        "descriptionLocalized": {
            "en-US": "Set the ability charge count for one or more players. Affects abilities such as Tracer's Blink, Junkrat's Mines, etc.",
            "guid": "<unknown guid>"
        }
    },
    "_&setAbilityCooldown": {
        "description": "Set the ability cooldown time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose ability cooldown time will be modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button associated with the ability to be modified.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            },
            {
                "name": "COOLDOWN",
                "description": "The cooldown time that will be set in seconds. Max of 1000.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "return": "void",
        "guid": "0000000109CA",
        "en-US": "Set Ability Cooldown",
        "es-MX": "Establecer Reutilización de habilidad",
        "fr-FR": "Définir le temps de recharge de la capacité",
        "ja-JP": "アビリティのクールダウンを設定",
        "pt-BR": "Definir Tempo de Recarga da Habilidade",
        "zh-CN": "设置技能冷却",
        "descriptionLocalized": {
            "en-US": "Set the ability cooldown time for one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&setAbilityResource": {
        "description": "Set the ability resource percentage for one or more players. Affects abilities such as Dva's Defense Matrix, Pharah's Hover Jets, etc.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose ability resource percentage will be modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Button",
                "description": "The logical button associated with the ability to be modified.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            },
            {
                "name": "Resource Percent",
                "description": "The percentage of resource that will be set with respect to each player's ability resource capacity.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "void",
        "guid": "00000001120F",
        "en-US": "Set Ability Resource",
        "es-MX": "Establecer recurso de habilidad",
        "fr-FR": "Définir la ressource de la capacité",
        "ja-JP": "アビリティのリソースを設定",
        "pt-BR": "Definir Recurso de Habilidade",
        "zh-CN": "设置技能资源",
        "descriptionLocalized": {
            "en-US": "Set the ability resource percentage for one or more players. Affects abilities such as Dva's Defense Matrix, Pharah's Hover Jets, etc.",
            "guid": "<unknown guid>"
        }
    },
    "_&setAimSpeed": {
        "description": "Sets the aim speed of one or more players to a percentage of their normal aim speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose aim speed will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "TURN SPEED PERCENT",
                "description": "The percentage of normal aim speed to which the player or players will set their aim speed.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C364",
        "return": "void",
        "en-US": "Set Aim Speed",
        "es-MX": "Establecer velocidad al apuntar",
        "fr-FR": "Définir la vitesse de visée",
        "ja-JP": "照準速度を設定",
        "pt-BR": "Definir Velocidade de Mira",
        "zh-CN": "设置瞄准速度",
        "descriptionLocalized": {
            "guid": "00000000C365",
            "en-US": "Sets the aim speed of one or more Players to a percentage of their normal aim speed.",
            "de-DE": "Legt die Zielgeschwindigkeit eines Spielers oder mehrerer Spieler auf einen Prozentsatz ihrer normalen Zielgeschwindigkeit fest.",
            "es-ES": "Establece la velocidad de apuntado de uno o más jugadores como porcentaje de su velocidad de puntería normal.",
            "es-MX": "Establece la velocidad al apuntar de uno o más jugadores a un porcentaje de su velocidad normal al apuntar.",
            "fr-FR": "Définit la vitesse de visée d’un ou plusieurs joueurs afin qu’elle soit égale à un pourcentage de leur vitesse de visée normale.",
            "it-IT": "Imposta la velocità di mira di uno o più Giocatori a una percentuale delle rispettive velocità di mira normali.",
            "ja-JP": "1人または複数のプレイヤーの照準速度を、通常の照準速度の一定割合に設定する",
            "ko-KR": "플레이어의 조준 속도를 일반 조준 속도 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia szybkość celowania u jednego lub więcej graczy na procent normalnej szybkości celowania.",
            "pt-BR": "Define a velocidade de mira de um ou mais Jogadores para uma porcentagem da velocidade de mira normal.",
            "ru-RU": "Приравнивает скорость прицеливания одного или нескольких игроков к процентной доле их исходной скорости прицеливания.",
            "zh-CN": "将一名或多名玩家的瞄准速度设置为其原始瞄准速度的一定百分比。"
        }
    },
    "_&setAmmo": {
        "description": "Set the ammo of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose ammo will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "CLIP",
                "description": "The index of the clip whose ammo will be set. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            },
            {
                "name": "Ammo",
                "description": "The ammo that will be set.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "void",
        "guid": "0000000110F1",
        "en-US": "Set Ammo",
        "es-MX": "Establecer munición",
        "fr-FR": "Définir les munitions",
        "ja-JP": "弾薬数を設定",
        "pt-BR": "Definir Munição",
        "zh-CN": "设置弹药",
        "descriptionLocalized": {
            "en-US": "Set the ammo of one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&setCrouchEnabled": {
        "description": "Enables or disables crouch for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to crouch is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use crouch. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "return": "void",
        "guid": "0000000105A3",
        "en-US": "Set Crouch Enabled",
        "es-MX": "Establecer acción de agacharse activado",
        "fr-FR": "Définir l’activation de S’accroupir",
        "ja-JP": "しゃがみを有効化",
        "pt-BR": "Definir Agachar Ativado",
        "zh-CN": "设置启用蹲下",
        "descriptionLocalized": {
            "guid": "0000000105A4",
            "en-US": "Enables or disables Crouch for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert Ducken für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Crouch» agacharse para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita la función de agacharse para uno o más jugadores.",
            "fr-FR": "Active ou désactive S’accroupir pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita l'Accovacciamento per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのしゃがみを有効化または無効化する",
            "ko-KR": "플레이어의 웅크리기 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza kucnięcie dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa Agachar para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает возможность использования приседания игроком или игроками.",
            "zh-CN": "启用或禁用一名或多名玩家的蹲下动作。"
        }
    },
    "_&setDamageDealt": {
        "description": "Sets the damage dealt of one or more players to a percentage of their raw damage dealt.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose damage dealt will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGE DEALT PERCENT",
                "description": "The percentage of raw damage dealt to which the player or players will set their damage dealt.",
                "type": "unsigned float",
                "min": 0,
                "max": 10000,
                "literalMax": 1000,
                "default": "NUMBER"
            }
        ],
        "hasLiteralLimit": true,
        "guid": "00000000B995",
        "return": "void",
        "en-US": "Set Damage Dealt",
        "es-MX": "Establecer daño infligido",
        "fr-FR": "Définir les dégâts infligés",
        "ja-JP": "与えるダメージを設定",
        "pt-BR": "Definir Dano Causado",
        "zh-CN": "设置造成伤害",
        "descriptionLocalized": {
            "guid": "00000000BCE2",
            "en-US": "Sets the damage dealt of one or more Players to a percentage of their raw damage dealt.",
            "de-DE": "Legt den von einem Spieler oder mehreren Spielern verursachten Schaden auf einen Prozentsatz ihres absoluten Schadens fest.",
            "es-ES": "Establece el daño infligido por uno o más jugadores como porcentaje de su daño infligido bruto.",
            "es-MX": "Establece el daño infligido de uno o más jugadores a un porcentaje de su daño original infligido.",
            "fr-FR": "Définit les dégâts infligés d’un ou plusieurs joueurs afin qu’ils soient égaux à un pourcentage de leurs dégâts infligés bruts.",
            "it-IT": "Imposta la quantità di danni inflitti da uno o più Giocatori a una percentuale dei rispettivi danni grezzi inflitti.",
            "ja-JP": "1人または複数のプレイヤーの与えるダメージを、通常与えるダメージの一定割合に設定する",
            "ko-KR": "플레이어가 주는 피해를 순수 피해량 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia obrażenia zadane przez jednego lub więcej graczy na procent nieprzetworzonych zadanych obrażeń.",
            "pt-BR": "Define o dano causado por um ou mais Jogadores para um percentual do dano bruto causado.",
            "ru-RU": "Приравнивает величину урона наносимого одним или несколькими игроками к доле урона наносимого ими до выполнения этого действия.",
            "zh-CN": "将一名或多名玩家造成的伤害设置为其原始造成伤害的一定百分比。"
        }
    },
    "_&setDamageReceived": {
        "description": "Sets the damage received of one or more players to a percentage of their raw damage received.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose damage received will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGE RECEIVED PERCENT",
                "description": "The percentage of raw damage received to which the player or players will set their damage received.",
                "type": "unsigned float",
                "min": 0,
                "max": 10000,
                "literalMax": 1000,
                "default": "NUMBER"
            }
        ],
        "hasLiteralLimit": true,
        "guid": "00000000B997",
        "return": "void",
        "en-US": "Set Damage Received",
        "es-MX": "Establecer daño recibido",
        "fr-FR": "Définir les dégâts subis",
        "ja-JP": "受けるダメージを設定",
        "pt-BR": "Definir Dano Recebido",
        "zh-CN": "设置受到伤害",
        "descriptionLocalized": {
            "guid": "00000000BCE3",
            "en-US": "Sets the damage received of one or more Players to a percentage of their raw damage received.",
            "de-DE": "Legt den von einem Spieler oder mehreren Spielern erlittenen Schaden auf einen Prozentsatz ihres absoluten erlittenen Schadens fest.",
            "es-ES": "Establece daño recibido de uno o más jugadores como porcentaje de su daño recibido bruto.",
            "es-MX": "Establece el daño recibido de uno o más jugadores a un porcentaje de su daño original recibido.",
            "fr-FR": "Définit les dégâts subis d’un ou plusieurs joueurs afin qu’ils soient égaux à un pourcentage de leurs dégâts subis bruts.",
            "it-IT": "Imposta la quantità di danni subiti da uno o più Giocatori a una percentuale dei rispettivi danni grezzi subiti.",
            "ja-JP": "1人または複数のプレイヤーの受けるダメージを、通常与えるダメージの一定割合に設定する",
            "ko-KR": "플레이어가 받는 피해를 순수 피해량 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia obrażenia otrzymane przez jednego lub więcej graczy na procent nieprzetworzonych otrzymanych obrażeń.",
            "pt-BR": "Define o dano recebido por um ou mais Jogadores para uma porcentagem do dano bruto recebido.",
            "ru-RU": "Приравнивает получаемый урон одного или нескольких игроков к процентной доле их исходного получаемого урона.",
            "zh-CN": "将一名或多名玩家受到的伤害设置为其原始受到伤害的一定百分比。"
        }
    },
    "_&setEnvironmentalKillCreditor": {
        "description": "Sets the player who will received credit if the specified target player or players die to the environment before landing on the ground.",
        "args": [
            {
                "name": "Target",
                "description": "The target player or players whose death is being considered.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Environment Credit Player",
                "description": "The Player who will receive credit if the target player or players die to the environment before landing on the ground. An environment credit player of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            }
        ],
        "return": "void",
        "guid": "000000011C08",
        "en-US": "Set Environment Credit Player",
        "es-MX": "Establecer jugador de crédito por entorno",
        "fr-FR": "Définir l’auteur en cas de mort due à l’environnement",
        "ja-JP": "環境要因プレイヤーを設定",
        "pt-BR": "Definir Jogador de Crédito de Ambiente",
        "zh-CN": "设置地形消灭者玩家",
        "descriptionLocalized": {
            "en-US": "Sets the player who will received credit if the specified target player or players die to the environment before landing on the ground.",
            "guid": "<unknown guid>"
        }
    },
    "_&setFacing": {
        "description": "Sets the facing of one or more players to the specified direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose facing will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the player or players will face. This value is normalized internally.",
                "type": "Direction",
                "default": "VECTOR"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "Relativity",
                "default": "TO WORLD"
            }
        ],
        "guid": "00000000BB29",
        "return": "void",
        "en-US": "Set Facing",
        "es-MX": "Establecer orientación",
        "fr-FR": "Définir la direction du regard",
        "ja-JP": "向き変更を設定",
        "pt-BR": "Definir Encarar",
        "zh-CN": "设置朝向",
        "descriptionLocalized": {
            "guid": "00000000BD97",
            "en-US": "Sets the facing of one or more Players to the specified Direction.",
            "de-DE": "Legt die Blickrichtung von einem Spieler oder mehreren Spielern auf die festgelegte Richtung fest.",
            "es-ES": "Establece la orientación de uno o más jugadores en la dirección especificada.",
            "es-MX": "Establece la orientación de uno o más jugadores en la dirección especificada.",
            "fr-FR": "Définit l’orientation d’un ou plusieurs joueurs dans la direction spécifiée.",
            "it-IT": "Imposta la rotazione di uno o più Giocatori nella Direzione specificata.",
            "ja-JP": "1人または複数のプレイヤーの向きを特定の方向に設定する",
            "ko-KR": "플레이어가 지정된 방향을 바라보도록 설정합니다.",
            "pl-PL": "Ustawia skierowanie jednego lub więcej graczy względem określonego kierunku.",
            "pt-BR": "Define a direção frontal de um ou mais Jogadores para a Direção especificada.",
            "ru-RU": "Устанавливает направление взгляда одного или нескольких игроков в соответствии с указанным направлением.",
            "zh-CN": "设置一名或多名玩家面向的方向。"
        }
    },
    "__setGlobalVariable__": {
        "description": "Stores a value into a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to store the value into.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "0000000077DE",
        "return": "void",
        "en-US": "Set Global Variable",
        "es-MX": "Establecer variable global",
        "fr-FR": "Définir une variable globale",
        "ja-JP": "グローバル変数を設定",
        "pt-BR": "Definir Variável Global",
        "zh-CN": "设置全局变量",
        "descriptionLocalized": {
            "guid": "00000000BC53",
            "en-US": "Stores a Value into a Global Variable which is a Variable that belongs to the game itself.",
            "de-DE": "Speichert den Wert in einer globalen Variable. Dabei handelt es sich um eine Variable die dem Spiel selbst gehört.",
            "es-ES": "Almacena un valor en una variable global una variable que pertenece a la partida en sí.",
            "es-MX": "Almacena un valor en una variable global una variable que pertenece al propio juego.",
            "fr-FR": "Conserve une valeur dans une variable globale c’est-à-dire une variable rattachée à la partie même.",
            "it-IT": "Memorizza un Valore in una Variabile Globale che è una Variabile che appartiene al gioco stesso.",
            "ja-JP": "グローバル変数（ゲーム自体に所属する変数）に値を保存する",
            "ko-KR": "게임 자체에 속한 전역 변수에 값을 저장합니다.",
            "pl-PL": "Magazynuje wartość w zmiennej „Global Variable” Zmienna globalna która należy do samej gry.",
            "pt-BR": "Armazena um Valor em uma Variável Global que é uma Variável que pertence ao jogo em si.",
            "ru-RU": "Записывает значение в глобальную переменную то есть в переменную относящуюся к самой игре.",
            "zh-CN": "将一个值存储为一个全局变量，全局变量即属于游戏本身的变量。"
        }
    },
    "__setGlobalVariableAtIndex__": {
        "description": "Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.",
                "type": "GlobalVariable",
                "default": "A"
            },
            {
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored into the array.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BBAA",
        "return": "void",
        "en-US": "Set Global Variable At Index",
        "es-MX": "Establecer variable global según el índice",
        "fr-FR": "Définir une variable globale à l’index",
        "ja-JP": "インデックスのグローバル変数を設定",
        "pt-BR": "Definir Variável Global no Índice",
        "zh-CN": "在索引处设置全局变量",
        "descriptionLocalized": {
            "guid": "00000000BD98",
            "en-US": "Finds or creates an array on a Global Variable which is a Variable that belongs to the game itself then stores a Value in the array at the specified Index.",
            "de-DE": "Findet oder erstellt ein Array auf einer globalen Variable. Dabei handelt es sich um eine Variable die dem Spiel selbst gehört. Anschließend wird ein Wert in dem Array beim festgelegten Index gespeichert.",
            "es-ES": "Busca o crea una matriz en una variable global una variable que pertenece a la partida en sí y luego almacena un valor en la matriz en el índice especificado.",
            "es-MX": "Encuentra o crea una matriz en una variable global la cual es una variable que pertenece al propio juego. Luego almacena un valor en la matriz del índice especificado.",
            "fr-FR": "Trouve ou crée un tableau à partir d’une variable globale c’est-à-dire une variable rattachée à la partie même puis enregistre une valeur dans le tableau à l’index spécifié.",
            "it-IT": "Trova o crea un array in una Variabile Globale che è una Variabile che appartiene al gioco stesso e memorizza un Valore nell'array all'indice specificato.",
            "ja-JP": "特定のグローバル変数（ゲーム自体所属する変数）上で配列を見つけるか作成する。値を指定されたインデックスに保存する",
            "ko-KR": "게임 자체에 종속된 전역 변수의 배열을 찾거나 생성한 후 값 하나를 배열의 특정 인덱스에 저장합니다.",
            "pl-PL": "Znajduje lub tworzy tabelę dla zmiennej „Global Variable” Zmienna globalna która należy do samej gry a potem magazynuje wartość w tabeli z określonym indeksem.",
            "pt-BR": "Encontra ou cria uma matriz em uma Variável Global que é uma Variável que pertence ao jogo em si e então armazena um Valor na matriz no Índice especificado.",
            "ru-RU": "Находит или создает массив по глобальной переменной то есть по переменной относящейся к самой игре потом записывает значение в массив под указанным индексом.",
            "zh-CN": "为一个全局变量寻找或创建一个数组，然后将一个值储存至指定的索引中。全局变量即属于游戏本身的变量。"
        }
    },
    "_&setGravity": {
        "description": "Sets the movement gravity for one or more players to a percentage regular movement gravity.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement gravity will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "GRAVITY PERCENT",
                "description": "The percentage of regular movement gravity to which the player or players will set their personal movement gravity.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B999",
        "return": "void",
        "en-US": "Set Gravity",
        "es-MX": "Establecer gravedad",
        "fr-FR": "Définir la gravité",
        "ja-JP": "重力を設定",
        "pt-BR": "Definir Gravidade",
        "zh-CN": "设置引力",
        "descriptionLocalized": {
            "en-US": "Sets the movement gravity for one or more players to a percentage regular movement gravity.",
            "guid": "<unknown guid>"
        }
    },
    "_&setHealingDealt": {
        "description": "Sets the healing dealt of one or more players to a percentage of their raw healing dealt.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose healing dealt will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALING DEALT PERCENT",
                "description": "",
                "type": "unsigned float",
                "min": 0,
                "max": 10000,
                "literalMax": 1000,
                "default": "NUMBER"
            }
        ],
        "hasLiteralLimit": true,
        "guid": "00000000B991",
        "return": "void",
        "en-US": "Set Healing Dealt",
        "es-MX": "Establecer sanación realizada",
        "fr-FR": "Définir les soins prodigués",
        "ja-JP": "与える回復を設定",
        "pt-BR": "Definir Cura Realizada",
        "zh-CN": "设置造成治疗",
        "descriptionLocalized": {
            "guid": "00000000BCDA",
            "en-US": "Sets the healing dealt of one or more Players to a percentage of their raw healing dealt.",
            "de-DE": "Legt die von einem Spieler oder mehreren Spielern verursachte Heilung auf einen Prozentsatz ihrer absoluten verursachten Heilung fest.",
            "es-ES": "Establece la sanación realizada por uno o más jugadores como porcentaje de su sanación realizada bruta.",
            "es-MX": "Establece la sanación realizada de uno o más jugadores a un porcentaje de su sanación original realizada.",
            "fr-FR": "Définit les soins prodigués d’un ou plusieurs joueurs afin qu’ils soient égaux à un pourcentage de leurs soins prodigués bruts.",
            "it-IT": "Imposta la quantità di cure fornite da uno o più Giocatori a una percentuale delle rispettive cure grezze fornite.",
            "ja-JP": "1人または複数のプレイヤーの与える回復量を、通常与える回復量の一定割合に設定する",
            "ko-KR": "플레이어가 주는 치유량을 순수 치유량 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia leczenie zapewnione przez jednego lub więcej graczy na procent nieprzetworzonego zapewnionego leczenia.",
            "pt-BR": "Define a cura realizada por um ou mais Jogadores para um percentual da cura bruta realizada.",
            "ru-RU": "Приравнивает эффективность исцеления исходящего от одного или нескольких игроков к доле эффективности исходящего от них исцеления до выполнения этого действия.",
            "zh-CN": "将一名或多名玩家造成的治疗效果设置为其原始造成治疗的一定百分比。"
        }
    },
    "_&setHealingReceived": {
        "description": "Sets the healing received of one or more players to a percentage of their raw healing received.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose healing received will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALING RECEIVED PERCENT",
                "description": "The percentage of raw healing received to which the player or players will set their healing received.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B993",
        "return": "void",
        "en-US": "Set Healing Received",
        "es-MX": "Establecer sanación recibida",
        "fr-FR": "Définir les soins reçus",
        "ja-JP": "受ける回復量を設定",
        "pt-BR": "Definir Cura Recebida",
        "zh-CN": "设置受到治疗",
        "descriptionLocalized": {
            "guid": "00000000BCDD",
            "en-US": "Sets the healing received of one or more Players to a percentage of their raw healing received.",
            "de-DE": "Legt die von einem Spieler oder mehreren Spielern erhaltene Heilung auf einen Prozentsatz ihrer absoluten erhaltenen Heilung fest.",
            "es-ES": "Establece la sanación recibida por uno o más jugadores como porcentaje de su sanación recibida bruta.",
            "es-MX": "Establece la sanación recibida de uno o más jugadores a un porcentaje de su sanación original recibida.",
            "fr-FR": "Définit les soins reçus d’un ou plusieurs joueurs afin qu’ils soient égaux à un pourcentage de leurs soins reçus bruts.",
            "it-IT": "Imposta la quantità di cure ricevute da uno o più Giocatori a una percentuale delle rispettive cure grezze ricevute.",
            "ja-JP": "1人または複数のプレイヤーが受ける回復量を、通常の回復量の一定割合に設定する",
            "ko-KR": "플레이어가 받는 치유량을 순수 치유량 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia leczenie otrzymane przez jednego lub więcej graczy na procent nieprzetworzonego otrzymanego leczenia.",
            "pt-BR": "Define a cura recebida por um ou mais Jogadores para um percentual da cura bruta recebida.",
            "ru-RU": "Приравнивает величину исцеления получаемого одним или несколькими игроками к доле получаемого ими исцеления до выполнения этого действия.",
            "zh-CN": "将一名或多名玩家受到的治疗效果设置为其原始受到治疗的一定百分比。"
        }
    },
    "_&setInvisibility": {
        "description": "Causes one or more players to become invisible to either all other players or just enemies.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will become invisible.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "INVISIBLE TO",
                "description": "Specifies for whom the player or players will be invisible.",
                "type": "Invis",
                "default": "ALL"
            }
        ],
        "guid": "00000000B9ED",
        "return": "void",
        "en-US": "Set Invisible",
        "es-MX": "Establecer invisibilidad",
        "fr-FR": "Définir l’invisibilité",
        "ja-JP": "目視可否を設定",
        "pt-BR": "Definir como Invisível",
        "zh-CN": "设置不可见",
        "descriptionLocalized": {
            "guid": "00000000BD31",
            "en-US": "Causes one or more Players to become invisible to either all other Players or just enemies.",
            "de-DE": "Macht einen oder mehrere Spieler für alle anderen Spieler oder nur für Gegner unsichtbar.",
            "es-ES": "Hace que uno o más jugadores se vuelvan invisibles para todos los demás jugadores o solo para los enemigos.",
            "es-MX": "Provoca que uno o más jugadores se vuelvan invisibles para todos los jugadores o solo para los enemigos.",
            "fr-FR": "Rend un ou plusieurs joueurs invisibles soit aux yeux de tous les joueurs soit uniquement des ennemis.",
            "it-IT": "Consente a uno o più Giocatori di diventare invisibili a tutti i Giocatori o soltanto ai nemici.",
            "ja-JP": "1人または複数のプレイヤーをすべてのプレイヤーまたは敵から見えなくする",
            "ko-KR": "플레이어를 다른 모든 플레이어 또는 적에게만 보이지 않게 합니다.",
            "pl-PL": "Powoduje że jeden lub więcej graczy staje się niewidzialnymi albo dla wszystkich pozostałych graczy albo tylko dla wrogów.",
            "pt-BR": "Faz um ou mais Jogadores ficarem invisíveis para todos os Jogadores ou apenas para inimigos.",
            "ru-RU": "Делает одного или нескольких игроков невидимыми для всех игроков или только для противников.",
            "zh-CN": "使一名或多名玩家变为隐形，此效果可对所有玩家生效，也可以只对敌人生效。"
        }
    },
    "_&setJumpEnabled": {
        "description": "Enables or disables jump for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to jump is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use jump. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "return": "void",
        "guid": "0000000105A5",
        "en-US": "Set Jump Enabled",
        "es-MX": "Establecer salto activado",
        "fr-FR": "Définir l’activation de Sauter",
        "ja-JP": "ジャンプを有効化",
        "pt-BR": "Definir Pular Ativado",
        "zh-CN": "设置启用跳跃",
        "descriptionLocalized": {
            "guid": "0000000105A6",
            "en-US": "Enables or disables Jump for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert Springen für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Jump» salto para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita los saltos para uno o más jugadores.",
            "fr-FR": "Active ou désactive Sauter pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita il Salto per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのジャンプを有効化または無効化する",
            "ko-KR": "플레이어의 점프 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza skok dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa Pular para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает возможность использования прыжка игроком или игроками.",
            "zh-CN": "启用或禁用一名或多名玩家的跳跃动作。"
        }
    },
    "_&setJumpVerticalSpeed": {
        "description": "Sets the jump vertical speed of one or more players to a percentage of their raw jump vertical speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose jump vertical speed will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Jump Vertical Speed Percent",
                "description": "The percentage of raw jump vertical speed to which the player or players will set their jump vertical speed.",
                "type": "unsigned float",
                "default": 100
            }
        ],
        "return": "void",
        "guid": "00000001122D",
        "en-US": "Set Jump Vertical Speed",
        "es-MX": "Establecer velocidad vertical de salto",
        "fr-FR": "Définir la vitesse de saut verticale",
        "ja-JP": "ジャンプ垂直速度を設定",
        "pt-BR": "Definir Velocidade Vertical do Salto",
        "zh-CN": "设置跳跃垂直速度",
        "descriptionLocalized": {
            "guid": "00000001122E",
            "en-US": "Sets the jump vertical speed of one or more Players to a percentage of their raw jump vertical speed.",
            "de-DE": "Legt die vertikale Sprunggeschwindigkeit von einem Spieler oder mehreren Spielern auf einen Prozentsatz ihrer absoluten vertikalen Sprunggeschwindigkeit fest.",
            "es-ES": "Establece la velocidad de salto vertical de uno o más jugadores como porcentaje de su velocidad de salto vertical bruta.",
            "es-MX": "Establece la velocidad vertical de salto de uno o más jugadores a un porcentaje de su velocidad vertical de salto original.",
            "fr-FR": "Définit la vitesse de saut verticale d’un ou plusieurs joueurs afin qu’elle soit égale à un pourcentage de leur vitesse de saut verticale brute.",
            "it-IT": "Imposta la velocità di salto verticale non direzionale di uno o più Giocatori a una percentuale delle rispettive velocità di salto verticale non direzionali grezze.",
            "ja-JP": "1人または複数のプレイヤーのジャンプ垂直速度を、通常のジャンプ垂直速度の一定割合に設定する",
            "ko-KR": "플레이어의 점프 수직 속도를 순수 점프 수직 속도 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia szybkość wertykalnego skoku jednego lub więcej graczy na procent nieprzetworzonej szybkości wertykalnego skoku.",
            "pt-BR": "Define a velocidade vertical de salto de um ou mais Jogadores como um percentual da velocidade vertical de salto bruta.",
            "ru-RU": "Устанавливает процент от вертикальной скорости прыжка в качестве вертикальной скорости прыжка игрока или игроков.",
            "zh-CN": "将一名或多名玩家的跳跃垂直速度设置为其原始跳跃垂直速度的一定百分比。"
        }
    },
    "_&setKnockbackDealt": {
        "description": "Sets the knockback dealt of one or more players to a percentage of their raw knockback dealt.",
        "args": [
            {
                "name": "Player",
                "description": "The player or players whose knockback dealt will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Knockback Dealt Percent",
                "description": "The percentage of raw knockback dealt to which the player or players will set their knockback dealt.",
                "type": "unsigned float",
                "default": 100
            }
        ],
        "return": "void",
        "guid": "000000011FA9",
        "en-US": "Set Knockback Dealt",
        "es-MX": "Establecer derribos infligidos",
        "fr-FR": "Définir le recul infligé",
        "ja-JP": "与えるノックバックを設定",
        "pt-BR": "Definir Repulsão Causada",
        "zh-CN": "设置造成的击退",
        "descriptionLocalized": {
            "guid": "000000011FAB",
            "en-US": "Sets the knockback dealt of one or more Players to a percentage of their raw knockback dealt.",
            "de-DE": "Legt den von einem oder mehreren Spielern verursachten Rückstoß auf einen Prozentsatz ihres absoluten verursachten Rückstoßes fest.",
            "es-ES": "Establece la repulsión realizada por uno o más jugadores como porcentaje de su repulsión realizada bruta.",
            "es-MX": "Establece los derribos infligidos de uno o más jugadores a un porcentaje de sus derribos originales infligidos.",
            "fr-FR": "Définit le recul infligé d’un ou plusieurs joueurs afin qu’il soit égal à un pourcentage de leur recul infligé brut.",
            "it-IT": "Imposta la forza di respinta inflitta da uno o più Giocatori a una percentuale della respinta grezza inflitta.",
            "ja-JP": "1人または複数のプレイヤーの与えるノックバックを、通常与えるノックバックの一定割合に設定する",
            "ko-KR": "플레이어가 주는 밀쳐내기를 순수 밀쳐내기량 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia wartość odrzucania przez jednego lub więcej graczy na określony procent bazowej wartości odrzucenia.",
            "pt-BR": "Define a repulsão causada de um ou mais Jogadores como uma porcentagem da repulsão pura que eles causam.",
            "ru-RU": "Устанавливает значение силы с которой игрок или игроки отбрасывают врагов. Она будет равна проценту от их общей силы отбрасывания.",
            "zh-CN": "将一名或多名玩家造成的击退效果设置为其原始造成击退效果的一定百分比。"
        }
    },
    "_&setKnockbackReceived": {
        "description": "Sets the knockback received of one or more players to a percentage of their raw knockback received.",
        "args": [
            {
                "name": "Player",
                "description": "The player or players whose knockback received will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Knockback Received Percent",
                "description": "The percentage of raw knockback received to which the player or players will set their knockback received.",
                "type": "unsigned float",
                "default": 100
            }
        ],
        "return": "void",
        "guid": "000000011FAA",
        "en-US": "Set Knockback Received",
        "es-MX": "Establecer derribos recibidos",
        "fr-FR": "Définir le recul subi",
        "ja-JP": "受けるノックバックを設定",
        "pt-BR": "Definir Repulsão Recebida",
        "zh-CN": "设置受到的击退",
        "descriptionLocalized": {
            "guid": "000000011FAC",
            "en-US": "Sets the knockback received of one or more Players to a percentage of their raw knockback received.",
            "de-DE": "Legt den von einem oder mehreren Spielern verursachten Rückstoß auf einen Prozentsatz ihres absoluten erlittenen Rückstoßes fest.",
            "es-ES": "Establece la repulsión recibida por uno o más jugadores como porcentaje de su repulsión recibida bruta.",
            "es-MX": "Establece los derribos recibidos de uno o más jugadores a un porcentaje de sus derribos originales recibidos.",
            "fr-FR": "Définit le recul subi d’un ou plusieurs joueurs afin qu’il soit égal à un pourcentage de leur recul subi brut.",
            "it-IT": "Imposta la quantità di respinta subita da uno o più Giocatori a una percentuale della respinta grezza subita.",
            "ja-JP": "1人または複数のプレイヤーの受けるノックバックを、通常受けるノックバックの一定割合に設定する",
            "ko-KR": "플레이어가 받는 밀쳐내기를 순수 밀쳐내기량 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia otrzymywaną wartość odrzucenia przez jednego lub więcej graczy na procent bazowej wartości odrzucenia.",
            "pt-BR": "Define a repulsão recebida de um ou mais Jogadores como uma porcentagem da repulsão pura que eles recebem.",
            "ru-RU": "Устанавливает значение силы с которой будут отброшены игрок или игроки. Она будет равна проценту от их общей силы отбрасывания.",
            "zh-CN": "将一名或多名玩家受到的击退效果设置为其原始受到击退效果的一定百分比。"
        }
    },
    "setMatchTime": {
        "description": "Sets the current match time (which is visible at the top of the screen). This can be used to shorten or extend the duration of a match or to change the duration of assemble heroes or setup.",
        "args": [
            {
                "name": "TIME",
                "description": "The match time in seconds.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000AD31",
        "return": "void",
        "en-US": "Set Match Time",
        "es-MX": "Establecer tiempo de la partida",
        "fr-FR": "Définir le temps de jeu",
        "ja-JP": "マッチ時間を設定",
        "pt-BR": "Definir Tempo da Partida",
        "zh-CN": "设置比赛时间",
        "descriptionLocalized": {
            "guid": "00000000BC9C",
            "en-US": "Sets the current match time which is visible at the top of the screen. This can be used to shorten or extend the duration of a match or to change the duration of Assemble Heroes or Setup.",
            "de-DE": "Legt die aktuelle Matchzeit fest die oben auf dem Bildschirm zu sehen ist. Dies kann zum Verkürzen oder Verlängern der Dauer eines Matches oder zum Ändern der Dauer der Heldenwahl- oder Aufstellungsphase verwendet werden.",
            "es-ES": "Establece el tiempo de partida actual visible en la parte superior de la pantalla. Se puede utilizar para acortar o ampliar la duración de una partida o para cambiar la duración de la selección de héroes o de la preparación.",
            "es-MX": "Establece el tiempo actual de partida visible en la parte superior de la pantalla. Puede utilizarse para acortar o extender la duración de una partida o para modificar la duración de la preparación o de Forma tu equipo.",
            "fr-FR": "Définit la durée actuelle de la partie visible en haut de l’écran. Peut servir à raccourcir ou rallonger la durée d’une partie ou à modifier la durée du choix des héros ou de la préparation.",
            "it-IT": "Imposta l'attuale tempo di gioco visibile in cima allo schermo. Può essere usato per ridurre o estendere la durata di una partita o per cambiare la durata delle fasi Organizzazione o Raduna gli eroi.",
            "ja-JP": "現在のマッチ時間（画面上部に表示）を設定する。マッチの制限時間を短くしたり長くしたりできるほか、ヒーロー編成やセットアップの制限時間も変更できる",
            "ko-KR": "화면 상단에 표시되는 현재 경기 시간을 설정합니다. 이를 통해 경기 지속시간을 조정하거나 영웅 선택 또는 준비 시간을 변경할 수 있습니다.",
            "pl-PL": "Ustawia bieżący czas meczu widoczny na górze ekranu. Może służyć do skracania lub wydłużania meczu lub zbierania bohaterów i przygotowania.",
            "pt-BR": "Define o tempo da partida atual visível no topo da tela. Pode ser usado para reduzir ou estender a duração de uma partida ou para mudar a duração de Escolher Heróis ou da Organização.",
            "ru-RU": "Устанавливает текущее время матча отображается в верхней части экрана. Действие можно использовать для уменьшения или увеличения длительности матча а также для изменения длительности выбора героев или подготовки.",
            "zh-CN": "设置当前比赛时间（玩家可在屏幕顶端看到）。此行动可以用来缩短或延长比赛的持续时间，或改变集结英雄或准备阶段的时间。"
        }
    },
    "_&setMaxAmmo": {
        "description": "Set the max ammo of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose max ammo will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "CLIP",
                "description": "The index of the clip whose ammo will be set. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            },
            {
                "name": "Ammo",
                "description": "The max ammo that will be set.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "void",
        "guid": "0000000110F2",
        "en-US": "Set Max Ammo",
        "es-MX": "Establecer munición máxima",
        "fr-FR": "Définir les munitions maximum",
        "ja-JP": "最大弾薬数を設定",
        "pt-BR": "Definir Munição Máxima",
        "zh-CN": "设置最大弹药",
        "descriptionLocalized": {
            "en-US": "Set the max ammo of one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&setMaxHealth": {
        "description": "Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose max health will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALTH PERCENT",
                "description": "The percentage of raw max health to which the player or players will set their max health.",
                "type": "unsigned float",
                "min": 0,
                "max": 10000,
                "literalMax": 1000,
                "default": "NUMBER"
            }
        ],
        "hasLiteralLimit": true,
        "guid": "0000000078FA",
        "return": "void",
        "en-US": "Set Max Health",
        "es-MX": "Establecer salud máxima",
        "fr-FR": "Définir les points de vie maximum",
        "ja-JP": "最大ライフを設定",
        "pt-BR": "Definir Vida Máxima",
        "zh-CN": "设置最大生命值",
        "descriptionLocalized": {
            "en-US": "Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.",
            "guid": "<unknown guid>"
        }
    },
    "_&setMeleeEnabled": {
        "description": "Enables or disables melee for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to melee is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use melee. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "return": "void",
        "guid": "000000010596",
        "en-US": "Set Melee Enabled",
        "es-MX": "Establecer ataques melé activado",
        "fr-FR": "Définir l’activation de Mêlée",
        "ja-JP": "近接攻撃を有効化",
        "pt-BR": "Definir Corpo a Corpo Ativado",
        "zh-CN": "设置启用近战攻击",
        "descriptionLocalized": {
            "guid": "000000010597",
            "en-US": "Enables or disables Melee for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert den Nahkampfangriff für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Melee» ataque cuerpo a cuerpo para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita los ataques melé para uno o más jugadores.",
            "fr-FR": "Active ou désactive Mêlée pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita la Mischia per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーの近接攻撃を有効化または無効化する",
            "ko-KR": "플레이어의 근접 공격 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza atak wręcz dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa Corpo a Corpo para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает возможность использования атаки ближнего боя игроком или игроками.",
            "zh-CN": "启用或禁用一名或多名玩家的近战攻击。"
        }
    },
    "_&setMoveSpeed": {
        "description": "Sets the move speed of one or more players to a percentage of their raw move speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose move speed will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "MOVE SPEED PERCENT",
                "description": "The percentage of raw move speed to which the player or players will set their move speed.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B998",
        "return": "void",
        "en-US": "Set Move Speed",
        "es-MX": "Establecer velocidad de movimiento",
        "fr-FR": "Définir la vitesse de déplacement",
        "ja-JP": "移動速度を設定",
        "pt-BR": "Definir Velocidade de Movimento",
        "zh-CN": "设置移动速度",
        "descriptionLocalized": {
            "guid": "00000000BCE6",
            "en-US": "Sets the move speed of one or more Players to a percentage of their raw move speed.",
            "de-DE": "Legt die Bewegungsgeschwindigkeit von einem Spieler oder mehreren Spielern auf einen Prozentsatz ihrer absoluten Bewegungsgeschwindigkeit fest.",
            "es-ES": "Establece la velocidad de movimiento de uno o más jugadores como porcentaje de su velocidad de movimiento bruta.",
            "es-MX": "Establece la velocidad de movimiento de uno o más jugadores a un porcentaje de su velocidad de movimiento original.",
            "fr-FR": "Définit la vitesse de déplacement d’un ou plusieurs joueurs afin qu’elle soit égale à un pourcentage de leur vitesse de déplacement brute.",
            "it-IT": "Imposta la velocità di movimento non direzionale di uno o più Giocatori a una percentuale delle rispettive velocità di movimento non direzionali grezze.",
            "ja-JP": "1人または複数のプレイヤーの移動速度を、通常の移動速度の一定割合に設定する",
            "ko-KR": "플레이어의 이동 속도를 순수 이동 속도 대비 % 비율로 설정합니다.",
            "pl-PL": "Ustawia szybkość ruchu jednego lub więcej graczy na procent nieprzetworzonej szybkości ruchu.",
            "pt-BR": "Define a velocidade de movimento de um ou mais Jogadores para uma porcentagem da velocidade de movimento bruta.",
            "ru-RU": "Приравнивает скорость движения одного или нескольких игроков к процентной доле их исходной скорости движения.",
            "zh-CN": "将一名或多名玩家的移动速度设置为其原始移动速度的一定百分比。"
        }
    },
    "setObjectiveDescription": {
        "description": "Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the message.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The message to be displayed.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "STRING"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. The message will keep asking for and using new values from reevaluated inputs.",
                "type": "HudReeval",
                "default": "VISIBLE TO AND STRING"
            }
        ],
        "guid": "00000000BA85",
        "return": "void",
        "en-US": "Set Objective Description",
        "es-MX": "Establecer descripción de objetivo",
        "fr-FR": "Définir la description d’objectif",
        "ja-JP": "目標の説明を設定",
        "pt-BR": "Definir Descrição do Objetivo",
        "zh-CN": "设置目标点描述",
        "descriptionLocalized": {
            "guid": "00000000BD44",
            "en-US": "Sets the text at the top center of the screen that normally describes the objective to a message visible to specific Players.",
            "de-DE": "Legt den Text oben in der Mitte des Bildschirms der normalerweise das Ziel beschreibt auf eine Nachricht fest die für bestimmte Spieler sichtbar ist.",
            "es-ES": "Establece que el texto en la parte superior central de la pantalla que normalmente describe el objetivo sea un mensaje visible para jugadores concretos.",
            "es-MX": "Establece el texto en la parte superior central de la pantalla que normalmente describe el objetivo en un mensaje visible para determinados jugadores.",
            "fr-FR": "Convertit le texte en haut au milieu de l’écran qui indique habituellement l’objectif en message uniquement visible par des joueurs spécifiques.",
            "it-IT": "Posiziona il testo nella parte centrale superiore dello schermo che normalmente descrive l'obiettivo sostituendolo con un messaggio visibile a specifici Giocatori.",
            "ja-JP": "特定のプレイヤーにのみ、画面中央上部にテキストを表示する。通常は目標が記載されている",
            "ko-KR": "일반적으로 지정된 플레이어에게 목표를 알려주기 위해 화면 중앙 상단에 텍스트가 표시되도록 설정합니다.",
            "pl-PL": "Ustawia na górze na środku ekranu tekst który normalnie opisuje zadanie w wiadomości widocznej dla określonych graczy.",
            "pt-BR": "Configura o texto no centro do topo da tela que normalmente descreve o objetivo com uma mensagem visível para Jogadores específicos.",
            "ru-RU": "Содержание текстового объекта в середине верхней части экрана. Обычно этот текст описывает задачу в виде сообщения видимого указанным игрокам.",
            "zh-CN": "将屏幕顶部正中通常用来显示目标点信息的文字修改为其他信息，对指定的玩家可见。"
        }
    },
    "_&setAllowedHeroes": {
        "description": "Sets the list of heroes available to one or more players. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose hero list is being set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HERO",
                "description": "The hero or heroes that will be available. If no heroes are provided, the action has no effect.",
                "type": [
                    "Hero",
                    {
                        "Array": "Hero"
                    }
                ],
                "default": "HERO"
            }
        ],
        "guid": "00000000BA5B",
        "return": "void",
        "en-US": "Set Player Allowed Heroes",
        "es-MX": "Establecer héroes permitidos para los jugadores",
        "fr-FR": "Définir les héros autorisés pour un joueur",
        "ja-JP": "プレイヤーが使用できるヒーローを設定",
        "pt-BR": "Definir Heróis Permitidos para o Jogador",
        "zh-CN": "设置玩家可选的英雄",
        "descriptionLocalized": {
            "guid": "00000000BD37",
            "en-US": "Sets the list of heroes available to one or more Players. If a Player's current Hero becomes unavailable the Player is forced to choose a different Hero and respawn at an appropriate spawn location.",
            "de-DE": "Legt die Liste der Helden die einem oder mehreren Spielern zur Verfügung stehen fest. Wenn der aktuelle Held eines Spielers nicht mehr verfügbar ist wird der Spieler gezwungen einen anderen Helden auszuwählen und an einem geeigneten Startpunkt wiederbelebt zu werden.",
            "es-ES": "Establece la lista de héroes disponibles para uno o más jugadores. Si el héroe actual de un jugador deja de estar disponible el jugador se ve obligado a escoger otro héroe y reaparecer en una ubicación de aparición adecuada.",
            "es-MX": "Establece la lista de héroes disponibles para uno o más jugadores. Si el héroe actual de un jugador ya no se encuentra disponible el jugador estará forzado a elegir un héroe diferente y reaparecer en una ubicación de reaparición apropiada.",
            "fr-FR": "Définit la liste de héros disponibles pour un ou plusieurs joueurs. Si le héros actuel d’un joueur devient indisponible le joueur est forcé de choisir un autre héros et réapparaîtra à un point d’apparition approprié.",
            "it-IT": "Imposta la lista di eroi disponibili a uno o più Giocatori. Se l'Eroe attuale di un Giocatore non è più disponibile il Giocatore sarà obbligato a scegliere un Eroe differente e tornare nell'area di partenza appropriata.",
            "ja-JP": "1人または複数のプレイヤーが使用できるヒーローのリストを設定する。現在のヒーローを使用できなくなった場合、プレイヤーは別のヒーローを選び、適切なスポーン地点での強制的にリスポーンする",
            "ko-KR": "플레이어가 사용할 수 있는 영웅 목록을 설정합니다. 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면 플레이어는 강제로 다른 영웅을 선택하여 적절한 생성 지점에서 부활합니다.",
            "pl-PL": "Ustawia listę bohaterów dostępnych jednemu lub większej liczbie graczy. Jeśli bieżący bohater gracza jest niedostępny u gracza wymuszony zostaje wybór innego bohatera i odrodzenie w odpowiedniej lokalizacji odradzania.",
            "pt-BR": "Define a lista de heróis disponíveis para um ou mais Jogadores. Se o Herói atual de um Jogador ficar indisponível o Jogador será forçado a escolher outro Herói e ressurgirá no local de ressurgimento apropriado.",
            "ru-RU": "Задает список доступных героев у одного или нескольких игроков. Если действующий герой игрока становится недоступен игроку будет предложено выбрать другого героя с возрождением в подходящем месте возрождения.",
            "zh-CN": "设置一名或多名玩家可用的英雄列表。如果玩家当前所使用的英雄变得不可用，则此玩家将被强制选择另一名英雄，并在适当的重生位置重生。"
        }
    },
    "_&setHealth": {
        "description": "Sets the health of a player or players without affecting stats or granting damage/healing credit. This action only has an effect on living players. (For dead players, use the Resurrect Player action instead.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose health will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Amount",
                "description": "How much health the player or players will have.",
                "type": "unsigned float",
                "default": 1
            }
        ],
        "return": "void",
        "guid": "000000011440",
        "en-US": "Set Player Health",
        "es-MX": "Establecer salud del jugador",
        "fr-FR": "Définir les points de vie d’un joueur",
        "ja-JP": "プレイヤーのライフを設定",
        "pt-BR": "Definir Vida do Jogador",
        "zh-CN": "设置玩家生命值",
        "descriptionLocalized": {
            "guid": "000000011441",
            "en-US": "Sets the health of a Player or Players without affecting stats or granting damagehealing credit. This action only has an effect on living players. For dead players use the Resurrect Player action instead.",
            "de-DE": "Legt die Trefferpunkte eines oder mehrerer Spieler fest ohne die Statistik zu beeinflussen oder SchadenHeilung anzurechnen. Diese Aktion wirkt sich nur auf lebende Spieler aus. Für gestorbene Spieler stattdessen die Aktion [Resurrect Player] verwenden.",
            "es-ES": "Establece la salud de un jugador o varios jugadores sin que ello afecte a las estadísticas o les atribuya daño o sanación. Esta acción solo surte efecto en jugadores vivos. Para los jugadores muertos hay que usar la acción «Resurrect Player».",
            "es-MX": "Establece la salud de uno o más jugadores sin afectar las estadísticas ni otorgar crédito por el daño o por la sanación. Esta acción solo tiene efecto en los jugadores vivos. En el caso de los jugadores muertos usa la acción Resucitar jugador.",
            "fr-FR": "Définit les points de vie d’un ou de plusieurs joueurs sans affecter les statistiques ni accorder de bonus de dégâtspoints de vie. Cette action n’a d’effet que sur les joueurs en vie. Pour les joueurs morts utilisez plutôt l’action « Ressusciter le joueur ».",
            "it-IT": "Imposta la salute di un Giocatore o più Giocatori senza influenzare le statistiche o fornire crediti di dannicure. Questa azione influenza solo i Giocatori vivi. Per i Giocatori morti utilizzare l'azione Resurrect Player.",
            "ja-JP": "プレイヤーのライフを設定する。統計やダメージ回復評価には影響しない。このアクションは生存プレイヤーに対してのみ影響する（倒れたプレイヤーには「プレイヤー蘇生」を使用）",
            "ko-KR": "능력치에 영향을 미치거나 피해량치유량 집계치를 주지 않고 플레이어의 생명력을 설정합니다. 이 액션은 생존한 플레이어에게만 적용됩니다. 사망한 플레이어에게는 Resurrect Player 액션을 사용하세요.",
            "pl-PL": "Ustawia zdrowie gracza lub graczy bez wpływania na statystyki lub przyznawania zasług za obrażenialeczenie. To działanie ma wpływ tylko na żywych graczy. Dla martwych użyj działania „Resurrect Player” wskrześ gracza.",
            "pt-BR": "Define a vida de um ou mais Jogadores sem afetar os atributos ou conceder crédito de danocura. Esta ação só tem efeito em jogadores vivos no caso dos mortos use a ação Ressuscitar Jogador.",
            "ru-RU": "Задает объем запаса здоровья игрока или игроков. Не влияет на статистику и учет наносимого урона или исцеления. Влияет только на живых игроков. Для погибших игроков используйте действие [Resurrect Player].",
            "zh-CN": "设置一名或多名玩家的生命值，同时不影响状态，也不造成伤害治疗。此行动只会对还活着的玩家造成影响。（对死去的玩家，请使用“复活玩家”行动。）"
        }
    },
    "_&setScore": {
        "description": "Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose score will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "SCORE",
                "description": "The score that will be set.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB22",
        "return": "void",
        "en-US": "Set Player Score",
        "es-MX": "Establecer puntuación del jugador",
        "fr-FR": "Définir le score d’un joueur",
        "ja-JP": "プレイヤー・スコアを設定する",
        "pt-BR": "Definir Pontuação do Jogador",
        "zh-CN": "设置玩家分数",
        "descriptionLocalized": {
            "guid": "00000000BD85",
            "en-US": "Sets the score kill count of one or more Players. This Action only has an effect in Free-For-All modes.",
            "de-DE": "Legt den Punktestand Kill-Zähler von einem Spieler oder mehreren Spielern fest. Diese Aktion ist nur in klassischen Deathmatch-Modi wirksam.",
            "es-ES": "Establece la puntuación recuento de asesinatos de uno o más jugadores. Esta acción solo surte efecto en modos de todos contra todos.",
            "es-MX": "Establece la puntuación cantidad de eliminaciones de uno o más jugadores. Esta acción solo tiene efecto en los modos de todos contra todos.",
            "fr-FR": "Définit le score nombre de victimes d’un ou plusieurs joueurs. Cette action n’a d’effet qu’en mode Chacun pour soi.",
            "it-IT": "Imposta il punteggio conteggio uccisioni di uno o più Giocatori. Questa Azione si applica solamente alle modalità Tutti contro tutti.",
            "ja-JP": "1人または複数のプレイヤー・スコア（キル数）を設定する。このアクションはFFAモードにのみ適用される",
            "ko-KR": "플레이어의 점수처치 수를 설정합니다. 이 액션은 개별 전투 모드에서만 효과가 있습니다.",
            "pl-PL": "Ustawia wynik liczbę likwidacji jednego lub więcej graczy. Działanie to dotyczy tylko trybów każdy na każdego.",
            "pt-BR": "Define a pontuação contagem de abates de um ou mais Jogadores. Essa Ação só tem efeito nos modos Todos Contra Todos.",
            "ru-RU": "Устанавливает счет количество убийств для одного или нескольких игроков. Это действие работает только в режимах FFA.",
            "zh-CN": "设置一名或多名玩家的分数（击杀数）。此动作只在自由混战模式中生效。"
        }
    },
    "__setPlayerVariable__": {
        "description": "Stores a value into a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be set. If multiple players are provided, each of their variables will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to store the value into.",
                "type": "PlayerVariable",
                "default": "A"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "0000000077DF",
        "return": "void",
        "en-US": "Set Player Variable",
        "es-MX": "Establecer variable de jugador",
        "fr-FR": "Définir une variable de joueur",
        "ja-JP": "プレイヤー変数を設定",
        "pt-BR": "Definir Variável de Jogador",
        "zh-CN": "设置玩家变量",
        "descriptionLocalized": {
            "guid": "00000000BC57",
            "en-US": "Stores a Value into a Player Variable which is a Variable that belongs to a specific Player.",
            "de-DE": "Speichert den Wert in einer Spielervariable. Dabei handelt es sich um eine Variable die einem bestimmten Spieler gehört.",
            "es-ES": "Almacena un valor en una variable de jugador una variable que pertenece a un jugador concreto.",
            "es-MX": "Almacena un valor en una variable de jugador una variable que pertenece a un jugador determinado.",
            "fr-FR": "Conserve une valeur dans une variable de joueur c’est-à-dire une variable rattachée à un joueur spécifique.",
            "it-IT": "Memorizza un Valore in una Variabile Giocatore che è una Variabile che appartiene a un Giocatore specifico.",
            "ja-JP": "プレイヤー変数（特定のプレイヤーに所属する変数）に値を保存する",
            "ko-KR": "지정된 플레이어에 속한 플레이어 변수에 값 하나를 저장합니다.",
            "pl-PL": "Magazynuje wartość w zmiennej „Player Variable” Zmienna gracza która należy do konkretnego gracza.",
            "pt-BR": "Armazena o Valor em uma Variável de Jogador que é uma Variável que pertence a um Jogador específico.",
            "ru-RU": "Записывает значение в переменную игрока то есть в переменную относящуюся к указанному игроку.",
            "zh-CN": "将一个值存储为一个玩家变量，玩家变量即属于一个特定玩家的变量。"
        }
    },
    "__setPlayerVariableAtIndex__": {
        "description": "Finds or creates an array on a player variable, which is a variable that belongs to a specific player, then stores a value in the array at the specified index.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will be modified. If multiple players are provided, each of their variables will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which player variable's value is the array to modify. If the variable's value is not an array, then its value becomes an empty array.",
                "type": "PlayerVariable",
                "default": "A"
            },
            {
                "name": "INDEX",
                "description": "The index of the array to modify. If the index is beyond the end of the array, the array is extended with new elements given a value of zero.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "VALUE",
                "description": "The value that will be stored into the array.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BBA9",
        "return": "void",
        "en-US": "Set Player Variable At Index",
        "es-MX": "Establecer variable de jugador según el índice",
        "fr-FR": "Définir une variable de joueur à l’index",
        "ja-JP": "インデックスのプレイヤー変数を設定",
        "pt-BR": "Definir Variável de Jogador no Índice",
        "zh-CN": "在索引处设置玩家变量",
        "descriptionLocalized": {
            "guid": "00000000BDA0",
            "en-US": "Finds or creates an array on a Player Variable which is a Variable that belongs to a specific Player then stores a Value in the array at the specified Index.",
            "de-DE": "Findet oder erstellt ein Array auf einer Spielervariable. Dabei handelt es sich um eine Variable die einem bestimmten Spieler gehört. Anschließend wird ein Wert in dem Array beim festgelegten Index gespeichert.",
            "es-ES": "Busca o crea una matriz en una variable de jugador que es una variable que pertenece a un jugador concreto y luego almacena un valor en la matriz en el índice especificado.",
            "es-MX": "Encuentra o crea una matriz en una variable de jugador la cual es una variable que pertenece a un jugador determinado. Luego almacena un valor en la matriz del índice especificado.",
            "fr-FR": "Trouve ou crée un tableau à partir d’une variable de joueur c’est-à-dire une variable rattachée à un joueur spécifique puis enregistre une valeur dans le tableau à l’index spécifié.",
            "it-IT": "Trova o crea un array in una Variabile Giocatore che è una Variabile che appartiene a un Giocatore specifico e memorizza un Valore nell'array all'indice specificato.",
            "ja-JP": "特定のプレイヤー変数（特定のプレイヤーに所属する変数）上で配列を見つけるか作成する。値を指定されたインデックスに保存する",
            "ko-KR": "한 플레이어에 종속된 플레이어 변수의 배열을 찾거나 생성한 후 값 하나를 배열의 특정 인덱스에 저장합니다.",
            "pl-PL": "Znajduje lub tworzy tabelę dla zmiennej „Player Variable” Zmienna gracza która należy do konkretnego gracza a potem magazynuje wartość w tabeli z określonym indeksem.",
            "pt-BR": "Encontra ou cria uma matriz em uma Variável de Jogador que é uma Variável que pertence a um Jogador específico e então armazena um Valor na matriz no Índice especificado.",
            "ru-RU": "Находит или создает массив по переменной игрока то есть по переменной принадлежащей определенному игроку а затем сохраняет значение в массиве под указанным индексом.",
            "zh-CN": "为一个玩家变量寻找或创建一个数组，然后将一个值储存至指定的索引处。玩家变量即属于一个特定玩家的变量。"
        }
    },
    "_&setPrimaryFireEnabled": {
        "description": "Enables or disables primary fire for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to primary fire is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use primary fire. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "guid": "00000000C6C5",
        "return": "void",
        "en-US": "Set Primary Fire Enabled",
        "es-MX": "Establecer disparo principal habilitado",
        "fr-FR": "Définir l’activation du tir principal",
        "ja-JP": "メイン攻撃を許可",
        "pt-BR": "Definir Disparo Primário Ativado",
        "zh-CN": "设置主要攻击模式启用",
        "descriptionLocalized": {
            "guid": "00000000C6C2",
            "en-US": "Enables or disables Primary Fire for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert den primären Feuermodus für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Primary Fire» disparo principal para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita el disparo principal de uno o más jugadores.",
            "fr-FR": "Active ou désactive le tir principal pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita il Fuoco Primario per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのメイン攻撃を有効化または無効化する",
            "ko-KR": "플레이어의 기본 발사 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza podstawowy tryb ataku dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa a Disparo Primário para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает основной режим огня Primary Fire для одного или нескольких игроков.",
            "zh-CN": "启用或禁用一名或多名玩家的主要攻击模式。"
        }
    },
    "_&setProjectileGravity": {
        "description": "Sets the projectile gravity for one or more players to a percentage of regular projectile gravity.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose projectile gravity will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "PROJECTILE GRAVITY PERCENT",
                "description": "The percentage of regular projectile gravity to which the player or players will set their personal projectile gravity.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B99B",
        "return": "void",
        "en-US": "Set Projectile Gravity",
        "es-MX": "Establecer gravedad del proyectil",
        "fr-FR": "Définir la gravité des projectiles",
        "ja-JP": "弾の重力を設定",
        "pt-BR": "Definir Gravidade de Projétil",
        "zh-CN": "设置弹道引力",
        "descriptionLocalized": {
            "guid": "00000000BCEE",
            "en-US": "Sets the projectile gravity for one or more Players to a percentage of regular projectile gravity.",
            "de-DE": "Legt die Schwerkraft bei Projektilen für einen oder mehrere Spieler auf einen Prozentsatz der normalen Schwerkraft bei Projektilen fest.",
            "es-ES": "Establece la gravedad de proyectiles de uno o más jugadores como porcentaje de la gravedad de proyectiles normal.",
            "es-MX": "Establece la gravedad del proyectil de uno o más jugadores a un porcentaje de la gravedad regular del proyectil.",
            "fr-FR": "Définit la gravité des projectiles d’un ou plusieurs joueurs afin qu’elle soit égale à un pourcentage de la gravité des projectiles habituelle.",
            "it-IT": "Imposta la gravità dei proiettili di uno o più Giocatori a una percentuale della gravità dei proiettili regolare.",
            "ja-JP": "1人または複数のプレイヤーの弾にかかる重力を、通常弾にかかる重力の一定割合に設定する",
            "ko-KR": "플레이어의 투사체 중력을 일반 투사체 중력의 지정된 비율로 설정합니다.",
            "pl-PL": "Ustawia grawitację pocisków dla jednego lub więcej graczy na procent normalnej grawitacji pocisków.",
            "pt-BR": "Define a gravidade de projétil de um ou mais Jogadores para uma porcentagem da gravidade de projétil regular.",
            "ru-RU": "Приравнивает влияние гравитации на снаряды одного или нескольких игроков к доле обычного влияния гравитации на снаряды.",
            "zh-CN": "将一名或多名玩家的弹道引力设置为正常弹道引力的一定百分比。"
        }
    },
    "_&setProjectileSpeed": {
        "description": "Sets the projectile speed for one or more players to a percentage of projectile speed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose projectile speed will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "PROJECTILE SPEED PERCENT",
                "description": "The percentage of regular projectile speed to which the player or players will set their personal projectile speed.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B99D",
        "return": "void",
        "en-US": "Set Projectile Speed",
        "es-MX": "Establecer velocidad del proyectil",
        "fr-FR": "Définir la vitesse des projectiles",
        "ja-JP": "弾速を設定",
        "pt-BR": "Definir Velocidade de Projétil",
        "zh-CN": "设置弹道速度",
        "descriptionLocalized": {
            "en-US": "Sets the projectile speed for one or more players to a percentage of projectile speed.",
            "guid": "<unknown guid>"
        }
    },
    "_&setReloadEnabled": {
        "description": "Enables or disables Reload for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to reload is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Enabled",
                "description": "Specifies whether the player or players are able to use reload. Expects a boolean value such as True, False, or Compare.",
                "type": "bool",
                "default": "true"
            }
        ],
        "return": "void",
        "guid": "000000011068",
        "en-US": "Set Reload Enabled",
        "es-MX": "Establecer recarga activada",
        "fr-FR": "Définir l’activation de Recharger",
        "ja-JP": "リロードを有効化",
        "pt-BR": "Definir Recarregar Ativado",
        "zh-CN": "设置启用装填",
        "descriptionLocalized": {
            "guid": "000000011069",
            "en-US": "Enables or disables Reload for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert Nachladen für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Reload» recarga para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita la recarga para uno o más jugadores.",
            "fr-FR": "Active ou désactive Recharger pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita la Ricarica per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのリロードを有効化または無効化する",
            "ko-KR": "플레이어의 재장전 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza przeładowanie dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa Recarregar para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает перезарядку для игрока или игроков.",
            "zh-CN": "启用或禁用一名或多名玩家的装填。"
        }
    },
    "_&setRespawnTime": {
        "description": "Sets the duration between death and respawn for one or more players. For players that are already dead when this action is executed, the change takes effect on their next death.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose respawn max time is being defined.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "TIME",
                "description": "The duration between death and respawn in seconds.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B9CD",
        "return": "void",
        "en-US": "Set Respawn Max Time",
        "es-MX": "Establecer tiempo máximo de reaparición",
        "fr-FR": "Définir la durée maximum avant réapparition",
        "ja-JP": "最大リスポーン時間を設定",
        "pt-BR": "Definir Tempo Máximo de Ressurgimento",
        "zh-CN": "设置最大重生时间",
        "descriptionLocalized": {
            "guid": "00000000BD1F",
            "en-US": "Sets the duration between death and respawn for one or more Players. For Players that are already dead when this Action is executed the change takes effect on their next death.",
            "de-DE": "Legt die Dauer zwischen Tod und Wiederbelebung für einen oder mehrere Spieler fest. Bei Spielern die bereits gestorben sind wenn diese Aktion ausgeführt wird tritt die Änderung bei ihrem nächsten Tod in Kraft.",
            "es-ES": "Establece el tiempo entre la muerte y la reaparición para uno o más jugadores. Para los jugadores que ya estén muertos cuando se ejecute esta acción el cambio surte efecto en su próxima muerte.",
            "es-MX": "Establece la duración entre la muerte y la reaparición de uno o más jugadores. En el caso de los jugadores que ya se encuentran muertos cuando se ejecuta esta acción el cambio surtirá efecto a partir de su siguiente muerte.",
            "fr-FR": "Définit le délai entre la mort et la réapparition pour un ou plusieurs joueurs. Pour les joueurs déjà morts lors de l’exécution de cette action cette modification prend effet à leur prochaine mort.",
            "it-IT": "Imposta la durata dell'attesa tra morte e rigenerazione per uno o più Giocatori. Per i Giocatori già morti nel momento in cui tale Azione viene eseguita il cambiamento avrà luogo dalla morte successiva.",
            "ja-JP": "1人または複数のプレイヤーが倒れてからリスポーンまでの時間を設定するこのアクションの実行時に倒れていたプレイヤーについては、次に倒れた時に変更が適用される",
            "ko-KR": "플레이어의 사망에서 부활 사이의 시간을 설정합니다. 이 액션 실행 시점에서 이미 사망한 플레이어의 경우 변경사항이 다음 사망 시부터 적용됩니다.",
            "pl-PL": "Ustawia czas między śmiercią a odrodzeniem dla jednego lub więcej graczy. Dla graczy którzy już nie żyją kiedy uruchamiane jest to działanie zmiana będzie mieć zastosowanie przy kolejnej śmierci.",
            "pt-BR": "Define o intervalo entre a morte e o ressurgimento de um ou mais Jogadores. Para os Jogadores que já estiverem mortos quando essa Ação for executada a mudança surtirá efeito na morte seguinte.",
            "ru-RU": "Устанавливает длительность ожидания возрождения после смерти для одного или нескольких игроков. У игроков которые уже погибли на момент выполнения этого действия время ожидания возрождения изменится после следующей смерти.",
            "zh-CN": "设置一名或多名玩家死亡与重生之间的持续时间。对此动作执行时已经死亡的玩家，此效果将在他们下次死亡时生效。"
        }
    },
    "_&setSecondaryFireEnabled": {
        "description": "Enables or disables secondary fire for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to secondary fire is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "guid": "00000000C6C4",
        "return": "void",
        "en-US": "Set Secondary Fire Enabled",
        "es-MX": "Establecer disparo secundario habilitado",
        "fr-FR": "Définir l’activation du tir secondaire",
        "ja-JP": "サブ攻撃を許可",
        "pt-BR": "Definir Disparo Secundário Ativado",
        "zh-CN": "设置辅助攻击模式启用",
        "descriptionLocalized": {
            "guid": "00000000C6C3",
            "en-US": "Enables or disables Secondary Fire for one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert den sekundären Feuermodus für einen oder mehrere Spieler.",
            "es-ES": "Habilita o deshabilita «Secondary Fire» disparo secundario para uno o más jugadores.",
            "es-MX": "Habilita o deshabilita el disparo secundario de uno o más jugadores.",
            "fr-FR": "Active ou désactive le tir secondaire pour un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita il Fuoco Secondario per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのサブ攻撃を有効化または無効化する",
            "ko-KR": "플레이어의 보조 발사 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza alternatywny tryb ataku dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa o Disparo Secundário para um ou mais Jogadores.",
            "ru-RU": "Включает или отключает дополнительный режим огня Secondary Fire для одного или нескольких игроков.",
            "zh-CN": "启用或禁用一名或多名玩家的辅助攻击模式。"
        }
    },
    "setSlowMotion": {
        "description": "Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.",
        "args": [
            {
                "name": "SPEED PERCENT",
                "description": "The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B9F2",
        "return": "void",
        "en-US": "Set Slow Motion",
        "es-MX": "Establecer cámara lenta",
        "fr-FR": "Définir un ralenti",
        "ja-JP": "スローモーションを設定",
        "pt-BR": "Definir Câmera Lenta",
        "zh-CN": "设置慢动作",
        "descriptionLocalized": {
            "guid": "00000000BD35",
            "en-US": "Sets the simulation rate for the entire game including all players projectiles effects and game mode logic.",
            "de-DE": "Legt die Simulationsgeschwindigkeit für das gesamte Spiel fest einschließlich aller Spieler Projektile Effekte und der Logik des Spielmodus.",
            "es-ES": "Establece el porcentaje de simulación para toda la partida incluidos todos los jugadores los proyectiles los efectos y la lógica del modo de juego.",
            "es-MX": "Establece la tasa de simulación de toda la partida incluye jugadores proyectiles efectos y la lógica del modo de juego.",
            "fr-FR": "Définit le taux de simulation pour toute la partie y compris tous les joueurs les projectiles les effets et la logique de mode de jeu.",
            "it-IT": "Imposta la frequenza della simulazione per l'intera partita inclusi tutti i giocatori i proiettili gli effetti e la logica della modalità di gioco.",
            "ja-JP": "ゲーム全体のシミュレーション・レートを設定する。（すべてのプレイヤー、弾、エフェクト、ゲーム・モードのロジックを含む）",
            "ko-KR": "모든 플레이어 투사체 효과 게임 모드 로직 등 게임 전체를 대상으로 하여 시뮬레이션 비율을 설정합니다.",
            "pl-PL": "Ustawia tempo symulacji dla całej gry włączając w to wszystkich graczy pociski efekty i logikę trybów gry.",
            "pt-BR": "Define a taxa de simulação do jogo inteiro incluindo todos os jogadores projéteis efeitos e lógicas de modo de jogo.",
            "ru-RU": "Устанавливает скорость симуляции для всей игры включая игроков снаряды эффекты и логику игрового режима.",
            "zh-CN": "设置整个游戏的模拟速率，包括所有玩家、弹道、效果及游戏模式逻辑。"
        }
    },
    "_&setStatusEffect": {
        "description": "Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the clear status action.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to whom the status will be applied.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ASSISTER",
                "description": "Specifies a player to be awarded assist credit should the affected player or players be killed while the status is in effect. An assister of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            },
            {
                "name": "STATUS",
                "description": "The status to be applied to the player or players. These behave similarly to statuses applied from hero abilities.",
                "type": "Status",
                "default": "HACKED"
            },
            {
                "name": "DURATION",
                "description": "The duration of the status in seconds. To have a status that lasts until a clear status action is executed, provide an arbitrarily long duration such as 9999.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B588",
        "return": "void",
        "en-US": "Set Status",
        "es-MX": "Establecer estado",
        "fr-FR": "Définir un statut",
        "ja-JP": "ステータスを設定",
        "pt-BR": "Definir Status",
        "zh-CN": "设置状态",
        "descriptionLocalized": {
            "guid": "00000000BCA5",
            "en-US": "Applies a status to one or more Players. This Status will remain in effect for the specified Duration or until it is cleared by the Clear Status Action.",
            "de-DE": "Wendet einen Status auf einen oder mehrere Spieler an. Der Status bleibt für die festgelegte Dauer aktiv oder bis er durch die Aktion [Clear Status] aufgehoben wird.",
            "es-ES": "Aplica un estado a uno o más jugadores. Este estado permanecerá en vigor con la duración especificada o hasta que lo elimine la acción «Clear Status».",
            "es-MX": "Aplica un estado a uno o más jugadores. Este estado permanecerá en efecto por la duración especificada o hasta que sea eliminado por la acción Eliminar estado.",
            "fr-FR": "Applique un statut à un ou plusieurs joueurs. Ce statut restera actif pendant la durée spécifiée ou jusqu’à ce qu’il soit supprimé par l’action « Effacer le statut ».",
            "it-IT": "Applica uno stato a uno o più Giocatori. Questo Stato rimarrà attivo per la Durata specificata o finché non viene annullato dall'Azione Clear Status.",
            "ja-JP": "1人または複数のプレイヤーにステータスを適用する。このステータスは指定された時間が経過するまで、または「ステータスをクリア」アクションでクリアされるまで持続する",
            "ko-KR": "지정된 상태를 플레이어에게 적용합니다. 이 상태는 지정된 지속 시간 동안 또는 Clear Status 액션에 의해 제거될 때까지 유지됩니다.",
            "pl-PL": "Zastosowuje status dla jednego lub więcej graczy. Status będzie się utrzymywał przez określony czas lub dopóki nie usunie go działanie „Clear Status” Usuń status.",
            "pt-BR": "Aplica um status a um ou mais Jogadores. Esse Status permanecerá em efeito pela Duração especificada ou até ser apagado pela Ação Apagar Status.",
            "ru-RU": "Применяет статус к одному или нескольким игрокам. Статус будет действовать указанное время или пока его не отменит действие [Clear Status].",
            "zh-CN": "对一名或多名玩家施加一个状态。此状态会持续指定的”持续时间“，或直到被”清除状态“动作清除。"
        }
    },
    "setTeamScore": {
        "description": "Sets the score for one or both teams. This action has no effect in free-for-all modes or modes without a team score.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams whose score will be set.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "SCORE",
                "description": "The score that will be set.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB25",
        "return": "void",
        "en-US": "Set Team Score",
        "es-MX": "Establecer puntuación del equipo",
        "fr-FR": "Définir le score d’une équipe",
        "ja-JP": "チーム・スコアを設定",
        "pt-BR": "Definir Pontuação da Equipe",
        "zh-CN": "设置队伍分数",
        "descriptionLocalized": {
            "guid": "00000000BD88",
            "en-US": "Sets the score for one or both Teams. This Action has no effect in Free-For-All modes or modes without a team score.",
            "de-DE": "Legt den Punktestand eines oder beider Teams fest. Diese Aktion ist nicht in klassischen Deathmatch-Modi oder Modi ohne Teampunktestand wirksam.",
            "es-ES": "Establece la puntuación de uno o ambos equipos. Esta acción no surte ningún efecto en modos de todos contra todos o modos sin puntuación de equipo.",
            "es-MX": "Establece la puntuación de un equipo o ambos. Esta acción no tiene efecto en los modos de todos contra todos o en los modos sin puntuación de equipo.",
            "fr-FR": "Définit le score d’une équipe ou des deux. Cette action n’a aucun effet en mode Chacun pour soi ou dans les modes dépourvus de score d’équipe.",
            "it-IT": "Imposta il punteggio di una o entrambe le Squadre. Questa Azione non ha effetto nelle modalità Tutti contro tutti senza un punteggio di squadra.",
            "ja-JP": "片方または両方のチームのスコアを設定する。このアクションはFFAモードまたはチーム・スコアのないモードには適応されない",
            "ko-KR": "한 팀 또는 두 팀 모두의 점수를 설정합니다. 이 액션은 개별 전투 모드나 팀 점수가 존재하지 않는 모드에서는 효과가 없습니다.",
            "pl-PL": "Ustawia wynik dla jednej lub obu drużyn. Działanie nie odnosi efektu w trybach każdy na każdego lub trybach bez wyniku drużynowego.",
            "pt-BR": "Define a pontuação de uma ou de ambas as Equipes. Essa Ação não tem efeito nos modos Todos Contra Todos ou em modos sem pontuação de equipe.",
            "ru-RU": "Устанавливает счет для одной или обеих команд. Не действует в режимах FFA и в режимах без командного счета.",
            "zh-CN": "设置一方或双方队伍的分数。此动作在自由混战模式或没有队伍分数的模式中无效。"
        }
    },
    "_&setUltEnabled": {
        "description": "Enables or disables the ultimate ability of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose access to their ultimate ability is affected.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "ENABLED",
                "description": "Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true, false, or compare.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "guid": "00000000B9B6",
        "return": "void",
        "en-US": "Set Ultimate Ability Enabled",
        "es-MX": "Establecer habilidad máxima habilitada",
        "fr-FR": "Définir l’activation de la capacité ultime",
        "ja-JP": "アルティメット・アビリティを有効化",
        "pt-BR": "Definir Habilidade Suprema como Ativada",
        "zh-CN": "设置启用终极技能",
        "descriptionLocalized": {
            "guid": "00000000BD07",
            "en-US": "Enables or disables the ultimate ability of one or more Players.",
            "de-DE": "Aktiviert bzw. deaktiviert die ultimative Fähigkeit eines Spielers oder mehrerer Spieler.",
            "es-ES": "Habilita o deshabilita la habilidad definitiva de uno o más jugadores.",
            "es-MX": "Habilita o deshabilita la habilidad máxima de uno o más jugadores.",
            "fr-FR": "Active ou désactive la capacité ultime d’un ou plusieurs joueurs.",
            "it-IT": "Abilita o disabilita l'Abilità Ultra per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーのアルティメット・アビリティを有効化または無効化する",
            "ko-KR": "플레이어의 궁극기 활성화 여부를 설정합니다.",
            "pl-PL": "Włącza lub wyłącza superzdolność dla jednego lub więcej graczy.",
            "pt-BR": "Ativa ou desativa a habilidade suprema de um ou mais Jogadores.",
            "ru-RU": "Включает или отключает суперспособность для одного или нескольких игроков.",
            "zh-CN": "启用或禁用一名或多名玩家的终极技能。"
        }
    },
    "_&setUltCharge": {
        "description": "Sets the ultimate charge for one or more players as a percentage of maximum charge.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose ultimate charge will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "CHARGE PERCENT",
                "description": "The percentage of maximum charge.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB1C",
        "return": "void",
        "en-US": "Set Ultimate Charge",
        "es-MX": "Establecer carga de habilidad máxima",
        "fr-FR": "Définir la charge de la capacité ultime",
        "ja-JP": "アルティメット・チャージを設定",
        "pt-BR": "Definir Carga da Suprema",
        "zh-CN": "设置终极技能充能",
        "descriptionLocalized": {
            "guid": "00000000BD7A",
            "en-US": "Sets the ultimate charge for one or more Players as a percentage of maximum charge.",
            "de-DE": "Legt die Aufladung der ultimativen Fähigkeit für einen oder mehrere Spieler als Prozentsatz der maximalen Aufladung fest.",
            "es-ES": "Establece la carga de definitiva de uno o más jugadores como porcentaje de la carga máxima.",
            "es-MX": "Establece la carga de la habilidad máxima de uno o más jugadores como un porcentaje de la carga máxima.",
            "fr-FR": "Définit la charge ultime d’un ou plusieurs joueurs afin qu’elle soit égale à un pourcentage de la charge maximum.",
            "it-IT": "Imposta il livello di carica dell'Ultra per uno o più Giocatori come percentuale della carica massima.",
            "ja-JP": "1人または複数のプレイヤーのアルティメット・チャージを最大パワーの割合として設定する",
            "ko-KR": "플레이어의 궁극기 충전량을 최대 충전량의 비율로 설정합니다.",
            "pl-PL": "Ustawia naładowanie superzdolności dla jednego lub więcej graczy na procent maksymalnego naładowania.",
            "pt-BR": "Define a carga de suprema de um ou mais Jogadores para uma porcentagem da carga máxima.",
            "ru-RU": "Устанавливает уровень заряда суперспособности в процентах от максимального заряда.",
            "zh-CN": "将一名或多名玩家的终极技能充能设为最大充能的一定百分比。"
        }
    },
    "_&setWeapon": {
        "description": "Sets the weapon of one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose weapon will be set.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Weapon",
                "description": "The number of the weapon to be equipped. 1 is the first weapon, and 2 is the second. If the specified weapon does not exist, players will use the default weapon.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "void",
        "guid": "00000001105C",
        "en-US": "Set Weapon",
        "es-MX": "Establecer arma",
        "fr-FR": "Définir l’arme",
        "ja-JP": "武器を設定",
        "pt-BR": "Definir Arma",
        "zh-CN": "设置武器",
        "descriptionLocalized": {
            "guid": "00000001105D",
            "en-US": "Sets the weapon of one or more Players.",
            "de-DE": "Legt die Waffe von einem oder mehreren Spielern fest.",
            "es-ES": "Establece el arma de uno o más jugadores.",
            "es-MX": "Establece el arma de uno o más jugadores.",
            "fr-FR": "Définit l’arme d’un ou plusieurs joueurs.",
            "it-IT": "Imposta l'arma di uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーの武器を設定する",
            "ko-KR": "플레이어의 무기를 설정합니다.",
            "pl-PL": "Ustawia broń jednego lub więcej graczy.",
            "pt-BR": "Define a arma de um ou mais Jogadores.",
            "ru-RU": "Задает оружие для игрока или игроков.",
            "zh-CN": "设置一名或多名玩家的武器。"
        }
    },
    "__skip__": {
        "guid": "00000000BB01",
        "description": "Skips execution of a certain number of actions in the action list.",
        "args": [
            {
                "name": "NUMBER OF ACTIONS",
                "description": "The number of actions to skip, not including this action.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "return": "void",
        "en-US": "Skip",
        "es-MX": "Omitir",
        "fr-FR": "Passer",
        "ja-JP": "スキップ",
        "pt-BR": "Ignorar",
        "zh-CN": "跳过",
        "descriptionLocalized": {
            "guid": "00000000BD62",
            "en-US": "Skips execution of a certain number of Actions in the Action list.",
            "de-DE": "Überspringt die Ausführung einer bestimmten Menge an Aktionen in der Aktionsliste.",
            "es-ES": "Salta la ejecución de un determinado número de acciones en la lista de acciones.",
            "es-MX": "Omite la ejecución de una determinada cantidad de acciones en la lista de acciones.",
            "fr-FR": "Passe l’exécution d’un certain nombre d’actions dans la liste d’actions.",
            "it-IT": "Salta l'esecuzione di un certo numero di Azioni della lista Azioni.",
            "ja-JP": "アクション・リスト内の一部のアクションの実行をスキップする",
            "ko-KR": "액션 목록에 있는 지정된 수의 액션을 건너뜁니다.",
            "pl-PL": "Pomija uruchomienie określonej liczby działań z listy.",
            "pt-BR": "Ignora a execução de um certo número de Ações na lista de Ações.",
            "ru-RU": "Пропускает выполнение определенного количества действий по списку действий.",
            "zh-CN": "跳过动作列表中一定条数的动作。"
        }
    },
    "__skipIf__": {
        "description": "Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "Specifies whether the skip occurs.",
                "type": "bool",
                "default": "COMPARE"
            },
            {
                "name": "NUMBER OF ACTIONS",
                "description": "The number of actions to skip, not including this action.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB00",
        "return": "void",
        "en-US": "Skip If",
        "es-MX": "Omitir si",
        "fr-FR": "Passer si",
        "ja-JP": "スキップする条件",
        "pt-BR": "Ignorar se",
        "zh-CN": "根据条件跳过",
        "descriptionLocalized": {
            "guid": "00000000BD64",
            "en-US": "Skips execution of a certain number of Actions in the Action list if this Action's Condition evaluates to true. If it does not execution continues with the next Action.",
            "de-DE": "Überspringt die Ausführung einer bestimmten Menge an Aktionen in der Aktionsliste wenn die Bedingung dieser Aktion True ist. Ist sie es nicht fährt die Ausführung mit der nächsten Aktion fort.",
            "es-ES": "Salta la ejecución de un determinado número de acciones en la lista de acciones si la condición de esta acción se evalúa como verdadera; en caso contrario la ejecución continúa con la próxima acción.",
            "es-MX": "Omite la ejecución de una determinada cantidad de acciones en la lista de acciones si se establece que la condición de esta acción es verdadera. Si no es verdadera la ejecución continuará con la siguiente acción.",
            "fr-FR": "Passe l’exécution d’un certain nombre d’actions dans la liste d’actions si la condition de cette action est évaluée comme vraie. Dans le cas contraire l’exécution continue lors de l’action suivante.",
            "it-IT": "Salta l'esecuzione di un certo numero di Azioni della lista Azioni Condizione dell'Azione è vera. Se non lo è l'esecuzione continua con l'Azione successiva.",
            "ja-JP": "アクション・リストに含まれるいくつかのアクションをスキップする（アクションの条件の評価が「TRUE」である場合のみ）。スキップできない場合、次のアクションが実行される",
            "ko-KR": "이 액션의 조건이 참일 때 액션 목록에 있는 지정된 수만큼의 액션을 건너뜁니다. 이외의 경우 다음 액션으로 진행합니다.",
            "pl-PL": "Pomija uruchomienie określonej liczby działań z listy jeśli warunek działania jest prawdą. Jeśli nie następne działanie zostanie uruchomione.",
            "pt-BR": "Ignora a execução de um certo número de Ações na lista de Ações se a Condição desta Ação for avaliada como verdadeira. Se não for a execução continua com a Ação seguinte.",
            "ru-RU": "Пропускает выполнение определенного количества действий из списка действий если условие данного действия выполняется. Если условие не выполняется то происходит переход к следующему действию.",
            "zh-CN": "如果此动作的条件为”真“，则跳过动作列表中一定条数的动作。否则，则继续执行下一条动作。"
        }
    },
    "smallMessage": {
        "description": "Displays a small message beneath the reticle that is visible to specific players.",
        "args": [
            {
                "name": "VISIBLE TO",
                "description": "One or more players who will see the message.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEADER",
                "description": "The message to be displayed.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "STRING"
            }
        ],
        "guid": "00000000BA87",
        "return": "void",
        "en-US": "Small Message",
        "es-MX": "Mensaje pequeño",
        "fr-FR": "Message en petit",
        "ja-JP": "小さなメッセージ",
        "pt-BR": "Mensagem Pequena",
        "zh-CN": "小字体信息",
        "descriptionLocalized": {
            "guid": "00000000BD41",
            "en-US": "Displays a small message beneath the reticle that is visible to specific Players.",
            "de-DE": "Zeigt eine kleine Nachricht unter dem Fadenkreuz an die für bestimmte Spieler sichtbar ist.",
            "es-ES": "Muestra un mensaje pequeño debajo de la retícula que es visible para determinados jugadores.",
            "es-MX": "Muestra un mensaje pequeño debajo de la retícula que es visible para determinados jugadores.",
            "fr-FR": "Affiche un petit message sous le réticule visible pour des joueurs spécifiques.",
            "it-IT": "Visualizza un piccolo messaggio sotto il reticolo di mira visibile a specifici Giocatori.",
            "ja-JP": "照準の下に、特定のプレイヤーにしか見えない小さなメッセージを表示する",
            "ko-KR": "지정된 플레이어에게 보이도록 작은 메시지를 조준선 아래에 표시합니다.",
            "pl-PL": "Wyświetla pod celownikiem krótką wiadomość która jest widoczna dla określonych graczy.",
            "pt-BR": "Exibe uma pequena mensagem abaixo da mira visível para Jogadores específicos.",
            "ru-RU": "Отображает небольшое сообщение под прицелом указанных игроков.",
            "zh-CN": "在准星下方显示小字体信息，对指定玩家可见。"
        }
    },
    "_&startAcceleration": {
        "description": "Starts accelerating one or more players in a specified direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players that will begin accelerating.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the acceleration will be applied. This value is normalized internally.",
                "type": "Direction",
                "default": "VECTOR"
            },
            {
                "name": "RATE",
                "description": "The rate of acceleration in meters per second squared. This value may need to be quite high in order to overcome gravity and/or surface friction.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "MAX SPEED",
                "description": "The speed at which acceleration will stop for the player or players. It may not be possible to reach this speed due to gravity and/or surface friction.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "Relativity",
                "default": "TO WORLD"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "AccelReeval",
                "default": "DIRECTION, RATE, AND MAX SPEED"
            }
        ],
        "guid": "00000000BB0D",
        "return": "void",
        "en-US": "Start Accelerating",
        "es-MX": "Comenzar la aceleración",
        "fr-FR": "Accélérer",
        "ja-JP": "加速の開始",
        "pt-BR": "Começar a Acelerar",
        "zh-CN": "开始加速",
        "descriptionLocalized": {
            "guid": "00000000BD71",
            "en-US": "Starts accelerating one or more Players in a specified direction.",
            "de-DE": "Fängt an einen oder mehrere Spieler in einer festgelegten Richtung zu beschleunigen.",
            "es-ES": "Empieza a acelerar a uno o más jugadores en una dirección especificada.",
            "es-MX": "Comienza a acelerar uno o más jugadores en una dirección especificada.",
            "fr-FR": "Démarre l’accélération d’un ou plusieurs joueurs dans une direction spécifiée.",
            "it-IT": "Fa accelerare uno o più Giocatori verso una direzione specifica.",
            "ja-JP": "1人または複数のプレイヤーを指定方向に加速させる",
            "ko-KR": "플레이어를 지정된 방향으로 가속하기 시작합니다.",
            "pl-PL": "Zaczyna przyspieszać jednego lub więcej graczy w określonym kierunku.",
            "pt-BR": "Começa a acelerar um ou mais Jogadores em uma direção especificada.",
            "ru-RU": "Начинает ускорять одного или нескольких игроков в указанном направлении.",
            "zh-CN": "开始令一名或多名玩家向指定方向加速。"
        }
    },
    "_&startCamera": {
        "description": "Places your camera at a location, facing a direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose cameras will be placed at the location.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "EYE POSITION",
                "description": "The position of the camera. Reevaluates continuously.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "LOOK AT POSITION",
                "description": "Where the camera looks at. Reevaluates continuously.",
                "type": "Position",
                "default": "VECTOR"
            },
            {
                "name": "BLEND SPEED",
                "description": "How fast to blend the camera speed as positions change. 0 means do not blend at all, and just change positions instantly.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000C393",
        "return": "void",
        "en-US": "Start Camera",
        "es-MX": "Comenzar cámara",
        "fr-FR": "Lancer la caméra",
        "ja-JP": "カメラの始動",
        "pt-BR": "Iniciar Câmera",
        "zh-CN": "开始镜头",
        "descriptionLocalized": {
            "guid": "00000000C394",
            "en-US": "Places your camera at a location facing a direction.",
            "de-DE": "Platziert die Spielerkamera an einer Position in eine bestimmte Richtung ausgerichtet.",
            "es-ES": "Coloca la cámara en una ubicación orientada en una dirección.",
            "es-MX": "Coloca tu cámara en una ubicación y la orienta en una dirección.",
            "fr-FR": "Place votre caméra à un endroit en l’orientant dans une direction donnée.",
            "it-IT": "Posiziona la telecamera nella posizione specificata rivolta verso una direzione.",
            "ja-JP": "いずれかの方向を向いたカメラを配置する",
            "ko-KR": "카메라가 지정된 방향을 바라보도록 하여 배치합니다.",
            "pl-PL": "Umieszcza w lokalizacji twoją kamerę skierowaną w danym kierunku.",
            "pt-BR": "Posiciona uma câmera em um local apontando para uma direção.",
            "ru-RU": "Размещает вашу камеру в указанном месте и направлении.",
            "zh-CN": "将你的镜头放置在一个位置，面向一个角度。"
        }
    },
    "startDamageModification": {
        "description": "Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage modification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.",
        "args": [
            {
                "name": "RECEIVERS",
                "description": "The player or players whose incoming damage will be modified (when attacked by the damagers).",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGERS",
                "description": "The player or players whose outgoing damage will be modified (when attacking the receivers).",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "DAMAGE PERCENT",
                "description": "The percentage of damage that will apply to receivers when attacked by damagers.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "DamageReeval",
                "default": "RECEIVERS, DAMAGERS, AND DAMAGE PERCENT"
            }
        ],
        "guid": "00000000C639",
        "return": "void",
        "en-US": "Start Damage Modification",
        "es-MX": "Comenzar modificación de daño",
        "fr-FR": "Lancer la modification des dégâts",
        "ja-JP": "ダメージ変更を開始",
        "pt-BR": "Começar Modificação de Dano",
        "zh-CN": "开始伤害调整",
        "descriptionLocalized": {
            "guid": "00000000C63A",
            "en-US": "Starts modifying how much damage one or more Receivers will receive from one or more Damagers. A reference to this damage modification can be obtained from the Last Damage Modification ID Value. This Action will fail if too many damage modifications have been started.",
            "de-DE": "Beginnt die Höhe des Schadens zu modifizieren den ein oder mehrere Schadenserleider durch einen oder mehrere Schadensverursacher erleiden werden. Eine Referenz zu dieser Schadensmodifikation kann durch den Wert [Last Damage Modification ID] erhalten werden. Diese Aktion schlägt fehl wenn zu viele Schadensmodifikationen gestartet wurden.",
            "es-ES": "Comienza a modificar cuánto daño recibirán uno o más receptores de uno o más dañadores. se puede obtener una referencia a esta modificación de daño a partir del valor de «Last Damage Modification ID». Esta acción fallará si se han iniciado demasiadas modificaciones de daño.",
            "es-MX": "Comienza a modificar la cantidad de daño que uno o más receptores recibirán de uno o más infligidores de daño. Una referencia a esta modificación de daño se puede obtener del valor de la ID de modificación de daño anterior. Esta acción no podrá realizarse si se han iniciado demasiadas modificaciones de daño.",
            "fr-FR": "Commence à modifier la quantité de dégâts subis par un ou plusieurs récepteurs de la part d’un ou de plusieurs émetteurs. Une référence de cette modification des dégâts peut être obtenue par la valeur « Dernier identifiant de modification de dégâts ». Cette action échouera si trop de modifications de dégâts ont été commencées.",
            "it-IT": "Inizia a modificare quanti danni uno o più Ricevitori subiranno da uno o più Attaccanti. Un riferimento a questa modifica dei danni si può ottenere dal Valore Last Damage Modification ID. Quest'Azione fallirà se vengono avviate troppe modifiche dei danni.",
            "ja-JP": "1人または複数のレシーバーが1人または複数のダメージャーから受けるダメージを変更し始める。このダメージ変更には、「最新のダメージ変更ID」の値が参照される。開始されたダメージ変更が多すぎると、このアクションは実行できない",
            "ko-KR": "Damager가 Receiver에게 주는 피해를 수정하기 시작합니다. 이 Damage Modification을 참조하려면 Last Damage Modification ID 값을 사용하십시오. 시작된 Damage Modification이 너무 많은 경우 이 액션은 실패할 수 있습니다.",
            "pl-PL": "Zaczyna modyfikować to ile obrażeń otrzyma jeden lub więcej ranionych od jednego lub więcej raniących. Odniesienie do tej modyfikacji obrażeń można pobrać z wartości „Last Damage Modification ID” Identyfikator ostatniej modyfikacji obrażeń. To działanie nie powiedzie się jeśli uruchomiono zbyt dużo modyfikacji obrażeń.",
            "pt-BR": "Começa a modificar a quantidade de dano que um ou mais Receptores receberão de um ou mais Danificadores. Uma referência para esta modificação de dano pode ser obtida com o Valor da ID de Modificação de Dano Mais Recente. Não será possível realizar esta Ação se tiverem sido criadas modificações de dano excessivas.",
            "ru-RU": "Запускает изменение урона который будут получать игроки из списка получающих урон [Receivers] при атаках одного или нескольких игроков из списка наносящих урон [Damagers]. Ссылку на это изменение урона можно получить вызовом значения идентификатора последнего изменения урона [Last Damage Modification ID]. Если запущено слишком много экземпляров изменения урона это действие не будет работать.",
            "zh-CN": "开始调整一名或多名受伤害者从一个或多个伤害者受到的伤害。如果想指定此伤害调整，可以使用“上一个伤害调整ID“的值。如果已经开始了太多的伤害调整，此动作可能会失败。"
        }
    },
    "_&startDoT": {
        "description": "Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference to this dot, use the last damage over time id value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "One or more players who will receive the damage over time.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DAMAGER",
                "description": "The player who will receive credit for the damage. A damager of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            },
            {
                "name": "DURATION",
                "description": "The duration of the damage over time in seconds. To have a dot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "DAMAGE PER SECOND",
                "description": "The damage per second for the damage over time.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B9C5",
        "return": "void",
        "en-US": "Start Damage Over Time",
        "es-MX": "Comenzar daño con el tiempo",
        "fr-FR": "Infliger des dégâts sur la durée",
        "ja-JP": "継続ダメージを開始",
        "pt-BR": "Começar Dano ao Longo do Tempo",
        "zh-CN": "开始持续伤害",
        "descriptionLocalized": {
            "guid": "00000000BD0F",
            "en-US": "Starts an instance of Damage Over Time. This DOT will persist for the specified Duration or until stopped by script. To obtain a reference to this DOT use the Last Damage Over Time ID Value.",
            "de-DE": "Beginnt eine Instanz von regelmäßigem Schaden. Dieser regelmäßige Schaden besteht für die festgelegte Dauer oder bis er per Skript beendet wird. Zum Abrufen einer Referenz zu diesem regelmäßigen Schaden wird der Wert [Last Damage Over Time ID] verwendet.",
            "es-ES": "Inicia una instancia de «Damage Over Time». Esta persistirá con la duración especificada o hasta que la detenga un script. Para obtener una referencia a este «Damage Over Time» utiliza el valor de «Last Damage Over Time ID».",
            "es-MX": "Comienza una instancia de daño con el tiempo. Este DCT continuará durante el tiempo especificado o hasta que se detenga por una secuencia de comandos. Para obtener una referencia a este DCT utiliza el valor de la ID de daño con el tiempo anterior.",
            "fr-FR": "Lance une instance de dégâts sur la durée. Ces dégâts persistent pendant la durée spécifiée ou jusqu’à leur arrêt par script. Pour obtenir une référence à ces dégâts sur la durée utilisez la valeur « Dernier identifiant de dégâts sur la durée ».",
            "it-IT": "Avvia un'istanza di Danni Periodici. Questi DP proseguiranno per la Durata specificata o finché non verranno interrotti dallo script. Per ottenere un riferimento a questi DP usa il Valore Last Damage Over Time ID.",
            "ja-JP": "継続ダメージのインスタンスを開始する。この継続ダメージは指定時間が経過するまで、またはスクリプトで停止させるまで持続するこの継続ダメージへの参照を取得するには、「最新の継続ダメージID」の値を使用する",
            "ko-KR": "Damage Over Time DOT 인스턴스를 시작합니다. 이 DOT는 지정된 지속 시간 동안 또는 스크립트에 의해 중지될 때까지 유지됩니다. 이 Damage Over Time에 대한 참조를 얻으려면 Last Damage Over Time ID 값을 사용하십시오.",
            "pl-PL": "Uruchamia instancję „Damage Over Time” Obrażenia z upływem czasu. DOT będzie się utrzymywać przez określony czas trwania lub do zatrzymania skryptu. Aby pozyskać odniesienie do tego DOT użyj wartości „Last Damage Over Time ID” Identyfikator ostatnich obrażeń z upływem czasu.",
            "pt-BR": "Inicia uma instância de Dano ao Longo do Tempo. Esse DLT persistirá pela Duração especificada ou até ser interrompido por script. Para obter uma referência a esse DLT use o Valor da ID de Dano ao Longo do Tempo Mais Recente.",
            "ru-RU": "Запускает экземпляр периодического урона [Damage Over Time]. Этот экземпляр будет существовать в течение указанного времени или пока его не остановит скрипт. Для получения ссылки на этот экземпляр используйте значение [Last Damage Over Time ID].",
            "zh-CN": "开始一个持续伤害副本。此持续伤害会持续一段指定长度的时间，或直到被程序中止。如果想指定此持续伤害，可以使用”上一个持续伤害ID“的返还值。"
        }
    },
    "_&startFacing": {
        "description": "Starts turning one or more players to face the specified direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will start turning.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the player or players will eventually face. This value is normalized internally.",
                "type": "Direction",
                "default": "VECTOR"
            },
            {
                "name": "TURN RATE",
                "description": "The turn rate in degrees per second.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "Relativity",
                "default": "TO WORLD"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "FacingReeval",
                "default": "DIRECTION AND TURN RATE"
            }
        ],
        "guid": "00000000BB20",
        "return": "void",
        "en-US": "Start Facing",
        "es-MX": "Comenzar orientación",
        "fr-FR": "Regarder vers",
        "ja-JP": "向き変更を開始",
        "pt-BR": "Começar a Encarar",
        "zh-CN": "开始朝向",
        "descriptionLocalized": {
            "guid": "00000000BD81",
            "en-US": "Starts turning one or more Players to face the specified Direction.",
            "de-DE": "Beginnt einen oder mehrere Spieler in die festgelegte Richtung zu drehen.",
            "es-ES": "Empieza a girar a uno o más jugadores para que estén orientados en la dirección especificada.",
            "es-MX": "Comienza a girar a uno o más jugadores para que estén orientados hacia la dirección especificada.",
            "fr-FR": "Commence à faire pivoter un ou plusieurs joueurs afin qu’ils fassent face à la direction spécifiée.",
            "it-IT": "Inizia a ruotare uno o più Giocatori verso la Direzione specificata.",
            "ja-JP": "1人または複数のプレイヤーを特定の方向に向ける",
            "ko-KR": "플레이어를 지정된 방향을 향해 회전시킵니다.",
            "pl-PL": "Zaczyna obracać jednego lub więcej graczy aby byli zwróceni w określonym kierunku.",
            "pt-BR": "Começa a girar um ou mais Jogadores para a Direção especificada.",
            "ru-RU": "Начинает поворачивать одного или нескольких игроков чтобы они смотрели в указанном направлении.",
            "zh-CN": "开始强制一名或多名玩家转向面对指定的方向。"
        }
    },
    "_&startForcingOutlineFor": {
        "description": "Starts forcing the visibility and color of the outlines of the specified viewed player or players from the perspective of one or more viewing players.",
        "args": [
            {
                "name": "Viewed Players",
                "description": "The player or players who will have their outline modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Viewing Players",
                "description": "The viewing player or players for whom the viewed player's outline will be modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "All Players"
            },
            {
                "name": "Visible",
                "description": "Whether or not the specified player outlines should be visible.",
                "type": "bool",
                "default": "true"
            },
            {
                "name": "Color",
                "description": "The color of the specified player outlines, if they are visible.",
                "type": "Color",
                "default": "White"
            },
            {
                "name": "Visibility",
                "description": "The visibility type of the specified player outlines, if they are visible.",
                "type": "OutlineVisibility",
                "default": "DEFAULT"
            }
        ],
        "return": "void",
        "guid": "0000000112EC",
        "en-US": "Start Forcing Player Outlines",
        "es-MX": "Comenzar a forzar el contorno del jugador",
        "fr-FR": "Forcer le contour des joueurs",
        "ja-JP": "プレイヤー・アウトラインの強制を開始",
        "pt-BR": "Começar a Forçar Contornos de Jogador",
        "zh-CN": "开始强制设置玩家轮廓",
        "descriptionLocalized": {
            "en-US": "Starts forcing the visibility and color of the outlines of the specified viewed player or players from the perspective of one or more viewing players.",
            "guid": "<unknown guid>"
        }
    },
    "_&startForcingPosition": {
        "description": "Starts forcing a player to be in a given position. If reevaluation is enabled, then the position is evaluated every frame, allowing the player to be moved around over time.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position will be forced. (The reevaluation option does not apply to this value.)",
                "type": "Player",
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position the player will occupy. If reevaluation is enabled, this value can be used to move the player around over time.",
                "type": "Position",
                "canReplace0ByNull": true,
                "default": "VECTOR"
            },
            {
                "name": "REEVALUATE",
                "description": "If this value is true, then the position will be reevaluated and applied to the player every frame. If this value is false, then the posiiton is only evaluated once when the action begins.",
                "type": "bool",
                "default": "TRUE"
            }
        ],
        "return": "void",
        "guid": "000000010E85",
        "en-US": "Start Forcing Player Position",
        "es-MX": "Comenzar a forzar la posición del jugador",
        "fr-FR": "Forcer la position du joueur",
        "ja-JP": "プレイヤーの位置強制を開始",
        "pt-BR": "Começar a Forçar Posição do Jogador",
        "zh-CN": "开始强制设置玩家位置",
        "descriptionLocalized": {
            "guid": "000000010E86",
            "en-US": "Starts forcing a Player to be in a given position. If Reevaluation is enabled then the Position is evaluated every frame allowing the Player to be moved around over time.",
            "de-DE": "Beginnt einen Spieler zu zwingen sich an einer bestimmten Position aufzuhalten. Wenn [Reevaluation] aktiv ist wird die Position in jedem Frame bewertet wodurch der Spieler nach und nach fortbewegt werden kann.",
            "es-ES": "Empieza a forzar a un jugador a ocupar una posición determinada. Si la revaluación está habilitada la posición se evalúa con cada fotograma lo que permite mover al jugador con el tiempo.",
            "es-MX": "Comienza a forzar a un jugador para que esté en cierta posición. Si la reevaluación está activada la posición se evalúa en cada cuadro lo que permite mover al jugador a través del tiempo.",
            "fr-FR": "Force un joueur à être dans une position donnée. Si « Réévaluation » est activée alors la position est évaluée à chaque image permettant au joueur d’être déplacé au fil du temps.",
            "it-IT": "Inizia a forzare un Giocatore a raggiungere una determinata posizione. Se Rivalutazione è attivata la Posizione viene valutata a ogni frame permettendo di spostare il Giocatore nel corso del tempo.",
            "ja-JP": "プレイヤーを指定の位置に強制する。再評価が有効になっている場合、毎フレーム位置が評価され、時間経過とともにプレイヤーを移動させることができる",
            "ko-KR": "플레이어가 지정된 위치에 있도록 강제합니다. Reevaluation이 활성화되면 Position을 매 프레임마다 평가하여 플레이어를 그동안 이동시킬 수 있습니다.",
            "pl-PL": "Zaczyna wymuszać u gracza daną pozycję. Jeżeli opcja „Reevaluation” Ponowne oszacowanie jest włączona wówczas „Position” Pozycja jest szacowana w każdej klatce co pozwala na przemieszczanie gracza z upływem czasu.",
            "pt-BR": "Começa a forçar o Jogador a ficar em uma posição selecionada. Se a Reavaliação for ativada a Posição será avaliada a cada quadro permitindo que o jogador seja movido ao longo do tempo.",
            "ru-RU": "Принуждает игрока занять определенную позицию. При включенном пересчете координат позиция игрока проверяется раз в кадр что позволяет с течением времени перемещать игрока.",
            "zh-CN": "开始强制一名玩家停留在指定位置。如果启动了“重新赋值”，那么每一帧都会重新为“位置”赋值，让玩家进行强制移动。"
        }
    },
    "_&startForcingHero": {
        "description": "Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the stop forcing player to be hero action is executed.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will be forced to be a specific hero.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HERO",
                "description": "The hero that the player or players will be forced to be.",
                "type": "Hero",
                "default": "HERO"
            }
        ],
        "guid": "00000000ABFB",
        "return": "void",
        "en-US": "Start Forcing Player To Be Hero",
        "es-MX": "Comenzar a forzar a un jugador a usar un héroe",
        "fr-FR": "Forcer un héros",
        "ja-JP": "プレイヤーへのヒーロー強制を開始",
        "pt-BR": "Começar a Forçar Jogador a Ser o Herói",
        "zh-CN": "开始强制玩家选择英雄",
        "descriptionLocalized": {
            "guid": "00000000BC8E",
            "en-US": "Starts forcing one or more Players to be a specific Hero and if necessary respawns them immediately in their current location. This will be the only Hero available to the Player or Players until the Stop Forcing Player To Be Hero Action is executed.",
            "de-DE": "Beginnt einen oder mehrere Spieler zu zwingen einen bestimmten Helden zu spielen und belebt sie bei Bedarf sofort an ihrem aktuellen Standort wieder. Dies wird der einzige Held sein der dem Spieler oder den Spielern zur Verfügung steht bis die Aktion [Stop Forcing Player To Be Hero] ausgeführt wird.",
            "es-ES": "Empieza a forzar a uno o más jugadores a ser un héroe concreto y si es necesario hace que reaparezcan de inmediato en la ubicación actual. Este será el único héroe disponible para el jugador o los jugadores hasta que se ejecute la acción «Stop Forcing Player To Be Hero».",
            "es-MX": "Comienza a forzar a uno o más jugadores a utilizar un héroe determinado y de ser necesario los hace reaparecer en su ubicación actual. Este será el único héroe disponible para el jugador o los jugadores hasta que se ejecute la acción Dejar de forzar a un jugador a usar un héroe.",
            "fr-FR": "Commence à forcer un ou plusieurs joueurs à incarner un héros spécifique et si nécessaire les fait immédiatement réapparaître à leur emplacement actuel. Ce héros sera le seul disponible pour le ou les joueurs jusqu’à ce que l’action « Arrêter de forcer un héros » soit exécutée.",
            "it-IT": "Inizia a forzare uno o più Giocatori a utilizzare un Eroe specifico e se necessario li rigenera immediatamente nella loro posizione attuale. Questo sarà l'unico Eroe disponibile al Giocatore o ai Giocatori fino all'esecuzione dell'Azione Stop Forcing Player To Be Hero.",
            "ja-JP": "1人または複数のプレイヤーに特定のヒーローでのプレイを強制し、必要なら現在の位置に即座にリスポーンさせる。「プレイヤーへのヒーロー強制を停止」アクションが実行されるまで、プレイヤーはこのヒーローしか使えなくなる",
            "ko-KR": "플레이어를 대상으로 지정된 영웅을 강제 선택하도록 하며 필요 시 현재 위치에 즉시 부활시킵니다. 이 영웅은 Stop Forcing Player To Be Hero 액션이 실행되기 전까지 해당 플레이어가 유일하게 사용할 수 있는 영웅입니다.",
            "pl-PL": "Zaczyna wymuszać bohatera u jednego lub więcej graczy i – jeśli to konieczne – ożywia ich natychmiast w bieżącej lokalizacji. Będzie to jedyny bohater dostępny dla gracza lub graczy aż do uruchomienia działania „Stop Forcing Player To Be Hero” Zatrzymaj wymuszanie gry bohaterem na graczu.",
            "pt-BR": "Começa a forçar um ou mais Jogadores a usarem um Herói específico e se necessário faz com que ressurjam imediatamente em seus locais atuais. O Herói será o único disponível para os Jogadores até que a Ação Parar de Forçar Jogador a Ser o Herói seja executada.",
            "ru-RU": "Включает принудительную игру за указанного героя для одного или нескольких игроков. При необходимости игроки мгновенно возрождаются там где находятся. Игрокам будет доступен только этот герой пока не будет выполнено действие [Stop Forcing Player To Be Hero].",
            "zh-CN": "开始强制一名或多名玩家使用指定的英雄，如有必要，使这些玩家立即在当前位置重生。这名或这些玩家只能使用指定的英雄，直到执行”停止强制玩家选择英雄“动作为止。"
        }
    },
    "startForcingSpawn": {
        "description": "Forces a team to spawn in a particular spawn room, regardless of the spawn room normally used by the game mode. This action only has an effect in assault, hybrid, and payload maps.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose spawn room will be forced.",
                "type": "Team",
                "default": "TEAM"
            },
            {
                "name": "ROOM",
                "description": "The number of the spawn room to be forced. 0 is the first spawn room, 1 the second, and 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B573",
        "return": "void",
        "en-US": "Start Forcing Spawn Room",
        "es-MX": "Comenzar a forzar cuarto de reaparición",
        "fr-FR": "Forcer une salle d’apparition",
        "ja-JP": "リスポーンエリアの強制を開始",
        "pt-BR": "Começar a Forçar Sala de Ressurgimento",
        "zh-CN": "开始强制重生室",
        "descriptionLocalized": {
            "guid": "00000000BCA0",
            "en-US": "Forces a Team to spawn in a particular spawn room regardless of the spawn room normally used by the game mode. This Action only has an effect in Assault Hybrid and Payload maps.",
            "de-DE": "Zwingt ein Team in einem bestimmten Startbereich zu starten unabhängig von dem Startbereich der normalerweise durch den Spielmodus verwendet wird. Diese Aktion ist nur auf Angriffs- Hybrid- und Eskortekarten wirksam.",
            "es-ES": "Obliga a un equipo a aparecer en una sala de inicio concreta independientemente de la que utilice normalmente el modo de juego. Esta acción solo surte efecto en mapas de asalto híbridos y de carga.",
            "es-MX": "Obliga a un equipo a reaparecer en un cuarto de reaparición determinado independientemente del cuarto de reaparición que se utiliza normalmente en el modo de juego. Esta acción solo tiene efecto en los mapas híbridos de asalto y de carga.",
            "fr-FR": "Force une équipe à apparaître à une salle d’apparition spécifique quelle que soit la salle d’apparition habituelle pour ce mode de jeu. Cette action n’a d’effet que sur les cartes de type Attaque Hybride et Convoi.",
            "it-IT": "Forza la generazione di una Squadra in una specifica area di partenza a prescindere dall'area di partenza normalmente utilizzata dalla modalità di gioco. Questa Azione ha effetto solamente nelle mappe di conquista ibride e trasporto.",
            "ja-JP": "そのゲーム・モードで通常用いるリスポーンエリアを無視して、チームを強制的に指定のリスポーンエリアでスポーンさせるこのアクションはアサルト、ハイブリッド、ペイロードのマップにのみ適用される",
            "ko-KR": "지정된 게임 모드에서 원래 사용되는 전투준비실인지와는 관계없이 팀을 지정된 전투준비실에 강제로 생성합니다. 이 액션은 점령 혼합 호위 전장에서만 효과가 있습니다.",
            "pl-PL": "Zmusza drużynę do pojawienia się w konkretnym pomieszczeniu startowym bez względu na to które normalnie wykorzystywane jest w grze. To działanie dotyczy wyłącznie map typu Szturm Hybryda i Ładunek.",
            "pt-BR": "Força uma equipe a ressurgir em uma sala de ressurgimento particular seja qual for a sala de ressurgimento normalmente usada pelo modo de jogo. Essa Ação só tem efeito em mapas de Ataque Híbridos e de Carga.",
            "ru-RU": "Принудительно включает возрождение команды в конкретной стартовой комнате независимо от комнаты которая обычно используется в качестве стартовой в данном режиме игры. Действие работает только на полях боя для режимов нападения сопровождения груза и гибридного режима.",
            "zh-CN": "强制一支队伍在指定的重生室重生，不管在游戏模式中应当使用哪个重生室。此动作只会在攻防作战、攻击护送和运载目标地图上生效。"
        }
    },
    "_&startForcingThrottle": {
        "description": "Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement will be forced or limited.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "MIN FORWARD",
                "description": "Sets the minimum run forward amount. 0 allows the player or players to stop while 1 forces full forward movement.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "MAX FORWARD",
                "description": "Sets the maximum run forward amount. 0 prevents the player or players from moving forward while 1 allows full forward movement.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "MIN BACKWARD",
                "description": "Sets the minimum run backward amount. 0 allows the player or players to stop while 1 forces full backward movement.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "MAX BACKWARD",
                "description": "Sets the maximum run backward amount. 0 prevents the player or players from moving backward while 1 allows full backward movement.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "MIN SIDEWAYS",
                "description": "Sets the minimum run sideways amount. 0 allows the player or players to stop while 1 forces full sideways movement.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "MAX SIDEWAYS",
                "description": "Sets the maximum run sideways amount. 0 prevents the player or players from moving SIDEWAYS while 1 allows full sideways movement.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            }
        ],
        "guid": "00000000BB0F",
        "return": "void",
        "en-US": "Start Forcing Throttle",
        "es-MX": "Comenzar a forzar la aceleración",
        "fr-FR": "Forcer l’accélération",
        "ja-JP": "強制スロットル開始",
        "pt-BR": "Começar a Forçar Aceleração",
        "zh-CN": "开始限制阈值",
        "descriptionLocalized": {
            "guid": "00000000BD6E",
            "en-US": "Defines minimum and maximum movement input values for one or more Players possibly forcing or preventing movement.",
            "de-DE": "Definiert Mindest- und Höchstwerte für die Bewegungseingabe für einen oder mehrere Spieler wobei ggf. Bewegung erzwungen oder verhindert wird.",
            "es-ES": "Define los valores de entrada de movimiento mínimos y máximos de uno o más jugadores lo cual puede forzar o impedir el movimiento.",
            "es-MX": "Define los valores mínimos y máximos de entrada de movimiento de uno o más jugadores con la posibilidad de obligar o impedir el movimiento",
            "fr-FR": "Définit les valeurs de mouvement minimum et maximum pour un ou plusieurs joueurs forçant ou empêchant potentiellement le mouvement.",
            "it-IT": "Definisce i valori di input minimi e massimi di movimento per uno o più Giocatori eventualmente forzandone o impedendone i movimenti.",
            "ja-JP": "1人または複数のプレイヤーの移動入力の最小値と最大値を設定し、移動を強制または阻止する",
            "ko-KR": "플레이어의 최대 및 최소 이동 수치를 정의합니다. 강제 이동되거나 이동이 제한될 수 있습니다.",
            "pl-PL": "Określa minimalne i maksymalne wartości danych wejściowych ruchu dla jednego lub więcej graczy potencjalnie wymuszając lub wstrzymując ruch.",
            "pt-BR": "Define os valores mínimo e máximo de entrada de movimento para um ou mais Jogadores possivelmente forçando ou impedindo a movimentação.",
            "ru-RU": "Определяет минимальный и максимальный аргументы передвижения одного или нескольких игроков. Позволяет принуждать к движению или препятствовать ему.",
            "zh-CN": "定义玩家移动输入的最大值和最小值，可能会强迫或阻止玩家移动。"
        }
    },
    "_&startGrantingAssistFor": {
        "description": "Starts granting assist credit toward to one or more assisters when one or more targets are eliminated. A reference to this assist modification can be obtained from the getLastAssistId() value. This action will fail if too many assists have been started.",
        "args": [
            {
                "name": "Assisters",
                "description": "The target Player or Players who will receive assist credit.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Targets",
                "description": "The Player or Players whose eliminations will grant assist credit to the Assisters. If the Target or Targets are allied to the Assister, this will be a defensive assist. Otherwise, this will be an offensive assist.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "Reevaluation",
                "description": "Specifies which of this Action's Inputs will be continously reevaluated. This Action will keep asking for and using new Values from reevaluated Inputs.",
                "type": "AssistReeval",
                "default": "Assisters and Targets"
            }
        ],
        "return": "void",
        "guid": "000000012200",
        "en-US": "Start Assist",
        "es-MX": "Comenzar asistencia",
        "fr-FR": "Lancer le soutien",
        "ja-JP": "アシストを開始",
        "pt-BR": "Iniciar Assistência",
        "zh-CN": "开始助攻",
        "descriptionLocalized": {
            "en-US": "Starts granting assist credit toward to one or more assisters when one or more targets are eliminated. A reference to this assist modification can be obtained from the getLastAssistId() value. This action will fail if too many assists have been started.",
            "guid": "<unknown guid>"
        }
    },
    "_&startHoT": {
        "description": "Starts an instance of heal over time. This hot will persist for the specified duration or until stopped by script. To obtain a reference to this hot, use the last heal over time id value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "One or more players who will receive the heal over time.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALER",
                "description": "The player who will receive credit for the healing. A healer of null indicates no player will receive credit.",
                "type": "Player",
                "default": "NULL"
            },
            {
                "name": "DURATION",
                "description": "The duration of the heal over time in seconds. To have a hot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "HEALING PER SECOND",
                "description": "The healing per second for the heal over time.",
                "type": "unsigned float",
                "default": "NUMBER"
            }
        ],
        "guid": "00000000B9C2",
        "return": "void",
        "en-US": "Start Heal Over Time",
        "es-MX": "Comenzar sanación con el tiempo",
        "fr-FR": "Prodiguer des soins sur la durée",
        "ja-JP": "継続回復を開始",
        "pt-BR": "Começar Cura ao Longo do Tempo",
        "zh-CN": "开始持续治疗",
        "descriptionLocalized": {
            "guid": "00000000BD1C",
            "en-US": "Starts an instance of Heal Over Time. This HOT will persist for the specified Duration or until stopped by script. To obtain a reference to this HOT use the Last Heal Over Time ID Value.",
            "de-DE": "Beginnt eine Instanz von Heilung über Zeit. Diese Heilung über Zeit besteht für die festgelegte Dauer oder bis sie per Skript beendet wird. Zum Abrufen einer Referenz zu dieser Heilung über Zeit wird der Wert [Last Heal Over Time ID] verwendet.",
            "es-ES": "Inicia una instancia de «Heal Over Time». Esta persistirá con la duración especificada o hasta que la detenga un script. Para obtener una referencia a este «Heal Over Time» utiliza el valor de «Last Heal Over Time ID».",
            "es-MX": "Comienza una instancia de sanación con el tiempo. Esta SCT continuará durante el tiempo especificado o hasta que se detenga por una secuencia de comandos. Para obtener una referencia a esta SCT utiliza el valor de la ID de sanación con el tiempo anterior.",
            "fr-FR": "Lance une instance de soins sur la durée. Ces soins persistent pendant la durée spécifiée ou jusqu’à leur arrêt par un script. Pour obtenir une référence à ces soins utilisez la valeur « Dernier identifiant de soins sur la durée ».",
            "it-IT": "Avvia un'istanza di Cure Periodiche. Queste CP proseguiranno per la Durata specificata o finché non verranno interrotte dallo script. Per ottenere un riferimento a queste CP usa il Valore Last Heal Over Time ID.",
            "ja-JP": "継続回復のインスタンスを開始する。この継続回復は指定された時間が経過するまで、またはスクリプトで停止させるまで持続する。この継続回復への参照を取得するには、「最新の継続回復ID」の値を使用する",
            "ko-KR": "Heal Over Time 인스턴스를 시작합니다. 이 Heal Over Time은 지정된 지속 시간이 경과하거나 스크립트에 의해 중지되기 전까지 유지됩니다. 이 Heal Over Time을 참조하려면 Last Heal Over Time ID 값을 사용하십시오.",
            "pl-PL": "Uruchamia instancję „Heal Over Time” Leczenie z upływem czasu. HOT będzie się utrzymywać przez określony czas trwania lub do zatrzymania skryptu. Aby pozyskać odniesienie do tego HOT użyj wartości „Last Heal Over Time ID” Identyfikator ostatniego leczenia z upływem czasu.",
            "pt-BR": "Inicia uma instância de Cura ao Longo do Tempo. Essa CLT persistirá pela Duração especificada ou até ser interrompida por script. Para obter uma referência a essa CLT use o Valor da ID de Cura ao Longo do Tempo Mais Recente.",
            "ru-RU": "Запускает экземпляр периодического исцеления [Heal Over Time]. Этот экземпляр будет существовать в течение указанного времени или пока его не остановит скрипт. Для получения ссылки на этот экземпляр используйте значение [Last Heal Over Time ID].",
            "zh-CN": "开始一个持续治疗副本。此持续治疗会持续一段指定长度的时间，或直到被程序中止。如果想指定此持续治疗，可以使用”上一个持续治疗ID“的返还值。"
        }
    },
    "startHealingModification": {
        "description": "Starts modifying how much healing one or more receivers will receive from one or more healers. A reference to this healing modification can be obtained from the last healing modification id value. This action will fail if too many healing modifications have been started.",
        "args": [
            {
                "name": "RECEIVERS",
                "description": "The player or players whose incoming healing will be modified (when healed by the healers).",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "HEALERS",
                "description": "The player or players whose outgoing healing will be modified (when healing the receivers).",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "ALL PLAYERS"
            },
            {
                "name": "HEALING PERCENT",
                "description": "The percentage of healing that will apply to receivers when healed by healers.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.",
                "type": "HealingReeval",
                "default": "RECEIVERS, HEALERS, AND HEALING PERCENT"
            }
        ],
        "return": "void",
        "guid": "00000000FD40",
        "en-US": "Start Healing Modification",
        "es-MX": "Comenzar modificación de sanación",
        "fr-FR": "Lancer la modification des soins",
        "ja-JP": "回復変更を開始",
        "pt-BR": "Começar modificação de cura",
        "zh-CN": "开始治疗调整",
        "descriptionLocalized": {
            "guid": "00000000FD42",
            "en-US": "Starts modifying how much healing one or more Receivers will receive from one or more Healers. A reference to this healing modification can be obtained from the Last Healing Modification ID Value. This Action will fail if too many healing modifications have been started.",
            "de-DE": "Beginnt die Höhe der Heilung zu modifizieren den ein oder mehrere Heilungsempfänger durch einen oder mehrere Heiler erhalten werden. Eine Referenz zu dieser Heilungsmodifikation kann durch den Wert [Last Healing Modification ID] erhalten werden. Diese Aktion schlägt fehl wenn zu viele Heilungsmodifikationen gestartet wurden.",
            "es-ES": "Comienza a modificar cuánta sanación recibirán uno o más receptores de uno o más sanadores. Se puede obtener una referencia a esta modificación de sanación a partir del valor de «Last Healing Modification ID». Esta acción fallará si se han iniciado demasiadas modificaciones de sanación.",
            "es-MX": "Comienza a modificar la cantidad de sanación que uno o más receptores recibirán de uno o más sanadores. Una referencia a esta modificación de sanación se puede obtener del valor de la ID de modificación de sanación anterior. Esta acción no podrá realizarse si se han iniciado demasiadas modificaciones de sanación.",
            "fr-FR": "Commence à modifier la quantité de soins reçus par un ou plusieurs récepteurs de la part d’un ou de plusieurs soigneurs. Une référence de cette modification des soins peut être obtenue par la valeur « Dernier identifiant de modification de soins ». Cette action échouera si trop de modifications de soins ont été commencées.",
            "it-IT": "Inizia a modificare quante cure uno o più Ricevitori riceveranno da uno o più Guaritori. Un riferimento a questa modifica delle cure si può ottenere dal Valore Last Healing Modification ID. Quest'Azione fallirà se vengono avviate troppe modifiche delle cure.",
            "ja-JP": "1人または複数のレシーバーが1人または複数のヒーラーから受ける回復量の変更を始める。この回復変更には、「最新回復変更ID」の値が参照される。開始された回復変更が多すぎると、このアクションは実行できない",
            "ko-KR": "Receiver가 Healer에게 받는 치유량을 수정하기 시작합니다. 이 Healing Modification을 참조하려면 Last Healing Modification ID 값을 이용하면 됩니다. 시작된 Healing Modification이 너무 많은 경우 이 액션은 실패할 수 있습니다.",
            "pl-PL": "Zaczyna modyfikować to ile leczenia otrzyma jeden lub więcej odbiorców od jednego lub więcej leczących. Odniesienie do tej modyfikacji leczenia można pobrać z wartości „Last Healing Modification ID” Identyfikator ostatniej modyfikacji leczenia. To działanie nie powiedzie się jeśli uruchomiono zbyt dużo modyfikacji leczenia.",
            "pt-BR": "Começa a modificar a quantidade de cura que um ou mais Receptores receberão de um ou mais Curandeiros. Uma referência para essa modificação de cura pode ser obtida com o Valor da ID da Última Modificação de Cura. Não será possível realizar esta Ação se forem criadas modificações de cura excessivas.",
            "ru-RU": "Начинает модифицировать объем исцеления для одного или нескольких игроков получающих исцеление от одного или нескольких источников. Ссылку на эту модификацию исцеления можно получить из значения [Last Healing Modification ID]. Это действие не сможет быть выполнено если запущено слишком много модификаций исцеления.",
            "zh-CN": "开始调整一名或多名受治疗者从一个或多个治疗者受到的治疗。如果想指定此治疗调整，可以使用“上一个治疗调整ID“的值。如果已经开始了太多的治疗调整，此动作可能会失败。"
        }
    },
    "_&startForcingButton": {
        "description": "Forces one or more players to hold a button virtually until stopped by the stop holding button action.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who are holding a button virtually.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is being held virtually.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            }
        ],
        "guid": "00000000B9D3",
        "return": "void",
        "en-US": "Start Holding Button",
        "es-MX": "Comenzar a mantener el botón presionado",
        "fr-FR": "Maintenir un bouton enfoncé",
        "ja-JP": "ボタン長押し開始",
        "pt-BR": "Começar a Segurar Botão",
        "zh-CN": "开始按下按钮",
        "descriptionLocalized": {
            "guid": "00000000BD2A",
            "en-US": "Forces one or more Players to hold a button virtually until stopped by the Stop Holding Button Action.",
            "de-DE": "Zwingt einen oder mehrere Spieler eine Taste virtuell zu halten bis dies durch die Aktion [Stop Holding Button] beendet wird.",
            "es-ES": "Fuerza a uno o más jugadores a pulsar un botón virtualmente hasta que los detenga la acción «Stop Holding Button».",
            "es-MX": "Fuerza a uno o más jugadores a mantener presionado un botón virtualmente hasta ser detenidos por la acción Dejar de mantener el botón presionado.",
            "fr-FR": "Force un ou plusieurs joueurs à maintenir virtuellement un bouton enfoncé jusqu’à l’exécution de l’action « Arrêter de maintenir un bouton enfoncé ».",
            "it-IT": "Forza uno o più Giocatori a tenere premuto un tasto virtualmente fino all'interruzione da parte dell'Azione Stop Holding Button.",
            "ja-JP": "1人または複数のプレイヤーに「ボタン長押し解除」アクションが実行されるまで仮想的にボタンを長押しさせる",
            "ko-KR": "Stop Holding Button 액션에 의해 중지되기 전까지 가상으로 버튼 하나를 누르도록 플레이어에게 강제합니다.",
            "pl-PL": "Wymusza u jednego lub więcej graczy wirtualne przytrzymanie przycisku aż do wykonania działania „Stop Holding Button” Zatrzymaj przytrzymanie przycisku.",
            "pt-BR": "Força um ou mais Jogadores a segurar virtualmente um botão até serem interrompidos pela Ação Parar de Segurar Botão.",
            "ru-RU": "Принудительно включает у одного или нескольких игроков виртуальное нажатие кнопки до тех пор пока не будет выполнено действие [Stop Holding Button].",
            "zh-CN": "强制一名或多名玩家按下一个虚拟按钮，直到被“停止按下按钮”动作取消。"
        }
    },
    "startGamemode": {
        "description": "Starts the gamemode. This action doesn't have an effect if the game is already in progress.",
        "args": [],
        "return": "void",
        "en-US": "Start Game Mode",
        "descriptionLocalized": {
            "en-US": "Starts the gamemode. This action doesn't have an effect if the game is already in progress.",
            "guid": "<unknown guid>"
        }
    },
    "_&startModifyingVoicelinePitch": {
        "description": "Modifies the way hero voice lines sound for a player or players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose voice line sound will be modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Pitch Scalar",
                "description": "The amount that the pitch of the voice will be raised (up to 1.5) or lowered (down to 0.5).",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "type": "unsigned float"
            },
            {
                "name": "REEVALUATION",
                "description": "If true, Pitch Scalar is evaluated and updated every frame. If false, Pitch Scalar is evaluated once when the actions executes.",
                "type": "bool",
                "default": "true"
            }
        ],
        "return": "void",
        "guid": "0000000113C1",
        "en-US": "Start Modifying Hero Voice Lines",
        "es-MX": "Iniciar modificación de líneas de voz de héroe",
        "fr-FR": "Modifier les répliques du héros",
        "ja-JP": "ヒーローのボイス・ラインの変更を開始",
        "pt-BR": "Começar a Modificar Falas de Herói",
        "zh-CN": "开始修改英雄语音",
        "descriptionLocalized": {
            "guid": "0000000113C2",
            "en-US": "Modifies the way hero voice lines sound for a Player or Players.",
            "de-DE": "Modifiziert die Art und Weise wie Heldensprüche eines oder mehrerer Spieler klingen.",
            "es-ES": "Modifica el sonido de las frases de héroe de un jugador o varios jugadores.",
            "es-MX": "Modifica la manera en la que se escuchan las líneas de voz de héroe de uno o más jugadores.",
            "fr-FR": "Modifie le timbre de la voix du héros pour un ou plusieurs joueurs.",
            "it-IT": "Modifica il suono delle battute audio degli eroi per un Giocatore o più Giocatori.",
            "ja-JP": "プレイヤーのヒーローのボイス・ラインの聞こえ方を変更する",
            "ko-KR": "플레이어의 영웅 음성 대사 사운드를 변경합니다.",
            "pl-PL": "Modyfikuje brzmienie głosu bohatera gracza lub graczy.",
            "pt-BR": "Modifica a forma como falas de herói soam para um Jogador ou Jogadores.",
            "ru-RU": "Изменяет звучание реплик для игрока или игроков.",
            "zh-CN": "修改玩家的英雄语音声音。"
        }
    },
    "_&startScalingBarriers": {
        "description": "Start modifying the size of barriers for a player or players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose barriers will have their size modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Scale",
                "description": "The multiplier applied to the size of the barriers (0.5 halves the size, 2.0 doubles the size, etc.).",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 1
            },
            {
                "name": "REEVALUATION",
                "description": "If this value is true, then scale will be reevaluated and applied to the player or players every frame. If this value is false, then the scale is only evaluated once when the action begins.",
                "type": "bool",
                "default": "true"
            }
        ],
        "return": "void",
        "guid": "0000000112FC",
        "en-US": "Start Scaling Barriers",
        "es-MX": "Iniciar escala de barreras",
        "fr-FR": "Redimensionner les barrières",
        "ja-JP": "バリアのスケールを開始",
        "pt-BR": "Começar a Escalonar Barreiras",
        "zh-CN": "开始调整障碍大小",
        "descriptionLocalized": {
            "en-US": "Start modifying the size of barriers for a player or players.",
            "guid": "<unknown guid>"
        }
    },
    "_&startScalingSize": {
        "description": "Starts modifying the size of a player or players (including mode, movement collision, hit detection, and certain abilities). Note that large players placed into complex environments will severely impact server load, so consider also applying the Disable Movement Collision With Enviroment action.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose size will be modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Scale",
                "description": "The multiplier applied to the size of the player or players (0.5 halves the size, 2.0 doubles the size, etc.).",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 1
            },
            {
                "name": "REEVALUATION",
                "description": "If this value is true, then scale will be reevaluated and applied to the player or players every frame. If this value is false, then the scale is only evaluated once when the action begins.",
                "type": "bool",
                "default": "true"
            }
        ],
        "return": "void",
        "guid": "0000000112FE",
        "en-US": "Start Scaling Player",
        "es-MX": "Iniciar escala de jugador",
        "fr-FR": "Redimensionner le joueur",
        "ja-JP": "プレイヤーのスケールを開始",
        "pt-BR": "Começar a Escalonar Jogador",
        "zh-CN": "开始调整玩家大小",
        "descriptionLocalized": {
            "en-US": "Starts modifying the size of a player or players (including mode, movement collision, hit detection, and certain abilities). Note that large players placed into complex environments will severely impact server load, so consider also applying the Disable Movement Collision With Enviroment action.",
            "guid": "<unknown guid>"
        }
    },
    "__startRule__": {
        "description": "Begins simultaneous execution of a subroutine rule (which is a rule with a Subroutine event type). Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values (such as Event Player) as the original rule.",
        "args": [
            {
                "name": "SUBROUTINE",
                "description": "Specifies which subroutine to start. If a rule with a subroutine event type specifies the same subroutine, then it will execute. Otherwise, this action is ignored.",
                "type": "Subroutine",
                "default": "Sub0"
            },
            {
                "name": "IF ALREADY EXECUTING",
                "description": "Determines what should happen if the rule specified by the subroutine is already executing on the same player or global entity.",
                "type": "AsyncBehavior",
                "default": "RESTART RULE"
            }
        ],
        "guid": "000000010022",
        "return": "void",
        "en-US": "Start Rule",
        "es-MX": "Comenzar regla",
        "fr-FR": "Lancer la règle",
        "ja-JP": "ルールを開始",
        "pt-BR": "Regra de início",
        "zh-CN": "开始规则",
        "descriptionLocalized": {
            "guid": "000000010023",
            "en-US": "Begins simultaneous execution of a subroutine rule which is a rule with a Subroutine event type. Execution of the original rule continues uninterrupted. The subroutine will have access to the same contextual values such as Event Player as the original rule.",
            "de-DE": "Beginnt mit der gleichzeitigen Ausführung einer Subroutinenregel einer Regel mit dem Eventtyp [Subroutine]. Die Ausführung der ursprünglichen Regel wird nicht unterbrochen. Die Subroutine erhält Zugriff auf die gleichen Kontextwerte wie die ursprüngliche Regel z. B. [Event Player].",
            "es-ES": "Inicia la ejecución simultánea de una regla de subrutina que es una regla con un tipo de evento de subrutina. La ejecución de la regla original continúa sin interrupciones. La subrutina tendrá acceso a los mismos valores contextuales como «Event Player» que la regla original.",
            "es-MX": "Comienza una ejecución simultánea de una regla de subrutina que es una regla con un tipo de evento de subrutina. La ejecución de la regla original continúa sin interrupciones. La subrutina tendrá acceso a los mismos valores contextuales como jugador del evento de la regla original.",
            "fr-FR": "Lance l’exécution simultanée d’une règle de sous-programme c’est-à-dire d’une règle dont l’évènement est de type « sous-programme ». L’exécution de la règle d’origine se poursuit sans interruption. Le sous-programme aura accès aux mêmes valeurs contextuelles telles que le « Joueur exécutant » que la règle d’origine.",
            "it-IT": "Avvia l'esecuzione simultanea di una regola subroutine ossia una regola con un tipo di evento Subroutine. L'esecuzione della regola originale prosegue ininterrotta. La subroutine avrà accesso agli stessi valori contestuali come Event Player della regola originale.",
            "ja-JP": "サブルーチン・ルール（サブルーチン・イベントタイプを持つルール）を同時に実行する。元のルールは、中断されることなく実行され続ける。このサブルーチンは元のルールと同じコンテキスト値（イベント・プレイヤーなど）にアクセスできる",
            "ko-KR": "서브루틴 규칙의 동시 실행을 시작합니다. 원래 규칙의 실행은 중단 없이 계속됩니다. 해당 서브루틴은 원래 규칙과 같이 동일한 컨텍스트 값Event Player 등에 액세스할 수 있습니다.",
            "pl-PL": "Rozpoczyna jednoczesne uruchomienie reguły podprogramowej która jest regułą z typem zdarzenia podprogramowego. Wykonanie oryginalnej reguły jest kontynuowane bez przerwy. Reguła podrzędna będzie miała dostęp do tych samych wartości kontekstowych np. „Event Player” Gracz w zdarzeniu co reguła oryginalna.",
            "pt-BR": "Começa a execução simultânea de uma regra de sub-rotina que é uma regra com um evento do tipo Sub-rotina. A execução da regra original continua sem interrupções. A sub-rotina terá acesso aos mesmos valores contextuais como Jogador do Evento como regra original.",
            "ru-RU": "Начинает одновременное выполнение правила-подпрограммы правила с типом события [Subroutine]. Выполнение изначального правила не прерывается. Подпрограмма будет иметь доступ к тем же контекстным значениям таким как [Event Player] что и основное правило.",
            "zh-CN": "开始同时执行一个子程序规则（事件类型为”子程序“的规则）。原来规则的执行不会被打断。子程序可以使用同样的情景变量（如事件玩家）的原始值。"
        }
    },
    "_&startThrottleInDirection": {
        "description": "Sets or adds to the throttle (directional input control) of a player or players such that they begin moving in a particular direction. Any previous throttle in direction is cancelled.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will be set or added to.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "DIRECTION",
                "description": "The unit direction in which the throttle will be set or added to. This value is normalized internally.",
                "type": "Direction",
                "default": "VECTOR"
            },
            {
                "name": "MAGNITUDE",
                "description": "The amount of throttle (or change to throttle). A value of 1 denotes full throttle.",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE",
                "description": "Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.",
                "type": "Relativity",
                "default": "TO WORLD"
            },
            {
                "name": "BEHAVIOR",
                "description": "Specifies whether preexisting throttle is replaced or added to.",
                "type": "Throttle",
                "default": "REPLACE EXISTING THROTTLE"
            },
            {
                "name": "REEVALUATION",
                "description": "Specifies which of this action's inputs will be continuously reevaluated. This aciton will keep asking for and using new values from reevaluated inputs.",
                "type": "ThrottleReeval",
                "default": "DIRECTION AND MAGNITUDE"
            }
        ],
        "guid": "00000000CEA4",
        "return": "void",
        "en-US": "Start Throttle In Direction",
        "es-MX": "Comenzar aceleración en dirección",
        "fr-FR": "Commencer l’accélération directionnelle",
        "ja-JP": "指定方向にスロットル開始",
        "pt-BR": "Iniciar Aceleração na Direção",
        "zh-CN": "开始定向阈值",
        "descriptionLocalized": {
            "guid": "00000000CEA5",
            "en-US": "Sets or adds to the throttle directional input control of a Player or Players such that they begin moving in a particular direction. Any previous Throttle in Direction is cancelled.",
            "de-DE": "Legt den Throttle die Richtungseingabesteuerung eines oder mehrerer Spieler fest oder verändert ihn. Dadurch bewegen sie sich in eine bestimmte Richtung. Alle vorherigen [Throttle In Direction]-Aktionen werden abgebrochen.",
            "es-ES": "Establece o complementa la aceleración control de impulso direccional de un jugador o jugadores de modo que empiecen a moverse en una dirección concreta. Se cancela cualquier acción anterior de «Throttle in Direction».",
            "es-MX": "Establece o agrega la aceleración el control de la entrada direccional de uno o más jugadores para que comiencen a moverse hacia una dirección especificada. Cancela cualquier Aceleración en dirección anterior.",
            "fr-FR": "Définit l’accélération ou lui ajoute une valeur contrôle directionnel par entrée d’un ou de plusieurs joueurs de manière à ce qu’ils commencent à se déplacer dans une direction particulière. Toutes les accélérations directionnelles précédentes sont annulées.",
            "it-IT": "Imposta o aggiunge l'accelerazione controllo di input direzionale di un Giocatore o dei Giocatori in modo da farli spostare in una direzione specifica. Qualsiasi precedente direzione viene annullata.",
            "ja-JP": "特定の方向に動き始めるように、プレイヤーのスロットル（方向入力の操作）に適用または追加する。これ以前の「指定方向にスロットル」はキャンセルされる",
            "ko-KR": "특정 방향으로 움직이기 시작할 때 플레이어의 쓰로틀방향 입력 정보 제어을 설정하거나 추가합니다. 기존의 Throttle in Direction은 취소합니다.",
            "pl-PL": "Ustawia lub zwiększa pęd kierunkowe dane wejściowe sterowania gracza lub graczy tak aby zaczęli poruszać się w danym kierunku. Poprzednie działania „Throttle in Direction” Pęd w kierunku zostają anulowane.",
            "pt-BR": "Define ou soma à aceleração controle de comando direcional de um ou mais Jogadores para que eles possam começar a andar em uma determinada direção. Qualquer Aceleração na Direção anterior será cancelada.",
            "ru-RU": "Задает или корректирует импульс движения игрока или игроков так чтобы они начали двигаться в заданном направлении. Все предыдущие импульсы движения в заданном направлении будут отменены.",
            "zh-CN": "为一名或多名玩家设置或添加阈值（方向性输入控制），对其向指定方向的移动做出限制。取消之前所有的定向阈值。"
        }
    },
    "_&startTransformingThrottle": {
        "description": "Starts transforming (scaling and rotating) the throttle (directional input control) of a player or players. Cancels any existing start transforming throttle behavior.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will be transformed.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "X AXIS SCALAR",
                "description": "The player or players will have their throttle X axis (left to right) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "Y AXIS SCALAR",
                "description": "The player or players will have their throttle Y axis (front to back) multiplied by this value before the throttle is rotated to its new relative direction. This value is evaluated continuously (meaning it updates every frame).",
                "type": "unsigned float",
                "default": "NUMBER"
            },
            {
                "name": "RELATIVE DIRECTION",
                "description": "After the axis scalars are applied, the player or players will have their throttle transformed so that it is relative to this unit direction vector. For example, to make the throttle camera relative, provide the direction that the camera is facing. This value is evaluated continuously (meaning it updates every frame) and normalized internally.",
                "type": "Direction",
                "default": "VECTOR"
            }
        ],
        "guid": "00000000CC26",
        "return": "void",
        "en-US": "Start Transforming Throttle",
        "es-MX": "Comenzar a transformar la aceleración",
        "fr-FR": "Début de modification de l’accélération",
        "ja-JP": "スロットルの変化を開始",
        "pt-BR": "Iniciar Transformação de Aceleração",
        "zh-CN": "开始转换阈值",
        "descriptionLocalized": {
            "guid": "00000000CC31",
            "en-US": "Starts transforming scaling and rotating the throttle directional input control of a Player or Players. Cancels any existing Start Transforming Throttle behavior.",
            "de-DE": "Beginnt den Throttle die Richtungseingabesteuerung eines oder mehrerer Spieler zu transformieren zu skalieren und zu drehen. Beendet das Verhalten [Start Transforming Throttle].",
            "es-ES": "Comienza a transformar en términos de escala y rotación la aceleración el control de impulso direccional de un jugador o jugadores. Cancela cualquier comportamiento «Start Transforming Throttle» existente.",
            "es-MX": "Empieza a transformar escalar y rotar la aceleración el control de la entrada direccional de uno o más jugadores. Cancela cualquier comportamiento Comenzar a transformar la aceleración existente.",
            "fr-FR": "Démarre la modification grandeur et rotation de l’accélération contrôle par entrée directionnelle d’un ou plusieurs joueurs. Annule toute modification d’accélération déjà existante.",
            "it-IT": "Inizia a trasformare scalando e ruotando l'accelerazione controllo di input direzionale di un Giocatore o dei Giocatori. Annulla qualsiasi comportamento Start Transforming Throttle esistente.",
            "ja-JP": "プレイヤーのスロットル（方向入力の制御）の変化（スケールと回転）を開始する。既存の「スロットルの変化を開始」の動作をキャンセルする",
            "ko-KR": "플레이어의 스로틀방향 입력 정보 제어 변환비율 증감 및 회전을 시작합니다. 기존의 Start Transforming Throttle 행동을 취소합니다.",
            "pl-PL": "Zaczyna przekształcanie skalowanie i obracanie pędu dane wejściowe kontroli kierunku gracza lub graczy. Anuluje wszystkie istniejące zachowania „Start Transforming Throttle” Początek przekształcania pędu.",
            "pt-BR": "Inicia a transformação tamanho e giro da aceleração controle de comando direcional dos Jogadores. Cancela qualquer comportamento \"Iniciar Transformação de Aceleração\" já existente.",
            "ru-RU": "Начинает преобразование масштабирование и поворот импульса движения в определенном направлении для одного или нескольких игроков. Отменяет все существующие процедуры связанные с [Start Transforming Throttle].",
            "zh-CN": "开始转换（放大并旋转）一名或多名玩家的阈值（方向输入控制）。取消所有已存在的“开始转换阈值”动作。"
        }
    },
    "_&stopAcceleration": {
        "description": "Stops the acceleration started by the start accelerating action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop accelerating.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BB0C",
        "return": "void",
        "en-US": "Stop Accelerating",
        "es-MX": "Detener la aceleración",
        "fr-FR": "Arrêter l’accélération",
        "ja-JP": "加速の中止",
        "pt-BR": "Parar de Acelerar",
        "zh-CN": "停止加速",
        "descriptionLocalized": {
            "guid": "00000000BD78",
            "en-US": "Stops the acceleration started by the Start Accelerating Action for one or more Players.",
            "de-DE": "Beendet die Beschleunigung die durch die Aktion [Start Accelerating] für einen oder mehrere Spieler begonnen wurde.",
            "es-ES": "Detiene la aceleración iniciada por la acción «Start Accelerating» para uno o más jugadores.",
            "es-MX": "Detiene la aceleración iniciada por la acción Comenzar la aceleración de uno o más jugadores.",
            "fr-FR": "Stoppe l’accélération débutée par l’action « Accélérer » pour un ou plusieurs joueurs.",
            "it-IT": "Ferma l'accelerazione iniziata dall'Azione Start Accelerating per uno o più Giocatori.",
            "ja-JP": "「加速開始」アクションによる1人または複数のプレイヤーの加速を停止する",
            "ko-KR": "플레이어의 Start Accelerating 액션에 의해 시작된 가속을 중지합니다.",
            "pl-PL": "Zatrzymuje przyspieszenie rozpoczęte przez działanie „Start Accelerating” Początek przyspieszania dla jednego lub więcej graczy.",
            "pt-BR": "Interrompe a aceleração iniciada pela Ação Começar a Acelerar para um ou mais Jogadores.",
            "ru-RU": "Прекращает ускорение одного или нескольких игроков начатое действием [Start Accelerating].",
            "zh-CN": "停止“开始加速”动作造成的加速效果。"
        }
    },
    "stopAllAssists": {
        "description": "Stops all assists that were started using the Start Assist Action.",
        "args": [],
        "return": "void",
        "guid": "0000000121FA",
        "en-US": "Stop All Assists",
        "es-MX": "Detener todas las asistencias",
        "fr-FR": "Arrêter tous les soutiens",
        "ja-JP": "すべてのアシストを停止",
        "pt-BR": "Interromper Todas as Assistências",
        "zh-CN": "停止所有助攻",
        "descriptionLocalized": {
            "guid": "0000000121FB",
            "en-US": "Stops all assists that were started using the Start Assist Action.",
            "de-DE": "Beendet alle Assists die durch die Aktion [Start Assist] gestartet wurden.",
            "es-ES": "Detiene todas las asistencias que se iniciaron mediante la acción «Start Assist».",
            "es-MX": "Detiene todas las asistencias iniciadas mediante la acción Comenzar asistencia.",
            "fr-FR": "Interrompt tous les soutiens commencés à l’aide de l’action Lancer le soutien.",
            "it-IT": "Interrompe tutti gli assist iniziati utilizzando l'Azione Start Assist.",
            "ja-JP": "「アシストを開始」アクションで開始されたすべてのアシストを停止する",
            "ko-KR": "Start Assist 액션으로 시작된 모든 도움을 중지합니다.",
            "pl-PL": "Zatrzymuje wszystkie asysty rozpoczęte przez działanie „Start Assist” Rozpocznij asystę.",
            "pt-BR": "Interrompe todas as assistências iniciadas pela Ação Iniciar Assistência.",
            "ru-RU": "Останавливает все содействия начатые с помощью действия [Start Assist].",
            "zh-CN": "停止所有由“开始助攻”动作启动的助攻。"
        }
    },
    "stopAllDamageModifications": {
        "description": "Stops all damage modifications that were started using the start damage modification action.",
        "args": [],
        "guid": "00000000C647",
        "return": "void",
        "en-US": "Stop All Damage Modifications",
        "es-MX": "Detener todas las modificaciones de daño",
        "fr-FR": "Arrêter toutes les modifications de dégâts",
        "ja-JP": "すべてのダメージ変更を停止",
        "pt-BR": "Parar Todas as Modificações de Dano",
        "zh-CN": "停止所有伤害调整",
        "descriptionLocalized": {
            "guid": "00000000C646",
            "en-US": "Stops all damage modifications that were started using the Start Damage Modification Action.",
            "de-DE": "Beendet alle Schadensmodifikationen die durch die Aktion [Start Damage Modification] gestartet wurden.",
            "es-ES": "Detiene todas las modificaciones de daño que se iniciaron mediante la acción «Start Damage Modification».",
            "es-MX": "Detiene todas las modificaciones de daño iniciadas mediante la acción Comenzar modificación de daño.",
            "fr-FR": "Interrompt toutes les modifications de dégâts commencées à l’aide de l’action Lancer la modification des dégâts.",
            "it-IT": "Interrompe tutte le modifiche danni iniziate dall'Azione Start Damage Modification.",
            "ja-JP": "「ダメージ変更を開始」アクションで開始されたすべてのダメージ変更を停止する",
            "ko-KR": "Start Damage Modification 액션으로 시작된 모든 Damage Modification을 중지합니다.",
            "pl-PL": "Zatrzymuje wszystkie modyfikacje obrażeń rozpoczęte przez działanie „Start Damage Modification” Początek modyfikacji obrażeń.",
            "pt-BR": "Interrompe todas as modificações de dano iniciadas usando a Ação Começar Modificação de Dano.",
            "ru-RU": "Останавливает любое изменение урона запущенное действием начала изменения урона [Start Damage Modification].",
            "zh-CN": "停止所有由“开始伤害调整”动作启动的伤害调整。"
        }
    },
    "stopAllHealingModifications": {
        "description": "Stops all healing modifications that were started using the start healing modification action.",
        "args": [],
        "guid": "00000000FD3B",
        "return": "void",
        "en-US": "Stop All Healing Modifications",
        "es-MX": "Detener todas las modificaciones de sanación",
        "fr-FR": "Terminer toutes les modifications de soins",
        "ja-JP": "すべての回復変更を停止",
        "pt-BR": "Parar todas as modificações de cura",
        "zh-CN": "停止所有治疗调整",
        "descriptionLocalized": {
            "guid": "00000000FD36",
            "en-US": "Stops all healing modifications that were started using the Start Healing Modification Action.",
            "de-DE": "Beendet alle Heilungsmodifikationen die durch die Aktion [Start Healing Modification] gestartet wurden.",
            "es-ES": "Detiene todas las modificaciones de sanación que se iniciaron mediante la acción «Start Healing Modification».",
            "es-MX": "Detiene todas las modificaciones de sanación iniciadas mediante la acción Comenzar modificación de sanación.",
            "fr-FR": "Interrompt toutes les modifications de soins commencées à l’aide de l’action « Lancer la modification des soins ».",
            "it-IT": "Interrompe tutte le modifiche cure iniziate dall'Azione Start Healing Modification.",
            "ja-JP": "「回復変更を開始」アクションで開始されたすべての回復変更を停止する",
            "ko-KR": "해당 Start Healing Modification 액션 사용으로 시작된 모든 Healing Modification을 중지합니다.",
            "pl-PL": "Zatrzymuje wszystkie modyfikacje leczenia rozpoczęte przez działanie „Start Healing Modification Początek modyfikacji leczenia”.",
            "pt-BR": "Interrompe todas as modificações de cura iniciadas usando a Ação Começar Modificação de Cura.",
            "ru-RU": "Останавливает все модификации исцеления начатые с помощью действия [Start Healing Modification].",
            "zh-CN": "停止所有由“开始治疗调整”动作启动的治疗调整。"
        }
    },
    "_&stopAllDoT": {
        "description": "Stops all damage over time started by start damage over time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose scripted damage over time will stop.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9C3",
        "return": "void",
        "en-US": "Stop All Damage Over Time",
        "es-MX": "Detener todo el daño con el tiempo",
        "fr-FR": "Arrêter tous les dégâts sur la durée",
        "ja-JP": "すべての継続ダメージを停止",
        "pt-BR": "Parar Todo o Dano ao Longo do Tempo",
        "zh-CN": "停止所有持续伤害",
        "descriptionLocalized": {
            "guid": "00000000BD13",
            "en-US": "Stops all Damage Over Time started by Start Damage Over Time for one or more Players.",
            "de-DE": "Beendet sämtlichen regelmäßigen Schaden der durch die Aktion [Start Damage Over Time] für einen oder mehrere Spieler begonnen wurde.",
            "es-ES": "Detiene todas las instancias de «Damage Over Time» iniciadas por «Start Damage Over Time» para uno o más jugadores.",
            "es-MX": "Detiene todo daño con el tiempo iniciado por la acción Comenzar daño con el tiempo de uno o más jugadores.",
            "fr-FR": "Arrête toutes les instances de dégâts sur la durée lancées par l’action « Infliger des dégâts sur la durée » pour un ou plusieurs joueurs.",
            "it-IT": "Interrompe tutti i Danni Periodici avviati dall'Azione Start Damage Over Time per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーの「継続ダメージを開始」で開始したすべての継続ダメージを停止させる",
            "ko-KR": "플레이어의 Start Damage Over Time 액션에 의해 시작된 모든 Damage Over Time을 중지합니다.",
            "pl-PL": "Zatrzymuje wszelkie obrażenia z upływem czasu rozpoczęte przez działanie „Start Damage Over Time” Uruchom obrażenia z upływem czasu dla jednego lub więcej graczy.",
            "pt-BR": "Interrompe todo o Dano ao Longo do Tempo iniciado pela Ação Começar Dano ao Longo do Tempo para um ou mais Jogadores.",
            "ru-RU": "Останавливает все экземпляры периодического урона запущенные действием [Start Damage Over Time] для одного или нескольких игроков.",
            "zh-CN": "停止一个或多个玩家身上所有由“开始持续伤害”给予的持续伤害。"
        }
    },
    "_&stopAllHoT": {
        "description": "Stops all heal over time started by start heal over time for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose scripted heal over time will stop.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000B9C0",
        "return": "void",
        "en-US": "Stop All Heal Over Time",
        "es-MX": "Detener toda la sanación con el tiempo",
        "fr-FR": "Arrêter tous les soins sur la durée",
        "ja-JP": "すべての継続回復を停止",
        "pt-BR": "Parar Toda a Cura ao Longo do Tempo",
        "zh-CN": "停止所有持续治疗",
        "descriptionLocalized": {
            "guid": "00000000BD15",
            "en-US": "Stops all Heal Over Time started by Start Heal Over Time for one or more Players.",
            "de-DE": "Beendet sämtliche Heilung über Zeit die durch die Aktion [Start Heal Over Time] für einen oder mehrere Spieler begonnen wurde.",
            "es-ES": "Detiene todas las instancias de «Heal Over Time» iniciadas por «Start Heal Over Time» para uno o más jugadores.",
            "es-MX": "Detiene toda sanación con el tiempo iniciada por la acción Comenzar sanación con el tiempo de uno o más jugadores.",
            "fr-FR": "Arrête toutes les instances de soins sur la durée lancées par l’action « Prodiguer des soins sur la durée » pour un ou plusieurs joueurs.",
            "it-IT": "Interrompe tutte le Cure Periodiche iniziate dall'Azione Start Heal Over Time per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーの「継続回復を開始」で開始したすべての継続回復を停止させる",
            "ko-KR": "플레이어의 Start Heal Over Time 액션에 의해 시작된 모든 Heal Over Time을 중지합니다.",
            "pl-PL": "Zatrzymuje wszelkie leczenie z upływem czasu rozpoczęte przez działanie „Start Heal Over Time” Rozpocznij leczenie z upływem czasu dla jednego lub więcej graczy.",
            "pt-BR": "Interrompe toda a Cura ao Longo do Tempo iniciada pela Ação Começar Cura ao Longo do Tempo para um ou mais Jogadores.",
            "ru-RU": "Останавливает все экземпляры периодического исцеления запущенные действием [Start Heal Over Time] для одного или нескольких игроков.",
            "zh-CN": "停止一个或多个玩家身上所有由“开始持续治疗”给予的持续治疗。"
        }
    },
    "stopAssist": {
        "description": "Stops an assist that was started by the Start Assist Action.",
        "args": [
            {
                "name": "Assist ID",
                "description": "Specifies which assist instance to stop. This ID may be Last Assist ID or a Variable into which Last Assist ID was earlier stored.",
                "type": "AssistId",
                "default": "Last Assist ID"
            }
        ],
        "return": "void",
        "guid": "0000000121FC",
        "en-US": "Stop Assist",
        "es-MX": "Detener asistencia",
        "fr-FR": "Arrêter le soutien",
        "ja-JP": "アシストを停止",
        "pt-BR": "Interromper Assistência",
        "zh-CN": "停止助攻",
        "descriptionLocalized": {
            "guid": "0000000121FD",
            "en-US": "Stops an assist that was started by the Start Assist Action.",
            "de-DE": "Beendet einen Assist der durch die Aktion [Start Assist] gestartet wurde.",
            "es-ES": "Detiene una asistencia que se inició mediante la acción «Start Assist».",
            "es-MX": "Detiene una asistencia iniciada por la acción Comenzar asistencia.",
            "fr-FR": "Interrompt un soutien commencé à l’aide de l’action Lancer le soutien.",
            "it-IT": "Interrompe un assist iniziato dall'Azione Start Assist.",
            "ja-JP": "「アシストを開始」アクションで開始されたアシストを停止する",
            "ko-KR": "Start Assist 액션으로 시작된 도움 하나를 중지합니다.",
            "pl-PL": "Zatrzymuje asystę rozpoczętą przez działanie „Start Assist” Rozpocznij asystę.",
            "pt-BR": "Interrompe uma assistência que tenha sido iniciada pela Ação Iniciar Assistência.",
            "ru-RU": "Останавливает содействие начатое с помощью действия [Start Assist].",
            "zh-CN": "停止由“开始助攻”动作启动的一个助攻。"
        }
    },
    "_&stopCamera": {
        "description": "Restores the camera to the default view.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose cameras will be put back to the default view.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000C3B1",
        "return": "void",
        "en-US": "Stop Camera",
        "es-MX": "Detener cámara",
        "fr-FR": "Arrêter la caméra",
        "ja-JP": "カメラの停止",
        "pt-BR": "Parar Câmera",
        "zh-CN": "停止镜头",
        "descriptionLocalized": {
            "guid": "00000000EA9B",
            "en-US": "Restores the camera to the default view.",
            "de-DE": "Setzt die Kamera auf die Standardsicht zurück.",
            "es-ES": "Restablece la vista predeterminada de la cámara.",
            "es-MX": "Restablece la cámara a la vista predeterminada.",
            "fr-FR": "Renvoie la caméra sur la vue par défaut.",
            "it-IT": "Ripristina la visuale predefinita.",
            "ja-JP": "カメラをデフォルトの視点に戻す",
            "ko-KR": "카메라를 기본 시야로 되돌립니다.",
            "pl-PL": "Przywraca domyślny widok kamery.",
            "pt-BR": "Restaura a câmera para a visão padrão.",
            "ru-RU": "Восстанавливает положение камеры по умолчанию.",
            "zh-CN": "将镜头缩放恢复至默认视角。"
        }
    },
    "__stopChasingGlobalVariable__": {
        "description": "Stops an in-progress chase of a global variable, leaving it at its current value.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "Specifies which global variable to stop modifying.",
                "type": "GlobalVariable",
                "default": "A"
            }
        ],
        "guid": "00000000B83E",
        "return": "void",
        "en-US": "Stop Chasing Global Variable",
        "es-MX": "Detener seguimiento de variable global",
        "fr-FR": "Arrêter de modifier une variable globale",
        "ja-JP": "グローバル変数の追跡を中止",
        "pt-BR": "Parar de Acompanhar Variável Global",
        "zh-CN": "停止追踪全局变量",
        "descriptionLocalized": {
            "guid": "00000000BCC6",
            "en-US": "Stops an in-progress chase of a Global Variable leaving it at its current Value.",
            "de-DE": "Beendet eine aktuell stattfindende Änderung einer globalen Variable und belässt sie bei ihrem aktuellen Wert.",
            "es-ES": "Detiene una búsqueda en curso de una variable global y la deja en su valor actual.",
            "es-MX": "Detiene el seguimiento en curso de una variable global. Dicha variable permanecerá en su valor actual.",
            "fr-FR": "Arrête la modification progressive en cours d’une variable globale la laissant à sa valeur actuelle.",
            "it-IT": "Interrompe le modifiche in atto di una Variabile Globale lasciandola al suo Valore attuale.",
            "ja-JP": "進行中のグローバル変数の追跡を停止し、その時点の値を残す",
            "ko-KR": "진행 중인 전역 변수 추적을 중지하고 해당 변수의 현재 값을 그대로 유지합니다.",
            "pl-PL": "Zatrzymuje trwającą stopniową modyfikację zmiennej „Global Variable” Zmienna globalna pozostawiając jej bieżącą wartość.",
            "pt-BR": "Interrompe o acompanhamento em progresso de uma Variável Global deixando-a no seu Valor atual.",
            "ru-RU": "Останавливает изменение глобальной переменной оставляя ее значение в данный момент.",
            "zh-CN": "停止追踪一个全局变量，并使其保持为当前值。"
        }
    },
    "__stopChasingPlayerVariable__": {
        "description": "Stops an in-progress chase of a player variable, leaving it at its current value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable will stop changing. If multiple players are provided, each of their variables will stop changing.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "VARIABLE",
                "description": "Specifies which of the player's variables to stop modifying.",
                "type": "PlayerVariable",
                "default": "A"
            }
        ],
        "guid": "00000000B83D",
        "return": "void",
        "en-US": "Stop Chasing Player Variable",
        "es-MX": "Detener seguimiento de variable de jugador",
        "fr-FR": "Arrêter de modifier une variable de joueur",
        "ja-JP": "プレイヤー変数の追跡を中止",
        "pt-BR": "Parar de Acompanhar Variável de Jogador",
        "zh-CN": "停止追踪玩家变量",
        "descriptionLocalized": {
            "guid": "00000000BCC8",
            "en-US": "Stops an in-progress chase of a Player Variable leaving it at its current Value.",
            "de-DE": "Beendet eine aktuell stattfindende Änderung einer Spielervariable und belässt sie bei ihrem aktuellen Wert.",
            "es-ES": "Detiene una búsqueda en curso de una variable de jugador y la deja en su valor actual.",
            "es-MX": "Detiene el seguimiento en curso de una variable de jugador. Dicha variable permanecerá en su valor actual.",
            "fr-FR": "Arrête la modification progressive en cours d’une variable de joueur la laissant à sa valeur actuelle.",
            "it-IT": "Interrompe le modifiche in atto di una Variabile Giocatore lasciandola al suo Valore attuale.",
            "ja-JP": "進行中のプレイヤー変数の追跡を停止し、その時点の値を残す",
            "ko-KR": "진행 중인 플레이어 변수 추적을 중지하고 해당 변수의 현재 값을 그대로 유지합니다.",
            "pl-PL": "Zatrzymuje trwającą stopniową modyfikację zmiennej „Player Variable” Zmienna gracza pozostawiając jej bieżącą wartość.",
            "pt-BR": "Interrompe o acompanhamento em progresso de uma Variável do Jogador deixando-a no seu Valor atual.",
            "ru-RU": "Останавливает изменение переменной игрока оставляя ее значение в данный момент.",
            "zh-CN": "停止追踪一个玩家变量，并使其保持为当前值。"
        }
    },
    "stopDamageModification": {
        "description": "Stops a damage modification that was started by the start damage modification action.",
        "args": [
            {
                "name": "DAMAGE MODIFICATION",
                "description": "Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.",
                "type": "DamageModificationId",
                "default": "LAST DAMAGE MODIFICATION ID"
            }
        ],
        "guid": "00000000C649",
        "return": "void",
        "en-US": "Stop Damage Modification",
        "es-MX": "Detener modificación de daño",
        "fr-FR": "Arrêter la modification des dégâts",
        "ja-JP": "ダメージ変更を停止",
        "pt-BR": "Parar Modificação de Dano",
        "zh-CN": "停止伤害调整",
        "descriptionLocalized": {
            "guid": "00000000C648",
            "en-US": "Stops a damage modification that was started by the Start Damage Modification Action.",
            "de-DE": "Beendet eine Schadensmodifikation die durch die Aktion [Start Damage Modification] gestartet wurde.",
            "es-ES": "Detiene una modificación de daño que se inició mediante la acción «Start Damage Modification».",
            "es-MX": "Detiene una modificación de daño iniciada por la acción Comenzar modificación de daño.",
            "fr-FR": "Interrompt une modification de dégâts commencée à l’aide de l’action Lancer la modification des dégâts.",
            "it-IT": "Interrompe una modifica danni iniziata dall'Azione Start Damage Modification.",
            "ja-JP": "「ダメージ変更を開始」アクションで開始されたダメージ変更を停止する",
            "ko-KR": "Start Damage Modification 액션으로 시작된 Damage Modification 하나를 중지합니다.",
            "pl-PL": "Zatrzymuje modyfikację obrażeń rozpoczętą przez działanie „Start Damage Modification” Początek modyfikacji obrażeń.",
            "pt-BR": "Interrompe uma modificação de dano iniciada pela Ação Começar Modificação de Dano.",
            "ru-RU": "Останавливает изменение урона запущенное действием начала изменения урона [Start Damage Modification].",
            "zh-CN": "停止由“开始伤害调整”动作启动的一个伤害调整。"
        }
    },
    "stopDoT": {
        "description": "Stops an instance of damage over time started by the start damage over time action.",
        "args": [
            {
                "name": "DAMAGE OVER TIME ID",
                "description": "Specifies which damage over time instance to stop. This id may be last damage over time id or a variable into which last damage over time id was earlier stored.",
                "type": "DotId",
                "default": "LAST DAMAGE OVER TIME ID"
            }
        ],
        "guid": "00000000B9C4",
        "return": "void",
        "en-US": "Stop Damage Over Time",
        "es-MX": "Detener daño con el tiempo",
        "fr-FR": "Arrêter des dégâts sur la durée",
        "ja-JP": "継続ダメージを停止",
        "pt-BR": "Parar Dano ao Longo do Tempo",
        "zh-CN": "停止持续伤害",
        "descriptionLocalized": {
            "guid": "00000000BD11",
            "en-US": "Stops an instance of Damage Over Time started by the Start Damage Over Time Action.",
            "de-DE": "Beendet eine Instanz von regelmäßigem Schaden die durch die Aktion [Start Damage Over Time] begonnen wurde.",
            "es-ES": "Detiene una instancia de «Damage Over Time» iniciada por la acción «Start Damage Over Time».",
            "es-MX": "Detiene una instancia de daño con el tiempo iniciada por la acción Comenzar daño con el tiempo.",
            "fr-FR": "Arrête une instance de dégâts sur la durée lancée par l’action « Infliger des dégâts sur la durée ».",
            "it-IT": "Interrompe un'istanza di Danni Periodici iniziata dall'Azione Start Damage Over Time.",
            "ja-JP": "「継続ダメージを開始」アクションで開始した継続ダメージのインスタンスを停止する",
            "ko-KR": "Start Damage Over Time 액션에 의해 시작된 Damage Over Time 인스턴스를 중지합니다.",
            "pl-PL": "Zatrzymuje instancję „Damage Over Time” Obrażenia z upływem czasu rozpoczętą przez działanie „Start Damage Over Time” Uruchom obrażenia z upływem czasu.",
            "pt-BR": "Interrompe uma instância de Dano ao Longo do Tempo iniciada pela Ação Começar Dano ao Longo do Tempo.",
            "ru-RU": "Останавливает экземпляр периодического урона запущенный действием [Start Damage Over Time].",
            "zh-CN": "停止一个由”开始持续伤害“动作创建的持续伤害副本。 "
        }
    },
    "_&stopFacing": {
        "description": "Stops the turning started by the start facing action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will stop turning.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BB21",
        "return": "void",
        "en-US": "Stop Facing",
        "es-MX": "Detener orientación",
        "fr-FR": "Arrêter de regarder vers",
        "ja-JP": "向き変更を停止",
        "pt-BR": "Parar de Encarar",
        "zh-CN": "停止朝向",
        "descriptionLocalized": {
            "guid": "00000000BD83",
            "en-US": "Stops the turning started by the Start Facing Action for one or more Players.",
            "de-DE": "Beendet die Drehung die durch die Aktion [Start Facing] für einen oder mehrere Spieler begonnen wurde.",
            "es-ES": "Detiene el giro iniciado por la acción «Start Facing» para uno o más jugadores.",
            "es-MX": "Detiene el giro iniciado por la acción Comenzar orientación de uno o más jugadores.",
            "fr-FR": "Stoppe la rotation débutée par l’action « Regarder vers » pour un ou plusieurs joueurs.",
            "it-IT": "Ferma la rotazione iniziata dall'Azione Start Facing per uno o più Giocatori.",
            "ja-JP": "「向き変更を開始」アクションで開始された1人または複数のプレイヤーの方向転換を停止する",
            "ko-KR": "플레이어의 Start Facing 액션에 의해 시작된 회전을 중지합니다.",
            "pl-PL": "Zatrzymuje obrót rozpoczęty przez działanie „Start Facing” Początek skierowania dla jednego lub więcej graczy.",
            "pt-BR": "Interrompe o giro iniciado pela Ação Começar a Encarar para um ou mais Jogadores.",
            "ru-RU": "Прекращает поворот одного или нескольких игроков начатый действием [Start Facing].",
            "zh-CN": "停止“开始转向”动作造成的转向效果。"
        }
    },
    "_&stopForcingName": {
        "description": "Cancels the behavior of `startForcingName` for the specified player or players.",
        "args": [
            {
                "name": "Player",
                "description": "The Player or Players whose names will stop being forced",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "Event Player"
            }
        ],
        "return": "void",
        "en-US": "Stop Forcing Dummy Bot Name",
        "descriptionLocalized": {
            "en-US": "Cancels the behavior of `startForcingName` for the specified player or players.",
            "guid": "<unknown guid>"
        }
    },
    "_&stopForcingOutlineFor": {
        "description": "Cancels the behavior of Start Forcing Player Outlines for the specified viewed player or players from the perspective of one or more viewing players.",
        "args": [
            {
                "name": "Viewed Players",
                "description": "The player or players who will have their outlines reset.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "Viewing Players",
                "description": "The viewing player or players for whom the viewed player's outlines will be reset.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "All Players"
            }
        ],
        "return": "void",
        "guid": "0000000112ED",
        "en-US": "Stop Forcing Player Outlines",
        "es-MX": "Dejar de forzar el contorno del jugador",
        "fr-FR": "Arrêter de forcer le contour des joueurs",
        "ja-JP": "プレイヤー・アウトラインの強制を停止",
        "pt-BR": "Parar de Forçar Contornos de Jogador",
        "zh-CN": "停止强制设置玩家轮廓",
        "descriptionLocalized": {
            "guid": "0000000112EF",
            "en-US": "Cancels the behavior of Start Forcing Player Outlines for the specified Viewed Player or Players from the perspective of one or more Viewing Players.",
            "de-DE": "Bricht das durch [Start Forcing Player Outlines] hervorgerufene Verhalten für den oder die festgelegten Spieler aus der Perspektive eines oder mehrerer Betrachter ab.",
            "es-ES": "Cancela el comportamiento de «Start Forcing Player Outlines» del jugador o jugadores observados especificados desde la perspectiva de uno o más jugadores observadores.",
            "es-MX": "Cancela el comportamiento de Comenzar a forzar el contorno del jugador o jugadores observados especificados desde la perspectiva de uno o más jugadores que observan.",
            "fr-FR": "Annule le comportement de « Forcer le contour des joueurs » d’un ou de plusieurs joueurs observés spécifiés pour un ou plusieurs joueurs spectateurs.",
            "it-IT": "Annulla il comportamento di Start Forcing Player Outlines per il Giocatore o i Giocatori Osservati specificati dalla prospettiva di uno o più Giocatori Osservatori.",
            "ja-JP": "1人または複数の複数の表示側プレイヤーの視点で、1人または複数の指定された表示対象プレイヤーの「プレイヤー・アウトラインの強制を開始」の動作をキャンセルする",
            "ko-KR": "관찰자 플레이어의 시점에서 지정된 피관찰자 플레이어의 Start Forcing Player Outlines 행동을 취소합니다.",
            "pl-PL": "Anuluje zachowanie „Start Forcing Player Outlines” Rozpocznij wymuszanie obrysów graczy dla określonego obserwowanego gracz lub graczy z perspektywy jednego lub więcej obserwujących graczy.",
            "pt-BR": "Cancela o comportamento de Começar a Forçar Contornos de Jogador para os Jogadores Observados da perspectiva de um ou mais Jogadores Observadores.",
            "ru-RU": "Перестает принудительно задавать видимость и цвет контуров одного или нескольких наблюдаемых игроков для наблюдающего игрока или игроков.",
            "zh-CN": "从观察玩家的视角看，取消被观察的玩家的“开始强制设置玩家轮廓”效果。"
        }
    },
    "_&stopForcingPosition": {
        "description": "Cancels the behavior of `startForcingPosition()` for the specified player or players. Regular movement will resume from the last forced position(s).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose positions will stop being forced.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "000000010E8D",
        "en-US": "Stop Forcing Player Position",
        "es-MX": "Dejar de forzar la posición del jugador",
        "fr-FR": "Arrêter de forcer la position du joueur",
        "ja-JP": "プレイヤーの位置強制を停止",
        "pt-BR": "Parar de Forçar Posição do Jogador",
        "zh-CN": "停止强制设置玩家位置",
        "descriptionLocalized": {
            "en-US": "Cancels the behavior of `startForcingPosition()` for the specified player or players. Regular movement will resume from the last forced position(s).",
            "guid": "<unknown guid>"
        }
    },
    "_&stopForcingCurrentHero": {
        "description": "Stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who will no longer be forced to be a specific hero.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000AC1B",
        "return": "void",
        "en-US": "Stop Forcing Player To Be Hero",
        "es-MX": "Dejar de forzar a un jugador a usar un héroe",
        "fr-FR": "Arrêter de forcer un héros",
        "ja-JP": "プレイヤーへのヒーロー強制を停止",
        "pt-BR": "Parar de Forçar Jogador a Ser o Herói",
        "zh-CN": "停止强制玩家选择英雄",
        "descriptionLocalized": {
            "guid": "00000000BC91",
            "en-US": "Stops forcing one or more Players to be a specific Hero. This will not respawn the Player or Players but it will restore their Hero availability the next time they go to select a Hero.",
            "de-DE": "Zwingt einen oder mehrere Spieler nicht mehr einen bestimmten Helden zu spielen. Damit werden der oder die Spieler nicht wiederbelebt. Stattdessen wird die Verfügbarkeit ihrer Helden bei ihrer nächsten Heldenauswahl wiederhergestellt.",
            "es-ES": "Anula la obligación de ser un héroe concreto para uno o más jugadores. Esto no hará que reaparezcan el jugador o los jugadores sino que restaurará la lista de héroes disponibles la próxima vez que vayan a seleccionar uno.",
            "es-MX": "Deja de forzar a uno o más jugadores a utilizar un héroe determinado. Esto no causará la reaparición del jugador o los jugadores pero restaurará su disponibilidad de héroes la próxima vez que seleccionen a un héroe.",
            "fr-FR": "Arrête de forcer un ou plusieurs joueurs à jouer un héros spécifique. Cela ne fera pas réapparaître le ou les joueurs mais restaurera les héros disponibles la prochaine fois qu’ils sélectionneront un héros.",
            "it-IT": "Cessa di forzare uno o più Giocatori a utilizzare un Eroe specifico. Ciò non rigenererà il Giocatore o i Giocatori ma ripristinerà gli Eroi disponibili la prossima volta che sceglieranno un Eroe.",
            "ja-JP": "1人または複数のプレイヤーに対して特定のヒーローの強制をやめる。これによってプレイヤーがリスポーンすることはないが、次にヒーローを選択するとき、選べるヒーローが元に戻る",
            "ko-KR": "플레이어에 대해 지정된 영웅 강제 선택 지정을 중지합니다. 이를 통해 플레이어가 부활하지는 않지만 이후부터 영웅 선택을 할 수 있게 됩니다.",
            "pl-PL": "Przestaje wymuszać określonego bohatera u jednego lub więcej graczy. Nie powoduje to odrodzenia gracza lub graczy ale przywróci dostępność ich bohatera przy następnym wybieraniu.",
            "pt-BR": "Interrompe o uso forçado de um Herói específico por um ou mais Jogadores. Isso não fará os Jogadores ressurgirem mas restaurará a disponibilidade de Heróis da próxima vez que selecionarem um Herói.",
            "ru-RU": "Отключает принудительное назначение указанного героя одному или нескольким игрокам. Не приводит к возрождению этих игроков но возвращает им возможность выбора доступных героев при следующем выборе героя.",
            "zh-CN": "停止强制一名或多名玩家使用指定的英雄。此行动不会使玩家重生，只会在其下次选择英雄时恢复可用的其他英雄。"
        }
    },
    "stopForcingSpawn": {
        "description": "Undoes the effect of the start forcing spawn room action for the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team that will resume using their normal spawn room.",
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "guid": "00000000B574",
        "return": "void",
        "en-US": "Stop Forcing Spawn Room",
        "es-MX": "Dejar de forzar cuarto de reaparición",
        "fr-FR": "Arrêter de forcer une salle d’apparition",
        "ja-JP": "リスポーンエリアの強制を停止",
        "pt-BR": "Parar de Forçar Sala de Ressurgimento",
        "zh-CN": "停止强制重生室",
        "descriptionLocalized": {
            "guid": "00000000BCA3",
            "en-US": "Undoes the effect of the Start Forcing Spawn Room Action for the specified Team.",
            "de-DE": "Macht den Effekt der Aktion [Start Forcing Spawn Room] für das festgelegte Team rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Start Forcing Spawn Room» para el equipo especificado.",
            "es-MX": "Deshace el efecto de la acción Comenzar a forzar cuarto de reaparición para el equipo especificado.",
            "fr-FR": "Annule l’effet de l’action « Forcer une salle d’apparition » pour l’équipe spécifiée.",
            "it-IT": "Annulla l'effetto dell'Azione Start Forcing Spawn Room per la Squadra specificata.",
            "ja-JP": "指定したチームの「リスポーンエリアの強制を開始」アクションの効果を取り消す",
            "ko-KR": "지정된 팀에 대한 Start Forcing Spawn Room 액션의 효과를 취소합니다.",
            "pl-PL": "CCofa efekt działania „Start Forcing Spawn Room” Wymuszaj miejsce odrodzenia dla określonej drużyny.",
            "pt-BR": "Desfaz o efeito da Ação Começar a Forçar Sala de Ressurgimento para a Equipe especificada.",
            "ru-RU": "Отменяет эффект [Start Forcing Spawn Room] для указанной команды.",
            "zh-CN": "取消“开始强制使用重生室”动作对一支队伍的效果。"
        }
    },
    "_&stopForcingThrottle": {
        "description": "Undoes the effect of the start forcing throttle action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose movement input will be restored.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000BB0E",
        "return": "void",
        "en-US": "Stop Forcing Throttle",
        "es-MX": "Dejar de forzar la aceleración",
        "fr-FR": "Arrêter de forcer l’accélération",
        "ja-JP": "強制スロットル中止",
        "pt-BR": "Parar de Forçar Aceleração",
        "zh-CN": "停止限制阈值",
        "descriptionLocalized": {
            "guid": "00000000BD6F",
            "en-US": "Undoes the effect of the Start Forcing Throttle Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Start Forcing Throttle] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Start Forcing Throttle» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Comenzar a forzar la aceleración de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Forcer l’accélération » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Start Forcing Throttle per uno o più Giocatori.",
            "ja-JP": "1人または複数のプレイヤーに対して、「強制スロットル開始」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Start Forcing Throttle 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Start Forcing Throttle” Początek wymuszania pędu dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Começar a Forçar Aceleração para um ou mais Jogadores.",
            "ru-RU": "Отменяет эффект действия [Start Forcing Throttle] для одного или нескольких игроков.",
            "zh-CN": "取消“开始限制阈值”动作的效果。"
        }
    },
    "stopHoT": {
        "description": "Stops an instance of heal over time started by the start heal over time action.",
        "args": [
            {
                "name": "HEAL OVER TIME ID",
                "description": "Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.",
                "type": "HotId",
                "default": "PLAYER VARIABLE"
            }
        ],
        "guid": "00000000B9C1",
        "return": "void",
        "en-US": "Stop Heal Over Time",
        "es-MX": "Detener sanación con el tiempo",
        "fr-FR": "Arrêter des soins sur la durée",
        "ja-JP": "継続回復を停止",
        "pt-BR": "Parar Cura ao Longo do Tempo",
        "zh-CN": "停止持续治疗",
        "descriptionLocalized": {
            "guid": "00000000BD17",
            "en-US": "Stops an instance of Heal Over Time started by the Start Heal Over Time Action.",
            "de-DE": "Beendet eine Instanz von Heilung über Zeit die durch die Aktion [Start Heal Over Time] begonnen wurde.",
            "es-ES": "Detiene una instancia de «Heal Over Time» iniciada por la acción «Start Heal Over Time».",
            "es-MX": "Detiene una instancia de sanación con el tiempo iniciada por la acción Comenzar sanación con el tiempo.",
            "fr-FR": "Arrête une instance de soins sur la durée lancée par l’action « Prodiguer des soins sur la durée ».",
            "it-IT": "Interrompe un'istanza di Cure Periodiche iniziata dall'Azione Start Heal Over Time.",
            "ja-JP": "「継続回復を開始」アクションで開始した継続回復のインスタンスを停止する",
            "ko-KR": "Start Heal Over Time 액션에 의해 시작된 Heal Over Time 인스턴스를 중지합니다.",
            "pl-PL": "Zatrzymuje instancję „Heal Over Time” Leczenie z upływem czasu rozpoczętą przez działanie „Start Heal Over Time” Rozpocznij leczenie z upływem czasu.",
            "pt-BR": "Interrompe uma instância de Cura ao Longo do Tempo iniciada pela Ação Começar Cura ao Longo do Tempo.",
            "ru-RU": "Останавливает экземпляр периодического исцеления запущенный действием [Start Heal Over Time].",
            "zh-CN": "停止一个由”开始持续治疗“动作创建的持续治疗副本。 "
        }
    },
    "stopHealingModification": {
        "description": "Stops a healing modification that was started by the start healing modification action.",
        "args": [
            {
                "name": "HEALING MODIFICATION ID",
                "description": "Specifies which healing modification instance to stop. This id may be last healing modification id or a variable into which last healing modification id was earlier stored.",
                "type": "HealingModificationId",
                "default": "LAST HEALING MODIFICATION ID"
            }
        ],
        "guid": "00000000FD37",
        "return": "void",
        "en-US": "Stop Healing Modification",
        "es-MX": "Detener modificación de sanación",
        "fr-FR": "Terminer la modification de soins",
        "ja-JP": "回復変更を停止",
        "pt-BR": "Parar modificação de cura",
        "zh-CN": "停止治疗调整",
        "descriptionLocalized": {
            "guid": "00000000FD38",
            "en-US": "Stops a healing modification that was started by the Start Healing Modification Action.",
            "de-DE": "Beendet eine Heilungsmodifikation die durch die Aktion [Start Healing Modification] gestartet wurde.",
            "es-ES": "Detiene una modificación de sanación que se inició mediante la acción «Start Healing Modification».",
            "es-MX": "Detiene una modificación de sanación iniciada por la acción Comenzar modificación de sanación.",
            "fr-FR": "Interrompt une modification de soins commencée à l’aide de l’action « Lancer la modification des soins ».",
            "it-IT": "Interrompe una modifica cure iniziata dall'Azione Start Healing Modification.",
            "ja-JP": "「回復変更を開始」アクションで開始された回復変更を停止する",
            "ko-KR": "해당 Start Healing Modification 액션으로 시작된 Healing Modification 하나를 중지합니다.",
            "pl-PL": "Zatrzymuje modyfikację leczenia rozpoczętą przez działanie „Start Healing Modification” Początek modyfikacji leczenia.",
            "pt-BR": "Interrompe uma modificação de cura iniciada pela Ação Começar Modificação de Cura.",
            "ru-RU": "Останавливает модификацию исцеления начатую действием [Start Healing Modification Action].",
            "zh-CN": "停止由“开始治疗调整”动作启动的一个治疗调整。"
        }
    },
    "_&stopForcingButton": {
        "description": "Undoes the effect of the start holding button action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players who are no longer holding a button virtually.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "BUTTON",
                "description": "The logical button that is no longer being held virtually.",
                "type": "Button",
                "default": "PRIMARY FIRE"
            }
        ],
        "guid": "00000000B9D2",
        "return": "void",
        "en-US": "Stop Holding Button",
        "es-MX": "Dejar de mantener el botón presionado",
        "fr-FR": "Arrêter de maintenir un bouton enfoncé",
        "ja-JP": "ボタン長押し解除",
        "pt-BR": "Parar de Segurar Botão",
        "zh-CN": "停止按下按钮",
        "descriptionLocalized": {
            "guid": "00000000BD28",
            "en-US": "Undoes the effect of the Start Holding Button Action for one or more Players.",
            "de-DE": "Macht den Effekt der Aktion [Start Holding Button] für einen oder mehrere Spieler rückgängig.",
            "es-ES": "Deshace el efecto de la acción «Start Holding Button» para uno o más jugadores.",
            "es-MX": "Deshace el efecto de la acción Comenzar a mantener el botón presionado de uno o más jugadores.",
            "fr-FR": "Annule l’effet de l’action « Maintenir un bouton enfoncé » pour un ou plusieurs joueurs.",
            "it-IT": "Annulla l'effetto dell'Azione Start Holding Button per uno o più Giocatori.",
            "ja-JP": "1人または複数の1人または複数のプレイヤーに対して、「ボタン長押し開始」アクションの効果を取り消す",
            "ko-KR": "플레이어의 Start Holding Button 액션 효과를 취소합니다.",
            "pl-PL": "Cofa efekt działania „Start Holding Button” Początek przytrzymania przycisku dla jednego lub więcej graczy.",
            "pt-BR": "Desfaz o efeito da Ação Começar a Segurar Botão para um ou mais Jogadores.",
            "ru-RU": "Отменяет эффект действия [Start Holding Button] для одного или нескольких игроков.",
            "zh-CN": "取消“开始按下按钮”动作的效果。"
        }
    },
    "_&stopModifyingVoicelinePitch": {
        "description": "Undoes the effect of the Starting Modifying Hero Voice Lines action for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose hero voice line sounds will stop being modified.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000113C0",
        "en-US": "Stop Modifying Hero Voice Lines",
        "es-MX": "Detener modificación de líneas de voz de héroe",
        "fr-FR": "Arrêter de modifier les répliques du héros",
        "ja-JP": "ヒーローのボイス・ラインの変更を停止",
        "pt-BR": "Parar de Modificar Falas de Herói",
        "zh-CN": "停止修改英雄语音",
        "descriptionLocalized": {
            "en-US": "Undoes the effect of the Starting Modifying Hero Voice Lines action for one or more players.",
            "guid": "<unknown guid>"
        }
    },
    "_&stopScalingBarriers": {
        "description": "Stops overriding the size of the barriers of a Player or Players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose barriers will stop having their size being overridden.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000112FB",
        "en-US": "Stop Scaling Barriers",
        "es-MX": "Detener escala de barreras",
        "fr-FR": "Arrêter de redimensionner les barrières",
        "ja-JP": "バリアのスケールを停止",
        "pt-BR": "Parar de Escalonar Barreiras",
        "zh-CN": "停止调整障碍大小",
        "descriptionLocalized": {
            "en-US": "Stops overriding the size of the barriers of a Player or Players.",
            "guid": "<unknown guid>"
        }
    },
    "_&stopScalingSize": {
        "description": "Stops overring the size of a player or players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose size will stop being overridden.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "return": "void",
        "guid": "0000000112FD",
        "en-US": "Stop Scaling Player",
        "es-MX": "Detener escala de jugador",
        "fr-FR": "Arrêter de redimensionner le joueur",
        "ja-JP": "プレイヤーのスケールを中止",
        "pt-BR": "Parar de Escalonar Jogador",
        "zh-CN": "停止调整玩家大小",
        "descriptionLocalized": {
            "en-US": "Stops overring the size of a player or players.",
            "guid": "<unknown guid>"
        }
    },
    "_&stopThrottleInDirection": {
        "description": "Cancels the behavior caused by start throttle in direction.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose default throttle control will be restored.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000CEA3",
        "return": "void",
        "en-US": "Stop Throttle In Direction",
        "es-MX": "Detener aceleración en dirección",
        "fr-FR": "Arrêter l’accélération directionnelle",
        "ja-JP": "指定方向にスロットル終了",
        "pt-BR": "Parar Aceleração na Direção",
        "zh-CN": "停止定向阈值",
        "descriptionLocalized": {
            "guid": "00000000CEA6",
            "en-US": "Cancels the behavior caused by Start Throttle In Direction.",
            "de-DE": "Bricht das durch [Start Throttle In Direction] hervorgerufene Verhalten ab.",
            "es-ES": "Cancela el comportamiento provocado por «Start Throttle In Direction».",
            "es-MX": "Cancela el comportamiento causado por Comenzar aceleración en dirección.",
            "fr-FR": "Annule le comportement causé par « Commencer l’accélération directionnelle ».",
            "it-IT": "Annulla il comportamento causato dall'Azione Start Throttle In Direction.",
            "ja-JP": "「指定方向にスロットル開始」による動作をキャンセルする",
            "ko-KR": "Start Throttle In Direction으로 인해 발생된 행동을 취소합니다.",
            "pl-PL": "Anuluje zachowanie wywołane przez „Start Throttle In Direction” Początek pędu w kierunku.",
            "pt-BR": "Cancela o comportamento causado por Iniciar Aceleração na Direção.",
            "ru-RU": "Прерывает поведение вызванное действием [Start Throttle In Direction].",
            "zh-CN": "取消“开始定向阈值”所造成的行为。"
        }
    },
    "_&stopTransformingThrottle": {
        "description": "Stops the throttle transform started by start transforming throttle for one or more players.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players whose throttle will stop being transformed.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            }
        ],
        "guid": "00000000CC25",
        "return": "void",
        "en-US": "Stop Transforming Throttle",
        "es-MX": "Dejar de transformar la aceleración",
        "fr-FR": "Arrêt de modification de l’accélération",
        "ja-JP": "スロットルの変化を停止",
        "pt-BR": "Parar Transformação de Aceleração",
        "zh-CN": "停止转换阈值",
        "descriptionLocalized": {
            "guid": "00000000CCA2",
            "en-US": "Stops the throttle transform started by Start Transforming Throttle for one or more Players.",
            "de-DE": "Beendet die Throttle-Transformation die durch die Aktion [Start Transforming Throttle] für einen oder mehrere Spieler begonnen wurde.",
            "es-ES": "Detiene la transformación de la aceleración iniciada por «Start Transforming Throttle» para uno o más jugadores.",
            "es-MX": "Detiene la transformación de la aceleración iniciada por la acción Comenzar a transformar la aceleración de uno o más jugadores.",
            "fr-FR": "Arrête la modification de l’accélération démarrée par une modification de l’accélération d’un ou de plusieurs joueurs.",
            "it-IT": "Interrompe la trasformazione dell'accelerazione iniziata da Start Transforming Throttle per uno o più Giocatori.",
            "ja-JP": "「スロットルの変化を開始」で開始された、1人または複数のプレイヤーのスロットルの変化を停止する",
            "ko-KR": "플레이어의 Start Transforming Throttle 액션에 의해 시작된 스로틀 변환을 중지합니다.",
            "pl-PL": "Zatrzymuje przekształcanie pędu rozpoczęte przez działanie „Start Transforming Throttle” Początek przekształcania pędu dla jednego lub więcej graczy.",
            "pt-BR": "Para a transformação de aceleração dos Jogadores iniciada por \"Iniciar Transformação de Aceleração\".",
            "ru-RU": "Прекращает преобразование импульса движения одного или нескольких игроков начатое действием [Start Transforming Throttle].",
            "zh-CN": "停止由“开始转换阈值”所开始的转换效果。"
        }
    },
    "_&teleport": {
        "guid": "00000000B9BA",
        "description": "Teleports one or more players to the specified position.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player or players to teleport.",
                "type": [
                    "Player",
                    {
                        "Array": "Player"
                    }
                ],
                "default": "EVENT PLAYER"
            },
            {
                "name": "POSITION",
                "description": "The position to which the player or players will teleport. If a player is provided, the position of the player is used.",
                "type": "Position",
                "canReplace0ByNull": true,
                "default": "VECTOR"
            }
        ],
        "return": "void",
        "en-US": "Teleport",
        "es-MX": "Transportar",
        "fr-FR": "Téléportation",
        "ja-JP": "テレポート",
        "pt-BR": "Teletransportar",
        "zh-CN": "传送",
        "descriptionLocalized": {
            "guid": "00000000BD0A",
            "en-US": "Teleports one or more Players to the specified position.",
            "de-DE": "Teleportiert einen oder mehrere Spieler zur festgelegten Position.",
            "es-ES": "Teletransporta a uno o más jugadores a la ubicación especificada.",
            "es-MX": "Transporta uno o más jugadores a la posición especificada.",
            "fr-FR": "Téléporte un ou plusieurs joueurs à la position spécifiée.",
            "it-IT": "Teletrasporta uno o più Giocatori nella posizione specificata.",
            "ja-JP": "1人または複数のプレイヤーを特定の位置にテレポートする",
            "ko-KR": "플레이어를 지정 위치로 순간이동시킵니다.",
            "pl-PL": "Teleportuje jednego lub więcej graczy do określonej pozycji.",
            "pt-BR": "Teletransporta um ou mais Jogadores para a posição especificada.",
            "ru-RU": "Телепортирует одного или нескольких игроков в указанную точку.",
            "zh-CN": "将一名或多名玩家传送到指定位置。"
        }
    },
    "unpauseMatchTime": {
        "description": "Unpauses the match time.",
        "args": [],
        "guid": "00000000B9F0",
        "return": "void",
        "en-US": "Unpause Match Time",
        "es-MX": "Despausar tiempo de la partida",
        "fr-FR": "Reprendre le temps de jeu",
        "ja-JP": "マッチ時間のポーズを解除",
        "pt-BR": "Retomar Tempo da Partida",
        "zh-CN": "比赛时间继续",
        "descriptionLocalized": {
            "guid": "00000000BD33",
            "en-US": "Unpauses the match time.",
            "de-DE": "Hebt die Pausierung der Matchzeit auf.",
            "es-ES": "Reanuda el tiempo de partida.",
            "es-MX": "Despausa el tiempo de la partida.",
            "fr-FR": "Met fin à la pause du temps de jeu.",
            "it-IT": "Rimuove la pausa del tempo della partita.",
            "ja-JP": "マッチ時間のポーズを解除する",
            "ko-KR": "일시정지된 경기 시간을 재개합니다.",
            "pl-PL": "Wznawia czas meczu.",
            "pt-BR": "Retoma o tempo da partida.",
            "ru-RU": "Возобновляет отсчет времени матча.",
            "zh-CN": "取消比赛时间暂停。"
        }
    },
    "__wait__": {
        "guid": "000000007872",
        "description": "Pauses the execution of the action list. Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "args": [
            {
                "name": "TIME",
                "description": "The duration of the pause.",
                "type": "unsigned float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER"
            },
            {
                "name": "WAIT BEHAVIOR",
                "description": "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted. Otherwise, the condition list will determine if and when the action list will abort or restart.",
                "type": "Wait",
                "default": "IGNORE CONDITION"
            }
        ],
        "return": "void",
        "en-US": "Wait",
        "es-MX": "Esperar",
        "fr-FR": "Attente",
        "ja-JP": "待機",
        "pt-BR": "Esperar",
        "zh-CN": "等待",
        "descriptionLocalized": {
            "guid": "00000000BC66",
            "en-US": "Pauses the execution of the Action list. Unless the Wait is interrupted the remainder of the Actions will execute after the pause.",
            "de-DE": "Pausiert die Ausführung der Aktionsliste. Solange [Wait] nicht unterbrochen wird werden die restlichen Aktionen nach der Pause ausgeführt.",
            "es-ES": "Pausa la ejecución de la lista de acciones. A menos que se interrumpa «Wait» el resto de las acciones se ejecutará tras la pausa.",
            "es-MX": "Pausa la ejecución de la lista de acciones. A menos que se interrumpa la espera el resto de las acciones se ejecutará después de la pausa.",
            "fr-FR": "Met en pause l’exécution de la liste d’actions. À moins que l’attente soit interrompue le reste des actions sera exécuté après la pause.",
            "it-IT": "Mette in pausa l'esecuzione della lista di Azioni. Il resto delle Azioni sarà eseguito dopo la pausa a meno che l'Attesa non venga interrotta.",
            "ja-JP": "アクション・リストの実行を停止する待機が中断されない限り、一時停止を解除すると残りのアクションが実行される",
            "ko-KR": "액션 목록 실행을 일시정지합니다. Wait이 중지되지 않는 한 나머지 액션은 일시정지 해제 후 실행됩니다.",
            "pl-PL": "Pauzuje uruchomienie listy działań. Jeśli działanie „Wait” Czekaj nie zostanie przerwane pozostałe działania zostaną uruchomione po pauzie.",
            "pt-BR": "Pausa a execução da lista de Ações. A não ser que Esperar seja interrompido o restante das Ações será executado após a pausa.",
            "ru-RU": "Приостанавливает выполнение списка действий. Остальные действия будут выполнены после паузы если не будет прервано выполнение действия [Wait].",
            "zh-CN": "暂停执行动作列表。除非等待被中断，否则剩余的动作将在暂停之后执行。"
        }
    },
    "waitUntil": {
        "description": "Waits until the Continue Condition is true or Timeout seconds elapse. The rule conditions are ignored during this wait.",
        "args": [
            {
                "name": "CONTINUE CONDITION",
                "description": "If this value becomes true, the wait concludes, and the next action in the action list begins executing.",
                "type": "bool",
                "default": "false"
            },
            {
                "name": "TIMEOUT",
                "description": "If this many seconds elapse, the wait concludes, and the next action in the action list begins executing.",
                "type": "unsigned float",
                "default": "99999"
            }
        ],
        "return": "void",
        "guid": "0000000121C2",
        "en-US": "Wait Until",
        "es-MX": "Esperar hasta",
        "fr-FR": "Attendre jusqu’à",
        "ja-JP": "条件待機",
        "pt-BR": "Esperar até",
        "zh-CN": "等待直到 ",
        "descriptionLocalized": {
            "en-US": "Waits until the Continue Condition is true or Timeout seconds elapse. The rule conditions are ignored during this wait.",
            "guid": "<unknown guid>"
        }
    },
    "__while__": {
        "description": "Denotes the beginning of a series of actions that will execute in a loop as long as the specified condition is true. The next end action at the current level denotes the end of the loop. If the condition evaluates to false when execution is at the top of the loop, then the loop exits, and execution jumps to the next action after the end action.",
        "args": [
            {
                "name": "CONDITION",
                "description": "If this evaluates to true, execution continues with the next action. Otherwise, execution jumps to the next end action at the current level.",
                "type": "bool",
                "default": "COMPARE"
            }
        ],
        "guid": "00000000FB35",
        "return": "void",
        "en-US": "While",
        "es-MX": "Mientras",
        "fr-FR": "Tant que",
        "ja-JP": "WHILE",
        "descriptionLocalized": {
            "guid": "00000000FB3A",
            "en-US": "Denotes the beginning of a series of actions that will execute in a loop as long as the specified Condition is true. The next End action at the current level denotes the end of the loop. If the Condition evaluates to false when execution is at the top of the loop then the loop exits and execution jumps to the next action after the End action.",
            "de-DE": "Markiert den Beginn einer Reihe von Aktionen die in einer Schleife ausgeführt werden solange die festgelegte Bedingung True ist. Die nächste Aktion [End] auf der aktuellen Ebene markiert das Ende der Schleife. Wenn die Bedingung während der Ausführung am Anfang der Schleife False ist wird die Schleife beendet und die Ausführung springt zur nächsten Aktion nach der Aktion [End].",
            "es-ES": "Denota el comienzo de una serie de acciones que se ejecutarán en bucle mientras la condición especificada sea verdadera. La siguiente acción «End» del nivel actual denota el fin del bucle. Si la condición se evalúa como falsa cuando la ejecución está al principio del bucle se abandona el bucle y la ejecución salta a la siguiente acción tras la acción «End».",
            "es-MX": "Marca el inicio de una serie de acciones que se ejecutarán en bucle siempre y cuando la condición específica sea verdadera. La siguiente acción Fin del nivel actual marca el final del bucle. Si la condición resulta falsa cuando la ejecución se encuentra al principio del bucle el bucle finalizará y se ejecutará la siguiente acción posterior a la acción Fin.",
            "fr-FR": "Marque le début d’une série d’actions qui s’exécuteront dans une boucle tant que la condition spécifiée sera vraie. La prochaine action « Fin » au niveau actuel marque la fin de la boucle. Si la condition est évaluée comme fausse lorsque l’exécution est en haut de la boucle alors la boucle se fermera et l’exécution passera à l’action suivant l’action « Fin ».",
            "it-IT": "Indica l'inizio di una serie di azioni che vengono eseguite in ciclo finché la Condizione specificata è vera. L'azione End successiva al livello attuale indica il termine del ciclo. Se la Condizione risulta falsa quando l'esecuzione è in cima al ciclo il ciclo si chiude e l'esecuzione salta all'azione successiva dopo l'azione End.",
            "ja-JP": "指定した条件の判定結果が「TRUE」の場合に、後に続く一連のアクションをループさせ続ける。現在のレベルの次にくる「END」アクションでループを終わらせる。ループの頭で条件による判定が「FALSE」になった場合は、ループが終了して「END」アクションの後の次のアクションが実行される",
            "ko-KR": "명시된 조건이 참일 때만 반복되는 일련의 액션들이 시작됨을 의미합니다. 현재 레벨의 다음 End 액션은 반복의 끝을 의미합니다. 실행이 반복 최상에 위치할 때 조건이 거짓으로 확인되면 반복이 끝나고 End 액션 다음의 액션을 실행합니다.",
            "pl-PL": "Oznacza początek serii działań które zostaną wykonane w pętli o ile określony warunek jest prawdziwy. Następne działanie „End” Koniec na bieżącym poziomie oznacza koniec pętli. Jeśli warunek jest fałszywy gdy wykonanie jest na szczycie pętli to pętla kończy się a wykonanie przeskakuje do następnego działania po „End” Koniec.",
            "pt-BR": "Denota o início de uma série de ações que serão executadas em loop desde que a Condição especificada seja verdadeira. A próxima ação de Término do nível atual denota o fim do loop. Se a Condição for avaliada como falsa quando a execução estiver no topo do loop então o loop se encerrará e a execução saltará para a próxima ação após a ação de Término.",
            "ru-RU": "Обозначает начало серии действий которая будет выполняться в цикле до тех пор пока выполняется указанное условие. Следующее действие [End] на текущем уровне означает конец цикла. Если в начале цикла условие имеет значение [False] цикл завершается а затем выполняется следующее действие после [End].",
            "zh-CN": "表示只要指定的条件为真，就会在循环中执行的一系列行动的开始。 当前级别中的下一个End行动表示循环的结束。 如果执行至循环顶部时，条件评估为假，则退出循环，跳至End操作之后的下一个操作执行。"
        }
    }
}
//end-json
