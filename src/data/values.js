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

var valueFuncKw =
//begin-json
{
    "Vector.BACKWARD": {
        "guid": "00000000B11B",
        "description": "Shorthand for the directional vector(0, 0, -1), which points backward.",
        "args": null,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "signed int"
            ]
        },
        "canBePutInBoolean": false,
        "isConstant": true,
        "descriptionLocalized": {
            "guid": "00000000BE18",
            "en-US": "Shorthand for the directional Vector0 0 -1 which points backward.",
            "de-DE": "Stichwort für den Richtungsvektor 0 0 -1 der nach hinten zeigt.",
            "es-ES": "Forma abreviada del vector direccional 0 0 -1 que apunta hacia atrás.",
            "es-MX": "Notación para el vector direccional 0 0 -1 que apunta hacia atrás.",
            "fr-FR": "Abréviation du vecteur directionnel 0 0 -1 qui part vers l’arrière.",
            "it-IT": "Abbreviazione per il Vettore direzionale 0 0 -1 che punta verso indietro.",
            "ja-JP": "逆方向を示す方向ベクトル（0 0 -1）の省略表現",
            "ko-KR": "후방을 가리키는 방향 벡터0 0 -1의 약칭입니다.",
            "pl-PL": "Skrót od kierunkowego parametru „Vector0 0 -1” który wskazuje do tyłu.",
            "pt-BR": "Abreviação do Vetor direcional 0 0 -1 que aponta para trás.",
            "ru-RU": "Обозначение вектора направления 0 0 -1 направленного назад.",
            "zh-CN": "方向性矢量 00-1 的简写，此矢量指向后方。"
        },
        "en-US": "Backward",
        "es-MX": "Atrás",
        "fr-FR": "Arrière",
        "ja-JP": "後方",
        "pt-BR": "Para Trás",
        "zh-CN": "后"
    },
    "Vector.DOWN": {
        "guid": "00000000B119",
        "description": "Shorthand for the directional vector(0, -1, 0), which points downward.",
        "args": null,
        "return": {
            "Direction": [
                "unsigned int",
                "signed int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "isConstant": true,
        "descriptionLocalized": {
            "guid": "00000000BE1B",
            "en-US": "Shorthand for the directional Vector0 -1 0 which points downward.",
            "de-DE": "Stichwort für den Richtungsvektor 0 -1 0 der nach unten zeigt.",
            "es-ES": "Forma abreviada del vector direccional 0 -1 0 que apunta hacia abajo.",
            "es-MX": "Notación para el vector direccional 0 -1 0 que apunta hacia abajo.",
            "fr-FR": "Abréviation du vecteur directionnel 0 -1 0 qui part vers le bas.",
            "it-IT": "Abbreviazione per il Vettore direzionale 0 -1 0 che punta verso il basso.",
            "ja-JP": "下を示す方向ベクトル（0 -1 0）の省略表現",
            "ko-KR": "아래를 가리키는 방향 벡터0 -1 0의 약칭입니다.",
            "pl-PL": "Skrót od kierunkowego parametru „Vector0 -1 0” który wskazuje w dół.",
            "pt-BR": "Abreviação do Vetor direcional 0 -1 0 que aponta para baixo.",
            "ru-RU": "Обозначение вектора направления 0 -1 0 направленного вниз.",
            "zh-CN": "方向性矢量 0-10 的简写，此矢量指向下方。"
        },
        "en-US": "Down",
        "es-MX": "Abajo",
        "fr-FR": "Bas",
        "ja-JP": "下",
        "pt-BR": "Baixo",
        "zh-CN": "下"
    },
    "Vector.FORWARD": {
        "guid": "00000000B11A",
        "description": "Shorthand for the directional vector(0, 0, 1), which points forward.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "descriptionLocalized": {
            "guid": "00000000BE19",
            "en-US": "Shorthand for the directional Vector0 0 1 which points forward.",
            "de-DE": "Stichwort für den Richtungsvektor 0 0 1 der nach vorne zeigt.",
            "es-ES": "Forma abreviada del vector direccional 0 0 1 que apunta hacia delante.",
            "es-MX": "Notación para el vector direccional 0 0 1 que apunta hacia adelante.",
            "fr-FR": "Abréviation du vecteur directionnel 0 0 1 qui part vers l’avant.",
            "it-IT": "Abbreviazione per il Vettore direzionale 0 0 1 che punta verso avanti.",
            "ja-JP": "前方向を示す方向ベクトル（0 0 1）の省略表現",
            "ko-KR": "전방을 가리키는 방향 벡터0 0 1의 약칭입니다.",
            "pl-PL": "Skrót od kierunkowego parametru „Vector0 0 1” który wskazuje do przodu.",
            "pt-BR": "Abreviação do Vetor direcional 0 0 1 que aponta para a frente.",
            "ru-RU": "Обозначение вектора направления 0 0 1 направленного вперед.",
            "zh-CN": "方向性矢量 001 的简写，此矢量指向前方。"
        },
        "en-US": "Forward",
        "es-MX": "Adelante",
        "fr-FR": "Avant",
        "ja-JP": "前方向",
        "pt-BR": "Para a Frente",
        "zh-CN": "前"
    },
    "Vector.LEFT": {
        "guid": "00000000B116",
        "description": "Shorthand for the directional vector(1, 0, 0), which points to the left.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "descriptionLocalized": {
            "guid": "00000000BE17",
            "en-US": "Shorthand for the directional Vector1 0 0 which points to the left.",
            "de-DE": "Stichwort für den Richtungsvektor 1 0 0 der nach links zeigt.",
            "es-ES": "Forma abreviada del vector direccional 1 0 0 que apunta hacia la izquierda.",
            "es-MX": "Notación para el vector direccional 1 0 0 que apunta hacia la izquierda.",
            "fr-FR": "Abréviation du vecteur directionnel 1 0 0 qui part vers la gauche.",
            "it-IT": "Abbreviazione per il Vettore direzionale 1 0 0 che punta verso sinistra.",
            "ja-JP": "左を示す方向ベクトル（1 0 0）の省略表現",
            "ko-KR": "좌측을 가리키는 방향 벡터1 0 0의 약칭입니다.",
            "pl-PL": "Skrót od kierunkowego parametru „Vector1 0 0” który wskazuje w lewo.",
            "pt-BR": "Abreviação do Vetor direcional 1 0 0 que aponta para a esquerda.",
            "ru-RU": "Обозначение вектора направления 1 0 0 направленного влево.",
            "zh-CN": "方向性矢量 100 的简写，此矢量指向左方。"
        },
        "en-US": "Left",
        "es-MX": "Izquierda",
        "fr-FR": "Gauche",
        "ja-JP": "左",
        "pt-BR": "Esquerda",
        "zh-CN": "左"
    },
    "Vector.RIGHT": {
        "guid": "00000000B117",
        "description": "Shorthand for the directional vector(-1, 0, 0), which points to the right.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "signed int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "descriptionLocalized": {
            "guid": "00000000BE1D",
            "en-US": "Shorthand for the directional Vector-1 0 0 which points to the right.",
            "de-DE": "Stichwort für den Richtungsvektor -1 0 0 der nach rechts zeigt.",
            "es-ES": "Forma abreviada del vector direccional -1 0 0 que apunta hacia la derecha.",
            "es-MX": "Notación para el vector direccional -1 0 0 que apunta hacia la derecha.",
            "fr-FR": "Abréviation du vecteur directionnel -1 0 0 qui part vers la droite.",
            "it-IT": "Abbreviazione per il Vettore direzionale -1 0 0 che punta verso destra.",
            "ja-JP": "右を示す方向ベクトル（-1 0 0）の省略表現",
            "ko-KR": "우측을 가리키는 방향 벡터-1 0 0의 약칭입니다.",
            "pl-PL": "Skrót od kierunkowego parametru „Vector-1 0 0” który wskazuje w prawo.",
            "pt-BR": "Abreviação do Vetor direcional -1 0 0 que aponta para a direita.",
            "ru-RU": "Обозначение вектора направления -1 0 0 направленного вправо.",
            "zh-CN": "方向性矢量 -100 的简写，此矢量指向右方。"
        },
        "en-US": "Right",
        "es-MX": "Derecha",
        "fr-FR": "Droite",
        "ja-JP": "右",
        "pt-BR": "Direita",
        "zh-CN": "右"
    },
    "Vector.UP": {
        "guid": "00000000B118",
        "description": "Shorthand for the directional vector(0, 1, 0), which points upward.",
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "descriptionLocalized": {
            "guid": "00000000BE1C",
            "en-US": "Shorthand for the directional Vector0 1 0 which points upward.",
            "de-DE": "Stichwort für den Richtungsvektor 0 1 0 der nach oben zeigt.",
            "es-ES": "Forma abreviada del vector direccional 0 1 0 que apunta hacia arriba.",
            "es-MX": "Notación para el vector direccional 0 1 0 que apunta hacia arriba.",
            "fr-FR": "Abréviation du vecteur directionnel 0 1 0 qui part vers le haut.",
            "it-IT": "Abbreviazione per il Vettore direzionale 0 1 0 che punta verso l'alto.",
            "ja-JP": "上を示す方向ベクトル（0 1 0）の省略表現",
            "ko-KR": "위를 가리키는 방향 벡터0 1 0의 약칭입니다.",
            "pl-PL": "Skrót od kierunkowego parametru „Vector0 1 0” który wskazuje w górę.",
            "pt-BR": "Abreviação do Vetor direcional 0 1 0 que aponta para cima.",
            "ru-RU": "Обозначение вектора направления 0 1 0 направленного вверх.",
            "zh-CN": "方向性矢量 010 的简写，此矢量指向上方。"
        },
        "en-US": "Up",
        "es-MX": "Arriba",
        "fr-FR": "Haut",
        "ja-JP": "上",
        "pt-BR": "Cima",
        "zh-CN": "上"
    },
    "_&getAbilityCharge": {
        "description": "The ability charge count for a player associated by button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "0000000109BC",
                    "en-US": "The Player whose ability to check.",
                    "de-DE": "Der Spieler dessen Fähigkeit geprüft werden soll.",
                    "es-ES": "Jugador cuya habilidad se comprueba.",
                    "es-MX": "El jugador cuya habilidad se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier la capacité.",
                    "it-IT": "Il Giocatore la cui abilità sarà controllata.",
                    "ja-JP": "アビリティをチェックするプレイヤー",
                    "ko-KR": "기술을 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego zdolność zostanie sprawdzona.",
                    "pt-BR": "O Jogador cuja Habilidade será verificada.",
                    "ru-RU": "Игрок к способности которого применяется проверка.",
                    "zh-CN": "检测此玩家的技能状态。"
                }
            },
            {
                "name": "BUTTON",
                "description": "The ability to check associated by button.",
                "type": "Button",
                "default": "BUTTON",
                "descriptionLocalized": {
                    "guid": "0000000109BD",
                    "en-US": "The ability to check associated by button.",
                    "de-DE": "Die per Taste zugeordnete zu prüfende Fähigkeit.",
                    "es-ES": "Habilidad que se comprueba asociada por botón.",
                    "es-MX": "La habilidad que se verificará asociada por botón",
                    "fr-FR": "La capacité à vérifier associée à un bouton.",
                    "it-IT": "L'abilità da controllare associata al tasto.",
                    "ja-JP": "チェックするボタンに割り当てられたアビリティ",
                    "ko-KR": "버튼으로 확인할 기술입니다.",
                    "pl-PL": "Zdolność która zostanie sprawdzona; powiązana z przyciskiem.",
                    "pt-BR": "A habilidade a ser verificada associada por botão.",
                    "ru-RU": "Проверяемая способность сопоставленная с кнопкой.",
                    "zh-CN": "检测此按键对应的技能状态。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "000000011216",
        "descriptionLocalized": {
            "guid": "000000011217",
            "en-US": "The ability charge count for a Player associated by button.",
            "de-DE": "Die Aufladung der per Taste zugeordneten Fähigkeit für einen Spieler.",
            "es-ES": "La cuenta de cargas de habilidad para un jugador asociada por botón.",
            "es-MX": "El conteo de carga de habilidad para un jugador asociado por botón.",
            "fr-FR": "La charge de la capacité pour un joueur associée à un bouton.",
            "it-IT": "Il conteggio delle cariche delle abilità per un Giocatore associato al tasto.",
            "ja-JP": "プレイヤーのボタンに割り当てられたアビリティのチャージの数",
            "ko-KR": "버튼으로 확인할 플레이어의 기술 충전 횟수입니다.",
            "pl-PL": "Liczba ładunków zdolności dla gracza powiązanego z przyciskiem.",
            "pt-BR": "O número de cargas da habilidade de um Jogador associado por botão.",
            "ru-RU": "Сопоставленное с кнопкой число зарядов способности игрока.",
            "zh-CN": "一名玩家指定按键对应技能的充能次数。"
        },
        "en-US": "Ability Charge",
        "es-MX": "Carga de habilidad",
        "fr-FR": "Charge de la capacité",
        "ja-JP": "アビリティのチャージ",
        "pt-BR": "Cargas de Habilidade",
        "zh-CN": "技能充能"
    },
    "_&getAbilityCooldown": {
        "description": "The ability cooldown time in seconds for a player associated by button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "0000000109BC",
                    "en-US": "The Player whose ability to check.",
                    "de-DE": "Der Spieler dessen Fähigkeit geprüft werden soll.",
                    "es-ES": "Jugador cuya habilidad se comprueba.",
                    "es-MX": "El jugador cuya habilidad se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier la capacité.",
                    "it-IT": "Il Giocatore la cui abilità sarà controllata.",
                    "ja-JP": "アビリティをチェックするプレイヤー",
                    "ko-KR": "기술을 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego zdolność zostanie sprawdzona.",
                    "pt-BR": "O Jogador cuja Habilidade será verificada.",
                    "ru-RU": "Игрок к способности которого применяется проверка.",
                    "zh-CN": "检测此玩家的技能状态。"
                }
            },
            {
                "name": "BUTTON",
                "description": "The ability to check associated by button.",
                "type": "Button",
                "default": "BUTTON",
                "descriptionLocalized": {
                    "guid": "0000000109BD",
                    "en-US": "The ability to check associated by button.",
                    "de-DE": "Die per Taste zugeordnete zu prüfende Fähigkeit.",
                    "es-ES": "Habilidad que se comprueba asociada por botón.",
                    "es-MX": "La habilidad que se verificará asociada por botón",
                    "fr-FR": "La capacité à vérifier associée à un bouton.",
                    "it-IT": "L'abilità da controllare associata al tasto.",
                    "ja-JP": "チェックするボタンに割り当てられたアビリティ",
                    "ko-KR": "버튼으로 확인할 기술입니다.",
                    "pl-PL": "Zdolność która zostanie sprawdzona; powiązana z przyciskiem.",
                    "pt-BR": "A habilidade a ser verificada associada por botão.",
                    "ru-RU": "Проверяемая способность сопоставленная с кнопкой.",
                    "zh-CN": "检测此按键对应的技能状态。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "0000000109B3",
        "descriptionLocalized": {
            "guid": "0000000109B4",
            "en-US": "The ability cooldown time in seconds for a Player associated by button.",
            "de-DE": "Die Abklingzeit der per Taste zugeordneten Fähigkeit in Sekunden für einen Spieler.",
            "es-ES": "El tiempo de reutilización de habilidad en segundos para un jugador asociado por botón.",
            "es-MX": "El tiempo de reutilización de habilidad en segundos para un jugador asociado por botón.",
            "fr-FR": "Le temps de recharge en secondes de la capacité pour un joueur associée à un bouton.",
            "it-IT": "Il tempo di recupero delle abilità in secondi per un Giocatore associato al tasto.",
            "ja-JP": "ボタンに割り当てられたプレイヤーのアビリティの秒単位のクールダウン時間",
            "ko-KR": "버튼으로 확인할 플레이어의 기술 재사용 대기시간초입니다.",
            "pl-PL": "Czas odnowienia zdolności w sekundach dla gracza powiązanego z przyciskiem.",
            "pt-BR": "O tempo de recarga da habilidade em segundos para o Jogador associado por botão.",
            "ru-RU": "Время восстановления сопоставленной с кнопкой способности игрока в секундах.",
            "zh-CN": "一名玩家指定按键对应技能的冷却时间，以秒为单位。"
        },
        "en-US": "Ability Cooldown",
        "es-MX": "Reutilización de habilidad",
        "fr-FR": "Temps de recharge de la capacité",
        "ja-JP": "アビリティのクールダウン",
        "pt-BR": "Tempo de Recarga da Habilidade",
        "zh-CN": "技能冷却时间"
    },
    "_&getAbilityResource": {
        "description": "The ability resource percent for a player associated by button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "0000000109BC",
                    "en-US": "The Player whose ability to check.",
                    "de-DE": "Der Spieler dessen Fähigkeit geprüft werden soll.",
                    "es-ES": "Jugador cuya habilidad se comprueba.",
                    "es-MX": "El jugador cuya habilidad se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier la capacité.",
                    "it-IT": "Il Giocatore la cui abilità sarà controllata.",
                    "ja-JP": "アビリティをチェックするプレイヤー",
                    "ko-KR": "기술을 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego zdolność zostanie sprawdzona.",
                    "pt-BR": "O Jogador cuja Habilidade será verificada.",
                    "ru-RU": "Игрок к способности которого применяется проверка.",
                    "zh-CN": "检测此玩家的技能状态。"
                }
            },
            {
                "name": "BUTTON",
                "description": "The ability to check associated by button.",
                "type": "Button",
                "default": "BUTTON",
                "descriptionLocalized": {
                    "guid": "0000000109BD",
                    "en-US": "The ability to check associated by button.",
                    "de-DE": "Die per Taste zugeordnete zu prüfende Fähigkeit.",
                    "es-ES": "Habilidad que se comprueba asociada por botón.",
                    "es-MX": "La habilidad que se verificará asociada por botón",
                    "fr-FR": "La capacité à vérifier associée à un bouton.",
                    "it-IT": "L'abilità da controllare associata al tasto.",
                    "ja-JP": "チェックするボタンに割り当てられたアビリティ",
                    "ko-KR": "버튼으로 확인할 기술입니다.",
                    "pl-PL": "Zdolność która zostanie sprawdzona; powiązana z przyciskiem.",
                    "pt-BR": "A habilidade a ser verificada associada por botão.",
                    "ru-RU": "Проверяемая способность сопоставленная с кнопкой.",
                    "zh-CN": "检测此按键对应的技能状态。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "000000011218",
        "descriptionLocalized": {
            "guid": "000000011219",
            "en-US": "The ability resource percent for a Player associated by button.",
            "de-DE": "Der Ressourcenprozentsatz der per Taste zugeordneten Fähigkeit für einen Spieler.",
            "es-ES": "El porcentaje de recursos de habilidad para un jugador asociado por botón.",
            "es-MX": "El porcentaje de recurso de habilidad para un jugador asociado por botón.",
            "fr-FR": "Le pourcentage de ressource de la capacité pour un joueur associée à un bouton.",
            "it-IT": "La percentuale di risorse delle abilità per un Giocatore associata al tasto.",
            "ja-JP": "プレイヤーのボタンに割り当てられたアビリティのリソースのパーセンテージ",
            "ko-KR": "버튼으로 확인할 플레이어의 기술 리소스 비율입니다.",
            "pl-PL": "Procent zasobu zdolności dla gracza powiązanego z przyciskiem.",
            "pt-BR": "A porcentagem de recurso de habilidade de um Jogador associada por botão.",
            "ru-RU": "Сопоставленный с кнопкой процент ресурса способности игрока.",
            "zh-CN": "一名玩家指定按键对应技能的资源百分比。"
        },
        "en-US": "Ability Resource",
        "es-MX": "Recurso de habilidad",
        "fr-FR": "Ressource de la capacité",
        "ja-JP": "アビリティのリソース",
        "pt-BR": "Recurso de Habilidade",
        "zh-CN": "技能资源"
    },
    "_&getAllowedHeroes": {
        "description": "The array of heroes from which the specified player is currently allowed to select.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose allowed heroes to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF4F",
                    "en-US": "The Player whose allowed Heroes to acquire.",
                    "de-DE": "Der Spieler dessen erlaubte Helden abgerufen werden sollen.",
                    "es-ES": "Jugador cuyos héroes permitidos se adquieren.",
                    "es-MX": "El jugador cuyos héroes permitidos se adquirirán.",
                    "fr-FR": "Le joueur dont il faut acquérir les héros autorisés.",
                    "it-IT": "Il Giocatore i cui Eroi permessi saranno acquisiti.",
                    "ja-JP": "選択可能ヒーローを取得するプレイヤー",
                    "ko-KR": "이 플레이어가 선택할 수 있는 영웅 목록을 가져옵니다.",
                    "pl-PL": "Gracz którego dozwolonych bohaterów należy pozyskać.",
                    "pt-BR": "O Jogador cujos Heróis permitidos serão adquiridos.",
                    "ru-RU": "Игрок список открытых героев которого нужно получить.",
                    "zh-CN": "获取此玩家可用的英雄。"
                }
            }
        ],
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000BBA8",
        "descriptionLocalized": {
            "guid": "00000000BF4E",
            "en-US": "The array of Heroes from which the specified Player is currently allowed to select.",
            "de-DE": "Das Array der Helden aus denen der festgelegte Spieler aktuell wählen kann.",
            "es-ES": "Matriz de héroes entre los que el jugador especificado tiene permiso para escoger actualmente.",
            "es-MX": "La matriz de héroes que el jugador especificado tiene permiso para seleccionar actualmente.",
            "fr-FR": "Le tableau de héros dans lequel le joueur spécifié est actuellement autorisé à effectuer sa sélection.",
            "it-IT": "L'array di Eroi dal quale il Giocatore specificato è attualmente autorizzato a scegliere.",
            "ja-JP": "指定したプレイヤーが選択できるヒーローの配列",
            "ko-KR": "지정된 플레이어가 선택할 수 있는 영웅 배열입니다.",
            "pl-PL": "Tabela bohaterów z której określony gracz może wybrać bohatera.",
            "pt-BR": "A matriz de Heróis da qual o Jogador especificado tem permissão para selecionar no momento.",
            "ru-RU": "Массив героев доступных указанному игроку в данный момент.",
            "zh-CN": "此数组中包括指定玩家当前可以选择的英雄。"
        },
        "en-US": "Allowed Heroes",
        "es-MX": "Héroes permitidos",
        "fr-FR": "Héros autorisés",
        "ja-JP": "許可されたヒーロー",
        "pt-BR": "Heróis Permitidos",
        "zh-CN": "可用英雄"
    },
    "_&getAltitude": {
        "description": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose altitude to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE25",
                    "en-US": "The Player whose altitude to acquire.",
                    "de-DE": "Der Spieler dessen Höhe abgerufen werden soll.",
                    "es-ES": "Jugador cuya altitud se adquiere.",
                    "es-MX": "El jugador cuya altura se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir l’altitude.",
                    "it-IT": "Il Giocatore la cui altitudine sarà acquisita.",
                    "ja-JP": "高度を取得するプレイヤー",
                    "ko-KR": "고도 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego wysokość należy pozyskać.",
                    "pt-BR": "O Jogador cuja altitude será adquirida.",
                    "ru-RU": "Игрок высоту нахождения которого нужно определить.",
                    "zh-CN": "获取此玩家的高度。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B11D",
        "descriptionLocalized": {
            "guid": "00000000BE26",
            "en-US": "The Player's current height in meters above a surface. Results in 0 whenever the Player is on a surface.",
            "de-DE": "Die aktuelle Höhe eines Spielers über einer Oberfläche in Metern. Ergibt 0 wenn sich der Spieler auf einer Oberfläche befindet.",
            "es-ES": "Altura actual del jugador en metros por encima de una superficie. El resultado es «0» si el jugador está sobre una superficie.",
            "es-MX": "La altura actual del jugador en metros sobre una superficie. El resultado será 0 si el jugador está en una superficie.",
            "fr-FR": "La hauteur en mètres actuelle d’un joueur au-dessus d’une surface. Le résultat est égal à 0 si le joueur se trouve sur une surface.",
            "it-IT": "L'altitudine attuale del Giocatore in metri dalla superficie. Risulta 0 se il Giocatore si trova sulla superficie.",
            "ja-JP": "プレイヤーの、表面に対する現在の高度（メートル）。プレイヤーが表面の上にいるときは0を返す",
            "ko-KR": "표면으로부터 측정한 플레이어의 높이미터입니다. 플레이어가 표면에 있으면 0입니다.",
            "pl-PL": "Bieżąca wysokość gracza w metrach nad powierzchnią. Wynikiem jest 0 kiedy gracz znajduje się na powierzchni.",
            "pt-BR": "A altura atual do Jogador em metros acima de uma superfície. Retorna o resultado 0 sempre que o Jogador estiver em uma superfície.",
            "ru-RU": "Высота нахождения игрока в данный момент считая от поверхности метры. Если игрок стоит на поверхности возвращает значение 0.",
            "zh-CN": "玩家当前距离表面的高度，以米为单位。如果玩家正在表面上则结果为0。"
        },
        "en-US": "Altitude Of",
        "es-MX": "Altitud de",
        "fr-FR": "Altitude de",
        "ja-JP": "高度: ",
        "pt-BR": "Altitude de",
        "zh-CN": "高度"
    },
    "_&getAmmo": {
        "description": "The current ammo of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ammo to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "0000000110ED",
                    "en-US": "The Player whose ammo to acquire.",
                    "de-DE": "Der Spieler dessen Munition abgerufen werden soll.",
                    "es-ES": "Jugador cuya munición se adquiere.",
                    "es-MX": "El jugador cuya munición se adquirirá.",
                    "fr-FR": "Le joueur dont les munitions seront appelées.",
                    "it-IT": "Il Giocatore le cui munizioni saranno acquisite.",
                    "ja-JP": "弾薬数を取得するプレイヤー",
                    "ko-KR": "탄약 수 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego amunicję należy pozyskać.",
                    "pt-BR": "O Jogador cuja munição será adquirida.",
                    "ru-RU": "Игрок у которого нужно определить количество боеприпасов.",
                    "zh-CN": "获取此玩家的弹药数量。"
                }
            },
            {
                "name": "CLIP",
                "description": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0,
                "descriptionLocalized": {
                    "en-US": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "0000000110E8",
        "descriptionLocalized": {
            "guid": "0000000110E9",
            "en-US": "The current ammo of a Player.",
            "de-DE": "Die aktuelle Munition eines Spielers.",
            "es-ES": "Munición actual de un jugador.",
            "es-MX": "La munición actual de un jugador.",
            "fr-FR": "Les munitions actuelles d’un joueur.",
            "it-IT": "Le attuali munizioni di un Giocatore.",
            "ja-JP": "プレイヤーの現在の弾薬数",
            "ko-KR": "플레이어의 현재 탄약 수입니다.",
            "pl-PL": "Bieżąca amunicja gracza.",
            "pt-BR": "A munição atual de um Jogador.",
            "ru-RU": "Текущее количество боеприпасов игрока.",
            "zh-CN": "一名玩家当前的弹药数量。"
        },
        "en-US": "Ammo",
        "es-ES": "Munición",
        "es-MX": "Munición",
        "fr-FR": "Munitions",
        "ja-JP": "弾薬数",
        "pt-BR": "Munição",
        "zh-CN": "弹药"
    },
    "_&getCurrentHero": {
        "description": "The current hero of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose hero to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BDFA",
                    "en-US": "The Player whose Hero to acquire.",
                    "de-DE": "Der Spieler dessen Held abgerufen werden soll.",
                    "es-ES": "Jugador cuyo héroe se adquiere.",
                    "es-MX": "El jugador cuyo héroe se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le héros.",
                    "it-IT": "Il Giocatore il cui Eroe sarà acquisito.",
                    "ja-JP": "ヒーローを取得するプレイヤー",
                    "ko-KR": "영웅 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego bohatera należy pozyskać.",
                    "pt-BR": "O Jogador cujo Herói será adquirido.",
                    "ru-RU": "Игрок героя которого нужно узнать.",
                    "zh-CN": "获取此玩家的英雄。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Hero",
        "guid": "00000000ACA9",
        "descriptionLocalized": {
            "guid": "00000000BDF9",
            "en-US": "The current Hero of a Player.",
            "de-DE": "Der aktuelle Held eines Spielers.",
            "es-ES": "Héroe actual de un jugador.",
            "es-MX": "El héroe actual de un jugador.",
            "fr-FR": "Le héros actuel d’un joueur.",
            "it-IT": "L'attuale Eroe di un Giocatore.",
            "ja-JP": "プレイヤーの現在のヒーロー",
            "ko-KR": "플레이어가 현재 사용하는 영웅입니다.",
            "pl-PL": "Bieżący bohater gracza.",
            "pt-BR": "O Herói atual de um Jogador.",
            "ru-RU": "Герой игрока в данный момент.",
            "zh-CN": "一名玩家当前的英雄。"
        },
        "en-US": "Hero Of",
        "es-MX": "Héroe de",
        "fr-FR": "Héros de",
        "ja-JP": "ヒーロー: ",
        "pt-BR": "Herói de",
        "zh-CN": "所用英雄"
    },
    "_&getCurrentWeapon": {
        "description": "The currently held weapon of a player. Returns 2 for Baby Dva's gun, Torbjorn's hammer, and Mercy's pistol; 1 otherwise.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose weapon to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000001105B",
                    "en-US": "The Player whose weapon to acquire.",
                    "de-DE": "Der Spieler dessen Waffe abgerufen werden soll.",
                    "es-ES": "Jugador cuya arma se adquiere.",
                    "es-MX": "El jugador cuya arma se adquirirá.",
                    "fr-FR": "Le joueur dont l’arme sera appelée.",
                    "it-IT": "Il Giocatore la cui arma sarà acquisita.",
                    "ja-JP": "武器を取得するプレイヤー",
                    "ko-KR": "무기 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego broń należy pozyskać.",
                    "pt-BR": "O Jogador cuja arma será adquirida.",
                    "ru-RU": "Игрок данные об оружии которого нужно получить.",
                    "zh-CN": "获取此玩家的武器。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "000000011059",
        "en-US": "Weapon",
        "es-MX": "Arma",
        "fr-FR": "Arme",
        "ja-JP": "武器",
        "pt-BR": "Arma",
        "zh-CN": "武器"
    },
    "_&getEyePosition": {
        "guid": "00000000C595",
        "description": "The position of a player's first person view (used for aiming)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The position of a player's first person view (used for aiming)",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C596",
                    "en-US": "The position of a Player's first person view used for aiming",
                    "de-DE": "Die Position der Egoperspektive des Spielers wird zum Zielen genutzt.",
                    "es-ES": "La posición de la vista en primera persona de un jugador se utiliza para apuntar.",
                    "es-MX": "La posición de una vista en primera persona del jugador utilizada para apuntar",
                    "fr-FR": "La position de la vue subjective d’un joueur utilisée pour la visée",
                    "it-IT": "La posizione della visuale in soggettiva del Giocatore usata per mirare.",
                    "ja-JP": "プレイヤーの一人称視点の位置（照準に使用）",
                    "ko-KR": "조준에 쓰인 플레이어의 1인칭 시점 위치입니다.",
                    "pl-PL": "Pozycja kamery pierwszoosobowej gracza do celowania",
                    "pt-BR": "A posição da visão em primeira pessoa do Jogador usada para mira.",
                    "ru-RU": "Местоположение вида игрока от первого лица используется для прицеливания.",
                    "zh-CN": "玩家第一人称视角的位置（用于瞄准）"
                }
            }
        ],
        "return": "Position",
        "canBePutInBoolean": false,
        "descriptionLocalized": {
            "guid": "00000000C596",
            "en-US": "The position of a Player's first person view used for aiming",
            "de-DE": "Die Position der Egoperspektive des Spielers wird zum Zielen genutzt.",
            "es-ES": "La posición de la vista en primera persona de un jugador se utiliza para apuntar.",
            "es-MX": "La posición de una vista en primera persona del jugador utilizada para apuntar",
            "fr-FR": "La position de la vue subjective d’un joueur utilisée pour la visée",
            "it-IT": "La posizione della visuale in soggettiva del Giocatore usata per mirare.",
            "ja-JP": "プレイヤーの一人称視点の位置（照準に使用）",
            "ko-KR": "조준에 쓰인 플레이어의 1인칭 시점 위치입니다.",
            "pl-PL": "Pozycja kamery pierwszoosobowej gracza do celowania",
            "pt-BR": "A posição da visão em primeira pessoa do Jogador usada para mira.",
            "ru-RU": "Местоположение вида игрока от первого лица используется для прицеливания.",
            "zh-CN": "玩家第一人称视角的位置（用于瞄准）"
        },
        "en-US": "Eye Position",
        "es-MX": "Posición de la vista",
        "fr-FR": "Position des yeux",
        "ja-JP": "目の位置",
        "pt-BR": "Posição do Olho",
        "zh-CN": "眼睛位置"
    },
    "_&getFacingDirection": {
        "description": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose facing direction to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEB9",
                    "en-US": "The Player whose facing direction to acquire.",
                    "de-DE": "Der Spieler dessen Blickrichtung abgerufen werden soll.",
                    "es-ES": "Jugador cuya dirección de orientación se adquiere.",
                    "es-MX": "El jugador cuya dirección de orientación se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir l’orientation.",
                    "it-IT": "Il Giocatore la cui direzione di osservazione sarà acquisita.",
                    "ja-JP": "向いている方向を取得するプレイヤー",
                    "ko-KR": "바라보는 방향 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego kierunek ustawienia należy pozyskać.",
                    "pt-BR": "O Jogador cuja direção frontal será adquirida.",
                    "ru-RU": "Игрок направление взгляда которого нужно получить.",
                    "zh-CN": "获取此玩家面向的方向 。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B281",
        "descriptionLocalized": {
            "guid": "00000000BEB8",
            "en-US": "The unit-length directional Vector of a Player's current facing relative to the world. This Value includes both horizontal and vertical facing.",
            "de-DE": "Der normierte Richtungsvektor der aktuellen Blickrichtung eines Spielers relativ zur Welt. Dieser Wert beinhaltet sowohl die horizontale als auch die vertikale Blickrichtung.",
            "es-ES": "Vector direccional de longitud de unidad de la orientación actual de un jugador respecto al mundo. Este valor incluye tanto la orientación horizontal como la vertical.",
            "es-MX": "El vector direccional unitario de la orientación actual de un jugador con relación al mundo. Este valor incluye la orientación horizontal y vertical.",
            "fr-FR": "Le vecteur directionnel de longueur égale à une unité de l’orientation actuelle d’un joueur par rapport au monde. Cette valeur comprend à la fois l’orientation horizontale et verticale.",
            "it-IT": "Il Vettore direzionale di lunghezza unitaria dell'attuale direzione di osservazione di un Giocatore relativa al mondo di gioco. Questo Valore include sia l'osservazione orizzontale sia quella verticale.",
            "ja-JP": "ワールドに対してのプレイヤーの向きを表す、単位長さの方向ベクトル。この値には水平面および垂直面の両方が含まれる",
            "ko-KR": "월드에 대해 상대적으로 플레이어가 바라보고 있는 방향의 상대적인 단위 길이 방향 벡터입니다. 이 값에는 종 및 횡 방향이 있습니다.",
            "pl-PL": "Jednostkowy wektor kierunkowy skierowania gracza względem świata. Wartość ta obejmuje ustawienie pionowe oraz poziome.",
            "pt-BR": "O Vetor direcional unitário da direção para a qual um Jogador está virado em relação ao mundo. Este Valor inclui direção horizontal e vertical.",
            "ru-RU": "Вектор длиной в одну единицу обозначающий направление взгляда игрока в игровом мире. Это значение содержит как вертикальный так и горизонтальный компоненты.",
            "zh-CN": "玩家当前面向方向与地图相对角度的单位长度方向矢量。此矢量的值同进包括水平和垂直方向。"
        },
        "en-US": "Facing Direction Of",
        "es-MX": "Dirección de orientación de",
        "fr-FR": "Regard en direction de",
        "ja-JP": "プレイヤーが向いている方向: ",
        "pt-BR": "Direção Frontal de",
        "zh-CN": "面朝方向"
    },
    "_&getHealth": {
        "guid": "0000000081C2",
        "description": "The current health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BDEE",
                    "en-US": "The Player whose health to acquire.",
                    "de-DE": "Der Spieler dessen Trefferpunkte abgerufen werden sollen.",
                    "es-ES": "Jugador cuya salud se adquiere.",
                    "es-MX": "El jugador cuya salud se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les points de vie.",
                    "it-IT": "Il Giocatore la cui salute sarà acquisita.",
                    "ja-JP": "ライフを取得するプレイヤー",
                    "ko-KR": "생명력 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego zdrowie należy pozyskać.",
                    "pt-BR": "O Jogador cuja vida será adquirida.",
                    "ru-RU": "Игрок запас здоровья которого нужно узнать.",
                    "zh-CN": "获取此玩家的生命值。"
                }
            }
        ],
        "return": "unsigned float",
        "descriptionLocalized": {
            "guid": "00000000BDED",
            "en-US": "The current health of a Player including armor and shields.",
            "de-DE": "Die aktuellen Trefferpunkte eines Spielers einschließlich Rüstung und Schilden.",
            "es-ES": "Salud actual de un jugador incluidos la armadura y los escudos.",
            "es-MX": "La salud actual de un jugador incluye armadura y escudos.",
            "fr-FR": "Les points de vie actuels d’un joueur y compris l’armure et les boucliers.",
            "it-IT": "La salute attuale di un Giocatore inclusi armatura e scudi.",
            "ja-JP": "現在のプレイヤーのライフ（アーマーとシールドを含む）",
            "ko-KR": "한 플레이어의 현재 생명력방어력 및 보호막 포함입니다.",
            "pl-PL": "Bieżące zdrowie gracza wliczając pancerz i osłony.",
            "pt-BR": "A vida atual de um Jogador incluindo armadura e escudos.",
            "ru-RU": "Здоровье игрока в данный момент включая броню и щит.",
            "zh-CN": "玩家当前的生命值，包括护甲和护盾。"
        },
        "en-US": "Health",
        "es-MX": "Salud",
        "fr-FR": "Points de vie",
        "ja-JP": "ライフ",
        "pt-BR": "Vida",
        "zh-CN": "生命值"
    },
    "_&getHealthOfType": {
        "description": "The current health of the specified player, filtered by the given health type.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BDEE",
                    "en-US": "The Player whose health to acquire.",
                    "de-DE": "Der Spieler dessen Trefferpunkte abgerufen werden sollen.",
                    "es-ES": "Jugador cuya salud se adquiere.",
                    "es-MX": "El jugador cuya salud se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les points de vie.",
                    "it-IT": "Il Giocatore la cui salute sarà acquisita.",
                    "ja-JP": "ライフを取得するプレイヤー",
                    "ko-KR": "생명력 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego zdrowie należy pozyskać.",
                    "pt-BR": "O Jogador cuja vida será adquirida.",
                    "ru-RU": "Игрок запас здоровья которого нужно узнать.",
                    "zh-CN": "获取此玩家的生命值。"
                }
            },
            {
                "name": "HEALTH",
                "description": "The type of health to acquire.",
                "type": "Health",
                "default": "HEALTH",
                "descriptionLocalized": {
                    "guid": "00000001144C",
                    "en-US": "The type of health to acquire.",
                    "de-DE": "Der Typ der Trefferpunkte die abgerufen werden sollen.",
                    "es-ES": "Tipo de salud que se adquiere.",
                    "es-MX": "El tipo de salud que se adquirirá.",
                    "fr-FR": "Le type de points de vie à acquérir.",
                    "it-IT": "Il tipo di salute che sarà acquisita.",
                    "ja-JP": "取得するライフの種類",
                    "ko-KR": "가져올 생명력의 유형입니다.",
                    "pl-PL": "Typ zdrowia do pozyskania.",
                    "pt-BR": "O tipo de vida que será adquirido.",
                    "ru-RU": "Тип запаса здоровья который нужно определить.",
                    "zh-CN": "获取此类型的生命值。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "000000011448",
        "en-US": "Health Of Type",
        "es-MX": "Salud según tipo",
        "fr-FR": "Points de vie par type",
        "ja-JP": "タイプごとのライフ",
        "pt-BR": "Vida do Tipo",
        "zh-CN": "类型的生命值"
    },
    "_&getHeroOfDuplication": {
        "description": "The hero currently being duplicated by the specified player. If no hero is being duplicated, the resulting value is 0.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player performing the duplication.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "000000010E6D",
                    "en-US": "The Player performing the duplication.",
                    "de-DE": "Der Spieler der die Duplikation durchführt.",
                    "es-ES": "Jugador que realiza la duplicación.",
                    "es-MX": "El jugador que realiza la copia.",
                    "fr-FR": "Le joueur qui effectue la duplication.",
                    "it-IT": "Il Giocatore che esegue la Duplicazione.",
                    "ja-JP": "コピーを行っているプレイヤー",
                    "ko-KR": "복제를 실행 중인 플레이어입니다.",
                    "pl-PL": "Gracz wykonujący duplikację.",
                    "pt-BR": "O Jogador realizando a duplicação.",
                    "ru-RU": "Игрок использующий «Дубликацию».",
                    "zh-CN": "正在施展人格复制的玩家。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Hero",
        "guid": "000000010E6A",
        "descriptionLocalized": {
            "guid": "000000010E6B",
            "en-US": "The hero currently being duplicated by the specified Player. If no hero is being duplicated the resulting value is 0.",
            "de-DE": "Der Held der gerade vom festgelegten Spieler dupliziert wird. Wenn kein Held dupliziert wird ist der Wert 0.",
            "es-ES": "Héroe que el jugador especificado está duplicando actualmente. Si no se está duplicando ningún héroe el valor resultante es 0.",
            "es-MX": "El héroe que está siendo copiado por el jugador especificado. Si no hay un héroe copiado el valor resultante es 0.",
            "fr-FR": "Le héros actuellement dupliqué par le joueur spécifié. Si aucun héros n’est dupliqué la valeur résultante est 0.",
            "it-IT": "L'eroe che sta subendo la Duplicazione da parte del Giocatore specificato. Se nessun eroe sta subendo la Duplicazione il valore risultante è 0.",
            "ja-JP": "指定のプレイヤーに現在コピーされているヒーロー。誰もコピーされていない場合、値は「0」になる",
            "ko-KR": "지정된 플레이어가 현재 복제한 영웅입니다. 영웅을 복제하지 않았다면 결과값이 0이 됩니다.",
            "pl-PL": "Aktualnie duplikowana przez określonego gracza postać. Jeśli nie jest duplikowana żadna wynikiem jest wartość 0.",
            "pt-BR": "O herói que o Jogador especificado está duplicando no momento. Se nenhum herói estiver sendo duplicado o valor resultante é 0.",
            "ru-RU": "Герой копируемый «Дубликацией» указанного игрока. Если ни один герой не копируется то возвращаемое значение равно 0.",
            "zh-CN": "指定玩家正在复制此英雄。如果没有复制英雄，结果值为0。"
        },
        "en-US": "Hero Being Duplicated",
        "es-MX": "Héroe que está siendo copiado",
        "fr-FR": "Héros dupliqué",
        "ja-JP": "コピーされているヒーロー",
        "pt-BR": "Herói Sendo Duplicado",
        "zh-CN": "正在复制的英雄"
    },
    "_&getHeroStatistic": {
        "description": "Provides a statistic of the specified player's time playing a specific hero (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.",
        "args": [
            {
                "name": "Player",
                "description": "The Player whose statistic to acquire.",
                "type": "Player",
                "default": "Event Player",
                "descriptionLocalized": {
                    "guid": "000000012508",
                    "en-US": "The Player whose statistic to acquire.",
                    "de-DE": "Der Spieler dessen Statistikwert abgerufen werden soll.",
                    "es-ES": "Jugador cuyas estadísticas se adquieren.",
                    "es-MX": "El jugador cuya estadística se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les statistiques.",
                    "it-IT": "Il giocatore del quale acquisire la statistica.",
                    "ja-JP": "統計を取得するプレイヤー",
                    "ko-KR": "통계치를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego statystykę należy pozyskać.",
                    "pt-BR": "O Jogador cuja estatística será obtida.",
                    "ru-RU": "Игрок статистику которого нужно определить.",
                    "zh-CN": "获取此玩家的数据。"
                }
            },
            {
                "name": "Hero",
                "description": "The hero whose statistic to acquire",
                "type": "Hero",
                "default": "Hero",
                "descriptionLocalized": {
                    "en-US": "The hero whose statistic to acquire",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Stat",
                "description": "The statistic to acquire.",
                "type": "HeroStat",
                "default": "All Damage Dealt",
                "descriptionLocalized": {
                    "guid": "00000001250B",
                    "en-US": "The statistic to acquire.",
                    "de-DE": "Der Statistikwert der abgerufen werden soll.",
                    "es-ES": "Las estadísticas que se adquieren.",
                    "es-MX": "La estadística que se adquirirá.",
                    "fr-FR": "Les statistiques à acquérir.",
                    "it-IT": "La statistica da acquisire.",
                    "ja-JP": "取得する統計",
                    "ko-KR": "가져올 통계치입니다.",
                    "pl-PL": "Statystyka która zostanie pozyskana.",
                    "pt-BR": "A estatística a ser obtida.",
                    "ru-RU": "Статистика которую нужно определить.",
                    "zh-CN": "获取数据。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "000000012505",
        "descriptionLocalized": {
            "guid": "000000012504",
            "en-US": "Provides a statistic of the specified Player's time playing a specific Hero limited to the current match. Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.",
            "de-DE": "Gibt aus wie lange der festgelegte Spieler einen festgelegten Helden gespielt hat auf das aktuelle Match beschränkt. Statistikwerte werden nur erfasst während das Spiel im Gange ist. Für Bots werden keine Statistikwerte erfasst.",
            "es-ES": "Proporciona una estadística del tiempo del jugador especificado jugando con un héroe determinado limitado por la partida en curso. Las estadísticas solo se recogen cuando el juego está en curso. Los robots no recogen estadísticas.",
            "es-MX": "Proporciona una estadística del tiempo del jugador especificado jugando con cierto héroe limitado a la partida actual. Las estadísticas solo se calculan cuando la partida está en progreso. Los robots de entrenamiento no se incluyen en las estadísticas.",
            "fr-FR": "Affiche les statistiques du temps joué par un joueur spécifique avec un héros spécifique limité à la partie en cours. Les statistiques sont uniquement collectées lorsque la partie est en cours. Les I.A. ne collectent pas de statistiques.",
            "it-IT": "Fornisce una statistica del tempo in cui il Giocatore specificato utilizza un Eroe specifico limitato alla partita attuale. Le statistiche sono raccolte solo durante la partita. I bot di prova non raccolgono statistiche.",
            "ja-JP": "指定したプレイヤーが特定のヒーローをプレイしている時間の統計を表示する（現在のマッチに限定）。統計はゲーム進行中のみ計測される。ダミーボットの統計は計測されない",
            "ko-KR": "특정 플레이어가 특정 영웅을 플레이한 시간의 통계치를 제공합니다. 현재 경기 한정 통계치는 게임이 진행 중인 동안에만 수집됩니다. 더미 봇은 통계치를 수집하지 않습니다.",
            "pl-PL": "Udostępnia statystykę czasu w którym określony gracz sterował określoną postacią ograniczoną do bieżącego meczu. Statystyki są gromadzone tylko podczas gry. Boty nie zbierają statystyk.",
            "pt-BR": "Fornece uma estatística do tempo de jogo do Jogador especificado com o Herói especificado limitado à partida atual. As estatísticas só são obtidas quando o jogo está em andamento. Bots não produzem estatísticas.",
            "ru-RU": "Дает статистику указанного игрока за то время что он играл за определенного героя только за текущий матч. Данные статистики фиксируются только в течение матча. ИИ-манекены не участвуют в сборе статистики.",
            "zh-CN": "提供指定玩家使用指定英雄的数据（仅限当前比赛）。仅在游戏进行时收集数据。机器人不会收集数据。"
        },
        "en-US": "Player Hero Stat",
        "es-MX": "Estadística de héroe del jugador",
        "fr-FR": "Stats de héros de joueur",
        "ja-JP": "プレイヤー・ヒーロー統計",
        "pt-BR": "Estatística de Herói do Jogador",
        "zh-CN": "玩家英雄数据"
    },
    "_&getHorizontalFacingAngle": {
        "description": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal facing angle to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEB5",
                    "en-US": "The Player whose horizontal facing angle to acquire.",
                    "de-DE": "Der Spieler dessen horizontaler Blickrichtungswinkel abgerufen werden soll.",
                    "es-ES": "Jugador cuyo ángulo de orientación horizontal se adquiere.",
                    "es-MX": "El jugador cuyo ángulo de orientación horizontal se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir l’angle d’orientation horizontal.",
                    "it-IT": "Il Giocatore il cui angolo orizzontale di osservazione sarà acquisito.",
                    "ja-JP": "水平方向の角度を取得するプレイヤー",
                    "ko-KR": "바라보고 있는 방향의 횡축각 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego kąt poziomy skierowania należy pozyskać.",
                    "pt-BR": "O Jogador cujo ângulo de direção horizontal será adquirido.",
                    "ru-RU": "Игрок горизонтальный угол взгляда которого нужно определить.",
                    "zh-CN": "获取此玩家的水平面向角度。"
                }
            }
        ],
        "return": "float",
        "guid": "00000000B27F",
        "descriptionLocalized": {
            "guid": "00000000BEB4",
            "en-US": "The horizontal angle in degrees of a Player's current facing relative to the world. This Value increases as the Player rotates to the left wrapping around at +- 180.",
            "de-DE": "Der horizontale Winkel der aktuellen Blickrichtung eines Spielers relativ zur Welt in Grad. Dieser Wert steigt wenn sich der Spieler nach links dreht Übertrag bei +-180.",
            "es-ES": "Ángulo horizontal en grados de la orientación actual de un jugador respecto al mundo. Este valor aumenta cuando el jugador gira hacia la izquierda se reinicia en +- 180.",
            "es-MX": "El ángulo horizontal en grados de la orientación actual de un jugador con relación al mundo. Este valor aumenta a medida que el jugador rota hacia la izquierda se enrolla al alcanzar + o - 180 grados.",
            "fr-FR": "L’angle horizontal en degrés de l’orientation actuelle d’un joueur par rapport au monde. Cette valeur augmente lorsque le joueur pivote vers la gauche et revient à zéro à +- 180°.",
            "it-IT": "L'angolo orizzontale in gradi dell'attuale direzione di osservazione di un Giocatore relativa al mondo di gioco. Questo Valore aumenta con la rotazione del Giocatore verso sinistra limitato attorno al valore di +- 180.",
            "ja-JP": "ワールドに対するプレイヤーの正方向を表す水平角（度）。プレイヤーが左を向くと値が上昇する（+- 180度でラップする）",
            "ko-KR": "월드에 대해 상대적으로 플레이어가 바라보고 있는 방향의 상대적인 횡축각단위: 도입니다. 이 값은 플레이어가 좌측으로 회전 시 증가합니다+- 180도 범위.",
            "pl-PL": "Kąt poziomy bieżącego skierowania gracza względem świata podany w stopniach. Wartość ta rośnie kiedy gracz obraca się w lewo skala +- 180.",
            "pt-BR": "O ângulo horizontal em graus da direção para a qual um Jogador está virado em relação ao mundo. Esse Valor aumenta quando o Jogador gira para a esquerda cobrindo +-180.",
            "ru-RU": "Горизонтальный угол в градусах выражающий направление взгляда игрока в игровом мире. Чем больше значение тем левее смотрит игрок с максимальным и минимальным значением в +- 180 градусов.",
            "zh-CN": "玩家当前面对的方向与地图的水平夹角。当玩家转向左方时这个值会增加。（范围为+-180）。"
        },
        "en-US": "Horizontal Facing Angle Of",
        "es-MX": "Ángulo horizontal de orientación de",
        "fr-FR": "Angle horizontal du regard de",
        "ja-JP": "対面水平角: ",
        "pt-BR": "Ângulo Horizontal Frontal de",
        "zh-CN": "水平朝向角度"
    },
    "_&getHorizontalSpeed": {
        "description": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose horizontal speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE5C",
                    "en-US": "The Player whose horizontal speed to acquire.",
                    "de-DE": "Der Spieler dessen horizontale Geschwindigkeit abgerufen werden soll.",
                    "es-ES": "Jugador cuya velocidad horizontal se adquiere.",
                    "es-MX": "El jugador cuya velocidad horizontal se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la vitesse horizontale.",
                    "it-IT": "Il Giocatore la cui velocità orizzontale non direzionale sarà acquisita.",
                    "ja-JP": "水平方向の速度を取得するプレイヤー",
                    "ko-KR": "횡축 속도 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego szybkość poziomą należy pozyskać.",
                    "pt-BR": "O Jogador cuja velocidade horizontal será adquirida.",
                    "ru-RU": "Игрок горизонтальную скорость которого нужно определить.",
                    "zh-CN": "获取此玩家的水平速度。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25E",
        "descriptionLocalized": {
            "guid": "00000000BE5B",
            "en-US": "The current horizontal speed of a Player in meters per second. This measurement excludes all vertical motion.",
            "de-DE": "Die aktuelle horizontale Geschwindigkeit eines Spielers in Metern pro Sekunde. Diese Messung schließt sämtliche vertikale Bewegung aus.",
            "es-ES": "Velocidad horizontal actual de un jugador en metros por segundo. Esta medida excluye todo el movimiento vertical.",
            "es-MX": "La velocidad horizontal actual de un jugador en metros por segundo. Esta medición excluye todo movimiento vertical.",
            "fr-FR": "La vitesse horizontale actuelle d’un joueur en mètres par seconde. Cette mesure ignore tout mouvement vertical.",
            "it-IT": "La velocità orizzontale non direzionale attuale di un Giocatore in metri al secondo. Questa misura esclude qualsiasi movimento verticale.",
            "ja-JP": "プレイヤーの、水平方向への現在の速さ（メートル秒）。この測定からは、すべての垂直方向の移動が除外される",
            "ko-KR": "플레이어의 현재 횡축 속도초당 미터입니다. 여기에는 모든 종축 움직임이 배제됩니다.",
            "pl-PL": "Bieżąca szybkość pozioma gracza w określonym kierunku w metrach na sekundę. Pomiar ten wyklucza wszelki ruch pionowy.",
            "pt-BR": "A velocidade horizontal atual de um Jogador em metros por segundo. Essa medição exclui todo o deslocamento vertical.",
            "ru-RU": "Горизонтальная скорость игрока метры в секунду в данный момент. Это значение измерения исключает любые вертикальные смещения.",
            "zh-CN": "一名玩家在水平方向上的当前速度，单位为米秒。排除所有垂直方向的运动。"
        },
        "en-US": "Horizontal Speed Of",
        "es-MX": "Velocidad horizontal de",
        "fr-FR": "Vitesse horizontale de",
        "ja-JP": "水平速度: ",
        "pt-BR": "Velocidade Horizontal de",
        "zh-CN": "水平速度"
    },
    "_&getMaxAmmo": {
        "description": "The current max ammo of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max ammo to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "0000000110EC",
                    "en-US": "The Player whose max ammo to acquire.",
                    "de-DE": "Der Spieler dessen maximale Munition abgerufen werden soll.",
                    "es-ES": "Jugador cuya munición máxima se adquiere.",
                    "es-MX": "El jugador cuya munición máxima se adquirirá.",
                    "fr-FR": "Le joueur dont les munitions maximum seront appelées.",
                    "it-IT": "Il Giocatore il cui numero massimo di munizioni sarà acquisito.",
                    "ja-JP": "最大弾薬数を取得するプレイヤー",
                    "ko-KR": "최대 탄약 수 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego maksimum amunicji należy pozyskać.",
                    "pt-BR": "O Jogador cuja munição máxima será adquirida.",
                    "ru-RU": "Игрок у которого нужно определить максимальное количество боеприпасов.",
                    "zh-CN": "获取此玩家的最大弹药数量。"
                }
            },
            {
                "name": "CLIP",
                "description": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0,
                "descriptionLocalized": {
                    "en-US": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades).",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "0000000110EA",
        "descriptionLocalized": {
            "guid": "0000000110EB",
            "en-US": "The current max ammo of a Player.",
            "de-DE": "Die aktuelle maximale Munition eines Spielers.",
            "es-ES": "Munición máxima actual de un jugador.",
            "es-MX": "La munición máxima actual de un jugador.",
            "fr-FR": "Les munitions maximum actuelles d’un joueur.",
            "it-IT": "L'attuale numero massimo di munizioni di un Giocatore.",
            "ja-JP": "プレイヤーの現在の最大弾薬数",
            "ko-KR": "플레이어의 현재 최대 탄약 수입니다.",
            "pl-PL": "Bieżące maksimum amunicji gracza.",
            "pt-BR": "A munição máxima atual de um Jogador.",
            "ru-RU": "Текущее максимальное количество боеприпасов игрока.",
            "zh-CN": "一名玩家当前的最大弹药数量。"
        },
        "en-US": "Max Ammo",
        "es-MX": "Munición máxima",
        "fr-FR": "Munitions maximum",
        "ja-JP": "最大弾薬数",
        "pt-BR": "Munição Máxima",
        "zh-CN": "最大弹药量"
    },
    "_&getMaxHealth": {
        "description": "The max health of a player, including armor and shields.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000001144D",
                    "en-US": "The Player whose max health to acquire.",
                    "de-DE": "Der Spieler dessen maximale Trefferpunkte abgerufen werden sollen.",
                    "es-ES": "Jugador cuya salud máxima se adquiere.",
                    "es-MX": "El jugador cuya salud máxima se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les points de vie maximum.",
                    "it-IT": "Il Giocatore la cui salute massima sarà acquisita.",
                    "ja-JP": "最大ライフを取得するプレイヤー",
                    "ko-KR": "최대 생명력 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego maksimum zdrowia należy pozyskać.",
                    "pt-BR": "O Jogador cuja vida máxima será adquirida.",
                    "ru-RU": "Игрок максимальный запас здоровья которого нужно узнать.",
                    "zh-CN": "获取此玩家的最大生命值。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "0000000081C4",
        "descriptionLocalized": {
            "guid": "00000000BDF1",
            "en-US": "The max health of a Player including armor and shields.",
            "de-DE": "Die maximalen Trefferpunkte eines Spielers einschließlich Rüstung und Schilden.",
            "es-ES": "Salud máxima de un jugador incluidos la armadura y los escudos.",
            "es-MX": "La salud máxima de un jugador incluye armadura y escudos.",
            "fr-FR": "Les points de vie maximum d’un joueur y compris l’armure et les boucliers.",
            "it-IT": "La salute massima di un Giocatore inclusi armatura e scudi.",
            "ja-JP": "プレイヤーの最大ライフ（アーマーとシールドを含む）",
            "ko-KR": "플레이어의 최대 생명력방어력 및 보호막 포함입니다.",
            "pl-PL": "Maksimum zdrowia gracza wliczając pancerz i osłony.",
            "pt-BR": "A vida máxima de um Jogador incluindo armadura e escudos.",
            "ru-RU": "Максимальный запас здоровья игрока включая броню и щит.",
            "zh-CN": "一名玩家的最大生命值，包括护甲和护盾。"
        },
        "en-US": "Max Health",
        "es-MX": "Salud máxima",
        "fr-FR": "Points de vie maximum",
        "ja-JP": "最大ライフ",
        "pt-BR": "Vida Máxima",
        "zh-CN": "最大生命值"
    },
    "_&getMaxHealthOfType": {
        "description": "The max health of the specified player, filtered by the given health type.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose max health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000001144D",
                    "en-US": "The Player whose max health to acquire.",
                    "de-DE": "Der Spieler dessen maximale Trefferpunkte abgerufen werden sollen.",
                    "es-ES": "Jugador cuya salud máxima se adquiere.",
                    "es-MX": "El jugador cuya salud máxima se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les points de vie maximum.",
                    "it-IT": "Il Giocatore la cui salute massima sarà acquisita.",
                    "ja-JP": "最大ライフを取得するプレイヤー",
                    "ko-KR": "최대 생명력 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego maksimum zdrowia należy pozyskać.",
                    "pt-BR": "O Jogador cuja vida máxima será adquirida.",
                    "ru-RU": "Игрок максимальный запас здоровья которого нужно узнать.",
                    "zh-CN": "获取此玩家的最大生命值。"
                }
            },
            {
                "name": "HEALTH",
                "description": "The type of max health to acquire.",
                "type": "Health",
                "default": "HEALTH",
                "descriptionLocalized": {
                    "guid": "00000001144E",
                    "en-US": "The type of max health to acquire.",
                    "de-DE": "Der Typ der maximalen Trefferpunkte die abgerufen werden sollen.",
                    "es-ES": "Tipo de salud máxima que se adquiere.",
                    "es-MX": "El tipo de salud máxima que se adquirirá.",
                    "fr-FR": "Le type de points de vie maximum à acquérir.",
                    "it-IT": "Il tipo di salute massima che sarà acquisita.",
                    "ja-JP": "取得する最大ライフの種類",
                    "ko-KR": "가져올 최대 생명력의 유형입니다.",
                    "pl-PL": "Typ maksimum zdrowia do pozyskania.",
                    "pt-BR": "O tipo de vida máxima que será adquirido.",
                    "ru-RU": "Тип максимального запаса здоровья который нужно определить.",
                    "zh-CN": "获取此类型的最大生命值。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "000000011446",
        "en-US": "Max Health Of Type",
        "es-MX": "Salud máxima según tipo",
        "fr-FR": "Points de vie maximum par type",
        "ja-JP": "タイプごとの最大ライフ",
        "pt-BR": "Vida Máxima do Tipo",
        "zh-CN": "类型的最大生命值"
    },
    "_&getNormalizedHealth": {
        "description": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose normalized health to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BDF0",
                    "en-US": "The Player whose normalized health to acquire.",
                    "de-DE": "Der Spieler dessen normierte Trefferpunkte abgerufen werden sollen.",
                    "es-ES": "Jugador cuya salud normalizada se adquiere.",
                    "es-MX": "El jugador cuya salud normalizada se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les points de vie normalisés.",
                    "it-IT": "Il Giocatore la cui salute normalizzata sarà acquisita.",
                    "ja-JP": "正規化ライフを取得するプレイヤー",
                    "ko-KR": "정규화된 생명력을 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego znormalizowane zdrowie należy pozyskać.",
                    "pt-BR": "O Jogador cuja vida normalizada será adquirida.",
                    "ru-RU": "Игрок нормализованный запас здоровья которого нужно узнать.",
                    "zh-CN": "获取此玩家的标准化生命值。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "0000000081C3",
        "descriptionLocalized": {
            "guid": "00000000BDEF",
            "en-US": "The current health of a Player including armor and shields normalized between 0 and 1. For example 0 is no health 0.5 is half health 1 is full health etc.",
            "de-DE": "Die aktuellen Trefferpunkte eines Spielers einschließlich Rüstung und Schilden die auf einen Wert zwischen 0 und 1 normiert sind. Bsp.: 0 = keine Trefferpunkte 05 = Hälfte der Trefferpunkte 1 = volle Trefferpunkte",
            "es-ES": "Salud actual de un jugador incluidos la armadura y los escudos normalizada entre 0 y 1. Por ejemplo 0 es que no tiene salud 05 es que tiene la mitad 1 es que tiene la salud al completo etc..",
            "es-MX": "La salud actual de un jugador incluye armadura y escudos normalizada entre 0 y 1. Por ejemplo 0 es nada de salud 0.5 es la mitad de la salud 1 es la salud completa etc..",
            "fr-FR": "Les points de vie actuels d’un joueur y compris l’armure et les boucliers normalisés entre 0 et 1. Par exemple 0 correspond à aucun point de vie 05 à la moitié des points de vie et 1 aux points de vie maximum etc.",
            "it-IT": "La salute attuale di un Giocatore inclusi armatura e scudi normalizzata tra 0 e 1. Per esempio 0 indica zero salute 05 indica salute dimezzata 1 indica salute piena ecc.",
            "ja-JP": "0と1の間で正規化される、アーマーとシールドを含んだ現在のプレイヤーのライフ（例として、0はライフなし、0.5は半分のライフ、1はライフ満タン、など）",
            "ko-KR": "방어력 및 보호막을 포함하여 0과 1사이로 정규화된 플레이어의 현재 생명력입니다. 예를 들어 0은 생명력 없음 0.5는 생명력 절반 1은 최대 생명력 등등",
            "pl-PL": "Bieżące zdrowie gracza wliczając pancerz i osłony znormalizowane między 0 a 1 np.: 0 oznacza brak zdrowia 05 – połowę a 1 – pełne zdrowie.",
            "pt-BR": "A vida atual de um Jogador incluindo armadura e escudos normalizada entre 0 e 1 por exemplo 0 é nenhuma vida 05 é metade da vida 1 é vida cheia etc.",
            "ru-RU": "Запас здоровья игрока в данный момент. Также включает броню и щиты. Значение нормализовано т. е. 0 означает отсутствие здоровья 05 – половину а 1 – полный запас.",
            "zh-CN": "玩家当前的生命值，包括护甲和护盾，在0到1之间取标准化值。（例如，0为无生命值，0.5为半生命值，1为满生命值，以此类推。）"
        },
        "en-US": "Normalized Health",
        "es-MX": "Salud normalizada",
        "fr-FR": "Points de vie normalisés",
        "ja-JP": "正規化ライフ",
        "pt-BR": "Vida Normalizada",
        "zh-CN": "标准化生命值"
    },
    "_&getNumberOfDeaths": {
        "description": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE13",
                    "en-US": "The Player whose death count to acquire.",
                    "de-DE": "Der Spieler dessen Todesanzahl abgerufen werden soll.",
                    "es-ES": "Jugador cuyo recuento de muertes se adquiere.",
                    "es-MX": "El jugador cuya cantidad de muertes se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le compte de morts.",
                    "it-IT": "Il Giocatore il cui conteggio morti sarà acquisito.",
                    "ja-JP": "デス数を取得するプレイヤー",
                    "ko-KR": "사망 횟수 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego liczbę zgonów należy pozyskać.",
                    "pt-BR": "O Jogador cuja contagem de mortes será adquirida.",
                    "ru-RU": "Игрок количество смертей которого нужно получить.",
                    "zh-CN": "获取此玩家的死亡次数。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B103",
        "descriptionLocalized": {
            "guid": "00000000BE14",
            "en-US": "The number of deaths a specific Player has earned. This Value only accumulates while a game is in progress.",
            "de-DE": "Die Anzahl der Tode die ein bestimmter Spieler verdient hat. Dieser Wert wird nur akkumuliert während ein Spiel läuft.",
            "es-ES": "Número de muertes que ha conseguido un jugador concreto. Este valor solo se acumula si hay una partida en curso.",
            "es-MX": "La cantidad de muertes que ha obtenido un jugador determinado. Este valor solo se acumula mientras la partida está en curso.",
            "fr-FR": "Le nombre de morts obtenues par un joueur spécifique. Cette valeur augmente uniquement lorsqu’une partie est en cours.",
            "it-IT": "Il numero di morti di un Giocatore specifico. Questo Valore si accumula solamente mentre una partita è in corso.",
            "ja-JP": "特定のプレイヤーが獲得したデス数。この値は、ゲーム進行中の時にしか増えない",
            "ko-KR": "지정된 플레이어가 기록한 사망 수입니다. 이 값은 게임이 진행 중일 때만 누적됩니다.",
            "pl-PL": "Liczba zgonów które zaliczył konkretny gracz. Wartość ta kumuluje się tylko w trakcie rozgrywki.",
            "pt-BR": "O número de mortes que um Jogador específico obteve. Esse Valor só acumula enquanto uma partida estiver em andamento.",
            "ru-RU": "Количество смертей указанного игрока. Это значение растет только во время игры.",
            "zh-CN": "指定玩家死亡的次数。这个值会随着游戏的进程不断累积。"
        },
        "en-US": "Number Of Deaths",
        "de-DE": "Number of Deaths",
        "es-MX": "Cantidad de muertes",
        "fr-FR": "Nombre de morts",
        "it-IT": "Number of Deaths",
        "ja-JP": "デス数",
        "pt-BR": "Número de Mortes",
        "zh-CN": "死亡数"
    },
    "_&getNumberOfElims": {
        "description": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose elimination count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE12",
                    "en-US": "The Player whose elimination count to acquire.",
                    "de-DE": "Der Spieler dessen Eliminierungsanzahl abgerufen werden soll.",
                    "es-ES": "Jugador cuyo recuento de eliminaciones se adquiere.",
                    "es-MX": "El jugador cuya cantidad de eliminaciones se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le compte d’éliminations.",
                    "it-IT": "Il Giocatore il cui conteggio eliminazioni sarà acquisito.",
                    "ja-JP": "キル数を取得するプレイヤー",
                    "ko-KR": "처치 횟수 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego liczbę likwidacji należy pozyskać.",
                    "pt-BR": "O Jogador cuja contagem de eliminações será adquirida.",
                    "ru-RU": "Игрок для которого нужно получить количество совершенных им убийств.",
                    "zh-CN": "获取此玩家的消灭次数。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B101",
        "descriptionLocalized": {
            "guid": "00000000BE11",
            "en-US": "The number of eliminations a specific Player has earned. This Value only accumulates while a game is in progress.",
            "de-DE": "Die Anzahl der Eliminierungen die ein bestimmter Spieler verdient hat. Dieser Wert wird nur akkumuliert während ein Spiel läuft.",
            "es-ES": "Número de eliminaciones que ha conseguido un jugador concreto. Este valor solo se acumula si hay una partida en curso.",
            "es-MX": "La cantidad de eliminaciones que ha obtenido un jugador determinado. Este valor solo se acumula mientras la partida está en curso.",
            "fr-FR": "Le nombre d’éliminations obtenues par un joueur spécifique. Cette valeur augmente uniquement lorsqu’une partie est en cours.",
            "it-IT": "Il numero di eliminazioni di un Giocatore specifico. Questo Valore si accumula solamente mentre una partita è in corso.",
            "ja-JP": "特定のプレイヤーが獲得したキル数。この値は、ゲーム進行中の時にしか増えない",
            "ko-KR": "지정된 플레이어가 기록한 처치 수입니다. 이 값은 게임이 진행 중일 때만 누적됩니다.",
            "pl-PL": "Liczba likwidacji które zaliczył konkretny gracz. Wartość ta kumuluje się tylko w trakcie rozgrywki.",
            "pt-BR": "O número de eliminações que um Jogador específico obteve. Esse Valor só acumula enquanto uma partida estiver em andamento.",
            "ru-RU": "Количество убийств совершенных указанным игроком. Это значение растет только во время игры.",
            "zh-CN": "指定玩家参与消灭的次数。这个值会随着游戏的进程不断累积。"
        },
        "en-US": "Number Of Eliminations",
        "de-DE": "Number of Eliminations",
        "es-MX": "Cantidad de eliminaciones",
        "fr-FR": "Nombre d’éliminations",
        "it-IT": "Number of Eliminations",
        "ja-JP": "エリミネーション数",
        "pt-BR": "Número de Eliminações",
        "zh-CN": "消灭数"
    },
    "_&getNumberOfFinalBlows": {
        "description": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose final blow count to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE15",
                    "en-US": "The Player whose final blow count to acquire.",
                    "de-DE": "Der Spieler dessen Todesstoß-Anzahl abgerufen werden soll.",
                    "es-ES": "Jugador cuyo recuento de golpes de gracia se adquiere.",
                    "es-MX": "El jugador cuya cantidad de golpes de gracia se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le compte final de coups fatals.",
                    "it-IT": "Il Giocatore il cui conteggio colpi di grazia sarà acquisito.",
                    "ja-JP": "ファイナル・ブロウの数を取得するプレイヤー",
                    "ko-KR": "결정타 개수 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego liczbę trafień kończących należy pozyskać.",
                    "pt-BR": "O Jogador cuja contagem de golpes finais será adquirida.",
                    "ru-RU": "Игрок количество смертельных ударов которого нужно получить.",
                    "zh-CN": "获取此玩家的最后一击次数。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B102",
        "descriptionLocalized": {
            "guid": "00000000BE16",
            "en-US": "The number of final blows a specific Player has earned. This Value only accumulates while a game is in progress.",
            "de-DE": "Die Anzahl der Todesstöße die ein bestimmter Spieler verdient hat. Dieser Wert wird nur akkumuliert während ein Spiel läuft.",
            "es-ES": "Número de golpes de gracia que ha conseguido un jugador concreto. Este valor solo se acumula si hay una partida en curso.",
            "es-MX": "La cantidad de golpes de gracia que ha obtenido un jugador determinado. Este valor solo se acumula mientras la partida está en curso.",
            "fr-FR": "Le nombre de coups fatals obtenus par un joueur spécifique. Cette valeur augmente uniquement lorsqu’une partie est en cours.",
            "it-IT": "Il numero di colpi di grazia che un Giocatore specifico ha ottenuto. Questo Valore si accumula solamente mentre una partita è in corso.",
            "ja-JP": "特定のプレイヤーが獲得したファイナル・ブロウの数。この値は、ゲーム進行中の時にしか増えない",
            "ko-KR": "지정된 플레이어가 기록한 결정타 개수입니다. 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.",
            "pl-PL": "Liczba trafień kończących które zaliczył konkretny gracz. Wartość ta kumuluje się tylko w trakcie rozgrywki.",
            "pt-BR": "O número de golpes finais que um Jogador específico obteve. Esse Valor só acumula enquanto uma partida estiver em andamento.",
            "ru-RU": "Количество смертельных ударов совершенных указанным игроком. Это значение растет только во время игры.",
            "zh-CN": "指定玩家造成最后一击的次数。这个值会随着游戏的进程不断累积。"
        },
        "en-US": "Number Of Final Blows",
        "de-DE": "Number of Final Blows",
        "es-MX": "Cantidad de golpes de gracia",
        "fr-FR": "Nombre de coups de grâce",
        "it-IT": "Number of Final Blows",
        "ja-JP": "ファイナル・ブロウ数",
        "pt-BR": "Número de Golpes Finais",
        "zh-CN": "最后一击数"
    },
    "_&getPlayerClosestToReticle": {
        "description": "The player closest to the reticle of the specified player, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose reticle to search for the closest player.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C32B",
                    "en-US": "The Player from whose reticle to search for the closest Player.",
                    "de-DE": "Der Spieler von dessen Fadenkreuz ausgehend nach dem nächstgelegenen Spieler gesucht werden soll.",
                    "es-ES": "Jugador desde cuya retícula se busca al jugador más cercano.",
                    "es-MX": "El jugador desde cuyo retículo se buscará al jugador más cercano.",
                    "fr-FR": "Le joueur dont le réticule doit chercher le joueur le plus proche.",
                    "it-IT": "Il Giocatore dal cui reticolo inizierà la ricerca del Giocatore più vicino.",
                    "ja-JP": "最も近いプレイヤーの検索を行う照準のプレイヤー",
                    "ko-KR": "이 플레이어의 조준선으로부터 가장 가까운 플레이어를 검색합니다.",
                    "pl-PL": "Gracz dla którego celownika należy szukać najbliższych graczy.",
                    "pt-BR": "O Jogador cuja mira será usada para buscar o Jogador mais próximo.",
                    "ru-RU": "Игрок в прицеле которого нужно искать ближайшего игрока.",
                    "zh-CN": "搜索距此玩家准星最近的玩家。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to search for the closest player.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000C32C",
                    "en-US": "The Team or Teams on which to search for the closest Player.",
                    "de-DE": "Das Team oder die Teams in denen nach dem nächstgelegenen Spieler gesucht werden soll.",
                    "es-ES": "Equipo o equipos en los que se busca al jugador más cercano.",
                    "es-MX": "El equipo o los equipos donde se buscará al jugador más cercano.",
                    "fr-FR": "L’équipe ou les équipes dont il faut chercher le joueur le plus proche.",
                    "it-IT": "La Squadra o le Squadre tra le quali cercare il Giocatore più vicino.",
                    "ja-JP": "最も近いプレイヤーを検索するチーム",
                    "ko-KR": "가장 가까운 플레이어를 검색할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których należy szukać najbliższych graczy.",
                    "pt-BR": "As Equipes usadas para buscar o Jogador mais próximo.",
                    "ru-RU": "Команда или команды из числа игроков которых нужно определить ближайшего.",
                    "zh-CN": "搜索此队伍中最近的玩家。"
                }
            }
        ],
        "return": "Player",
        "guid": "00000000C328",
        "descriptionLocalized": {
            "guid": "00000000C329",
            "en-US": "The Player closest to the reticle of the specified Player optionally restricted by Team.",
            "de-DE": "Der dem Fadenkreuz des festgelegten Spielers nächstgelegene Spieler optional durch Team eingeschränkt.",
            "es-ES": "Jugador más cercano a la retícula del jugador especificado. Opcionalmente restringido por el equipo.",
            "es-MX": "El jugador más cercano al retículo del jugador especificado restringido opcionalmente por el equipo.",
            "fr-FR": "Le joueur le plus proche du réticule du joueur spécifié optionnellement restreint par équipe.",
            "it-IT": "Il Giocatore più vicino al reticolo del Giocatore specificato opzionalmente filtrato per Squadra.",
            "ja-JP": "指定のプレイヤーの照準に最も近いプレイヤー。任意でチームごとに制限可能",
            "ko-KR": "지정된 플레이어의 조준선에서 가장 가까운 플레이어입니다. 팀으로 제한할 수 있습니다.",
            "pl-PL": "Gracz znajdujący się najbliżej celownika określonego gracza opcjonalnie ograniczony do zmiennej „Team” Drużyna.",
            "pt-BR": "O Jogador mais próximo da mira do Jogador especificado opcionalmente restrito por Equipe.",
            "ru-RU": "Игрок ближайший к прицелу указанного игрока. Можно ограничивать поиск принадлежностью к команде.",
            "zh-CN": "最接近指定玩家准星位置的玩家，可以选择是否限制所在队伍。"
        },
        "en-US": "Player Closest To Reticle",
        "es-MX": "Jugador más cercano al retículo",
        "fr-FR": "Joueur le plus proche du réticule",
        "ja-JP": "照準に最も近いプレイヤー",
        "pt-BR": "Jogador Mais Próximo da Mira",
        "zh-CN": "距离准星最近的玩家"
    },
    "_&getPlayersInViewAngle": {
        "description": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF81",
                    "en-US": "The Player whose view to use for the check.",
                    "de-DE": "Der Spieler dessen Sicht für die Prüfung verwendet wird.",
                    "es-ES": "Jugador cuya visión se utiliza para la comprobación.",
                    "es-MX": "El jugador cuya vista se utilizará para la verificación.",
                    "fr-FR": "Le joueur dont le champ de vision servira à effectuer la vérification.",
                    "it-IT": "Il Giocatore la cui area di visuale sarà controllata.",
                    "ja-JP": "チェックのために視点を使用するプレイヤー",
                    "ko-KR": "시야를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego pola widzenia użyć do sprawdzenia.",
                    "pt-BR": "O Jogador cuja visão será usada na verificação.",
                    "ru-RU": "Игрок поле зрения которого используется для проверки.",
                    "zh-CN": "检测此名玩家的视野。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to consider players.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000C32D",
                    "en-US": "The Team or Teams on which to consider Players.",
                    "de-DE": "Das Team oder die Teams deren Spieler berücksichtigt werden sollen.",
                    "es-ES": "Equipo o equipos en los que se consideran los jugadores.",
                    "es-MX": "El equipo o los equipos de donde se adquirirán los jugadores.",
                    "fr-FR": "L’équipe ou les équipes dont il faut prendre les joueurs en compte.",
                    "it-IT": "La Squadra o le Squadre i cui Giocatori saranno considerati.",
                    "ja-JP": "プレイヤーとしてみなすチーム",
                    "ko-KR": "플레이어를 고려할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których graczy należy uwzględnić.",
                    "pt-BR": "As Equipes cujos Jogadores serão considerados.",
                    "ru-RU": "Команда или команды игроков из которых нужно учитывать.",
                    "zh-CN": "考察的玩家所在的队伍。"
                }
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF83",
                    "en-US": "The View Angle to compare against in degrees.",
                    "de-DE": "Der Blickwinkel zum Vergleich in Grad.",
                    "es-ES": "Ángulo de visión en grados con el que se compara.",
                    "es-MX": "El ángulo de vista en grados con el cual se comparará.",
                    "fr-FR": "L’angle de vision en degrés avec lequel effectuer la comparaison.",
                    "it-IT": "L'Angolo di Visuale da confrontare in gradi.",
                    "ja-JP": "比較対象となる視覚範囲",
                    "ko-KR": "비교 대상인 View Angle단위: 도입니다.",
                    "pl-PL": "Kąt widzenia w stopniach do którego należy dokonać porównania.",
                    "pt-BR": "O Ângulo de Visão a ser comparado em graus.",
                    "ru-RU": "Угол поля зрения в градусах по которому проводится сравнение.",
                    "zh-CN": "用于比较的视角，单位为度。"
                }
            }
        ],
        "return": {
            "Array": "Player"
        },
        "guid": "00000000C32F",
        "descriptionLocalized": {
            "guid": "00000000C32E",
            "en-US": "The Players who are within a specific view angle of a specific Player's reticle optionally restricted by Team.",
            "de-DE": "Die Spieler in einem bestimmten Blickwinkel des Fadenkreuzes eines bestimmten Spielers optional durch Team eingeschränkt.",
            "es-ES": "Los jugadores que están dentro de un ángulo de visión concreto en la retícula de un jugador específico. Restringido opcionalmente por el equipo.",
            "es-MX": "Los jugadores que se encuentran dentro de un ángulo de vista determinado en el retículo de un jugador determinado restringido opcionalmente por el equipo.",
            "fr-FR": "Les joueurs situés dans l’angle de vision donné du réticule d’un joueur donné optionnellement restreints par équipe.",
            "it-IT": "I Giocatori che si trovano entro un certo angolo di visuale dal reticolo di un Giocatore specificato opzionalmente filtrato per Squadra.",
            "ja-JP": "指定の視覚範囲または指定のプレイヤーの照準内にいるプレイヤー。任意でチームごとに制限可能",
            "ko-KR": "지정된 플레이어의 조준선을 기준으로 지정된 시야각 안에 있는 플레이어입니다. 팀 단위로 제한할 수 있습니다.",
            "pl-PL": "Dwóch graczy którzy są wewnątrz określonego kąta widzenia celownika określonego gracza opcjonalnie ograniczone przez zmienną „Team” Drużyna.",
            "pt-BR": "Os Jogadores que estão dentro de um ângulo de visão específico da mira de um Jogador específico opcionalmente restrito por Equipe.",
            "ru-RU": "Игроки находящиеся в указанном поле зрения относительно прицела указанного игрока. Обычно ограничивается принадлежностью к команде.",
            "zh-CN": "最接近此玩家准星位置的玩家，可以选择是否限制所在队伍。"
        },
        "en-US": "Players in View Angle",
        "es-MX": "Jugadores en el ángulo de vista",
        "fr-FR": "Joueurs dans le champ de vision",
        "ja-JP": "視角範囲内のプレイヤー",
        "pt-BR": "Jogadores no Ângulo de Visão",
        "zh-CN": "视角中的玩家"
    },
    "_&getPosition": {
        "description": "The current position of a player as a vector.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose position to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE1E",
                    "en-US": "The Player whose position to acquire.",
                    "de-DE": "Der Spieler dessen Position abgerufen werden soll.",
                    "es-ES": "Jugador cuya posición se adquiere.",
                    "es-MX": "El jugador cuya posición se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la position.",
                    "it-IT": "Il Giocatore la cui posizione sarà acquisita.",
                    "ja-JP": "位置を取得するプレイヤー",
                    "ko-KR": "위치 값 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego pozycję należy pozyskać.",
                    "pt-BR": "O Jogador cuja posição será adquirida.",
                    "ru-RU": "Игрок положение которого нужно определить.",
                    "zh-CN": "获取此玩家的位置。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B11C",
        "descriptionLocalized": {
            "guid": "00000000BE1F",
            "en-US": "The current position of a Player as a Vector.",
            "de-DE": "Die aktuelle Position eines Spielers als Vektor.",
            "es-ES": "Posición actual de un jugador en forma de vector.",
            "es-MX": "La posición actual de un jugador como vector.",
            "fr-FR": "La position actuelle d’un joueur sous forme de vecteur.",
            "it-IT": "La posizione attuale di un Giocatore in forma di Vettore.",
            "ja-JP": "ベクトルで表したプレイヤーの現在位置",
            "ko-KR": "플레이어의 현재 위치벡터입니다.",
            "pl-PL": "Bieżąca pozycja gracza jako parametr „Vector” Wektor.",
            "pt-BR": "A posição atual de um Jogador na forma de um Vetor.",
            "ru-RU": "Положение игрока в данный момент представленное в виде вектора.",
            "zh-CN": "玩家的当前位置，此值为矢量。"
        },
        "en-US": "Position Of",
        "es-MX": "Posición de",
        "fr-FR": "Position de",
        "ja-JP": "位置: ",
        "pt-BR": "Posição de",
        "zh-CN": "所选位置"
    },
    "_&getScore": {
        "description": "The current score of a player. Results in 0 if the game mode is not free-for-all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose score to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BDFF",
                    "en-US": "The Player whose score to acquire.",
                    "de-DE": "Der Spieler dessen Punktestand abgerufen werden soll.",
                    "es-ES": "Jugador cuya puntuación se adquiere.",
                    "es-MX": "El jugador cuya puntuación se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le score.",
                    "it-IT": "Il Giocatore il cui punteggio sarà acquisito.",
                    "ja-JP": "スコアを取得するプレイヤー",
                    "ko-KR": "점수 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego wynik należy pozyskać.",
                    "pt-BR": "O Jogador cuja pontuação será adquirida.",
                    "ru-RU": "Игрок счет которого нужно узнать.",
                    "zh-CN": "获取此玩家的分数。"
                }
            }
        ],
        "return": "int",
        "guid": "00000000AD3C",
        "descriptionLocalized": {
            "guid": "00000000BDFE",
            "en-US": "The current score of a Player. Results in 0 if the game mode is not free-for-all.",
            "de-DE": "Der aktuelle Punktestand eines Spielers. Ergibt 0 wenn der Spielmodus kein klassisches Deathmatch ist.",
            "es-ES": "Puntuación actual de un jugador. El resultado es «0» si el modo de juego no es de todos contra todos.",
            "es-MX": "La puntuación actual de un jugador. El resultado será 0 si el modo de juego no es de todos contra todos.",
            "fr-FR": "Le score actuel d’un joueur. Renvoie le résultat 0 si le mode de jeu n’est pas Chacun pour soi.",
            "it-IT": "L'attuale punteggio di un Giocatore. Risulta 0 se la modalità di gioco non è Tutti contro tutti.",
            "ja-JP": "プレイヤーの現在のスコアゲーム・モードがFFA以外の場合は0を返す",
            "ko-KR": "지정된 플레이어의 현재 점수입니다. 게임 모드가 개별 전투가 아닌 경우 결과값은 0이 됩니다.",
            "pl-PL": "Bieżący wynik gracza. Wynik to 0 jeśli trybem gry nie jest każdy na każdego.",
            "pt-BR": "A pontuação atual de um Jogador. Retorna o resultado 0 se o modo de jogo não for todos contra todos.",
            "ru-RU": "Счет игрока в данный момент. В командных режимах будет возвращено значение 0.",
            "zh-CN": "一名玩家当前的得分。如果游戏不是自由混战模式，则结果为0。"
        },
        "en-US": "Score Of",
        "es-MX": "Puntuación de",
        "fr-FR": "Score de",
        "ja-JP": "スコア: ",
        "pt-BR": "Pontuação de",
        "zh-CN": "分数"
    },
    "_&getSlot": {
        "description": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose slot number to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF4D",
                    "en-US": "The player whose slot number to acquire.",
                    "de-DE": "Der Spieler dessen Slot-Nummer abgerufen werden soll.",
                    "es-ES": "Jugador cuyo número de ranura se adquiere.",
                    "es-MX": "El jugador cuyo número de posición se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le numéro d’emplacement.",
                    "it-IT": "Il Giocatore il cui numero dello slot sarà acquisito.",
                    "ja-JP": "スロット番号を取得するプレイヤー",
                    "ko-KR": "슬롯 번호 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego miejsce należy pozyskać.",
                    "pt-BR": "O Jogador cujo número de espaço será adquirido.",
                    "ru-RU": "Игрок номер ячейки которого нужно получить.",
                    "zh-CN": "获取此玩家的位置编号。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000BB7F",
        "descriptionLocalized": {
            "guid": "00000000BF4C",
            "en-US": "The slot number of the specified Player. In team games each team has slots 0 through 5. In free-for-all games slots are numbered 0 through 11.",
            "de-DE": "Die Slot-Nummer des festgelegten Spielers. In Teamspielen hat jedes Team die Slots 0 bis 5. In klassischen Deathmatches werden die Slots mit 0 bis 11 durchnummeriert.",
            "es-ES": "Número de ranura del jugador especificado. En partidas por equipos cada equipo tiene ranuras del 0 al 5. En partidas todos contra todos las ranuras van del 0 al 11.",
            "es-MX": "El número de posición del jugador especificado. En las partidas de equipos cada equipo cuenta con las posiciones 0 a 5. En las partidas de todos contra todos las posiciones se cuentan del 0 al 11.",
            "fr-FR": "Le numéro d’emplacement du joueur spécifié. Dans les parties en équipe chaque équipe dispose d’emplacements allant de 0 à 5. Dans les parties en mode Chacun pour soi les emplacements sont numérotés de 0 à 11.",
            "it-IT": "Il numero dello slot del Giocatore specificato. Nelle partite di squadra ogni squadra comprende gli slot da 0 a 5. Nelle partite Tutti contro tutti gli slot sono numerati da 0 a 11.",
            "ja-JP": "指定したプレイヤーのスロット番号。チーム・ゲームの場合、各チームには0～5の番号を振られたスロットがある。FFAの場合、スロットには0～11の番号が振られている",
            "ko-KR": "지정된 플레이어의 슬롯 번호입니다. 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.",
            "pl-PL": "Numer miejsca określonego gracza. W grach drużynowych każda ekipa ma miejsca od 0 do 5. W grach każdy na każdego miejsca są numerowane od 0 do 11.",
            "pt-BR": "O número de espaço do Jogador especificado. Em partidas em equipe cada equipe tem espaços de 0 a 5. Em partidas todos contra todos os espaços são numerados de 0 a 11.",
            "ru-RU": "Номер ячейки указанного игрока. В командных играх у каждой команды есть ячейки с номерами от 0 до 5. В FFA ячейки имеют номера от 0 до 11.",
            "zh-CN": "指定玩家的位置编号。在队伍模式中，每个队伍中玩家的位置编号为0到5的数字；在自由混战模式中，位置编号为0到11。"
        },
        "en-US": "Slot Of",
        "es-MX": "Puesto de",
        "fr-FR": "Emplacement de",
        "ja-JP": "スロット: ",
        "pt-BR": "Espaço de",
        "zh-CN": "栏位"
    },
    "_&getSpeed": {
        "description": "The current speed of a player in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE5A",
                    "en-US": "The Player whose speed to acquire.",
                    "de-DE": "Der Spieler dessen Geschwindigkeit abgerufen werden soll.",
                    "es-ES": "Jugador cuya velocidad se adquiere.",
                    "es-MX": "El jugador cuya velocidad se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la vitesse.",
                    "it-IT": "Il Giocatore la cui velocità non direzionale sarà acquisita.",
                    "ja-JP": "速さを取得するプレイヤー",
                    "ko-KR": "속도 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego szybkość należy pozyskać.",
                    "pt-BR": "O Jogador cuja velocidade será adquirida.",
                    "ru-RU": "Игрок скорость которого нужно определить.",
                    "zh-CN": "获取此玩家的速度。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25D",
        "descriptionLocalized": {
            "guid": "00000000BE59",
            "en-US": "The current speed of a Player in meters per second.",
            "de-DE": "Die aktuelle Geschwindigkeit eines Spielers in Metern pro Sekunde.",
            "es-ES": "Velocidad actual de un jugador en metros por segundo.",
            "es-MX": "La velocidad actual de un jugador en metros por segundo.",
            "fr-FR": "La vitesse actuelle d’un joueur en mètres par seconde.",
            "it-IT": "La velocità non direzionale attuale di un Giocatore in metri al secondo.",
            "ja-JP": "プレイヤーの現在の速さ（メートル秒）",
            "ko-KR": "플레이어의 현재 속도초당 미터입니다.",
            "pl-PL": "Bieżąca szybkość gracza w metrach na sekundę.",
            "pt-BR": "A velocidade atual de um Jogador em metros por segundo.",
            "ru-RU": "Скорость игрока в данный момент метры в секунду.",
            "zh-CN": "一名玩家的当前速度，单位为米秒。"
        },
        "en-US": "Speed Of",
        "es-MX": "Velocidad de",
        "fr-FR": "Vitesse de",
        "ja-JP": "速さ: ",
        "pt-BR": "Velocidade de",
        "zh-CN": "速度"
    },
    "_&getSpeedInDirection": {
        "description": "The current speed of a player in a specific direction in meters per second.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE5A",
                    "en-US": "The Player whose speed to acquire.",
                    "de-DE": "Der Spieler dessen Geschwindigkeit abgerufen werden soll.",
                    "es-ES": "Jugador cuya velocidad se adquiere.",
                    "es-MX": "El jugador cuya velocidad se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la vitesse.",
                    "it-IT": "Il Giocatore la cui velocità non direzionale sarà acquisita.",
                    "ja-JP": "速さを取得するプレイヤー",
                    "ko-KR": "속도 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego szybkość należy pozyskać.",
                    "pt-BR": "O Jogador cuja velocidade será adquirida.",
                    "ru-RU": "Игрок скорость которого нужно определить.",
                    "zh-CN": "获取此玩家的速度。"
                }
            },
            {
                "name": "DIRECTION",
                "description": "The direction of travel in which to measure the player's speed.",
                "type": "Direction",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE5F",
                    "en-US": "The direction of travel in which to measure the Player's speed.",
                    "de-DE": "Die Fortbewegungsrichtung in der die Geschwindigkeit des Spielers gemessen werden soll.",
                    "es-ES": "Dirección de desplazamiento en la cual se mide la velocidad del jugador.",
                    "es-MX": "La dirección del recorrido en el cual se medirá la velocidad del jugador.",
                    "fr-FR": "La direction de déplacement sur laquelle mesurer la vitesse du joueur.",
                    "it-IT": "La direzione di movimento non direzionale verso la quale misurare la velocità del Giocatore.",
                    "ja-JP": "プレイヤーの速さを測定する方向",
                    "ko-KR": "플레이어의 속도를 측정할 이동 방향입니다.",
                    "pl-PL": "Kierunek ruchu w którym należy zmierzyć szybkość gracza.",
                    "pt-BR": "A direção de movimento na qual a velocidade do Jogador será medida.",
                    "ru-RU": "Направление движения в котором нужно измерить скорость игрока.",
                    "zh-CN": "行动的方向，用于测量玩家速度。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B260",
        "descriptionLocalized": {
            "guid": "00000000BE61",
            "en-US": "The current speed of a Player in a specific Direction in meters per second.",
            "de-DE": "Die aktuelle Geschwindigkeit eines Spielers in eine bestimmten Richtung in Metern pro Sekunde.",
            "es-ES": "Velocidad actual de un jugador en una dirección concreta en metros por segundo.",
            "es-MX": "La velocidad actual de un jugador en una dirección determinada en metros por segundo.",
            "fr-FR": "La vitesse actuelle d’un joueur dans une direction spécifique en mètres par seconde.",
            "it-IT": "La velocità non direzionale attuale di un Giocatore in una Direzione specifica in metri al secondo.",
            "ja-JP": "プレイヤーの、特定方向への現在の速さ（メートル秒）",
            "ko-KR": "지정된 방향에서 플레이어의 현재 속도초당 미터입니다.",
            "pl-PL": "Bieżąca szybkość gracza w określonym kierunku w metrach na sekundę.",
            "pt-BR": "A velocidade atual de um Jogador em uma direção específica em metros por segundo.",
            "ru-RU": "Скорость игрока метры в секунду в указанном направлении и в данный момент.",
            "zh-CN": "一名玩家在指定方向上的当前速度，单位为米秒。"
        },
        "en-US": "Speed Of In Direction",
        "es-MX": "Velocidad deen dirección",
        "fr-FR": "Vitesse dans la direction donnée de",
        "ja-JP": "速さと方向: ",
        "pt-BR": "Velocidade de na Direção",
        "zh-CN": "指定方向速度"
    },
    "_&getStatistic": {
        "description": "Provides a statistic of the specified player (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.",
        "args": [
            {
                "name": "Player",
                "description": "The Player whose statistic to acquire.",
                "type": "Player",
                "default": "Event Player",
                "descriptionLocalized": {
                    "guid": "000000012508",
                    "en-US": "The Player whose statistic to acquire.",
                    "de-DE": "Der Spieler dessen Statistikwert abgerufen werden soll.",
                    "es-ES": "Jugador cuyas estadísticas se adquieren.",
                    "es-MX": "El jugador cuya estadística se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les statistiques.",
                    "it-IT": "Il giocatore del quale acquisire la statistica.",
                    "ja-JP": "統計を取得するプレイヤー",
                    "ko-KR": "통계치를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego statystykę należy pozyskać.",
                    "pt-BR": "O Jogador cuja estatística será obtida.",
                    "ru-RU": "Игрок статистику которого нужно определить.",
                    "zh-CN": "获取此玩家的数据。"
                }
            },
            {
                "name": "Statistic",
                "description": "The statistic to acquire.",
                "type": "Stat",
                "default": "All Damage Dealt",
                "descriptionLocalized": {
                    "guid": "00000001250B",
                    "en-US": "The statistic to acquire.",
                    "de-DE": "Der Statistikwert der abgerufen werden soll.",
                    "es-ES": "Las estadísticas que se adquieren.",
                    "es-MX": "La estadística que se adquirirá.",
                    "fr-FR": "Les statistiques à acquérir.",
                    "it-IT": "La statistica da acquisire.",
                    "ja-JP": "取得する統計",
                    "ko-KR": "가져올 통계치입니다.",
                    "pl-PL": "Statystyka która zostanie pozyskana.",
                    "pt-BR": "A estatística a ser obtida.",
                    "ru-RU": "Статистика которую нужно определить.",
                    "zh-CN": "获取数据。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "000000012507",
        "descriptionLocalized": {
            "guid": "000000012506",
            "en-US": "Provides a statistic of the specified Player limited to the current match. Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics.",
            "de-DE": "Gibt einen Statistikwert des festgelegten Spielers aus auf das aktuelle Match beschränkt. Statistikwerte werden nur erfasst während das Spiel im Gange ist. Für Bots werden keine Statistikwerte erfasst.",
            "es-ES": "Proporciona una estadística del jugador especificado limitado por la partida en curso. Las estadísticas solo se recogen cuando el juego está en curso. Los robots no recogen estadísticas.",
            "es-MX": "Proporciona una estadística del jugador especificado limitado a la partida actual. Las estadísticas solo se calculan cuando la partida está en progreso. Los robots de entrenamiento no se incluyen en las estadísticas.",
            "fr-FR": "Affiche les statistiques du joueur spécifié limité à la partie en cours. Les statistiques sont uniquement collectées lorsque la partie est en cours. Les I.A. ne collectent pas de statistiques.",
            "it-IT": "Fornisce una statistica del Giocatore specificato limitato alla partita attuale. Le statistiche sono raccolte solo durante la partita. I bot di prova non raccolgono statistiche.",
            "ja-JP": "指定したプレイヤーの統計を表示する（現在のマッチに限定）。統計はゲーム進行中のみ計測される。ダミーボットの統計は計測されない",
            "ko-KR": "특정 플레이어의 통계치를 제공합니다. 현재 경기 한정 통계치는 게임이 진행 중인 동안에만 수집됩니다. 더미 봇은 통계치를 수집하지 않습니다.",
            "pl-PL": "Udostępnia statystykę określonego gracza ograniczoną do bieżącego meczu. Statystyki są gromadzone tylko podczas gry. Boty nie zbierają statystyk.",
            "pt-BR": "Fornece uma estatística do Jogador especificado limitado à partida atual. As estatísticas só são obtidas quando o jogo está em andamento. Bots não produzem estatísticas.",
            "ru-RU": "Дает статистику указанного игрока только за текущий матч. Данные статистики фиксируются только в течение матча. ИИ-манекены не участвуют в сборе статистики.",
            "zh-CN": "提供指定玩家的数据（仅限当前比赛）。仅在游戏进行时收集数据。机器人不会收集数据。"
        },
        "en-US": "Player Stat",
        "es-MX": "Estadística de jugador",
        "fr-FR": "Stats de joueur",
        "ja-JP": "プレイヤーの統計",
        "pt-BR": "Estatística de Jogador",
        "zh-CN": "玩家数据"
    },
    "_&getTeam": {
        "description": "The team of a player. If the game mode is free-for-all, the team is considered to be all.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose team to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEA9",
                    "en-US": "The Player whose Team to acquire.",
                    "de-DE": "Der Spieler dessen Team abgerufen werden soll.",
                    "es-ES": "Jugador cuyo equipo se adquiere.",
                    "es-MX": "El jugador cuyo equipo se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir l’équipe.",
                    "it-IT": "Il Giocatore la cui Squadra sarà acquisita.",
                    "ja-JP": "チームを取得するプレイヤー",
                    "ko-KR": "팀 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego drużynę należy pozyskać.",
                    "pt-BR": "O Jogador cuja Equipe será adquirida.",
                    "ru-RU": "Игрок команду которого нужно определить.",
                    "zh-CN": "获取此玩家的队伍。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Team",
        "guid": "00000000B279",
        "descriptionLocalized": {
            "guid": "00000000BEA8",
            "en-US": "The Team of a Player. If the game mode is free-for-all the Team is considered to be All.",
            "de-DE": "Das Team eines Spielers. Wenn es sich beim Spielmodus um ein klassisches Deathmatch handelt gilt das Team als [All].",
            "es-ES": "Equipo de un jugador. Si el modo de juego es de todos contra todos se considera que el equipo es «Todos».",
            "es-MX": "El equipo de un jugador. Si el modo de juego es de todos contra todos el equipo será considerado todos los jugadores.",
            "fr-FR": "L’équipe d’un joueur. En mode de jeu Chacun pour soi l’équipe est réglée sur « Tous ».",
            "it-IT": "La Squadra di un Giocatore. Se la modalità di gioco è Tutti contro tutti la Squadra viene considerata come Tutti.",
            "ja-JP": "プレイヤーのチーム。ゲーム・モードがFFAの場合、チームは「すべて」と認識される",
            "ko-KR": "해당 플레이어의 소속 팀입니다. 게임 모드가 개별 전투인 경우 팀은 All로 간주됩니다.",
            "pl-PL": "Drużyna gracza. Jeśli trybem gry jest każdy na każdego drużyna zostanie ustawiona na „All” Wszystkie.",
            "pt-BR": "A Equipe de um Jogador. Se o modo de jogo for todos contra todos a Equipe será considerada Todas.",
            "ru-RU": "Команда игрока. Если игра идет в режиме FFA используется значение [All].",
            "zh-CN": "一支玩家所在的队伍。如果在自由混战模式中，则“队伍”视为“全部”。"
        },
        "en-US": "Team Of",
        "es-MX": "Equipo de",
        "fr-FR": "Équipe de",
        "ja-JP": "チーム: ",
        "pt-BR": "Equipe de",
        "zh-CN": "所在队伍"
    },
    "_&getThrottle": {
        "description": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose directional input to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BED7",
                    "en-US": "The Player whose directional input to acquire.",
                    "de-DE": "Der Spieler dessen Richtungseingabe abgerufen werden soll.",
                    "es-ES": "Jugador cuya entrada direccional se adquiere.",
                    "es-MX": "El jugador cuya entrada direccional se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir l’entrée directionnelle.",
                    "it-IT": "Il Giocatore il cui input direzionale sarà acquisito.",
                    "ja-JP": "方向入力を取得するプレイヤー",
                    "ko-KR": "방향 입력 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego kierunkowe dane wejściowe należy pozyskać.",
                    "pt-BR": "O Jogador cuja entrada direcional será adquirida.",
                    "ru-RU": "Игрок аргумент направления которого нужно определить.",
                    "zh-CN": "获取此玩家的方向输入。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B2F5",
        "descriptionLocalized": {
            "guid": "00000000BED6",
            "en-US": "The directional input of a Player represented by a Vector with horizontal input on the X component positive to the left and vertical input on the Z component positive upward.",
            "de-DE": "Die Richtungseingabe eines Spielers dargestellt durch einen Vektor mit horizontaler Eingabe auf der X-Komponente positiv nach links und mit vertikaler Eingabe auf der Z-Komponente positiv nach oben.",
            "es-ES": "Entrada direccional de un jugador representada por un vector con entrada horizontal en el componente X positivo hacia la izquierda y entrada vertical en el componente Z positivo hacia arriba.",
            "es-MX": "La entrada direccional de un jugador representada por un vector con entrada horizontal en el componente X positivo hacia la izquierda y entrada vertical en el componente Z positivo hacia arriba.",
            "fr-FR": "L’entrée directionnelle d’un joueur représentée par un vecteur doté d’une entrée horizontale pour la composante X positive vers la gauche et d’une entrée verticale pour la composante Z positive vers le haut.",
            "it-IT": "L'input direzionale di un Giocatore rappresentato da un Vettore con input direzionale sulla componente X positiva verso sinistra e un input verticale sulla componente Z positiva verso l'alto.",
            "ja-JP": "プレイヤーの方向入力。水平方向の入力がX成分（正数が左）、垂直方向の入力がZ成分（正数が上）のベクトルで表される",
            "ko-KR": "한 플레이어의 방향 입력 정보입니다. X 구성요소가 횡방향 입력 정보왼쪽이 양 Z 구성요소가 종방향 입력 정보위쪽이 양인 벡터로 표현됩니다.",
            "pl-PL": "Kierunkowe dane wejściowe gracza reprezentowane przez parametr „Vector” Wektor z danymi poziomymi ze zmiennej „X Component” Komponent X dodatnie do prawej i danymi pionowymi ze zmiennej „Z Component” Komponent Z dodatnie na górze.",
            "pt-BR": "A entrada direcional de um Jogador representada por um Vetor com entrada horizontal no componente X positiva para a esquerda e entrada vertical no componente Z positiva para cima.",
            "ru-RU": "Аргумент направления игрока выраженный вектором с горизонтальным компонентом X положительное значение соответствует направлению влево и вертикальным компонентом Z положительное значение соответствует направлению вверх.",
            "zh-CN": "玩家所输入的方向，通过一个矢量表示，X轴为水平（正值代表向左），Z轴为垂直（正值代表向前）。"
        },
        "en-US": "Throttle Of",
        "es-MX": "Aceleración de",
        "fr-FR": "Accélération de",
        "ja-JP": "スロットル: ",
        "pt-BR": "Aceleração de",
        "zh-CN": "阈值"
    },
    "_&getUltCharge": {
        "description": "The current ultimate ability charge percentage of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate charge percentage to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BDF4",
                    "en-US": "The Player whose ultimate charge percentage to acquire.",
                    "de-DE": "Der Spieler dessen prozentuale Aufladerate für seine ultimative Fähigkeit abgerufen werden soll.",
                    "es-ES": "Jugador cuyo porcentaje de carga de definitiva se adquiere.",
                    "es-MX": "El jugador cuyo porcentaje de carga de habilidad máxima se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le pourcentage de charge ultime.",
                    "it-IT": "Il Giocatore la cui percentuale di carica della Ultra sarà acquisita.",
                    "ja-JP": "アルティメット・チャージのパーセンテージを取得するプレイヤー",
                    "ko-KR": "궁극기 충전량 비율 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego procent naładowania superzdolności należy pozyskać.",
                    "pt-BR": "O Jogador cuja porcentagem de carga da suprema será adquirida.",
                    "ru-RU": "Игрок процент заряда суперспособности которого нужно узнать.",
                    "zh-CN": "获取此玩家当前终极技能的充能百分比。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "0000000081C5",
        "descriptionLocalized": {
            "guid": "00000000BDF3",
            "en-US": "The current ultimate ability charge percentage of a Player.",
            "de-DE": "Die aktuelle prozentuale Aufladerate für die ultimative Fähigkeit eines Spielers.",
            "es-ES": "Porcentaje actual de carga de la habilidad definitiva de un jugador.",
            "es-MX": "El porcentaje de carga de habilidad máxima actual de un jugador.",
            "fr-FR": "Le pourcentage de charge ultime actuel d’un joueur.",
            "it-IT": "L'attuale percentuale di carica della Ultra di un Giocatore.",
            "ja-JP": "プレイヤーのアルティメット・アビリティのチャージ・パーセンテージ",
            "ko-KR": "플레이어의 현재 궁극기 충전량 비율입니다.",
            "pl-PL": "Bieżący procent naładowania superzdolności gracza.",
            "pt-BR": "A porcentagem atual de carga da habilidade suprema de um Jogador.",
            "ru-RU": "Процент заряда суперспособности игрока в данный момент.",
            "zh-CN": "一名玩家当前终极技能的充能百分比。"
        },
        "en-US": "Ultimate Charge Percent",
        "es-MX": "Porcentaje de carga de la habilidad máxima",
        "fr-FR": "Pourcentage de charge de la capacité ultime",
        "ja-JP": "アルティメット・チャージのパーセンテージ",
        "pt-BR": "Percentual de Carga da Suprema",
        "zh-CN": "终极技能充能百分比"
    },
    "_&getVelocity": {
        "description": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose velocity to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE56",
                    "en-US": "The Player whose velocity to acquire.",
                    "de-DE": "Der Spieler dessen Geschwindigkeitsvektor abgerufen werden soll.",
                    "es-ES": "Jugador cuya velocidad direccional se adquiere.",
                    "es-MX": "El jugador cuya velocidad se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la vélocité.",
                    "it-IT": "Il Giocatore la cui velocità direzionale sarà acquisita.",
                    "ja-JP": "速度を取得するプレイヤー",
                    "ko-KR": "속도 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego prędkość należy pozyskać.",
                    "pt-BR": "O Jogador cuja rapidez será adquirida.",
                    "ru-RU": "Игрок векторную скорость которого нужно определить.",
                    "zh-CN": "获取此玩家的速度。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Velocity",
        "guid": "00000000B25C",
        "descriptionLocalized": {
            "guid": "00000000BE55",
            "en-US": "The current velocity of a Player as a Vector. If the Player is on a surface the Y component of this velocity will be 0 even when traveling up or down a slope.",
            "de-DE": "Der aktuelle Geschwindigkeitsvektor eines Spielers. Wenn ein Spieler sich auf einer Oberfläche befindet beträgt die Y-Komponente des Geschwindigkeitsvektors 0 selbst bei Aufwärts- und Abwärtsbewegungen bei Hängen.",
            "es-ES": "Velocidad velocity actual de un jugador en forma de vector. Si el jugador está sobre una superficie el componente Y de esta velocidad será «0» incluso si el desplazamiento es subir o bajar una cuesta.",
            "es-MX": "La velocidad actual de un jugador como vector. Si el jugador está en una superficie el componente Y de esta velocidad será 0 incluso cuando sube o baja una pendiente.",
            "fr-FR": "La vélocité actuelle d’un joueur sous forme de vecteur. Si le joueur se trouve sur une surface la composante Y de cette vélocité sera de 0 même s’il monte ou descend une pente.",
            "it-IT": "La velocità direzionale attuale di un Giocatore in forma di Vettore. Se un Giocatore si trova sulla superficie la componente Y della velocità direzionale sarà pari a 0 anche se si sta muovendo su un piano inclinato.",
            "ja-JP": "プレイヤーの現在の速度を表すベクトル。プレイヤーが表面上にいる場合、傾斜を上下に移動していてもY成分の速度は0となる",
            "ko-KR": "플레이어의 현재 속도벡터입니다. 해당 플레이어가 표면 위에 있는 경우 경사로를 오르내린다고 해도 Y 구성요소 속도는 0입니다.",
            "pl-PL": "Bieżąca prędkość gracza jako parametr „Vector” Wektor. Jeśli gracz znajduje się na powierzchni komponentem Y prędkości będzie 0 nawet przy poruszaniu się w górę lub w dół pochyleń.",
            "pt-BR": "A rapidez atual de um Jogador na forma de um Vetor. Se o Jogador estiver em uma superfície o componente Y dessa rapidez será 0 mesmo ao subir ou descer uma rampa.",
            "ru-RU": "Векторная скорость игрока в данный момент представленная значением [Vector]. Если игрок находится на поверхности то компонент Y данной скорости будет равен 0 даже если игрок движется вверх или вниз по склону.",
            "zh-CN": "玩家当前的速度，此值为一个矢量。如果玩家位于表面上，则矢量在Y方向上的分量为0，即使在上坡或下坡。"
        },
        "en-US": "Velocity Of",
        "es-MX": "Rapidez de",
        "fr-FR": "Vélocité de",
        "ja-JP": "速度: ",
        "pt-BR": "Rapidez de",
        "zh-CN": "速率"
    },
    "_&getVerticalFacingAngle": {
        "description": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical facing angle to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEB6",
                    "en-US": "The Player whose vertical facing angle to acquire.",
                    "de-DE": "Der Spieler dessen vertikaler Blickrichtungswinkel abgerufen werden soll.",
                    "es-ES": "Jugador cuyo ángulo de orientación vertical se adquiere.",
                    "es-MX": "El jugador cuyo ángulo de orientación vertical se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir l’angle d’orientation vertical.",
                    "it-IT": "Il Giocatore il cui angolo verticale di osservazione sarà acquisito.",
                    "ja-JP": "垂直方向の角度を取得するプレイヤー",
                    "ko-KR": "바라보고 있는 방향의 종축각 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego kąt pionowy skierowania należy pozyskać.",
                    "pt-BR": "O Jogador cujo ângulo de direção vertical será adquirido.",
                    "ru-RU": "Игрок вертикальный угол взгляда которого нужно определить.",
                    "zh-CN": "获取此玩家的面向角度。"
                }
            }
        ],
        "return": "float",
        "guid": "00000000B280",
        "descriptionLocalized": {
            "guid": "00000000BEB7",
            "en-US": "The vertical angle in degrees of a Player's current facing relative to the world. This Value increases as the Player looks down.",
            "de-DE": "Der vertikale Winkel der aktuellen Blickrichtung eines Spielers relativ zur Welt in Grad. Dieser Wert steigt wenn der Spieler nach unten blickt.",
            "es-ES": "Ángulo vertical en grados de la orientación actual de un jugador respecto al mundo. Este valor aumenta cuando el jugador mira hacia abajo.",
            "es-MX": "El ángulo vertical en grados de la orientación actual de un jugador con relación al mundo. Este valor aumenta a medida que el jugador mira hacia abajo.",
            "fr-FR": "L’angle vertical en degrés de l’orientation actuelle d’un joueur par rapport au monde. Cette valeur augmente lorsque le joueur baisse le regard.",
            "it-IT": "L'angolo verticale in gradi dell'attuale direzione di osservazione di un Giocatore relativa al mondo di gioco. Questo Valore aumenta più il Giocatore guarda verso il basso.",
            "ja-JP": "ワールドに対してプレイヤーの向きを表す頂角（度）。プレイヤーが下を向くと値は上昇する",
            "ko-KR": "월드에 대해 상대적으로 플레이어가 바라보고 있는 방향의 종축각단위: 도입니다. 이 값은 플레이어가 내려다보는 경우 증가합니다.",
            "pl-PL": "Kąt pionowy bieżącego skierowania gracza względem świata podany w stopniach. Wartość ta rośnie kiedy gracz patrzy w dół.",
            "pt-BR": "O ângulo vertical em graus da direção para a qual um Jogador está virado em relação ao mundo. Esse Valor aumenta quando o Jogador olha para baixo.",
            "ru-RU": "Вертикальный угол в градусах выражающий направление взгляда игрока в игровом мире. Чем больше значение тем ниже к земле направлен взгляд игрока.",
            "zh-CN": "玩家当前面对的方向与地图的垂直夹角。当玩家转向下方时这个值会增加。"
        },
        "en-US": "Vertical Facing Angle Of",
        "es-MX": "Ángulo vertical de orientación de",
        "fr-FR": "Angle vertical du regard de",
        "ja-JP": "対面頂角: ",
        "pt-BR": "Ângulo Vertical Frontal de",
        "zh-CN": "垂直朝向角度"
    },
    "_&getVerticalSpeed": {
        "description": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose vertical speed to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE5E",
                    "en-US": "The Player whose vertical speed to acquire.",
                    "de-DE": "Der Spieler dessen vertikale Geschwindigkeit abgerufen werden soll.",
                    "es-ES": "Jugador cuya velocidad vertical se adquiere.",
                    "es-MX": "El jugador cuya velocidad vertical se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la vitesse verticale.",
                    "it-IT": "Il Giocatore la cui velocità verticale non direzionale sarà acquisita.",
                    "ja-JP": "垂直方向の速度を取得するプレイヤー",
                    "ko-KR": "종축 속도 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego szybkość pionową należy pozyskać.",
                    "pt-BR": "O Jogador cuja velocidade vertical será adquirida.",
                    "ru-RU": "Игрок вертикальную скорость которого нужно определить.",
                    "zh-CN": "获取此玩家的垂直速度。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25F",
        "descriptionLocalized": {
            "guid": "00000000BE5D",
            "en-US": "The current vertical speed of a Player in meters per second. This measurement excludes all horizontal motion including motion while traveling up and down slopes.",
            "de-DE": "Die aktuelle vertikale Geschwindigkeit eines Spielers in Metern pro Sekunde. Diese Messung schließt sämtliche horizontale Bewegung aus einschließlich der Aufwärts- und Abwärtsbewegung bei Hängen.",
            "es-ES": "Velocidad vertical actual de un jugador en metros por segundo. Esta medida excluye todo el movimiento horizontal incluido el movimiento al subir y bajar cuestas.",
            "es-MX": "La velocidad vertical actual de un jugador en metros por segundo. Esta medición excluye todo movimiento horizontal incluido el movimiento mientras subes o bajas una pendiente.",
            "fr-FR": "La vitesse verticale actuelle d’un joueur en mètres par seconde. Cette mesure ignore tout mouvement horizontal y compris les mouvements le long des pentes.",
            "it-IT": "La velocità verticale non direzionale attuale di un Giocatore in metri al secondo. Questa misura esclude qualsiasi movimento orizzontale inclusi quelli effettuati su un piano inclinato.",
            "ja-JP": "プレイヤーの、垂直方向への現在の速さ（メートル秒）。この測定からは、すべての水平方向の移動（傾斜地の上下移動も含む）が除外される",
            "ko-KR": "플레이어의 현재 종축 속도초당 미터입니다. 여기에는 경사로를 오르내리는 등의 움직임 등 모든 횡축 이동이 배제됩니다.",
            "pl-PL": "Bieżąca szybkość pionowa gracza w określonym kierunku w metrach na sekundę. Pomiar ten wyklucza wszelki ruch poziomy w tym w górę i w dół pochyleń.",
            "pt-BR": "A velocidade vertical atual de um Jogador em metros por segundo. Essa medição exclui todo o deslocamento horizontal incluindo ao subir e descer rampas.",
            "ru-RU": "Вертикальная скорость игрока метры в секунду в данный момент. Это значение измерения исключает любые горизонтальные смещения в том числе движение по склонам.",
            "zh-CN": "一名玩家在水平方向上的当前速度，单位为米秒。排除所有垂直方向的运动，包括沿斜坡方向的运动。"
        },
        "en-US": "Vertical Speed Of",
        "es-MX": "Velocidad vertical de",
        "fr-FR": "Vitesse verticale de",
        "ja-JP": "垂直速度: ",
        "pt-BR": "Velocidade Vertical de",
        "zh-CN": "垂直速度"
    },
    "_&hasSpawned": {
        "description": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose presence in world to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C195",
                    "en-US": "The Player icon entity or effect entity whose presence in world to check.",
                    "de-DE": "Der Spieler die Iconentität oder die Effektentität deren Vorhandensein in der Welt geprüft werden soll.",
                    "es-ES": "Jugador entidad de icono o entidad de efecto cuya presencia en el mundo se comprueba.",
                    "es-MX": "El jugador la entidad de ícono o de efecto cuya presencia en el mundo se verificará.",
                    "fr-FR": "Le joueur l’entité d’icône ou l’entité d’effet dont il faut vérifier la présence dans le monde.",
                    "it-IT": "Il Giocatore l'entità icona o l'entità effetto la cui presenza nel mondo sarà controllata.",
                    "ja-JP": "ワールド内に存在するかをチェックするプレイヤー、アイコン・エンティティ、エフェクト・エンティティ",
                    "ko-KR": "월드에서 존재를 확인할 플레이어 아이콘 개체 또는 효과 개체입니다.",
                    "pl-PL": "Gracz encja symbolu lub encja efektu których istnienie w świecie zostanie sprawdzone.",
                    "pt-BR": "O Jogador entidade de ícone ou entidade de efeito cuja presença no mundo será verificada.",
                    "ru-RU": "Игрок экземпляр значка или экземпляр эффекта присутствие которого в игровом мире нужно проверить.",
                    "zh-CN": "检测此玩家、图标实体或效果实体是否存在于地图中。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000C192",
        "descriptionLocalized": {
            "guid": "00000000C193",
            "en-US": "Whether an Entity has spawned in the world. Results in False for Players who have not chosen a Hero yet.",
            "de-DE": "Ob eine Entität in der Welt erschienen ist. Ergibt False für Spieler die noch keinen Helden ausgewählt haben.",
            "es-ES": "Si una entidad ha aparecido en el mundo. El resultado es «False» para los jugadores que no hayan escogido un héroe aún.",
            "es-MX": "Verifica si una entidad ha aparecido en el mundo. El resultado será falso si los jugadores todavía no han seleccionado un héroe.",
            "fr-FR": "Si une entité est apparue dans le monde. Renvoie un résultat « Faux » pour les joueurs qui n’ont pas encore choisi de héros.",
            "it-IT": "Specifica se una Entità si è generata nel mondo. Risulta False per i Giocatori che non hanno ancora scelto un Eroe.",
            "ja-JP": "エンティティがスポーンしたかどうかプレイヤーがヒーローを選択していない場合は「FALSE」になる",
            "ko-KR": "월드에 개체가 생성되었는지 여부입니다. 플레이어가 영웅을 선택하지 않은 경우 결과값은 False입니다.",
            "pl-PL": "Czy encja pojawiła się w świecie. Zwraca wynik Fałsz dla graczy którzy nie wybrali jeszcze bohatera.",
            "pt-BR": "Se uma Entidade surgiu no mundo ou não. Retorna o resultado Falso para Jogadores que ainda não escolheram um Herói.",
            "ru-RU": "Определяет создан ли экземпляр в игровом мире. Возвращает ложное значение False для игроков которые еще не выбрали героев.",
            "zh-CN": "一个实体是否存在于地图中。如果玩家尚未选择英雄，则返回结果为“假“。 "
        },
        "en-US": "Has Spawned",
        "es-MX": "Ha aparecido",
        "fr-FR": "Apparition",
        "ja-JP": "スポーンした",
        "pt-BR": "Surgiu",
        "zh-CN": "已重生"
    },
    "_&hasStatusEffect": {
        "description": "Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEFC",
                    "en-US": "The Player whose status to check.",
                    "de-DE": "Der Spieler dessen Status geprüft werden soll.",
                    "es-ES": "Jugador cuyo estado se comprueba.",
                    "es-MX": "El jugador cuyo estado se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut.",
                    "it-IT": "Il Giocatore il cui stato sarà controllato.",
                    "ja-JP": "ステータスを確認するプレイヤー",
                    "ko-KR": "상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status será verificado.",
                    "ru-RU": "Игрок статус которого нужно проверить.",
                    "zh-CN": "检测此玩家的状态。"
                }
            },
            {
                "name": "STATUS",
                "description": "The status to check for.",
                "type": "Status",
                "default": "HACKED",
                "descriptionLocalized": {
                    "guid": "00000000BEFD",
                    "en-US": "The status to check for.",
                    "de-DE": "Der Status auf den geprüft werden soll.",
                    "es-ES": "Estado que se comprueba.",
                    "es-MX": "El estado que se verificará.",
                    "fr-FR": "Le statut à vérifier.",
                    "it-IT": "Lo stato da controllare.",
                    "ja-JP": "チェックするステータス",
                    "ko-KR": "확인할 상태입니다.",
                    "pl-PL": "Status do sprawdzenia.",
                    "pt-BR": "O status a ser verificado.",
                    "ru-RU": "Проверяемый статус.",
                    "zh-CN": "要检测的状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B363",
        "descriptionLocalized": {
            "guid": "00000000BEFB",
            "en-US": "Whether the specified Player has the specified status either from the Set Status Action or from a non-scripted game mechanic.",
            "de-DE": "Ob der festgelegte Spieler den festgelegten Status hat entweder über die Aktion [Set Status] oder eine nicht geskriptete Spielmechanik.",
            "es-ES": "Si el jugador especificado tiene el estado indicado ya sea por la acción «Set Status» o por una mecánica del juego sin script.",
            "es-MX": "Verifica si el jugador especificado tiene el estado especificado ya sea por la acción Establecer estado o por una mecánica de juego no secuenciada.",
            "fr-FR": "Si le joueur spécifié possède le statut spécifié soit via l’action Définir un statut soit via un mécanisme de jeu non scripté.",
            "it-IT": "Specifica se il Giocatore specificato possiede lo stato definito sia da parte dell'Azione Set Status che da una meccanica di gioco non scriptata.",
            "ja-JP": "「ステータスを設定」アクションまたはスクリプト化していないゲーム・メカニクスによって付与される特定のステータスを、特定のプレイヤーが持っているかどうか",
            "ko-KR": "지정된 플레이어가 Set Status 액션 또는 스크립트 이외의 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.",
            "pl-PL": "Czy określony gracz ma określony status albo z działania „Set Status” Ustaw status albo z nieoskryptowanej mechaniki gry.",
            "pt-BR": "Se um Jogador especificado tem ou não o status especificado seja de uma Ação Definir Status ou de uma mecânica de jogo não roteirizada.",
            "ru-RU": "Определяет находится ли указанный игрок в рассматриваемом статусе из-за действия применения статуса [Set Status Action] или ввиду игровой механики не запланированной скриптом.",
            "zh-CN": "指定玩家是否具有指定状态，无论此状态是通过“设置状态”行为获得的还是除命令以外的游戏机制获得的。"
        },
        "en-US": "Has Status",
        "es-MX": "Tiene estado",
        "fr-FR": "Statut",
        "ja-JP": "ステータスがある",
        "pt-BR": "Tem Status",
        "zh-CN": "具有状态"
    },
    "_&isAlive": {
        "description": "Whether a player is alive.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose life to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEAB",
                    "en-US": "The Player whose life to check.",
                    "de-DE": "Bei diesem Spieler wird geprüft ob er am Leben ist.",
                    "es-ES": "Jugador cuya vida se comprueba.",
                    "es-MX": "El jugador cuya vida se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier la survie.",
                    "it-IT": "Il Giocatore la cui salute sarà controllata.",
                    "ja-JP": "生きているかどうか確認するプレイヤー",
                    "ko-KR": "생존 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego życie zostanie sprawdzone.",
                    "pt-BR": "O Jogador cuja vida será verificada.",
                    "ru-RU": "Игрок для которого выполняется проверка на жизнь.",
                    "zh-CN": "检测此玩家的生命状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B278",
        "descriptionLocalized": {
            "guid": "00000000BEAA",
            "en-US": "Whether a Player is alive.",
            "de-DE": "Ob ein Spieler am Leben ist.",
            "es-ES": "Si un jugador está vivo.",
            "es-MX": "Verifica si un jugador está vivo.",
            "fr-FR": "Si un joueur est vivant.",
            "it-IT": "Specifica se un Giocatore è vivo.",
            "ja-JP": "プレイヤーが生きているかどうか",
            "ko-KR": "플레이어의 생존 여부입니다.",
            "pl-PL": "Czy gracz jest żywy.",
            "pt-BR": "Se um Jogador está vivo ou não.",
            "ru-RU": "Это значение определяет жив ли игрок.",
            "zh-CN": "玩家是否存活。"
        },
        "en-US": "Is Alive",
        "es-MX": "Está vivo",
        "fr-FR": "En vie",
        "ja-JP": "生存している",
        "pt-BR": "É Vivo",
        "zh-CN": "存活"
    },
    "_&isCommunicating": {
        "description": "Whether a player is using a specific communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE77",
                    "en-US": "The Player whose communication status to check.",
                    "de-DE": "Der Spieler dessen Kommunikationsstatus geprüft werden soll.",
                    "es-ES": "Jugador cuyo estado de comunicación se comprueba.",
                    "es-MX": "El jugador cuyo estado de comunicación se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut de communication.",
                    "it-IT": "Il Giocatore il cui stato delle comunicazioni sarà controllato.",
                    "ja-JP": "コミュニケーション・ステータスを確認するプレイヤー",
                    "ko-KR": "의사소통 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status komunikacji zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de comunicação será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса коммуникации.",
                    "zh-CN": "检测此玩家的交流状态。"
                }
            },
            {
                "name": "TYPE",
                "description": "The type of communication to consider. The duration of emotes is exact, the duration of voice lines is assumed to be 4 seconds, and all other durations are assumed to be 2 seconds.",
                "type": "Comms",
                "default": "VOICE LINE UP",
                "descriptionLocalized": {
                    "guid": "00000000BE78",
                    "en-US": "The type of communication to consider. The duration of emotes is exact the duration of voice lines is assumed to be 4 seconds and all other durations are assumed to be 2 seconds.",
                    "de-DE": "Der Typ der zu berücksichtigenden Kommunikation. Die Dauer von Emotes ist genau als Dauer von Sprüchen werden 4 Sekunden angenommen. Für jede andere Dauer werden 2 Sekunden angenommen.",
                    "es-ES": "Tipo de comunicación que se considera. La duración de los gestos es exacta la duración de las frases se presupone que es 4 segundos y las demás duraciones se presuponen de 2 segundos.",
                    "es-MX": "El tipo de comunicación que se considerará. La duración de los gestos es exacta se calcula que la duración de las líneas de voz es de 4 segundos y que las demás duraciones son de 2 segundos.",
                    "fr-FR": "Le type de communication à prendre en compte. La durée des emotes est exacte la durée des répliques est supposée être de 4 secondes et toutes les autres durées sont supposées être de 2 secondes.",
                    "it-IT": "Il tipo di comunicazione da considerare. La durata delle emote è esatta la durata delle battute audio è impostata a 4 secondi mentre tutte le altre durate sono impostate a 2 secondi.",
                    "ja-JP": "検討されるコミュニケーションのタイプ。エモートの持続時間は固定、ボイス・ラインは4秒を想定、その他の所要時間は2秒を想定している",
                    "ko-KR": "고려할 의사소통 유형입니다. 감정 표현의 지속 시간은 정확하게 적용되며 음성 대사의 지속 시간은 4초로 간주합니다. 그 이외의 지속 시간은 2초로 간주합니다.",
                    "pl-PL": "Typ komunikacji do uwzględnienia. Czas działania emotek jest dokładny domyślny czas trwania kwestii to 4 sekundy a pozostałe czasy to domyślnie 2 sekundy.",
                    "pt-BR": "O tipo de comunicação a ser considerado. A duração dos emotes é exata presume-se que a duração das falas seja de 4 segundos e presume-se que todas as outras durações sejam de 2 segundos.",
                    "ru-RU": "Рассматриваемый тип коммуникации. Длительность эмоций ограничена жестко длительность реплик приравнивается к 4 секундам длительность остальных видов коммуникации приравнивается к 2 секундам.",
                    "zh-CN": "考察的交流类型。表情的持续时间为准确值，语音的播放时间视为4秒，其他所有交流类型的持续时间视为2秒。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B268",
        "en-US": "Is Communicating",
        "es-MX": "Se está comunicando",
        "fr-FR": "Communication",
        "ja-JP": "コミュニケーションしている",
        "pt-BR": "É Comunicando",
        "zh-CN": "正在交流"
    },
    "_&isCommunicatingAnything": {
        "description": "Whether a player is using any communication type (such as emoting, using a voice line, etc.).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose communication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE77",
                    "en-US": "The Player whose communication status to check.",
                    "de-DE": "Der Spieler dessen Kommunikationsstatus geprüft werden soll.",
                    "es-ES": "Jugador cuyo estado de comunicación se comprueba.",
                    "es-MX": "El jugador cuyo estado de comunicación se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut de communication.",
                    "it-IT": "Il Giocatore il cui stato delle comunicazioni sarà controllato.",
                    "ja-JP": "コミュニケーション・ステータスを確認するプレイヤー",
                    "ko-KR": "의사소통 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status komunikacji zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de comunicação será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса коммуникации.",
                    "zh-CN": "检测此玩家的交流状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B9E5",
        "en-US": "Is Communicating Any",
        "es-MX": "Comunica algo",
        "fr-FR": "N’importe quelle communication",
        "ja-JP": "任意の方法でコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer",
        "zh-CN": "正在与人交流"
    },
    "_&isCommunicatingEmote": {
        "description": "Whether a player is using an emote.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose emoting status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF3C",
                    "en-US": "The Player whose emoting status to check.",
                    "de-DE": "Der Spieler dessen Emote-Status geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está usando un gesto.",
                    "es-MX": "El jugador cuyo estado de gesto se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut d’utilisation d’emotes.",
                    "it-IT": "Il Giocatore il cui stato delle emote sarà controllato.",
                    "ja-JP": "エモート・ステータスを確認するプレイヤー",
                    "ko-KR": "감정 표현 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status emotkowy zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de emote será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса выражения эмоции.",
                    "zh-CN": "检测此玩家是否在使用表情。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B9E8",
        "descriptionLocalized": {
            "guid": "00000000BF3B",
            "en-US": "Whether a Player is using an emote.",
            "de-DE": "Ob ein Spieler ein Emote verwendet.",
            "es-ES": "Si un jugador está usando un gesto.",
            "es-MX": "Verifica si un jugador está utilizando un gesto.",
            "fr-FR": "Si un joueur utilise une emote.",
            "it-IT": "Specifica se un Giocatore sta usando un'emote.",
            "ja-JP": "プレイヤーがエモートを使用しているかどうか",
            "ko-KR": "플레이어가 감정 표현을 사용하는지 여부입니다.",
            "pl-PL": "Czy gracz korzysta z emotki.",
            "pt-BR": "Se um Jogador está usando um emote ou não.",
            "ru-RU": "Определяет использует ли игрок эмоцию.",
            "zh-CN": "玩家是否在使用表情。"
        },
        "en-US": "Is Communicating Any Emote",
        "es-MX": "Comunica un gesto",
        "fr-FR": "Communication par emote",
        "ja-JP": "エモートでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Emote",
        "zh-CN": "正在使用表情交流"
    },
    "_&isCommunicatingSpray": {
        "description": "Whether a Player is using a spray.",
        "args": [
            {
                "name": "Player",
                "description": "The Player whose spray status to check.",
                "type": "Player",
                "default": "Event Player",
                "descriptionLocalized": {
                    "guid": "000000012292",
                    "en-US": "The Player whose spray status to check.",
                    "de-DE": "Der Spieler dessen Spray-Status geprüft werden soll.",
                    "es-ES": "Jugador cuyo estado de grafiti se comprueba.",
                    "es-MX": "El jugador cuyo estado de spray se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut d’utilisation de tags.",
                    "it-IT": "Il Giocatore il cui stato dello spray sarà controllato.",
                    "ja-JP": "スプレー・ステータスを確認するプレイヤー",
                    "ko-KR": "스프레이 상태를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz status graffiti którego zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de spray será verificado.",
                    "ru-RU": "Игрок для которого производится проверка статуса граффити.",
                    "zh-CN": "检测此玩家的喷漆状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "000000012290",
        "descriptionLocalized": {
            "guid": "000000012291",
            "en-US": "Whether a Player is using a spray.",
            "de-DE": "Ob ein Spieler ein Spray verwendet.",
            "es-ES": "Si un jugador está usando un grafiti.",
            "es-MX": "Verifica si un jugador está utilizando un spray.",
            "fr-FR": "Si un joueur utilise un tag.",
            "it-IT": "Specifica se un Giocatore sta usando uno spray.",
            "ja-JP": "プレイヤーがスプレーを使用しているかどうか",
            "ko-KR": "플레이어가 스프레이를 사용하는지 여부입니다.",
            "pl-PL": "Czy gracz korzysta z graffiti.",
            "pt-BR": "Se um Jogador está usando um spray ou não.",
            "ru-RU": "Определяет использует ли игрок граффити.",
            "zh-CN": "玩家是否在使用喷漆。"
        },
        "en-US": "Is Communicating Any Spray",
        "es-MX": "Comunica un spray",
        "fr-FR": "Communication par tag",
        "ja-JP": "スプレーでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Spray",
        "zh-CN": "正在使用喷漆交流"
    },
    "_&isCommunicatingVoiceline": {
        "description": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose voice line status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF39",
                    "en-US": "The Player whose voice line status to check.",
                    "de-DE": "Der Spieler dessen Spruch-Status geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está usando una frase.",
                    "es-MX": "El jugador cuyo estado de línea de voz se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut de réplique.",
                    "it-IT": "Il Giocatore il cui stato delle battute audio sarà controllato.",
                    "ja-JP": "ボイス・ライン・ステータスを確認するプレイヤー",
                    "ko-KR": "음성 대사 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status kwestii zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de fala será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса использования реплики.",
                    "zh-CN": "检测此玩家是否在播放语音。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B9E7",
        "descriptionLocalized": {
            "guid": "00000000BF3A",
            "en-US": "Whether a Player is using a voice line. The duration of voice lines is assumed to be 4 seconds.",
            "de-DE": "Ob ein Spieler einen Spruch verwendet. Als Dauer von Sprüchen werden 4 Sekunden angenommen.",
            "es-ES": "Si un jugador está usando una frase se presupone que la duración de las frases es 4 segundos.",
            "es-MX": "Verifica si un jugador está utilizando una línea de voz. Se calcula que la duración de las líneas de voz es de 4 segundos.",
            "fr-FR": "Si un joueur utilise une réplique la durée des répliques est supposée de 4 secondes.",
            "it-IT": "Specifica se un Giocatore sta usando una battuta audio. La durata delle battute audio è impostata a 4 secondi.",
            "ja-JP": "プレイヤーがボイス・ラインを使用しているかどうか（ボイス・ラインの所要時間は4秒を想定）",
            "ko-KR": "플레이어가 음성 대사를 사용하는지 여부입니다음성 대사의 지속 시간은 4초로 추정.",
            "pl-PL": "Czy gracz korzysta z kwestii domyślny czas trwania kwestii to 4 sekundy.",
            "pt-BR": "Se um Jogador está usando uma fala ou não presume-se que a duração das falas seja de 4 segundos.",
            "ru-RU": "Определяет использует ли игрок реплику. Длительность реплики принимается равной 4 секундам.",
            "zh-CN": "玩家是否在播放语音（语音的长度统一视为4秒）。"
        },
        "en-US": "Is Communicating Any Voice line",
        "es-MX": "Comunica una línea de voz",
        "fr-FR": "Communication par réplique",
        "ja-JP": "ボイス・ラインでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Fala",
        "zh-CN": "正在使用语音交流"
    },
    "_&isCrouching": {
        "description": "Whether a player is crouching.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose crouching status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEC1",
                    "en-US": "The Player whose crouching status to check.",
                    "de-DE": "Der Spieler dessen Status [Is Crouching] geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está agachado.",
                    "es-MX": "El jugador cuyo estado de agachado se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut d’accroupissement.",
                    "it-IT": "Il Giocatore il cui stato di accovacciamento sarà controllato.",
                    "ja-JP": "しゃがみステータスを確認するプレイヤー",
                    "ko-KR": "웅크린 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status kucnięcia zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de agachamento será verificado.",
                    "ru-RU": "Игрок которого нужно проверить не крадется ли он.",
                    "zh-CN": "检测此玩家是否正在下蹲。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B289",
        "descriptionLocalized": {
            "guid": "00000000BEC2",
            "en-US": "Whether a Player is crouching.",
            "de-DE": "Ob ein Spieler geduckt ist.",
            "es-ES": "Si un jugador está agachado.",
            "es-MX": "Verifica si un jugador está agachado.",
            "fr-FR": "Si un joueur est accroupi.",
            "it-IT": "Specifica se un Giocatore è accovacciato.",
            "ja-JP": "プレイヤーがしゃがんでいるかどうか",
            "ko-KR": "플레이어가 웅크리고 있는 상태인지 여부입니다.",
            "pl-PL": "Czy gracz kuca.",
            "pt-BR": "Se um Jogador está agachado ou não.",
            "ru-RU": "Определяет крадется ли игрок.",
            "zh-CN": "玩家是否在下蹲。"
        },
        "en-US": "Is Crouching",
        "es-MX": "Agachado",
        "fr-FR": "Accroupi",
        "ja-JP": "しゃがんでいる",
        "pt-BR": "É Agachado",
        "zh-CN": "正在蹲下"
    },
    "_&isDead": {
        "description": "Whether a player is dead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose death to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEAC",
                    "en-US": "The Player whose death to check.",
                    "de-DE": "Bei diesem Spieler wird geprüft ob er tot ist.",
                    "es-ES": "Jugador cuya muerte se comprueba.",
                    "es-MX": "El jugador cuya muerte se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier la mort.",
                    "it-IT": "Il Giocatore la cui morte sarà controllata.",
                    "ja-JP": "倒されたかどうか確認するプレイヤー",
                    "ko-KR": "사망 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego śmierć zostanie sprawdzona.",
                    "pt-BR": "O Jogador cuja morte será verificada.",
                    "ru-RU": "Игрок для которого выполняется проверка на смерть.",
                    "zh-CN": "检测此玩家的死亡状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B277",
        "descriptionLocalized": {
            "guid": "00000000BEAD",
            "en-US": "Whether a Player is dead.",
            "de-DE": "Ob ein Spieler gestorben ist.",
            "es-ES": "Si un jugador está muerto.",
            "es-MX": "Verifica si un jugador está muerto.",
            "fr-FR": "Si un joueur est mort.",
            "it-IT": "Specifica se un Giocatore è morto.",
            "ja-JP": "プレイヤーが倒されたかどうか",
            "ko-KR": "플레이어의 사망 여부입니다.",
            "pl-PL": "Czy gracz jest martwy.",
            "pt-BR": "Se um Jogador está morto ou não.",
            "ru-RU": "Это значение определяет мертв ли игрок.",
            "zh-CN": "玩家是否死亡。"
        },
        "en-US": "Is Dead",
        "es-MX": "Está muerto",
        "fr-FR": "Mort",
        "ja-JP": "倒れている",
        "pt-BR": "É Morto",
        "zh-CN": "死亡"
    },
    "_&isDummy": {
        "description": "Whether a player is a dummy bot.",
        "args": [
            {
                "name": "PLAYER",
                "description": "Player to consider.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000CEE2",
                    "en-US": "Player to consider.",
                    "de-DE": "Der zu berücksichtigende Spieler.",
                    "es-ES": "Jugador que se considera.",
                    "es-MX": "Jugador a considerar.",
                    "fr-FR": "Joueur à prendre en compte.",
                    "it-IT": "Giocatore da considerare.",
                    "ja-JP": "推定プレイヤー",
                    "ko-KR": "고려할 플레이어입니다.",
                    "pl-PL": "Gracze do uwzględnienia.",
                    "pt-BR": "Jogador a ser considerado.",
                    "ru-RU": "Рассматриваемый игрок.",
                    "zh-CN": "考察此玩家。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000CEDF",
        "descriptionLocalized": {
            "guid": "00000000CEE0",
            "en-US": "Whether a Player is a Dummy Bot.",
            "de-DE": "Ob ein Spieler ein Bot ist.",
            "es-ES": "Si un jugador es un robot.",
            "es-MX": "Verifica si un jugador es un robot de entrenamiento.",
            "fr-FR": "Si un joueur est une I.A.",
            "it-IT": "Specifica se un Giocatore è un Bot di Prova.",
            "ja-JP": "プレイヤーがダミーボットかどうか",
            "ko-KR": "플레이어의 더미 봇 여부입니다.",
            "pl-PL": "Czy gracz jest atrapą bota.",
            "pt-BR": "Se o jogador é um bot.",
            "ru-RU": "Определяет является ли игрок ИИ-манекеном.",
            "zh-CN": "玩家是否是机器人。"
        },
        "en-US": "Is Dummy Bot",
        "es-MX": "Robot de entrenamiento",
        "fr-FR": "Est une I.A.",
        "ja-JP": "ダミーボットである",
        "pt-BR": "É Bot",
        "zh-CN": "是否是机器人"
    },
    "_&isDuplicatingAHero": {
        "description": "Whether the specified player is duplicating another hero. To check which hero, use the Hero Being Duplicated value.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose duplication status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "000000010E67",
                    "en-US": "The Player whose duplication status to check.",
                    "de-DE": "Der Spieler dessen Duplikationsstatus geprüft werden soll.",
                    "es-ES": "Jugador cuyo estado de duplicación se comprueba.",
                    "es-MX": "El jugador cuyo estado de copia se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut de duplication.",
                    "it-IT": "Il Giocatore il cui stato della Duplicazione sarà controllato.",
                    "ja-JP": "コピーステータスを確認するプレイヤー",
                    "ko-KR": "복제 상태를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego status duplikacji zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de duplicação será verificado.",
                    "ru-RU": "Игрок которого нужно проверить на использование «Дубликации».",
                    "zh-CN": "检测此玩家的人格复制状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "000000010E65",
        "en-US": "Is Duplicating",
        "es-MX": "Está copiando",
        "fr-FR": "Effectue une duplication",
        "ja-JP": "コピー中",
        "pt-BR": "Está Duplicando",
        "zh-CN": "正在人格复制"
    },
    "_&isFiringPrimaryFire": {
        "description": "Whether the specified player's primary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose primary weapon attack usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C3F2",
                    "en-US": "The Player whose primary weapon attack usage to check.",
                    "de-DE": "Der Spieler dessen Verwendung seines Primärwaffenangriffs geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso del ataque principal con arma se comprueba.",
                    "es-MX": "El jugador cuyo uso del ataque de arma principal se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation du tir principal.",
                    "it-IT": "Il Giocatore il cui utilizzo dell'attacco dell'arma primaria sarà controllato.",
                    "ja-JP": "メイン攻撃を使用したかどうかチェックするプレイヤー",
                    "ko-KR": "주무기 공격 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego atak podstawowy zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo uso do ataque primário da arma será verificado.",
                    "ru-RU": "Игрок у которого нужно получить информацию об использовании основного режима атаки.",
                    "zh-CN": "检测此玩家的主要武器攻击状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000C3E7",
        "descriptionLocalized": {
            "guid": "00000000C3E8",
            "en-US": "Whether the specified Player's primary weapon attack is being used.",
            "de-DE": "Ob der Primärwaffenangriff des festgelegten Spielers verwendet wird.",
            "es-ES": "Si se está usando el ataque principal con arma del jugador especificado.",
            "es-MX": "Verifica si se está utilizando el ataque de arma principal del jugador especificado.",
            "fr-FR": "Si le joueur spécifié utilise son tir principal.",
            "it-IT": "Specifica se l'attacco dell'arma primaria del Giocatore specificato sta venendo utilizzato.",
            "ja-JP": "指定のプレイヤーによるメイン攻撃使用の有無",
            "ko-KR": "지정된 플레이어의 주무기가 사용 중인지 여부입니다.",
            "pl-PL": "Czy określony gracz korzysta z ataku podstawowego.",
            "pt-BR": "Se o ataque primário da arma do Jogador especificado está sendo usado ou não.",
            "ru-RU": "Определяет использует ли указанный игрок основной режим атаки.",
            "zh-CN": "指定玩家是否在使用主要武器攻击。"
        },
        "en-US": "Is Firing Primary",
        "es-MX": "Está usando el disparo principal",
        "fr-FR": "Tir principal",
        "ja-JP": "メイン攻撃を使用中",
        "pt-BR": "É Disparo Primário",
        "zh-CN": "正在使用主要武器"
    },
    "_&isFiringSecondaryFire": {
        "description": "Whether the specified player's secondary weapon attack is being used.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose secondary weapon attack usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C3F1",
                    "en-US": "The Player whose secondary weapon attack usage to check.",
                    "de-DE": "Der Spieler dessen Verwendung seines Sekundärwaffenangriffs geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso del ataque secundario con arma se comprueba.",
                    "es-MX": "El jugador cuyo uso del ataque de arma secundario se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation du tir secondaire.",
                    "it-IT": "Il Giocatore il cui utilizzo dell'attacco dell'arma secondaria sarà controllato.",
                    "ja-JP": "サブ攻撃を使用したかどうかチェックするプレイヤー",
                    "ko-KR": "보조 무기 공격 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego atak alternatywny zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo uso do ataque secundário da arma será verificado.",
                    "ru-RU": "Игрок у которого нужно получить информацию об использовании альтернативного режима атаки.",
                    "zh-CN": "检测此玩家的辅助武器攻击状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000C3E9",
        "descriptionLocalized": {
            "guid": "00000000C3EA",
            "en-US": "Whether the specified Player's secondary weapon attack is being used.",
            "de-DE": "Ob der Sekundärwaffenangriff des festgelegten Spielers verwendet wird.",
            "es-ES": "Si se está usando el ataque secundario con arma del jugador especificado.",
            "es-MX": "Verifica si se está utilizando el ataque de arma secundario del jugador especificado.",
            "fr-FR": "Si le joueur spécifié utilise son tir secondaire.",
            "it-IT": "Specifica se l'attacco dell'arma secondaria del Giocatore specificato sta venendo utilizzato.",
            "ja-JP": "指定のプレイヤーによるサブ攻撃使用の有無",
            "ko-KR": "지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.",
            "pl-PL": "Czy określony gracz korzysta z ataku alternatywnego.",
            "pt-BR": "Se o ataque secundário da arma do Jogador especificado está sendo usado ou não.",
            "ru-RU": "Определяет использует ли указанный игрок альтернативный режим атаки.",
            "zh-CN": "指定玩家是否在使用辅助武器攻击。"
        },
        "en-US": "Is Firing Secondary",
        "es-MX": "Está usando el disparo secundario",
        "fr-FR": "Tir secondaire",
        "ja-JP": "サブ攻撃を使用中",
        "pt-BR": "É Disparo Secundário",
        "zh-CN": "正在使用辅助武器"
    },
    "_&isHoldingButton": {
        "description": "Whether a player is holding a specific button.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose button to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BED4",
                    "en-US": "The Player whose button to check.",
                    "de-DE": "Der Spieler dessen Taste geprüft werden soll.",
                    "es-ES": "Jugador cuyo botón se comprueba.",
                    "es-MX": "El jugador cuyo botón se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le bouton.",
                    "it-IT": "Il Giocatore la cui pressione del tasto sarà controllata.",
                    "ja-JP": "ボタンをチェックするプレイヤー",
                    "ko-KR": "버튼을 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego przycisk zostanie sprawdzony",
                    "pt-BR": "O Jogador cujo botão será verificado.",
                    "ru-RU": "Игрок кнопку которого нужно проверить.",
                    "zh-CN": "检测此玩家的按钮。"
                }
            },
            {
                "name": "BUTTON",
                "description": "The button to check.",
                "type": "Button",
                "default": "PRIMARY FIRE",
                "descriptionLocalized": {
                    "guid": "00000000BED5",
                    "en-US": "The button to check.",
                    "de-DE": "Die zu prüfende Taste.",
                    "es-ES": "Botón que se comprueba.",
                    "es-MX": "El botón que se verificará.",
                    "fr-FR": "Le bouton à vérifier.",
                    "it-IT": "Il tasto da controllare.",
                    "ja-JP": "チェックするボタン",
                    "ko-KR": "확인할 버튼입니다.",
                    "pl-PL": "Przycisk do sprawdzenia.",
                    "pt-BR": "O botão a ser verificado.",
                    "ru-RU": "Проверяемая кнопка.",
                    "zh-CN": "用于检测的按钮。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B2F3",
        "descriptionLocalized": {
            "guid": "00000000BED3",
            "en-US": "Whether a Player is holding a specific button.",
            "de-DE": "Ob ein Spieler eine bestimmte Taste hält.",
            "es-ES": "Si un jugador está pulsando un botón concreto.",
            "es-MX": "Verifica si un jugador mantiene presionado un botón determinado.",
            "fr-FR": "Si un joueur maintient un bouton spécifique.",
            "it-IT": "Specifica se un Giocatore sta tenendo premuto un tasto specifico.",
            "ja-JP": "プレイヤーが特定のボタンを持っているかどうか",
            "ko-KR": "플레이어가 지정된 버튼을 누르고 있는지 여부입니다.",
            "pl-PL": "Czy gracz przytrzymuje konkretny przycisk.",
            "pt-BR": "Se um Jogador está segurando um botão específico ou não.",
            "ru-RU": "Определяет удерживает ли игрок указанную кнопку.",
            "zh-CN": "玩家是否正在按下特定按钮。"
        },
        "en-US": "Is Button Held",
        "es-MX": "Botón presionado",
        "fr-FR": "Bouton maintenu enfoncé",
        "ja-JP": "ボタンが長押しされている",
        "pt-BR": "É Botão Segurado",
        "zh-CN": "按钮被按下"
    },
    "_&isInAir": {
        "description": "Whether a player is airborne.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose airborne status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEC4",
                    "en-US": "The Player whose airborne status to check.",
                    "de-DE": "Der Spieler dessen Status [Is In Air] geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está en el aire.",
                    "es-MX": "El jugador cuyo estado en el aire se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut aérien.",
                    "it-IT": "Il Giocatore il cui stato di volo in aria sarà controllato.",
                    "ja-JP": "空中ステータスを確認するプレイヤー",
                    "ko-KR": "공중에 있는 상태인지를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status powietrzny zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status no ar será verificado.",
                    "ru-RU": "Игрок для которого проверяется статус нахождения в воздухе.",
                    "zh-CN": "检测此玩家的浮空状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B28B",
        "descriptionLocalized": {
            "guid": "00000000BEC3",
            "en-US": "Whether a Player is airborne.",
            "de-DE": "Ob ein Spieler in der Luft ist.",
            "es-ES": "Si un jugador está en el aire.",
            "es-MX": "Verifica si un jugador está en el aire.",
            "fr-FR": "Si un joueur se trouve en l’air.",
            "it-IT": "Specifica se un Giocatore è in aria.",
            "ja-JP": "プレイヤーが空中にいるかどうか",
            "ko-KR": "플레이어가 공중에 있는 상태인지 여부입니다.",
            "pl-PL": "Czy gracz jest w powietrzu.",
            "pt-BR": "Se um Jogador está no ar ou não.",
            "ru-RU": "Определяет находится ли игрок в воздухе.",
            "zh-CN": "玩家是否在空中。"
        },
        "en-US": "Is In Air",
        "es-MX": "En el aire",
        "fr-FR": "Dans les airs",
        "ja-JP": "空中にいる",
        "pt-BR": "É no Ar",
        "zh-CN": "正在空中"
    },
    "_&isInAlternateForm": {
        "description": "Whether the specified player is currently in an alternate form:\n        \n- Hammond's ball form\n- Baby Dva\n- Bastion's turret and tank forms\n- Lucio's speed song\n- Mercy's pistol\n- Torbjorn's hammer\n\nFor Echo duplication, use the Is Duplicating value instead.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose form to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "000000010E64",
                    "en-US": "The Player whose form to check.",
                    "de-DE": "Der Spieler dessen Form geprüft werden soll.",
                    "es-ES": "Jugador cuya forma se comprueba.",
                    "es-MX": "El jugador cuya forma se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier la forme.",
                    "it-IT": "Il Giocatore la cui forma sarà controllata.",
                    "ja-JP": "形態を確認するプレイヤー",
                    "ko-KR": "모습을 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego postać zostanie sprawdzona.",
                    "pt-BR": "O Jogador cuja forma será verificada.",
                    "ru-RU": "Игрок у которого нужно проверить форму героя.",
                    "zh-CN": "检测此玩家的状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "000000010E62",
        "en-US": "Is In Alternate Form",
        "es-MX": "Está en su forma alterna",
        "fr-FR": "Est dans une forme alternative",
        "ja-JP": "異なる形態である",
        "pt-BR": "Está em uma Forma Alternativa",
        "zh-CN": "处于非初始状态"
    },
    "_&isInSpawnRoom": {
        "description": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose spawn room status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF11",
                    "en-US": "The Player whose spawn room status to check.",
                    "de-DE": "Der Spieler dessen Startbereich-Status geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está en la sala de inicio.",
                    "es-MX": "El jugador cuyo estado de cuarto de reaparición se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut de salle d’apparition.",
                    "it-IT": "Il Giocatore il cui stato dell'area di partenza sarà controllato.",
                    "ja-JP": "リスポーンルームのステータスを確認するプレイヤー",
                    "ko-KR": "전투준비실 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status pomieszczenia startowego zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de sala de ressurgimento será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса нахождения в стартовой комнате.",
                    "zh-CN": "检测此玩家的重生室状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B3B1",
        "descriptionLocalized": {
            "guid": "00000000BF10",
            "en-US": "Whether a specific Player is in the spawn room and is thus being healed and able to change heroes.",
            "de-DE": "Ob ein bestimmter Spieler sich im Startbereich befindet und somit geheilt wird und Helden wechseln kann.",
            "es-ES": "Si un jugador concreto está en la sala de inicio y por tanto está recibiendo sanación y tiene la posibilidad de cambiar de héroe.",
            "es-MX": "Verifica si un jugador específico se encuentra en el cuarto de reaparición y por tanto está sanándose y puede cambiar de héroe.",
            "fr-FR": "Si un joueur spécifique se trouve dans la salle d’apparition et bénéficie donc de soins et peut changer de héros.",
            "it-IT": "Specifica se un Giocatore specifico si trova nell'area di partenza sta quindi rigenerando la salute e può cambiare Eroe.",
            "ja-JP": "特定のプレイヤーがリスポーンエリアにいる（また、これによって回復されヒーローを変更できる）かどうか",
            "ko-KR": "지정된 플레이어가 전투준비실에 있는지또한 치유되고 영웅을 변경할 수 있는지 여부입니다.",
            "pl-PL": "Czy określony gracz znajduje się w pomieszczeniu startowym i tym samym jest leczony i może zmieniać bohaterów.",
            "pt-BR": "Se um Jogador específico está na sala de ressurgimento ou não e portanto está sendo curado e pode trocar de herói.",
            "ru-RU": "Определяет находится ли выбранный игрок в стартовой комнате таким образом исцеляясь и имея возможность сменить героя.",
            "zh-CN": "指定玩家是否正在重生室内（恢复生命值且可更换英雄）。"
        },
        "en-US": "Is In Spawn Room",
        "es-MX": "En el cuarto de reaparición",
        "fr-FR": "Dans la salle d’apparition",
        "ja-JP": "リスポーンエリアにいる",
        "pt-BR": "É Na Sala de Ressurgimento",
        "zh-CN": "在重生室中"
    },
    "_&isInViewAngle": {
        "description": "Whether a location is within view of a player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose view to use for the check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF81",
                    "en-US": "The Player whose view to use for the check.",
                    "de-DE": "Der Spieler dessen Sicht für die Prüfung verwendet wird.",
                    "es-ES": "Jugador cuya visión se utiliza para la comprobación.",
                    "es-MX": "El jugador cuya vista se utilizará para la verificación.",
                    "fr-FR": "Le joueur dont le champ de vision servira à effectuer la vérification.",
                    "it-IT": "Il Giocatore la cui area di visuale sarà controllata.",
                    "ja-JP": "チェックのために視点を使用するプレイヤー",
                    "ko-KR": "시야를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego pola widzenia użyć do sprawdzenia.",
                    "pt-BR": "O Jogador cuja visão será usada na verificação.",
                    "ru-RU": "Игрок поле зрения которого используется для проверки.",
                    "zh-CN": "检测此名玩家的视野。"
                }
            },
            {
                "name": "LOCATION",
                "description": "The location to test if it's within view.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BF82",
                    "en-US": "The Location to test if it's within view.",
                    "de-DE": "Der Ort der darauf geprüft werden soll ob er im Sichtfeld liegt.",
                    "es-ES": "Ubicación que se comprueba si está a la vista.",
                    "es-MX": "La ubicación que se evaluará si está a la vista.",
                    "fr-FR": "Le lieu à tester s’il est dans la ligne de vue.",
                    "it-IT": "Il Luogo la cui presenza nell'area di visuale sarà controllata.",
                    "ja-JP": "視角範囲内かどうかテストするための位置",
                    "ko-KR": "시야에 있는지 테스트할 Location입니다.",
                    "pl-PL": "Lokalizacja do przetestowania czy jest w polu widzenia.",
                    "pt-BR": "O Local a ser testado para saber se está na visão.",
                    "ru-RU": "Местоположение которое нужно проверить на предмет нахождения в поле зрения.",
                    "zh-CN": "检测此坐标是否在视角内。"
                }
            },
            {
                "name": "VIEW ANGLE",
                "description": "The view angle to compare against in degrees.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF83",
                    "en-US": "The View Angle to compare against in degrees.",
                    "de-DE": "Der Blickwinkel zum Vergleich in Grad.",
                    "es-ES": "Ángulo de visión en grados con el que se compara.",
                    "es-MX": "El ángulo de vista en grados con el cual se comparará.",
                    "fr-FR": "L’angle de vision en degrés avec lequel effectuer la comparaison.",
                    "it-IT": "L'Angolo di Visuale da confrontare in gradi.",
                    "ja-JP": "比較対象となる視覚範囲",
                    "ko-KR": "비교 대상인 View Angle단위: 도입니다.",
                    "pl-PL": "Kąt widzenia w stopniach do którego należy dokonać porównania.",
                    "pt-BR": "O Ângulo de Visão a ser comparado em graus.",
                    "ru-RU": "Угол поля зрения в градусах по которому проводится сравнение.",
                    "zh-CN": "用于比较的视角，单位为度。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000BF7C",
        "descriptionLocalized": {
            "guid": "00000000BF7D",
            "en-US": "Whether a Location is within view of a Player.",
            "de-DE": "Ob ein Ort im Sichtfeld eines Spielers liegt.",
            "es-ES": "Si una ubicación está a la vista de un jugador.",
            "es-MX": "Verifica si una ubicación está a la vista de un jugador.",
            "fr-FR": "Si un lieu est dans le champ de vision d’un joueur.",
            "it-IT": "Specifica se un Luogo si trova nell'area di visuale di un Giocatore.",
            "ja-JP": "プレイヤーから見える位置かどうか",
            "ko-KR": "Location이 플레이어의 시야에 있는지 여부입니다.",
            "pl-PL": "Czy lokalizacja jest w polu widzenia gracza.",
            "pt-BR": "Se um Local está na visão de um Jogador ou não.",
            "ru-RU": "Определяет находится ли местоположение в поле зрения игрока.",
            "zh-CN": "检测一个坐标是否位于玩家的视角内。"
        },
        "en-US": "Is In View Angle",
        "es-MX": "En el ángulo de vista",
        "fr-FR": "Dans le champ de vision",
        "ja-JP": "視角範囲内",
        "pt-BR": "É No Ângulo de Visão",
        "zh-CN": "在视野内"
    },
    "_&isJumping": {
        "description": "Whether the specified player is jumping.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose jump usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "en-US": "The player whose jump usage to check.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "bool",
        "guid": "0000000105A0",
        "en-US": "Is Jumping",
        "es-MX": "Está saltando",
        "fr-FR": "Utilise Saut",
        "ja-JP": "ジャンプ中",
        "pt-BR": "Está Pulando",
        "zh-CN": "正在跳跃"
    },
    "_&isMeleeing": {
        "description": "Whether the specified player is meleeing.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose melee usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000001059C",
                    "en-US": "The Player whose Melee usage to check.",
                    "de-DE": "Der Spieler dessen Verwendung seines Nahkampfangriffs geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso del ataque cuerpo a cuerpo se comprueba.",
                    "es-MX": "El jugador cuyo uso de ataques melé se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation de Mêlée.",
                    "it-IT": "Il Giocatore il cui utilizzo della Mischia sarà controllato.",
                    "ja-JP": "近接攻撃を使用したかどうかチェックするプレイヤー",
                    "ko-KR": "근접 공격의 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz u którego użycie ataku wręcz zostanie sprawdzone.",
                    "pt-BR": "O Jogador cujo uso de Corpo a Corpo será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса использования атаки ближнего боя.",
                    "zh-CN": "检测此玩家的近战攻击状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000001059A",
        "en-US": "Is Meleeing",
        "es-MX": "Está usando un ataque melé",
        "fr-FR": "Utilise Mêlée",
        "ja-JP": "近接攻撃中",
        "pt-BR": "Está Usando Corpo a Corpo",
        "zh-CN": "正在近战攻击"
    },
    "_&isMoving": {
        "description": "Whether a player is moving (defined as having a nonzero current speed).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose moving status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEC0",
                    "en-US": "The Player whose moving status to check.",
                    "de-DE": "Der Spieler dessen Status [Is Moving] geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está en movimiento.",
                    "es-MX": "El jugador cuyo estado en movimiento se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut de mouvement.",
                    "it-IT": "Il Giocatore il cui stato di movimento sarà controllato.",
                    "ja-JP": "移動ステータスを確認するプレイヤー",
                    "ko-KR": "이동 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status ruchu zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de movimento será verificado.",
                    "ru-RU": "Игрок к которому применяется проверка статуса движения.",
                    "zh-CN": "检测此玩家的运动状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B288",
        "en-US": "Is Moving",
        "es-MX": "En movimiento",
        "fr-FR": "Se déplace",
        "ja-JP": "移動している",
        "pt-BR": "É Movimentando-se",
        "zh-CN": "正在移动"
    },
    "_&isOnFire": {
        "description": "Whether a specific player's portrait is on fire.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose portrait to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF0D",
                    "en-US": "The Player whose portrait to check.",
                    "de-DE": "Der Spieler dessen Porträt geprüft werden soll.",
                    "es-ES": "Jugador cuyo retrato se comprueba.",
                    "es-MX": "El jugador cuyo retrato se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le portrait.",
                    "it-IT": "Il Giocatore il cui ritratto sarà controllato.",
                    "ja-JP": "ポートレートをチェックするプレイヤー",
                    "ko-KR": "초상화를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego portret zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo retrato será verificado.",
                    "ru-RU": "Игрок портрет которого нужно проверить.",
                    "zh-CN": "检测此玩家的头像状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B3B3",
        "descriptionLocalized": {
            "guid": "00000000BF0C",
            "en-US": "Whether a specific Player's portrait is on fire.",
            "de-DE": "Ob das Porträt eines bestimmten Spielers brandgefährlich ist.",
            "es-ES": "Si el retrato de un jugador concreto está en llamas porque está en racha.",
            "es-MX": "Verifica si el retrato de un jugador determinado está en llamas.",
            "fr-FR": "Si le portrait d’un joueur spécifique est entouré de flammes.",
            "it-IT": "Specifica se il ritratto di un Giocatore specifico è in serie positiva.",
            "ja-JP": "特定のプレイヤーのポートレートに炎エフェクトがついているかどうか",
            "ko-KR": "지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.",
            "pl-PL": "Czy portret określonego gracza wskazuje że ma on dobrą passę.",
            "pt-BR": "Se o retrato de um Jogador específico está Em Chamas ou não.",
            "ru-RU": "Определяет наложен ли на портрет указанного игрока эффект «В ударе».",
            "zh-CN": "指定玩家的头像是否处于火力全开状态。"
        },
        "en-US": "Is Portrait On Fire",
        "es-MX": "Retrato en llamas",
        "fr-FR": "Portrait « en feu »",
        "ja-JP": "ポートレートに炎エフェクトがついている",
        "pt-BR": "É Retrato Em Chamas",
        "zh-CN": "头像火力全开"
    },
    "_&isOnGround": {
        "description": "Whether a player is on the ground (or other walkable surface).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ground status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF71",
                    "en-US": "The Player whose ground status to check.",
                    "de-DE": "Der Spieler dessen Boden-Status geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está en el suelo.",
                    "es-MX": "El jugador cuyo estado en el suelo se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut au sol.",
                    "it-IT": "Il Giocatore il cui stato sulla superficie sarà controllato.",
                    "ja-JP": "地面に対してのステータスを確認するプレイヤー",
                    "ko-KR": "착지 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status naziemny zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de chão será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка статуса стояния на земле.",
                    "zh-CN": "检测此玩家是否处于地面上。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000BF70",
        "descriptionLocalized": {
            "guid": "00000000BF6F",
            "en-US": "Whether a Player is on the ground or other walkable surface.",
            "de-DE": "Ob sich ein Spieler auf dem Boden oder einer sonstigen begehbaren Oberfläche befindet.",
            "es-ES": "Si un jugador está en el suelo u otra superficie por la que se pueda andar.",
            "es-MX": "Verifica si un jugador está en el suelo u otra superficie caminable.",
            "fr-FR": "Si un joueur se trouve au sol ou toute autre surface sur laquelle il est possible de marcher.",
            "it-IT": "Specifica se un Giocatore è sulla superficie o su altre superfici calpestabili.",
            "ja-JP": "プレイヤーが地上（またはその他の歩ける表面）にいるかどうか",
            "ko-KR": "플레이어가 착지또는 걷기가 가능한 표면에 있는 상태인지 여부입니다.",
            "pl-PL": "Czy gracz jest na ziemi lub innej powierzchni po której można chodzić.",
            "pt-BR": "Se um Jogador está no chão ou em outra superfície onde pode andar ou não.",
            "ru-RU": "Определяет находится ли игрок на земле или любой другой пригодной для ходьбы поверхности.",
            "zh-CN": "玩家是否位于地面上（或可行走的表面上）。"
        },
        "en-US": "Is On Ground",
        "es-MX": "En el suelo",
        "fr-FR": "Au sol",
        "ja-JP": "地上にいる",
        "pt-BR": "É No Chão",
        "zh-CN": "在地面上"
    },
    "_&isOnObjective": {
        "description": "Whether a specific player is currently occupying a payload or capture point.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose objective status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF0F",
                    "en-US": "The Player whose objective status to check.",
                    "de-DE": "Der Spieler dessen Zielpunkt-Status geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está en el objetivo.",
                    "es-MX": "El jugador cuyo estado de objetivo se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut d’objectif.",
                    "it-IT": "Il Giocatore il cui stato dell'obiettivo sarà controllato.",
                    "ja-JP": "目標ステータスを確認するプレイヤー",
                    "ko-KR": "목표 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status zadania zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de objetivo será verificado.",
                    "ru-RU": "Игрок статус выполнения задачи которым нужно проверить.",
                    "zh-CN": "检测此玩家的目标点状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B3B2",
        "descriptionLocalized": {
            "guid": "00000000BF0E",
            "en-US": "Whether a specific Player is currently occupying a payload or capture point.",
            "de-DE": "Ob ein bestimmter Spieler aktuell eine Fracht oder einen Zielpunkt besetzt.",
            "es-ES": "Si un jugador concreto está ocupando actualmente una carga o un punto de captura.",
            "es-MX": "Verifica si un jugador determinado ocupa actualmente una carga o un punto de captura.",
            "fr-FR": "Si un joueur spécifique occupe actuellement un convoi ou un point de capture.",
            "it-IT": "Specifica se un Giocatore specifico sta attualmente occupando il carico o un punto di controllo.",
            "ja-JP": "特定のプレイヤーがペイロードまたは目標地点を確保中かどうか",
            "ko-KR": "지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.",
            "pl-PL": "Czy określony gracz zajmuje obecnie ładunek lub punkt do przechwycenia.",
            "pt-BR": "Se um Jogador específico está ou não ocupando uma carga ou ponto de captura.",
            "ru-RU": "Определяет находится ли выбранный игрок рядом с грузом или объектом.",
            "zh-CN": "指定玩家是否正在运载目标或占领点上。"
        },
        "en-US": "Is On Objective",
        "es-MX": "En el objetivo",
        "fr-FR": "Sur l’objectif",
        "ja-JP": "目標にいる",
        "pt-BR": "É No Objetivo",
        "zh-CN": "在目标点上"
    },
    "_&isOnWall": {
        "description": "Whether a player is on a wall (climbing or riding).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose wall status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF44",
                    "en-US": "The Player whose wall status to check.",
                    "de-DE": "Der Spieler dessen Wand-Status geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está en un muro.",
                    "es-MX": "El jugador cuyo estado sobre el muro se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut relatif aux murs.",
                    "it-IT": "Il Giocatore il cui stato del muro sarà controllato.",
                    "ja-JP": "ステータスを確認するプレイヤー",
                    "ko-KR": "벽 상태를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego status ścienny zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de parede será verificado.",
                    "ru-RU": "Игрок чей статус нахождения на стене нужно проверить.",
                    "zh-CN": "检测此玩家的滑墙状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000BB0B",
        "descriptionLocalized": {
            "guid": "00000000BF43",
            "en-US": "Whether a Player is on a wall climbing or riding.",
            "de-DE": "Ob sich ein Spieler an einer Wand befindet Klettern oder Entlanggleiten.",
            "es-ES": "Si un jugador está en un muro trepando o andando si posee la capacidad.",
            "es-MX": "Verifica si un jugador está en sobre un muro trepando o deslizándose.",
            "fr-FR": "Si un joueur se trouve sur un mur qu’il soit en train d’y grimper ou glisse dessus.",
            "it-IT": "Specifica se un Giocatore si trova su un muro scalando o correndo.",
            "ja-JP": "プレイヤーが壁の上にいる（登っているか乗っている）かどうか",
            "ko-KR": "플레이어가 벽에 있는 상태오르거나 타는 상태인지 여부입니다.",
            "pl-PL": "Czy gracz jest na ścianie wspina się lub jeździ po niej.",
            "pt-BR": "Se um Jogador está na parede ou não subindo ou correndo nela.",
            "ru-RU": "Определяет находится ли игрок на стене забирается или на ней.",
            "zh-CN": "玩家是否位于墙体上（滑墙或爬墙）。"
        },
        "en-US": "Is On Wall",
        "es-MX": "En el muro",
        "fr-FR": "Sur le mur",
        "ja-JP": "壁の上にいる",
        "pt-BR": "É Na Parede",
        "zh-CN": "在墙上"
    },
    "_&isReloading": {
        "description": "Whether the specified player is reloading.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose reload usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "000000011067",
                    "en-US": "The Player whose Reload usage to check.",
                    "de-DE": "Der Spieler dessen Verwendung von Nachladen geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso de la recarga se comprueba.",
                    "es-MX": "El jugador cuya recarga se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation de Recharger.",
                    "it-IT": "Il Giocatore il cui utilizzo della Ricarica sarà controllato.",
                    "ja-JP": "リロードを使用したかどうかチェックするプレイヤー",
                    "ko-KR": "재장전 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz u którego przeładowanie zostanie sprawdzone.",
                    "pt-BR": "O Jogador cujo uso de Recarregar será verificado.",
                    "ru-RU": "Игрок у которого нужно проверить доступ к перезарядке.",
                    "zh-CN": "检测此玩家的装填状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "000000011065",
        "descriptionLocalized": {
            "guid": "000000011066",
            "en-US": "Whether the specified Player is Reloading.",
            "de-DE": "Ob der festgelegte Spieler Nachladen verwendet.",
            "es-ES": "Si el jugador especificado está recargando.",
            "es-MX": "Verifica si el jugador especificado está recargando.",
            "fr-FR": "Si le joueur spécifié utilise Recharger.",
            "it-IT": "Specifica se il Giocatore specificato sta utilizzando la Ricarica.",
            "ja-JP": "指定のプレイヤーがリロード中かどうか",
            "ko-KR": "지정된 플레이어가 재장전 중인지 여부입니다.",
            "pl-PL": "Czy określony gracz przeładowuje.",
            "pt-BR": "Se o Jogador especificado está Recarregando",
            "ru-RU": "Определяет использует ли игрок перезарядку.",
            "zh-CN": "指定玩家是否在装填。"
        },
        "en-US": "Is Reloading",
        "es-MX": "Está recargando",
        "fr-FR": "Utilise Recharger",
        "ja-JP": "リロード中",
        "pt-BR": "Está Recarregando",
        "zh-CN": "正在装填"
    },
    "_&isStanding": {
        "description": "Whether a player is standing (defined as both not moving and not in the air).",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose standing status to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEBE",
                    "en-US": "The Player whose standing status to check.",
                    "de-DE": "Der Spieler dessen Status [Is Standing] geprüft werden soll.",
                    "es-ES": "Jugador para el que se comprueba si está de pie.",
                    "es-MX": "El jugador cuyo estado de pie se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier le statut d’immobilité.",
                    "it-IT": "Il Giocatore il cui stato della posizione in piedi sarà controllato.",
                    "ja-JP": "立ちステータスを確認するプレイヤー",
                    "ko-KR": "서 있는 상태를 확인할 대상 플레이어입니다.",
                    "pl-PL": "Gracz którego status stania zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status parado será verificado.",
                    "ru-RU": "Игрок к которому применяется проверка статуса стояния на месте.",
                    "zh-CN": "检测此玩家的站立状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B287",
        "descriptionLocalized": {
            "guid": "00000000BEBD",
            "en-US": "Whether a Player is standing defined as both not moving and not in the air.",
            "de-DE": "Ob ein Spieler steht definiert als nicht in Bewegung und nicht in der Luft.",
            "es-ES": "Si un jugador está de pie lo que se define como que no está en movimiento ni en el aire.",
            "es-MX": "Verifica si un jugador está de pie definido como no estar en movimiento ni en el aire.",
            "fr-FR": "Si un joueur est immobile c’est-à-dire qu’il n’est pas en train de se déplacer et n’est pas en l’air.",
            "it-IT": "Specifica se un Giocatore è in piedi definito come immobile e non in aria.",
            "ja-JP": "プレイヤーが立っている（移動しておらず、かつ空中にいない）状態かどうか",
            "ko-KR": "플레이어가 서 있는 상태인지 여부이동하지 않고 공중에 있는 상태가 아닌 경우로 판단입니다.",
            "pl-PL": "Czy gracz stoi określone jako brak ruchu i przebywania w powietrzu.",
            "pt-BR": "Se um Jogador está parado ou não definido como não estar se movendo e não estar no ar.",
            "ru-RU": "Определяет стоит ли игрок на месте стоящий на месте игрок не должен перемещаться и не должен находиться в воздухе.",
            "zh-CN": "玩家是否在站立（既不在移动也不在空中）。"
        },
        "en-US": "Is Standing",
        "es-MX": "De pie",
        "fr-FR": "Debout",
        "ja-JP": "立っている",
        "pt-BR": "É Parado",
        "zh-CN": "正在站立"
    },
    "_&isUsingAbility1": {
        "description": "Whether the specified player is using ability 1.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 1 usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C3F0",
                    "en-US": "The Player whose Ability 1 usage to check.",
                    "de-DE": "Der Spieler dessen Verwendung seiner Fähigkeit 1 geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso de la habilidad 1 se comprueba.",
                    "es-MX": "El jugador cuyo uso de la habilidad 1 se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation de la capacité 1.",
                    "it-IT": "Il Giocatore il cui utilizzo dell'Abilità 1 sarà controllato.",
                    "ja-JP": "アビリティ1を使用したかどうかチェックするプレイヤー",
                    "ko-KR": "기술 1의 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego zdolność „Ability 1” Zdolność 1 zostanie sprawdzona.",
                    "pt-BR": "O Jogador cujo uso da Habilidade 1 será verificado.",
                    "ru-RU": "Игрок у которого нужно получить информацию об использовании способности 1.",
                    "zh-CN": "检测此玩家的技能1状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000C3EB",
        "descriptionLocalized": {
            "guid": "00000000C3EC",
            "en-US": "Whether the specified Player is using Ability 1.",
            "de-DE": "Ob der festgelegte Spieler Fähigkeit 1 verwendet.",
            "es-ES": "Si el jugador especificado está usando la habilidad 1.",
            "es-MX": "Verifica si el jugador especificado está utilizando la habilidad 1.",
            "fr-FR": "Si le joueur spécifié utilise la capacité 1.",
            "it-IT": "Specifica se il Giocatore specificato sta utilizzando l'Abilità 1.",
            "ja-JP": "指定のプレイヤーによるアビリティ1使用の有無",
            "ko-KR": "지정된 플레이어가 기술 1을 사용하는지 여부입니다.",
            "pl-PL": "Czy określony gracz korzysta ze zdolności „Ability 1” Zdolność 1.",
            "pt-BR": "Se o Jogador especificado está usando a Habilidade 1 ou não.",
            "ru-RU": "Определяет использует ли указанный игрок способность 1.",
            "zh-CN": "指定玩家是否在使用技能 1。"
        },
        "en-US": "Is Using Ability 1",
        "es-MX": "Está utilizando la habilidad 1",
        "fr-FR": "Capacité 1 utilisée",
        "ja-JP": "アビリティ1を使用",
        "pt-BR": "É Usando Habilidade 1",
        "zh-CN": "正在使用技能 1"
    },
    "_&isUsingAbility2": {
        "description": "Whether the specified player is using ability 2.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ability 2 usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C3EF",
                    "en-US": "The Player whose Ability 2 usage to check.",
                    "de-DE": "Der Spieler dessen Verwendung seiner Fähigkeit 2 geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso de la habilidad 2 se comprueba.",
                    "es-MX": "El jugador cuyo uso de la habilidad 2 se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation de la capacité 2.",
                    "it-IT": "Il Giocatore il cui utilizzo dell'Abilità 2 sarà controllato.",
                    "ja-JP": "アビリティ2を使用したかどうかチェックするプレイヤー",
                    "ko-KR": "기술 2의 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego zdolność „Ability 2” Zdolność 2 zostanie sprawdzona.",
                    "pt-BR": "O Jogador cujo uso da Habilidade 2 será verificado.",
                    "ru-RU": "Игрок у которого нужно получить информацию об использовании способности 2.",
                    "zh-CN": "检测此玩家的技能2状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000C3ED",
        "descriptionLocalized": {
            "guid": "00000000C3EE",
            "en-US": "Whether the specified Player is using Ability 2.",
            "de-DE": "Ob der festgelegte Spieler Fähigkeit 2 verwendet.",
            "es-ES": "Si el jugador especificado está usando la habilidad 2.",
            "es-MX": "Verifica si el jugador especificado está utilizando la habilidad 2.",
            "fr-FR": "Si le joueur spécifié utilise la capacité 2.",
            "it-IT": "Specifica se il Giocatore specificato sta utilizzando l'Abilità 2.",
            "ja-JP": "指定のプレイヤーによるアビリティ2使用の有無",
            "ko-KR": "지정된 플레이어가 기술 2를 사용하는지 여부입니다.",
            "pl-PL": "Czy określony gracz korzysta ze zdolności „Ability 2” Zdolność 2.",
            "pt-BR": "Se o Jogador especificado está usando a Habilidade 2 ou não.",
            "ru-RU": "Определяет использует ли указанный игрок способность 2.",
            "zh-CN": "指定玩家是否在使用技能 1。"
        },
        "en-US": "Is Using Ability 2",
        "es-MX": "Está utilizando la habilidad 2",
        "fr-FR": "Capacité 2 utilisée",
        "ja-JP": "アビリティ2を使用",
        "pt-BR": "É Usando Habilidade 2",
        "zh-CN": "正在使用技能 2"
    },
    "_&isUsingUltimate": {
        "description": "Whether a player is using an ultimate ability.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose ultimate ability usage to check.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF36",
                    "en-US": "The Player whose ultimate ability usage to check.",
                    "de-DE": "Der Spieler dessen Einsatz seiner ultimativen Fähigkeit geprüft werden soll.",
                    "es-ES": "Jugador cuyo uso de definitiva se comprueba.",
                    "es-MX": "El jugador cuyo uso de habilidad máxima se verificará.",
                    "fr-FR": "Le joueur dont il faut vérifier l’utilisation de la capacité ultime.",
                    "it-IT": "Il Giocatore il cui utilizzo dell'abilità Ultra sarà controllato.",
                    "ja-JP": "アルティメット・アビリティを使用したかどうかチェックするプレイヤー",
                    "ko-KR": "궁극기 사용 여부를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz którego użycie superzdolności zostanie sprawdzone.",
                    "pt-BR": "O Jogador cujo uso de habilidade suprema será verificado.",
                    "ru-RU": "Игрок для которого выполняется проверка использования суперспособности.",
                    "zh-CN": "检测此玩家的终极技能状态。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B9D4",
        "descriptionLocalized": {
            "guid": "00000000BF35",
            "en-US": "Whether a Player is using an ultimate ability.",
            "de-DE": "Ob ein Spieler eine ultimative Fähigkeit einsetzt.",
            "es-ES": "Si un jugador está usando una habilidad definitiva.",
            "es-MX": "Verifica si un jugador está utilizando una habilidad máxima.",
            "fr-FR": "Si un joueur utilise une capacité ultime.",
            "it-IT": "Specifica se un Giocatore sta usando un'abilità Ultra.",
            "ja-JP": "プレイヤーがアルティメット・アビリティを使用しているかどうか",
            "ko-KR": "플레이어가 궁극기를 사용하는지 여부입니다.",
            "pl-PL": "Czy gracz korzysta z superzdolności.",
            "pt-BR": "Se um Jogador está usando uma habilidade suprema ou não.",
            "ru-RU": "Определяет использует ли игрок суперспособность.",
            "zh-CN": "玩家是否在使用终极技能。"
        },
        "en-US": "Is Using Ultimate",
        "es-MX": "Está usando la habilidad máxima",
        "fr-FR": "Capacité ultime utilisée",
        "ja-JP": "アルティメットを使用している",
        "pt-BR": "É Usando Suprema",
        "zh-CN": "正在使用终极技能"
    },
    "__add__": {
        "guid": "00000000C408",
        "description": "The sum of two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C405",
                    "en-US": "The left-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "左側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "左边的运算量，可以是结果为数字或矢量的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C407",
                    "en-US": "The right-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "右側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "右边的运算量，可以是结果为数字或矢量的值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "descriptionLocalized": {
            "guid": "00000000C409",
            "en-US": "The sum of two numbers or vectors.",
            "de-DE": "Die Summe zweier Zahlen oder Vektoren.",
            "es-ES": "Suma de dos números o vectores.",
            "es-MX": "La suma de dos números o vectores.",
            "fr-FR": "La somme de deux nombres ou vecteurs.",
            "it-IT": "La somma di due numeri o vettori.",
            "ja-JP": "2つの数値またはベクトルの合計",
            "ko-KR": "두 숫자 또는 벡터의 합입니다.",
            "pl-PL": "Suma dwóch liczb lub wektorów.",
            "pt-BR": "A soma de dois números ou vetores.",
            "ru-RU": "Сумма двух чисел или векторов.",
            "zh-CN": "两个数字或矢量的和。"
        },
        "en-US": "Add",
        "es-MX": "Agregar",
        "fr-FR": "Addition",
        "ja-JP": "追加",
        "pt-BR": "Somar",
        "zh-CN": "加"
    },
    "__all__": {
        "description": "Whether the specified condition evaluates to true for every value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF25",
                    "en-US": "The array whose Values will be considered.",
                    "de-DE": "Das Array dessen Werte berücksichtigt werden.",
                    "es-ES": "Matriz cuyos valores se considerarán.",
                    "es-MX": "La matriz cuyos valores serán considerados.",
                    "fr-FR": "Le tableau dont les valeurs seront prises en compte.",
                    "it-IT": "L'array i cui Valori saranno considerati.",
                    "ja-JP": "値が検討される配列",
                    "ko-KR": "값을 확인할 배열입니다.",
                    "pl-PL": "Tabela której wartości zostaną uwzględnione.",
                    "pt-BR": "A matriz cujos Valores serão considerados.",
                    "ru-RU": "Массив значения которого будут учитываться.",
                    "zh-CN": "考察此数组中的值。"
                }
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE",
                "descriptionLocalized": {
                    "guid": "00000000BF26",
                    "en-US": "The Condition that is evaluated for each element of the specified Array. Use the Current Array Element Value to reference the element of the array currently being considered.",
                    "de-DE": "Die Bedingung die für jedes Element des festgelegten Arrays bewertet wird. Für die Referenzierung des Elements des aktuell berücksichtigten Arrays wird der Wert [Current Array Element] verwendet.",
                    "es-ES": "Condición que se evalúa para cada elemento de la matriz especificada. Utiliza el valor de «Current Array Element» para hacer referencia al elemento de la matriz que se está considerando actualmente.",
                    "es-MX": "La condición que se evalúa para cada elemento de la matriz especificada. Usa el valor del elemento de la matriz actual para establecer una referencia al elemento de la matriz considerado actualmente.",
                    "fr-FR": "La condition évaluée pour chaque élément du tableau spécifié. Utilisez la valeur « Élément de tableau actuel » pour renvoyer vers l’élément du tableau actuellement pris en compte.",
                    "it-IT": "La Condizione valutata per ogni elemento dell'Array specificato. Usa il Valore Current Array Element per fare riferimento all'elemento dell'array che è attualmente considerato.",
                    "ja-JP": "指定された配列の各要素で評価される条件。「現在の配列の要素」の値を使って、評価される配列の要素を参照する",
                    "ko-KR": "지정된 배열의 각 요소에 대해 확인할 조건입니다. 현재 확인 대상인 배열의 요소를 참조할 때는 Current Array Element 값을 사용하십시오.",
                    "pl-PL": "Warunek który jest oceniany dla każdego elementy określonej tabeli. Użyj wartości „Current Array Element” Aktualny element tabeli aby odnieść się do aktualnie uwzględnianego elementu z tabeli.",
                    "pt-BR": "A Condição avaliada para cada elemento da Matriz especificada. Use o Valor de Elemento da Matriz Atual para referenciar o elemento da matriz que está sendo considerado no momento.",
                    "ru-RU": "Условие выполнение которого будет проверяться для каждого элемента указанного массива. Чтобы сослаться на элемент проверяемого массива используйте значение [Current Array Element].",
                    "zh-CN": "对指定的数组中每个元素判断此条件。可以使用“当前数组元素值”来指代数组中当前正在进行判断的元素。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B5BA",
        "descriptionLocalized": {
            "guid": "00000000BF24",
            "en-US": "Whether the specified Condition evaluates to True for every Value in the specified Array.",
            "de-DE": "Ob die festgelegte Bedingung für jeden Wert im festgelegten Array True entspricht.",
            "es-ES": "Si la condición especificada se evalúa como «True» para todos los valores de la matriz especificada.",
            "es-MX": "Verifica si la condición especificada es verdadera para cada valor de la matriz especificada.",
            "fr-FR": "Si la condition spécifiée est évaluée comme vraie pour chaque valeur du tableau spécifié.",
            "it-IT": "Specifica se la Condizione specificata risulta True per ogni Valore nell'Array specificato.",
            "ja-JP": "指定した条件が、配列内のすべての値において「TRUE」と評価されるかどうか",
            "ko-KR": "지정된 배열의 모든 값이 지정된 조건에 대해 True인지 여부입니다.",
            "pl-PL": "Czy określony warunek jest prawdą dla każdej wartości w określonej tabeli.",
            "pt-BR": "Se a Condição especificada é avaliada como Verdadeira ou não para cada Valor na Matriz especificada.",
            "ru-RU": "Определяет верно ли указанное условие для каждого значения выбранного массива.",
            "zh-CN": "指定数组中所有元素是否都对指定的条件为“真”。"
        },
        "en-US": "Is True For All",
        "es-MX": "Es verdadero para todos",
        "fr-FR": "Vrai pour tous",
        "ja-JP": "すべてに対して「TRUE」",
        "pt-BR": "É Verdadeiro para Todos",
        "zh-CN": "对全部为”真“"
    },
    "__and__": {
        "description": "Whether both of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "guid": "00000000BE9D",
                    "en-US": "One of the two Inputs considered. If both are True or equivalent to True then the And Value is True.",
                    "de-DE": "Eine der zwei berücksichtigten Eingaben. Wenn beide True oder mit True gleichwertig sind ist der Wert [And] True.",
                    "es-ES": "Una de las dos entradas consideradas. Si las dos son «True» o equivalentes a «True» entonces el valor de «And» es «True».",
                    "es-MX": "Una de las dos entradas consideradas. Si ambas son verdaderas o equivalentes a verdaderas el valor conjuntivo será verdadero.",
                    "fr-FR": "Une des deux entrées prises en compte. Si les deux sont vraies ou équivalent alors la valeur « Et » est vraie.",
                    "it-IT": "Uno dei due Input considerati. Se entrambi corrispondono a True o sono equivalenti a True il Valore And sarà True.",
                    "ja-JP": "検討される2つの入力のうちいずれか。両方が「TRUE」（または「TRUE」と同等）である場合、「AND」の値は「TRUE」を返す",
                    "ko-KR": "두 입력 정보를 확인하여 둘 다 True또는 그에 상응하는 경우인 경우 And 값은 True입니다.",
                    "pl-PL": "Jedne z dwóch uwzględnionych danych wejściowych. Jeśli obie są prawdą lub jej odpowiednikiem wtedy „And Value” „I wartość” jest prawdą.",
                    "pt-BR": "Uma das duas Entradas consideradas. Se ambas forem Verdadeiras ou equivalentes a Verdadeiras então o Valor de E será Verdadeiro.",
                    "ru-RU": "Один из двух рассматриваемых аргументов. Если оба из них верны True или эквивалент True то результат [And] тоже верен.",
                    "zh-CN": "考察的两个输入值中的一个。如果两个值均为“真”（或等效于“真”），则“与”的值为“真”。"
                }
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "guid": "00000000BE9E",
                    "en-US": "One of the two Inputs considered. If both are True or equivalent to True then the And Value is True.",
                    "de-DE": "Eine der zwei berücksichtigten Eingaben. Wenn beide True oder mit True gleichwertig sind ist der Wert [And] True.",
                    "es-ES": "Una de las dos entradas consideradas. Si las dos son «True» o equivalentes a «True» entonces el valor de «And» es «True».",
                    "es-MX": "Una de las dos entradas consideradas. Si ambas son verdaderas o equivalentes a verdaderas el valor conjuntivo será verdadero.",
                    "fr-FR": "Une des deux entrées prises en compte. Si les deux sont vraies ou équivalent alors la valeur « Et » est vraie.",
                    "it-IT": "Uno dei due Input considerati. Se entrambi corrispondono a True o sono equivalenti a True il Valore And sarà True.",
                    "ja-JP": "検討される2つの入力のうちいずれか。両方が「TRUE」（または「TRUE」と同等）である場合、「AND」の値は「TRUE」を返す",
                    "ko-KR": "두 입력 정보를 확인하여 둘 다 True또는 그에 상응하는 경우인 경우 And 값은 True입니다.",
                    "pl-PL": "Jedne z dwóch uwzględnionych danych wejściowych. Jeśli oba są prawdą lub jej odpowiednikiem wtedy „And Value” „I wartość” jest prawdą.",
                    "pt-BR": "Uma das duas Entradas consideradas. Se ambas forem Verdadeiras ou equivalentes a Verdadeiras então o Valor de E será Verdadeiro.",
                    "ru-RU": "Один из двух рассматриваемых аргументов. Если оба из них верны True или эквивалент True то результат [And] тоже верен.",
                    "zh-CN": "考察的两个输入值中的一个。如果两个值均为“真”（或等效于“真”），则“与”的值为“真”。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B273",
        "descriptionLocalized": {
            "guid": "00000000BE9C",
            "en-US": "Whether both of the two Inputs are True or equivalent to True.",
            "de-DE": "Ob beide Eingaben True oder mit True gleichwertig sind.",
            "es-ES": "Si las dos entradas son «True» o equivalentes a «True».",
            "es-MX": "Verifica si ambas entradas son verdaderas o equivalentes a verdaderas.",
            "fr-FR": "Si les deux entrées sont vraies ou équivalent.",
            "it-IT": "Specifica se entrambi gli Input corrispondono a True o equivalenti a True.",
            "ja-JP": "2つの入力が両方とも「TRUE」（または「TRUE」と同等）であるかどうか",
            "ko-KR": "두 입력 정보 모두 True또는 그에 상응하는 경우인지 여부입니다.",
            "pl-PL": "Czy obie dane wejściowe są prawdą lub jej odpowiednikiem.",
            "pt-BR": "Se ambas as Entradas são Verdadeiras ou equivalentes a Verdadeira ou não.",
            "ru-RU": "Определяет верны ли оба аргумента True или эквивалент True.",
            "zh-CN": "两个输入值是否均为“真”（或等效于“真”）。"
        },
        "en-US": "And",
        "es-MX": "Y",
        "fr-FR": "Et",
        "ja-JP": "AND",
        "pt-BR": "E",
        "zh-CN": "与"
    },
    "__any__": {
        "description": "Whether the specified condition evaluates to true for any value in the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose values will be considered.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF25",
                    "en-US": "The array whose Values will be considered.",
                    "de-DE": "Das Array dessen Werte berücksichtigt werden.",
                    "es-ES": "Matriz cuyos valores se considerarán.",
                    "es-MX": "La matriz cuyos valores serán considerados.",
                    "fr-FR": "Le tableau dont les valeurs seront prises en compte.",
                    "it-IT": "L'array i cui Valori saranno considerati.",
                    "ja-JP": "値が検討される配列",
                    "ko-KR": "값을 확인할 배열입니다.",
                    "pl-PL": "Tabela której wartości zostaną uwzględnione.",
                    "pt-BR": "A matriz cujos Valores serão considerados.",
                    "ru-RU": "Массив значения которого будут учитываться.",
                    "zh-CN": "考察此数组中的值。"
                }
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE",
                "descriptionLocalized": {
                    "guid": "00000000BF26",
                    "en-US": "The Condition that is evaluated for each element of the specified Array. Use the Current Array Element Value to reference the element of the array currently being considered.",
                    "de-DE": "Die Bedingung die für jedes Element des festgelegten Arrays bewertet wird. Für die Referenzierung des Elements des aktuell berücksichtigten Arrays wird der Wert [Current Array Element] verwendet.",
                    "es-ES": "Condición que se evalúa para cada elemento de la matriz especificada. Utiliza el valor de «Current Array Element» para hacer referencia al elemento de la matriz que se está considerando actualmente.",
                    "es-MX": "La condición que se evalúa para cada elemento de la matriz especificada. Usa el valor del elemento de la matriz actual para establecer una referencia al elemento de la matriz considerado actualmente.",
                    "fr-FR": "La condition évaluée pour chaque élément du tableau spécifié. Utilisez la valeur « Élément de tableau actuel » pour renvoyer vers l’élément du tableau actuellement pris en compte.",
                    "it-IT": "La Condizione valutata per ogni elemento dell'Array specificato. Usa il Valore Current Array Element per fare riferimento all'elemento dell'array che è attualmente considerato.",
                    "ja-JP": "指定された配列の各要素で評価される条件。「現在の配列の要素」の値を使って、評価される配列の要素を参照する",
                    "ko-KR": "지정된 배열의 각 요소에 대해 확인할 조건입니다. 현재 확인 대상인 배열의 요소를 참조할 때는 Current Array Element 값을 사용하십시오.",
                    "pl-PL": "Warunek który jest oceniany dla każdego elementy określonej tabeli. Użyj wartości „Current Array Element” Aktualny element tabeli aby odnieść się do aktualnie uwzględnianego elementu z tabeli.",
                    "pt-BR": "A Condição avaliada para cada elemento da Matriz especificada. Use o Valor de Elemento da Matriz Atual para referenciar o elemento da matriz que está sendo considerado no momento.",
                    "ru-RU": "Условие выполнение которого будет проверяться для каждого элемента указанного массива. Чтобы сослаться на элемент проверяемого массива используйте значение [Current Array Element].",
                    "zh-CN": "对指定的数组中每个元素判断此条件。可以使用“当前数组元素值”来指代数组中当前正在进行判断的元素。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B5BB",
        "descriptionLocalized": {
            "guid": "00000000BF29",
            "en-US": "Whether the specified Condition evaluates to True for any Value in the specified Array.",
            "de-DE": "Ob die festgelegte Bedingung für einen beliebigen Wert im festgelegten Array True entspricht.",
            "es-ES": "Si la condición especificada se evalúa como «True» para cualquier valor de la matriz especificada.",
            "es-MX": "Verifica si la condición especificada es verdadera para cualquier valor en la matriz especificada.",
            "fr-FR": "Si la condition spécifiée est évaluée comme vraie pour toute valeur du tableau spécifié.",
            "it-IT": "Specifica se la Condizione specificata risulta Vera per un Valore qualsiasi nell'Array specificato.",
            "ja-JP": "特定の配列において、特定の条件がいずれかの値で「TRUE」を返したかどうか",
            "ko-KR": "지정된 배열의 값 중 하나가 지정된 조건에 대해 True인지 여부입니다.",
            "pl-PL": "Czy określony warunek jest prawdą dla dowolnej wartości w określonej tabeli.",
            "pt-BR": "Se a Condição especificada é avaliada como Verdadeira ou não para qualquer Valor na Matriz especificada.",
            "ru-RU": "Определяет верно ли указанное условие для какого-либо из значений выбранного массива.",
            "zh-CN": "指定数组中是否有元素对指定的条件为“真”。"
        },
        "en-US": "Is True For Any",
        "es-MX": "Es verdadero para cualquiera",
        "fr-FR": "Vrai pour n’importe qui",
        "ja-JP": "いずれに対しても「TRUE」",
        "pt-BR": "É Verdadeiro para Qualquer",
        "zh-CN": "对任意为”真“"
    },
    "__arrayContains__": {
        "description": "Whether the specified array contains the specified value.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": "Array",
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C333",
                    "en-US": "The Array in which to search for the specified Value.",
                    "de-DE": "Das nach dem festgelegten Wert abzusuchende Array.",
                    "es-ES": "Matriz en la que se busca el valor especificado.",
                    "es-MX": "La matriz en la que se buscará el valor especificado.",
                    "fr-FR": "Le tableau qui contient la valeur spécifiée.",
                    "it-IT": "L'Array nel quale cercare il Valore specificato.",
                    "ja-JP": "指定値の検索を行う配列",
                    "ko-KR": "지정된 값을 검색할 배열입니다.",
                    "pl-PL": "Tabela w której należy szukać określonej wartości.",
                    "pt-BR": "A Matriz na qual o Valor especificado será buscado.",
                    "ru-RU": "Массив в котором нужно найти указанное значение.",
                    "zh-CN": "在此数组中搜索指定的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C334",
                    "en-US": "The Value for which to search.",
                    "de-DE": "Der zu suchende Wert.",
                    "es-ES": "Valor que se busca.",
                    "es-MX": "El valor que se buscará.",
                    "fr-FR": "La valeur à chercher.",
                    "it-IT": "Il Valore da cercare.",
                    "ja-JP": "検索する値",
                    "ko-KR": "검색할 값입니다.",
                    "pl-PL": "Wartość której należy szukać.",
                    "pt-BR": "O Valor a ser buscado.",
                    "ru-RU": "Значение которое нужно найти.",
                    "zh-CN": "要搜索的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000C336",
        "descriptionLocalized": {
            "guid": "00000000C337",
            "en-US": "Whether the specified Array contains the specified Value.",
            "de-DE": "Ob das festgelegte Array den festgelegten Wert enthält.",
            "es-ES": "Si la matriz especificada contiene el valor especificado.",
            "es-MX": "Verifica si la matriz especificada contiene el valor especificado.",
            "fr-FR": "Si le tableau spécifié contient la valeur spécifiée.",
            "it-IT": "Specifica se l'Array contiene il Valore specificato.",
            "ja-JP": "指定値を含む指定配列の有無",
            "ko-KR": "지정된 배열에 지정된 값이 있는지 여부입니다.",
            "pl-PL": "Czy określona tabela zawiera określoną wartość.",
            "pt-BR": "Se a Matriz especificada contém o Valor especificado ou não.",
            "ru-RU": "Определяет содержит ли указанный массив указанное значение.",
            "zh-CN": "指定数组中是否包含指定的值。"
        },
        "en-US": "Array Contains",
        "es-MX": "La matriz contiene",
        "fr-FR": "Contenu du tableau",
        "ja-JP": "含む配列",
        "pt-BR": "Matriz Contém",
        "zh-CN": "数组包含"
    },
    "__arraySlice__": {
        "description": "A copy of the specified array containing only values from a specified index range.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to make a copy.",
                "type": {
                    "Array": "Object"
                },
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000BF21",
                    "en-US": "The array from which to make a copy.",
                    "de-DE": "Das Array von dem eine Kopie erstellt werden soll.",
                    "es-ES": "Matriz que se copia.",
                    "es-MX": "La matriz a partir de la cual se hará una copia.",
                    "fr-FR": "Le tableau dont il faut faire une copie.",
                    "it-IT": "L'array dal quale creare una copia.",
                    "ja-JP": "コピーを作成する配列",
                    "ko-KR": "복사본을 만들 배열입니다.",
                    "pl-PL": "Tabela z której wykonywana jest kopia.",
                    "pt-BR": "A matriz a ser copiada.",
                    "ru-RU": "Массив копию значений из которого нужно создать.",
                    "zh-CN": "产生此数组的复制。"
                }
            },
            {
                "name": "START INDEX",
                "description": "The first index of the range.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF22",
                    "en-US": "The first index of the range.",
                    "de-DE": "Der erste Index des Bereichs.",
                    "es-ES": "Primer índice del intervalo.",
                    "es-MX": "El primer índice del intervalo.",
                    "fr-FR": "Le premier index de l’intervalle.",
                    "it-IT": "Il primo indice dell'intervallo.",
                    "ja-JP": "範囲の最初の値",
                    "ko-KR": "범위의 첫 번째 인덱스입니다.",
                    "pl-PL": "Pierwszy indeks zakresu.",
                    "pt-BR": "O primeiro índice do intervalo.",
                    "ru-RU": "Первое значение диапазона.",
                    "zh-CN": "范围内的第一个索引。"
                }
            },
            {
                "name": "COUNT",
                "description": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF23",
                    "en-US": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                    "de-DE": "Die Anzahl der Elemente im resultierenden Array. Das resultierende Array enthält weniger Elemente wenn der festgelegte Bereich die Grenzen des Arrays überschreitet.",
                    "es-ES": "Número de elementos en la matriz resultante. La matriz resultante contendrá menos elementos si el intervalo especificado supera los límites de la matriz.",
                    "es-MX": "La cantidad de elementos de la matriz resultante. La matriz resultante contendrá menos elementos si el intervalo especificado excede los límites de la matriz.",
                    "fr-FR": "Le nombre d’éléments du tableau résultant. Le tableau résultant contiendra moins d’éléments si l’intervalle spécifié excède les limites du tableau.",
                    "it-IT": "Il numero degli elementi nell'array risultante. Esso conterrà meno elementi se l'intervallo specificato supera i limiti dell'array.",
                    "ja-JP": "結果として生じる配列に含まれる要素の数。指定した範囲が配列の範囲を超えると、配列に含まれる要素の数は少なくなる",
                    "ko-KR": "결과 배열의 요소 개수입니다. 설정 영역이 배열 범위를 벗어나는 경우 결과 배열이 갖는 요소의 수가 상대적으로 적을 수 있습니다.",
                    "pl-PL": "Liczba elementów w wynikowej tabeli. Wynikowa tabela zawiera mniej elementów jeśli określony zakres przekracza jej granice.",
                    "pt-BR": "O número de elementos na matriz resultante. A matriz resultante conterá menos elementos se o intervalo especificado exceder os limites da matriz.",
                    "ru-RU": "Количество элементов в итоговом массиве. Итоговый массив будет содержать меньшее количество элементов если указанный диапазон превышает границы массива.",
                    "zh-CN": "结果数组中的元素数量。如果指定的范围超过此数组的限制，则结果数组中会包含较少的元素。"
                }
            }
        ],
        "isConstant": true,
        "return": {
            "Array": "Object"
        },
        "guid": "00000000B597",
        "descriptionLocalized": {
            "guid": "00000000BF20",
            "en-US": "A copy of the specified Array containing only Values from a specified index range.",
            "de-DE": "Eine Kopie des festgelegten Arrays die nur Werte aus einem festgelegten Indexbereich enthält.",
            "es-ES": "Una copia de la matriz especificada que solo contiene valores de un intervalo de índices especificado.",
            "es-MX": "Una copia de la matriz especificada que contiene solo los valores de un intervalo de índice especificado.",
            "fr-FR": "Une copie du tableau spécifié contenant uniquement les valeurs d’un index d’intervalle spécifié.",
            "it-IT": "Una copia dell'Array specificato contenente solo i Valori di un intervallo di indice specificato.",
            "ja-JP": "指定の配列のコピー。インデックス範囲内の値のみを含む",
            "ko-KR": "지정된 범위 인덱스의 값만을 포함하고 있는 지정된 배열의 복사본입니다.",
            "pl-PL": "Kopia określonej tabeli zawierająca tylko wartości z określonego zakresu indeksu.",
            "pt-BR": "Uma cópia da Matriz especificada contendo apenas Valores de um intervalo de índices especificado.",
            "ru-RU": "Копия выбранного массива содержащая только значения из указанного диапазона значений.",
            "zh-CN": "复制指定的数组，只复制指定索引范围内的值。"
        },
        "en-US": "Array Slice",
        "es-MX": "Extracción de matriz",
        "fr-FR": "Section de tableau",
        "ja-JP": "配列のスライス",
        "pt-BR": "Fatia da Matriz",
        "zh-CN": "数组分割"
    },
    "__array__": {
        "description": "An array constructed from the listed values.",
        "args": [
            {
                "name": "[0]",
                "description": "The value that will be stored in the array at index [0].",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "en-US": "The value that will be stored in the array at index [0].",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000B836",
        "descriptionLocalized": {
            "guid": "00000000BF33",
            "en-US": "An Array constructed from the listed Values.",
            "de-DE": "Ein aus den aufgelisteten Werten erstelltes Array.",
            "es-ES": "Matriz construida a partir de los valores de la lista.",
            "es-MX": "Una matriz construida a partir de los valores de la lista.",
            "fr-FR": "Un tableau construit à partir des valeurs indiquées.",
            "it-IT": "Un Array creato dai Valori elencati.",
            "ja-JP": "記載された値から作成された配列",
            "ko-KR": "추가된 값으로부터 만들어진 배열입니다.",
            "pl-PL": "Tabela skonstruowana z wartości na liście",
            "pt-BR": "Uma Matriz construída a partir dos Valores listados.",
            "ru-RU": "Массив созданный из указанных значений.",
            "zh-CN": "由所列出的值组成的数组。"
        },
        "en-US": "Array",
        "es-MX": "Matriz",
        "fr-FR": "Tableau",
        "ja-JP": "配列",
        "pt-BR": "Matriz",
        "zh-CN": "数组"
    },
    "__button__": {
        "description": "A button constant.",
        "args": [
            {
                "name": "BUTTON",
                "description": "A button constant.",
                "type": "ButtonLiteral",
                "default": "PRIMARY FIRE",
                "descriptionLocalized": {
                    "guid": "000000010B3C",
                    "en-US": "A Button constant.",
                    "de-DE": "Eine Tastenkonstante.",
                    "es-ES": "Constante de un botón.",
                    "es-MX": "Una constante de botón.",
                    "fr-FR": "Une constante de bouton.",
                    "it-IT": "Una costante del Tasto.",
                    "ja-JP": "ボタンの定数",
                    "ko-KR": "버튼 상수입니다.",
                    "pl-PL": "Stała „Button” Przycisk.",
                    "pt-BR": "Uma constante de Botão.",
                    "ru-RU": "Константа кнопки.",
                    "zh-CN": "一个按钮常量。"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Button",
        "guid": "000000010B3B",
        "descriptionLocalized": {
            "guid": "000000010B3C",
            "en-US": "A Button constant.",
            "de-DE": "Eine Tastenkonstante.",
            "es-ES": "Constante de un botón.",
            "es-MX": "Una constante de botón.",
            "fr-FR": "Une constante de bouton.",
            "it-IT": "Una costante del Tasto.",
            "ja-JP": "ボタンの定数",
            "ko-KR": "버튼 상수입니다.",
            "pl-PL": "Stała „Button” Przycisk.",
            "pt-BR": "Uma constante de Botão.",
            "ru-RU": "Константа кнопки.",
            "zh-CN": "一个按钮常量。"
        },
        "en-US": "Button",
        "es-MX": "Botón",
        "fr-FR": "Bouton",
        "ja-JP": "ボタン",
        "pt-BR": "Botão",
        "zh-CN": "按钮"
    },
    "__color__": {
        "description": "A Color Constant",
        "args": [
            {
                "name": "Color",
                "description": "A Color Constant",
                "type": "ColorLiteral",
                "default": "White",
                "descriptionLocalized": {
                    "en-US": "A Color Constant",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Color",
        "guid": "000000011D42",
        "en-US": "Color",
        "fr-FR": "Couleur",
        "ja-JP": "色",
        "pt-BR": "Cor",
        "zh-CN": "颜色"
    },
    "__compare__": {
        "description": "Whether the comparison of the two inputs is true.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BEA5",
                    "en-US": "The left-hand side of the comparison. This may be any Value type if the operation is == or !=. Otherwise real numbers are expected.",
                    "de-DE": "Die linke Seite des Vergleichs. Dabei kann es sich um jeden Wertetyp handeln wenn die Operation == oder != ist. Ansonsten werden reelle Zahlen erwartet.",
                    "es-ES": "Parte izquierda de la comparación. Puede ser cualquier tipo de valor si la operación es «==» o «!=»; de lo contrario se esperan números reales.",
                    "es-MX": "El lado izquierdo de la comparación. Si la operación es == o != puede ser cualquier tipo de valor. Caso contrario se esperan números reales.",
                    "fr-FR": "La partie gauche de la comparaison. N’importe quel type de valeur est valide si l’opération est == ou !=. Sinon doit correspondre à des nombres réels.",
                    "it-IT": "La componente sinistra del confronto. Il Valore può essere di qualsiasi tipo se l'operazione è == o !=. Altrimenti sono richiesti numeri reali.",
                    "ja-JP": "比較対象の左側作業が「==」または「!=」の場合は、どの値タイプでも使用可能。それ以外の場合、実数を入力する必要がある",
                    "ko-KR": "비교 연산의 좌측단입니다. 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만 그 이외에는 실수 형식이어야 합니다.",
                    "pl-PL": "Lewa strona porównania. Może to być dowolny typ wartości jeśli działaniem jest „==” lub „!=”. W przeciwnym razie oczekiwane są liczby rzeczywiste.",
                    "pt-BR": "O lado esquerdo da comparação. Pode ser qualquer tipo de Valor se a operação for == ou !=. Caso contrário esperam-se números reais.",
                    "ru-RU": "Левая сторона сравнения. Значение может быть любого типа если выполняется операция [==] или [!=]. В остальных случаях используются действительные числа.",
                    "zh-CN": "比较式的左边。如果操作为“==”或“!=”，则可以为任意类型的值。否则此值应为实数。"
                }
            },
            {
                "name": "COMPARISON",
                "description": "",
                "type": "__Operator__",
                "default": "==",
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BEA6",
                    "en-US": "The right-hand side of the comparison. This may be any Value type if the operation is == or !=. Otherwise real numbers are expected.",
                    "de-DE": "Die rechte Seite des Vergleichs. Dabei kann es sich um jeden Wertetyp handeln wenn die Operation == oder != ist. Ansonsten werden reelle Zahlen erwartet.",
                    "es-ES": "Parte derecha de la comparación. Puede ser cualquier tipo de valor si la operación es «==» o «!=»; de lo contrario se esperan números reales.",
                    "es-MX": "El lado derecho de la comparación. Si la operación es == o != puede ser cualquier tipo de valor. Caso contrario se esperan números reales.",
                    "fr-FR": "La partie droite de la comparaison. N’importe quel type de valeur est valide si l’opération est == ou !=. Sinon doit correspondre à des nombres réels.",
                    "it-IT": "La componente destra del confronto. Il Valore può essere di qualsiasi tipo se l'operazione è == o !=. Altrimenti sono richiesti numeri reali.",
                    "ja-JP": "比較対象の右側。作業が「==」または「!=」の場合は、どの値タイプでも使用可能。それ以外の場合、実数を入力する必要がある",
                    "ko-KR": "비교 연산의 우측단입니다. 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만 그 이외에는 실수 형식이어야 합니다.",
                    "pl-PL": "Prawa strona porównania. Może to być dowolny typ wartości jeśli działaniem jest „==” lub „!=”. W przeciwnym razie oczekiwane są liczby rzeczywiste.",
                    "pt-BR": "O lado direito da comparação. Pode ser qualquer tipo de Valor se a operação for == ou !=. Caso contrário esperam-se números reais.",
                    "ru-RU": "Правая сторона сравнения. Значение может быть любого типа если выполняется операция [==] или [!=]. В остальных случаях используются действительные числа.",
                    "zh-CN": "比较式的右边。如果操作为“==”或“!=”，则可以为任意类型的值。否则此值应为实数。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B276",
        "descriptionLocalized": {
            "guid": "00000000BEA4",
            "en-US": "Whether the comparison of the two Inputs is True.",
            "de-DE": "Ob der Vergleich der zwei Eingaben True ist.",
            "es-ES": "Si la comparación de ambas entradas es «True».",
            "es-MX": "Verifica si la comparación de dos entradas es verdadera.",
            "fr-FR": "Si la comparaison des deux entrées est vraie.",
            "it-IT": "Specifica se il confronto tra i due Input corrisponde a True.",
            "ja-JP": "2つの入力を比較した場合に、「TRUE」を返すかどうか",
            "ko-KR": "두 입력 정보의 비교 결과가 True인지 여부입니다.",
            "pl-PL": "Czy porównanie obu danych wejściowych jest prawdą.",
            "pt-BR": "Se a comparação das duas Entradas é Verdadeira ou não.",
            "ru-RU": "Определяет верен ли True результат сравнения двух аргументов.",
            "zh-CN": "所输入的两个值的比较结果是否为“真”。"
        },
        "en-US": "Compare",
        "es-MX": "Comparar",
        "fr-FR": "Comparer",
        "ja-JP": "COMPARE",
        "pt-BR": "Comparar",
        "zh-CN": "比较"
    },
    "__concat__": {
        "guid": "00000000C41A",
        "description": "A copy of an array with one or more values appended to the end.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array to which to append.",
                "type": "Array",
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C41E",
                    "en-US": "The array to which to append.",
                    "de-DE": "Das Array das ergänzt werden soll.",
                    "es-ES": "Matriz a la que se agrega.",
                    "es-MX": "La matriz a la cual se anexará.",
                    "fr-FR": "Le tableau qui reçoit l’ajout.",
                    "it-IT": "L'array al quale aggiungere Valori.",
                    "ja-JP": "追加先の配列",
                    "ko-KR": "덧붙일 대상 배열입니다.",
                    "pl-PL": "Tabela do której należy dołączyć.",
                    "pt-BR": "A matriz a ser juntada.",
                    "ru-RU": "Массив который нужно дополнить.",
                    "zh-CN": "要添加至数组的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The value to append to the end of the array. If this value is itself an array, each element is appended.",
                "type": [
                    "Object",
                    {
                        "Array": "Object"
                    }
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C41C",
                    "en-US": "The Value to append to the end of the array. If this Value is itself an array each element is appended.",
                    "de-DE": "Der am Ende des festgelegten Arrays anzuhängende Wert. Ist dieser Wert selbst ein Array wird jedes seiner Elemente angehängt.",
                    "es-ES": "Valor que se agrega al final de la matriz. Si el propio valor es una matriz se agrega cada elemento.",
                    "es-MX": "El valor que se anexará al final de la matriz. Si este valor es una matriz propia se anexarán todos los elementos.",
                    "fr-FR": "La valeur à ajouter à la fin du tableau. Si cette valeur est elle-même un tableau chacun de ses éléments est ajouté.",
                    "it-IT": "Il Valore da aggiungere alla fine dell'array. Se il Valore è esso stesso un array ogni suo elemento sarà aggiunto.",
                    "ja-JP": "配列の最後に追加する値。値自体が配列である場合、マッチする各要素が追加される",
                    "ko-KR": "배열 후미에 덧붙일 값입니다. 이 값 자체가 배열인 경우 각 요소를 덧붙입니다.",
                    "pl-PL": "Wartość do dołączenia do końca tabeli. Jeśli wartością jest sama tabela dołączony zostaje każdy element.",
                    "pt-BR": "O Valor a ser juntado ao final da matriz. Se este Valor for uma matriz cada elemento dela será juntado.",
                    "ru-RU": "Значение добавляемое в конец массива. Если это значение представляет собой массив то из него берутся все элементы.",
                    "zh-CN": "加入数列尾端的值。如果值本身是一个数列，则添加其中的每一个元素。"
                }
            }
        ],
        "isConstant": true,
        "return": "Array",
        "descriptionLocalized": {
            "guid": "00000000C41B",
            "en-US": "A copy of an array with one or more Values appended to the end.",
            "de-DE": "Eine Kopie eines Arrays mit einem oder mehreren Werten die am Ende angehängt sind.",
            "es-ES": "Una copia de una matriz con uno o más valores agregados al final.",
            "es-MX": "Una copia de una matriz con uno o más valores anexados al final.",
            "fr-FR": "Une copie d’un tableau à la fin duquel une ou plusieurs valeurs ont été ajoutées.",
            "it-IT": "Una copia di un array con uno o più Valori aggiunti alla fine.",
            "ja-JP": "終わりに値が追加された配列のコピー存在する場合",
            "ko-KR": "맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.",
            "pl-PL": "Kopia tabeli z jedną lub większą liczbą wartości dołączonych do końca.",
            "pt-BR": "Uma cópia de uma matriz com um ou mais Valores juntados ao final.",
            "ru-RU": "Копия массива в конец которой добавлено одно или несколько значений.",
            "zh-CN": "一个数组的复制，将一个或更多的值添加至其末尾。"
        },
        "en-US": "Append To Array",
        "es-MX": "Anexar a la matriz",
        "fr-FR": "Ajouter au tableau",
        "ja-JP": "配列に追加",
        "pt-BR": "Juntar à Matriz",
        "zh-CN": "添加至数组"
    },
    "__currentArrayElement__": {
        "description": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5B9",
        "descriptionLocalized": {
            "guid": "00000000BE06",
            "en-US": "The current array element being considered. Only meaningful during the evaluation of Values such as Filtered Array and Sorted Array.",
            "de-DE": "Das aktuell berücksichtigte Array-Element. Nur während der Bewertung von Werten ausschlaggebend beispielsweise [Filtered Array] und [Sorted Array].",
            "es-ES": "Elemento de la matriz actual que se considera. Solo es relevante durante la evaluación de valores como «Filtered Array» y «Sorted Array».",
            "es-MX": "El elemento de la matriz actual en consideración. Solo tendrá importancia durante la evaluación de valores como Matriz filtrada y Matriz ordenada.",
            "fr-FR": "L’élément du tableau actuellement pris en compte. Uniquement utile durant l’évaluation de valeurs comme « Tableau filtré » et « Tableau trié ».",
            "it-IT": "L'attuale elemento dell'array da considerare. Ha senso solamente durante la valutazione di Valori come Array Filtrato e Array Ordinato.",
            "ja-JP": "評価される現在の配列の要素。「フィルタリングされた配列」や「ソートされた配列」を評価する場合のみに有効",
            "ko-KR": "현재 연산 대상인 배열 요소입니다. Filtered Array나 Sorted Array 등의 값을 확인할 때에만 의미가 있습니다.",
            "pl-PL": "Aktualnie uwzględniany element tabeli. ma znaczenie tylko podczas oceny wartości takich jak „Filtered Array” Filtrowana tabela i „Sorted Array” Sortowana tabela.",
            "pt-BR": "O elemento da matriz atual sendo considerado. Só é significativo durante a avaliação de Valores como Matriz Filtrada e Matriz Ordenada.",
            "ru-RU": "Элемент массива учитываемый в данный момент. Используется только при проверке значений таких как [Filtered Array] и [Sorted Array].",
            "zh-CN": "当前在考察的数组元素。只有在使用“过滤数组”或“排序数组”赋值时才有意义。"
        },
        "en-US": "Current Array Element",
        "es-MX": "Elemento de matriz actual",
        "fr-FR": "Élément de tableau actuel",
        "ja-JP": "現在の配列の要素",
        "pt-BR": "Elemento da Matriz Atual",
        "zh-CN": "当前数组元素"
    },
    "__currentArrayIndex__": {
        "description": "The current array index being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.",
        "args": [],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "0000000111B5",
        "descriptionLocalized": {
            "guid": "0000000111B6",
            "en-US": "The current array index being considered. Only meaningful during the evaluation of Values such as Filtered Array and Sorted Array.",
            "de-DE": "Der aktuell berücksichtigte Array-Index. Nur während der Bewertung von Werten ausschlaggebend beispielsweise [Filtered Array] und [Sorted Array].",
            "es-ES": "Índice de matriz actual que se considera. Solo es relevante durante la evaluación de valores como «Filtered Array» y «Sorted Array».",
            "es-MX": "El índice de la matriz actual en consideración. Solo tendrá importancia durante la evaluación de valores como Matriz filtrada y Matriz ordenada.",
            "fr-FR": "L’index du tableau actuellement pris en compte. Sert uniquement durant l’évaluation des valeurs comme « Tableau filtré » et « Tableau trié ».",
            "it-IT": "L'attuale indice di array da considerare. Ha senso solamente durante la valutazione di Valori come Filtered Array e Sorted Array.",
            "ja-JP": "評価される現在の配列のインデックス。「フィルタリングされた配列」や「ソートされた配列」を評価する場合のみに有効",
            "ko-KR": "현재 고려 대상인 배열 인덱스입니다. Filtered Array나 Sorted Array 등의 값을 확인할 때에만 의미가 있습니다.",
            "pl-PL": "Aktualnie uwzględniany indeks tabeli. Ma znaczenie tylko podczas oceny wartości takich jak „Filtered Array” Filtrowana tabela i „Sorted Array” Sortowana tabela.",
            "pt-BR": "O índice da matriz atual sendo considerado. Só é significativo durante a avaliação de Valores como Matriz Filtrada e Matriz Ordenada.",
            "ru-RU": "Индекс массива учитываемый в данный момент. Используется только при проверке значений таких как [Filtered Array] и [Sorted Array].",
            "zh-CN": "当前在考察的数组索引。只有在使用“过滤数组”或“排序数组”赋值时才有意义。"
        },
        "en-US": "Current Array Index",
        "es-MX": "Índice de matriz actual",
        "fr-FR": "Index de tableau actuel",
        "ja-JP": "現在の配列のインデックス",
        "pt-BR": "Índice da Matriz Atual",
        "zh-CN": "当前数组索引"
    },
    "__customString__": {
        "description": "ty magzie for adding that",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "CustomStringLiteral",
                "default": "HELLO",
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "guid": "00000000BF52",
                    "en-US": "The Value that will be converted to text and used to replace {0}.",
                    "de-DE": "Der Wert der in Text umgewandelt und als Ersatz für {0} verwendet wird.",
                    "es-ES": "Valor que se convertirá a texto y se utilizará para reemplazar a {0}.",
                    "es-MX": "El valor que se convertirá en texto y se utilizará para reemplazar {0}.",
                    "fr-FR": "La valeur qui sera convertie en texte et qui remplacera {0}.",
                    "it-IT": "Il Valore che sarà convertito in testo e usato per sostituire {0}.",
                    "ja-JP": "テキストに変換され、{0}を置き換える値",
                    "ko-KR": "텍스트로 전환되어 {0}을를 대체할 값입니다.",
                    "pl-PL": "Wartość która zostanie przekonwertowana na tekst i zastąpi zmienną „{0}”.",
                    "pt-BR": "O Valor que será convertido em texto e usado para substituir {0}.",
                    "ru-RU": "Значение которое будет преобразовано в текст и использовано для замены [{0}].",
                    "zh-CN": "此值将转换为文本并用于替代{0}。"
                }
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "guid": "00000000BF54",
                    "en-US": "The Value that will be converted to text and used to replace {1}.",
                    "de-DE": "Der Wert der in Text umgewandelt und als Ersatz für {1} verwendet wird.",
                    "es-ES": "Valor que se convertirá a texto y se utilizará para reemplazar a {1}.",
                    "es-MX": "El valor que se convertirá en texto y se utilizará para reemplazar {1}.",
                    "fr-FR": "La valeur qui sera convertie en texte et qui remplacera {1}.",
                    "it-IT": "Il Valore che sarà convertito in testo e usato per sostituire {1}.",
                    "ja-JP": "テキストに変換され、{1}を置き換える値",
                    "ko-KR": "텍스트로 전환되어 {1}을를 대체할 값입니다.",
                    "pl-PL": "Wartość która zostanie przekonwertowana na tekst i zastąpi zmienną „{1}”.",
                    "pt-BR": "O Valor que será convertido em texto e usado para substituir {1}.",
                    "ru-RU": "Значение которое будет преобразовано в текст и использовано для замены [{1}].",
                    "zh-CN": "此值将转换为文本并用于替代{1}。"
                }
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "guid": "00000000BF51",
                    "en-US": "The Value that will be converted to text and used to replace {2}.",
                    "de-DE": "Der Wert der in Text umgewandelt und als Ersatz für {2} verwendet wird.",
                    "es-ES": "Valor que se convertirá a texto y se utilizará para reemplazar a {2}.",
                    "es-MX": "El valor que se convertirá en texto y se utilizará para reemplazar {2}.",
                    "fr-FR": "La valeur qui sera convertie en texte et qui remplacera {2}.",
                    "it-IT": "Il Valore che sarà convertito in testo e usato per sostituire {2}.",
                    "ja-JP": "テキストに変換され、{2}を置き換える値",
                    "ko-KR": "텍스트로 전환되어 {2}을를 대체할 값입니다.",
                    "pl-PL": "Wartość która zostanie przekonwertowana na tekst i zastąpi zmienną „{2}”.",
                    "pt-BR": "O Valor que será convertido em texto e usado para substituir {2}.",
                    "ru-RU": "Значение которое будет преобразовано в текст и использовано для замены [{2}].",
                    "zh-CN": "此值将转换为文本并用于替代{2}。"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "00000000CE3C",
        "en-US": "Custom String",
        "es-MX": "Cadena personalizada",
        "fr-FR": "Chaîne personnalisée",
        "ja-JP": "カスタムストリング",
        "pt-BR": "String Personalizada",
        "zh-CN": "自定义字符串"
    },
    "__divide__": {
        "guid": "00000000C40F",
        "description": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C405",
                    "en-US": "The left-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "左側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "左边的运算量，可以是结果为数字或矢量的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C407",
                    "en-US": "The right-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "右側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "右边的运算量，可以是结果为数字或矢量的值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "descriptionLocalized": {
            "guid": "00000000C40E",
            "en-US": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
            "de-DE": "Der Quotient zweier Zahlen oder Vektoren. Das Ergebnis einer Division eines Vektors durch eine Zahl ist ein skalierter Vektor. Die Division durch 0 ergibt 0.",
            "es-ES": "Razón de dos números o vectores. Un vector dividido por un número dará como resultado un vector escalado. Dividir por cero tiene cero como resultado.",
            "es-MX": "La relación entre dos números o vectores. El resultado de un vector dividido por un número será un vector escalado. El resultado de toda división por 0 será 0.",
            "fr-FR": "Le ratio de deux nombres ou vecteurs. Un vecteur divisé par un nombre donnera un vecteur échelonné. Toute division par 0 sera égale à 0.",
            "it-IT": "Il rapporto tra due numeri o vettori. Il rapporto tra un vettore e un numero produce un vettore scalare. La divisione per zero risulta in zero.",
            "ja-JP": "2つの数値またはベクトルの割合。ベクトルの除算を行った場合、スケールされたベクトルが導き出される。0による除算を行った場合、結果は0になる",
            "ko-KR": "두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.",
            "pl-PL": "Współczynnik dwóch liczb lub wektorów. Wektor podzielony przez liczbę da wektor skalowany. Podział przez zero da wynik zero.",
            "pt-BR": "A razão de dois números ou vetores. Um vetor dividido por um número produzirá um vetor escalar. Divisão por zero resulta em zero.",
            "ru-RU": "Частное двух чисел или векторов. Вектор поделенный на число дает вектор другого размера. Деление на ноль дает ноль.",
            "zh-CN": "两个数字或矢量的商。矢量除以数字会得到一个缩放后的矢量。除以零的结果为0。"
        },
        "en-US": "Divide",
        "es-MX": "Dividir",
        "fr-FR": "Division",
        "ja-JP": "除算",
        "pt-BR": "Dividir",
        "zh-CN": "除"
    },
    "__emptyArray__": {
        "description": "An array with no elements.",
        "args": [],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000BF5A",
        "descriptionLocalized": {
            "guid": "00000000BF59",
            "en-US": "An array with no elements.",
            "de-DE": "Ein Array ohne Elemente.",
            "es-ES": "Una matriz sin elementos.",
            "es-MX": "Una matriz sin elementos.",
            "fr-FR": "Un tableau sans éléments.",
            "it-IT": "Un array senza alcun elemento.",
            "ja-JP": "要素のない配列",
            "ko-KR": "요소가 없는 배열입니다.",
            "pl-PL": "Tabela bez żadnych elementów.",
            "pt-BR": "Uma matriz sem elementos.",
            "ru-RU": "Пустой массив.",
            "zh-CN": "一个没有任何元素的数组。"
        },
        "en-US": "Empty Array",
        "es-MX": "Matriz vacía",
        "fr-FR": "Tableau vide",
        "ja-JP": "空の配列",
        "pt-BR": "Matriz Vazia",
        "zh-CN": "空数组"
    },
    "__filteredArray__": {
        "description": "A copy of the specified array with any values that do not match the specified condition removed.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be filtered.",
                "type": "Array",
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000BE04",
                    "en-US": "The array whose copy will be filtered.",
                    "de-DE": "Das Array dessen Kopie gefiltert wird.",
                    "es-ES": "Matriz cuya copia se filtrará.",
                    "es-MX": "La matriz cuya copia será filtrada.",
                    "fr-FR": "Le tableau dont la copie sera filtrée.",
                    "it-IT": "L'array la cui copia sarà filtrata.",
                    "ja-JP": "コピーがフィルタリングされる配列",
                    "ko-KR": "복사본을 필터링할 배열입니다.",
                    "pl-PL": "Tabela której kopia zostanie przefiltrowana.",
                    "pt-BR": "A matriz cuja cópia será filtrada.",
                    "ru-RU": "Массив содержимое копии которого будет отфильтровано.",
                    "zh-CN": "对此数组的复制进行过滤。"
                }
            },
            {
                "name": "CONDITION",
                "description": "The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE",
                "descriptionLocalized": {
                    "guid": "00000000BE05",
                    "en-US": "The Condition that is evaluated for each element of the copied array. If the Condition is true the element is kept in the copied array. Use the Current Array Element Value to reference the element of the array currently being considered.",
                    "de-DE": "Die Bedingung die für jedes Element des kopierten Arrays bewertet wird. Wenn die Bedingung True ist verbleibt das Element im kopierten Array. Für die Referenzierung des Elements des aktuell berücksichtigten Arrays wird der Wert [Current Array Element] verwendet.",
                    "es-ES": "Condición que se evalúa para cada elemento de la matriz copiada. Si la condición es verdadera el elemento se mantiene en la matriz copiada. Utiliza el valor de «Current Array Element» para hacer referencia al elemento de la matriz que se está considerando actualmente.",
                    "es-MX": "La condición que se evalúa para cada elemento de la matriz copiada. Si la condición es verdadera el elemento permanecerá en la matriz copiada. Usa el valor del elemento de la matriz actual para establecer una referencia al elemento de la matriz considerado actualmente.",
                    "fr-FR": "La condition évaluée pour chaque élément du tableau copié. Si la condition est vraie l’élément est conservé dans le tableau copié. Utilisez la valeur « Élément de tableau actuel » pour renvoyer vers l’élément du tableau actuellement pris en compte.",
                    "it-IT": "La Condizione valutata per ogni elemento dell'array copiato. Se la Condizione è vera l'elemento viene mantenuto nell'array copiato. Usa il Valore Elemento Array Attuale per fare riferimento all'elemento dell'array che è attualmente considerato.",
                    "ja-JP": "コピーされた配列の各要素で評価される条件。条件が「TRUE」の場合、要素はコピーされた配列に残る。「現在の配列の要素」の値を使って、評価される配列の要素を参照する",
                    "ko-KR": "복사된 배열의 각 요소에 대해 확인할 조건입니다. 조건이 참이면 요소는 복사된 배열에 보관됩니다. 현재 확인 대상인 배열의 요소를 참조할 때는 Current Array Element 값을 사용하세요.",
                    "pl-PL": "Warunek który jest oceniany dla każdego elementy skopiowanej tabeli. Jeśli warunek jest prawdą element pozostaje w skopiowanej tabeli. Użyj wartości „Current Array Element” Aktualny element tabeli aby odnieść się do aktualnie uwzględnianego elementu.",
                    "pt-BR": "A Condição avaliada para cada elemento da matriz copiada. Se a Condição for verdadeira o elemento será mantido na matriz copiada. Use o Valor de Elemento da Matriz Atual para referenciar o elemento da matriz que está sendo considerado.",
                    "ru-RU": "Условие выполнение которого будет проверяться для каждого элемента копии массива. Если условие верно то элемент сохраняется в копии массива. Чтобы сослаться на элемент проверяемого массива используйте значение [Current Array Element].",
                    "zh-CN": "对复制的数组中每个元素判断此条件。如果条件为“真”，则在复制的数组中保留此元素。可以使用“当前数组元素值”来指代数组中当前正在进行判断的元素。"
                }
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000B5B7",
        "descriptionLocalized": {
            "guid": "00000000BE03",
            "en-US": "A copy of the specified Array with any Values that do not match the specified Condition removed.",
            "de-DE": "Eine Kopie des festgelegten Arrays bei der alle Werte die der festgelegten Bedingung nicht entsprechen entfernt werden.",
            "es-ES": "Una copia de la matriz especificada con valores cualesquiera que no coinciden con la condición especificada eliminada.",
            "es-MX": "Una copia de la matriz especificada con aquellos valores que no concuerdan con la condición especificada eliminada.",
            "fr-FR": "Une copie du tableau spécifié dont toutes les valeurs qui ne correspondent pas à la condition spécifiée ont été supprimées.",
            "it-IT": "Una copia dell'Array specificato senza la presenza di qualsiasi Valore che non soddisfi la Condizione specificata.",
            "ja-JP": "指定の配列のコピー。削除された指定の条件と一致しない値のみを含む",
            "ko-KR": "제거된 지정 조건에 해당하지 않는 값을 가진 지정된 배열의 복사본입니다.",
            "pl-PL": "Kopia określonej tabeli z usuniętymi wszystkimi wartościami które nie odpowiadają określonemu warunkowi.",
            "pt-BR": "Uma cópia da Matriz especificada com todos os Valores que não correspondem à Condição especificada removidos.",
            "ru-RU": "Копия указанного массива из которой удалены значения не соответствующие заданному условию.",
            "zh-CN": "复制指定的数组，不满足特定条件的值将被移除。"
        },
        "en-US": "Filtered Array",
        "es-MX": "Matriz filtrada",
        "fr-FR": "Tableau filtré",
        "ja-JP": "フィルタリングされた配列",
        "pt-BR": "Matriz Filtrada",
        "zh-CN": "已过滤的数组"
    },
    "__firstOf__": {
        "description": "The value at the start of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF2B",
                    "en-US": "The array from which the Value is acquired.",
                    "de-DE": "Das Array aus dem der Wert abgerufen wird.",
                    "es-ES": "Matriz de la que se adquiere el valor.",
                    "es-MX": "La matriz de la cual se adquirirá el valor.",
                    "fr-FR": "Le tableau dans lequel la valeur est acquise.",
                    "it-IT": "L'array dal quale il Valore sarà acquisito.",
                    "ja-JP": "値を取得する配列",
                    "ko-KR": "값을 가져올 배열입니다.",
                    "pl-PL": "Tabela z której pozyskiwana jest wartość.",
                    "pt-BR": "A matriz da qual o Valor será adquirido.",
                    "ru-RU": "Массив из которого получено значение.",
                    "zh-CN": "获取此数组中的值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5C2",
        "descriptionLocalized": {
            "guid": "00000000BF2A",
            "en-US": "The Value at the start of the specified Array. Results in 0 if the specified array is empty.",
            "de-DE": "Der Wert am Anfang des festgelegten Arrays. Ergibt 0 wenn das festgelegte Array leer ist.",
            "es-ES": "Valor al principio de la matriz especificada. El resultado es «0» si la matriz especificada está vacía.",
            "es-MX": "El valor al comienzo de la matriz especificada. El resultado será 0 si la matriz especificada está vacía.",
            "fr-FR": "La valeur au début du tableau spécifié. Le résultat sera égal à 0 si le tableau spécifié est vide.",
            "it-IT": "Il Valore all'inizio dell'Array specificato. Risulta 0 se l'array specificato è vuoto.",
            "ja-JP": "特定の配列の最初にある値。配列が空の場合は0を返す",
            "ko-KR": "지정된 배열의 맨 앞에 있는 값입니다. 해당 배열이 비어 있으면 결과값은 0입니다.",
            "pl-PL": "Wartość na początku określonej tabeli. Wynik to 0 jeśli określona tabela jest pusta.",
            "pt-BR": "O Valor no início da Matriz especificada. Retorna o resultado 0 se a matriz especificada estiver vazia.",
            "ru-RU": "Значение в начале указанного массива. Если указанный массив пуст возвращает значение 0.",
            "zh-CN": "指定数组开始处的值。如果指定数组为空，此值则为0。"
        },
        "en-US": "First Of",
        "es-MX": "Primero de",
        "fr-FR": "Premier de",
        "ja-JP": "最初の値",
        "pt-BR": "Primeiro de",
        "zh-CN": "首个"
    },
    "__gamemode__": {
        "guid": "00000000F161",
        "description": "A game mode constant.",
        "args": [
            {
                "name": "GAME MODE",
                "description": "A game mode constant.",
                "type": "GamemodeLiteral",
                "default": "ASSAULT",
                "descriptionLocalized": {
                    "guid": "00000000F162",
                    "en-US": "A Game Mode constant.",
                    "de-DE": "Eine Spielmoduskonstante.",
                    "es-ES": "Una constante de modo de juego.",
                    "es-MX": "Una constante de modo de juego.",
                    "fr-FR": "Une constante du mode de jeu.",
                    "it-IT": "Una costante della modalità di gioco.",
                    "ja-JP": "ゲーム・モードの定数",
                    "ko-KR": "게임 모드 상수입니다.",
                    "pl-PL": "Stały punkt w trybach gry.",
                    "pt-BR": "Uma constante do modo de jogo.",
                    "ru-RU": "Константа игрового режима.",
                    "zh-CN": "比赛模式常量。"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Gamemode",
        "descriptionLocalized": {
            "guid": "00000000F162",
            "en-US": "A Game Mode constant.",
            "de-DE": "Eine Spielmoduskonstante.",
            "es-ES": "Una constante de modo de juego.",
            "es-MX": "Una constante de modo de juego.",
            "fr-FR": "Une constante du mode de jeu.",
            "it-IT": "Una costante della modalità di gioco.",
            "ja-JP": "ゲーム・モードの定数",
            "ko-KR": "게임 모드 상수입니다.",
            "pl-PL": "Stały punkt w trybach gry.",
            "pt-BR": "Uma constante do modo de jogo.",
            "ru-RU": "Константа игрового режима.",
            "zh-CN": "比赛模式常量。"
        },
        "en-US": "Game Mode",
        "es-MX": "Modo de juego",
        "fr-FR": "Mode de jeu",
        "ja-JP": "ゲーム・モード",
        "pt-BR": "Modo de jogo",
        "zh-CN": "比赛模式"
    },
    "__globalVar__": {
        "description": "The current value of a global variable, which is a variable that belongs to the game itself.",
        "args": [
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "GlobalVariable",
                "default": "A",
                "descriptionLocalized": {
                    "guid": "00000000BE0D",
                    "en-US": "The Variable whose Value to acquire.",
                    "de-DE": "Die Variable deren Wert abgerufen werden soll.",
                    "es-ES": "Variable cuyo valor se adquiere.",
                    "es-MX": "La variable cuyo valor se adquirirá.",
                    "fr-FR": "La variable dont il faut acquérir la valeur.",
                    "it-IT": "La Variabile dalla quale acquisire il Valore.",
                    "ja-JP": "値を取得する変数",
                    "ko-KR": "값 정보를 가져올 변수입니다.",
                    "pl-PL": "Zmienna której wartość należy pozyskać.",
                    "pt-BR": "A Variável cujo Valor será adquirido.",
                    "ru-RU": "Переменная значение которой нужно получить.",
                    "zh-CN": "获取此变量的值。"
                }
            }
        ],
        "return": "Value",
        "guid": "00000000B0F9",
        "descriptionLocalized": {
            "guid": "00000000BE0C",
            "en-US": "The current Value of a Global Variable which is a Variable that belongs to the game itself.",
            "de-DE": "Der aktuelle Wert einer globalen Variable. Dabei handelt es sich um eine Variable die dem Spiel selbst gehört.",
            "es-ES": "Valor actual de una variable global una variable que pertenece a la partida en sí.",
            "es-MX": "El valor actual de una variable global una variable que pertenece al propio juego.",
            "fr-FR": "La valeur actuelle d’une variable globale c’est-à-dire une variable rattachée à la partie même.",
            "it-IT": "Il Valore attuale di una Variabile Globale che è una Variabile che appartiene al gioco stesso.",
            "ja-JP": "現在のグローバル変数（ゲーム自体に所属する変数）の値",
            "ko-KR": "게임 자체에 종속된 전역 변수의 현재 값입니다.",
            "pl-PL": "Bieżąca wartość zmiennej „Global Variable” Zmienna globalna która należy do samej gry.",
            "pt-BR": "O Valor atual de uma Variável Global que é uma Variável que pertence ao jogo em si.",
            "ru-RU": "Текущее значение глобальной переменной то есть переменной относящейся к самой игре.",
            "zh-CN": "一个全局变量的当前值，全局变量即属于游戏本身的变量。"
        },
        "en-US": "Global Variable",
        "es-MX": "Variable global",
        "fr-FR": "Variable globale",
        "ja-JP": "グローバル変数",
        "pt-BR": "Variável Global",
        "zh-CN": "全局变量"
    },
    "__global__": {
        "return": "GlobalVariable",
        "args": null,
        "guid": "00000000EB1F",
        "en-US": "Global",
        "it-IT": "Globale",
        "ja-JP": "グローバル",
        "pl-PL": "Globalnie",
        "zh-CN": "全局"
    },
    "__hero__": {
        "guid": "00000000ACAA",
        "description": "A hero constant.",
        "args": [
            {
                "name": "HERO",
                "description": "A hero constant.",
                "type": "HeroLiteral",
                "default": "ANA",
                "descriptionLocalized": {
                    "guid": "00000000BDFB",
                    "en-US": "A Hero constant.",
                    "de-DE": "Eine Heldenkonstante.",
                    "es-ES": "Una constante de héroe.",
                    "es-MX": "Una constante de héroe.",
                    "fr-FR": "Une constante de héros.",
                    "it-IT": "Una costante dell'Eroe.",
                    "ja-JP": "ヒーローの定数",
                    "ko-KR": "영웅 상수입니다.",
                    "pl-PL": "Stała bohatera.",
                    "pt-BR": "Uma constante de Herói.",
                    "ru-RU": "Константа героя.",
                    "zh-CN": "一个英雄常量。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Hero",
        "descriptionLocalized": {
            "guid": "00000000BDFB",
            "en-US": "A Hero constant.",
            "de-DE": "Eine Heldenkonstante.",
            "es-ES": "Una constante de héroe.",
            "es-MX": "Una constante de héroe.",
            "fr-FR": "Une constante de héros.",
            "it-IT": "Una costante dell'Eroe.",
            "ja-JP": "ヒーローの定数",
            "ko-KR": "영웅 상수입니다.",
            "pl-PL": "Stała bohatera.",
            "pt-BR": "Uma constante de Herói.",
            "ru-RU": "Константа героя.",
            "zh-CN": "一个英雄常量。"
        },
        "en-US": "Hero",
        "es-MX": "Héroe",
        "fr-FR": "Héros",
        "ja-JP": "ヒーロー",
        "pt-BR": "Herói",
        "zh-CN": "英雄"
    },
    "__ifThenElse__": {
        "description": "Results in the Then value when the If condition is true; otherwise, results in the Else value.",
        "args": [
            {
                "name": "IF",
                "description": "If this condition evaluates to true, the result of the value is then; otherwise, the result is else.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "guid": "000000010BCA",
                    "en-US": "If this condition evaluates to true the result of the value is Then; otherwise the result is Else.",
                    "de-DE": "Wenn diese Bedingung True ist ist das Ergebnis dieses Werts [Then]; andernfalls ist das Ergebnis [Else].",
                    "es-ES": "Si esta condición se evalúa como verdadera el resultado del valor es «Then»; de lo contrario el resultado es «Else».",
                    "es-MX": "Si la condición es verdadera al ser evaluada el resultado del valor será Then; si no el resultado será Else.",
                    "fr-FR": "Si cette condition est évaluée comme vraie le résultat de la valeur est « Alors » ; dans le cas contraire le résultat est « Sinon ».",
                    "it-IT": "Se questa condizione risulta True il risultato del valore è Then; altrimenti il risultato è Else.",
                    "ja-JP": "条件が「TRUE」の場合、値の結果は「THEN」。それ以外の場合は「ELSE」",
                    "ko-KR": "이 조건이 참일 때 결과값이 Then이 됩니다. 그 외의 경우에는 결과값이 Else가 됩니다.",
                    "pl-PL": "Jeśli ten warunek zostanie oceniony jako prawda efekt wartości to „Then” Wtedy w przeciwnym razie efektem jest wartość „Else” Inaczej.",
                    "pt-BR": "Se essa condição for avaliada como verdadeira o resultado do valor será Then; caso contrário o resultado será Else.",
                    "ru-RU": "Если это условие верно возвращает значение «То»; в остальных случаях возвращает значение «В противном случае».",
                    "zh-CN": "如果此条件为真，则结果为Then后面的值；否则结果为Else后面的值。"
                }
            },
            {
                "name": "THEN",
                "description": "The result of the value when the if condition evaluates to true.",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "000000010BCC",
                    "en-US": "The result of the value when the If condition evaluates to true.",
                    "de-DE": "Das Ergebnis des Werts wenn die [If]-Bedingung True ist.",
                    "es-ES": "Resultado del valor cuando la condición «If» se evalúa como verdadera.",
                    "es-MX": "El resultado del valor si la condición If es verdadera al ser evaluada.",
                    "fr-FR": "Le résultat de la valeur quand la condition « Si » est évaluée comme vraie.",
                    "it-IT": "Il risultato del valore quando la condizione If risulta True.",
                    "ja-JP": "条件が「TRUE」の場合の値の結果",
                    "ko-KR": "조건이 참일 때의 결과값입니다.",
                    "pl-PL": "Efekt wartości kiedy warunek „If” Jeśli zostanie zweryfikowany jako prawda.",
                    "pt-BR": "O resultado do valor se a condição If for avaliada como verdadeira.",
                    "ru-RU": "Результат возвращаемый если условие «Если» верно.",
                    "zh-CN": "如果条件为真，则结果是这个值。"
                }
            },
            {
                "name": "ELSE",
                "description": "The result of the value when the if condition evaluates to false.",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "000000010BCE",
                    "en-US": "The result of the value when the If condition evaluates to false.",
                    "de-DE": "Das Ergebnis des Werts wenn die [If]-Bedingung False ist.",
                    "es-ES": "Resultado del valor cuando la condición «If» se evalúa como falsa.",
                    "es-MX": "El resultado del valor si la condición If es falsa al ser evaluada.",
                    "fr-FR": "Le résultat de la valeur quand la condition « Si » est évaluée comme fausse.",
                    "it-IT": "Il risultato del valore quando la condizione If risulta False.",
                    "ja-JP": "条件が「FALSE」の場合の値の結果",
                    "ko-KR": "조건이 거짓일 때의 결과값입니다.",
                    "pl-PL": "Efekt wartości kiedy warunek „If” Jeśli zostanie oceniony jako fałsz.",
                    "pt-BR": "O resultado do valor se a condição If for avaliada como falsa.",
                    "ru-RU": "Результат возвращаемый если условие «Если» ложно.",
                    "zh-CN": "如果条件不为真，则结果是这个值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "000000010BC7",
        "descriptionLocalized": {
            "guid": "000000010BC8",
            "en-US": "Results in the Then value when the If condition is true; otherwise results in the Else value.",
            "de-DE": "Ergibt den Wert [Then] wenn die [If]-Bedingung True ist; ergibt andernfalls den Wert [Else].",
            "es-ES": "El resultado es el valor «Then» cuando la condición «If» es verdadera; de lo contrario el resultado es el valor «Else».",
            "es-MX": "Resulta en el valor Then cuando la condición If es verdadera; si no resulta en el valor Else.",
            "fr-FR": "Les résultats dans la valeur « Alors » quand la condition « Si » est vraie ; dans le cas contraire les résultats dans la valeur « Sinon ».",
            "it-IT": "Risulta nel valore Then quando la condizione If è True; altrimenti risulta nel valore Else.",
            "ja-JP": "「IF」条件が「TRUE」の場合、結果は「THEN」の値。それ以外の場合は「ELSE」の値",
            "ko-KR": "조건이 참일 때 Then 값이 결과값이 됩니다. 그 외의 경우에는 Else 값이 결과값이 됩니다.",
            "pl-PL": "Kiedy warunek „If” Jeśli jest prawdą to efektem jest wartość „Then” Wtedy w przeciwnym razie efektem jest wartość „Else” Inaczej.",
            "pt-BR": "Resulta no valor Then quando a condição If for verdadeira; caso contrário resulta no valor Else.",
            "ru-RU": "Если условие «Если» верно возвращает значение «То»; в остальных случаях возвращает значение «В противном случае».",
            "zh-CN": "如果If后面的条件为真，则结果为Then后面的值；否则结果为Else后面的值。"
        },
        "en-US": "If-Then-Else",
        "fr-FR": "Si-Alors-Sinon",
        "ja-JP": "IF-THEN-ELSE"
    },
    "__indexOfArrayValue__": {
        "description": "The index of a value within an array or -1 if no such value can be found.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array in which to search for the specified value.",
                "type": {
                    "Array": "Object"
                },
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C333",
                    "en-US": "The Array in which to search for the specified Value.",
                    "de-DE": "Das nach dem festgelegten Wert abzusuchende Array.",
                    "es-ES": "Matriz en la que se busca el valor especificado.",
                    "es-MX": "La matriz en la que se buscará el valor especificado.",
                    "fr-FR": "Le tableau qui contient la valeur spécifiée.",
                    "it-IT": "L'Array nel quale cercare il Valore specificato.",
                    "ja-JP": "指定値の検索を行う配列",
                    "ko-KR": "지정된 값을 검색할 배열입니다.",
                    "pl-PL": "Tabela w której należy szukać określonej wartości.",
                    "pt-BR": "A Matriz na qual o Valor especificado será buscado.",
                    "ru-RU": "Массив в котором нужно найти указанное значение.",
                    "zh-CN": "在此数组中搜索指定的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The value for which to search.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C334",
                    "en-US": "The Value for which to search.",
                    "de-DE": "Der zu suchende Wert.",
                    "es-ES": "Valor que se busca.",
                    "es-MX": "El valor que se buscará.",
                    "fr-FR": "La valeur à chercher.",
                    "it-IT": "Il Valore da cercare.",
                    "ja-JP": "検索する値",
                    "ko-KR": "검색할 값입니다.",
                    "pl-PL": "Wartość której należy szukać.",
                    "pt-BR": "O Valor a ser buscado.",
                    "ru-RU": "Значение которое нужно найти.",
                    "zh-CN": "要搜索的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "00000000C330",
        "descriptionLocalized": {
            "guid": "00000000C331",
            "en-US": "The index of a Value within an Array or -1 if no such Value can be found.",
            "de-DE": "Der Index eines Werts in einem Array oder –1 wenn kein Wert gefunden wird.",
            "es-ES": "El índice de un valor dentro de una matriz o «-1» si no se encuentra ese valor.",
            "es-MX": "El índice de un valor dentro de una matriz o -1 si no se puede encontrar dicho valor.",
            "fr-FR": "L’index d’une valeur extraite d’un tableau ou -1 si aucune valeur de ce type n’a été trouvée.",
            "it-IT": "L'indice di un Valore all'interno di un Array o risulta -1 se tale Valore non può essere trovato.",
            "ja-JP": "配列内の値のインデックスもしくは-1該当する値が存在しない場合",
            "ko-KR": "배열 내에 있는 값의 인덱스입니다. 해당 값을 찾을 수 없는 경우 -1입니다.",
            "pl-PL": "Indeks wartości wewnątrz tabeli lub -1 jeśli nie znaleziono żadnej takiej wartości.",
            "pt-BR": "O índice de um Valor dentro da Matriz ou -1 se o Valor não puder ser encontrado.",
            "ru-RU": "Индекс значения в массиве или -1 если такое значение не найдено.",
            "zh-CN": "一个值在数组中的索引位置。如果找不到此值，则为-1。"
        },
        "en-US": "Index Of Array Value",
        "es-MX": "Índice del valor de la matriz",
        "fr-FR": "Index de la valeur de tableau",
        "ja-JP": "配列値のインデックス",
        "pt-BR": "Índice do Valor da Matriz",
        "zh-CN": "数组值的索引"
    },
    "__lastOf__": {
        "description": "The value at the end of the specified array. Results in 0 if the specified array is empty.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which the value is acquired.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF2B",
                    "en-US": "The array from which the Value is acquired.",
                    "de-DE": "Das Array aus dem der Wert abgerufen wird.",
                    "es-ES": "Matriz de la que se adquiere el valor.",
                    "es-MX": "La matriz de la cual se adquirirá el valor.",
                    "fr-FR": "Le tableau dans lequel la valeur est acquise.",
                    "it-IT": "L'array dal quale il Valore sarà acquisito.",
                    "ja-JP": "値を取得する配列",
                    "ko-KR": "값을 가져올 배열입니다.",
                    "pl-PL": "Tabela z której pozyskiwana jest wartość.",
                    "pt-BR": "A matriz da qual o Valor será adquirido.",
                    "ru-RU": "Массив из которого получено значение.",
                    "zh-CN": "获取此数组中的值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5C1",
        "descriptionLocalized": {
            "guid": "00000000BF2C",
            "en-US": "The Value at the end of the specified Array. Results in 0 if the specified array is empty.",
            "de-DE": "Der Wert am Ende des festgelegten Arrays. Ergibt 0 wenn das festgelegte Array leer ist.",
            "es-ES": "Valor al final de la matriz especificada. El resultado es «0» si la matriz especificada está vacía.",
            "es-MX": "El valor al final de la matriz especificada. El resultado será 0 si la matriz especificada está vacía.",
            "fr-FR": "La valeur à la fin du tableau spécifié. Le résultat sera égal à 0 si le tableau spécifié est vide.",
            "it-IT": "Il Valore alla fine dell'Array specificato. Risulta 0 se l'array specificato è vuoto.",
            "ja-JP": "特定の配列の最後の値。配列が空の場合は0を返す",
            "ko-KR": "지정된 배열의 끝에 있는 값입니다. 해당 배열이 비어 있으면 결과값은 0입니다.",
            "pl-PL": "Wartość na końcu określonej tabeli. Wynik to 0 jeśli określona tabela jest pusta.",
            "pt-BR": "O Valor no fim da Matriz especificada. Retorna o resultado 0 se a matriz especificada estiver vazia.",
            "ru-RU": "Значение в конце указанного массива. Если указанный массив пуст возвращает значение 0.",
            "zh-CN": "指定数组末尾元素的值。如果指定数组为空，则结果为0。"
        },
        "en-US": "Last Of",
        "es-MX": "Último de",
        "fr-FR": "Dernier",
        "ja-JP": "最後の値",
        "pt-BR": "Último de",
        "zh-CN": "最后"
    },
    "__localizedString__": {
        "guid": "00000000BA60",
        "description": "Text formed from a selection of strings and specified values.",
        "args": [
            {
                "name": "STRING",
                "description": "",
                "type": "LocalizedStringLiteral",
                "default": "HELLO",
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "{0}",
                "description": "The value that will be converted to text and used to replace {0}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "guid": "00000000BF52",
                    "en-US": "The Value that will be converted to text and used to replace {0}.",
                    "de-DE": "Der Wert der in Text umgewandelt und als Ersatz für {0} verwendet wird.",
                    "es-ES": "Valor que se convertirá a texto y se utilizará para reemplazar a {0}.",
                    "es-MX": "El valor que se convertirá en texto y se utilizará para reemplazar {0}.",
                    "fr-FR": "La valeur qui sera convertie en texte et qui remplacera {0}.",
                    "it-IT": "Il Valore che sarà convertito in testo e usato per sostituire {0}.",
                    "ja-JP": "テキストに変換され、{0}を置き換える値",
                    "ko-KR": "텍스트로 전환되어 {0}을를 대체할 값입니다.",
                    "pl-PL": "Wartość która zostanie przekonwertowana na tekst i zastąpi zmienną „{0}”.",
                    "pt-BR": "O Valor que será convertido em texto e usado para substituir {0}.",
                    "ru-RU": "Значение которое будет преобразовано в текст и использовано для замены [{0}].",
                    "zh-CN": "此值将转换为文本并用于替代{0}。"
                }
            },
            {
                "name": "{1}",
                "description": "The value that will be converted to text and used to replace {1}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "guid": "00000000BF54",
                    "en-US": "The Value that will be converted to text and used to replace {1}.",
                    "de-DE": "Der Wert der in Text umgewandelt und als Ersatz für {1} verwendet wird.",
                    "es-ES": "Valor que se convertirá a texto y se utilizará para reemplazar a {1}.",
                    "es-MX": "El valor que se convertirá en texto y se utilizará para reemplazar {1}.",
                    "fr-FR": "La valeur qui sera convertie en texte et qui remplacera {1}.",
                    "it-IT": "Il Valore che sarà convertito in testo e usato per sostituire {1}.",
                    "ja-JP": "テキストに変換され、{1}を置き換える値",
                    "ko-KR": "텍스트로 전환되어 {1}을를 대체할 값입니다.",
                    "pl-PL": "Wartość która zostanie przekonwertowana na tekst i zastąpi zmienną „{1}”.",
                    "pt-BR": "O Valor que será convertido em texto e usado para substituir {1}.",
                    "ru-RU": "Значение которое будет преобразовано в текст и использовано для замены [{1}].",
                    "zh-CN": "此值将转换为文本并用于替代{1}。"
                }
            },
            {
                "name": "{2}",
                "description": "The value that will be converted to text and used to replace {2}.",
                "type": "Object",
                "canReplace0ByNull": true,
                "default": "NULL",
                "descriptionLocalized": {
                    "guid": "00000000BF51",
                    "en-US": "The Value that will be converted to text and used to replace {2}.",
                    "de-DE": "Der Wert der in Text umgewandelt und als Ersatz für {2} verwendet wird.",
                    "es-ES": "Valor que se convertirá a texto y se utilizará para reemplazar a {2}.",
                    "es-MX": "El valor que se convertirá en texto y se utilizará para reemplazar {2}.",
                    "fr-FR": "La valeur qui sera convertie en texte et qui remplacera {2}.",
                    "it-IT": "Il Valore che sarà convertito in testo e usato per sostituire {2}.",
                    "ja-JP": "テキストに変換され、{2}を置き換える値",
                    "ko-KR": "텍스트로 전환되어 {2}을를 대체할 값입니다.",
                    "pl-PL": "Wartość która zostanie przekonwertowana na tekst i zastąpi zmienną „{2}”.",
                    "pt-BR": "O Valor que será convertido em texto e usado para substituir {2}.",
                    "ru-RU": "Значение которое будет преобразовано в текст и использовано для замены [{2}].",
                    "zh-CN": "此值将转换为文本并用于替代{2}。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "descriptionLocalized": {
            "guid": "00000000BF3D",
            "en-US": "Text formed from a selection of strings and specified Values.",
            "de-DE": "Text der aus einer Auswahl von Strings und festgelegten Werten entsteht.",
            "es-ES": "Texto formado a partir de una selección de cadenas y valores especificados.",
            "es-MX": "Texto formado a partir de una selección de cadenas y valores especificados.",
            "fr-FR": "Texte formé à partir d’une sélection de chaînes de caractères et de valeurs spécifiées.",
            "it-IT": "Il testo formato da una selezione di stringhe e Valori specifici.",
            "ja-JP": "いくつかの文字列と指定された値によって構成されるテキスト",
            "ko-KR": "선택한 텍스트와 지정된 값으로 구성된 텍스트입니다.",
            "pl-PL": "Tekst powstały z wybranych ciągów i określonych wartości.",
            "pt-BR": "Texto formado por uma seleção de strings e Valores especificados.",
            "ru-RU": "Текст полученный сочетанием текстовых строк и указанных значений.",
            "zh-CN": "由选定的字符串和指定的值构成的文本。"
        },
        "en-US": "String",
        "es-MX": "Cadena",
        "fr-FR": "Chaîne de texte",
        "ja-JP": "文字列",
        "zh-CN": "字符串"
    },
    "__map__": {
        "guid": "00000000D411",
        "description": "A map constant.",
        "args": [
            {
                "name": "MAP",
                "description": "A map constant.",
                "type": "MapLiteral",
                "default": "AYUTTHAYA",
                "descriptionLocalized": {
                    "guid": "00000000D416",
                    "en-US": "A Map constant.",
                    "de-DE": "Eine Kartenkonstante.",
                    "es-ES": "Una constante de mapa.",
                    "es-MX": "Una constante de mapa.",
                    "fr-FR": "Une constante de carte.",
                    "it-IT": "Una costante della Mappa.",
                    "ja-JP": "マップの定数",
                    "ko-KR": "전장 상수입니다.",
                    "pl-PL": "Stała mapy.",
                    "pt-BR": "Uma constante de Mapa.",
                    "ru-RU": "Константа поля боя.",
                    "zh-CN": "一个地图常量"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Map",
        "descriptionLocalized": {
            "guid": "00000000D416",
            "en-US": "A Map constant.",
            "de-DE": "Eine Kartenkonstante.",
            "es-ES": "Una constante de mapa.",
            "es-MX": "Una constante de mapa.",
            "fr-FR": "Une constante de carte.",
            "it-IT": "Una costante della Mappa.",
            "ja-JP": "マップの定数",
            "ko-KR": "전장 상수입니다.",
            "pl-PL": "Stała mapy.",
            "pt-BR": "Uma constante de Mapa.",
            "ru-RU": "Константа поля боя.",
            "zh-CN": "一个地图常量"
        },
        "en-US": "Map",
        "es-ES": "Mapa",
        "es-MX": "Mapa",
        "fr-FR": "Carte",
        "it-IT": "Mappa",
        "ja-JP": "マップ",
        "pl-PL": "Mapa",
        "pt-BR": "Mapa",
        "ru-RU": "Поле боя",
        "zh-CN": "地图",
        "zh-TW": "地圖"
    },
    "__mappedArray__": {
        "description": "A copy of the specified array with the values mapped according to the mapping expression that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be mapped.",
                "type": "Array",
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "000000011229",
                    "en-US": "The array whose copy will be mapped.",
                    "de-DE": "Das Array dessen Kopie abgebildet wird.",
                    "es-ES": "Matriz cuya copia se mapeará.",
                    "es-MX": "La matriz cuya copia será mapeada.",
                    "fr-FR": "Le tableau dont la copie sera appliquée",
                    "it-IT": "L'array la cui copia sarà mappata.",
                    "ja-JP": "コピーがマッピングされる配列",
                    "ko-KR": "복사본을 매핑할 배열입니다.",
                    "pl-PL": "Tabela której kopia zostanie zmapowana.",
                    "pt-BR": "A matriz cuja cópia será mapeada.",
                    "ru-RU": "Массив копия которого будет сопоставлена.",
                    "zh-CN": "对此数组的复制进行映射。"
                }
            },
            {
                "name": "CONDITION",
                "description": "The mapping expression that is evaluated for each element of the copied array. Use the current array element value to reference the element of the array currently being considered.",
                "type": "bool",
                "default": "COMPARE",
                "descriptionLocalized": {
                    "guid": "00000001122C",
                    "en-US": "The Mapping Expression that is evaluated for each element of the copied array. Use the Current Array Element Value to reference the element of the array currently being considered.",
                    "de-DE": "Der Abbildungsausdruck der für jedes Element des kopierten Arrays bewertet wird. Für die Referenzierung des Elements des aktuell berücksichtigten Arrays wird der Wert [Current Array Element] verwendet.",
                    "es-ES": "Expresión de mapeado que se evalúa para cada elemento de la matriz copiada. Utiliza el valor de «Current Array Element» para hacer referencia al elemento de la matriz que se está considerando actualmente.",
                    "es-MX": "La expresión de mapeo que se evalúa para cada elemento de la matriz copiada. Usa el valor del elemento de la matriz actual para establecer una referencia al elemento de la matriz considerado actualmente.",
                    "fr-FR": "L’expression d’application évaluée pour chaque élément du tableau copié. Utilisez la valeur « Élément de tableau actuel » pour renvoyer vers l’élément du tableau actuellement pris en compte.",
                    "it-IT": "L'Espressione di Mappatura valutata per ogni elemento dell'array copiato. Usa il Valore Current Array Element per fare riferimento all'elemento dell'array che è attualmente considerato.",
                    "ja-JP": "コピーされた配列の各要素で評価されるマッピング表現。「現在の配列の要素」の値を使って、評価される配列の要素を参照する",
                    "ko-KR": "복사한 배열의 각 요소에 대해 평가할 매핑 수식입니다. 현재 고려 대상인 배열의 요소를 참조할 때는 Current Array Element 값을 사용하십시오.",
                    "pl-PL": "Wyrażenie mapowania które jest oceniane dla każdego elementu skopiowanej tabeli. Użyj wartości „Current Array Element” Aktualny element tabeli aby odnieść się do aktualnie uwzględnianego elementu z tabeli.",
                    "pt-BR": "A Expressão de Mapeamento calculada para cada elemento da matriz copiada. Use o Valor de Elemento da Matriz Atual para referenciar o elemento da matriz que está sendo considerado no momento.",
                    "ru-RU": "Выражение сопоставления которое будет проверяться для каждого элемента скопированного массива. Чтобы сослаться на элемент проверяемого массива используйте значение [Current Array Element].",
                    "zh-CN": "映射表达式将此数组中的每个元素复值为被复制的数组中的元素值。使用“当前数组元素值”可以指定当前考察的数组中元素的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "000000011228",
        "descriptionLocalized": {
            "guid": "00000001122A",
            "en-US": "A copy of the specified Array with the Values mapped according to the Mapping Expression that is evaluated for each element.",
            "de-DE": "Eine Kopie des festgelegten Arrays bei der die Werte nach der [Mapping Expression] abgebildet werden die für jedes Element bewertet wird.",
            "es-ES": "Una copia de la matriz especificada con los valores mapeados según la expresión de mapeado que se evalúa para cada elemento.",
            "es-MX": "Una copia de la matriz especificada con los valores mapeados de acuerdo con la expresión de mapeo que se evalúa para cada elemento.",
            "fr-FR": "Une copie du tableau spécifié avec les valeurs appliquées selon l’expression d’application évaluée pour chaque élément.",
            "it-IT": "Una copia dell'Array specificato con i Valori mappati secondo l'Espressione di Mappatura valutata per ogni elemento.",
            "ja-JP": "指定の配列のコピー。各要素で評価されたマッピング表現によってマッピングされている",
            "ko-KR": "각 요소에 대해 평가된 매핑 수식에 의해 매핑된 값을 가진 지정 배열의 복사본입니다.",
            "pl-PL": "Kopia określonej tabeli z wartościami posortowanymi według wyrażenia mapowania które jest oceniane dla każdego elementu.",
            "pt-BR": "Uma cópia da Matriz especificada com os Valores mapeados de acordo com a Expressão de Mapeamento calculada para cada elemento.",
            "ru-RU": "Копия указанного массива значения которого будут сопоставлены в соответствии с выражением проверяемым для каждого элемента.",
            "zh-CN": "复制指定的数组，根据映射表达式对每个元素进行赋值。"
        },
        "en-US": "Mapped Array",
        "es-MX": "Matriz mapeada",
        "fr-FR": "Tableau appliqué",
        "ja-JP": "マッピングされた配列",
        "pt-BR": "Matriz Mapeada",
        "zh-CN": "映射的数组"
    },
    "__modulo__": {
        "guid": "00000000C410",
        "description": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C412",
                    "en-US": "The left-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "左側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "左边的运算量，可以是结果为数字的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "unsigned float",
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C413",
                    "en-US": "The right-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "右側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "右边的运算量，可以是结果为数字的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "descriptionLocalized": {
            "guid": "00000000C411",
            "en-US": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
            "de-DE": "Der Rest der Division des linken Operanden durch den rechten Operanden. Der Rest einer Division durch 0 ist immer 0.",
            "es-ES": "Resto del operando de la parte izquierda dividido por el operando de la parte derecha. Cualquier número módulo cero tiene cero como resultado.",
            "es-MX": "El resto del operando del lado izquierdo dividido por el operando del lado derecho. El resultado de todo módulo de 0 será 0.",
            "fr-FR": "Le reste de l’opérande de gauche divisé par l’opérande de droite. Toute opération Modulo de 0 renvoie un résultat nul.",
            "it-IT": "Il resto dell'operando a sinistra diviso per l'operando a destra. Qualsiasi numero modulo zero risulta in zero.",
            "ja-JP": "左側の被演算子の残りは右側の被演算子で除算される。0を法とした場合、結果は0になる",
            "ko-KR": "좌측 피연산자를 우측 피연산자로 나눈 나머지입니다. 어떤 숫자이든 Modulo 0의 결과는 0입니다.",
            "pl-PL": "Reszta z dzielenia lewostronnego operandu przez prawostronny operand. Modulo zero dowolnej liczby daje wynik zero.",
            "pt-BR": "O resto do operando esquerdo dividido pelo operando direito. Qualquer número modular zero resulta em zero.",
            "ru-RU": "Остаток левого операнда поделенного на правый операнд. Результатом целочисленного деления любого числа на ноль будет ноль.",
            "zh-CN": "左边的运算量除以右边的运算量之后的余数。如果右边是0的话则结果为0。"
        },
        "en-US": "Modulo",
        "es-MX": "Módulo",
        "ja-JP": "剰余",
        "pt-BR": "Modular",
        "zh-CN": "余数"
    },
    "__multiply__": {
        "guid": "00000000C40D",
        "description": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C405",
                    "en-US": "The left-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "左側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "左边的运算量，可以是结果为数字或矢量的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C407",
                    "en-US": "The right-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "右側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "右边的运算量，可以是结果为数字或矢量的值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "descriptionLocalized": {
            "guid": "00000000C40C",
            "en-US": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
            "de-DE": "Das Produkt zweier Zahlen oder Vektoren. Das Ergebnis einer Multiplikation eines Vektors mit einer Zahl ist ein skalierter Vektor.",
            "es-ES": "Producto de dos números o vectores. Un vector multiplicado por un número dará como resultado un vector escalado.",
            "es-MX": "El producto de dos números o vectores. El resultado de un vector multiplicado por un número será un vector escalado.",
            "fr-FR": "Le produit de deux nombres ou vecteurs. Un vecteur multiplié par un nombre donnera un vecteur échelonné.",
            "it-IT": "Il prodotto tra due numeri o vettori. La moltiplicazione di un vettore per un numero produce un vettore scalare.",
            "ja-JP": "2つの数値またはベクトルの積。ベクトルの乗算を行った場合、スケールされたベクトルが導き出される",
            "ko-KR": "두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를 곱하면 비율이 증감된 벡터가 도출됩니다.",
            "pl-PL": "Produkt dwóch liczb lub wektorów. Wektor pomnożony przez liczbę da wektor skalowany.",
            "pt-BR": "O produto de dois números ou vetores. Um vetor multiplicado por um número produzirá um vetor escalar.",
            "ru-RU": "Произведение двух чисел или векторов. Вектор помноженный на число дает вектор другого размера.",
            "zh-CN": "两个数字或矢量的积。矢量乘以数字会得到一个缩放后的矢量。"
        },
        "en-US": "Multiply",
        "es-MX": "Multiplicar",
        "fr-FR": "Multiplication",
        "ja-JP": "乗算",
        "pt-BR": "Multiplicar",
        "zh-CN": "乘"
    },
    "__not__": {
        "guid": "00000000B275",
        "description": "Whether the input is false (or equivalent to false).",
        "args": [
            {
                "name": "VALUE",
                "description": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "guid": "00000000BEA3",
                    "en-US": "When this Input is False or equivalent to False then the Not Value is True. Otherwise the Not Value is False.",
                    "de-DE": "Wenn diese Eingabe False oder mit False gleichwertig ist ist der Wert [Not] True. Ansonsten ist der Wert [Not] False.",
                    "es-ES": "Cuando esta entrada es «False» o equivalente a «False» entonces el valor de «Not» es «True»; de lo contrario el valor de «Not» es «False».",
                    "es-MX": "Cuando esta entrada es falsa o equivalente a falsa el no valor es verdadero. Caso contrario el no valor es falso.",
                    "fr-FR": "Quand cette entrée est fausse ou équivalent la valeur « Pas » est vraie. Sinon la valeur « Pas » est fausse.",
                    "it-IT": "Quando l'Input corrisponde a False o è equivalente a False il Valore Not sarà True. Altrimenti il Valore Not sarà False.",
                    "ja-JP": "入力が「FALSE」である場合、「NOT」の値は「TRUE」を返す。それ以外の場合、「NOT」の値は「FALSE」を返す",
                    "ko-KR": "이 입력 정보가 False또는 그에 상응하는 경우라면 Not 값은 True입니다. 그 이외의 경우 Not 값은 False입니다.",
                    "pl-PL": "Kiedy dane wejściowe są fałszem lub jego odpowiednikiem wtedy „Not Value” „Nie wartość” jest prawdą. W przeciwnym razie jest fałszem.",
                    "pt-BR": "Quando esta Entrada for Falsa ou equivalente a Falsa então o Valor de Não será Verdadeiro. Caso contrário o Valor de Não será Falso.",
                    "ru-RU": "Если этот аргумент ложный False или эквивалентен False то верно значение [Not] в противном случае значение [Not] ложно.",
                    "zh-CN": "如果输入为“假”（或等效于“假”），则“非”值为“真”。否则，则“非”值为“假”。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "descriptionLocalized": {
            "guid": "00000000BEA2",
            "en-US": "Whether the Input is False or equivalent to False.",
            "de-DE": "Ob diese Eingabe False oder mit False gleichwertig ist.",
            "es-ES": "Si la entrada es «False» o equivalente a «False».",
            "es-MX": "Verifica si la entrada es falsa o equivalente a falsa.",
            "fr-FR": "Si cette entrée est fausse ou équivalent.",
            "it-IT": "Specifica se l'Input corrisponde a False o è equivalente a False.",
            "ja-JP": "入力が「FALSE」（または「FALSE」と同等）かどうか",
            "ko-KR": "입력 정보가 False또는 그에 상응하는 경우인지 여부입니다.",
            "pl-PL": "Czy dane wejściowe są fałszem lub jego odpowiednikiem.",
            "pt-BR": "Se a Entrada é Falsa ou equivalente a Falsa ou não.",
            "ru-RU": "Определяет ложен ли аргумент False или эквивалент False.",
            "zh-CN": "输入是否为“假”（或等效于“假”）。"
        },
        "en-US": "Not",
        "es-MX": "No",
        "fr-FR": "Pas",
        "ja-JP": "NOT",
        "pt-BR": "Não",
        "zh-CN": "非"
    },
    "__or__": {
        "guid": "00000000B274",
        "description": "Whether either of the two inputs are true (or equivalent to true).",
        "args": [
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "guid": "00000000BE9F",
                    "en-US": "One of the two Inputs considered. If either one is True or equivalent to True then the Or Value is True.",
                    "de-DE": "Eine der zwei berücksichtigten Eingaben. Wenn eine davon True oder mit True gleichwertig ist ist der Wert [Or] True.",
                    "es-ES": "Una de las dos entradas consideradas. Si alguna de ellas es «True» o equivalente a «True» entonces el valor de «Or» es «True».",
                    "es-MX": "Una de las dos entradas consideradas. Si una de las dos es verdadera o equivalente a verdadera el valor disyuntivo será verdadero.",
                    "fr-FR": "Une des deux entrées prises en compte. Si une d’elles est vraie ou équivalent alors la valeur « Ou » est vraie.",
                    "it-IT": "Uno dei due Input considerati. Se uno dei due corrisponde a True o è equivalente a True il Valore Or sarà True.",
                    "ja-JP": "検討される2つの入力のうちいずれか。いずれかが「TRUE」（または「TRUE」と同等）である場合、「OR」の値は「TRUE」を返す",
                    "ko-KR": "두 입력 정보를 확인하여 하나가 True또는 그에 상응하는 경우인 경우 Or 값은 True입니다.",
                    "pl-PL": "Jedne z dwóch uwzględnionych danych wejściowych. Jeśli któreś z nich są prawdą lub jej odpowiednikiem wtedy „Or Value” „Lub wartość” jest prawdą.",
                    "pt-BR": "Uma das duas Entradas consideradas. Se qualquer uma delas for Verdadeira ou equivalente a Verdadeira então o Valor de Ou será Verdadeiro.",
                    "ru-RU": "Один из двух рассматриваемых аргументов. Если любой из них верен True или эквивалент True то результат [Or] тоже верен.",
                    "zh-CN": "考察的两个输入值中的一个。如果两个值中有一个为“真”（或等效于“真”），则“或”的值为“真”。"
                }
            },
            {
                "name": "VALUE",
                "description": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "guid": "00000000BEA0",
                    "en-US": "One of the two Inputs considered. If either one is True or equivalent to True then the Or Value is True.",
                    "de-DE": "Eine der zwei berücksichtigten Eingaben. Wenn eine davon True oder mit True gleichwertig ist ist der Wert [Or] True.",
                    "es-ES": "Una de las dos entradas consideradas. Si alguna de ellas es «True» o equivalente a «True» entonces el valor de «Or» es «True».",
                    "es-MX": "Una de las dos entradas consideradas. Si una de las dos es verdadera o equivalente a verdadera el valor disyuntivo será verdadero.",
                    "fr-FR": "Une des deux entrées prises en compte. Si une d’elles est vraie ou équivalent alors la valeur « Ou » est vraie.",
                    "it-IT": "Uno dei due Input considerati. Se uno dei due corrisponde a True o è equivalente a True il Valore Or sarà True.",
                    "ja-JP": "検討される2つの入力のうちいずれか。いずれかが「TRUE」（または「TRUE」と同等）である場合、「OR」の値は「TRUE」を返す",
                    "ko-KR": "두 입력 정보를 확인하여 하나가 True또는 그에 상응하는 경우인 경우 Or 값은 True입니다.",
                    "pl-PL": "Jedne z dwóch uwzględnionych danych wejściowych. Jeśli któreś z nich są prawdą lub jej odpowiednikiem wtedy „Or Value” „Lub wartość” jest prawdą.",
                    "pt-BR": "Uma das duas Entradas consideradas. Se qualquer uma delas for Verdadeira ou equivalente a Verdadeira então o Valor de Ou será Verdadeiro.",
                    "ru-RU": "Один из двух рассматриваемых аргументов. Если любой из них верен True или эквивалент True то результат [Or] тоже верен.",
                    "zh-CN": "考察的两个输入值中的一个。如果两个值中有一个为“真”（或等效于“真”），则“或”的值为“真”。"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "descriptionLocalized": {
            "guid": "00000000BEA1",
            "en-US": "Whether either of the two Inputs are True or equivalent to True.",
            "de-DE": "Ob eine der beiden Eingaben True oder mit True gleichwertig ist.",
            "es-ES": "Si alguna de las dos entradas es «True» o equivalente a «True».",
            "es-MX": "Verifica si alguna de las dos entradas es verdadera o equivalente a verdadera.",
            "fr-FR": "Si une des deux entrées est vraie ou équivalent.",
            "it-IT": "Specifica se uno degli Input corrisponde a True o è equivalente a True.",
            "ja-JP": "2つの入力のいずれかが「TRUE」（または「TRUE」と同等）かどうか",
            "ko-KR": "두 입력 정보 중 하나가 True또는 그에 상응하는 경우인지 여부입니다.",
            "pl-PL": "Czy któreś z dwóch danych wejściowych są prawdą lub jej odpowiednikiem.",
            "pt-BR": "Se qualquer uma das duas Entradas é Verdadeira ou equivalente a Verdadeira ou não.",
            "ru-RU": "Определяет верен ли какой-либо из двух аргументов True или эквивалент True.",
            "zh-CN": "两个输入值中是否存在“真”（或等效于”真“）。"
        },
        "en-US": "Or",
        "es-MX": "O",
        "fr-FR": "Ou",
        "ja-JP": "OR",
        "pt-BR": "Ou",
        "zh-CN": "或"
    },
    "__playerVar__": {
        "description": "The current value of a player variable, which is a variable that belongs to a specific player.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player whose variable value to acquire.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BE0F",
                    "en-US": "The Player whose Variable Value to acquire.",
                    "de-DE": "Der Spieler dessen Variablenwert abgerufen werden soll.",
                    "es-ES": "Jugador cuyo valor de variable se adquiere.",
                    "es-MX": "El jugador cuyo valor de variable se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir la valeur de variable.",
                    "it-IT": "Il Giocatore da cui acquisire il Valore della Variabile.",
                    "ja-JP": "変数値を取得するプレイヤー",
                    "ko-KR": "변수 값 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego wartość zmiennej należy pozyskać.",
                    "pt-BR": "O Jogador cujo Valor de Variável será adquirido.",
                    "ru-RU": "Игрок значение переменной которого нужно получить.",
                    "zh-CN": "获取此玩家的变量值。"
                }
            },
            {
                "name": "VARIABLE",
                "description": "The variable whose value to acquire.",
                "type": "PlayerVariable",
                "default": "A",
                "descriptionLocalized": {
                    "guid": "00000000BE0D",
                    "en-US": "The Variable whose Value to acquire.",
                    "de-DE": "Die Variable deren Wert abgerufen werden soll.",
                    "es-ES": "Variable cuyo valor se adquiere.",
                    "es-MX": "La variable cuyo valor se adquirirá.",
                    "fr-FR": "La variable dont il faut acquérir la valeur.",
                    "it-IT": "La Variabile dalla quale acquisire il Valore.",
                    "ja-JP": "値を取得する変数",
                    "ko-KR": "값 정보를 가져올 변수입니다.",
                    "pl-PL": "Zmienna której wartość należy pozyskać.",
                    "pt-BR": "A Variável cujo Valor será adquirido.",
                    "ru-RU": "Переменная значение которой нужно получить.",
                    "zh-CN": "获取此变量的值。"
                }
            }
        ],
        "return": "Value",
        "guid": "00000000B0FD",
        "descriptionLocalized": {
            "guid": "00000000BE0E",
            "en-US": "The current Value of a Player Variable which is a Variable that belongs to a specific Player.",
            "de-DE": "Der aktuelle Wert einer Spielervariable. Dabei handelt es sich um eine Variable die einem bestimmten Spieler gehört.",
            "es-ES": "Valor actual de una variable de jugador una variable que pertenece a un jugador concreto.",
            "es-MX": "El valor actual de una variable de jugador una variable que pertenece a un jugador determinado.",
            "fr-FR": "La valeur actuelle d’une variable de joueur c’est-à-dire une variable rattachée à un joueur spécifique.",
            "it-IT": "Il Valore attuale della Variabile Giocatore che è una Variabile che appartiene a un Giocatore specifico.",
            "ja-JP": "現在のプレイヤー変数（特定のプレイヤーに所属する変数）の値",
            "ko-KR": "지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.",
            "pl-PL": "Bieżąca wartość zmiennej „Player Variable” Zmienna gracza która należy do konkretnego gracza.",
            "pt-BR": "O Valor atual de uma Variável de Jogador que é uma Variável que pertence a um Jogador específico.",
            "ru-RU": "Текущее значение переменной игрока то есть переменной относящейся к указанному игроку.",
            "zh-CN": "一个玩家变量当前的值，玩家变量即属于一个特定玩家的变量。"
        },
        "en-US": "Player Variable",
        "es-MX": "Variable de jugador",
        "fr-FR": "Variable de joueur",
        "ja-JP": "プレイヤー変数",
        "pt-BR": "Variável de Jogador",
        "zh-CN": "玩家变量"
    },
    "__raiseToPower__": {
        "guid": "00000000C414",
        "description": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "unsigned float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C412",
                    "en-US": "The left-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "左側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "左边的运算量，可以是结果为数字的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C413",
                    "en-US": "The right-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "右側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "右边的运算量，可以是结果为数字的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "descriptionLocalized": {
            "guid": "00000000C415",
            "en-US": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative the result is always zero.",
            "de-DE": "Der linke Operand potenziert mit dem rechten Operanden. Ist der linke Operand negativ ist das Ergebnis immer 0.",
            "es-ES": "Operando de la parte izquierda elevado al operando de la parte derecha. Si el operando de la parte izquierda es negativo el resultado siempre será cero.",
            "es-MX": "El operando del lado izquierdo elevado a la potencia del operando del lado derecho. Si el operando del lado izquierdo es negativo el resultado será siempre 0.",
            "fr-FR": "L’opérande de gauche élevée à la valeur de l’opérande de droite. Si l’opérande de gauche est négative le résultat sera toujours égal à 0.",
            "it-IT": "L'operando a sinistra innalzato alla potenza dell'operando a destra. Se l'operando a sinistra è negativo il risultato è sempre zero.",
            "ja-JP": "左側の被演算子を右側の被演算子の数値の分だけ累乗する。左側の被演算子が負の場合、結果は0となる",
            "ko-KR": "좌측 피연산자를 우측 피연산자만큼 제곱합니다. 좌측 피연산자가 음수이면 결과는 항상 0입니다.",
            "pl-PL": "Lewostronny operand podniesiony do potęgi prawostronnego operandu. Jeśli lewostronny jest ujemny wynikiem jest zawsze zero.",
            "pt-BR": "O operando esquerdo elevado à potência do operando direito. Se o operando esquerdo for negativo o resultado sempre será zero.",
            "ru-RU": "Левый операнд возведенный в степень с показателем равным правому оператору. Если левый операнд отрицателен то результат приравнивается к нулю.",
            "zh-CN": "左边运算量的乘方，幂为右边运算量。如果左边运算量为负，则结果始终为0。"
        },
        "en-US": "Raise To Power",
        "es-MX": "Elevar a la potencia",
        "fr-FR": "Élévation à une puissance ",
        "ja-JP": "累乗",
        "pt-BR": "Elevar à Potência",
        "zh-CN": "乘方"
    },
    "__raycastHitNormal__": {
        "description": "The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C5A3",
                    "en-US": "The start position for the ray cast. If a Player is provided a position 2 meters above the Player's feet is used.",
                    "de-DE": "Der Startpunkt des Raycasts. Wenn ein Spieler angegeben ist wird eine Position 2 Meter über den Füßen des Spielers verwendet.",
                    "es-ES": "La posición inicial del ray cast. Si se proporciona un jugador se utiliza una posición al menos 2 metros por encima de los pies del jugador.",
                    "es-MX": "La posición inicial para el lanzamiento de rayo. Si se detecta a un jugador se utilizará una posición 2 metros sobre los pies del jugador.",
                    "fr-FR": "Le point de départ du rayon émis. Si un joueur est renseigné le point utilisé se situe 2 mètres au-dessus de sa base.",
                    "it-IT": "La posizione iniziale del lancio del raggio. Se viene fornito un Giocatore viene utilizzata una posizione equivalente a 2 metri sopra i piedi dello stesso.",
                    "ja-JP": "レイ・キャストの開始位置。プレイヤーが指定されている場合、プレイヤーの足から2メートル上の位置が使用される",
                    "ko-KR": "레이캐스트의 시작 위치입니다. 플레이어가 설정되어 있으면 해당 플레이어의 발 위로 2미터 지점이 사용됩니다.",
                    "pl-PL": "Pozycja początkowa do weryfikacji raycastingu. Jeśli podano gracza użyta zostanie pozycja 2 metry nad jego stopami.",
                    "pt-BR": "A posição inicial do lançamento de raio. Se um Jogador for atribuído será usada uma posição 2 metros acima dos pés dele.",
                    "ru-RU": "Начальная точка луча функции [Ray Cast]. Если указан игрок то проверка проводится на высоте 2 метров от ступней игрока.",
                    "zh-CN": "射线开始施放的位置。如果此处填入一名玩家，则使用从此玩家脚部向上2米的位置。"
                }
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C5A4",
                    "en-US": "The end position for the ray cast. If a Player is provided a position 2 meters above the Player's feet is used.",
                    "de-DE": "Der Endpunkt des Raycasts. Wenn ein Spieler angegeben ist wird eine Position 2 Meter über den Füßen des Spielers verwendet.",
                    "es-ES": "La posición final del ray cast. Si se proporciona un jugador se utiliza una posición 2 metros por encima de los pies del jugador.",
                    "es-MX": "La posición final para el lanzamiento de rayo. Si se detecta a un jugador se utilizará una posición 2 metros sobre los pies del jugador.",
                    "fr-FR": "Le point final du rayon émis. Si un joueur est renseigné le point utilisé se situe 2 mètres au-dessus de sa base.",
                    "it-IT": "La posizione finale del lancio del raggio. Se viene fornito un Giocatore viene utilizzata una posizione equivalente a 2 metri sopra i piedi dello stesso.",
                    "ja-JP": "レイ・キャストの終了位置。プレイヤーが指定されている場合、プレイヤーの足から2メートル上の位置が使用される",
                    "ko-KR": "레이캐스트의 종료 위치입니다. 플레이어가 설정되어 있으면 해당 플레이어의 발 위로 2미터 지점이 사용됩니다.",
                    "pl-PL": "Pozycja końcowa do weryfikacji raycastingu. Jeśli podano gracza użyta zostanie pozycja 2 metry nad jego stopami.",
                    "pt-BR": "A posição final do lançamento de raio. Se um Jogador for atribuído será usada uma posição 2 metros acima dos pés dele.",
                    "ru-RU": "Конечная точка луча функции [Ray Cast]. Если указан игрок то проверка проводится на высоте 2 метров от ступней игрока.",
                    "zh-CN": "射线结束的位置。如果此处填入一名玩家，则使用从此玩家脚部向上2米的位置。"
                }
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": {
                    "Array": "Player"
                },
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C5A8",
                    "en-US": "Which players can be hit by this ray cast.",
                    "de-DE": "Welche Spieler von diesem Raycast getroffen werden können.",
                    "es-ES": "Los jugadores a los que puede alcanzar este ray cast.",
                    "es-MX": "Los jugadores que pueden ser golpeados por este lanzamiento de rayo.",
                    "fr-FR": "Les joueurs pouvant être intersectés par cette émission de rayons.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio.",
                    "ja-JP": "このレイ・キャストが当たりうるプレイヤー",
                    "ko-KR": "이 레이캐스트로 맞힐 수 있는 플레이어입니다.",
                    "pl-PL": "Którzy gracze mogą zostać oświetleni przez raycasting.",
                    "pt-BR": "Quais jogadores podem ser atingidos por este lançamento de raio.",
                    "ru-RU": "Определяет каких игроков может учитывать функция [Ray Cast].",
                    "zh-CN": "哪些玩家可以被射线击中。"
                }
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C604",
                    "en-US": "Which players cannot be hit by this ray cast. This list takes precedence over Players To Include.",
                    "de-DE": "Welche Spieler nicht von diesem Raycast getroffen werden können. Diese Liste hat Vorrang vor [Players To Include].",
                    "es-ES": "Los jugadores que no pueden ser alcanzados por este ray cast. Esta lista tiene prioridad sobre «Players to Exclude».",
                    "es-MX": "Los jugadores que no pueden ser golpeados por este lanzamiento de rayo. Esta lista tiene prioridad por sobre Jugadores para incluir.",
                    "fr-FR": "Les joueurs ne pouvant pas être touchés par cette émission de rayons. Cette liste supplante celle des Joueurs à inclure.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio. Questo elenco ha la precedenza sui Giocatori da Includere.",
                    "ja-JP": "レイ・キャストが当たらないプレイヤー。このリストは「含まれるプレイヤー」より優先される",
                    "ko-KR": "이 레이캐스트로 맞힐 수 없는 플레이어입니다. Players To Include보다 이 목록의 우선순위가 높습니다.",
                    "pl-PL": "Którzy gracze nie mogą zostać oświetleni przez raycasting. Ta lista ma priorytet nad „Players To Include” Gracze do uwzględnienia.",
                    "pt-BR": "Quais jogadores não podem ser atingidos por este lançamento de raio. Esta lista tem precedência sobre Jogadores a Incluir.",
                    "ru-RU": "Определяет какие игроки не будут учитываться функцией [Ray Cast]. Этот список имеет приоритет над списком [Players To Include].",
                    "zh-CN": "射线不会击中的玩家。此列表将优先于“包括玩家”。"
                }
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "en-US": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000C613",
        "descriptionLocalized": {
            "guid": "00000000C614",
            "en-US": "The surface normal at the ray cast hit position or from End Pos to Start Pos if no hit occurs.",
            "de-DE": "Der Normalenvektor der Oberfläche auf die der Raycast trifft oder der Vektor von End- bis Startpunkt wenn der Raycast keinen Treffer erzielt.",
            "es-ES": "La normal de superficie en la posición que alcanza el ray cast o de «Pos. final» a «Pos. inicial» si no alcanza nada.",
            "es-MX": "Estándar de superficie en la posición de impacto del lanzamiento de rayo o desde la posición final a la posición inicial si no ocurre ningún impacto.",
            "fr-FR": "La normale à une surface au point d’impact du rayon émis ou de la position de fin à la position de début si aucun élément n’est touché.",
            "it-IT": "La superficie normale nel punto di impatto del lancio del raggio o dalla Posizione Finale alla Posizione Iniziale se non viene colpito niente.",
            "ja-JP": "レイ・キャストが当たった位置の表面法線（当たらなかった場合は、終了位置から開始位置まで）",
            "ko-KR": "Ray Cast Hit Position에서의 표면 법선아무것도 맞지 않은 경우 End Pos에서 Start Pos입니다.",
            "pl-PL": "Normalna powierzchnia w pozycji raycastingu lub pozycja końcowa do pozycji startowej jeśli nie nastąpiło oświetlenie.",
            "pt-BR": "A normal da superfície na posição de acerto do lançamento de raio ou da Pos. Final para a Pos. Inicial se não ocorrer acerto.",
            "ru-RU": "Вектор нормали к поверхности с которой пересекся луч функции [Ray Cast] или от точки [End Pos] до точки [Start Pos] если пересечений с поверхностью не было.",
            "zh-CN": "射线命中平面的法线（如果没有命中，则从视线结束位置到射线起始位置）。"
        },
        "en-US": "Ray Cast Hit Normal",
        "es-MX": "Estándar de impacto de lanzamiento de rayo",
        "fr-FR": "Surface intersectée par le rayon émis",
        "ja-JP": "レイ・キャストが当たった法線",
        "pt-BR": "Normal de Acerto do Lançamento de Raio",
        "zh-CN": "射线命中法线"
    },
    "__raycastHitPlayer__": {
        "description": "The player hit by the ray cast (or null if no player is hit).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "en-US": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "en-US": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": {
                    "Array": "Player"
                },
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C5A8",
                    "en-US": "Which players can be hit by this ray cast.",
                    "de-DE": "Welche Spieler von diesem Raycast getroffen werden können.",
                    "es-ES": "Los jugadores a los que puede alcanzar este ray cast.",
                    "es-MX": "Los jugadores que pueden ser golpeados por este lanzamiento de rayo.",
                    "fr-FR": "Les joueurs pouvant être intersectés par cette émission de rayons.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio.",
                    "ja-JP": "このレイ・キャストが当たりうるプレイヤー",
                    "ko-KR": "이 레이캐스트로 맞힐 수 있는 플레이어입니다.",
                    "pl-PL": "Którzy gracze mogą zostać oświetleni przez raycasting.",
                    "pt-BR": "Quais jogadores podem ser atingidos por este lançamento de raio.",
                    "ru-RU": "Определяет каких игроков может учитывать функция [Ray Cast].",
                    "zh-CN": "哪些玩家可以被射线击中。"
                }
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C604",
                    "en-US": "Which players cannot be hit by this ray cast. This list takes precedence over Players To Include.",
                    "de-DE": "Welche Spieler nicht von diesem Raycast getroffen werden können. Diese Liste hat Vorrang vor [Players To Include].",
                    "es-ES": "Los jugadores que no pueden ser alcanzados por este ray cast. Esta lista tiene prioridad sobre «Players to Exclude».",
                    "es-MX": "Los jugadores que no pueden ser golpeados por este lanzamiento de rayo. Esta lista tiene prioridad por sobre Jugadores para incluir.",
                    "fr-FR": "Les joueurs ne pouvant pas être touchés par cette émission de rayons. Cette liste supplante celle des Joueurs à inclure.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio. Questo elenco ha la precedenza sui Giocatori da Includere.",
                    "ja-JP": "レイ・キャストが当たらないプレイヤー。このリストは「含まれるプレイヤー」より優先される",
                    "ko-KR": "이 레이캐스트로 맞힐 수 없는 플레이어입니다. Players To Include보다 이 목록의 우선순위가 높습니다.",
                    "pl-PL": "Którzy gracze nie mogą zostać oświetleni przez raycasting. Ta lista ma priorytet nad „Players To Include” Gracze do uwzględnienia.",
                    "pt-BR": "Quais jogadores não podem ser atingidos por este lançamento de raio. Esta lista tem precedência sobre Jogadores a Incluir.",
                    "ru-RU": "Определяет какие игроки не будут учитываться функцией [Ray Cast]. Этот список имеет приоритет над списком [Players To Include].",
                    "zh-CN": "射线不会击中的玩家。此列表将优先于“包括玩家”。"
                }
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "en-US": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000C611",
        "descriptionLocalized": {
            "guid": "00000000C615",
            "en-US": "The Player hit by the ray cast or Null if no Player is hit.",
            "de-DE": "Der vom Raycast getroffene Spieler oder Null wenn kein Spieler getroffen wird.",
            "es-ES": "El Jugador alcanzado por el ray cast o «Null» si no alcanza a ningún jugador.",
            "es-MX": "El jugador golpeado por el lanzamiento de rayo o nulo si ningún jugador es golpeado.",
            "fr-FR": "Le joueur touché par le rayon émis ou résultat nul si aucun joueur n’est touché.",
            "it-IT": "Il Giocatore colpito dal lancio del raggio o Nullo se nessun Giocatore viene colpito.",
            "ja-JP": "レイ・キャストが当たったプレイヤー（プレイヤーに当たらなかった場合は「NULL」）",
            "ko-KR": "레이캐스트로 맞힌 플레이어맞은 플레이어가 없는 경우 Null입니다.",
            "pl-PL": "Gracz oświetlony przez raycasting lub „Null” Brak jeśli nie oświetlono żadnego gracza.",
            "pt-BR": "O Jogador atingido pelo lançamento de raio ou Nulo se nenhum Jogador for atingido.",
            "ru-RU": "Игрок с которым пересекся луч функции [Ray Cast] если на пути луча не было игроков возвращает значение [Null].",
            "zh-CN": "射线命中的玩家（如果没有命中则为空）。"
        },
        "en-US": "Ray Cast Hit Player",
        "es-MX": "Jugador de impacto de lanzamiento de rayo",
        "fr-FR": "Joueur intersecté par le rayon émis",
        "ja-JP": "レイ・キャストが当たったプレイヤー",
        "pt-BR": "Jogador Atingido pelo Lançamento de Raio",
        "zh-CN": "射线命中玩家"
    },
    "__raycastHitPosition__": {
        "description": "The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "en-US": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "END POS",
                "description": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "en-US": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "PLAYERS TO INCLUDE",
                "description": "Which players can be hit by this ray cast.",
                "type": {
                    "Array": "Player"
                },
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C5A8",
                    "en-US": "Which players can be hit by this ray cast.",
                    "de-DE": "Welche Spieler von diesem Raycast getroffen werden können.",
                    "es-ES": "Los jugadores a los que puede alcanzar este ray cast.",
                    "es-MX": "Los jugadores que pueden ser golpeados por este lanzamiento de rayo.",
                    "fr-FR": "Les joueurs pouvant être intersectés par cette émission de rayons.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio.",
                    "ja-JP": "このレイ・キャストが当たりうるプレイヤー",
                    "ko-KR": "이 레이캐스트로 맞힐 수 있는 플레이어입니다.",
                    "pl-PL": "Którzy gracze mogą zostać oświetleni przez raycasting.",
                    "pt-BR": "Quais jogadores podem ser atingidos por este lançamento de raio.",
                    "ru-RU": "Определяет каких игроков может учитывать функция [Ray Cast].",
                    "zh-CN": "哪些玩家可以被射线击中。"
                }
            },
            {
                "name": "PLAYERS TO EXCLUDE",
                "description": "Which players cannot be hit by this ray cast. This list takes precedence over players to include.",
                "type": {
                    "Array": "Player"
                },
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000C604",
                    "en-US": "Which players cannot be hit by this ray cast. This list takes precedence over Players To Include.",
                    "de-DE": "Welche Spieler nicht von diesem Raycast getroffen werden können. Diese Liste hat Vorrang vor [Players To Include].",
                    "es-ES": "Los jugadores que no pueden ser alcanzados por este ray cast. Esta lista tiene prioridad sobre «Players to Exclude».",
                    "es-MX": "Los jugadores que no pueden ser golpeados por este lanzamiento de rayo. Esta lista tiene prioridad por sobre Jugadores para incluir.",
                    "fr-FR": "Les joueurs ne pouvant pas être touchés par cette émission de rayons. Cette liste supplante celle des Joueurs à inclure.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio. Questo elenco ha la precedenza sui Giocatori da Includere.",
                    "ja-JP": "レイ・キャストが当たらないプレイヤー。このリストは「含まれるプレイヤー」より優先される",
                    "ko-KR": "이 레이캐스트로 맞힐 수 없는 플레이어입니다. Players To Include보다 이 목록의 우선순위가 높습니다.",
                    "pl-PL": "Którzy gracze nie mogą zostać oświetleni przez raycasting. Ta lista ma priorytet nad „Players To Include” Gracze do uwzględnienia.",
                    "pt-BR": "Quais jogadores não podem ser atingidos por este lançamento de raio. Esta lista tem precedência sobre Jogadores a Incluir.",
                    "ru-RU": "Определяет какие игроки не будут учитываться функцией [Ray Cast]. Этот список имеет приоритет над списком [Players To Include].",
                    "zh-CN": "射线不会击中的玩家。此列表将优先于“包括玩家”。"
                }
            },
            {
                "name": "INCLUDE PLAYER OWNED OBJECTS",
                "description": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                "type": "bool",
                "default": "TRUE",
                "descriptionLocalized": {
                    "en-US": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000C597",
        "descriptionLocalized": {
            "guid": "00000000C598",
            "en-US": "The position where the ray cast hits a surface object or Player or the End Pos if no hit occurs.",
            "de-DE": "Der Punkt an dem der Raycast auf eine Oberfläche ein Objekt oder einen Spieler trifft oder sein Endpunkt wenn es zu keinem Auftreffen kommt.",
            "es-ES": "La posición en que el ray cast alcanza una superficie objeto o jugador o «Pos. final» si no alcanza nada.",
            "es-MX": "La posición donde el lanzamiento de rayo impacta una superficie objeto o jugador o la posición final si no ocurre ningún impacto.",
            "fr-FR": "La position à laquelle le rayon émis intersecte une surface un objet ou un joueur ou la position de fin si rien n’est intersecté.",
            "it-IT": "La posizione dove il lancio del raggio colpisce una superficie un oggetto o un Giocatore o la Posizione Finale se non viene colpito niente.",
            "ja-JP": "レイ・キャストが表面、オブジェクト、またはプレイヤーに当たった位置（当たらなかった場合は、終了位置）",
            "ko-KR": "레이캐스트로 맞힌 표면 오브젝트 또는 플레이어의 위치아무것도 맞지 않는 경우 End Pos입니다.",
            "pl-PL": "Pozycja w której raycasting oświetla powierzchnię obiekt lub gracza lub pozycja końcowa jeśli nie nastąpiło oświetlenie.",
            "pt-BR": "A posição onde o lançamento de raio atinge uma superfície objeto ou Jogador ou a Pos. Final se não ocorrer acerto.",
            "ru-RU": "Точка пересечения луча [Ray Cast] с поверхностью объектом или игроком или точка [End Pos] если пересечения не происходит.",
            "zh-CN": "射线在表面、物体或玩家上命中的位置（如果没有命中则此位置在视线结束处）。"
        },
        "en-US": "Ray Cast Hit Position",
        "es-MX": "Posición de impacto de lanzamiento de rayo",
        "fr-FR": "Position d’impact du rayon émis",
        "ja-JP": "レイ・キャストのヒット位置",
        "pt-BR": "Posição de Acerto do Lançamento de Raio",
        "zh-CN": "射线命中位置"
    },
    "__removeFromArray__": {
        "description": "A copy of an array with one or more values removed (if found).",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to remove values.",
                "type": "Array",
                "default": "ALL PLAYERS",
                "descriptionLocalized": {
                    "guid": "00000000C426",
                    "en-US": "The array from which to remove Values.",
                    "de-DE": "Das Array aus dem Werte zu entfernen sind.",
                    "es-ES": "Matriz de la que se eliminan valores.",
                    "es-MX": "La matriz de la cual se eliminarán valores.",
                    "fr-FR": "Le tableau dont il faut extraire des valeurs.",
                    "it-IT": "L'array dal quale rimuovere Valori.",
                    "ja-JP": "値を削除する配列",
                    "ko-KR": "값을 제거할 배열입니다.",
                    "pl-PL": "Tabela z której usuwane są wartości.",
                    "pt-BR": "A matriz de onde os Valores serão removidos.",
                    "ru-RU": "Массив из которого нужно удалить значения.",
                    "zh-CN": "从此数列中移除值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed.",
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C425",
                    "en-US": "The Value to remove from the array if found. If this Value is itself an array each matching element is removed.",
                    "de-DE": "Der aus dem Array zu entfernende Wert falls gefunden. Ist dieser Wert selbst ein Array wird jedes übereinstimmende Element daraus entfernt.",
                    "es-ES": "Valor que se elimina de la matriz si se encuentra. Si el propio valor es una matriz se elimina cada elemento que coincida.",
                    "es-MX": "El valor que se eliminará de la matriz si se encuentra. Si este valor es una matriz propia se eliminarán todos los elementos concordantes.",
                    "fr-FR": "La valeur à extraire du tableau le cas échéant. Si cette valeur est elle-même un tableau chaque élément correspondant en est extrait.",
                    "it-IT": "Il Valore da rimuovere dall'array se trovato. Se il Valore è esso stesso un array ogni elemento uguale sarà rimosso.",
                    "ja-JP": "配列から削除する値存在する場合。値自体が配列である場合、マッチする各要素が削除される",
                    "ko-KR": "배열에서 제거할 값있는 경우입니다. 이 값 자체가 배열인 경우 일치하는 각 요소가 제거됩니다.",
                    "pl-PL": "Wartość do usunięcia z tabeli jeśli zostanie znaleziona. Jeśli wartością jest sama tabela usunięty zostaje każdy pasujący element.",
                    "pt-BR": "O Valor a ser removido da matriz se encontrado. Se este Valor for uma matriz cada elemento correspondente dela será removido.",
                    "ru-RU": "Значение которое нужно удалить из массива если таковое имеется. Если значение представляет собой массив то из него удаляются все соответствующие элементы.",
                    "zh-CN": "要从数列中移除的值（如果能找到）。如果值本身是一个数列，则所有匹配的元素都将被移除。"
                }
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000C421",
        "descriptionLocalized": {
            "guid": "00000000C422",
            "en-US": "A copy of an array with one or more Values removed if found.",
            "de-DE": "Die Kopie eines Arrays mit einem oder mehreren entfernten Werten falls gefunden.",
            "es-ES": "Una copia de una matriz con uno o más valores eliminados si se encuentran.",
            "es-MX": "Una copia de una matriz con uno o más valores eliminados si se encuentran.",
            "fr-FR": "Une copie d’un tableau dont une ou plusieurs valeurs ont été extraites le cas échéant.",
            "it-IT": "Una copia di un array con uno o più Valori rimossi se trovati.",
            "ja-JP": "値が削除された配列のコピー存在する場合",
            "ko-KR": "하나 이상의 값있는 경우이 제거된 배열의 복사본입니다.",
            "pl-PL": "Kopia tabeli z jedną lub większą liczbą usuniętych wartości jeśli je znaleziono.",
            "pt-BR": "Uma cópia de uma matriz com um ou mais Valores removidos se encontrados.",
            "ru-RU": "Копия массива из которой удалено одно или несколько значений если таковые были найдены.",
            "zh-CN": "一个数组的复制，移除一个或更多的值（如果能找到）。"
        },
        "en-US": "Remove From Array",
        "es-MX": "Eliminar de la matriz",
        "fr-FR": "Supprimer du tableau",
        "ja-JP": "配列から削除",
        "pt-BR": "Remover da Matriz",
        "zh-CN": "从数组中移除"
    },
    "__round__": {
        "description": "The integer to which the specified value rounds.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number to round.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C355",
                    "en-US": "The real number to round.",
                    "de-DE": "Die reelle Zahl die gerundet werden soll.",
                    "es-ES": "Número real para redondear.",
                    "es-MX": "El número real que se redondeará.",
                    "fr-FR": "Le nombre réel arrondi.",
                    "it-IT": "Il numero reale da arrotondare.",
                    "ja-JP": "四捨五入する実数",
                    "ko-KR": "반올림할 실수입니다.",
                    "pl-PL": "Liczba rzeczywista do zaokrąglenia.",
                    "pt-BR": "O número real a arredondar.",
                    "ru-RU": "Действительное число которое нужно округлить.",
                    "zh-CN": "要取整的实数。"
                }
            },
            {
                "name": "ROUNDING TYPE",
                "description": "Determines the direction in which the value will be rounded.",
                "type": "__Rounding__",
                "default": "UP",
                "descriptionLocalized": {
                    "guid": "00000000C351",
                    "en-US": "Determines the direction in which the Value will be rounded.",
                    "de-DE": "Bestimmt ob der Wert auf- oder abgerundet wird.",
                    "es-ES": "Determina la dirección a la que se redondeará el valor.",
                    "es-MX": "Establece la dirección en la cual se redondeará el valor.",
                    "fr-FR": "Détermine le sens de l’arrondi de la valeur.",
                    "it-IT": "Determina la direzione verso cui il Valore sarà arrotondato.",
                    "ja-JP": "数値が四捨五入される方位を決める",
                    "ko-KR": "값을 반올림하는 규칙을 결정합니다.",
                    "pl-PL": "Określa kierunek w którym zaokrąglona zostanie wartość.",
                    "pt-BR": "Determina a direção na qual o Valor será arredondado.",
                    "ru-RU": "Определяет сторону в которую будет округляться значение.",
                    "zh-CN": "决定此值取整的方式。"
                }
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "00000000C354",
        "descriptionLocalized": {
            "guid": "00000000C353",
            "en-US": "The integer to which the specified Value rounds.",
            "de-DE": "Die ganze Zahl auf die der festgelegte Wert gerundet wird.",
            "es-ES": "Número entero al que se redondea el valor especificado.",
            "es-MX": "El número entero al cual se redondeará el valor especificado.",
            "fr-FR": "Le nombre entier issu de l’arrondi de la valeur spécifiée.",
            "it-IT": "Il numero intero verso il quale il Valore specificato sarà arrotondato.",
            "ja-JP": "指定値の四捨五入で導き出される整数",
            "ko-KR": "지정된 값을 반올림할 대상 정수입니다.",
            "pl-PL": "Liczba całkowita do której zaokrągla się określoną wartość.",
            "pt-BR": "O número inteiro para o qual o Valor especificado é arredondado.",
            "ru-RU": "Целое число до которого округляется указанное значение.",
            "zh-CN": "指定值取整后的值。"
        },
        "en-US": "Round To Integer",
        "es-MX": "Redondear a número entero",
        "fr-FR": "Arrondir à l’entier",
        "ja-JP": "整数への四捨五入",
        "pt-BR": "Arredondar para Inteiro",
        "zh-CN": "取整"
    },
    "__sortedArray__": {
        "description": "A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be sorted.",
                "type": {
                    "Array": "Object"
                },
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF30",
                    "en-US": "The array whose copy will be sorted.",
                    "de-DE": "Das Array dessen Kopie sortiert wird.",
                    "es-ES": "Matriz cuya copia se ordenará.",
                    "es-MX": "La matriz cuya copia será ordenada.",
                    "fr-FR": "Le tableau dont la copie sera triée.",
                    "it-IT": "L'array la cui copia sarà ordinata.",
                    "ja-JP": "コピーがソートされる配列",
                    "ko-KR": "복사본을 정렬할 배열입니다.",
                    "pl-PL": "Tabela której kopia zostanie posortowana.",
                    "pt-BR": "A matriz cuja cópia será ordenada.",
                    "ru-RU": "Массив в копии которого нужно выполнить сортировку.",
                    "zh-CN": "对此数组的复制进行排序。"
                }
            },
            {
                "name": "VALUE RANK",
                "description": "The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.",
                "type": "Object",
                "default": "CURRENT ARRAY ELEMENT",
                "descriptionLocalized": {
                    "guid": "00000000BF2F",
                    "en-US": "The Value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the Current Array Element Value to reference the element of the array currently being considered.",
                    "de-DE": "Der Wert der für jedes Element des kopierten Arrays bewertet wird. Das Array wird in aufsteigender Reihenfolge nach diesem Rang sortiert. Für die Referenzierung des Elements des aktuell berücksichtigten Arrays wird der Wert [Current Array Element] verwendet.",
                    "es-ES": "Valor que se evalúa para cada elemento de la matriz copiada. La matriz se ordena mediante este rango en sentido ascendente. Utiliza el valor de «Current Array Element» para hacer referencia al elemento de la matriz que se está considerando actualmente.",
                    "es-MX": "El valor que se evalúa para cada elemento de la matriz copiada. La matriz se ordenará de acuerdo con esta clasificación de forma ascendente. Usa el valor del elemento de la matriz actual para establecer una referencia al elemento de la matriz considerado actualmente.",
                    "fr-FR": "La valeur évaluée pour chaque élément du tableau copié. Le tableau est trié selon ce rang par ordre croissant. Utilisez la valeur « Élément de tableau actuel » pour renvoyer vers l’élément du tableau actuellement pris en compte.",
                    "it-IT": "Il Valore valutato per ogni elemento dell'array copiato. L'array è ordinato secondo questo grado e in ordine ascendente. Usa Valore Elemento Array Attuale per fare riferimento all'elemento dell'array che è attualmente considerato.",
                    "ja-JP": "コピーされた配列の各要素で評価される値。配列はこのランクの昇順にソートされる。「現在の配列の要素」の値を使って、評価される配列の要素を参照する",
                    "ko-KR": "복사할 배열의 각 요소마다 평가할 값입니다. 이 값의 순서에 따라 오름차순으로 복사본이 정렬됩니다. 현재 확인 대상인 배열의 요소를 참조할 때는 Current Array Element 값을 사용하십시오.",
                    "pl-PL": "Wartość która jest oceniana dla każdego elementy skopiowanej tabeli. Tabela jest sortowana według te wartości w rosnącej kolejności. Użyj wartości „Current Array Element” Aktualny element tabeli aby odnieść się do aktualnie uwzględnianego elementu z tabeli.",
                    "pt-BR": "O Valor avaliado para cada elemento da matriz copiada. A matriz é ordenada neste ranque em ordem crescente. Use o Valor de Elemento da Matriz Atual para referenciar o elemento da matriz que está sendo considerado.",
                    "ru-RU": "Значение которое нужно проверить для каждого элемента скопированного массива. Сортировка массива выполняется с его учетом по восходящей. Чтобы сослаться на элемент проверяемого массива используйте значение [Current Array Element].",
                    "zh-CN": "将此值赋值给复制的数组中的每个元素。数组将以升序排列。可以使用“当前数组元素值”来指代数组中当前正在进行判断的元素。"
                }
            }
        ],
        "isConstant": true,
        "return": {
            "Array": "Object"
        },
        "guid": "00000000B5C0",
        "descriptionLocalized": {
            "guid": "00000000BF2E",
            "en-US": "A copy of the specified Array with the Values sorted according to the Value Rank that is evaluated for each element.",
            "de-DE": "Eine Kopie des festgelegten Arrays bei der die Werte nach dem [Value Rank] sortiert werden der für jedes Element bewertet wird.",
            "es-ES": "Una copia de la matriz especificada con los valores ordenados según el rango de valor que se evalúa para cada elemento.",
            "es-MX": "Una copia de la matriz especificada con los valores ordenados de acuerdo con la clasificación de valores que se evalúa para cada elemento.",
            "fr-FR": "Une copie du tableau spécifié avec les valeurs triées selon le rang de la valeur évalué pour chaque élément.",
            "it-IT": "Una copia dell'Array specificato con i Valori ordinati secondo il Grado Valore valutato per ogni elemento.",
            "ja-JP": "指定の配列のコピー。各要素で評価されたランク値によってソートされている",
            "ko-KR": "지정한 배열의 각 요소를 Value Rank에 따라 평가하고 정렬해서 만든 새 배열 복사본입니다.",
            "pl-PL": "Kopia określonej tabeli z wartościami posortowanymi według rangi wartości która jest oceniana dla każdego elementu.",
            "pt-BR": "Uma cópia da Matriz especificada com os Valores ordenados de acordo com o Ranque de Valor avaliado para cada elemento.",
            "ru-RU": "Копия указанного массива со значениями отсортированными в порядке значений проверенных для каждого элемента.",
            "zh-CN": "复制指定的数组，根据每个元素的值的排名重新排序。"
        },
        "en-US": "Sorted Array",
        "es-MX": "Matriz ordenada",
        "fr-FR": "Tableau trié",
        "ja-JP": "ソートされた配列",
        "pt-BR": "Matriz Ordenada",
        "zh-CN": "已排序的数组"
    },
    "__strCharAt__": {
        "description": "The character found at a specified index of a String.",
        "args": [
            {
                "name": "String",
                "description": "The String value whose character to acquire.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The String value whose character to acquire.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Index",
                "description": "The index of the character to be acquired (with 0 as the first character, 1 as the second character, etc.).",
                "type": "unsigned int",
                "default": 0,
                "descriptionLocalized": {
                    "en-US": "The index of the character to be acquired (with 0 as the first character, 1 as the second character, etc.).",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "String",
        "guid": "000000012D5E",
        "en-US": "Char In String",
        "es-MX": "Personaje en cadena",
        "fr-FR": "Caractère dans la chaîne",
        "ja-JP": "配列の文字",
        "pt-BR": "Caractere na String",
        "zh-CN": "字符串中字符"
    },
    "__strIndex__": {
        "description": "The index of a character within a String or -1 if no such character can be found.",
        "args": [
            {
                "name": "String",
                "description": "The String Value from which to search for the character.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The String Value from which to search for the character.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Character",
                "description": "The character for which to search",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The character for which to search",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "int",
        "guid": "000000012D5F",
        "en-US": "Index Of String Char",
        "es-MX": "Índice del personaje de la cadena",
        "fr-FR": "Index de la chaîne de caractère",
        "ja-JP": "文字列の文字のインデックス",
        "pt-BR": "Índice de Caractere de String",
        "zh-CN": "字符串字符索引"
    },
    "__strReplace__": {
        "description": "Results in a String Value. This String Value will be built from the specified String Value, where all occurrences of the pattern String are replaced with the replacement String.",
        "args": [
            {
                "name": "String",
                "description": "The String Value with which to search for replacements.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The String Value with which to search for replacements.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Pattern",
                "description": "The String pattern to be replaced.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The String pattern to be replaced.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Replacement",
                "description": "The String Value with which to replace the pattern String",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The String Value with which to replace the pattern String",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "String",
        "guid": "000000012D61",
        "en-US": "String Replace",
        "es-MX": "Reemplazo de cadena",
        "fr-FR": "Remplacement de la chaîne",
        "ja-JP": "文字列の置換",
        "pt-BR": "Substituição de String",
        "zh-CN": "字符串替换"
    },
    "__strSplit__": {
        "description": "Results in an Array of String Values. These String Values will be built from the specified String Value, split around the separator String.",
        "args": [
            {
                "name": "String",
                "description": "The String Value to split.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The String Value to split.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Separator",
                "description": "The separator String with which to split the String Value.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The separator String with which to split the String Value.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": {
            "Array": "String"
        },
        "guid": "000000012D60",
        "en-US": "String Split",
        "es-MX": "Separación de cadena",
        "fr-FR": "Division de la chaîne",
        "ja-JP": "文字列の分割",
        "pt-BR": "Divisão de String",
        "zh-CN": "字符串分割"
    },
    "__substring__": {
        "description": "The substring of the provided string.",
        "args": [
            {
                "name": "String",
                "description": "The string value from which to build the substring.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "guid": "0000000124A8",
                    "en-US": "The string value from which to build the substring.",
                    "de-DE": "Der Stringwert von dem der Substring erstellt werden soll.",
                    "es-ES": "Valor de la cadena desde la que se creará la subcadena.",
                    "es-MX": "El valor de la cadena desde el cual se creará la subcadena.",
                    "fr-FR": "La valeur de la chaîne à partir de laquelle est construite la sous-chaîne.",
                    "it-IT": "Il valore della stringa dal quale costruire la sottostringa.",
                    "ja-JP": "部分文字列の作成元となる文字列の値",
                    "ko-KR": "하위 스트링을 만들 스트링 값입니다.",
                    "pl-PL": "Wartość ciągu z której można zbudować podciąg.",
                    "pt-BR": "O valor da string que será usada para construir a substring.",
                    "ru-RU": "Значение строки из которой будет взята подстрока.",
                    "zh-CN": "从此字符串值中构建子字符串。"
                }
            },
            {
                "name": "Substring Start Index",
                "description": "Specifies the character that will start the substring (with 0 as the first character, 1 as the second character, etc.).",
                "type": "unsigned int",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "0000000124AA",
                    "en-US": "Specifies the character that will start the substring with 0 as the first character 1 as the second character etc..",
                    "de-DE": "Legt das Zeichen fest bei dem der Substring beginnt 0 für das erste Zeichen 1 für das zweite Zeichen usw..",
                    "es-ES": "Especifica el carácter que comenzará en la subcadena 0 es el primer primero 1 es el segundo etc..",
                    "es-MX": "Especifica el carácter que comenzará la subcadena con 0 como el primer carácter 1 como el segundo etc..",
                    "fr-FR": "Spécifie le caractère qui commencera la sous-chaîne avec 0 comme premier caractère 1 comme second etc..",
                    "it-IT": "Specifica il carattere all'inizio della sottostringa dove 0 indica il primo carattere 1 il secondo eccetera.",
                    "ja-JP": "部分文字列を開始する文字数を指定する（1文字目が0、2文字目が1など）",
                    "ko-KR": "하위 스트링을 시작할 문자를 지정합니다. 0이 첫 번째 문자 1이 두 번째 문자 등",
                    "pl-PL": "Określa znak który uruchomi podciąg z 0 jako pierwszym znakiem 1 jako drugim itd..",
                    "pt-BR": "Especifica o caractere que iniciará a substring 0 é o primeiro 1 é o segundo etc.",
                    "ru-RU": "Указывает символ с которого будет начинаться подстрока первым символом будет 0 вторым – 1 и так далее.",
                    "zh-CN": "指定一个字符作为子字符串的起始处（0表示第一个字符，1表示第二个字符，以此类推）。"
                }
            },
            {
                "name": "Substring Length",
                "description": "Specifies the number of characters in the substring.",
                "type": "unsigned int",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "0000000124AC",
                    "en-US": "Specifies the number of characters in the substring.",
                    "de-DE": "Legt die Anzahl der Zeichen im Substring fest.",
                    "es-ES": "Especifica el número de caracteres en la subcadena.",
                    "es-MX": "Especifica la cantidad de caracteres de la subcadena.",
                    "fr-FR": "Spécifie le nombre de caractères dans la sous-chaîne.",
                    "it-IT": "Specifica il numero di caratteri nella sottostringa.",
                    "ja-JP": "部分文字列の文字数を指定する",
                    "ko-KR": "하위 스트링 내의 문자 수를 지정합니다.",
                    "pl-PL": "Określa liczbę znaków w podciągu.",
                    "pt-BR": "Especifica o número de caracteres na substring.",
                    "ru-RU": "Указывает число символов в подстроке.",
                    "zh-CN": "指定子字符串的字符数。"
                }
            }
        ],
        "isConstant": true,
        "return": "String",
        "guid": "0000000124A6",
        "en-US": "String Slice",
        "es-MX": "Extracción de cadena",
        "fr-FR": "Section de la chaîne",
        "ja-JP": "文字列の切り取り",
        "pt-BR": "Fatia da String",
        "zh-CN": "截取字符串"
    },
    "__subtract__": {
        "guid": "00000000C40A",
        "description": "The difference between two numbers or vectors.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C405",
                    "en-US": "The left-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "左側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "左边的运算量，可以是结果为数字或矢量的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number or a vector.",
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C407",
                    "en-US": "The right-hand operand. May be any Value that results in a number or a vector.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl oder ein Vektor ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número o vector como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número o un vector.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre ou un vecteur.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero o un vettore.",
                    "ja-JP": "右側の被演算子。数値またはベクトルとして導き出される任意の値",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자 또는 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba lub wektor.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número ou vetor.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число или вектор.",
                    "zh-CN": "右边的运算量，可以是结果为数字或矢量的值。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "descriptionLocalized": {
            "guid": "00000000C40B",
            "en-US": "The difference between two numbers or vectors.",
            "de-DE": "Die Differenz zweier Zahlen oder Vektoren.",
            "es-ES": "Diferencia entre dos números o vectores.",
            "es-MX": "La diferencia entre dos números o vectores.",
            "fr-FR": "La différence entre deux nombres ou vecteurs.",
            "it-IT": "La differenza tra due numeri o vettori.",
            "ja-JP": "2つの数値またはベクトルの差",
            "ko-KR": "두 숫자 또는 벡터의 차이입니다.",
            "pl-PL": "Różnica między dwoma liczbami lub wektorami.",
            "pt-BR": "A diferença entre dois números ou vetores.",
            "ru-RU": "Разность двух чисел или векторов.",
            "zh-CN": "两个数字或矢量的差。"
        },
        "en-US": "Subtract",
        "es-MX": "Restar",
        "fr-FR": "Soustraction",
        "ja-JP": "減算",
        "pt-BR": "Subtrair",
        "zh-CN": "减"
    },
    "__valueInArray__": {
        "description": "The value found at a specific element of an array. Results in 0 if the element does not exist.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose element to acquire.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF13",
                    "en-US": "The Array whose element to acquire.",
                    "de-DE": "Das Array dessen Element abgerufen werden soll.",
                    "es-ES": "Matriz cuyo elemento se adquiere.",
                    "es-MX": "La matriz cuyo elemento se adquirirá.",
                    "fr-FR": "Le tableau dans lequel acquérir l’élément.",
                    "it-IT": "L'Array dell'elemento da acquisire.",
                    "ja-JP": "要素を取得する配列",
                    "ko-KR": "요소 정보를 가져올 대상 배열입니다.",
                    "pl-PL": "Tabela której element należy pozyskać.",
                    "pt-BR": "A Matriz cujo elemento será adquirido.",
                    "ru-RU": "Массив элемент которого нужно получить.",
                    "zh-CN": "获取此数组中的元素。"
                }
            },
            {
                "name": "INDEX",
                "description": "The index of the element to acquire.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF12",
                    "en-US": "The Index of the element to acquire.",
                    "de-DE": "Der Index des abzurufenden Elements.",
                    "es-ES": "Índice del elemento que se adquiere.",
                    "es-MX": "El índice del elemento que se adquirirá.",
                    "fr-FR": "L’index du premier élément à acquérir.",
                    "it-IT": "L'Indice dell'elemento da acquisire.",
                    "ja-JP": "要素を取得するインデックス",
                    "ko-KR": "요소 정보를 가져올 인덱스입니다.",
                    "pl-PL": "Indeks elementu do pozyskania.",
                    "pt-BR": "O Índice do elemento a ser adquirido.",
                    "ru-RU": "Индекс элемента который нужно получить.",
                    "zh-CN": "获取索引中的元素。"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B52A",
        "descriptionLocalized": {
            "guid": "00000000BF14",
            "en-US": "The Value found at a specific element of an Array. Results in 0 if the element does not exist.",
            "de-DE": "Der Wert bei einem bestimmten Element eines Arrays. Ergibt 0 wenn das Element nicht existiert.",
            "es-ES": "Valor encontrado en un elemento concreto de una matriz. El resultado es «0» si el elemento no existe.",
            "es-MX": "El valor encontrado en un elemento específico de una matriz. El resultado será 0 si el elemento no existe.",
            "fr-FR": "La valeur trouvée pour un élément spécifique d’un tableau. Renvoie le résultat 0 si l’élément n’existe pas.",
            "it-IT": "Il Valore di un elemento specifico dell'Array. Risulta 0 se l'elemento non esiste.",
            "ja-JP": "配列内の特定の要素に見られる値。要素が存在しなければ0を返す",
            "ko-KR": "한 배열의 지정된 요소에 있는 값입니다. 대상 요소가 없는 경우 결과값은 0입니다.",
            "pl-PL": "Wartość znajdująca się w określonym elemencie tabeli. Wynikiem jest 0 jeśli element nie istnieje.",
            "pt-BR": "O Valor encontrado em um elemento específico de uma Matriz. Retorna o resultado 0 se o elemento não existir.",
            "ru-RU": "Значение найденное в указанном элементе массива. Если элемент не существует результатом будет значение 0.",
            "zh-CN": "一个数组中指定元素的值。如果该元素不存在，则结果为0。"
        },
        "en-US": "Value In Array",
        "es-MX": "Valor en la matriz",
        "fr-FR": "Valeur dans le tableau",
        "ja-JP": "配列内の値",
        "pt-BR": "Valor na Matriz",
        "zh-CN": "数组中的值"
    },
    "__workshopSettingCombo__": {
        "description": "Provides the value (a choice of Custom Strings) of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice.",
        "args": [
            {
                "name": "Category",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral",
                "default": "Custom String",
                "descriptionLocalized": {
                    "guid": "00000001136E",
                    "en-US": "The name of the category in which this setting will be found.",
                    "de-DE": "Der Name der Kategorie in der diese Einstellung aufgeführt wird.",
                    "es-ES": "Nombre de la categoría en la que se encuentra el ajuste.",
                    "es-MX": "El nombre de la categoría en donde se encontrará esta configuración.",
                    "fr-FR": "Le nom de la catégorie dans laquelle se trouvera ce paramètre.",
                    "it-IT": "Il nome della categoria in cui si troverà questa impostazione.",
                    "ja-JP": "この設定が含まれるカテゴリーの名称",
                    "ko-KR": "이 설정을 포함하고 있는 범주 이름입니다.",
                    "pl-PL": "Nazwa kategorii w której znajdzie się to ustawienie.",
                    "pt-BR": "O nome da categoria em que esta configuração será encontrada.",
                    "ru-RU": "Название категории в которую будет помещен параметр.",
                    "zh-CN": "此类别的名字，可以用来找到此设置。"
                }
            },
            {
                "name": "Name",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral",
                "default": "Custom String",
                "descriptionLocalized": {
                    "guid": "000000011370",
                    "en-US": "The name of this setting.",
                    "de-DE": "Der Name dieser Einstellung.",
                    "es-ES": "Nombre de este ajuste.",
                    "es-MX": "El nombre de esta configuración.",
                    "fr-FR": "Le nom de ce paramètre.",
                    "it-IT": "Il nome di questa impostazione.",
                    "ja-JP": "この設定の名称",
                    "ko-KR": "이 설정의 이름입니다.",
                    "pl-PL": "Nazwa tego ustawienia.",
                    "pt-BR": "O nome desta configuração.",
                    "ru-RU": "Название параметра.",
                    "zh-CN": "此设置的名称。"
                }
            },
            {
                "name": "Default",
                "description": "The default value for this setting.",
                "type": "UnsignedIntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000011373",
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "zh-CN": "此设置的默认值。"
                }
            },
            {
                "name": "Options",
                "description": "The options for this setting.",
                "type": {
                    "Array": "CustomStringLiteral"
                },
                "default": "Array",
                "descriptionLocalized": {
                    "guid": "000000011CC3",
                    "en-US": "The options for this setting.",
                    "de-DE": "Die Optionen für diese Einstellung.",
                    "es-ES": "Las opciones para este ajuste.",
                    "es-MX": "Las opciones en esta configuración.",
                    "fr-FR": "Les options pour ce paramètre.",
                    "it-IT": "Le opzioni per questa impostazione.",
                    "ja-JP": "この設定のオプション",
                    "ko-KR": "이 설정의 옵션입니다.",
                    "pl-PL": "Opcje tego ustawienia.",
                    "pt-BR": "As opções desta configuração.",
                    "ru-RU": "Варианты этого параметра.",
                    "zh-CN": "此设置的选项。"
                }
            },
            {
                "name": "Sort Order",
                "description": "The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000011C95",
                    "en-US": "The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.",
                    "de-DE": "Die Sortierreihenfolge der Einstellung relativ zu sonstigen Einstellungen an derselben Stelle. Einstellungen mit höherer Sortierreihenfolge erscheinen nach Einstellungen mit niedrigerer Sortierreihenfolge.",
                    "es-ES": "Criterio de ordenación de ajuste respecto a otros ajustes en la misma categoría. Los ajustes con un criterio de ordenación mayor aparecerán después de los ajustes con menor criterio de ordenación.",
                    "es-MX": "El orden de clasificación de la configuración con relación a otras configuraciones en la misma categoría. Las configuraciones que tengan un orden de clasificación superior aparecerán después de aquellas configuraciones que tengan un orden de clasificación inferior.",
                    "fr-FR": "L’ordre de tri du paramètre par rapport aux autres paramètres dans la même catégorie. Les paramètres avec un ordre de tri élevé viendront après les paramètres avec un ordre de tri faible.",
                    "it-IT": "L'ordinamento delle impostazioni relative ad altre impostazioni nella stessa categoria. Le impostazioni con un ordinamento superiore appariranno dopo le impostazioni con un ordinamento inferiore.",
                    "ja-JP": "同じカテゴリーに属する別設定に対する、設定のソート順。ソート順の値が高い設定は、低い設定の下に表示される",
                    "ko-KR": "동일한 위치에 있는 다른 설정과의 정렬 순서입니다. 정렬 순서 상 우선순위가 높은 설정 낮은 우선순위의 설정 다음에 위치하게 됩니다.",
                    "pl-PL": "Kolejność sortowania ustawienia względem innego ustawienia w tym samym miejscu. Ustawienie o wyższej kolejności sortowania pokaże się po ustawieniu o niższej kolejności.",
                    "pt-BR": "A ordem de classificação da configuração em relação a outras configurações na mesma categoria. Configurações com uma ordem de classificação maior virão depois de configurações com uma ordem de classificação menor.",
                    "ru-RU": "Порядок сортировки параметра по отношению к другим настройкам той же категории. Настройки с более высоким значением будут идти после настроек с более низким значением.",
                    "zh-CN": "此设置与其他同类别设置的排序关系。排序较高的设置会在排序较低的设置之后显示。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "000000011CC0",
        "descriptionLocalized": {
            "guid": "000000011CC1",
            "en-US": "Provides the value a choice of Custom Strings of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice.",
            "de-DE": "Gibt den Wert eine Auswahl benutzerdefinierter Strings einer neuen Einstellung an die in den Workshop-Einstellungen als Auswahlbox angezeigt wird. Dieser Wert gibt den Index der gewählten Option an.",
            "es-ES": "Proporciona el valor una selección de contenido personalizado de un nuevo ajuste de opciones que aparecerá en los ajustes del Taller como un cuadro combinado. Este valor muestra el índice de la opción seleccionada.",
            "es-MX": "Proporciona el valor una selección de cadenas personalizadas de una nueva opción de configuración que aparecerá en la sección de configuración del Workshop como un cuadro combinado. Este valor arroja el índice de la opción seleccionada.",
            "fr-FR": "Fournit la valeur un choix de Chaînes personnalisées d’un nouveau paramètre d’option qui apparaîtra dans la carte Paramètres de la Forge sous la forme d’une boîte combo. Cette valeur renvoie l’index du choix sélectionné.",
            "it-IT": "Fornisce il valore a scelta tra le Custom String di una nuova impostazione che apparirà nella scheda Impostazioni del Workshop come combo box. Questo valore restituisce l'indice della scelta selezionata.",
            "ja-JP": "ワークショップ設定のカードにコンボボックスとして表示される新しいオプション設定の値（選択されたカスタムストリング）を指定する。この値は選択されたもののインデックスを返す",
            "ko-KR": "워크샵 설정 카드에서 콤보 박스로 나타날 새로운 옵션의 값을 사용자 지정 스트링 중에서 제공합니다. 이 값은 선택한 스트링의 인덱스를 되돌립니다.",
            "pl-PL": "Zapewnia wartość wybór niestandardowego ciągu nowej opcji ustawienia która pojawi się na karcie ustawień Warsztatu jako pole wyboru. Wartość zwraca indeks danego wyboru.",
            "pt-BR": "Fornece o valor uma seleção de Strings Personalizadas de uma nova configuração de opção que aparecerá no cartão “Configurações do Workshop” como caixa de combinação. Esse valor retorna o índice da seleção.",
            "ru-RU": "Добавляет значение нового варианта настроек значения [Custom Strings] который появится в «Мастерской» в виде выпадающего списка. Это значение выдает индекс выбранного варианта.",
            "zh-CN": "提供一个新的选项设置值（用于选择自定义字符串），会显示在“地图工坊设置”卡片上作为组合框。此值会返回所选内容的索引。"
        },
        "en-US": "Workshop Setting Combo",
        "es-MX": "Combinado de la configuración del Workshop",
        "fr-FR": "Paramètre combo de la Forge",
        "ja-JP": "ワークショップ設定コンボ",
        "pt-BR": "Caixa de Combinação de Configurações do Workshop",
        "zh-CN": "地图工坊设置组合"
    },
    "__workshopSettingHero__": {
        "description": "Provides the value of a new hero setting that will appear in the Workshop Settings card as a hero list.",
        "args": [
            {
                "name": "Category",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral",
                "default": "Custom String",
                "descriptionLocalized": {
                    "guid": "00000001136E",
                    "en-US": "The name of the category in which this setting will be found.",
                    "de-DE": "Der Name der Kategorie in der diese Einstellung aufgeführt wird.",
                    "es-ES": "Nombre de la categoría en la que se encuentra el ajuste.",
                    "es-MX": "El nombre de la categoría en donde se encontrará esta configuración.",
                    "fr-FR": "Le nom de la catégorie dans laquelle se trouvera ce paramètre.",
                    "it-IT": "Il nome della categoria in cui si troverà questa impostazione.",
                    "ja-JP": "この設定が含まれるカテゴリーの名称",
                    "ko-KR": "이 설정을 포함하고 있는 범주 이름입니다.",
                    "pl-PL": "Nazwa kategorii w której znajdzie się to ustawienie.",
                    "pt-BR": "O nome da categoria em que esta configuração será encontrada.",
                    "ru-RU": "Название категории в которую будет помещен параметр.",
                    "zh-CN": "此类别的名字，可以用来找到此设置。"
                }
            },
            {
                "name": "Name",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral",
                "default": "Custom String",
                "descriptionLocalized": {
                    "guid": "000000011370",
                    "en-US": "The name of this setting.",
                    "de-DE": "Der Name dieser Einstellung.",
                    "es-ES": "Nombre de este ajuste.",
                    "es-MX": "El nombre de esta configuración.",
                    "fr-FR": "Le nom de ce paramètre.",
                    "it-IT": "Il nome di questa impostazione.",
                    "ja-JP": "この設定の名称",
                    "ko-KR": "이 설정의 이름입니다.",
                    "pl-PL": "Nazwa tego ustawienia.",
                    "pt-BR": "O nome desta configuração.",
                    "ru-RU": "Название параметра.",
                    "zh-CN": "此设置的名称。"
                }
            },
            {
                "name": "Default",
                "description": "The default value for this setting.",
                "type": "HeroLiteral",
                "default": "Ana",
                "descriptionLocalized": {
                    "guid": "000000011373",
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "zh-CN": "此设置的默认值。"
                }
            },
            {
                "name": "Sort Order",
                "description": "The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000011C95",
                    "en-US": "The sort order of the setting relative to other settings in the same category. Settings with a higher sort order will come after settings with a lower sort order.",
                    "de-DE": "Die Sortierreihenfolge der Einstellung relativ zu sonstigen Einstellungen an derselben Stelle. Einstellungen mit höherer Sortierreihenfolge erscheinen nach Einstellungen mit niedrigerer Sortierreihenfolge.",
                    "es-ES": "Criterio de ordenación de ajuste respecto a otros ajustes en la misma categoría. Los ajustes con un criterio de ordenación mayor aparecerán después de los ajustes con menor criterio de ordenación.",
                    "es-MX": "El orden de clasificación de la configuración con relación a otras configuraciones en la misma categoría. Las configuraciones que tengan un orden de clasificación superior aparecerán después de aquellas configuraciones que tengan un orden de clasificación inferior.",
                    "fr-FR": "L’ordre de tri du paramètre par rapport aux autres paramètres dans la même catégorie. Les paramètres avec un ordre de tri élevé viendront après les paramètres avec un ordre de tri faible.",
                    "it-IT": "L'ordinamento delle impostazioni relative ad altre impostazioni nella stessa categoria. Le impostazioni con un ordinamento superiore appariranno dopo le impostazioni con un ordinamento inferiore.",
                    "ja-JP": "同じカテゴリーに属する別設定に対する、設定のソート順。ソート順の値が高い設定は、低い設定の下に表示される",
                    "ko-KR": "동일한 위치에 있는 다른 설정과의 정렬 순서입니다. 정렬 순서 상 우선순위가 높은 설정 낮은 우선순위의 설정 다음에 위치하게 됩니다.",
                    "pl-PL": "Kolejność sortowania ustawienia względem innego ustawienia w tym samym miejscu. Ustawienie o wyższej kolejności sortowania pokaże się po ustawieniu o niższej kolejności.",
                    "pt-BR": "A ordem de classificação da configuração em relação a outras configurações na mesma categoria. Configurações com uma ordem de classificação maior virão depois de configurações com uma ordem de classificação menor.",
                    "ru-RU": "Порядок сортировки параметра по отношению к другим настройкам той же категории. Настройки с более высоким значением будут идти после настроек с более низким значением.",
                    "zh-CN": "此设置与其他同类别设置的排序关系。排序较高的设置会在排序较低的设置之后显示。"
                }
            }
        ],
        "return": "Hero",
        "guid": "000000011CBC",
        "en-US": "Workshop Setting Hero",
        "es-MX": "Configuración de héroe del Workshop",
        "fr-FR": "Paramètre héros de la Forge",
        "ja-JP": "ワークショップ設定ヒーロー",
        "pt-BR": "Herói de Configuração do Workshop",
        "zh-CN": "地图工坊设置英雄"
    },
    "__workshopSettingInteger__": {
        "description": "Provides the value of a new integer setting that will appear in the workshop settings card as a slider.",
        "args": [
            {
                "name": "CATEGORY",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral",
                "default": "CUSTOM STRING",
                "descriptionLocalized": {
                    "guid": "00000001136E",
                    "en-US": "The name of the category in which this setting will be found.",
                    "de-DE": "Der Name der Kategorie in der diese Einstellung aufgeführt wird.",
                    "es-ES": "Nombre de la categoría en la que se encuentra el ajuste.",
                    "es-MX": "El nombre de la categoría en donde se encontrará esta configuración.",
                    "fr-FR": "Le nom de la catégorie dans laquelle se trouvera ce paramètre.",
                    "it-IT": "Il nome della categoria in cui si troverà questa impostazione.",
                    "ja-JP": "この設定が含まれるカテゴリーの名称",
                    "ko-KR": "이 설정을 포함하고 있는 범주 이름입니다.",
                    "pl-PL": "Nazwa kategorii w której znajdzie się to ustawienie.",
                    "pt-BR": "O nome da categoria em que esta configuração será encontrada.",
                    "ru-RU": "Название категории в которую будет помещен параметр.",
                    "zh-CN": "此类别的名字，可以用来找到此设置。"
                }
            },
            {
                "name": "NAME",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral",
                "default": "CUSTOM STRING",
                "descriptionLocalized": {
                    "guid": "000000011370",
                    "en-US": "The name of this setting.",
                    "de-DE": "Der Name dieser Einstellung.",
                    "es-ES": "Nombre de este ajuste.",
                    "es-MX": "El nombre de esta configuración.",
                    "fr-FR": "Le nom de ce paramètre.",
                    "it-IT": "Il nome di questa impostazione.",
                    "ja-JP": "この設定の名称",
                    "ko-KR": "이 설정의 이름입니다.",
                    "pl-PL": "Nazwa tego ustawienia.",
                    "pt-BR": "O nome desta configuração.",
                    "ru-RU": "Название параметра.",
                    "zh-CN": "此设置的名称。"
                }
            },
            {
                "name": "DEFAULT",
                "description": "",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "MIN",
                "description": "",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "MAX",
                "description": "",
                "type": "IntLiteral",
                "default": 100,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "SORT ORDER",
                "description": "",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "000000011375",
        "descriptionLocalized": {
            "guid": "000000011374",
            "en-US": "Provides the value of a new integer setting that will appear in the Workshop Settings card as a slider.",
            "de-DE": "Gibt den Wert einer neuen Einstellung mit ganzen Zahlen an die in den Workshop-Einstellungen als Schieberegler angezeigt wird.",
            "es-ES": "Proporciona el valor de un nuevo ajuste de número entero que aparecerá en los ajustes del Taller como un control deslizante.",
            "es-MX": "Proporciona el valor de una nueva configuración de números enteros que aparecerá en la sección de configuración del Workshop como un control deslizante.",
            "fr-FR": "Fournit la valeur d’un nouveau paramètre de nombre entier qui apparaîtra dans la carte Paramètres de la Forge sous la forme d’un curseur.",
            "it-IT": "Fornisce il valore di un nuovo numero intero che apparirà nella scheda Impostazioni del Workshop come slider.",
            "ja-JP": "ワークショップ設定のカードにスライダーとして表示される新しい設定の値（整数）を指定する",
            "ko-KR": "워크샵 설정 카드에 슬라이더로 표시할 새로운 정수 설정값을 제공합니다.",
            "pl-PL": "Zapewnia wartość – „True” Prawda lub „False” Fałsz – ustawienia w postaci liczby całkowitej które pojawi się na karcie ustawień Warsztatu jako suwak.",
            "pt-BR": "Fornece o valor de uma nova configuração de inteiro que aparecerá no cartão Configurações do Workshop como controle deslizante.",
            "ru-RU": "Задает значение нового параметра выраженного целым числом который появится в настройках «Мастерской» в виде ползунка.",
            "zh-CN": "提供一个新的整数型设置值，会显示在“地图工坊设置”卡片上作为滑块。"
        },
        "en-US": "Workshop Setting Integer",
        "es-MX": "Número entero de la configuración del Workshop",
        "fr-FR": "Paramètre entier de la Forge",
        "ja-JP": "ワークショップの設定（整数）",
        "pt-BR": "Inteiro de Configuração do Workshop",
        "zh-CN": "地图工坊设置整数"
    },
    "__workshopSettingReal__": {
        "description": "Provides the value of a new real number setting that will appear in the workshop settings card as a slider.",
        "args": [
            {
                "name": "CATEGORY",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral",
                "default": "CUSTOM STRING",
                "descriptionLocalized": {
                    "guid": "00000001136E",
                    "en-US": "The name of the category in which this setting will be found.",
                    "de-DE": "Der Name der Kategorie in der diese Einstellung aufgeführt wird.",
                    "es-ES": "Nombre de la categoría en la que se encuentra el ajuste.",
                    "es-MX": "El nombre de la categoría en donde se encontrará esta configuración.",
                    "fr-FR": "Le nom de la catégorie dans laquelle se trouvera ce paramètre.",
                    "it-IT": "Il nome della categoria in cui si troverà questa impostazione.",
                    "ja-JP": "この設定が含まれるカテゴリーの名称",
                    "ko-KR": "이 설정을 포함하고 있는 범주 이름입니다.",
                    "pl-PL": "Nazwa kategorii w której znajdzie się to ustawienie.",
                    "pt-BR": "O nome da categoria em que esta configuração será encontrada.",
                    "ru-RU": "Название категории в которую будет помещен параметр.",
                    "zh-CN": "此类别的名字，可以用来找到此设置。"
                }
            },
            {
                "name": "NAME",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral",
                "default": "CUSTOM STRING",
                "descriptionLocalized": {
                    "guid": "000000011370",
                    "en-US": "The name of this setting.",
                    "de-DE": "Der Name dieser Einstellung.",
                    "es-ES": "Nombre de este ajuste.",
                    "es-MX": "El nombre de esta configuración.",
                    "fr-FR": "Le nom de ce paramètre.",
                    "it-IT": "Il nome di questa impostazione.",
                    "ja-JP": "この設定の名称",
                    "ko-KR": "이 설정의 이름입니다.",
                    "pl-PL": "Nazwa tego ustawienia.",
                    "pt-BR": "O nome desta configuração.",
                    "ru-RU": "Название параметра.",
                    "zh-CN": "此设置的名称。"
                }
            },
            {
                "name": "DEFAULT",
                "description": "",
                "type": "FloatLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "MIN",
                "description": "",
                "type": "FloatLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "MAX",
                "description": "",
                "type": "FloatLiteral",
                "default": 100,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "SORT ORDER",
                "description": "",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000001137B",
        "descriptionLocalized": {
            "guid": "00000001137A",
            "en-US": "Provides the value of a new real number setting that will appear in the Workshop Settings card as a slider.",
            "de-DE": "Gibt den Wert einer neuen Einstellung mit reellen Zahlen an die in den Workshop-Einstellungen als Schieberegler angezeigt wird.",
            "es-ES": "Proporciona el valor de un nuevo ajuste de número real que aparecerá en los ajustes del Taller como un control deslizante.",
            "es-MX": "Proporciona el valor de una nueva configuración de números reales que aparecerá en la sección de configuración del Workshop como un control deslizante.",
            "fr-FR": "Fournit la valeur d’un nouveau paramètre de nombre réel qui apparaîtra dans la carte Paramètres de la Forge sous la forme d’un curseur.",
            "it-IT": "Fornisce il valore di un nuovo numero reale che apparirà nella scheda Impostazioni del Workshop come slider.",
            "ja-JP": "ワークショップ設定のカードにスライダーとして表示される新しい設定の値（実数）を指定する",
            "ko-KR": "워크샵 설정 카드에 슬라이더로 표시될 새로운 실수 설정값을 제공합니다.",
            "pl-PL": "Zapewnia wartość – „True” Prawda lub „False” Fałsz – ustawienia w postaci liczby rzeczywistej które pojawi się na karcie ustawień Warsztatu jako suwak.",
            "pt-BR": "Provê o valor de uma nova configuração de número real que aparecerá no cartão Configurações do Workshop como controle deslizante.",
            "ru-RU": "Задает значение нового параметра выраженного действительным числом который появится в настройках «Мастерской» в виде ползунка.",
            "zh-CN": "提供一个新的实数型设置值，会显示在“地图工坊设置”卡片上作为滑块。"
        },
        "en-US": "Workshop Setting Real",
        "es-MX": "Configuración del Workshop real",
        "fr-FR": "Paramètre réel de la Forge",
        "ja-JP": "ワークショップの設定（実数）",
        "pt-BR": "Real de Configuração do Workshop",
        "zh-CN": "地图工坊设置实数"
    },
    "__workshopSettingToggle__": {
        "description": "Provides the value (true or false) of a new toggle setting that will appear in the workshop settings card as a checkbox.",
        "args": [
            {
                "name": "CATEGORY",
                "description": "The name of the category in which this setting will be found.",
                "type": "CustomStringLiteral",
                "default": "CUSTOM STRING",
                "descriptionLocalized": {
                    "guid": "00000001136E",
                    "en-US": "The name of the category in which this setting will be found.",
                    "de-DE": "Der Name der Kategorie in der diese Einstellung aufgeführt wird.",
                    "es-ES": "Nombre de la categoría en la que se encuentra el ajuste.",
                    "es-MX": "El nombre de la categoría en donde se encontrará esta configuración.",
                    "fr-FR": "Le nom de la catégorie dans laquelle se trouvera ce paramètre.",
                    "it-IT": "Il nome della categoria in cui si troverà questa impostazione.",
                    "ja-JP": "この設定が含まれるカテゴリーの名称",
                    "ko-KR": "이 설정을 포함하고 있는 범주 이름입니다.",
                    "pl-PL": "Nazwa kategorii w której znajdzie się to ustawienie.",
                    "pt-BR": "O nome da categoria em que esta configuração será encontrada.",
                    "ru-RU": "Название категории в которую будет помещен параметр.",
                    "zh-CN": "此类别的名字，可以用来找到此设置。"
                }
            },
            {
                "name": "NAME",
                "description": "The name of this setting.",
                "type": "CustomStringLiteral",
                "default": "CUSTOM STRING",
                "descriptionLocalized": {
                    "guid": "000000011370",
                    "en-US": "The name of this setting.",
                    "de-DE": "Der Name dieser Einstellung.",
                    "es-ES": "Nombre de este ajuste.",
                    "es-MX": "El nombre de esta configuración.",
                    "fr-FR": "Le nom de ce paramètre.",
                    "it-IT": "Il nome di questa impostazione.",
                    "ja-JP": "この設定の名称",
                    "ko-KR": "이 설정의 이름입니다.",
                    "pl-PL": "Nazwa tego ustawienia.",
                    "pt-BR": "O nome desta configuração.",
                    "ru-RU": "Название параметра.",
                    "zh-CN": "此设置的名称。"
                }
            },
            {
                "name": "DEFAULT",
                "description": "",
                "type": "BoolLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            },
            {
                "name": "SORT ORDER",
                "description": "",
                "type": "IntLiteral",
                "default": 0,
                "descriptionLocalized": {
                    "guid": "000000000F16",
                    "en-US": ""
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000001136B",
        "descriptionLocalized": {
            "guid": "00000001136C",
            "en-US": "Provides the value True or False of a new toggle setting that will appear in the Workshop Settings card as a checkbox.",
            "de-DE": "Gibt den Wert True oder False einer neuen aktivierbaren Einstellung an die in den Workshop-Einstellungen als Kontrollkästchen angezeigt wird.",
            "es-ES": "Proporciona el valor «True» o «False» de una nueva opción que aparecerá en los ajustes del Taller en forma de casilla.",
            "es-MX": "Proporciona el valor verdadero o falso de una nueva configuración de alternado que aparecerá en la sección de configuración del Workshop como una casilla.",
            "fr-FR": "Fournit la valeur Vrai ou Faux d’un nouveau paramètre d’activationdésactivation qui apparaîtra dans la carte Paramètres de la Forge sous la forme d’une case à cocher.",
            "it-IT": "Fornisce il valore True o False di una nuova impostazione attivabile che apparirà nella scheda Impostazioni del Workshop come casella da spuntare.",
            "ja-JP": "ワークショップ設定のカードにチェックボックスで表示される、新しい切り替え設定の値（「TRUE」または「FALSE」）を指定する",
            "ko-KR": "워크샵 설정 카드에 체크박스로 표시되는 새로운 토글 설정값참 또는 거짓입니다.",
            "pl-PL": "Zapewnia wartość – „True” Prawda lub „False” Fałsz – nowego ustawienia do przełączania które pojawi się na karcie ustawień Warsztatu jako pole do zaznaczenia.",
            "pt-BR": "Fornece o valor Verdadeiro ou Falso de uma nova configuração de alternar que aparecerá no cartão Configurações do Workshop como caixa.",
            "ru-RU": "Задает значение «верно» или «неверно» нового переключаемого параметра который появится в списке настроек «Мастерской».",
            "zh-CN": "提供一个新的开关设置的值（真或假），会显示在“地图工坊设置”卡片上作为勾选项。"
        },
        "en-US": "Workshop Setting Toggle",
        "es-MX": "Alternado de configuración del Workshop",
        "fr-FR": "Activerdésactiver le paramètre de la Forge",
        "ja-JP": "ワークショップの設定の切り替え",
        "pt-BR": "Alternar Configuração do Workshop",
        "zh-CN": "地图工坊设置开关"
    },
    "__xComponentOf__": {
        "description": "The x component of the specified vector, usually representing a leftward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the x component.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE97",
                    "en-US": "The Vector from which to acquire the X component.",
                    "de-DE": "Der Vektor dessen X-Komponente abgerufen wird.",
                    "es-ES": "Vector cuyo componente X se adquiere.",
                    "es-MX": "El vector a partir del cual se adquirirá el componente X.",
                    "fr-FR": "Le vecteur dont il faut acquérir la composante X.",
                    "it-IT": "Il Vettore dal quale la componente X sarà acquisita.",
                    "ja-JP": "X成分を算出するベクトル",
                    "ko-KR": "X 구성요소 정보를 가져올 벡터입니다.",
                    "pl-PL": "Parametr „Vector” Wektor od którego pobierana jest zmienna „X Component” Komponent X.",
                    "pt-BR": "O Vetor do qual o componente X será adquirido.",
                    "ru-RU": "Вектор из которого извлекается компонент X.",
                    "zh-CN": "要获取X方向分量的矢量。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B26F",
        "descriptionLocalized": {
            "guid": "00000000BE96",
            "en-US": "The X component of the specified Vector usually representing a leftward amount.",
            "de-DE": "Die X-Komponente des festgelegten Vektors normalerweise eine nach links gerichtete Menge.",
            "es-ES": "Componente X del vector especificado. Normalmente representa una cantidad hacia la izquierda.",
            "es-MX": "El componente X del vector especificado que representa generalmente una cantidad hacia la izquierda.",
            "fr-FR": "La composante X du vecteur spécifié qui représente généralement une valeur de déplacement vers la gauche.",
            "it-IT": "La componente X di un Vettore specificato che di solito rappresenta una quantità verso sinistra.",
            "ja-JP": "指定のベクトルのX成分。左方向の数を表すことが多い",
            "ko-KR": "지정된 벡터의 X 구성요소입니다. 일반적으로 왼쪽 방향의 벡터량입니다.",
            "pl-PL": "Zmienna „X Component” Komponent X określonego parametru „Vector” Wektor zazwyczaj reprezentująca wartość w lewo.",
            "pt-BR": "O componente X do Vetor especificado geralmente representando uma quantidade para a esquerda.",
            "ru-RU": "Компонент X указанного вектора обычно представляет направление влево.",
            "zh-CN": "指定矢量在X方向上的分量，通常代表向左的量。"
        },
        "en-US": "X Component Of",
        "es-MX": "Componente X de",
        "fr-FR": "Composante X de",
        "ja-JP": "X成分: ",
        "pt-BR": "Componente X de",
        "zh-CN": "X方向分量"
    },
    "__yComponentOf__": {
        "description": "The y component of the specified vector, usually representing an upward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the y component.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE99",
                    "en-US": "The Vector from which to acquire the Y component.",
                    "de-DE": "Der Vektor dessen Y-Komponente abgerufen wird.",
                    "es-ES": "Vector cuyo componente Y se adquiere.",
                    "es-MX": "El vector a partir del cual se adquirirá el componente Y.",
                    "fr-FR": "Le vecteur dont il faut acquérir la composante Y.",
                    "it-IT": "Il Vettore dal quale la componente Y sarà acquisita.",
                    "ja-JP": "Y成分を算出するベクトル",
                    "ko-KR": "Y 구성요소 정보를 가져올 벡터입니다.",
                    "pl-PL": "Parametr „Vector” Wektor od którego pobierana jest zmienna „Y Component” Komponent Y.",
                    "pt-BR": "O Vetor do qual o componente Y será adquirido.",
                    "ru-RU": "Вектор из которого извлекается компонент Y.",
                    "zh-CN": "要获取Y方向分量的矢量。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B270",
        "descriptionLocalized": {
            "guid": "00000000BE98",
            "en-US": "The Y component of the specified Vector usually representing an upward amount.",
            "de-DE": "Die Y-Komponente des festgelegten Vektors normalerweise eine nach oben gerichtete Menge.",
            "es-ES": "Componente Y del vector especificado. Normalmente representa una cantidad hacia arriba.",
            "es-MX": "El componente Y del vector especificado que representa generalmente una cantidad hacia arriba.",
            "fr-FR": "La composante Y du vecteur spécifié qui représente généralement une valeur de déplacement vers le haut.",
            "it-IT": "La componente Y di un Vettore specificato che di solito rappresenta una quantità verso l'alto.",
            "ja-JP": "指定のベクトルのY成分。正方向の数を表すことが多い",
            "ko-KR": "지정된 벡터의 Y 구성요소입니다. 일반적으로 위쪽 방향의 벡터량입니다.",
            "pl-PL": "Zmienna „Y Component” Komponent Y określonego parametru „Vector” Wektor zazwyczaj reprezentująca wartość w górę.",
            "pt-BR": "O componente Y do Vetor especificado geralmente representando uma quantidade para cima.",
            "ru-RU": "Компонент Y указанного вектора обычно представляет направление вверх.",
            "zh-CN": "指定矢量在Y方向上的分量，通常代表向上的量。"
        },
        "en-US": "Y Component Of",
        "es-MX": "Componente Y de",
        "fr-FR": "Composante Y de",
        "ja-JP": "Y成分: ",
        "pt-BR": "Componente Y de",
        "zh-CN": "Y方向分量"
    },
    "__zComponentOf__": {
        "description": "The z component of the specified vector, usually representing a forward amount.",
        "args": [
            {
                "name": "VALUE",
                "description": "The vector from which to acquire the z component.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE9B",
                    "en-US": "The Vector from which to acquire the Z component.",
                    "de-DE": "Der Vektor dessen Z-Komponente abgerufen wird.",
                    "es-ES": "Vector cuyo componente Z se adquiere.",
                    "es-MX": "El vector a partir del cual se adquirirá el componente Z.",
                    "fr-FR": "Le vecteur dont il faut acquérir la composante Z.",
                    "it-IT": "Il Vettore dal quale la componente Z sarà acquisita.",
                    "ja-JP": "Z成分を算出するベクトル",
                    "ko-KR": "Z 구성요소 정보를 가져올 벡터입니다.",
                    "pl-PL": "Parametr „Vector” Wektor od którego pobierana jest zmienna „Z Component” Komponent  Z.",
                    "pt-BR": "O Vetor do qual o componente Z será adquirido.",
                    "ru-RU": "Вектор из которого извлекается компонент Z.",
                    "zh-CN": "要获取Z方向分量的矢量。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B272",
        "descriptionLocalized": {
            "guid": "00000000BE9A",
            "en-US": "The Z component of the specified Vector usually representing a forward amount.",
            "de-DE": "Die Z-Komponente des festgelegten Vektors normalerweise eine nach vorne gerichtete Menge.",
            "es-ES": "Componente Z del vector especificado. Normalmente representa una cantidad hacia delante.",
            "es-MX": "El componente Z del vector especificado que representa generalmente una cantidad hacia adelante.",
            "fr-FR": "La composante Z du vecteur spécifié qui représente généralement une valeur de déplacement en avant.",
            "it-IT": "La componente Z di un Vettore specificato che di solito rappresenta una quantità verso avanti.",
            "ja-JP": "指定のベクトルのZ成分。正方向の数を表すことが多い",
            "ko-KR": "지정된 벡터의 Z 구성요소입니다. 일반적으로 정면 방향의 벡터량입니다.",
            "pl-PL": "Zmienna „Z Component” Komponent Z określonego parametru „Vector” Wektor zazwyczaj reprezentująca wartość naprzód.",
            "pt-BR": "O componente Z do Vetor especificado geralmente representando uma quantidade frontal.",
            "ru-RU": "Компонент Z выбранного вектора обычно представляет дальность перемещения вперед.",
            "zh-CN": "指定矢量在Z方向上的分量，通常代表向前的量。"
        },
        "en-US": "Z Component Of",
        "es-MX": "Componente Z de",
        "fr-FR": "Composante Z de",
        "ja-JP": "Z成分: ",
        "pt-BR": "Componente Z de",
        "zh-CN": "Z方向分量"
    },
    "abilityIconString": {
        "description": "Converts a Hero and Button parameter into a string that shows up as an icon (up to 4 per string).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero for the ability that will be converted to an icon.",
                "type": "Hero",
                "default": "HERO",
                "descriptionLocalized": {
                    "guid": "000000010B54",
                    "en-US": "The hero for the ability that will be converted to an icon.",
                    "de-DE": "Der Held für die Fähigkeit die in ein Icon umgewandelt wird.",
                    "es-ES": "Héroe de la habilidad que se convertirá en un icono.",
                    "es-MX": "El héroe de la habilidad que se convertirá en un ícono.",
                    "fr-FR": "Le héros pour la capacité qui sera convertie en icône.",
                    "it-IT": "L'eroe per l'abilità che sarà convertito in icona.",
                    "ja-JP": "アイコンに変換されるアビリティのヒーロー",
                    "ko-KR": "아이콘으로 변환될 기술의 영웅입니다.",
                    "pl-PL": "Bohater dla danej zdolności który zostanie przekonwertowany na symbol.",
                    "pt-BR": "O herói da habilidade que será convertido em ícone.",
                    "ru-RU": "Герой связанный со способностью которая будет преобразована в значок.",
                    "zh-CN": "将这个英雄的技能转化为图标。"
                }
            },
            {
                "name": "Button",
                "description": "The button for the ability that will be converted to an icon.",
                "type": "Button",
                "default": "Button",
                "descriptionLocalized": {
                    "en-US": "The button for the ability that will be converted to an icon.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "000000010B52",
        "descriptionLocalized": {
            "guid": "000000010B53",
            "en-US": "Converts a Hero and Button parameter into a string that shows up as an icon up to 4 per string.",
            "de-DE": "Wandelt einen Helden- und Tastenparameter in einen String um der als Icon angezeigt wird bis zu 4 pro String.",
            "es-ES": "Convierte un parámetro de héroe y botón en una cadena que se muestra en forma de icono hasta 4 por línea.",
            "es-MX": "Convierte un parámetro de héroe y de botón en una cadena que aparece como ícono hasta 4 por cadena.",
            "fr-FR": "Convertit un paramètre de héros et un bouton en une chaîne de caractères présentée sous la forme d’une icône jusqu’à 4 par chaîne.",
            "it-IT": "Converte un parametro Eroe o Tasto in una stringa che viene mostrata come un'icona fino a 4 per stringa.",
            "ja-JP": "ヒーローとボタンのパラメーターをストリングに変換し、アイコンを表示する（1ストリングあたりアイコンは4つまで）",
            "ko-KR": "영웅과 버튼의 매개변수를 아이콘으로 표시할 문자열로 변환합니다. 스트링당 최대 4개",
            "pl-PL": "Konwertuje parametry „Hero” Bohater  i „Button” Przycisk na ciąg który pokazuje się jako symbol maksymalnie 4 na ciąg.",
            "pt-BR": "Converte um parâmetro de Herói e Botão em uma string que aparece como ícone até 4 por string.",
            "ru-RU": "Преобразовывает параметры героя и кнопки в строку содержащую значок до 4 на строку.",
            "zh-CN": "将一个英雄和按键的参数转化为图标在字符串中显示（每个字符串中最多4个）。"
        },
        "en-US": "Ability Icon String",
        "es-MX": "Cadena de ícono de habilidad",
        "fr-FR": "Chaîne d’icône de la capacité",
        "ja-JP": "アビリティアイコンストリング",
        "pt-BR": "String de Ícone de Habilidade",
        "zh-CN": "技能图标字符串"
    },
    "abs": {
        "description": "The absolute value of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose absolute value will be computed.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C35F",
                    "en-US": "The real number Value whose absolute value will be computed.",
                    "de-DE": "Die reelle Zahl deren Absolutbetrag berechnet wird.",
                    "es-ES": "Valor de número real cuyo valor absoluto se computará.",
                    "es-MX": "El valor del número real cuyo valor absoluto se calculará.",
                    "fr-FR": "La valeur en nombre réel dont la valeur absolue sera calculée",
                    "it-IT": "Il numero reale di cui verrà calcolato il valore assoluto.",
                    "ja-JP": "実数値で、この絶対値が計算される",
                    "ko-KR": "절대값을 계산할 실수값입니다.",
                    "pl-PL": "Wartość z liczbą rzeczywistą której absolutna wartość zostanie obliczona.",
                    "pt-BR": "O Valor em número real cujo valor absoluto será calculado.",
                    "ru-RU": "Действительное число абсолютная величина которого вычисляется.",
                    "zh-CN": "计算此实数值的绝对值。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C358",
        "descriptionLocalized": {
            "guid": "00000000C359",
            "en-US": "The absolute value of the specified Value.",
            "de-DE": "Der Absolutbetrag des festgelegten Werts.",
            "es-ES": "Valor absoluto del valor especificado.",
            "es-MX": "El valor absoluto del valor especificado.",
            "fr-FR": "La valeur absolue de la valeur spécifiée.",
            "it-IT": "Il valore assoluto del Valore specificato.",
            "ja-JP": "指定値の絶対値",
            "ko-KR": "지정된 값의 절대값입니다.",
            "pl-PL": "Wartość absolutna określonej wartości.",
            "pt-BR": "O valor absoluto do Valor especificado.",
            "ru-RU": "Абсолютная величина указанного значения.",
            "zh-CN": "指定值的绝对值。"
        },
        "en-US": "Absolute Value",
        "es-MX": "Valor absoluto",
        "fr-FR": "Valeur absolue",
        "ja-JP": "絶対値",
        "pt-BR": "Valor Absoluto",
        "zh-CN": "绝对值"
    },
    "acos": {
        "description": "Arccosine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C810",
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "zh-CN": "为函数输入值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C807",
        "descriptionLocalized": {
            "guid": "00000000C806",
            "en-US": "Arccosine in radians of the specified Value.",
            "de-DE": "Arkuskosinus des festgelegten Werts in Radiant.",
            "es-ES": "Arcocoseno en radianes del valor especificado.",
            "es-MX": "Arcocoseno en radianes del valor especificado.",
            "fr-FR": "Arc cosinus en radians de la valeur spécifiée.",
            "it-IT": "Arcocoseno in radianti per il Valore specificato.",
            "ja-JP": "指定値のラジアンのアークコサイン",
            "ko-KR": "지정된 각단위: Rad의 아크코사인 값입니다.",
            "pl-PL": "Arcus cosinus określonej wartości wyrażony w radianach.",
            "pt-BR": "Arco cosseno em radianos do Valor especificado.",
            "ru-RU": "Арккосинус указанного значения в радианах.",
            "zh-CN": "指定值的反余弦值，以弧度为单位。"
        },
        "en-US": "Arccosine In Radians",
        "es-MX": "Arcocoseno en radianes",
        "fr-FR": "Arc cosinus en radians",
        "ja-JP": "ラジアンのアークコサイン",
        "pt-BR": "Arco Cosseno em Radianos",
        "zh-CN": "以弧度为单位的反余弦值"
    },
    "acosDeg": {
        "description": "Arccosine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C810",
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "zh-CN": "为函数输入值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C809",
        "descriptionLocalized": {
            "guid": "00000000C808",
            "en-US": "Arccosine in degrees of the specified Value.",
            "de-DE": "Arkuskosinus des festgelegten Werts in Grad.",
            "es-ES": "Arcocoseno en grados del valor especificado.",
            "es-MX": "Arcocoseno en grados del valor especificado.",
            "fr-FR": "Arc cosinus en degrés de la valeur spécifiée.",
            "it-IT": "Arcocoseno in gradi per il Valore specificato.",
            "ja-JP": "指定値の度単位のアークコサイン",
            "ko-KR": "지정된 각단위: 도의 아크코사인 값입니다.",
            "pl-PL": "Arcus cosinus określonej wartości wyrażony w stopniach.",
            "pt-BR": "Arco cosseno em graus do Valor especificado.",
            "ru-RU": "Арккосинус указанного значения в градусах.",
            "zh-CN": "指定值的反余弦值，以角度为单位。"
        },
        "en-US": "Arccosine In Degrees",
        "es-MX": "Arcocoseno en grados",
        "fr-FR": "Arc cosinus en degrés",
        "ja-JP": "度単位のアークコサイン",
        "pt-BR": "Arco Cosseno em Graus",
        "zh-CN": "以角度为单位的反余弦值"
    },
    "angleBetweenVectors": {
        "description": "The angle in degrees between two directional vectors (no normalization required).",
        "args": [
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "Direction",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C816",
                    "en-US": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                    "de-DE": "Einer der beiden Richtungsvektoren zwischen denen der Winkel in Grad gemessen werden soll. Dieser Vektor muss nicht vorher normiert werden.",
                    "es-ES": "Uno de los dos vectores direccionales entre los que medir el ángulo en grados. Este vector no necesita una normalización previa.",
                    "es-MX": "Uno de dos vectores direccionales entre los cuales se medirá el ángulo en grados. Este vector no necesita estar prenormalizado.",
                    "fr-FR": "L’un des deux vecteurs directionnels entre lesquels l’angle est calculé en degrés. Ce vecteur n’a pas besoin d’être normalisé au préalable.",
                    "it-IT": "Uno dei due vettori direzionali tra i quali misurare l'angolo in gradi. Questo vettore non richiede di essere pre-normalizzato.",
                    "ja-JP": "度単位の角度を計算するための2つの方向ベクトルの1つこのベクトルのあらかじめの正規化は不要",
                    "ko-KR": "사이의 각단위: 도을 측정하기 위한 두 방향 벡터 중 하나입니다. 이 벡터를 미리 정규화할 필요는 없습니다.",
                    "pl-PL": "Jeden lub dwa wektory kierunkowe tworzące kąt mierzony w stopniach. Ten wektor nie musi być wstępnie znormalizowany.",
                    "pt-BR": "Um dos dois vetores direcionais entre os quais o ângulo em graus será medido. Este vetor não precisa ser normalizado previamente.",
                    "ru-RU": "Один из двух векторов направления между которыми нужно измерить угол в градусах. Нормализовать вектор не требуется.",
                    "zh-CN": "需以角度为单位测量夹角的两个方向性矢量之一。该矢量不需要预先归一化。"
                }
            },
            {
                "name": "VECTOR",
                "description": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                "type": "Direction",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C816",
                    "en-US": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                    "de-DE": "Einer der beiden Richtungsvektoren zwischen denen der Winkel in Grad gemessen werden soll. Dieser Vektor muss nicht vorher normiert werden.",
                    "es-ES": "Uno de los dos vectores direccionales entre los que medir el ángulo en grados. Este vector no necesita una normalización previa.",
                    "es-MX": "Uno de dos vectores direccionales entre los cuales se medirá el ángulo en grados. Este vector no necesita estar prenormalizado.",
                    "fr-FR": "L’un des deux vecteurs directionnels entre lesquels l’angle est calculé en degrés. Ce vecteur n’a pas besoin d’être normalisé au préalable.",
                    "it-IT": "Uno dei due vettori direzionali tra i quali misurare l'angolo in gradi. Questo vettore non richiede di essere pre-normalizzato.",
                    "ja-JP": "度単位の角度を計算するための2つの方向ベクトルの1つこのベクトルのあらかじめの正規化は不要",
                    "ko-KR": "사이의 각단위: 도을 측정하기 위한 두 방향 벡터 중 하나입니다. 이 벡터를 미리 정규화할 필요는 없습니다.",
                    "pl-PL": "Jeden lub dwa wektory kierunkowe tworzące kąt mierzony w stopniach. Ten wektor nie musi być wstępnie znormalizowany.",
                    "pt-BR": "Um dos dois vetores direcionais entre os quais o ângulo em graus será medido. Este vetor não precisa ser normalizado previamente.",
                    "ru-RU": "Один из двух векторов направления между которыми нужно измерить угол в градусах. Нормализовать вектор не требуется.",
                    "zh-CN": "需以角度为单位测量夹角的两个方向性矢量之一。该矢量不需要预先归一化。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C813",
        "descriptionLocalized": {
            "guid": "00000000C814",
            "en-US": "The angle in degrees between two directional vectors no normalization required.",
            "de-DE": "Der Winkel in Grad zwischen zwei Richtungsvektoren Normierung nicht erforderlich.",
            "es-ES": "El ángulo en grados entre dos vectores direccionales no se requiere normalización.",
            "es-MX": "El ángulo en grados entre dos vectores direccionales no se requiere normalización.",
            "fr-FR": "Angle en degrés entre deux vecteurs directionnels pas de normalisation requise.",
            "it-IT": "L'angolo in gradi tra due vettori direzionali nessuna normalizzazione richiesta.",
            "ja-JP": "2つの方向ベクトル間の度単位の角度（正規化不要）",
            "ko-KR": "두 방향 벡터 정규화 불필요 사이의 각입니다. 단위: 도",
            "pl-PL": "Mierzony w stopniach kąt tworzony przez dwa wektory kierunkowe nie wymaga normalizowania.",
            "pt-BR": "O ângulo em graus entre dois vetores direcionais normalização desnecessária.",
            "ru-RU": "Угол в градусах между двумя векторами направления нормализация не требуется.",
            "zh-CN": "两方向性矢量间的夹角（不需要归一化）"
        },
        "en-US": "Angle Between Vectors",
        "es-MX": "Ángulo entre vectores",
        "fr-FR": "Angle entre deux vecteurs",
        "ja-JP": "ベクトル間角度",
        "pt-BR": "Ângulo entre Vetores",
        "zh-CN": "矢量间夹角"
    },
    "angleDifference": {
        "description": "The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BEBB",
                    "en-US": "One of the two angles between which to measure the resulting angle.",
                    "de-DE": "Einer der beiden Winkel zwischen denen der resultierende Winkel gemessen werden soll.",
                    "es-ES": "Uno de los dos ángulos entre los que se mide el ángulo resultante.",
                    "es-MX": "Uno de los dos ángulos entre los cuales se medirá el ángulo resultante.",
                    "fr-FR": "Un des deux angles entre lesquels mesurer l’angle résultant.",
                    "it-IT": "Uno dei due angoli tra i quali misurare l'angolo risultante.",
                    "ja-JP": "結果として生じる角度を計算するための2つの角度の1つ",
                    "ko-KR": "결과각을 도출하기 위한 두 각 중 하나입니다.",
                    "pl-PL": "Jeden z dwóch kątów między którymi mierzy się kąt wynikowy.",
                    "pt-BR": "Um dos dois ângulos entre os quais o ângulo resultante será medido.",
                    "ru-RU": "Один из двух углов между которыми измеряется результирующий угол.",
                    "zh-CN": "用于计算结果角度的两个角度之一。"
                }
            },
            {
                "name": "ANGLE",
                "description": "One of the two angles between which to measure the resulting angle.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BEBB",
                    "en-US": "One of the two angles between which to measure the resulting angle.",
                    "de-DE": "Einer der beiden Winkel zwischen denen der resultierende Winkel gemessen werden soll.",
                    "es-ES": "Uno de los dos ángulos entre los que se mide el ángulo resultante.",
                    "es-MX": "Uno de los dos ángulos entre los cuales se medirá el ángulo resultante.",
                    "fr-FR": "Un des deux angles entre lesquels mesurer l’angle résultant.",
                    "it-IT": "Uno dei due angoli tra i quali misurare l'angolo risultante.",
                    "ja-JP": "結果として生じる角度を計算するための2つの角度の1つ",
                    "ko-KR": "결과각을 도출하기 위한 두 각 중 하나입니다.",
                    "pl-PL": "Jeden z dwóch kątów między którymi mierzy się kąt wynikowy.",
                    "pt-BR": "Um dos dois ângulos entre os quais o ângulo resultante será medido.",
                    "ru-RU": "Один из двух углов между которыми измеряется результирующий угол.",
                    "zh-CN": "用于计算结果角度的两个角度之一。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B282",
        "descriptionLocalized": {
            "guid": "00000000BEBA",
            "en-US": "The difference in degrees between two angles. After the angles are wrapped to be within +- 180 of each other the result is positive if the second angle is greater than the first angle. Otherwise the result is zero or negative.",
            "de-DE": "Die Differenz zwischen zwei Winkeln in Grad. Nachdem die Winkel so übertragen wurden dass sie innerhalb von +-180 zueinander liegen ist das Ergebnis positiv wenn der zweite Winkel größer ist als der erste Winkel. Ansonsten ist das Ergebnis 0 oder negativ.",
            "es-ES": "Diferencia en grados entre dos ángulos. Después de simplificar los ángulos hasta que estén a +- 180 grados de distancia el resultado es positivo si el segundo ángulo es mayor que el primero; de lo contrario el resultado es cero o negativo.",
            "es-MX": "La diferencia en grados entre dos ángulos. Después de que los ángulos se simplifican para encontrarse a + o - 180 grados entre sí el resultado es positivo si el segundo ángulo es mayor al primer ángulo. Caso contrario el resultado será 0 o negativo.",
            "fr-FR": "La différence en degrés entre deux angles. Une fois les angles se trouvant dans une fourchette de +- 180° l’un par rapport à l’autre le résultat est positif si le second angle est supérieur au premier. Sinon le résultat est nul ou négatif.",
            "it-IT": "La differenza in gradi tra i due angoli. Dopo la normalizzazione degli angoli entro il limite di +- 180 tra un angolo e l'altro il risultato è positivo se il secondo angolo è più ampio del primo. Altrimenti il risultato è zero o negativo.",
            "ja-JP": "2つの角度の差。角度が互いの+-180度以内になるように調整した後、2番目の角度が1番目の角度より大きければ、結果は正の値になる。それ以外の場合、結果は0またはマイナスになる",
            "ko-KR": "두 각을 비교한 각도 차이단위: 도입니다. 두 각을 서로 +- 180 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다. 이외의 경우 0이나 음수가 될 수 있습니다.",
            "pl-PL": "Różnica w stopniach między dwoma kątami. Po tym jak kąty zostaną zawinięte w granicach +- 180 stopni od siebie to wynik jest dodatni jeżeli drugi kąt jest większy od pierwszego. Inaczej wynik jest zerowy lub ujemny.",
            "pt-BR": "A diferença em graus entre dois ângulos. Após os ângulos serem envolvidos dentro de +- 180 um do outro o resultado será positivo se o segundo ângulo for maior do que o primeiro. Caso contrário o resultado será zero ou negativo.",
            "ru-RU": "Разность между двумя углами в градусах. После того как углы приведены к различию в пределах +- 180 градусов друг относительно друга результат будет положительным если второй угол больше первого иначе результат примет нулевое или отрицательное значение.",
            "zh-CN": "两个角度之间的度数差。将两个角度折算为彼此+-180度范围内之后进行计算，如果第二个角度比第一个大则结果为正数。否则结果为负数。"
        },
        "en-US": "Angle Difference",
        "es-MX": "Diferencia de ángulo",
        "fr-FR": "Différence entre angles",
        "ja-JP": "角度差",
        "pt-BR": "Diferença de Ângulo",
        "zh-CN": "角度差"
    },
    "angleToDirection": {
        "description": "The unit-length direction vector corresponding to the specified angles.",
        "args": [
            {
                "name": "HORIZONTAL ANGLE",
                "description": "The horizontal angle in degrees used to construct the resulting vector.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF46",
                    "en-US": "The horizontal angle in degrees used to construct the resulting Vector.",
                    "de-DE": "Der horizontale Winkel in Grad der zur Konstruktion des resultierenden Vektors verwendet wird.",
                    "es-ES": "Ángulo horizontal en grados que se utiliza para construir el vector resultante.",
                    "es-MX": "El ángulo horizontal en grados utilizado para construir el vector resultante.",
                    "fr-FR": "L’angle horizontal en degrés servant à tracer le vecteur résultant.",
                    "it-IT": "L'angolo orizzontale in gradi usato per creare il Vettore risultante.",
                    "ja-JP": "結果として生じるベクトルを構築する水平角（度）",
                    "ko-KR": "결과 벡터를 도출하는 데 사용되는 횡축각단위: 도입니다.",
                    "pl-PL": "Poziomy kąt w stopniach służący do stworzenia wynikowego parametru „Vector” Wektor.",
                    "pt-BR": "O ângulo horizontal em graus usado para construir o Vetor resultante.",
                    "ru-RU": "Горизонтальный угол в градусах используемый для построения результирующего вектора.",
                    "zh-CN": "用于构建结果矢量的水平角度，单位为度。"
                }
            },
            {
                "name": "VERTICAL ANGLE",
                "description": "The vertical angle in degrees used to construct the resulting vector.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF47",
                    "en-US": "The vertical angle in degrees used to construct the resulting Vector.",
                    "de-DE": "Der vertikale Winkel in Grad der zur Konstruktion des resultierenden Vektors verwendet wird.",
                    "es-ES": "Ángulo vertical en grados que se utiliza para construir el vector resultante.",
                    "es-MX": "El ángulo vertical en grados utilizado para construir el vector resultante.",
                    "fr-FR": "L’angle vertical en degrés servant à tracer le vecteur résultant.",
                    "it-IT": "L'angolo verticale in gradi usato per creare il Vettore risultante.",
                    "ja-JP": "結果として生じるベクトルを構築する頂角（度）",
                    "ko-KR": "결과 벡터를 도출하는 데 사용되는 종축각단위: 도입니다.",
                    "pl-PL": "Pionowy kąt w stopniach służący do stworzenia wynikowego parametru „Vector” Wektor.",
                    "pt-BR": "O ângulo vertical em graus usado para construir o Vetor resultante.",
                    "ru-RU": "Вертикальный угол в градусах используемый для построения результирующего вектора.",
                    "zh-CN": "用于构建结果矢量的垂直角度，单位为度。"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000BB2D",
        "descriptionLocalized": {
            "guid": "00000000BF45",
            "en-US": "The unit-length direction Vector corresponding to the specified angles.",
            "de-DE": "Der normierte Richtungsvektor der den festgelegten Winkeln entspricht.",
            "es-ES": "Vector de dirección de longitud de unidad que corresponde con los ángulos especificados.",
            "es-MX": "El vector direccional unitario correspondiente a los ángulos especificados.",
            "fr-FR": "Le vecteur de direction de longueur égal à une unité correspondant aux angles spécifiés.",
            "it-IT": "Il Vettore direzionale di lunghezza unitaria corrispondente ad angoli specifici.",
            "ja-JP": "指定された角度に対応する単位長さの方向ベクトル",
            "ko-KR": "지정된 각에 대응하는 단위 길이 방향 벡터입니다.",
            "pl-PL": "Jednostkowy kierunkowy parametr „Vector” Wektor odpowiadający określonym kątom.",
            "pt-BR": "O Vetor direcional unitário correspondente aos ângulos especificados.",
            "ru-RU": "Единичный вектор направления соответствующий указанным углам.",
            "zh-CN": "指向指定角度的单位长度矢量。"
        },
        "en-US": "Direction From Angles",
        "es-MX": "Dirección desde los ángulos",
        "fr-FR": "Direction depuis des angles",
        "ja-JP": "角度による方向",
        "pt-BR": "Direção a partir dos Ângulos",
        "zh-CN": "与此角度的相对方向"
    },
    "asin": {
        "description": "Arcsine in radians of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C810",
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "zh-CN": "为函数输入值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C803",
        "descriptionLocalized": {
            "guid": "00000000C802",
            "en-US": "Arcsine in radians of the specified Value.",
            "de-DE": "Arkussinus des festgelegten Werts in Radiant.",
            "es-ES": "Arcoseno en radianes del valor especificado.",
            "es-MX": "Arcoseno en radianes del valor especificado.",
            "fr-FR": "Arc sinus en radians de la valeur spécifiée.",
            "it-IT": "Arcoseno in radianti per il Valore specificato.",
            "ja-JP": "指定値のラジアンのアークサイン",
            "ko-KR": "지정된 각단위: Rad의 아크사인 값입니다.",
            "pl-PL": "Arcus sinus określonej wartości wyrażony w radianach.",
            "pt-BR": "Arco seno em radianos do Valor especificado.",
            "ru-RU": "Арксинус указанного значения в радианах.",
            "zh-CN": "指定值的反正弦值，以弧度为单位。"
        },
        "en-US": "Arcsine In Radians",
        "es-MX": "Arcoseno en radianes",
        "fr-FR": "Arc sinus en radians",
        "ja-JP": "ラジアンのアークサイン",
        "pt-BR": "Arco Seno em Radianos",
        "zh-CN": "以弧度为单位的反正弦值"
    },
    "asinDeg": {
        "description": "Arcsine in degrees of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "Input value for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C810",
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "zh-CN": "为函数输入值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C805",
        "descriptionLocalized": {
            "guid": "00000000C804",
            "en-US": "Arcsine in degrees of the specified Value.",
            "de-DE": "Arkussinus des festgelegten Werts in Grad.",
            "es-ES": "Arcoseno en grados del valor especificado.",
            "es-MX": "Arcoseno en grados del valor especificado.",
            "fr-FR": "Arc sinus en degrés de la valeur spécifiée.",
            "it-IT": "Arcoseno in gradi per il Valore specificato.",
            "ja-JP": "指定値の度単位のアークサイン",
            "ko-KR": "지정된 각단위: 도의 아크사인 값입니다.",
            "pl-PL": "Arcus sinus określonej wartości wyrażony w stopniach.",
            "pt-BR": "Arco seno em graus do Valor especificado.",
            "ru-RU": "Арксинус указанного значения в градусах.",
            "zh-CN": "指定值的反正弦值，以角度为单位。"
        },
        "en-US": "Arcsine In Degrees",
        "es-MX": "Arcoseno en grados",
        "fr-FR": "Arc sinus en degrés",
        "ja-JP": "度単位のアークサイン",
        "pt-BR": "Arco Seno em Graus",
        "zh-CN": "以角度为单位的反正弦值"
    },
    "atan2": {
        "description": "Arctangent in radians of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C811",
                    "en-US": "Numerator input for the function.",
                    "de-DE": "Eingabe des Dividenden der Funktion.",
                    "es-ES": "Numerador introducido para la función.",
                    "es-MX": "Entrada de numerador para la función.",
                    "fr-FR": "Numérateur de la fonction.",
                    "it-IT": "Input numeratore per la funzione.",
                    "ja-JP": "分子の入力が必要です",
                    "ko-KR": "함수의 분자 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe licznika dla funkcji.",
                    "pt-BR": "Entrada com o numerador da função.",
                    "ru-RU": "Аргумент числителя функции.",
                    "zh-CN": "为函数输入分子。"
                }
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C812",
                    "en-US": "Denominator input for the function.",
                    "de-DE": "Eingabe des Divisors der Funktion.",
                    "es-ES": "Denominador introducido para la función.",
                    "es-MX": "Entrada de denominador para la función.",
                    "fr-FR": "Dénominateur de la fonction.",
                    "it-IT": "Input denominatore per la funzione.",
                    "ja-JP": "分母の入力が必要です",
                    "ko-KR": "함수의 분모 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe mianownika dla funkcji.",
                    "pt-BR": "Entrada com o denominador da função.",
                    "ru-RU": "Аргумент знаменателя функции.",
                    "zh-CN": "为函数输入分母。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7FF",
        "descriptionLocalized": {
            "guid": "00000000C7FE",
            "en-US": "Arctangent in radians of the specified Numerator and Denominator often referred to as Atan2.",
            "de-DE": "Arkustangens in Radiant des festgelegten Dividenden und Divisors oft als arctan2 bezeichnet.",
            "es-ES": "Arcotangente en radianes del numerador y el denominador especificados a la que se hace referencia a menudo como Atan2.",
            "es-MX": "Arcotangente en radianes del numerador y denominador especificados denominado con frecuencia como Atan2.",
            "fr-FR": "Arc tangente en radians des numérateur et dénominateur spécifiés fonction atan2.",
            "it-IT": "Arcotangente in radianti del Numeratore e Denominatore specificati spesso chiamata Atan2.",
            "ja-JP": "指定分子および分母のラジアンのアークタンジェント（しばしばAtan2と呼ばれる）",
            "ko-KR": "지정된 분자와 분모단위: Rad의 아크탄젠트 값입니다. 흔히 Atan2로 불림",
            "pl-PL": "Arcus tangens określonego licznika i mianownika wyrażony w radianach często nazywany „Atan2”.",
            "pt-BR": "Arco tangente em radianos do Numerador e do Denominador especificados frequentemente indicado como Atan2.",
            "ru-RU": "Арктангенс указанного числителя и знаменателя в радианах часто обозначается как Atan2.",
            "zh-CN": "指定分子及分母的反正切值（通常称为Atan2），以弧度为单位。"
        },
        "en-US": "Arctangent In Radians",
        "es-MX": "Arcotangente en radianes",
        "fr-FR": "Arc tangente en radians",
        "ja-JP": "ラジアンのアークタンジェント",
        "pt-BR": "Arco Tangente em Radianos",
        "zh-CN": "以弧度为单位的反正切值"
    },
    "atan2Deg": {
        "description": "Arctangent in degrees of the specified numerator and denominator (often referred to as atan2).",
        "args": [
            {
                "name": "NUMERATOR",
                "description": "Numerator input for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C811",
                    "en-US": "Numerator input for the function.",
                    "de-DE": "Eingabe des Dividenden der Funktion.",
                    "es-ES": "Numerador introducido para la función.",
                    "es-MX": "Entrada de numerador para la función.",
                    "fr-FR": "Numérateur de la fonction.",
                    "it-IT": "Input numeratore per la funzione.",
                    "ja-JP": "分子の入力が必要です",
                    "ko-KR": "함수의 분자 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe licznika dla funkcji.",
                    "pt-BR": "Entrada com o numerador da função.",
                    "ru-RU": "Аргумент числителя функции.",
                    "zh-CN": "为函数输入分子。"
                }
            },
            {
                "name": "DENOMINATOR",
                "description": "Denominator input for the function.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C812",
                    "en-US": "Denominator input for the function.",
                    "de-DE": "Eingabe des Divisors der Funktion.",
                    "es-ES": "Denominador introducido para la función.",
                    "es-MX": "Entrada de denominador para la función.",
                    "fr-FR": "Dénominateur de la fonction.",
                    "it-IT": "Input denominatore per la funzione.",
                    "ja-JP": "分母の入力が必要です",
                    "ko-KR": "함수의 분모 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe mianownika dla funkcji.",
                    "pt-BR": "Entrada com o denominador da função.",
                    "ru-RU": "Аргумент знаменателя функции.",
                    "zh-CN": "为函数输入分母。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C801",
        "descriptionLocalized": {
            "guid": "00000000C800",
            "en-US": "Arctangent in degrees of the specified Numerator and Denominator often referred to as Atan2.",
            "de-DE": "Arkustangens in Grad des festgelegten Dividenden und Divisors oft als arctan2 bezeichnet.",
            "es-ES": "Arcotangente en grados del numerador y el denominador especificados a la que se hace referencia a menudo como Atan2.",
            "es-MX": "Arcotangente en grados del numerador y denominador especificados denominado con frecuencia como Atan2.",
            "fr-FR": "Arc tangente en degrés des numérateur et dénominateur spécifiés fonction atan2.",
            "it-IT": "Arcotangente in gradi del Numeratore e Denominatore specificati spesso chiamata Atan2.",
            "ja-JP": "指定分子および分母の度単位のアークタンジェント（しばしばAtan2と呼ばれる）",
            "ko-KR": "지정된 분자와 분모단위: 도의 아크탄젠트 값입니다. 흔히 Atan2로 불림",
            "pl-PL": "Arcus tangens określonego licznika i mianownika wyrażony w stopniach często nazywany „Atan2”.",
            "pt-BR": "Arco tangente em graus do Numerador e do Denominador especificados frequentemente indicado como Atan2.",
            "ru-RU": "Арктангенс указанного числителя и знаменателя в градусах часто обозначается как Atan2.",
            "zh-CN": "指定分子及分母的反正切值（通常称为Atan2），以角度为单位。"
        },
        "en-US": "Arctangent In Degrees",
        "es-MX": "Arcotangente en grados",
        "fr-FR": "Arc tangente en degrés",
        "ja-JP": "度単位のアークタンジェント",
        "pt-BR": "Arco Tangente em Graus",
        "zh-CN": "以角度为单位的反正切值"
    },
    "attacker": {
        "guid": "00000000B32F",
        "description": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "descriptionLocalized": {
            "guid": "00000000BED8",
            "en-US": "The Player that dealt the damage for the Event currently being processed by this Rule. May be the same as the Victim or the Event Player.",
            "de-DE": "Der Spieler der den Schaden für das Event verursacht hat das aktuell durch diese Regel verarbeitet wird. Kann derselbe sein wie [Victim] oder [Event Player].",
            "es-ES": "Jugador que infligió el daño del evento procesado actualmente por esta regla. Puede ser el mismo que «Victim» o «Event Player».",
            "es-MX": "El jugador que infligió daño por el evento procesado actualmente por esta regla. Puede ser el mismo que la víctima o el jugador del evento.",
            "fr-FR": "Le joueur qui a infligé les dégâts de l’évènement actuellement traité par cette règle. Peut être identique à la victime ou au joueur exécutant.",
            "it-IT": "Il Giocatore che ha inflitto danni per l'Evento attualmente elaborato dalla Regola. Può corrispondere alla Vittima o al Giocatore Evento.",
            "ja-JP": "このルールをもとに処理されているイベントでダメージを与えたプレイヤー。犠牲者またはイベント・プレイヤーと同じ場合がある",
            "ko-KR": "이 규칙으로 처리된 이벤트로 인해 피해를 준 플레이어입니다. Victim 또는 Event Player와 동일할 수 있습니다.",
            "pl-PL": "Gracz który zadał obrażenia w zdarzeniu aktualnie przetwarzanym przez tę regułę. Może być taki sam jak w zmiennej „Victim” Atakowany lub „Event Player” Gracz w zdarzeniu.",
            "pt-BR": "O Jogador que causou o dano para o Evento que está sendo processado por esta Regra. Pode ser o mesmo que a Vítima ou o Jogador do Evento.",
            "ru-RU": "Игрок нанесший урон в рамках события которое в данный момент обрабатывается этим правилом. Может совпадать с переменной [Victim] или [Event Player].",
            "zh-CN": "根据此规则处理的事件中造成伤害的玩家。可能与被攻击者或事件玩家是同一个人。"
        },
        "en-US": "Attacker",
        "es-MX": "Atacante",
        "fr-FR": "Attaquant",
        "ja-JP": "攻撃者",
        "pt-BR": "Atacante",
        "zh-CN": "攻击方"
    },
    "buttonString": {
        "description": "Converts a button parameter into a string that shows up based on the player's input bindings. This value cannot be stored in variables.",
        "args": [
            {
                "name": "BUTTON",
                "description": "The button for the input binding that will be converted to a string.",
                "type": "Button",
                "default": "Button",
                "descriptionLocalized": {
                    "en-US": "The button for the input binding that will be converted to a string.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "guid": "0000000111B7",
        "descriptionLocalized": {
            "guid": "0000000111B8",
            "en-US": "Converts a Button parameter into a string that shows up based on the Player's input bindings. This Value cannot be stored in Variables.",
            "de-DE": "Wandelt einen Tastenparameter in einen String um der basierend auf der Eingabebelegung des Spielers angezeigt wird. Dieser Wert kann nicht in Variablen gespeichert werden.",
            "es-ES": "Convierte un parámetro de botón en una cadena que se muestra en función de las entradas asignadas del jugador. Este valor no se puede almacenar en variables.",
            "es-MX": "Convierte un parámetro de botón en una cadena que aparece en función de las teclas de atajo del jugador. Este valor no se puede almacenar en variables.",
            "fr-FR": "Convertit le bouton d’un paramètre en une chaîne qui apparaît en fonction des liaisons d’entrées du joueur. Cette valeur ne peut pas être enregistrée dans les variables.",
            "it-IT": "Converte un parametro Tasto in una stringa che viene mostrata in base all'assegnazione dei tasti del Giocatore. Questo Valore non può essere memorizzato nelle Variabili.",
            "ja-JP": "ボタンのパラメーターを変換し、プレイヤーの入力割り当てに応じて表示される文字列にする。この値は変数に格納できない",
            "ko-KR": "버튼 매개변수를 해당 플레이어의 입력을 기반으로 표시되는 문자열로 변환합니다. 이 값은 변수에 저장할 수 없습니다.",
            "pl-PL": "Konwertuje parametr „Button” Przycisk na ciąg który pokazuje się w zależności od skrótów klawiszowych gracza. Tej wartości nie można magazynować w zmiennych.",
            "pt-BR": "Converte um parâmetro Botão em uma string que é mostrada com base nos mapeamentos de entrada. Este Valor não pode ser armazenado em Variáveis.",
            "ru-RU": "Преобразовывает параметр кнопки в строку которая соответствует заданным игроком настройкам ввода. Это значение нельзя записывать в переменные.",
            "zh-CN": "将一个“按钮”参数转化为一个字符串，根据玩家所输入的绑定按键显示。此值不能存储在变量中。"
        },
        "en-US": "Input Binding String",
        "es-MX": "Cadena de teclas de atajo",
        "fr-FR": "Chaîne de liaison d’entrée",
        "ja-JP": "入力割り当ての文字列",
        "pt-BR": "String de Mapeamento de Entrada",
        "zh-CN": "输入绑定字符串"
    },
    "cos": {
        "description": "Cosine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C34A",
                    "en-US": "Angle in radians.",
                    "de-DE": "Winkel in Radiant.",
                    "es-ES": "Ángulo en radianes.",
                    "es-MX": "Ángulo en radianes.",
                    "fr-FR": "Angle en radians.",
                    "it-IT": "L'Angolo in radianti.",
                    "ja-JP": "ラジアンの角度",
                    "ko-KR": "각단위: Rad입니다.",
                    "pl-PL": "Kąt w radianach.",
                    "pt-BR": "Ângulo em radianos.",
                    "ru-RU": "Угол в радианах.",
                    "zh-CN": "角度，以弧度为单位。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C342",
        "descriptionLocalized": {
            "guid": "00000000C343",
            "en-US": "Cosine of the specified Angle in radians.",
            "de-DE": "Kosinus des festgelegten Winkels in Radiant.",
            "es-ES": "Coseno del ángulo especificado en radianes.",
            "es-MX": "Coseno del ángulo especificado en radianes.",
            "fr-FR": "Cosinus de l’angle spécifié en radians.",
            "it-IT": "Il coseno dell'Angolo specificato in radianti.",
            "ja-JP": "ラジアンの指定角度のコサイン",
            "ko-KR": "지정된 각단위: Rad의 코사인 값입니다.",
            "pl-PL": "Cosinus określonego kąta w radianach.",
            "pt-BR": "Cosseno do Ângulo especificado em radianos.",
            "ru-RU": "Косинус указанного угла в радианах.",
            "zh-CN": "指定角度（以弧度为单位）的余弦值。"
        },
        "en-US": "Cosine From Radians",
        "es-MX": "Coseno en radianes",
        "fr-FR": "Cosinus en radians",
        "ja-JP": "ラジアンのコサイン",
        "pt-BR": "Cosseno de Radianos",
        "zh-CN": "弧度的余弦值"
    },
    "cosDeg": {
        "description": "Cosine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C346",
                    "en-US": "Angle in degrees.",
                    "de-DE": "Winkel in Grad.",
                    "es-ES": "Ángulo en grados.",
                    "es-MX": "Ángulo en grados.",
                    "fr-FR": "Angle en degrés.",
                    "it-IT": "L'Angolo in gradi.",
                    "ja-JP": "度単位の角度",
                    "ko-KR": "각단위: 도입니다.",
                    "pl-PL": "Kąt w stopniach.",
                    "pt-BR": "Ângulo em graus.",
                    "ru-RU": "Угол в градусах.",
                    "zh-CN": "角度，以角度为单位。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C33E",
        "descriptionLocalized": {
            "guid": "00000000C33F",
            "en-US": "Cosine of the specified Angle in degrees.",
            "de-DE": "Kosinus des festgelegten Winkels in Grad.",
            "es-ES": "Coseno del ángulo especificado en grados.",
            "es-MX": "Coseno del ángulo especificado en grados.",
            "fr-FR": "Cosinus de l’angle spécifié en degrés.",
            "it-IT": "Il coseno dell'Angolo specificato in gradi.",
            "ja-JP": "度単位の指定角度のコサイン",
            "ko-KR": "지정된 각단위: 도의 코사인 값입니다.",
            "pl-PL": "Cosinus określonego kąta w stopniach.",
            "pt-BR": "Cosseno do Ângulo especificado em graus.",
            "ru-RU": "Косинус указанного угла в градусах.",
            "zh-CN": "指定角度（以度为单位）的余弦值。"
        },
        "en-US": "Cosine From Degrees",
        "es-MX": "Coseno en grados",
        "fr-FR": "Cosinus en degrés",
        "ja-JP": "度のコサイン",
        "pt-BR": "Cosseno de Graus",
        "zh-CN": "角度的余弦值"
    },
    "crossProduct": {
        "description": "The cross product of the specified values. (Left cross up equals forward.)",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand-side vector operand of the cross product.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C362",
                    "en-US": "The left-hand-side Vector operand of the cross product.",
                    "de-DE": "Der linke Vektoroperand eines Kreuzprodukts.",
                    "es-ES": "Operando de vector de la parte izquierda del producto vectorial.",
                    "es-MX": "El operando del lado izquierdo del vector del producto vectorial.",
                    "fr-FR": "L’opérande vectorielle de gauche du produit vectoriel.",
                    "it-IT": "L'operando vettoriale a sinistra del prodotto vettoriale.",
                    "ja-JP": "クロス積の左側のベクトル被演算子",
                    "ko-KR": "가위곱의 왼쪽 벡터 피연산자입니다.",
                    "pl-PL": "Lewostronny operand parametru „Vector” Wektor iloczynu wektorowego.",
                    "pt-BR": "O operando de Vetor do lado esquerdo do produto vetorial.",
                    "ru-RU": "Левый векторный операнд векторного произведения.",
                    "zh-CN": "用于计算矢量积的左边矢量。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand-side vector operand of the cross product.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C363",
                    "en-US": "The right-hand-side Vector operand of the cross product.",
                    "de-DE": "Der rechte Vektoroperand des Kreuzprodukts.",
                    "es-ES": "Operando de vector de la parte derecha del producto vectorial.",
                    "es-MX": "El operando del lado derecho del vector del producto vectorial.",
                    "fr-FR": "L’opérande vectorielle de droite du produit vectoriel.",
                    "it-IT": "L'operando vettoriale a destra del prodotto vettoriale.",
                    "ja-JP": "クロス積の右側のベクトル被演算子",
                    "ko-KR": "가위곱의 오른쪽 벡터 피연산자입니다.",
                    "pl-PL": "Prawostronny operand parametru „Vector” Wektor iloczynu wektorowego.",
                    "pt-BR": "O operando de Vetor do lado direito do produto vetorial.",
                    "ru-RU": "Правый векторный операнд векторного произведения.",
                    "zh-CN": "用于计算矢量积的右边矢量。"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000C35D",
        "descriptionLocalized": {
            "guid": "00000000C35C",
            "en-US": "The cross product of the specified Values. Left cross Up equals Forward.",
            "de-DE": "Das Kreuzprodukt der festgelegten Werte. Linkes Kreuz nach oben für vorwärts.",
            "es-ES": "Producto vectorial de los valores especificados izquierda por arriba igual a adelante.",
            "es-MX": "El producto vectorial de los valores especificados. El producto de izquierda y arriba equivale a adelante.",
            "fr-FR": "Le produit vectoriel des valeurs spécifiées le rapport gauche et haut correspond à l’avant.",
            "it-IT": "Il prodotto vettoriale del Valore specificato. Sinistra-su equivale ad Avanti.",
            "ja-JP": "指定値のクロス積。左×上=前方位",
            "ko-KR": "지정된 값의 가위곱입니다왼쪽과 위쪽의 벡터 곱은 전방 방향.",
            "pl-PL": "Iloczyn wektorowy określonych wartości lewogóra równa się naprzód.",
            "pt-BR": "O produto vetorial dos Valores especificados. Esquerda vezes Cima é igual a Frente.",
            "ru-RU": "Векторное произведение указанных значений. Произведением векторов направленных влево и вверх будет вектор направленный вперед.",
            "zh-CN": "指定值的矢量积。（左乘以上等于前）"
        },
        "en-US": "Cross Product",
        "es-MX": "Producto vectorial",
        "fr-FR": "Produit croisé",
        "ja-JP": "クロス積",
        "pt-BR": "Produto Vetorial",
        "zh-CN": "矢量积"
    },
    "directionTowards": {
        "description": "The unit-length direction vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting direction vector will point.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE41",
                    "en-US": "The position from which the resulting direction Vector will point.",
                    "de-DE": "Die Position von der der resultierende Vektor ausgeht.",
                    "es-ES": "Posición desde la que apunta el vector de dirección resultante.",
                    "es-MX": "La posición desde la cual apuntará el vector de dirección resultante.",
                    "fr-FR": "La position d’où pointera le vecteur de direction résultant.",
                    "it-IT": "La posizione dalla quale il Vettore direzionale risultante punterà.",
                    "ja-JP": "結果として生じる方向ベクトルが指す開始位置",
                    "ko-KR": "결과로 도출되는 방향 벡터가 시작되는 위치입니다.",
                    "pl-PL": "Pozycja z której zaczyna się wynikowy parametr kierunkowy „Vector” Wektor.",
                    "pt-BR": "A posição da qual o Vetor direcional resultante apontará.",
                    "ru-RU": "Точка от которой строится результирующий вектор направления.",
                    "zh-CN": "用于获取方向矢量的起点位置。"
                }
            },
            {
                "name": "END POS",
                "description": "The position to which the resulting direction vector will point.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE40",
                    "en-US": "The position to which the resulting direction Vector will point.",
                    "de-DE": "Die Position auf die der resultierende Vektor zeigt.",
                    "es-ES": "Posición hacia la que apunta el vector de dirección resultante.",
                    "es-MX": "La posición hacia la cual apuntará el vector de dirección resultante.",
                    "fr-FR": "La position vers laquelle pointera le vecteur de direction résultant.",
                    "it-IT": "La posizione verso la quale il Vettore direzionale risultante punterà.",
                    "ja-JP": "結果として生じる方向ベクトルが指す終了位置",
                    "ko-KR": "결과로 도출되는 방향 벡터가 끝나는 위치입니다.",
                    "pl-PL": "Pozycja na którą wskazuje wynikowy parametr kierunkowy „Vector” Wektor.",
                    "pt-BR": "A posição para a qual o Vetor direcional resultante apontará.",
                    "ru-RU": "Точка к которой строится результирующий вектор направления.",
                    "zh-CN": "用于获取方向矢量的终点位置。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Direction",
        "guid": "00000000B1EA",
        "descriptionLocalized": {
            "guid": "00000000BE3F",
            "en-US": "The unit-length direction Vector from one position to another.",
            "de-DE": "Der normierte Richtungsvektor von einer Position zu einer anderen.",
            "es-ES": "Vector de desplazamiento de longitud de unidad de una posición a otra.",
            "es-MX": "El vector direccional unitario de una posición a otra.",
            "fr-FR": "Le vecteur de direction de longueur égale à une unité d’une position à l’autre.",
            "it-IT": "Il Vettore direzionale di lunghezza unitaria da una posizione all'altra.",
            "ja-JP": "1つの位置から別の位置を指す単位長さの方向ベクトル",
            "ko-KR": "한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.",
            "pl-PL": "Jednostkowy parametr kierunkowy „Vector” Wektor z jednej pozycji na drugą.",
            "pt-BR": "O Vetor direcional unitário de uma posição para a outra.",
            "ru-RU": "Единичный вектор направления от одной точки до другой.",
            "zh-CN": "从一个位置到另一个位置的单位长度矢量。"
        },
        "en-US": "Direction Towards",
        "es-MX": "Dirección hacia",
        "fr-FR": "Direction",
        "ja-JP": "指す方向: ",
        "pt-BR": "Direção Rumo a",
        "zh-CN": "方向"
    },
    "distance": {
        "description": "The distance between two positions in meters.",
        "args": [
            {
                "name": "START POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE3C",
                    "en-US": "One of the two positions used in the distance measurement.",
                    "de-DE": "Eine der zwei Positionen die für die Distanzmessung verwendet werden.",
                    "es-ES": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "es-MX": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "fr-FR": "Une des deux positions servant à mesurer la distance.",
                    "it-IT": "Una delle due posizioni usate nella misurazione della distanza.",
                    "ja-JP": "距離を計測するのに使用された2つの位置のうちの1つ",
                    "ko-KR": "거리 측정에 사용되는 두 위치 중 하나입니다.",
                    "pl-PL": "Jedna z dwóch pozycji służących do mierzenia odległości.",
                    "pt-BR": "Uma das duas posições usadas na medida de distância.",
                    "ru-RU": "Одна из двух точек используемых для измерения расстояния.",
                    "zh-CN": "用于测量距离的两个位置之一。"
                }
            },
            {
                "name": "END POS",
                "description": "One of the two positions used in the distance measurement.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE3C",
                    "en-US": "One of the two positions used in the distance measurement.",
                    "de-DE": "Eine der zwei Positionen die für die Distanzmessung verwendet werden.",
                    "es-ES": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "es-MX": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "fr-FR": "Une des deux positions servant à mesurer la distance.",
                    "it-IT": "Una delle due posizioni usate nella misurazione della distanza.",
                    "ja-JP": "距離を計測するのに使用された2つの位置のうちの1つ",
                    "ko-KR": "거리 측정에 사용되는 두 위치 중 하나입니다.",
                    "pl-PL": "Jedna z dwóch pozycji służących do mierzenia odległości.",
                    "pt-BR": "Uma das duas posições usadas na medida de distância.",
                    "ru-RU": "Одна из двух точек используемых для измерения расстояния.",
                    "zh-CN": "用于测量距离的两个位置之一。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000B1E7",
        "descriptionLocalized": {
            "guid": "00000000BE3E",
            "en-US": "The distance between two positions in meters.",
            "de-DE": "Die Distanz zwischen zwei Positionen in Metern.",
            "es-ES": "Distancia entre dos posiciones en metros.",
            "es-MX": "La distancia entre dos posiciones expresada en metros.",
            "fr-FR": "La distance entre deux positions exprimée en mètres.",
            "it-IT": "La distanza tra due posizioni in metri.",
            "ja-JP": "2つの位置の距離（メートル）",
            "ko-KR": "두 위치 사이의 거리미터입니다.",
            "pl-PL": "Odległość w metrach między dwoma pozycjami.",
            "pt-BR": "A distância entre duas posições em metros.",
            "ru-RU": "Расстояние между двумя точками в метрах.",
            "zh-CN": "两个位置之间的距离，单位为米。"
        },
        "en-US": "Distance Between",
        "es-MX": "Distancia entre",
        "fr-FR": "Distance entre",
        "ja-JP": "二点間の距離",
        "pt-BR": "Distância entre",
        "zh-CN": "相距距离"
    },
    "dotProduct": {
        "description": "The dot product of the specified values.",
        "args": [
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C361",
                    "en-US": "One of two Vector operands of the dot product.",
                    "de-DE": "Einer der beiden Vektoroperanden des Skalarprodukts.",
                    "es-ES": "Uno de los dos operandos de vector del producto escalar.",
                    "es-MX": "Uno de los dos operandos del vector del producto escalar.",
                    "fr-FR": "L’une des deux opérandes vectorielles du produit scalaire.",
                    "it-IT": "Uno dei due operandi vettoriali del prodotto scalare.",
                    "ja-JP": "ドット積のベクトル被演算子の1つ",
                    "ko-KR": "점곱의 벡터 피연산자 두 개 중 하나입니다.",
                    "pl-PL": "Jeden z dwóch operandów parametru „Vector” Wektor iloczynu skalarnego.",
                    "pt-BR": "Um dos dois operandos de Vetor do produto escalar.",
                    "ru-RU": "Один из двух векторных операндов скалярного произведения.",
                    "zh-CN": "用于计算标量积的矢量之一。"
                }
            },
            {
                "name": "VALUE",
                "description": "One of two vector operands of the dot product.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C361",
                    "en-US": "One of two Vector operands of the dot product.",
                    "de-DE": "Einer der beiden Vektoroperanden des Skalarprodukts.",
                    "es-ES": "Uno de los dos operandos de vector del producto escalar.",
                    "es-MX": "Uno de los dos operandos del vector del producto escalar.",
                    "fr-FR": "L’une des deux opérandes vectorielles du produit scalaire.",
                    "it-IT": "Uno dei due operandi vettoriali del prodotto scalare.",
                    "ja-JP": "ドット積のベクトル被演算子の1つ",
                    "ko-KR": "점곱의 벡터 피연산자 두 개 중 하나입니다.",
                    "pl-PL": "Jeden z dwóch operandów parametru „Vector” Wektor iloczynu skalarnego.",
                    "pt-BR": "Um dos dois operandos de Vetor do produto escalar.",
                    "ru-RU": "Один из двух векторных операндов скалярного произведения.",
                    "zh-CN": "用于计算标量积的矢量之一。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C35A",
        "descriptionLocalized": {
            "guid": "00000000C35B",
            "en-US": "The dot product of the specified Values.",
            "de-DE": "Das Skalarprodukt der festgelegten Werte.",
            "es-ES": "Producto escalar de los valores especificados.",
            "es-MX": "El producto escalar de los valores especificados.",
            "fr-FR": "Le produit scalaire des valeurs spécifiées.",
            "it-IT": "Il prodotto scalare del Valore specificato.",
            "ja-JP": "指定値のドット積",
            "ko-KR": "지정된 값의 점곱입니다.",
            "pl-PL": "Iloczyn skalarny określonej wartości.",
            "pt-BR": "O produto escalar do Valor especificado.",
            "ru-RU": "Скалярное произведение указанных значений.",
            "zh-CN": "指定值的标题积。"
        },
        "en-US": "Dot Product",
        "es-MX": "Producto escalar",
        "fr-FR": "Produit scalaire",
        "ja-JP": "ドット積",
        "pt-BR": "Produto Escalar",
        "zh-CN": "标量积"
    },
    "entityExists": {
        "description": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.",
        "args": [
            {
                "name": "ENTITY",
                "description": "The player, icon entity, or effect entity whose existence to check.",
                "type": [
                    "Player",
                    "EntityId"
                ],
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BF32",
                    "en-US": "The Player icon entity or effect entity whose existence to check.",
                    "de-DE": "Der Spieler die Iconentität oder die Effektentität deren Existenz geprüft werden soll.",
                    "es-ES": "Jugador entidad de icono o entidad de efecto cuya existencia se comprueba.",
                    "es-MX": "El jugador la entidad de ícono o de efecto cuya existencia se verificará.",
                    "fr-FR": "Le joueur l’entité d’icône ou l’entité d’effet dont il faut vérifier l’existence.",
                    "it-IT": "Il Giocatore entità icona o entità effetto la cui esistenza sarà controllata.",
                    "ja-JP": "存在するかチェックするプレイヤー、アイコン・エンティティ、エフェクト・エンティティ",
                    "ko-KR": "존재를 확인할 플레이어 아이콘 개체 또는 효과 개체입니다.",
                    "pl-PL": "Gracz encja symbolu lub encja efektu których istnienie zostanie sprawdzone.",
                    "pt-BR": "O Jogador entidade de ícone ou entidade de efeito cuja existência será verificada.",
                    "ru-RU": "Игрок экземпляр значка или экземпляр эффекта существование которого нужно проверить.",
                    "zh-CN": "检查是否存在此玩家、图标实体或效果实体。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B619",
        "descriptionLocalized": {
            "guid": "00000000BF31",
            "en-US": "Whether the specified Player icon entity or effect entity still exists. Useful for determining if a Player has left the match or an entity has been destroyed.",
            "de-DE": "Ob der festgelegte Spieler die Iconentität oder Effektentität noch existiert. Nützlich um zu bestimmen ob ein Spieler das Match verlassen hat oder eine Entität zerstört wurde.",
            "es-ES": "Si el jugador la entidad de icono o la entidad de efecto que se especifica aún existen. Es útil para determinar si un jugador ha abandonado la partida o si una entidad ha sido destruida.",
            "es-MX": "Verifica si la entidad de ícono la entidad de efecto o el jugador especificado todavía existe. Resulta útil para establecer si un jugador ha abandonado la partida o si se ha destruido una entidad.",
            "fr-FR": "Si le joueur l’entité d’icône ou l’entité d’effet existe encore. Sert à déterminer si un joueur a quitté la partie ou si une entité a été détruite.",
            "it-IT": "Specifica se un Giocatore specificato un'entità icona o un'entità effetto esiste ancora. Utile per determinare se un Giocatore ha lasciato la partita o se un'entità è stata distrutta.",
            "ja-JP": "プレイヤー、アイコン・エンティティ、エフェクト・エンティティがまだ存在するかチェックする。プレイヤーのマッチ退出またはエンティティが破棄されたかどうか判別するのに有効",
            "ko-KR": "특정 플레이어 아이콘 개체 효과 개체가 아직 존재하는지 여부입니다. 플레이어가 경기를 나갔는지 개체가 소멸됐는지 등을 판별할 때 유용합니다.",
            "pl-PL": "Czy określony gracz encja symbolu lub encja efektu nadal istnieje. Przydatne do określania czy gracz opuścił mecz lub czy encja została usunięta.",
            "pt-BR": "Se o Jogador entidade de ícone ou entidade de efeito especificada ainda existe. Útil para determinar se um Jogador saiu da partida ou se uma entidade foi destruída.",
            "ru-RU": "Определяет существует ли до сих пор указанный игрок экземпляр значка или экземпляр эффекта. Требуется когда нужно проверить не покинул ли игрок матч либо не уничтожен ли экземпляр.",
            "zh-CN": "指定玩家、图标实体或效果实体是否存在。可以用来查看一个玩家是否已经离开比赛，或一个实体是否已被消除。"
        },
        "en-US": "Entity Exists",
        "es-MX": "La entidad existe",
        "fr-FR": "Existence de l’entité",
        "ja-JP": "エンティティが存在している",
        "pt-BR": "Entidade Existe",
        "zh-CN": "实体存在"
    },
    "evalOnce": {
        "description": "Makes a copy of the provided value. Useful for selectively not reevaluating certain parts of a value, such as creating effects in a loop.",
        "args": [
            {
                "name": "Input Value",
                "description": "The value that will be only evaluated once.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": 0,
                "descriptionLocalized": {
                    "en-US": "The value that will be only evaluated once.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "000000012214",
        "en-US": "Evaluate Once",
        "es-MX": "Evaluar una vez",
        "fr-FR": "Évaluer une fois",
        "ja-JP": "一度だけ評価",
        "pt-BR": "Avaliar Uma Vez",
        "zh-CN": "单次赋值"
    },
    "eventAbility": {
        "description": "The ability for the event currently being processed by this rule associated by button.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Button",
        "guid": "0000000109CF",
        "descriptionLocalized": {
            "guid": "0000000109FF",
            "en-US": "The ability for the Event currently being processed by this Rule associated by button.",
            "de-DE": "Die per Taste zugeordnete Fähigkeit für das aktuell durch diese Regel verarbeitete Event.",
            "es-ES": "La habilidad para el evento que está procesando actualmente esta regla asociada por botón.",
            "es-MX": "La habilidad del evento que está siendo procesado por la regla asociada por botón.",
            "fr-FR": "La capacité associée à un bouton pour l’évènement actuellement traité par cette règle.",
            "it-IT": "L'abilità per l'Evento attualmente elaborato dalla Regola associata al tasto.",
            "ja-JP": "ボタンに割り当てられ、ルールをもとに処理されているイベントのアビリティ",
            "ko-KR": "버튼으로 확인할 이벤트의 기술입니다. 현재 이 규칙에 의해 처리되고 있습니다.",
            "pl-PL": "Zdolność dla zdarzenia aktualnie przetwarzanego przez tę regułę powiązaną z przyciskiem.",
            "pt-BR": "A habilidade do Evento que está sendo processado por esta Regra associada por botão.",
            "ru-RU": "Сопоставленная с кнопкой способность события которое в данный момент обрабатывается правилом.",
            "zh-CN": "此规则当前处理的事件中的技能所对应的按键。"
        },
        "en-US": "Event Ability",
        "es-MX": "Evento de habilidad",
        "fr-FR": "Capacité d’évènement",
        "ja-JP": "イベントアビリティ",
        "pt-BR": "Habilidade do Evento",
        "zh-CN": "事件技能"
    },
    "eventDamage": {
        "description": "The amount of damage received by the victim for the event currently being processed by this rule.",
        "args": null,
        "return": "unsigned float",
        "guid": "00000000C635",
        "descriptionLocalized": {
            "guid": "00000000C636",
            "en-US": "The amount of damage received by the Victim for the Event currently being processed by this Rule.",
            "de-DE": "Die Höhe des Schadens den das Opfer durch das aktuell durch diese Regel verarbeitete Event erlitten hat.",
            "es-ES": "La cantidad de daño recibido por «Victim» para el evento que está procesando actualmente esta regla.",
            "es-MX": "La cantidad de daño recibida por la víctima por el evento procesado actualmente por esta regla.",
            "fr-FR": "Le montant de dégâts reçus par la victime pour l’évènement actuellement traité par cette règle.",
            "it-IT": "La quantità di danni subiti dalla Vittima per l'Evento attualmente elaborato dalla Regola.",
            "ja-JP": "このルールをもとに処理されているイベントの犠牲者が受けたダメージ",
            "ko-KR": "이 규칙에 의해 현재 처리되고 있는 이벤트의 Victim이 받는 피해량입니다.",
            "pl-PL": "Ilość otrzymanych obrażeń przez ofiarę w zdarzeniu aktualnie przetwarzanym przez tę regułę.",
            "pt-BR": "A quantidade de dano recebida pela Vítima no Evento que está sendo processado por esta Regra.",
            "ru-RU": "Объем урона получаемого жертвой события которое в данный момент обрабатывается этим правилом.",
            "zh-CN": "此规则所处理的事件中被攻击者受到的伤害数值。"
        },
        "en-US": "Event Damage",
        "es-MX": "Daño de evento",
        "fr-FR": "Dégâts d’évènement",
        "ja-JP": "イベント・ダメージ",
        "pt-BR": "Dano do Evento",
        "zh-CN": "事件伤害"
    },
    "eventDirection": {
        "description": "The incoming direction for the event currently being processed by this rule.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "0000000107D5",
        "descriptionLocalized": {
            "guid": "0000000107D8",
            "en-US": "The incoming direction for the Event currently being processed by this Rule.",
            "de-DE": "Die eingehende Richtung für das aktuell durch diese Regel verarbeitete Event.",
            "es-ES": "La dirección de entrada para el evento que está procesando actualmente esta regla.",
            "es-MX": "La dirección entrante del evento que está siendo procesado por esta regla.",
            "fr-FR": "La direction à venir pour l’évènement actuellement traité par cette règle.",
            "it-IT": "La direzione di arrivo per l'Evento attualmente elaborato dalla Regola.",
            "ja-JP": "このルールをもとに処理されているイベントの進行方向",
            "ko-KR": "이 규칙으로 실행 중인 이벤트를 받는 방향입니다.",
            "pl-PL": "Kierunek z którego nadchodzi zdarzenie aktualnie przetwarzane przez tę regułę.",
            "pt-BR": "A direção de chegada do Evento que está sendo processado por esta Regra.",
            "ru-RU": "Входящее направление события которое в данный момент обрабатывается этим правилом.",
            "zh-CN": "此规则当前处理的事件来自哪个方向。"
        },
        "en-US": "Event Direction",
        "es-MX": "Dirección del evento",
        "fr-FR": "Direction de l’évènement",
        "ja-JP": "イベント方向",
        "pt-BR": "Direção do Evento",
        "zh-CN": "事件方向"
    },
    "eventHealing": {
        "description": "The amount of healing received by the healee for the event currently being processed by this rule.",
        "args": null,
        "return": "unsigned float",
        "guid": "00000000CC33",
        "descriptionLocalized": {
            "guid": "00000000CC34",
            "en-US": "The amount of healing received by the Healee for the Event currently being processed by this Rule.",
            "de-DE": "Die Höhe der Heilung die der Geheilte durch das aktuell durch diese Regel verarbeitete Event erhalten hat.",
            "es-ES": "La cantidad de sanación recibida por el «Healee» para el evento que está procesando actualmente esta regla.",
            "es-MX": "La cantidad de sanación que recibió el sanado por el evento procesado actualmente por esta regla.",
            "fr-FR": "Le montant de soin reçu par le soigné de l’évènement actuellement traité par cette règle.",
            "it-IT": "La quantità di cure ricevute dal Ricettore per l'Evento attualmente elaborato dalla Regola.",
            "ja-JP": "このルールをもとに処理されているイベントの回復対象が受ける回復量",
            "ko-KR": "이 규칙에 의해 현재 처리되고 있는 이벤트의 Healee가 받는 치유량입니다.",
            "pl-PL": "Ilość otrzymanego leczenia przez leczonego w zdarzeniu aktualnie przetwarzanym przez tę regułę.",
            "pt-BR": "A quantidade de cura recebida pelo Curado no Evento que está sendo processado por esta Regra.",
            "ru-RU": "Объем исцеления полученного игроком [Healee] в рамках события которое в данный момент обрабатывается этим правилом.",
            "zh-CN": "此规则所处理的事件中被治疗者受到的治疗数值。"
        },
        "en-US": "Event Healing",
        "es-MX": "Sanación de evento",
        "fr-FR": "Évènement soin",
        "ja-JP": "イベント回復",
        "pt-BR": "Cura no Evento",
        "zh-CN": "事件治疗"
    },
    "eventPlayer": {
        "description": "The player executing this rule, as specified by the event. May be the same as the attacker or victim.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B331",
        "descriptionLocalized": {
            "guid": "00000000BEDA",
            "en-US": "The Player executing this Rule as specified by the Event. May be the same as the Attacker or Victim.",
            "de-DE": "Der Spieler der diese Regel ausführt wie durch das Event festgelegt. Kann derselbe sein wie [Attacker] oder [Victim].",
            "es-ES": "Jugador que ejecuta esta regla como se especifica en el evento. Puede ser el mismo que el atacante o la víctima.",
            "es-MX": "El jugador que ejecuta esta regla según lo especificado en el evento. Puede ser el mismo que el atacante o la víctima.",
            "fr-FR": "Le joueur exécutant cette règle comme spécifié par l’évènement. Peut être identique à l’attaquant ou à la victime.",
            "it-IT": "Il Giocatore che sta attualmente eseguendo la Regola come specificato dall'Evento. Può corrispondere all'Attaccante o alla Vittima.",
            "ja-JP": "イベントで定められたルールを実行するプレイヤー。攻撃者または犠牲者と同じ場合がある",
            "ko-KR": "이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다. Attacker 또는 Victim과 동일할 수 있습니다.",
            "pl-PL": "Gracz uruchamiający tę regułę zgodnie z wytycznymi w zdarzeniu. Może być taki sam jak w zmiennej „Attacker” Atakujący lub „Victim” Atakowany.",
            "pt-BR": "O Jogador que executa esta Regra conforme especificado pelo Evento. Pode ser o mesmo que o Atacante ou a Vítima.",
            "ru-RU": "Игрок выполняющий данное правило в соответствии с событием. Может совпадать с переменной [Attacker] или [Victim].",
            "zh-CN": "正在执行此规则的玩家，由事件指定。可能与攻击者或被攻击者为同一人。"
        },
        "en-US": "Event Player",
        "es-MX": "Jugador del evento",
        "fr-FR": "Joueur exécutant",
        "ja-JP": "イベント・プレイヤー",
        "pt-BR": "Jogador do Evento",
        "zh-CN": "事件玩家"
    },
    "eventWasCriticalHit": {
        "description": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.",
        "args": null,
        "return": "bool",
        "guid": "00000000C637",
        "descriptionLocalized": {
            "guid": "00000000C638",
            "en-US": "Whether the damage was a critical hit such as a headshot for the Event currently being processed by this Rule.",
            "de-DE": "Prüft für das aktuell durch diese Regel verarbeitete Event ob der zugefügte Schaden ein kritischer Treffer z. B. ein Kopfschuss war.",
            "es-ES": "Decide si el daño ha sido un golpe crítico como un disparo en la cabeza para el evento  que está procesando actualmente esta regla.",
            "es-MX": "Si el daño fue un golpe crítico como un disparo a la cabeza por el evento procesado actualmente por esta regla.",
            "fr-FR": "Si les dégâts constituaient un coup critique tel qu’un tir à la tête pour l’évènement actuellement traité par cette règle.",
            "it-IT": "Specifica se i danni erano un colpo critico come un colpo alla testa per l'Evento attualmente elaborato dalla Regola.",
            "ja-JP": "このルールをもとに処理されているイベントのダメージがクリティカル・ヒット（ヘッドショットなど）だったかどうか",
            "ko-KR": "이 규칙에 의해 현재 처리되고 있는 이벤트에 대한 피해가 치명타헤드샷 등인지 여부입니다.",
            "pl-PL": "Czy obrażenia były trafieniem krytycznym np. strzałem w głowę w zdarzeniu aktualnie przetwarzanym przez tę regułę.",
            "pt-BR": "Se o dano foi ou não um golpe crítico como um tiro na cabeça no Evento que está sendo processado por esta Regra.",
            "ru-RU": "Определяет стал ли нанесенный урон критическим попаданием например при попадании в голову для события которое обрабатывается этим правилом в данный момент.",
            "zh-CN": "此规则处理的伤害是否为暴击（如爆头伤害）。"
        },
        "en-US": "Event Was Critical Hit",
        "es-MX": "El evento fue un golpe crítico",
        "fr-FR": "L’évènement était un coup critique",
        "ja-JP": "イベントがクリティカル・ヒットだった",
        "pt-BR": "Evento foi Golpe Crítico",
        "zh-CN": "事件暴击"
    },
    "eventWasEnvironment": {
        "description": "Whether the elimination was due to the environment for the event currently being processed by this rule.",
        "args": null,
        "return": "bool",
        "guid": "00000001107C",
        "descriptionLocalized": {
            "guid": "00000001107D",
            "en-US": "Whether the elimination was due to the environment for the Event currently being processed by this Rule.",
            "de-DE": "Prüft für das aktuell durch diese Regel verarbeitete Event ob die Eliminierung durch die Umgebung hervorgerufen wurde.",
            "es-ES": "Determina si la eliminación la ha provocado el entorno para el evento que está siendo procesado por esta regla.",
            "es-MX": "Verifica si la eliminación se debió al entorno del evento que está siendo procesado por esta regla.",
            "fr-FR": "Si l’élimination était due à l’environnement pour l’évènement actuellement traité par cette règle.",
            "it-IT": "Specifica se l'eliminazione è stata dovuta all'ambiente per l'Evento attualmente elaborato dalla Regola.",
            "ja-JP": "このルールをもとに処理されているイベントの環境によって消去されたかどうか",
            "ko-KR": "이 규칙으로 현재 처리 중인 이벤트 환경에 의한 처치인지 여부입니다.",
            "pl-PL": "Czy likwidacja nastąpiła z powodu środowiska dla zdarzenia aktualnie przetwarzanego przez tę regułę.",
            "pt-BR": "Se a eliminação foi devido ao ambiente para o Evento que está sendo processado por esta Regra.",
            "ru-RU": "Определяет было ли убийство несчастным случаем для события которое в данный момент обрабатывается этим правилом.",
            "zh-CN": "此规则正在处理的事件中的消灭是否是由环境引起的。"
        },
        "en-US": "Event Was Environment",
        "es-MX": "Evento fue entorno",
        "fr-FR": "L’évènement était une élimination due à l’environnement",
        "ja-JP": "イベントは環境だった",
        "pt-BR": "Evento foi Ambiente",
        "zh-CN": "事件为环境事件"
    },
    "eventWasHealthPack": {
        "description": "Whether the healing was a health pack for the event currently being processed by this rule.",
        "args": null,
        "return": "bool",
        "guid": "00000000FC80",
        "en-US": "Event Was Health Pack",
        "es-MX": "Evento fue suministro de salud",
        "fr-FR": "L’évènement était un kit de soins",
        "ja-JP": "ライフ・パックのイベントだった",
        "pt-BR": "Evento foi kit Médico",
        "zh-CN": "事件为急救包"
    },
    "false": {
        "description": "The boolean value of false.",
        "args": null,
        "isConstant": true,
        "return": "BoolLiteral",
        "guid": "00000000AC3A",
        "descriptionLocalized": {
            "guid": "00000000BDF8",
            "en-US": "The Boolean Value of False.",
            "de-DE": "Der boolesche Wert False.",
            "es-ES": "El valor booleano «False».",
            "es-MX": "El valor booleano de falso.",
            "fr-FR": "La valeur booléenne pour « Faux ».",
            "it-IT": "Il Valore Booleano pari a False.",
            "ja-JP": "「FALSE」のBoolean値",
            "ko-KR": "False의 부울 값입니다.",
            "pl-PL": "Logiczna wartość fałszu.",
            "pt-BR": "O Valor Booleano \"Falso\".",
            "ru-RU": "Логическое ложное значение False.",
            "zh-CN": "布尔值，假。"
        },
        "en-US": "False",
        "es-MX": "Falso",
        "fr-FR": "Faux",
        "zh-CN": "假"
    },
    "getAllHeroes": {
        "guid": "00000000BF58",
        "description": "The array of all heroes in overwatch. The order is as follows:\n        \n        0. Reaper   \n        1. Tracer   \n        2. Mercy    \n        3. Hanzo    \n        4. Torbjorn \n        5. Reinhardt\n        6. Pharah   \n        7. Winston  \n        8. Widowmaker\n        9. Bastion  \n        10. Symmetra \n        11. Zenyatta \n        12. Genji    \n        13. Roadhog  \n        14. McCree   \n        15. Junkrat  \n        16. Zarya    \n        17. Soldier  \n        18. Lucio    \n        19. Dva      \n        20. Mei      \n        21. Sombra   \n        22. Doomfist \n        23. Ana      \n        24. Orisa    \n        25. Brigitte \n        26. Moira    \n        27. Hammond  \n        28. Ashe     \n        29. Echo \n        30. Baptiste    \n        31. Sigma    \n",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "en-US": "All Heroes",
        "es-MX": "Todos los héroes",
        "fr-FR": "Tous les héros",
        "ja-JP": "全ヒーロー",
        "pt-BR": "Todos os Heróis",
        "zh-CN": "全部英雄"
    },
    "getAverageServerLoad": {
        "guid": "00000000C997",
        "description": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "return": "unsigned float",
        "descriptionLocalized": {
            "guid": "00000000C999",
            "en-US": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "de-DE": "Gibt die durchschnittliche CPU-Belastung der letzten 2 Sekunden der aktuellen Spielinstanz als Prozentsatz an. Wenn diese Zahl 100 erreicht oder überschreitet wird es immer wahrscheinlicher dass die Instanz geschlossen wird weil sie zu viele Ressourcen verbraucht.",
            "es-ES": "Muestra un porcentaje que representa la carga media de CPU en la instancia de la partida actual durante los últimos 2 segundos. Cuando este número se acerque a 100 o lo supere será cada vez más probable que se cierre la instancia por estar consumiendo demasiados recursos.",
            "es-MX": "Muestra un porcentaje que representa el uso promedio del procesador de la instancia de juego actual durante los últimos dos segundos. A medida que el número alcanza o supera el 100% aumenta la probabilidad de que esa instancia se cierre ya que está consumiendo demasiados recursos.",
            "fr-FR": "Affiche un pourcentage représentant la charge moyenne qu’a fait peser l’instance actuelle du jeu sur le processeur dans les deux dernières secondes. Quand cette valeur approche ou dépasse 100 il est fortement probable que l’instance se ferme car elle consomme trop de ressources.",
            "it-IT": "Mostra una percentuale del carico medio sulla CPU dell'istanza di gioco attuale negli ultimi due secondi. Una volta che questo numero si avvicina o supera quota 100 è molto probabile che l'istanza venga chiusa per consumo eccessivo di risorse.",
            "ja-JP": "現在のゲームインスタンスの、直近2秒間におけるCPU負荷の平均値を表すパーセンテージ。この数字が100に近づく、または超えた場合、リソースの過剰消費でインスタンスがシャットダウンされる可能性が高まる",
            "ko-KR": "최근 2초간 게임 인스턴스의 평균 CPU 사용률%입니다. 이 수치가 100에 가까워지거나 100을 초과하면 과도한 리소스 사용으로 인스턴스가 종료될 가능성이 크게 증가합니다.",
            "pl-PL": "Procentowy wskaźnik średniego obciążenia głównego procesora przez bieżącą instancję gry w ostatnich dwóch sekundach. Kiedy wartość zbliża się lub przekracza 100 rośnie prawdopodobieństwo że program zostanie zamknięty z powodu zużycia zbyt dużych zasobów systemowych.",
            "pt-BR": "Mostra uma porcentagem que representa o uso médio de CPU da instância de jogo atual nos últimos dois segundos. Se o número se aproximar ou passar de 100 será bem mais provável que a instância seja encerrada por consumir recursos demais.",
            "ru-RU": "Выводит процент средней загрузки ЦП в текущей игре за последние 2 секунды. Чем ближе это значение к 100 тем выше вероятность того что игра прервется из-за чрезмерного потребления ресурсов.",
            "zh-CN": "当前游戏副本在过去2秒内造成的平均CPU负载百分比。如果这个数字接近或者超过100，表示此游戏副本消耗了过多资源，游戏很可能会关闭。",
            "zh-TW": "此百分比數字會顯示當前遊戲在前兩秒時的CPU平均負載狀態。當這個數字接近或超出100，遊戲極有可能會因消耗過多資源而關閉。"
        },
        "en-US": "Server Load Average",
        "es-MX": "Uso promedio del servidor",
        "fr-FR": "Charge moyenne du serveur",
        "ja-JP": "サーバー負荷平均",
        "pt-BR": "Média de Uso do Servidor",
        "zh-CN": "服务器负载平均值"
    },
    "getCapturePercentage": {
        "description": "The current progress towards capture for the active control point (expressed as a percentage).",
        "args": [],
        "return": "float",
        "guid": "00000000B358",
        "descriptionLocalized": {
            "guid": "00000000BEE8",
            "en-US": "The current progress towards capture for the active control point expressed as a percentage.",
            "de-DE": "Der aktuelle Fortschritt hin zur Einnahme für den aktiven Kontrollpunkt als Prozentsatz dargestellt.",
            "es-ES": "Progreso actual para la captura del punto de control activo expresado en forma de porcentaje.",
            "es-MX": "El progreso actual hacia la captura del punto de control activo expresado como porcentaje.",
            "fr-FR": "La progression actuelle de la capture du point de contrôle actif exprimée en pourcentage.",
            "it-IT": "Il progresso attuale verso la conquista del punto di controllo attivo espresso in percentuale.",
            "ja-JP": "アクティブなコントロール・ポイントの確保状況（パーセントで表示）",
            "ko-KR": "활성화된 거점에서 점령 중인 거점의 점령 진척도입니다비율로 표시.",
            "pl-PL": "Bieżący postęp zajmowania aktywnego punktu kontrolnego wyrażony w procentach.",
            "pt-BR": "O progresso atual da captura do ponto de controle ativo expresso em forma de porcentagem.",
            "ru-RU": "Доля захвата активной контрольной точки в данный момент выражается в процентах.",
            "zh-CN": "已激活的控制点当前的占领进度（以百分比表示）。"
        },
        "en-US": "Point Capture Percentage",
        "es-MX": "Porcentaje de captura de punto",
        "fr-FR": "Pourcentage de capture du point",
        "ja-JP": "ポイント・キャプチャーのパーセンテージ",
        "pt-BR": "Percentual de Captura do Ponto",
        "zh-CN": "目标点占领百分比"
    },
    "getClosestPlayer": {
        "description": "The player closest to a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure proximity.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE28",
                    "en-US": "The position from which to measure proximity.",
                    "de-DE": "Die Position von der die Nähe gemessen wird.",
                    "es-ES": "Posición desde la que se mide la proximidad.",
                    "es-MX": "La posición desde la cual se medirá la proximidad.",
                    "fr-FR": "La position à partir de laquelle mesurer la proximité.",
                    "it-IT": "La posizione dalla quale misurare la vicinanza.",
                    "ja-JP": "距離の近さを計測し始める位置",
                    "ko-KR": "거리를 측정할 위치입니다.",
                    "pl-PL": "Pozycja z której mierzy się bliskość.",
                    "pt-BR": "A posição da qual a proximidade será medida.",
                    "ru-RU": "Точка от которой измеряется близость.",
                    "zh-CN": "用于测定距离的位置。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the closest player will come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE29",
                    "en-US": "The Team or Teams from which the closest Player will come.",
                    "de-DE": "Das Team oder die Teams aus denen der am nächsten gelegene Spieler stammt.",
                    "es-ES": "Equipo o equipos de los que procederá el jugador más cercano.",
                    "es-MX": "El equipo o los equipos de donde vendrá el jugador más cercano.",
                    "fr-FR": "L’équipe ou les équipes auxquelles appartiendra le joueur le plus proche.",
                    "it-IT": "La Squadra o le Squadre dalle quali proverrà il Giocatore più vicino.",
                    "ja-JP": "最も近くにいるプレイヤーが所属するチーム",
                    "ko-KR": "가장 가까이 있는 플레이어가 소속된 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z której pochodzić będzie najbliżej znajdujący się gracz.",
                    "pt-BR": "As Equipes de onde o Jogador mais próximo virá.",
                    "ru-RU": "Команда или команды к которым принадлежит самый ближний из игроков.",
                    "zh-CN": "最近一名玩家所在的队伍。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B1DE",
        "descriptionLocalized": {
            "guid": "00000000BE27",
            "en-US": "The Player closest to a position optionally restricted by Team.",
            "de-DE": "Der einer Position am nächsten gelegene Spieler optional durch Team eingeschränkt.",
            "es-ES": "Jugador más cercano a una posición. Opcionalmente el valor puede estar restringido por el equipo.",
            "es-MX": "El jugador más cercano a una posición restringida opcionalmente por el equipo.",
            "fr-FR": "Le joueur le plus proche d’une position optionnellement restreint par équipe.",
            "it-IT": "Il Giocatore più vicino alla posizione opzionalmente filtrato per squadra.",
            "ja-JP": "位置に最も近いプレイヤー。任意でチームごとに制限可能",
            "ko-KR": "한 위치에서 가장 가까운 플레이어입니다. 팀으로 제한할 수 있습니다.",
            "pl-PL": "Gracz znajdujący się najbliżej pozycji opcjonalnie ograniczony do drużyny.",
            "pt-BR": "O Jogador mais próximo a uma posição opcionalmente restrito por Equipe.",
            "ru-RU": "Игрок который находится ближе всех к выбранной точке. Обычно выбор ограничивается принадлежностью к команде.",
            "zh-CN": "距离一个位置最近的玩家，可以选择是否限制所在队伍。"
        },
        "en-US": "Closest Player To",
        "es-MX": "Jugador más cercano a",
        "fr-FR": "Joueur le plus proche de",
        "ja-JP": "最も近いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Próximo a",
        "zh-CN": "距离最近的玩家"
    },
    "getControlScorePercentage": {
        "description": "The score percentage for the specified team in control mode.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score percentage to acquire.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BF00",
                    "en-US": "The Team whose score percentage to acquire.",
                    "de-DE": "Das Team dessen Punkteprozentsatz abgerufen werden soll.",
                    "es-ES": "Equipo cuyo porcentaje de puntuación se adquiere.",
                    "es-MX": "El equipo cuyo porcentaje de puntuación se adquirirá.",
                    "fr-FR": "L’équipe dont il faut acquérir le pourcentage de score.",
                    "it-IT": "La Squadra la cui percentuale di punteggio sarà acquisita.",
                    "ja-JP": "スコア・パーセンテージを取得するチーム",
                    "ko-KR": "점수 비율 정보를 가져올 팀입니다.",
                    "pl-PL": "Drużyna której wynik procentowy należy pozyskać.",
                    "pt-BR": "A Equipe cuja pontuação em porcentagem será adquirida.",
                    "ru-RU": "Команда процентную долю очков которой нужно определить.",
                    "zh-CN": "获取此队伍的得分百分比。"
                }
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B37C",
        "descriptionLocalized": {
            "guid": "00000000BF01",
            "en-US": "The score percentage for the specified Team in Control mode.",
            "de-DE": "Der Punkteprozentsatz des festgelegten Teams im Kontrollmodus.",
            "es-ES": "Porcentaje de puntuación del equipo especificado en modo control.",
            "es-MX": "El porcentaje de puntuación del equipo especificado en el modo Control.",
            "fr-FR": "Le pourcentage de score de l’équipe spécifiée en mode Contrôle.",
            "it-IT": "La percentuale di punteggio della Squadra specificata nella modalità Controllo.",
            "ja-JP": "コントロール・モードにおける指定チームのスコア・パーセンテージ",
            "ko-KR": "쟁탈 전장에서 지정된 팀의 점수 비율입니다.",
            "pl-PL": "Wynik procentowy określonej drużyny w trybie Kontrola.",
            "pt-BR": "A pontuação em porcentagem da Equipe especificada no modo de Controle.",
            "ru-RU": "Процентная доля очков указанной команды в режиме контроля.",
            "zh-CN": "指定队伍在占领要点模式中的得分百分比。"
        },
        "en-US": "Control Mode Scoring Percentage",
        "es-MX": "Porcentaje de puntuación en el modo Control",
        "fr-FR": "Pourcentage du score en mode Contrôle",
        "ja-JP": "コントロール・モードのスコア・パーセンテージ",
        "pt-BR": "Percentual de Pontuação no Modo de Controle",
        "zh-CN": "占领要点模式得分百分比"
    },
    "getControlScoringTeam": {
        "description": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.",
        "args": [],
        "canBePutInBoolean": false,
        "return": "Team",
        "guid": "00000000B39A",
        "descriptionLocalized": {
            "guid": "00000000BEFF",
            "en-US": "The Team that is currently accumulating score percentage in Control mode. Results in All if neither Team is accumulating score.",
            "de-DE": "Das Team das aktuell einen Punkteprozentsatz im Kontrollmodus sammelt. Das Ergebnis lautet [All] wenn kein Team Punkte sammelt.",
            "es-ES": "Equipo que está acumulando actualmente el porcentaje de puntuación en modo control. El resultado es «Todos» si ningún equipo está acumulando puntuación.",
            "es-MX": "El equipo que está acumulando porcentaje de puntuación actualmente en el modo Control. El resultado será todos si ninguno de los equipos está acumulando puntuación.",
            "fr-FR": "L’équipe qui accumule actuellement du pourcentage de score en mode Contrôle. Le résultat affichera « Tous » si aucune équipe n’accumule de score.",
            "it-IT": "La Squadra che sta attualmente accumulando percentuale di punteggio nella modalità Controllo. Risulta in Tutti se nessuna delle due Squadre sta accumulando punteggio.",
            "ja-JP": "コントロール・モードで現在スコア・パーセンテージを増やしているチーム。いずれのチームもスコアを蓄積していない場合、結果は「すべて」になる",
            "ko-KR": "현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다. 아무 팀도 점수를 축적하지 못한 경우 결과값은 All입니다.",
            "pl-PL": "Drużyna która aktualnie gromadzi wynik procentowy w trybie Kontrola. Wynikiem są „All” Wszystkie jeśli żadna drużyna nie gromadzi wyniku.",
            "pt-BR": "A Equipe que está acumulando pontuação em porcentagem no momento no modo de Controle. Retorna o resultado Todas se nenhuma das Equipes estiver acumulando pontuação.",
            "ru-RU": "Команда которая сейчас наращивает процентную долю очков в режиме контроля. Если ни одна из команд не наращивает долю очков то результатом будет значение [All].",
            "zh-CN": "该队伍正在占领要点模式中积累得分百分比。如果双方队伍都没有在积累得分，则结果为“全部”。"
        },
        "en-US": "Control Mode Scoring Team",
        "es-MX": "Equipo que anota en el modo Control",
        "fr-FR": "Équipe contrôlant le point en mode Contrôle",
        "ja-JP": "コントロール・モードの得点チーム",
        "pt-BR": "Equipe Pontuando no Modo de Controle",
        "zh-CN": "占领要点模式正在得分的队伍"
    },
    "getCurrentGamemode": {
        "description": "The current game mode of the custom game.",
        "args": [],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Gamemode",
        "guid": "00000000F163",
        "descriptionLocalized": {
            "guid": "00000000F164",
            "en-US": "The current game mode of the custom game.",
            "de-DE": "Der aktuelle Spielmodus des benutzerdefinierten Spiels.",
            "es-ES": "El modo de juego actual de la partida personalizada.",
            "es-MX": "El modo de juego actual de la partida personalizada.",
            "fr-FR": "Le mode de jeu actuel de la partie personnalisée.",
            "it-IT": "La modalità di gioco attuale della partita personalizzata.",
            "ja-JP": "カスタム・ゲームの現在のゲーム・モード",
            "ko-KR": "사용자 지정 게임의 현재 게임 모드입니다.",
            "pl-PL": "Bieżący tryb gry dowolnej.",
            "pt-BR": "O modo de jogo atual do jogo personalizado.",
            "ru-RU": "Текущий игровой режим «Своей игры».",
            "zh-CN": "当前自定义游戏的比赛模式。"
        },
        "en-US": "Current Game Mode",
        "es-MX": "Modo de juego actual",
        "fr-FR": "Mode de jeu actuel",
        "ja-JP": "現在のゲーム・モード",
        "pt-BR": "Modo de jogo atual",
        "zh-CN": "当前比赛模式"
    },
    "getCurrentMap": {
        "guid": "00000000D418",
        "description": "The current map of the custom game.",
        "args": [],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Map",
        "descriptionLocalized": {
            "guid": "00000000D419",
            "en-US": "The current map of the custom game.",
            "de-DE": "Die aktuelle Karte des benutzerdefinierten Spiels.",
            "es-ES": "Mapa actual de la partida personalizada.",
            "es-MX": "El mapa actual de una partida personalizada.",
            "fr-FR": "La carte actuelle de la partie personnalisée.",
            "it-IT": "La mappa attuale della partita personalizzata.",
            "ja-JP": "カスタム・ゲームの現在のマップ",
            "ko-KR": "사용자 지정 게임의 현재 전장입니다.",
            "pl-PL": "Bieżąca mapa gry dowolnej.",
            "pt-BR": "O mapa atual do jogo personalizado.",
            "ru-RU": "Текущее поле боя для «Своей игры».",
            "zh-CN": "自定义游戏中当前使用的地图。"
        },
        "en-US": "Current Map",
        "es-MX": "Mapa actual",
        "fr-FR": "Carte actuelle",
        "ja-JP": "現在のマップ",
        "pt-BR": "Mapa Atual",
        "zh-CN": "当前地图"
    },
    "getCurrentObjective": {
        "description": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.",
        "args": [],
        "return": "unsigned int",
        "guid": "00000000B37D",
        "en-US": "Objective Index",
        "es-MX": "Índice de objetivo",
        "fr-FR": "Index de l’objectif",
        "ja-JP": "コントロール・モードのサブマップ番号",
        "pt-BR": "Índice do Objetivo",
        "zh-CN": "对象索引"
    },
    "getDamageHeroes": {
        "description": "The array of all damage heroes in overwatch. The order is as follows:\n        \n        0. Reaper\n        1. Tracer\n        2. Hanzo\n        3. Torbjorn\n        4. Pharah\n        5. Widowmaker\n        6. Bastion\n        7. Symmetra\n        8. Genji\n        9. Mccree\n        10. Junkrat\n        11. Soldier\n        12. Mei\n        13. Sombra\n        14. Doomfist\n        15. Ashe  \n        16. Echo  \n",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40A",
        "en-US": "All Damage Heroes",
        "de-DE": "Alle Schadenshelden",
        "es-MX": "Todos los héroes de daño",
        "fr-FR": "Tous les héros de dégâts",
        "ja-JP": "全ダメージヒーロー",
        "pt-BR": "Todos os Heróis de Dano",
        "zh-CN": "所有输出英雄"
    },
    "getDeadPlayers": {
        "description": "An array containing all dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE63",
                    "en-US": "The Team or Teams from which Players may come.",
                    "de-DE": "Das Team oder die Teams aus denen Spieler stammen können.",
                    "es-ES": "Equipo o equipos de los que pueden proceder los jugadores.",
                    "es-MX": "El equipo o los equipos de donde pueden provenir los jugadores.",
                    "fr-FR": "L’équipe ou les équipes auxquelles peuvent appartenir les joueurs.",
                    "it-IT": "La Squadra o le Squadre dalle quali potrebbero provenire i Giocatori.",
                    "ja-JP": "プレイヤーが所属するチーム",
                    "ko-KR": "플레이어가 속한 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których pochodzić mogą gracze.",
                    "pt-BR": "As Equipes das qualis os Jogadores podem vir.",
                    "ru-RU": "Команда или команды к которым могут принадлежать игроки.",
                    "zh-CN": "玩家所在的队伍。"
                }
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B265",
        "descriptionLocalized": {
            "guid": "00000000BE69",
            "en-US": "An array containing all dead Players on a Team or in the match.",
            "de-DE": "Ein Array das alle gestorbenen Spieler in einem Team oder im Match enthält.",
            "es-ES": "Una matriz que contiene todos los jugadores muertos en un equipo o en la partida.",
            "es-MX": "Una matriz que contiene a todos los jugadores muertos de un equipo o de la partida.",
            "fr-FR": "Un tableau contenant tous les joueurs morts dans une équipe ou dans la partie.",
            "it-IT": "Un array che contiene tutti i Giocatori morti di una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、倒れているすべてのプレイヤーを含む配列",
            "ko-KR": "팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.",
            "pl-PL": "Tabela zawierająca wszystkich martwych graczy w drużynie albo w meczu.",
            "pt-BR": "Uma matriz que contém todos os Jogadores mortos em uma Equipe ou na partida.",
            "ru-RU": "Массив содержащий всех погибших игроков команды или матча.",
            "zh-CN": "此数组中包括一支队伍或整个比赛中所有已死亡的玩家。"
        },
        "en-US": "All Dead Players",
        "es-MX": "Todos los jugadores muertos",
        "fr-FR": "Tous les joueurs morts",
        "ja-JP": "倒れたプレイヤー全員",
        "pt-BR": "Todos os Jogadores Mortos",
        "zh-CN": "所有死亡玩家"
    },
    "getFarthestPlayer": {
        "description": "The player farthest from a position, optionally restricted by team.",
        "args": [
            {
                "name": "CENTER",
                "description": "The position from which to measure distance.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE35",
                    "en-US": "The position from which to measure distance.",
                    "de-DE": "Die Position von der die Distanz gemessen wird.",
                    "es-ES": "Posición desde la que se mide la distancia.",
                    "es-MX": "La posición desde la cual se medirá la distancia.",
                    "fr-FR": "La position à partir de laquelle mesurer la distance.",
                    "it-IT": "La posizione dalla quale misurare la distanza.",
                    "ja-JP": "距離を計測するための位置",
                    "ko-KR": "거리 측정을 위한 위치입니다.",
                    "pl-PL": "Pozycja z której mierzy się odległość.",
                    "pt-BR": "A posição da qual a distância será medida.",
                    "ru-RU": "Точка от которой измеряется расстояние.",
                    "zh-CN": "以此位置为起点测量距离。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which the farthest player will come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE34",
                    "en-US": "The Team or Teams from which the farthest Player will come.",
                    "de-DE": "Das Team oder die Teams aus denen der am weitesten entfernte Spieler stammt.",
                    "es-ES": "Equipo o equipos de los que procederá el jugador más alejado.",
                    "es-MX": "El equipo o los equipos de donde vendrá el jugador más lejano.",
                    "fr-FR": "L’équipe ou les équipes auxquelles appartiendra le joueur le plus éloigné.",
                    "it-IT": "La Squadra o le Squadre dalle quali proverrà il Giocatore più lontano.",
                    "ja-JP": "最も遠くにいるプレイヤーが所属するチーム",
                    "ko-KR": "가장 멀리 떨어진 플레이어가 소속된 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z której pochodzić będzie najdalej znajdujący się gracz.",
                    "pt-BR": "As Equipes de onde o Jogador mais distante virá.",
                    "ru-RU": "Команда или команды к которым принадлежит самый дальний из игроков.",
                    "zh-CN": "最远一名玩家所在的队伍。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B1DF",
        "descriptionLocalized": {
            "guid": "00000000BE36",
            "en-US": "The Player farthest from a position optionally restricted by Team.",
            "de-DE": "Der von einer Position am weitesten entfernte Spieler optional durch Team eingeschränkt.",
            "es-ES": "Jugador más alejado de una posición restringida opcionalmente por el equipo.",
            "es-MX": "El jugador más lejano a una posición restringida opcionalmente por el equipo.",
            "fr-FR": "Le joueur le plus éloigné d’une position optionnellement restreint par équipe.",
            "it-IT": "Il Giocatore più lontano dalla posizione opzionalmente ristretto per squadra.",
            "ja-JP": "位置から最も遠いプレイヤー。任意でチームごとに制限可能",
            "ko-KR": "지정된 위치로부터 가장 멀리 떨어진 플레이어로 팀의 제한을 받을 수 있습니다.",
            "pl-PL": "Gracz znajdujący się najdalej do pozycji opcjonalnie ograniczony do drużyny.",
            "pt-BR": "O Jogador mais distante de uma posição opcionalmente restrito por Equipe.",
            "ru-RU": "Игрок который находится дальше всех от точки. Выбор может ограничиваться принадлежностью к команде.",
            "zh-CN": "距离一个位置最远的玩家，可以选择是否限制所在队伍。"
        },
        "en-US": "Farthest Player From",
        "es-MX": "Jugador más lejos de",
        "fr-FR": "Joueur le plus éloigné de",
        "ja-JP": "最も遠いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Distante de",
        "zh-CN": "距离最远的玩家"
    },
    "getFlagCarrier": {
        "description": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BF06",
                    "en-US": "The Team whose flag to check.",
                    "de-DE": "Das Team dessen Flagge geprüft werden soll.",
                    "es-ES": "Equipo cuya bandera se comprueba.",
                    "es-MX": "El equipo cuya bandera se verificará.",
                    "fr-FR": "L’équipe dont il faut vérifier le drapeau.",
                    "it-IT": "La Squadra la cui bandiera sarà controllata.",
                    "ja-JP": "フラッグをチェックするチーム",
                    "ko-KR": "깃발을 확인할 팀입니다.",
                    "pl-PL": "Drużyna której flaga zostanie sprawdzona.",
                    "pt-BR": "A Equipe cuja bandeira será verificada.",
                    "ru-RU": "Команда флаг которой нужно проверить.",
                    "zh-CN": "检测此队伍的旗帜。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B3A3",
        "descriptionLocalized": {
            "guid": "00000000BF09",
            "en-US": "The Player carrying a particular Team's flag in Capture The Flag. Results in Null if no Player is carrying the flag.",
            "de-DE": "Der Spieler der die Flagge eines bestimmten Teams in Flaggeneroberung trägt. Ergibt Null wenn kein Spieler die Flagge trägt.",
            "es-ES": "Jugador que lleva una bandera de equipo en particular en Captura la bandera. El resultado es «Null» si ningún jugador lleva la bandera.",
            "es-MX": "El jugador que transporta la bandera de un equipo determinado en Captura la bandera. El resultado será nulo si ningún jugador está transportando la bandera.",
            "fr-FR": "Le joueur portant le drapeau d’une équipe particulière en Capture du drapeau. Renvoie un résultat nul si aucun joueur ne porte le drapeau.",
            "it-IT": "Il Giocatore che trasporta la bandiera di una Squadra specifica. Risulta in Nullo se nessun Giocatore sta trasportando la bandiera.",
            "ja-JP": "キャプチャー・ザ・フラッグで、特定のチームのフラッグを運んでいるプレイヤー。フラッグを運んでいるプレイヤーがいなければ「NULL」を返す",
            "ko-KR": "깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다. 아무도 깃발을 가지지 않은 경우 결과값은 Null입니다.",
            "pl-PL": "Gracz niosący flagę konkretnej drużyny w Zdobywaniu flagi. Wynikiem jest „Null” Brak jeśli żaden gracz nie niesie flagi.",
            "pt-BR": "O Jogador carregando a bandeira de uma Equipe em particular no Capture a Bandeira. Retorna o resultado Nulo se nenhum Jogador estiver carregando a bandeira.",
            "ru-RU": "Игрок несущий флаг конкретной команды в режиме «Захват флага». Возвращает пустое значение Null если ни один из игроков не несет флаг.",
            "zh-CN": "在勇夺锦旗模式中正在携带指定队伍旗帜的玩家。如果没有玩家正在携带旗帜，则返回值为空。"
        },
        "en-US": "Player Carrying Flag",
        "es-MX": "Jugador que transporta la bandera",
        "fr-FR": "Joueur portant le drapeau",
        "ja-JP": "フラッグを運んでいる",
        "pt-BR": "Jogador Carregando a Bandeira",
        "zh-CN": "携带旗帜的玩家"
    },
    "getFlagPosition": {
        "description": "The position of a specific team's flag in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag position to acquire.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BF04",
                    "en-US": "The Team whose flag position to acquire.",
                    "de-DE": "Das Team dessen Flaggenposition abgerufen werden soll.",
                    "es-ES": "Equipo cuya posición de bandera se adquiere.",
                    "es-MX": "El equipo cuya posición de la bandera se adquirirá.",
                    "fr-FR": "L’équipe dont il faut acquérir la position du drapeau.",
                    "it-IT": "La Squadra la cui posizione della bandiera sarà acquisita.",
                    "ja-JP": "フラッグの位置を取得するチーム",
                    "ko-KR": "깃발 위치 정보를 가져올 팀입니다.",
                    "pl-PL": "Drużyna pozycję flagi której należy pozyskać.",
                    "pt-BR": "A Equipe cuja posição da bandeira será adquirida.",
                    "ru-RU": "Команда расположение флага которой следует определить.",
                    "zh-CN": "获取此队伍旗帜的位置。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B3A0",
        "descriptionLocalized": {
            "guid": "00000000BF03",
            "en-US": "The position of a specific Team's flag in Capture The Flag.",
            "de-DE": "Die Position der Flagge eines bestimmten Teams in der Flaggeneroberung.",
            "es-ES": "Posición de la bandera de un equipo concreto en Captura la bandera.",
            "es-MX": "La posición de la bandera de un equipo determinado en Captura la bandera.",
            "fr-FR": "La position du drapeau d’une équipe spécifique en mode Capture du drapeau.",
            "it-IT": "La posizione della bandiera di una Squadra specifica in Cattura la Bandiera.",
            "ja-JP": "「キャプチャー・ザ・フラッグ」で特定チームのフラッグの位置",
            "ko-KR": "깃발 뺏기에서 지정된 팀의 깃발 위치입니다.",
            "pl-PL": "Pozycja flagi określonej drużyny w Zdobywaniu flagi.",
            "pt-BR": "A posição da bandeira de uma Equipe específica no Capture a Bandeira.",
            "ru-RU": "Расположение флага указанной команды в режиме «Захват флага».",
            "zh-CN": "在勇夺锦旗模式中指定队伍的位置。"
        },
        "en-US": "Flag Position",
        "es-MX": "Posición de la bandera",
        "fr-FR": "Position du drapeau",
        "ja-JP": "フラッグの位置",
        "pt-BR": "Posição da Bandeira",
        "zh-CN": "旗帜位置"
    },
    "getLastAssistID": {
        "description": "An ID representing the most recent Start Assist Action that was executed by the Event Player (or executed at the Global level).",
        "args": [],
        "return": "AssistId",
        "guid": "0000000121F2",
        "descriptionLocalized": {
            "guid": "0000000121F3",
            "en-US": "An ID representing the most recent Start Assist Action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Start Assist]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción «Start Assist» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción Comenzar asistencia más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Lancer le soutien » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'Azione Start Assist più recente eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の「アシストを開始」アクションを示すID",
            "ko-KR": "Event Player 또는 전역 레벨에서 가장 최근에 실행된 Last Assist 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie „Start Assist Action” Rozpocznij asystę wykonane przez „Event Player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a Ação Iniciar Assistência mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий самое последнее действие [Start Assist] которое было выполнено игроком события [Event Player] или выполнено на глобальном уровне.",
            "zh-CN": "此ID值代表最后一个时间玩家（或全局）所执行的“开始助攻”动作。"
        },
        "en-US": "Last Assist ID",
        "es-MX": "ID de asistencia anterior",
        "fr-FR": "Dernier identifiant de soutien",
        "ja-JP": "最新のアシストID",
        "pt-BR": "ID da Última Assistência",
        "zh-CN": "上一个助攻ID"
    },
    "getLastCreatedEntity": {
        "description": "A reference to the last effect or icon entity created by the event player (or created at the global level).",
        "args": [],
        "canBePutInBoolean": false,
        "return": "EntityId",
        "guid": "00000000B362",
        "en-US": "Last Created Entity",
        "es-MX": "Última entidad creada",
        "fr-FR": "Dernière entité créée",
        "ja-JP": "最新のエンティティ",
        "pt-BR": "Entidade Criada por Último",
        "zh-CN": "最后创建的实体"
    },
    "getLastCreatedHealthPool": {
        "description": "An ID representing the most recent Add Health Pool action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "HealthPoolId",
        "guid": "000000011439",
        "descriptionLocalized": {
            "guid": "000000011438",
            "en-US": "An ID representing the most recent Add Health Pool action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Add Health Pool]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción «Add Health Pool» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción Añadir cantidad de salud más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Ajouter une réserve de points de vie » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'azione Add Health Pool più recente eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の「ライフプールを追加」アクションを示すID",
            "ko-KR": "Event Player에 의해 또는 전역 레벨에서 실행한 최근 Add Health Pool 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie „Add Health Pool” Dodaj pulę zdrowia rozpoczęte przez „Event Player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a ação Adicionar Reserva de Vida mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий последнее действие [Add Health Pool] которое было выполнено игроком события или применено на глобальном уровне.",
            "zh-CN": "此ID值代表最后一个事件玩家（或全局）所执行的”添加生命池“动作。"
        },
        "en-US": "Last Created Health Pool",
        "es-MX": "Última cantidad de salud creada",
        "fr-FR": "Dernière réserve de points de vie créée",
        "ja-JP": "最新のライフプール",
        "pt-BR": "Última Reserva de Vida Criada",
        "zh-CN": "最后创建的生命池"
    },
    "getLastCreatedText": {
        "description": "A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in-world text action.",
        "args": [],
        "return": "TextId",
        "guid": "00000000BAFE",
        "en-US": "Last Text ID",
        "es-MX": "ID de texto anterior",
        "fr-FR": "Dernier identifiant de texte",
        "ja-JP": "最新のテキストID",
        "pt-BR": "ID de Texto Mais Recente",
        "zh-CN": "上一个文本ID"
    },
    "getLastDamageModification": {
        "description": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "DamageModificationId",
        "guid": "00000000C64A",
        "descriptionLocalized": {
            "guid": "00000000C64B",
            "en-US": "An ID representing the most recent Start Damage Modification Action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Start Damage Modification]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción acción «Start Damage Modification» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción Comenzar modificación de daño más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Lancer la modification des dégâts » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'Azione Start Damage Modification più recente eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の「ダメージ変更を開始」アクションを示すID",
            "ko-KR": "Event Player 또는 전역 레벨에서 실행된 최근의 Start Damage Modification 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie rozpoczęcia modyfikacji obrażeń przez „Event player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a Ação Começar Modificação de Dano mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий последнее действие начала изменения урона [Start Damage Modification] которое выполнено игроком события или применено на глобальном уровне.",
            "zh-CN": "此ID值代表最后一个事件玩家（或全局）所执行的”开始伤害调整“动作。"
        },
        "en-US": "Last Damage Modification ID",
        "es-MX": "ID de modificación de daño anterior",
        "fr-FR": "Dernier identifiant de modification de dégâts",
        "ja-JP": "最新のダメージ変更ID",
        "pt-BR": "ID de Modificação de Dano Mais Recente",
        "zh-CN": "上一个伤害调整ID"
    },
    "getLastDoT": {
        "description": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "DotId",
        "guid": "00000000B263",
        "descriptionLocalized": {
            "guid": "00000000BE64",
            "en-US": "An ID representing the most recent Damage Over Time Action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Damage Over Time]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción «Damage Over Time» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción de daño con el tiempo más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Dégâts sur la durée » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'Azione Damage Over Time più recente eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の継続ダメージ・アクションを示すID",
            "ko-KR": "Event Player 또는 전역 레벨에서 가장 최근에 실행된 Damage Over Time 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie „Damage Over Time” Obrażenia w czasie rozpoczęte przez „Event Player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a Ação de Dano ao Longo do Tempo mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий последнее действие периодического урона [Damage Over Time] которое выполнено игроком события или применено на глобальном уровне.",
            "zh-CN": "此ID值代表最后一个事件玩家（或全局）所执行的”持续伤害“动作。"
        },
        "en-US": "Last Damage Over Time ID",
        "es-MX": "ID de daño con el tiempo anterior",
        "fr-FR": "Dernier identifiant de dégâts sur la durée",
        "ja-JP": "最新の継続ダメージID",
        "pt-BR": "ID de Dano ao Longo do Tempo Mais Recente",
        "zh-CN": "上一个持续伤害效果ID"
    },
    "getLastHealingModification": {
        "description": "An id representing the most recent start healing modification action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "HealingModificationId",
        "guid": "00000000FD2A",
        "descriptionLocalized": {
            "guid": "00000000FD2B",
            "en-US": "An ID representing the most recent Start Healing Modification Action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Start Healing Modification]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción «Start Healing Modification» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción Comenzar modificación de sanación más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Lancer la modification des soins » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'Azione Start Healing Modification più recente eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の「回復変更を開始」アクションを示すID",
            "ko-KR": "Event Player 또는 전역 레벨에서 실행된 최근의 Start Healing Modification 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie rozpoczęcia modyfikacji leczenia przez „Event Player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a Ação Começar Modificação de Cura mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий последнее действие начала исцеления [Start Healing Modification] которое было выполнено игроком события или применено на глобальном уровне.",
            "zh-CN": "此ID值代表最后一个事件玩家（或全局）所执行的”开始治疗调整“动作。"
        },
        "en-US": "Last Healing Modification ID",
        "es-MX": "ID de modificación de sanación anterior",
        "fr-FR": "Dernier identifiant de modification de soins",
        "ja-JP": "最新回復変更ID",
        "pt-BR": "ID da última modificação de cura",
        "zh-CN": "上一个治疗调整ID"
    },
    "getLastHoT": {
        "description": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).",
        "args": [],
        "return": "HotId",
        "guid": "00000000B262",
        "descriptionLocalized": {
            "guid": "00000000BE65",
            "en-US": "An ID representing the most recent Heal Over Time Action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Heal Over Time]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción «Heal Over Time» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción de sanación con el tiempo más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Soins sur la durée » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'Azione delle Cure Periodiche più recenti eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の継続回復アクションを示すID",
            "ko-KR": "Event Player 또는 전역 레벨에서 가장 최근에 실행된 Heal Over Time 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie „Heal Over Time” Leczenie w czasie rozpoczęte przez „Event Player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a Ação de Cura ao Longo do Tempo mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий собой последнее действие периодического исцеления [Heal Over Time] которое выполнено игроком события или применено на глобальном уровне.",
            "zh-CN": "此ID值代表最后一个事件玩家（或全局）所执行的”持续治疗“动作。"
        },
        "en-US": "Last Heal Over Time ID",
        "es-MX": "ID de sanación con el tiempo anterior",
        "fr-FR": "Dernier identifiant de soins sur la durée",
        "ja-JP": "最新の継続回復ID",
        "pt-BR": "ID de Cura ao Longo do Tempo Mais Recente",
        "zh-CN": "上一个持续治疗效果ID"
    },
    "getLivingPlayers": {
        "description": "An array containing all living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE63",
                    "en-US": "The Team or Teams from which Players may come.",
                    "de-DE": "Das Team oder die Teams aus denen Spieler stammen können.",
                    "es-ES": "Equipo o equipos de los que pueden proceder los jugadores.",
                    "es-MX": "El equipo o los equipos de donde pueden provenir los jugadores.",
                    "fr-FR": "L’équipe ou les équipes auxquelles peuvent appartenir les joueurs.",
                    "it-IT": "La Squadra o le Squadre dalle quali potrebbero provenire i Giocatori.",
                    "ja-JP": "プレイヤーが所属するチーム",
                    "ko-KR": "플레이어가 속한 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których pochodzić mogą gracze.",
                    "pt-BR": "As Equipes das qualis os Jogadores podem vir.",
                    "ru-RU": "Команда или команды к которым могут принадлежать игроки.",
                    "zh-CN": "玩家所在的队伍。"
                }
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B264",
        "descriptionLocalized": {
            "guid": "00000000BE67",
            "en-US": "An array containing all living Players on a Team or in the match.",
            "de-DE": "Ein Array das alle lebenden Spieler in einem Team oder im Match enthält.",
            "es-ES": "Una matriz que contiene todos los jugadores vivos en un equipo o en la partida.",
            "es-MX": "Una matriz que contiene a todos los jugadores vivos de un equipo o de la partida.",
            "fr-FR": "Un tableau contenant tous les joueurs vivants dans une équipe ou dans la partie.",
            "it-IT": "Un array che contiene tutti i Giocatori vivi di una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおけるすべての生存プレイヤーを含む配列",
            "ko-KR": "팀 또는 경기 내에서 생존한 모든 플레이어가 있는 배열입니다.",
            "pl-PL": "Tabela zawierająca wszystkich żywych graczy w drużynie albo w meczu.",
            "pt-BR": "Uma matriz que contém todos os Jogadores vivos em uma Equipe ou na partida.",
            "ru-RU": "Массив содержащий всех живых игроков команды или матча.",
            "zh-CN": "此数组中包括一支队伍或整个比赛中所有存活的玩家。"
        },
        "en-US": "All Living Players",
        "es-MX": "Todos los jugadores vivos",
        "fr-FR": "Tous les joueurs en vie",
        "ja-JP": "生存プレイヤー全員",
        "pt-BR": "Todos os Jogadores Vivos",
        "zh-CN": "所有存活玩家"
    },
    "getMatchRound": {
        "description": "The current round of the match, counting up from 1.",
        "args": [],
        "return": "unsigned int",
        "guid": "00000000B375",
        "descriptionLocalized": {
            "guid": "00000000BEF8",
            "en-US": "The current round of the match counting up from 1.",
            "de-DE": "Die aktuelle Runde des Matches ab 1 gezählt.",
            "es-ES": "Ronda actual de la partida a partir de 1.",
            "es-MX": "La ronda actual de la partida la cuenta comienza desde 1.",
            "fr-FR": "La manche actuelle de la partie comptée à partir de 1.",
            "it-IT": "Il round attuale della partita contato a partire da 1.",
            "ja-JP": "現在のマッチのラウンド。1から開始される",
            "ko-KR": "경기의 현재 라운드입니다. 1부터 증가합니다.",
            "pl-PL": "Bieżąca runda meczu licząc od 1.",
            "pt-BR": "A rodada atual da partida contada a partir de 1.",
            "ru-RU": "Текущий раунд матча отсчет начинается с 1.",
            "zh-CN": "比赛当前的回合数，从1开始计数。"
        },
        "en-US": "Match Round",
        "es-MX": "Ronda de la partida",
        "fr-FR": "Manche de la partie",
        "ja-JP": "マッチのラウンド",
        "pt-BR": "Rodada da Partida",
        "zh-CN": "比赛回合"
    },
    "getMatchTime": {
        "description": "The amount of time in seconds remaining in the current game mode phase.",
        "args": [],
        "return": "unsigned float",
        "guid": "00000000AD3B",
        "descriptionLocalized": {
            "guid": "00000000BDFD",
            "en-US": "The amount of time in seconds remaining in the current game mode phase.",
            "de-DE": "Die verbleibende Dauer des aktuellen Spielmodus in Sekunden.",
            "es-ES": "Cantidad de tiempo en segundos que queda en la fase actual del modo de juego.",
            "es-MX": "La cantidad de tiempo en segundos restante en la fase del modo de juego actual.",
            "fr-FR": "Le temps restant en secondes dans la phase actuelle du mode de jeu.",
            "it-IT": "La quantità di tempo in secondi rimasta nell'attuale fase della modalità di gioco.",
            "ja-JP": "現在のゲーム・モードのフェーズの残り時間（秒）",
            "ko-KR": "현재 게임 모드 단계의 잔여 시간초입니다.",
            "pl-PL": "Czas w sekundach pozostały w bieżącej fazie trybu gry.",
            "pt-BR": "A quantidade restante de tempo em segundos na fase do modo de jogo atual.",
            "ru-RU": "Время в секундах до истечения действующей фазы игрового режима.",
            "zh-CN": "当前游戏模式阶段剩余的时间，以秒为单位。"
        },
        "en-US": "Match Time",
        "es-MX": "Tiempo de la partida",
        "fr-FR": "Temps de jeu",
        "ja-JP": "マッチ時間",
        "pt-BR": "Tempo da Partida",
        "zh-CN": "比赛时间"
    },
    "getNumberOfAssistIds": {
        "description": "The current number of Assist instances started from the Start Assist Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9E",
        "en-US": "Assist Count",
        "es-MX": "Conteo de asistencia",
        "fr-FR": "Nombre de soutiens",
        "ja-JP": "アシスト数",
        "pt-BR": "Contagem de Assistência",
        "zh-CN": "助攻数量"
    },
    "getNumberOfDamageModificationIds": {
        "description": "The current number of Damage Modification instances started from the Start Damage Modification Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9C",
        "en-US": "Damage Modification Count",
        "es-MX": "Conteo de modificación de daño",
        "fr-FR": "Nombre de modifications de dégâts",
        "ja-JP": "ダメージ変更数",
        "pt-BR": "Contagem de Modificação de Dano",
        "zh-CN": "伤害调整数量"
    },
    "getNumberOfDeadPlayers": {
        "description": "The number of dead players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC9",
                    "en-US": "The Team or Teams on which to count Players.",
                    "de-DE": "Das Team oder die Teams in denen Spieler gezählt werden sollen.",
                    "es-ES": "Equipo o equipos en los que se deben contar los jugadores.",
                    "es-MX": "El equipo o los equipos donde se contarán los jugadores.",
                    "fr-FR": "L’équipe ou les équipes dont il faut compter les joueurs.",
                    "it-IT": "La Squadra o le Squadre il cui numero di Eroi sarà controllato.",
                    "ja-JP": "プレイヤー数をチェックするチーム",
                    "ko-KR": "플레이어 수를 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których należy policzyć graczy.",
                    "pt-BR": "As Equipes cujos Jogadores serão contados.",
                    "ru-RU": "Команда или команды количество игроков которых нужно подсчитать.",
                    "zh-CN": "计算下列队伍中玩家的数量。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B29A",
        "descriptionLocalized": {
            "guid": "00000000BED0",
            "en-US": "The number of dead Players on a Team or in the match.",
            "de-DE": "Die Anzahl der gestorbenen Spieler in einem Team oder im Match.",
            "es-ES": "Número de jugadores muertos en un equipo o en la partida.",
            "es-MX": "La cantidad de jugadores muertos de un equipo o de la partida.",
            "fr-FR": "Le nombre de joueurs morts dans une équipe ou dans la partie.",
            "it-IT": "Il numero di Giocatori morti in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、倒れているプレイヤーの数",
            "ko-KR": "팀 또는 경기 내 사망 플레이어 수입니다.",
            "pl-PL": "Liczba martwych graczy w drużynie albo w meczu.",
            "pt-BR": "O número de Jogadores mortos em uma Equipe ou na partida.",
            "ru-RU": "Количество погибших игроков в команде или матче.",
            "zh-CN": "队伍或比赛中死亡的玩家数量。"
        },
        "en-US": "Number Of Dead Players",
        "de-DE": "Number of Dead Players",
        "es-MX": "Cantidad de jugadores muertos",
        "fr-FR": "Nombre de joueurs morts",
        "it-IT": "Number of Dead Players",
        "ja-JP": "倒れたプレイヤーの数",
        "pt-BR": "Número de Jogadores Mortos",
        "zh-CN": "死亡玩家数量"
    },
    "getNumberOfDoTIds": {
        "description": "The current number of Damage Over Time instances started from the Damage Over Time action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B99",
        "en-US": "Damage Over Time Count",
        "es-MX": "Conteo de daño con el tiempo",
        "fr-FR": "Nombre de dégâts sur la durée",
        "ja-JP": "継続ダメージ数",
        "pt-BR": "Contagem de Dano ao Longo do Tempo",
        "zh-CN": "持续伤害数量"
    },
    "getNumberOfEntityIds": {
        "description": "The current number of Entities created from the Create Effect, Create Beam Effect, or Create Icon Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9F",
        "en-US": "Entity Count",
        "es-MX": "Conteo de entidad",
        "fr-FR": "Nombre d’entités",
        "ja-JP": "エンティティ数",
        "pt-BR": "Contagem de Entidade",
        "zh-CN": "实体数量"
    },
    "getNumberOfHealingModificationIds": {
        "description": "The current number of Healing Modification instances started from the Start Healing Modification Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9D",
        "en-US": "Healing Modification Count",
        "es-MX": "Conteo de modificación de sanación",
        "fr-FR": "Nombre de modifications de soins",
        "ja-JP": "回復変更数",
        "pt-BR": "Contagem de Modificação de Cura",
        "zh-CN": "治疗调整数量"
    },
    "getNumberOfHeroes": {
        "description": "The number of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "Hero",
                "default": "HERO",
                "descriptionLocalized": {
                    "guid": "00000000BEC6",
                    "en-US": "The Hero to check for play.",
                    "de-DE": "Der Held auf dessen Einsatz im Spiel geprüft werden soll.",
                    "es-ES": "Héroe cuya presencia en juego se comprueba.",
                    "es-MX": "El héroe que se verificará para jugar.",
                    "fr-FR": "Le héros dont il faut vérifier la présence en jeu.",
                    "it-IT": "L'Eroe il cui utilizzo sarà controllato.",
                    "ja-JP": "プレイされているかチェックするヒーロー",
                    "ko-KR": "플레이 현황을 확인할 영웅입니다.",
                    "pl-PL": "Bohater do sprawdzenia czy jest w rozgrywce.",
                    "pt-BR": "O Herói a ser verificado em jogo.",
                    "ru-RU": "Герой факт игры за которого нужно проверить.",
                    "zh-CN": "检测此英雄是否在使用。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC7",
                    "en-US": "The Team or Teams on which to check for the Hero being played.",
                    "de-DE": "Das Team oder die Teams die auf den gespielten Helden geprüft werden sollen.",
                    "es-ES": "Equipo o equipos en los que se comprueba si el héroe está en juego.",
                    "es-MX": "El equipo o los equipos en los que se verificará el héroe con el que se está jugando.",
                    "fr-FR": "L’équipe ou les équipes dans lesquelles il faut vérifier la présence du héros.",
                    "it-IT": "La Squadra o le Squadre il cui utilizzo dell'Eroe sarà controllato.",
                    "ja-JP": "ヒーローがプレイされているかチェックするチーム",
                    "ko-KR": "영웅 플레이 현황을 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których zostanie sprawdzone czy bohater jest w rozgrywce.",
                    "pt-BR": "As Equipes que seráão verificadas para ver se o Herói está em jogo.",
                    "ru-RU": "Команда или команды для которых нужно проверить факт игры за указанного героя.",
                    "zh-CN": "检测队伍中是否正在使用这名英雄。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B296",
        "descriptionLocalized": {
            "guid": "00000000BECA",
            "en-US": "The number of Players playing a specific Hero on a Team or in the match.",
            "de-DE": "Die Anzahl der Spieler die einen bestimmten Helden in einem Team oder im Match spielen.",
            "es-ES": "Número de jugadores que usa un héroe concreto en un equipo o en la partida.",
            "es-MX": "La cantidad de jugadores que juegan con un héroe determinado en un equipo o en la partida.",
            "fr-FR": "Le nombre de joueurs incarnant un héros spécifique dans une équipe ou dans la partie.",
            "it-IT": "Il numero di Giocatori che sta utilizzando un Eroe specifico in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、特定のヒーローでプレイするプレイヤーの数",
            "ko-KR": "팀 또는 경기 내에서 지정된 영웅을 플레이하는 플레이어의 수입니다.",
            "pl-PL": "Liczba graczy sterujących konkretnym bohaterem w drużynie lub w meczu.",
            "pt-BR": "O número de Jogadores usando um Herói específico em uma Equipe ou na partida.",
            "ru-RU": "Количество игроков играющих за указанного героя в команде или матче.",
            "zh-CN": "在一支队伍或此比赛中使用指定英雄的数量。"
        },
        "en-US": "Number Of Heroes",
        "de-DE": "Number of Heroes",
        "es-MX": "Cantidad de héroes",
        "fr-FR": "Nombre de héros",
        "it-IT": "Number of Heroes",
        "ja-JP": "ヒーローの数",
        "pt-BR": "Número de Heróis",
        "zh-CN": "英雄数量"
    },
    "getNumberOfHoTIds": {
        "description": "The current number of Heal Over Time instances started from the Heal Over Time action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9A",
        "en-US": "Heal Over Time Count",
        "es-MX": "Conteo de sanación con el tiempo",
        "fr-FR": "Nombre de soins sur la durée",
        "ja-JP": "継続回復数",
        "pt-BR": "Contagem de Cura ao Longo do Tempo",
        "zh-CN": "持续治疗数量"
    },
    "getNumberOfLivingPlayers": {
        "description": "The number of living players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC9",
                    "en-US": "The Team or Teams on which to count Players.",
                    "de-DE": "Das Team oder die Teams in denen Spieler gezählt werden sollen.",
                    "es-ES": "Equipo o equipos en los que se deben contar los jugadores.",
                    "es-MX": "El equipo o los equipos donde se contarán los jugadores.",
                    "fr-FR": "L’équipe ou les équipes dont il faut compter les joueurs.",
                    "it-IT": "La Squadra o le Squadre il cui numero di Eroi sarà controllato.",
                    "ja-JP": "プレイヤー数をチェックするチーム",
                    "ko-KR": "플레이어 수를 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których należy policzyć graczy.",
                    "pt-BR": "As Equipes cujos Jogadores serão contados.",
                    "ru-RU": "Команда или команды количество игроков которых нужно подсчитать.",
                    "zh-CN": "计算下列队伍中玩家的数量。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B297",
        "descriptionLocalized": {
            "guid": "00000000BECE",
            "en-US": "The number of living Players on a Team or in the match.",
            "de-DE": "Die Anzahl der lebenden Spieler in einem Team oder im Match.",
            "es-ES": "Número de jugadores vivos en un equipo o en la partida.",
            "es-MX": "La cantidad de jugadores vivos de un equipo o de la partida.",
            "fr-FR": "Le nombre de joueurs vivants dans une équipe ou dans la partie.",
            "it-IT": "Il numero di Giocatori vivi in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおける生存プレイヤーの数",
            "ko-KR": "팀 또는 경기에서 생존한 플레이어의 수입니다.",
            "pl-PL": "Liczba żywych graczy w drużynie albo w meczu.",
            "pt-BR": "O número de Jogadores vivos em uma Equipe ou na partida.",
            "ru-RU": "Количество живых игроков в команде или матче.",
            "zh-CN": "队伍或比赛中存活的玩家数量。"
        },
        "en-US": "Number Of Living Players",
        "de-DE": "Number of Living Players",
        "es-MX": "Cantidad de jugadores vivos",
        "fr-FR": "Nombre de joueurs en vie",
        "it-IT": "Number of Living Players",
        "ja-JP": "生存プレイヤーの数",
        "pt-BR": "Número de Jogadores Vivos",
        "zh-CN": "存活玩家数量"
    },
    "getNumberOfPlayers": {
        "description": "The number of players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC9",
                    "en-US": "The Team or Teams on which to count Players.",
                    "de-DE": "Das Team oder die Teams in denen Spieler gezählt werden sollen.",
                    "es-ES": "Equipo o equipos en los que se deben contar los jugadores.",
                    "es-MX": "El equipo o los equipos donde se contarán los jugadores.",
                    "fr-FR": "L’équipe ou les équipes dont il faut compter les joueurs.",
                    "it-IT": "La Squadra o le Squadre il cui numero di Eroi sarà controllato.",
                    "ja-JP": "プレイヤー数をチェックするチーム",
                    "ko-KR": "플레이어 수를 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których należy policzyć graczy.",
                    "pt-BR": "As Equipes cujos Jogadores serão contados.",
                    "ru-RU": "Команда или команды количество игроков которых нужно подсчитать.",
                    "zh-CN": "计算下列队伍中玩家的数量。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B295",
        "descriptionLocalized": {
            "guid": "00000000BEC8",
            "en-US": "The number of Players on a Team or in the match.",
            "de-DE": "Die Anzahl der Spieler in einem Team oder im Match.",
            "es-ES": "Número de jugadores en un equipo o en la partida.",
            "es-MX": "La cantidad de jugadores de un equipo o de la partida.",
            "fr-FR": "Le nombre de joueurs dans une équipe ou dans la partie.",
            "it-IT": "Il numero di Giocatori di una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおけるプレイヤーの数",
            "ko-KR": "팀 또는 경기 내 존재하는 플레이어 수입니다.",
            "pl-PL": "Liczba graczy w drużynie albo w meczu.",
            "pt-BR": "O número de Jogadores em uma Equipe ou na partida.",
            "ru-RU": "Количество игроков в команде или матче.",
            "zh-CN": "队伍或比赛中的玩家数量。"
        },
        "en-US": "Number Of Players",
        "de-DE": "Number of Players",
        "es-MX": "Cantidad de jugadores",
        "fr-FR": "Nombre de joueurs",
        "it-IT": "Number of Players",
        "ja-JP": "プレイヤーの数",
        "pt-BR": "Número de Jogadores",
        "zh-CN": "玩家数量"
    },
    "getNumberOfPlayersOnObjective": {
        "description": "The number of players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams on which to count players.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC9",
                    "en-US": "The Team or Teams on which to count Players.",
                    "de-DE": "Das Team oder die Teams in denen Spieler gezählt werden sollen.",
                    "es-ES": "Equipo o equipos en los que se deben contar los jugadores.",
                    "es-MX": "El equipo o los equipos donde se contarán los jugadores.",
                    "fr-FR": "L’équipe ou les équipes dont il faut compter les joueurs.",
                    "it-IT": "La Squadra o le Squadre il cui numero di Eroi sarà controllato.",
                    "ja-JP": "プレイヤー数をチェックするチーム",
                    "ko-KR": "플레이어 수를 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których należy policzyć graczy.",
                    "pt-BR": "As Equipes cujos Jogadores serão contados.",
                    "ru-RU": "Команда или команды количество игроков которых нужно подсчитать.",
                    "zh-CN": "计算下列队伍中玩家的数量。"
                }
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B29B",
        "descriptionLocalized": {
            "guid": "00000000BED2",
            "en-US": "The number of Players occupying a payload or control point either on a Team or in the match.",
            "de-DE": "Die Anzahl der Spieler die eine Fracht oder einen Kontrollpunkt besetzen entweder in einem Team oder im Match.",
            "es-ES": "Número de jugadores que ocupan una carga o un punto de control ya sea en un equipo o en la partida.",
            "es-MX": "La cantidad de jugadores que ocupa una carga o un punto de control ya sea de un equipo o de la partida.",
            "fr-FR": "Le nombre de joueurs occupant un convoi ou un point de contrôle dans une équipe ou dans la partie.",
            "it-IT": "Il numero di Giocatori che occupano un carico o un punto di controllo in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、ペイロードやコントロール・ポイントについているプレイヤーの数",
            "ko-KR": "팀 또는 경기 내에서 화물 또는 거점을 확보하려는 플레이어 수입니다.",
            "pl-PL": "Liczba graczy zajmujących ładunek lub punkt kontrolny albo w drużynie albo w meczu.",
            "pt-BR": "O número de Jogadores ocupando uma carga ou ponto de controle seja em uma Equipe ou na partida.",
            "ru-RU": "Количество игроков которые находятся у груза или на контрольной точке в команде или матче.",
            "zh-CN": "在运载目标或控制点上的玩家数量（可以是一支队伍中的，也可以是整个比赛中的）。"
        },
        "en-US": "Number Of Players On Objective",
        "de-DE": "Number of Players On Objective",
        "es-MX": "Cantidad de jugadores en el objetivo",
        "fr-FR": "Nombre de joueurs sur l’objectif",
        "it-IT": "Number of Players On Objective",
        "ja-JP": "目標を確保中のプレイヤーの数",
        "pt-BR": "Número de Jogadores no Objetivo",
        "zh-CN": "目标点上玩家数量"
    },
    "getNumberOfSlots": {
        "description": "The number of slots on a team or in the match.",
        "args": [
            {
                "name": "Team",
                "description": "The team or teams on which to count slots.",
                "type": "Team",
                "default": "Team",
                "descriptionLocalized": {
                    "guid": "000000011CB9",
                    "en-US": "The Team or Teams on which to count Slots.",
                    "de-DE": "Das Team oder die Teams in denen die Plätze gezählt werden sollen.",
                    "es-ES": "Equipo o equipos en los que se deben contar las ranuras.",
                    "es-MX": "El equipo o los equipos donde se contarán los espacios.",
                    "fr-FR": "L’équipe ou les équipes dont il faut compter les emplacements.",
                    "it-IT": "La Squadra o le Squadre il cui numero di Slot sarà controllato.",
                    "ja-JP": "スロット数をチェックするチーム",
                    "ko-KR": "슬롯 수를 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których miejsca zostaną policzone.",
                    "pt-BR": "As Equipes de onde contar os Espaços.",
                    "ru-RU": "Команда или команды для которых подсчитываются ячейки.",
                    "zh-CN": "计算下列队伍中栏位的数量。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "000000011CB7",
        "descriptionLocalized": {
            "guid": "000000011CB8",
            "en-US": "The number of Slots on a Team or in the match.",
            "de-DE": "Die Anzahl der Plätze in einem Team oder im Match.",
            "es-ES": "Número de ranuras en un equipo o en la partida.",
            "es-MX": "La cantidad de espacios de un equipo o de la partida.",
            "fr-FR": "Le nombre d’emplacements dans une équipe ou dans la partie.",
            "it-IT": "Il numero di Slot di una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおけるスロットの数",
            "ko-KR": "팀 또는 경기의 슬롯 수입니다.",
            "pl-PL": "Liczba miejsc w drużynie albo w meczu.",
            "pt-BR": "O número de Espaços em uma Equipe ou na partida.",
            "ru-RU": "Количество ячеек для одной или нескольких команд.",
            "zh-CN": "队伍或比赛中的栏位数量。"
        },
        "en-US": "Number Of Slots",
        "es-MX": "Cantidad de puestos",
        "fr-FR": "Nombre d’emplacements",
        "it-IT": "Number of Slots",
        "ja-JP": "スロットの数",
        "pt-BR": "Número de Espaços",
        "zh-CN": "栏位数量"
    },
    "getNumberOfTextIds": {
        "description": "The current number of Text instances started from the Create HUD Text, Create In-World Text, Create Progress Bar HUD text, or Create Progress Bar In-World Text Action.",
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9B",
        "en-US": "Text Count",
        "es-MX": "Conteo de texto",
        "fr-FR": "Nombre de textes",
        "ja-JP": "テキスト数",
        "pt-BR": "Contagem de Texto",
        "zh-CN": "文本数量"
    },
    "getObjectivePosition": {
        "description": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C2AD",
                    "en-US": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index.",
                    "de-DE": "Der Index des zu berücksichtigenden Zielpunkts ab 0 gezählt. Jeder Kontrollpunkt Fracht-Checkpoint und Frachtzielpunkt hat seinen eigenen Index.",
                    "es-ES": "Índice del objetivo que se considera empezando a contar desde 0. Cada punto del modo control punto de control de la carga y destino de la carga tiene su propio índice.",
                    "es-MX": "El índice del objetivo que se considerará la cuenta comienza de 0 en adelante. Cada punto de captura punto de control de la carga y destino de la carga tiene su propio índice.",
                    "fr-FR": "L’index de l’objectif à prendre en compte débutant à 0 et progressant. Chaque point de contrôle point de contrôle de convoi et destination de convoi possède son propre index.",
                    "it-IT": "L'indice dell'obiettivo da considerare che incrementa a partire da 0. Ogni punto di controllo checkpoint del carico e destinazione del carico ha il suo indice specifico.",
                    "ja-JP": "検討される目標のインデックス。カウントは0から開始される。各コントロール・ポイント、ペイロード・チェックポイント、ペイロード目的地にはそれぞれにインデックスがある",
                    "ko-KR": "고려해야 하는 목표의 인덱스로서 0에서 시작하여 증가합니다. 각 거점 화물 경유지 화물 목적지에는 각기 고유의 인덱스가 있습니다.",
                    "pl-PL": "Indeks zadania do uwzględnienia zaczynając od 0 i licząc w górę. Każdy punkt kontrolny punkt kontrolny ładunku i miejsce docelowe ładunku posiadają własny indeks.",
                    "pt-BR": "O índice do objetivo a ser considerado iniciando em 0 e somando. Cada ponto de controle ponto de verificação de carga e destino de carga tem seu próprio índice.",
                    "ru-RU": "Индекс рассматриваемой задачи от 0 и выше. Каждая контрольная точка объект контрольная или конечная точка доставки груза имеют свой индекс.",
                    "zh-CN": "考察的目标点的索引，从0开始逐渐累加。每个控制点、运载目标检查点、运载目标目的地都有其独自的索引。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "00000000B355",
        "en-US": "Objective Position",
        "es-MX": "Posición del objetivo",
        "fr-FR": "Position de l’objectif",
        "ja-JP": "目標の位置",
        "pt-BR": "Posição do Objetivo",
        "zh-CN": "目标位置"
    },
    "getOppositeTeam": {
        "description": "The team opposite the specified team.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose opposite to acquire. If all, the result will be all.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BF41",
                    "en-US": "The Team whose opposite to acquire. If All the result will be All.",
                    "de-DE": "Das Team dessen Gegenüberstellung abgerufen werden soll. Falls [All] lautet das Ergebnis [All].",
                    "es-ES": "Equipo cuyo oponente se adquiere. Si es «Todos» el resultado será «Todos».",
                    "es-MX": "El equipo cuya oposición se adquirirá. En caso de ser todos el resultado será todos.",
                    "fr-FR": "L’équipe dont il faut acquérir l’adversaire. Si la valeur est « Tous » le résultat sera « Tous ».",
                    "it-IT": "La Squadra i cui avversari saranno acquisiti. Se Tutti il risultato sarà Tutti.",
                    "ja-JP": "相手チームを取得するチーム「すべて」の場合、結果は「すべて」になる",
                    "ko-KR": "상대 팀 정보를 가져올 팀입니다. All인 경우 결과는 All입니다.",
                    "pl-PL": "Drużyna których przeciwników należy pozyskać. Jeśli wybrano opcję „All” Wszystkie wynikiem będą wszystkie.",
                    "pt-BR": "A Equipe cuja adversária será adquirida. Se for Todas o resultado será Todas.",
                    "ru-RU": "Команда для которой нужно определить соперников. Если указать всех то действие вернет значение [All].",
                    "zh-CN": "获得此队伍的对方队伍。如果选择“全部”，结果亦为“全部”。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Team",
        "guid": "00000000BB0A",
        "en-US": "Opposite Team Of",
        "es-MX": "Equipo contrario de",
        "fr-FR": "Équipe opposée à",
        "ja-JP": "相手チーム: ",
        "pt-BR": "Equipe Adversária de",
        "zh-CN": "对方队伍"
    },
    "getPayloadPosition": {
        "description": "The position in the world of the active payload.",
        "args": [],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B356",
        "descriptionLocalized": {
            "guid": "00000000BEEA",
            "en-US": "The position in the world of the active payload.",
            "de-DE": "Die Position der aktiven Fracht in der Welt.",
            "es-ES": "Posición en el mundo de la carga activa.",
            "es-MX": "La posición en el mundo de la carga activa.",
            "fr-FR": "La position dans le monde du convoi actif.",
            "it-IT": "La posizione nel mondo di gioco del carico attivo.",
            "ja-JP": "アクティブなペイロードのワールド内位置",
            "ko-KR": "월드 내의 활성화된 화물 위치입니다.",
            "pl-PL": "Pozycja aktywnego ładunku w świecie.",
            "pt-BR": "A posição da carga ativa no mundo.",
            "ru-RU": "Местоположение активного груза в игровом мире.",
            "zh-CN": "已激活的运载目标在地图中的位置。"
        },
        "en-US": "Payload Position",
        "es-MX": "Posición de la carga",
        "fr-FR": "Position du convoi",
        "ja-JP": "ペイロードの位置",
        "pt-BR": "Posição da Carga",
        "zh-CN": "运载目标位置"
    },
    "getPayloadProgressPercentage": {
        "description": "The current progress towards the destination for the active payload (expressed as a percentage).",
        "args": [],
        "return": "unsigned float",
        "guid": "00000000B357",
        "descriptionLocalized": {
            "guid": "00000000BEE9",
            "en-US": "The current progress towards the destination for the active payload expressed as a percentage.",
            "de-DE": "Der aktuelle Fortschritt zum Zielort für die aktive Fracht als Prozentsatz dargestellt.",
            "es-ES": "Progreso actual hasta el destino de la carga activa expresado en forma de porcentaje.",
            "es-MX": "El progreso actual hacia el destino de la carga activa expresado como porcentaje.",
            "fr-FR": "La progression actuelle du convoi actif vers sa destination exprimée en pourcentage.",
            "it-IT": "Il progresso attuale verso la destinazione del carico attivo espresso in percentuale.",
            "ja-JP": "アクティブなペイロードの、目的地に向けた現在の進行度（パーセントで表示）",
            "ko-KR": "해당 활성화 화물의 목적지까지 진행률입니다비율로 표시됨.",
            "pl-PL": "Bieżący postęp dotarcia aktywnego ładunku do miejsca docelowego wyrażony w procentach.",
            "pt-BR": "O progresso atual rumo ao destino da carga ativa expresso em percentual.",
            "ru-RU": "Степень продвижения к конечной точке доставки активного груза в данный момент выражается в процентах.",
            "zh-CN": "已激活的运载目标前往目标地的当前进度（以百分比表示）。"
        },
        "en-US": "Payload Progress Percentage",
        "es-MX": "Porcentaje de progreso de la carga",
        "fr-FR": "Pourcentage de progression du convoi",
        "ja-JP": "ペイロード進行のパーセンテージ",
        "pt-BR": "Percentual de Progresso da Carga",
        "zh-CN": "运载目标进度百分比"
    },
    "getPeakServerLoad": {
        "guid": "00000000C996",
        "description": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "return": "unsigned float",
        "descriptionLocalized": {
            "guid": "00000000C998",
            "en-US": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "de-DE": "Gibt die höchste CPU-Belastung der letzten 2 Sekunden der aktuellen Spielinstanz als Prozentsatz an. Wenn diese Zahl 100 erreicht oder überschreitet wird es immer wahrscheinlicher dass die Instanz geschlossen wird weil sie zu viele Ressourcen verbraucht.",
            "es-ES": "Muestra un porcentaje que representa la carga máxima de CPU en la instancia de la partida actual durante los últimos 2 segundos. Cuando este número se acerque a 100 o lo supere será cada vez más probable que se cierre la instancia por estar consumiendo demasiados recursos.",
            "es-MX": "Muestra un porcentaje que representa el uso máximo del procesador de la instancia de juego actual durante los últimos dos segundos. A medida que el número alcanza o supera el 100% aumenta la probabilidad de que esa instancia se cierre ya que está consumiendo demasiados recursos.",
            "fr-FR": "Affiche un pourcentage représentant la charge la plus élevée qu’a fait peser l’instance actuelle du jeu sur le processeur dans les deux dernières secondes. Quand cette valeur approche ou dépasse 100 il est fortement probable que l’instance se ferme car elle consomme trop de ressources.",
            "it-IT": "Mostra una percentuale del carico massimo sulla CPU dell'istanza di gioco attuale negli ultimi due secondi. Una volta che questo numero si avvicina o supera quota 100 è molto probabile che l'istanza venga chiusa per consumo eccessivo di risorse.",
            "ja-JP": "現在のゲームインスタンスの、直近の2秒間におけるCPU負荷の最高値を表すパーセンテージ。この数字が100に近づく、または超えた場合、リソースの過剰消費でインスタンスがシャットダウンされる可能性が高まる",
            "ko-KR": "최근 2초간 게임 인스턴스의 최대 CPU 사용률%입니다. 이 수치가 100에 가까워지거나 100을 초과하면 과도한 리소스 사용으로 인스턴스가 종료될 가능성이 크게 증가합니다.",
            "pl-PL": "Procentowy wskaźnik najwyższego obciążenia głównego procesora przez bieżącą instancję gry w ostatnich dwóch sekundach. Kiedy wartość zbliża się lub przekracza 100 rośnie prawdopodobieństwo że program zostanie zamknięty z powodu zużycia zbyt dużych zasobów systemowych.",
            "pt-BR": "Mostra uma porcentagem que representa o pico de uso de CPU da instância de jogo atual nos últimos dois segundos. Se o número se aproximar ou passar de 100 será bem mais provável que a instância seja encerrada por consumir recursos demais.",
            "ru-RU": "Выводит процент пиковой загрузки ЦП в текущей игре за последние 2 секунды. Чем ближе это значение к 100 тем выше вероятность того что игра прервется из-за чрезмерного потребления ресурсов.",
            "zh-CN": "当前游戏副本在过去2秒内造成的最高CPU负载百分比。如果这个数字接近或者超过100，表示此游戏副本消耗了过多资源，游戏很可能会关闭。",
            "zh-TW": "此百分比數字會顯示當前遊戲在前兩秒時的CPU最高負載狀態。當這個數字接近或超出100，遊戲極有可能會因消耗過多資源而關閉。"
        },
        "en-US": "Server Load Peak",
        "es-MX": "Uso máximo del servidor",
        "fr-FR": "Pic de charge du serveur",
        "ja-JP": "サーバー負荷ピーク",
        "pt-BR": "Pico de Uso do Servidor",
        "zh-CN": "服务器负载峰值"
    },
    "getPlayers": {
        "description": "An array containing all players on a team or in the match.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE63",
                    "en-US": "The Team or Teams from which Players may come.",
                    "de-DE": "Das Team oder die Teams aus denen Spieler stammen können.",
                    "es-ES": "Equipo o equipos de los que pueden proceder los jugadores.",
                    "es-MX": "El equipo o los equipos de donde pueden provenir los jugadores.",
                    "fr-FR": "L’équipe ou les équipes auxquelles peuvent appartenir les joueurs.",
                    "it-IT": "La Squadra o le Squadre dalle quali potrebbero provenire i Giocatori.",
                    "ja-JP": "プレイヤーが所属するチーム",
                    "ko-KR": "플레이어가 속한 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których pochodzić mogą gracze.",
                    "pt-BR": "As Equipes das qualis os Jogadores podem vir.",
                    "ru-RU": "Команда или команды к которым могут принадлежать игроки.",
                    "zh-CN": "玩家所在的队伍。"
                }
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B261",
        "descriptionLocalized": {
            "guid": "00000000BE62",
            "en-US": "An array containing all Players on a Team or in the match.",
            "de-DE": "Ein Array das alle Spieler in einem Team oder im Match enthält.",
            "es-ES": "Una matriz que contiene todos los jugadores en un equipo o en la partida.",
            "es-MX": "Una matriz que contiene a todos los jugadores de un equipo o de la partida.",
            "fr-FR": "Un tableau contenant tous les joueurs dans une équipe ou dans la partie.",
            "it-IT": "Un array che contiene tutti i Giocatori di una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチに参加している全プレイヤーを含む配列",
            "ko-KR": "팀 또는 경기 내 모든 플레이어가 있는 배열입니다.",
            "pl-PL": "Tabela zawierająca wszystkich graczy w drużynie albo w meczu.",
            "pt-BR": "Uma matriz que contém todos os Jogadores em uma Equipe ou na partida.",
            "ru-RU": "Массив содержащий всех игроков команды или матча.",
            "zh-CN": "此数组中包括一支队伍或整个比赛中所有的玩家。"
        },
        "en-US": "All Players",
        "es-MX": "Todos los jugadores",
        "fr-FR": "Tous les joueurs",
        "ja-JP": "すべてのプレイヤー",
        "pt-BR": "Todos os Jogadores",
        "zh-CN": "所有玩家"
    },
    "getPlayersInRadius": {
        "description": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.",
        "args": [
            {
                "name": "CENTER",
                "description": "The center position from which to measure distance.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE3A",
                    "en-US": "The center position from which to measure distance.",
                    "de-DE": "Die zentrale Position von der die Distanz gemessen wird.",
                    "es-ES": "Posición central desde la que se mide la distancia.",
                    "es-MX": "La posición central desde la cual se medirá la distancia.",
                    "fr-FR": "La position centrale à partir de laquelle mesurer la distance.",
                    "it-IT": "La posizione centrale dalla quale misurare la distanza.",
                    "ja-JP": "距離を計測するための中央位置",
                    "ko-KR": "거리 측정이 시작되는 중간 위치입니다.",
                    "pl-PL": "Pozycja środkowa z której mierzy się odległość.",
                    "pt-BR": "A posição central da qual a distância será medida.",
                    "ru-RU": "Центральная точка от которой измеряется расстояние.",
                    "zh-CN": "以此位置为中心测定距离。"
                }
            },
            {
                "name": "RADIUS",
                "description": "The radius in meters inside which players must be in order to be included in the resulting array.",
                "type": "unsigned float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BE39",
                    "en-US": "The radius in meters inside which Players must be in order to be included in the resulting array.",
                    "de-DE": "Der Radius in Metern innerhalb dessen Spieler sich befinden müssen um im resultierenden Array berücksichtigt zu werden.",
                    "es-ES": "Radio en metros al que deben estar los jugadores para que se los incluya en la matriz resultante.",
                    "es-MX": "El radio en metros dentro del cual los jugadores deben estar para ser incluidos en la matriz resultante.",
                    "fr-FR": "Le rayon en mètres dans lequel les joueurs doivent se trouver pour être inclus dans le tableau résultant.",
                    "it-IT": "Il raggio in metri all'interno del quale i Giocatori devono trovarsi per essere inclusi nell'array risultante.",
                    "ja-JP": "この範囲内（メートル）にいるプレイヤーが結果として生じる配列に含まれる",
                    "ko-KR": "결과 배열에 포함되기 위해 플레이어가 속해 있어야 하는 반경미터입니다.",
                    "pl-PL": "Promień w metrach wewnątrz którego znajdować muszą się gracze aby trafić do wynikowej tabeli.",
                    "pt-BR": "O raio em metros dentro do qual Jogadores precisam estar para serem incluídos na matriz resultante.",
                    "ru-RU": "Радиус в метрах в пределах которого должны находиться игроки для включения в итоговый массив.",
                    "zh-CN": "玩家需在此距离范围内（单位：米）才会出现在结果列表中。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams to which a player must belong to be included in the resulting array.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE38",
                    "en-US": "The Team or Teams to which a Player must belong to be included in the resulting array.",
                    "de-DE": "Das Team oder die Teams denen ein Spieler angehören muss um im resultierenden Array berücksichtigt zu werden.",
                    "es-ES": "Equipo o equipos a los que debe pertenecer un jugador para que se lo incluya en la matriz resultante.",
                    "es-MX": "El equipo o los equipos a los cuales debe pertenecer el jugador para ser incluido en la matriz resultante.",
                    "fr-FR": "L’équipe ou les équipes auxquelles un joueur doit appartenir pour être inclus dans le tableau résultant.",
                    "it-IT": "La Squadra o le Squadre alle quali un Giocatore deve appartenere per essere incluso dell'array risultante.",
                    "ja-JP": "このチームに所属しているプレイヤーが結果として生じる配列に含まれる",
                    "ko-KR": "결과 배열에 포함되기 위해 플레이어가 속해 있어야 하는 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny do których należeć musi gracz aby znaleźć się w wynikowej tabeli.",
                    "pt-BR": "As Equipes às qualis um Jogador precisa pertencer para ser incluído na matriz resultante.",
                    "ru-RU": "Команда или команды к которым должен принадлежать игрок для включения в итоговый массив.",
                    "zh-CN": "所选队伍的玩家会出现在结果列表中。"
                }
            },
            {
                "name": "LOS CHECK",
                "description": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.",
                "type": "LosCheck",
                "default": "OFF",
                "descriptionLocalized": {
                    "guid": "00000000BE37",
                    "en-US": "Specifies whether and how a Player must pass a line-of-sight check to be included in the resulting array.",
                    "de-DE": "Legt fest ob und wie ein Spieler eine Sichtfeldprüfung bestehen muss um im resultierenden Array berücksichtigt zu werden.",
                    "es-ES": "Especifica si un jugador debe superar una comprobación de línea de visión para que se lo incluya en la matriz resultante y cómo.",
                    "es-MX": "Especifica si un jugador debe pasar la verificación de línea de vista para ser incluido en la matriz resultante y cómo hacerlo.",
                    "fr-FR": "Spécifie si et comment le cas échéant un joueur doit réussir un test de ligne de vue pour être inclus dans le tableau résultant.",
                    "it-IT": "Specifica se e come un Giocatore deve superare il controllo sulla linea di tiro per essere incluso nell'array risultante.",
                    "ja-JP": "配列に含まれるために、射線チェックに合格する必要があるかどうか、また合格する方法を指定する",
                    "ko-KR": "결과 배열에 포함되기 위해 플레이어가 시야 확인을 통과해야 하는지 여부 및 방법을 지정합니다.",
                    "pl-PL": "Określa czy i jak gracz musi przejść weryfikację pola widzenia aby znaleźć się w wynikowej tabeli.",
                    "pt-BR": "Especifica se e como um Jogador precisa passar por uma verificação de linha de visão para ser incluído na matriz resultante.",
                    "ru-RU": "Определяет необходимость и способ проверки игрока на нахождение в поле зрения для включения в итоговый массив.",
                    "zh-CN": "只有通过视线检测的玩家才会出现在结果列表中。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": {
            "Array": "Player"
        },
        "guid": "00000000B1E0",
        "descriptionLocalized": {
            "guid": "00000000BE3B",
            "en-US": "An array containing all Players within a certain distance of a position optionally restricted by Team and line of sight.",
            "de-DE": "Ein Array das alle Spieler innerhalb einer bestimmten Distanz zu einer Position enthält optional durch Team und Sichtfeld eingeschränkt.",
            "es-ES": "Una matriz que contiene todos los jugadores a una determinada distancia de una posición restringida opcionalmente por el equipo y la línea de visión.",
            "es-MX": "Una matriz que contiene a todos los jugadores a una distancia determinada de una posición restringida opcionalmente por el equipo y la línea de visión.",
            "fr-FR": "Un tableau contenant tous les joueurs dans un certain rayon d’une position optionnellement restreints par équipe et ligne de vue.",
            "it-IT": "Un array contenente tutti i Giocatori entro una certa distanza da una posizione opzionalmente ristretto per Squadra e linea di tiro.",
            "ja-JP": "ある位置から特定の距離範囲内にいるすべてのプレイヤーを含む配列。チームおよび射線によって任意で制限できる",
            "ko-KR": "한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다. 팀 또는 시야 범위로 제한할 수 있습니다.",
            "pl-PL": "Tabela zawierająca wszystkich graczy w określonej odległości od pozycji opcjonalnie ograniczona do drużyny i pola widzenia.",
            "pt-BR": "Uma matriz que contém todos os Jogadores dentro de uma certa distância de uma posição opcionalmente restrita por Equipe e linha de visão.",
            "ru-RU": "Массив содержащий всех игроков находящихся на определенном расстоянии от точки. Возможны ограничения по принадлежности к команде и полю зрения.",
            "zh-CN": "一个列表，其中包含距离指定位置小于一定距离的玩家，可设置是否受到队伍及视线的限制。"
        },
        "en-US": "Players Within Radius",
        "es-MX": "Jugadores dentro del radio",
        "fr-FR": "Joueurs dans un rayon",
        "ja-JP": "範囲内のプレイヤー",
        "pt-BR": "Jogadores no Raio",
        "zh-CN": "范围内玩家"
    },
    "getPlayersInSlot": {
        "description": "The player or array of players who occupy a specific slot in the game.",
        "args": [
            {
                "name": "SLOT",
                "description": "The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BE08",
                    "en-US": "The slot number from which to acquire a Player or Players. In team games each team has slots 0 through 5. In free-for-all games slots are numbered 0 through 11.",
                    "de-DE": "Die Slot-Nummer von der ein oder mehrere Spieler abgerufen werden sollen. In Teamspielen hat jedes Team die Slots 0 bis 5. In klassischen Deathmatches werden die Slots mit 0 bis 11 durchnummeriert.",
                    "es-ES": "Número de la ranura de la que se adquiere el jugador o los jugadores. En partidas por equipos cada equipo tiene ranuras del 0 al 5. En partidas todos contra todos las ranuras van del 0 al 11.",
                    "es-MX": "El número de posición a partir del cual se adquirirá uno o más jugadores. En las partidas de equipos cada equipo cuenta con las posiciones 0 a 5. En las partidas de todos contra todos las posiciones se cuentan del 0 al 11.",
                    "fr-FR": "Le numéro d’emplacement à partir duquel acquérir un ou plusieurs joueurs. Dans les parties en équipe chaque équipe dispose d’emplacements allant de 0 à 5. Dans les parties en mode Chacun pour soi les emplacements sont numérotés de 0 à 11.",
                    "it-IT": "Il numero dello slot dal quale acquisire un Giocatore o i Giocatori. Nelle partite di squadra ogni squadra comprende gli slot da 0 a 5. Nelle partite Tutti contro tutti gli slot sono numerati da 0 a 11.",
                    "ja-JP": "チームのスロット番号を取得する。チーム・ゲームの場合、各チームには0～5の番号がふられたスロットがある。FFAの場合、スロットには0～11がふられている",
                    "ko-KR": "플레이어 정보를 가져올 슬롯 번호입니다. 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.",
                    "pl-PL": "Numer miejsca z którego należy pozyskać gracza lub graczy. W grach drużynowych każda drużyna ma miejsca od 0 do 5. W grach każdy na każdego miejsca są numerowane od 0 do 11.",
                    "pt-BR": "O número de espaço de onde os Jogadores seráão adquiridos. Em partidas em equipe cada equipe tem espaços de 0 a 5. Em partidas todos contra todos os espaços são numerados de 0 a 11.",
                    "ru-RU": "Номер ячейки из которой нужно получить данные занимающего ее игрока или игроков. В командных играх у каждой команды есть ячейки с номерами от 0 до 5. В FFA ячейки имеют номера от 0 до 11.",
                    "zh-CN": "获取指定位置编号的玩家。在队伍模式中，每个队伍中玩家的位置编号为0到5的数字；在自由混战模式中，位置编号为0到11。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams from which to acquire a player or players.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE09",
                    "en-US": "The Team or Teams from which to acquire a Player or Players.",
                    "de-DE": "Das Team oder die Teams von denen ein oder mehrere Spieler abgerufen werden sollen.",
                    "es-ES": "Equipo o equipos de los que se adquieren los jugadores.",
                    "es-MX": "El equipo o los equipos de donde se adquirirá uno o más jugadores.",
                    "fr-FR": "L’équipe ou les équipes dont il faut acquérir un ou plusieurs joueurs.",
                    "it-IT": "La Squadra o le Squadre dalle quali acquisire un Giocatore o i Giocatori.",
                    "ja-JP": "プレイヤーを取得するチーム",
                    "ko-KR": "플레이어 정보를 가져올 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których należy pozyskać gracza lub graczy.",
                    "pt-BR": "As Equipes de onde os Jogadores seráão adquiridos.",
                    "ru-RU": "Команда или команды игрока или игроков которых нужно получить.",
                    "zh-CN": "从这些队伍中选择玩家。"
                }
            }
        ],
        "return": [
            "Player",
            {
                "Array": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "guid": "00000000B334",
        "descriptionLocalized": {
            "guid": "00000000BE07",
            "en-US": "The Player or array of Players who occupy a specific slot in the game.",
            "de-DE": "Der Spieler oder das Array von Spielern das einen bestimmten Slot im Spiel besetzt.",
            "es-ES": "Jugador o matriz de jugadores que ocupan una ranura concreta de la partida.",
            "es-MX": "El jugador o una matriz de jugadores que ocupan una posición determinada en la partida.",
            "fr-FR": "Le joueur ou tableau de joueurs occupant un emplacement spécifique dans la partie.",
            "it-IT": "Il Giocatore o array di Giocatori che occupano uno slot specifico nel gioco.",
            "ja-JP": "ゲームで特定のスロットを持つプレイヤーまたはプレイヤーの配列",
            "ko-KR": "게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.",
            "pl-PL": "Gracz lub tabela graczy którzy zajmują konkretne miejsce w grze.",
            "pt-BR": "O Jogador ou a matriz de Jogadores que ocupa um espaço específico no jogo.",
            "ru-RU": "Игрок или массив игроков занимающих указанную ячейку в игре.",
            "zh-CN": "游戏的指定位置编号处的玩家或玩家数组。"
        },
        "en-US": "Players In Slot",
        "es-MX": "Jugadores en el puesto",
        "fr-FR": "Joueurs dans l’emplacement",
        "ja-JP": "スロットに入ったプレイヤー",
        "pt-BR": "Jogadores no Espaço",
        "zh-CN": "此栏位的玩家"
    },
    "getPlayersNotOnObjective": {
        "description": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE63",
                    "en-US": "The Team or Teams from which Players may come.",
                    "de-DE": "Das Team oder die Teams aus denen Spieler stammen können.",
                    "es-ES": "Equipo o equipos de los que pueden proceder los jugadores.",
                    "es-MX": "El equipo o los equipos de donde pueden provenir los jugadores.",
                    "fr-FR": "L’équipe ou les équipes auxquelles peuvent appartenir les joueurs.",
                    "it-IT": "La Squadra o le Squadre dalle quali potrebbero provenire i Giocatori.",
                    "ja-JP": "プレイヤーが所属するチーム",
                    "ko-KR": "플레이어가 속한 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których pochodzić mogą gracze.",
                    "pt-BR": "As Equipes das qualis os Jogadores podem vir.",
                    "ru-RU": "Команда или команды к которым могут принадлежать игроки.",
                    "zh-CN": "玩家所在的队伍。"
                }
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B267",
        "descriptionLocalized": {
            "guid": "00000000BE75",
            "en-US": "An array containing all Players occupying neither a payload nor a control point either on a Team or in the match.",
            "de-DE": "Ein Array das alle Spieler enthält die weder eine Fracht noch einen Kontrollpunkt besetzen entweder in einem Team oder im Match.",
            "es-ES": "Una matriz que contiene todos los jugadores que no ocupan ni una carga ni un punto de control ya sea en un equipo o en la partida.",
            "es-MX": "Una matriz que contiene a todos los jugadores que no ocupan una carga ni un punto de captura ya sea de un equipo o de la partida.",
            "fr-FR": "Un tableau contenant tous les joueurs n’occupant ni un convoi ni un point de contrôle dans une équipe ou dans la partie.",
            "it-IT": "Un array che contiene tutti i Giocatori che non occupano un carico o un punto di controllo in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、ペイロードや目標地点を確保していないすべてのプレイヤーを含む配列",
            "ko-KR": "팀 또는 경기 내에서 화물을 확보하지도 점령 중이지도 않은 모든 플레이어가 있는 배열입니다.",
            "pl-PL": "Tabela zawierająca wszystkich graczy nie zajmujących ładunku ani punktu kontrolnego albo w drużynie albo w meczu.",
            "pt-BR": "Uma matriz que contém todos os Jogadores que não estão ocupando uma Carga nem um ponto de controle seja em uma Equipe ou na partida.",
            "ru-RU": "Массив со всеми игроками которые не находятся ни у груза ни на контрольной точке в команде или матче.",
            "zh-CN": "此数组中包括所有不在运载目标或控制点上的玩家（可以是一支队伍中的，也可以是整个比赛中的）。"
        },
        "en-US": "All Players Not On Objective",
        "es-MX": "Todos los jugadores que no están en el objetivo",
        "fr-FR": "Tous les joueurs éloignés de l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中ではない",
        "pt-BR": "Todos os Jogadores Fora do Objetivo",
        "zh-CN": "所有目标点外玩家"
    },
    "getPlayersOnHero": {
        "description": "The array of players playing a specific hero on a team or in the match.",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "Hero",
                "default": "HERO",
                "descriptionLocalized": {
                    "guid": "00000000BEC6",
                    "en-US": "The Hero to check for play.",
                    "de-DE": "Der Held auf dessen Einsatz im Spiel geprüft werden soll.",
                    "es-ES": "Héroe cuya presencia en juego se comprueba.",
                    "es-MX": "El héroe que se verificará para jugar.",
                    "fr-FR": "Le héros dont il faut vérifier la présence en jeu.",
                    "it-IT": "L'Eroe il cui utilizzo sarà controllato.",
                    "ja-JP": "プレイされているかチェックするヒーロー",
                    "ko-KR": "플레이 현황을 확인할 영웅입니다.",
                    "pl-PL": "Bohater do sprawdzenia czy jest w rozgrywce.",
                    "pt-BR": "O Herói a ser verificado em jogo.",
                    "ru-RU": "Герой факт игры за которого нужно проверить.",
                    "zh-CN": "检测此英雄是否在使用。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC7",
                    "en-US": "The Team or Teams on which to check for the Hero being played.",
                    "de-DE": "Das Team oder die Teams die auf den gespielten Helden geprüft werden sollen.",
                    "es-ES": "Equipo o equipos en los que se comprueba si el héroe está en juego.",
                    "es-MX": "El equipo o los equipos en los que se verificará el héroe con el que se está jugando.",
                    "fr-FR": "L’équipe ou les équipes dans lesquelles il faut vérifier la présence du héros.",
                    "it-IT": "La Squadra o le Squadre il cui utilizzo dell'Eroe sarà controllato.",
                    "ja-JP": "ヒーローがプレイされているかチェックするチーム",
                    "ko-KR": "영웅 플레이 현황을 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których zostanie sprawdzone czy bohater jest w rozgrywce.",
                    "pt-BR": "As Equipes que seráão verificadas para ver se o Herói está em jogo.",
                    "ru-RU": "Команда или команды для которых нужно проверить факт игры за указанного героя.",
                    "zh-CN": "检测队伍中是否正在使用这名英雄。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": {
            "Array": "Player"
        },
        "guid": "00000000B338",
        "descriptionLocalized": {
            "guid": "00000000BEDD",
            "en-US": "The array of Players playing a specific Hero on a Team or in the match.",
            "de-DE": "Das Array der Spieler die einen bestimmten Helden in einem Team oder im Match spielen.",
            "es-ES": "Matriz de jugadores que usa un héroe concreto en un equipo o en la partida.",
            "es-MX": "La matriz de jugadores que juegan con un héroe determinado en un equipo o en la partida.",
            "fr-FR": "Le tableau des joueurs incarnant un héros spécifique dans une équipe ou dans la partie.",
            "it-IT": "L'array di Giocatori che sta utilizzando un Eroe specifico in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、特定のヒーローでプレイしているプレイヤーを含む配列",
            "ko-KR": "팀 또는 경기 내에서 지정된 영웅을 플레이하는 플레이어가 있는 배열입니다.",
            "pl-PL": "Tabela graczy sterujących konkretnym bohaterem w drużynie lub w meczu.",
            "pt-BR": "A matriz de Jogadores usando um Herói específico em uma Equipe ou na partida.",
            "ru-RU": "Массив игроков играющих за указанного героя в команде или матче.",
            "zh-CN": "此数列中是一支队伍或本场比赛中正在使用指定英雄的玩家。"
        },
        "en-US": "Players On Hero",
        "es-MX": "Jugadores con el héroe",
        "fr-FR": "Joueurs sur le héros",
        "ja-JP": "ヒーローを使用中のプレイヤー",
        "pt-BR": "Jogadores Usando o Herói",
        "zh-CN": "选择英雄的玩家"
    },
    "getPlayersOnObjective": {
        "description": "An array containing all players occupying a payload or control point (either on a team or in the match).",
        "args": [
            {
                "name": "TEAM",
                "description": "The team or teams from which players may come.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BE63",
                    "en-US": "The Team or Teams from which Players may come.",
                    "de-DE": "Das Team oder die Teams aus denen Spieler stammen können.",
                    "es-ES": "Equipo o equipos de los que pueden proceder los jugadores.",
                    "es-MX": "El equipo o los equipos de donde pueden provenir los jugadores.",
                    "fr-FR": "L’équipe ou les équipes auxquelles peuvent appartenir les joueurs.",
                    "it-IT": "La Squadra o le Squadre dalle quali potrebbero provenire i Giocatori.",
                    "ja-JP": "プレイヤーが所属するチーム",
                    "ko-KR": "플레이어가 속한 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny z których pochodzić mogą gracze.",
                    "pt-BR": "As Equipes das qualis os Jogadores podem vir.",
                    "ru-RU": "Команда или команды к которым могут принадлежать игроки.",
                    "zh-CN": "玩家所在的队伍。"
                }
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B266",
        "descriptionLocalized": {
            "guid": "00000000BE6C",
            "en-US": "An array containing all Players occupying a payload or control point either on a Team or in the match.",
            "de-DE": "Ein Array das alle Spieler enthält die eine Fracht oder einen Kontrollpunkt besetzen entweder in einem Team oder im Match.",
            "es-ES": "Una matriz que contiene todos los jugadores que ocupan una carga o un punto de control ya sea en un equipo o en la partida.",
            "es-MX": "Una matriz que contiene a todos los jugadores que ocupan una carga o un punto de captura ya sea de un equipo o de la partida.",
            "fr-FR": "Un tableau contenant tous les joueurs occupant un convoi ou un point de contrôle soit dans une équipe ou dans la partie.",
            "it-IT": "Un array che contiene tutti i Giocatori che occupano un carico o un punto di controllo in una Squadra o nella partita.",
            "ja-JP": "チームまたはマッチにおいて、ペイロードや目標地点を確保しているすべてのプレイヤーを含む配列",
            "ko-KR": "팀 또는 경기 내에서 화물 확보 또는 점령 중인 모든 플레이어가 있는 배열입니다.",
            "pl-PL": "Tabela zawierająca wszystkich graczy zajmujących ładunek lub punkt kontrolny albo w drużynie albo w meczu.",
            "pt-BR": "Uma matriz que contém todos os Jogadores ocupando uma carga ou ponto de controle seja em uma Equipe ou na partida.",
            "ru-RU": "Массив содержащий всех игроков которые находятся у груза или на контрольной точке в команде или матче.",
            "zh-CN": "此数组中包括所有在运载目标或控制点上的玩家（可以是一支队伍中的，也可以是整个比赛中的）。"
        },
        "en-US": "All Players On Objective",
        "es-MX": "Todos los jugadores que están en el objetivo",
        "fr-FR": "Tous les joueurs sur l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中",
        "pt-BR": "Todos os Jogadores no Objetivo",
        "zh-CN": "所有目标点内玩家"
    },
    "getServerLoad": {
        "guid": "00000000C961",
        "description": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100, it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
        "args": [],
        "return": "unsigned float",
        "descriptionLocalized": {
            "guid": "00000000C962",
            "en-US": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "de-DE": "Gibt die CPU-Belastung der aktuellen Spielinstanz als Prozentsatz an. Wenn diese Zahl 100 erreicht oder überschreitet wird es immer wahrscheinlicher dass die Instanz geschlossen wird weil sie zu viele Ressourcen verbraucht.",
            "es-ES": "Muestra un porcentaje que representa la carga de CPU en la instancia actual de la partida. Cuando este número se acerque a 100 o lo supere será cada vez más probable que se cierre la instancia por estar consumiendo demasiados recursos.",
            "es-MX": "Muestra un porcentaje que representa el uso del procesador de la instancia de juego actual. A medida que el número alcanza o supera el 100% aumenta la probabilidad de que esa instancia se cierre ya que está consumiendo demasiados recursos.",
            "fr-FR": "Affiche un pourcentage représentant la charge que fait peser l’instance actuelle du jeu sur le processeur. Quand cette valeur approche ou dépasse 100 il est fortement probable que l’instance se ferme car elle consomme trop de ressources.",
            "it-IT": "Mostra una percentuale del carico sulla CPU dell'istanza di gioco attuale. Una volta che questo numero si avvicina o supera quota 100 è molto probabile che l'istanza venga chiusa per consumo eccessivo di risorse.",
            "ja-JP": "現在のゲームインスタンスのCPU負荷を表すパーセンテージ。この数字が100に近づく、または超えた場合、リソースの過剰消費でインスタンスがシャットダウンされる可能性が高まる",
            "ko-KR": "현재 게임 인스턴스의 CPU 사용률%입니다. 이 수치가 100에 가까워지거나 100을 초과하면 과도한 리소스 사용으로 인스턴스가 종료될 가능성이 크게 증가합니다.",
            "pl-PL": "Procentowy wskaźnik obciążenia głównego procesora przez bieżącą instancję gry. Kiedy wartość zbliża się lub przekracza 100 rośnie prawdopodobieństwo że program zostanie zamknięty z powodu zużycia zbyt dużych zasobów systemowych.",
            "pt-BR": "Mostra uma porcentagem que representa o uso de CPU da instância de jogo atual. Se o número se aproximar ou passar de 100 será bem mais provável que a instância seja encerrada por consumir recursos demais.",
            "ru-RU": "Выводит процент загрузки ЦП в текущей игре. Чем ближе это значение к 100 тем выше вероятность того что игра прервется из-за чрезмерного потребления ресурсов.",
            "zh-CN": "当前游戏副本造成的CPU负载百分比。如果这个数字接近或者超过100，表示此游戏副本消耗了过多资源，游戏很可能会关闭。",
            "zh-TW": "此百分比數字會顯示當前遊戲的CPU負載狀態。當這個數字接近或超出100，遊戲極有可能會因消耗過多資源而關閉。"
        },
        "en-US": "Server Load",
        "es-MX": "Uso del servidor",
        "fr-FR": "Charge du serveur",
        "ja-JP": "サーバー負荷",
        "pt-BR": "Uso do Servidor",
        "zh-CN": "服务器负载"
    },
    "getSpawnPoints": {
        "description": "The active spawn points for a team or for the match, provided as an array of position vectors.",
        "args": [
            {
                "name": "Team",
                "description": "The team whose spawn points to acquire.",
                "type": "Team",
                "default": "Team",
                "descriptionLocalized": {
                    "guid": "00000001205E",
                    "en-US": "The Team whose spawn points to acquire.",
                    "de-DE": "Das Team dessen Startbereiche abgerufen werden sollen.",
                    "es-ES": "Equipo cuyos puntos de aparición se adquieren.",
                    "es-MX": "El equipo cuyos puntos de aparición se adquirirán.",
                    "fr-FR": "L’équipe dont il faut acquérir les points d’apparition.",
                    "it-IT": "La Squadra la cui area di partenza bisogna acquisire.",
                    "ja-JP": "リスポーン地点を取得するチーム",
                    "ko-KR": "생성 지점 정보를 가져올 팀입니다.",
                    "pl-PL": "Drużyna której punkt startowy należy pozyskać.",
                    "pt-BR": "A Equipe cujos pontos de ressurgimento serão adquiridos.",
                    "ru-RU": "Команда точки возрождения которой нужно определить.",
                    "zh-CN": "获取此队伍的重生点。"
                }
            }
        ],
        "return": {
            "Array": "Position"
        },
        "guid": "000000011FE7",
        "descriptionLocalized": {
            "guid": "000000011FE8",
            "en-US": "The active spawn points for a Team or for the match provided as an array of position vectors.",
            "de-DE": "Die aktiven Startbereiche eines Teams oder des ganzen Matches. Wird als Array von Positionsvektoren ausgegeben.",
            "es-ES": "Los puntos de aparición activos de un equipo o de una partida proporcionados como una matriz de vectores de posición.",
            "es-MX": "Los puntos de aparición activos para un equipo o para la partida proporcionados como una matriz de vectores de posición.",
            "fr-FR": "Les points d’apparition actifs d’une équipe ou de la partie présentés sous la forme d’un tableau de vecteurs de position.",
            "it-IT": "Le aree di partenza attive per una Squadra o per la partita fornite come array di vettori posizionali.",
            "ja-JP": "チームまたはマッチの有効なリスポーン地点。位置ベクトルの配列として提供される",
            "ko-KR": "팀 또는 경기의 활성화된 생성 지점으로 위치 벡터의 배열로 제공됩니다.",
            "pl-PL": "Aktywne punkty startowe dla danej drużyny lub dla meczu podane jako tabela wektorów pozycji.",
            "pt-BR": "Os pontos de ressurgimento ativos da Equipe ou da partida fornecidos como uma matriz de vetores de posição.",
            "ru-RU": "Активные точки возрождения команды или команд в виде массива векторов местоположения.",
            "zh-CN": "队伍或比赛中激活的重生点，以位置矢量数组的形式提供。"
        },
        "en-US": "Spawn Points",
        "es-MX": "Puntos de aparición",
        "fr-FR": "Points d’apparition",
        "ja-JP": "リスポーン地点",
        "pt-BR": "Pontos de Ressurgimento",
        "zh-CN": "重生点"
    },
    "getSupportHeroes": {
        "description": "The array of all support heroes in overwatch. The order is as follows:\n        \n        0. Mercy\n        1. Zenyatta\n        2. Lucio\n        3. Ana\n        4. Brigitte\n        5. Moira\n        6. Baptiste    \n        ",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40B",
        "en-US": "All Support Heroes",
        "de-DE": "Alle Unterstützungshelden",
        "es-MX": "Todos los héroes de apoyo",
        "fr-FR": "Tous les héros de soutien",
        "ja-JP": "全サポートヒーロー",
        "pt-BR": "Todos os Heróis de Suporte",
        "zh-CN": "所有支援英雄"
    },
    "getTankHeroes": {
        "description": "The array of all tank heroes in overwatch. The order is as follows:\n        \n        0. Reinhardt\n        1. Winston\n        2. Roadhog\n        3. Zarya\n        4. Dva\n        5. Orisa\n        6. Hammond\n        7. Sigma    \n        ",
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40C",
        "en-US": "All Tank Heroes",
        "de-DE": "Alle Tankhelden",
        "es-MX": "Todos los héroes tanques",
        "fr-FR": "Tous les héros tanks",
        "ja-JP": "全タンクヒーロー",
        "pt-BR": "Todos os Heróis de Tanque",
        "zh-CN": "所有重装英雄"
    },
    "getTotalTimeElapsed": {
        "description": "The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).",
        "args": [],
        "return": "unsigned float",
        "guid": "00000000B361",
        "descriptionLocalized": {
            "guid": "00000000BEF9",
            "en-US": "The total time in seconds that have elapsed since the game instance was created including setup time and transitions.",
            "de-DE": "Die vergangene Gesamtzeit in Sekunden seit die Spielinstanz erstellt wurde einschließlich Aufstellungszeit und Übergängen.",
            "es-ES": "Tiempo total en segundos que ha transcurrido desde la creación de la instancia de partida incluidos el tiempo de preparación y las transiciones.",
            "es-MX": "El tiempo total en segundos que ha transcurrido desde que se creó la instancia de la partida incluye el tiempo de preparación y las transiciones.",
            "fr-FR": "Temps total en secondes écoulé depuis la création de l’instance de partie y compris le temps de configuration et les transitions.",
            "it-IT": "Il tempo totale in secondi trascorso dalla creazione dell'istanza di gioco incluso il tempo della fase di Organizzazione e le transizioni.",
            "ja-JP": "ゲーム・インスタンス作成から経過した合計秒数（セットアップや移行の時間を含む）",
            "ko-KR": "게임 인스턴스 생성 후 경과 시간단위: 초입니다설정 및 전환 시간 포함.",
            "pl-PL": "Łączny czas w sekundach który minął odkąd stworzono instancję gry wliczając czas ustawiania i przejść.",
            "pt-BR": "O tempo total em segundos que se passou desde que a instância de jogo foi criada incluindo tempo de preparação e transições.",
            "ru-RU": "Общее время в секундах прошедшее с момента создания экземпляра игры включая время подготовки и замены.",
            "zh-CN": "该游戏副本创建后已经过去的总时间（包括准备时间和攻防转换时间），以秒为单位。"
        },
        "en-US": "Total Time Elapsed",
        "es-MX": "Tiempo total transcurrido",
        "fr-FR": "Temps total écoulé",
        "ja-JP": "合計経過時間",
        "pt-BR": "Tempo Total Decorrido",
        "zh-CN": "总计消耗时间"
    },
    "healee": {
        "description": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player.",
        "args": null,
        "return": "Player",
        "guid": "00000000CC1C",
        "descriptionLocalized": {
            "guid": "00000000CC1D",
            "en-US": "The Player that received the healing for the Event currently being processed by this Rule. May be the same as the Healer or the Event Player.",
            "de-DE": "Der Spieler der die Heilung für das Event erhalten hat das aktuell durch diese Regel verarbeitet wird. Kann derselbe sein wie [Healer] oder [Event Player].",
            "es-ES": "El jugador que ha recibido la sanación del evento que está procesando actualmente esta regla. Puede ser el mismo que el «Healer» o el «Event Player».",
            "es-MX": "El jugador que recibió la sanación por el evento procesado actualmente por esta regla. Puede ser el mismo que el sanador o el jugador del evento.",
            "fr-FR": "Le joueur qui a reçu les soins de l’évènement actuellement traité par cette règle. Peut être identique au soigneur ou au joueur exécutant.",
            "it-IT": "Il Giocatore che ha ricevuto cure per l'Evento attualmente elaborato dalla Regola. Può corrispondere al Guaritore o al Giocatore Evento.",
            "ja-JP": "このルールをもとに処理されているイベントで回復を受けたプレイヤー。ヒーラーまたはイベント・プレイヤーと同じ場合がある",
            "ko-KR": "이 규칙으로 처리된 이벤트로 인해 치유를 받은 플레이어입니다. Healer 또는 Event Player와 동일할 수 있습니다.",
            "pl-PL": "Gracz który otrzymał leczenie w zdarzeniu aktualnie przetwarzanym przez tę regułę. Może być taki sam jak w zmiennej „Healer” Leczący lub „Event Player” Gracz w zdarzeniu.",
            "pt-BR": "O Jogador que recebeu a cura do Evento que está sendo processado por esta Regra. Pode ser o mesmo que o Curandeiro ou o Jogador do Evento.",
            "ru-RU": "Игрок получивший лечение в рамках события которое в данный момент обрабатывается этим правилом. Может совпадать с переменной [Healer] или [Event Player].",
            "zh-CN": "根据此规则处理的事件中受到治疗的玩家。可能与治疗者或事件玩家是同一个人。"
        },
        "en-US": "Healee",
        "es-MX": "Sanado",
        "fr-FR": "Soigné",
        "ja-JP": "回復対象",
        "pt-BR": "Curado",
        "zh-CN": "受治疗者"
    },
    "healer": {
        "guid": "00000000CC1A",
        "description": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player.",
        "args": null,
        "return": "Player",
        "descriptionLocalized": {
            "guid": "00000000CC1B",
            "en-US": "The Player that dealt the healing for the Event currently being processed by this Rule. May be the same as the Healee or the Event Player.",
            "de-DE": "Der Spieler der die Heilung für das Event verursacht hat das aktuell durch diese Regel verarbeitet wird. Kann derselbe sein wie [Healee] oder [Event Player].",
            "es-ES": "El jugador que ha causado la sanación del evento que está procesando actualmente esta regla. Puede ser el mismo que el «Healee» o el «Event Player».",
            "es-MX": "El jugador que realizó la sanación por el evento procesado actualmente por esta regla. Puede ser el mismo que el sanado o el jugador del evento.",
            "fr-FR": "Le joueur qui a prodigué les soins de l’évènement actuellement traité par cette règle. Peut être identique au soigné ou au joueur exécutant.",
            "it-IT": "Il Giocatore che ha fornito cure per l'Evento attualmente elaborato dalla Regola. Può corrispondere al Ricettore o al Giocatore Evento.",
            "ja-JP": "このルールをもとに処理されているイベントで回復を与えたプレイヤー。回復対象またはイベント・プレイヤーと同じ場合がある",
            "ko-KR": "이 규칙으로 처리된 이벤트로 인해 치유를 한 플레이어입니다. Healee 또는 Event Player와 동일할 수 있습니다.",
            "pl-PL": "Gracz który otrzymał leczenie w zdarzeniu aktualnie przetwarzanym przez tę regułę. Może być taki sam jak w zmiennej „Healer” Leczący lub „Event Player” Gracz w zdarzeniu.",
            "pt-BR": "O Jogador que realizou a cura do Evento que está sendo processado por esta Regra. Pode ser o mesmo que o Curado ou o Jogador do Evento.",
            "ru-RU": "Игрок вылечивший кого-то в рамках события которое в данный момент обрабатывается этим правилом. Может совпадать с переменной [Healee] или [Event Player].",
            "zh-CN": "根据此规则处理的事件中造成治疗的玩家。可能与被治疗者或事件玩家是同一个人。"
        },
        "en-US": "Healer",
        "es-MX": "Sanador",
        "fr-FR": "Soigneur",
        "ja-JP": "ヒーラー",
        "pt-BR": "Curandeiro",
        "zh-CN": "治疗者"
    },
    "heroIcon": {
        "description": "Converts a hero parameter into a string that shows up as an icon.",
        "args": [
            {
                "name": "VALUE",
                "description": "The hero that will be converted to an icon.",
                "type": "Hero",
                "default": "HERO",
                "descriptionLocalized": {
                    "guid": "00000000C201",
                    "en-US": "The hero that will be converted to an icon.",
                    "de-DE": "Der Held der in ein Icon umgewandelt wird.",
                    "es-ES": "Héroe que se convertirá en un icono.",
                    "es-MX": "El héroe que se convertirá en un ícono.",
                    "fr-FR": "Le héros qui sera converti en icône.",
                    "it-IT": "L'eroe che sarà convertito in icona.",
                    "ja-JP": "アイコンに変換されるヒーロー",
                    "ko-KR": "아이콘으로 변환될 영웅입니다.",
                    "pl-PL": "Bohater który zostanie przekonwertowany na symbol.",
                    "pt-BR": "O herói que será convertido em ícone.",
                    "ru-RU": "Герой который будет преобразован в значок.",
                    "zh-CN": "此英雄将被转换为一个图标。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "guid": "00000000C1FE",
        "en-US": "Hero Icon String",
        "es-MX": "Cadena de ícono de héroe",
        "fr-FR": "Chaîne d’icône du héros",
        "ja-JP": "ヒーローアイコン文字列",
        "pt-BR": "String de Ícone de Herói",
        "zh-CN": "英雄图标字符串"
    },
    "horizontalAngleOfDirection": {
        "description": "The horizontal angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.",
                "type": "Direction",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BF48",
                    "en-US": "The direction Vector from which to acquire a horizontal angle in degrees. The Vector is unitized before calculation begins.",
                    "de-DE": "Der Richtungsvektor dessen horizontaler Winkel in Grad abgerufen werden soll. Der Vektor wird normiert bevor die Berechnung beginnt.",
                    "es-ES": "Vector de dirección cuyo ángulo horizontal en grados se adquiere. El vector se normaliza antes del comienzo del cálculo.",
                    "es-MX": "El vector de dirección a partir del cual se adquirirá un ángulo horizontal en grados. El vector es unificado antes de que comience el cálculo.",
                    "fr-FR": "Le vecteur de direction à partir duquel acquérir un angle horizontal en degrés. Le vecteur est normalisé avant le calcul.",
                    "it-IT": "Il Vettore direzionale dal quale acquisire l'angolo orizzontale in gradi. Il Vettore viene normalizzato prima dell'inizio del calcolo.",
                    "ja-JP": "水平角の度数を取得するための方向ベクトル。計算を開始する前にベクトルは正規化される",
                    "ko-KR": "횡축각단위: 도 정보를 가져올 방향 벡터입니다. 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.",
                    "pl-PL": "Kierunkowy parametr „Vector” Wektor z którego pobierany jest podany w stopniach kąt poziomy. Parametr „Vector” Wektor zostaje przekształcony na jednostki przed rozpoczęciem obliczeń.",
                    "pt-BR": "O Vetor direcional do qual será adquirido um ângulo horizontal em graus. O Vetor é unitizado antes de o cálculo ser iniciado.",
                    "ru-RU": "Вектор направления от которого строится горизонтальный угол в градусах. Перед вычислением вектор нормализуется.",
                    "zh-CN": "对此方向矢量获取垂直角度，单位为度。此矢量在计算开始前进行统一化。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000BB2C",
        "descriptionLocalized": {
            "guid": "00000000BF49",
            "en-US": "The horizontal angle in degrees corresponding to the specified direction Vector.",
            "de-DE": "Der horizontale Winkel der dem festgelegten Richtungsvektor entspricht in Grad.",
            "es-ES": "Ángulo horizontal en grados que corresponde con el vector de dirección especificado.",
            "es-MX": "El ángulo horizontal en grados correspondiente al vector de dirección especificado.",
            "fr-FR": "L’angle horizontal en degrés correspondant au vecteur de direction spécifié.",
            "it-IT": "L'angolo orizzontale in gradi corrispondente al Vettore direzionale specificato.",
            "ja-JP": "指定された方向ベクトルに対する水平角（度）",
            "ko-KR": "지정된 방향 벡터에 대응하는 횡축각단위: 도입니다.",
            "pl-PL": "Podany w stopniach kąt poziomy odpowiadający określonemu kierunkowemu parametrowi „Vector” Wektor.",
            "pt-BR": "O ângulo horizontal em graus correspondente ao Vetor direcional especificado.",
            "ru-RU": "Горизонтальный угол в градусах соответствующий указанному вектору направления.",
            "zh-CN": "与指定方向矢量的水平夹角，单位为度。"
        },
        "en-US": "Horizontal Angle From Direction",
        "es-MX": "Ángulo horizontal desde la dirección",
        "fr-FR": "Angle horizontal depuis une direction",
        "ja-JP": "方向からの水平角",
        "pt-BR": "Ângulo Horizontal a partir da Direção",
        "zh-CN": "与此方向的水平角度"
    },
    "horizontalAngleTowards": {
        "description": "The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEB0",
                    "en-US": "The Player from whose current facing the angle begins.",
                    "de-DE": "Der Spieler bei dessen aktueller Blickrichtung der Winkel beginnt.",
                    "es-ES": "Jugador desde cuya orientación actual comienza el ángulo.",
                    "es-MX": "El jugador desde cuya orientación actual comienza el ángulo.",
                    "fr-FR": "Le joueur dont l’orientation actuelle forme le point de départ de l’angle.",
                    "it-IT": "Il Giocatore dalla cui direzione di osservazione inizia l'angolo.",
                    "ja-JP": "正方向が開始角度となるプレイヤー",
                    "ko-KR": "이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.",
                    "pl-PL": "Gracz od którego rozpoczyna się bieżący kąt skierowania.",
                    "pt-BR": "O Jogador cuja direção atual inicia o ângulo.",
                    "ru-RU": "Игрок относительно направления взгляда которого вычисляется угол.",
                    "zh-CN": "以此玩家当前面向的角度为起点。"
                }
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BEAF",
                    "en-US": "The position in the world where the angle ends.",
                    "de-DE": "Die Position in der Welt bei der der Winkel endet.",
                    "es-ES": "Posición en el mundo donde finaliza el ángulo.",
                    "es-MX": "La posición en el mundo donde finaliza el ángulo.",
                    "fr-FR": "La position dans le monde où l’angle prend fin.",
                    "it-IT": "La posizione nel mondo di gioco dove termina l'angolo.",
                    "ja-JP": "ワールドにおける、角度が終了する位置",
                    "ko-KR": "각 각이 종료되는 월드 내 위치입니다.",
                    "pl-PL": "Pozycja w świecie w której kończy się kąt.",
                    "pt-BR": "A posição no mundo onde o ângulo termina.",
                    "ru-RU": "Точка в игровом мире угол до которой нужно вычислить.",
                    "zh-CN": "测定与地图中此位置的夹角。"
                }
            }
        ],
        "return": "float",
        "guid": "00000000B27D",
        "en-US": "Horizontal Angle Towards",
        "es-MX": "Ángulo horizontal en dirección a",
        "fr-FR": "Angle horizontal vers",
        "ja-JP": "水平角の方向: ",
        "pt-BR": "Ângulo Horizontal Rumo a",
        "zh-CN": "水平方向夹角"
    },
    "hostPlayer": {
        "description": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
        "args": null,
        "return": "Player",
        "guid": "00000000CC1E",
        "descriptionLocalized": {
            "guid": "00000000CC1F",
            "en-US": "The Player that is currently the host of the custom game. This value will change if the current host player leaves the match.",
            "de-DE": "Der Spieler der aktuell der Host des benutzerdefinierten Spiels ist. Dieser Wert ändert sich wenn der aktuelle Hostspieler das Match verlässt.",
            "es-ES": "El jugador que actualmente es el anfitrión de la partida personalizada. Este valor cambiará si el anfitrión actual abandona la partida.",
            "es-MX": "El jugador que es actualmente el anfitrión de la partida personalizada. Este valor cambiará si el jugador que es actualmente el anfitrión abandona la partida.",
            "fr-FR": "Le joueur qui est actuellement l’hôte de la partie. Cette valeur changera si l’hôte actuel quitte la partie.",
            "it-IT": "Il Giocatore che sta ospitando la partita personalizzata. Questo valore cambierà se il giocatore ospitante lascia la partita.",
            "ja-JP": "カスタム・ゲームのホストになっているプレイヤー。現在のホスト・プレイヤーがマッチを抜けると、この値は変動する",
            "ko-KR": "현재 사용자 지정 게임의 방장인 플레이어입니다. 이 값은 현재 방장이 경기를 떠나면 변경됩니다.",
            "pl-PL": "Gracz który jest aktualnie gospodarzem gry dowolnej. Wartość zmieni się jeśli aktualny gracz gospodarz opuści mecz.",
            "pt-BR": "O Jogador que está hospedando a partida personalizada. Este valor será alterado se o jogador anfitrião deixar a partida.",
            "ru-RU": "Игрок который сейчас является владельцем матча «Своей игры». Это значение изменится если текущий владелец матча покинет его.",
            "zh-CN": "当前自定义游戏的主机玩家。如果当前的主机玩家离开了比赛，该值会改变。"
        },
        "en-US": "Host Player",
        "es-MX": "Jugador anfitrión",
        "fr-FR": "Joueur hôte",
        "ja-JP": "ホスト・プレイヤー",
        "pt-BR": "Jogador Anfitrião",
        "zh-CN": "主机玩家"
    },
    "iconString": {
        "description": "Allows you to use an icon inside of a string.",
        "args": [
            {
                "name": "Icon",
                "description": "The icon to display.",
                "type": "Icon",
                "default": "ARROW: DOWN",
                "descriptionLocalized": {
                    "en-US": "The icon to display.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "00000000CCDC",
        "en-US": "Icon String",
        "es-MX": "Cadena de ícono",
        "fr-FR": "Chaîne d’icône",
        "ja-JP": "アイコンストリング",
        "pt-BR": "String de Ícone",
        "zh-CN": "图标字符串"
    },
    "isAssemblingHeroes": {
        "description": "Whether the match is currently in its assemble heroes phase.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35C",
        "descriptionLocalized": {
            "guid": "00000000BEF3",
            "en-US": "Whether the match is currently in its Assemble Heroes phase.",
            "de-DE": "Ob das Match aktuell in der Heldenwahlphase ist.",
            "es-ES": "Si la partida actual está actualmente en la fase de selección de héroes.",
            "es-MX": "Verifica si la partida está actualmente en la fase de Forma tu equipo.",
            "fr-FR": "Si la partie est actuellement en phase Choisissez vos héros.",
            "it-IT": "Specifica se la partita si trova nella fase Raduna gli eroi.",
            "ja-JP": "現在マッチがヒーロー編成中かどうか",
            "ko-KR": "경기가 현재 영웅 선택 단계인지 여부입니다.",
            "pl-PL": "Czy mecz jest obecnie w fazie zbierania bohaterów.",
            "pt-BR": "Se a partida está na fase de Escolher Heróis ou não.",
            "ru-RU": "Определяет находится ли матч в фазе выбора героев.",
            "zh-CN": "此比赛是否正在集结英雄阶段。"
        },
        "en-US": "Is Assembling Heroes",
        "es-MX": "En Forma tu equipo",
        "fr-FR": "Phase de choix de héros",
        "ja-JP": "ヒーローを編成中",
        "pt-BR": "É Escolher Heróis",
        "zh-CN": "正在集结英雄"
    },
    "isControlPointLocked": {
        "description": "Whether the point is locked in control mode.",
        "args": [],
        "return": "bool",
        "guid": "00000000B37B",
        "descriptionLocalized": {
            "guid": "00000000BF02",
            "en-US": "Whether the point is locked in Control Mode.",
            "de-DE": "Ob der Punkt im Kontrollmodus gesperrt ist.",
            "es-ES": "Si el punto está bloqueado en modo control.",
            "es-MX": "Verifica si el punto está bloqueado en el modo Control.",
            "fr-FR": "Si le point est verrouillé en mode Contrôle.",
            "it-IT": "Specifica se il punto non è accessibile nella modalità Controllo.",
            "ja-JP": "コントロール・モードにおいて、ポイントがロックされているかどうか",
            "ko-KR": "쟁탈 전장에서 해당 거점이 잠겨있는지 여부입니다.",
            "pl-PL": "Czy punkt jest zablokowany w trybie Kontrola.",
            "pt-BR": "Se o ponto está bloqueado ou não no modo de Controle.",
            "ru-RU": "Определяет заблокирована ли точка в режиме контроля.",
            "zh-CN": "占领要点模式中占领点是否解锁。"
        },
        "en-US": "Is Control Mode Point Locked",
        "es-MX": "Punto bloqueado en el modo Control",
        "fr-FR": "Point de contrôle verrouillé",
        "ja-JP": "コントロール・モードでポイントがロックされている",
        "pt-BR": "É Ponto Bloqueado do Modo de Controle",
        "zh-CN": "占领要点模式占领点解锁"
    },
    "isFlagAtBase": {
        "description": "Whether a specific team's flag is at its base in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BF06",
                    "en-US": "The Team whose flag to check.",
                    "de-DE": "Das Team dessen Flagge geprüft werden soll.",
                    "es-ES": "Equipo cuya bandera se comprueba.",
                    "es-MX": "El equipo cuya bandera se verificará.",
                    "fr-FR": "L’équipe dont il faut vérifier le drapeau.",
                    "it-IT": "La Squadra la cui bandiera sarà controllata.",
                    "ja-JP": "フラッグをチェックするチーム",
                    "ko-KR": "깃발을 확인할 팀입니다.",
                    "pl-PL": "Drużyna której flaga zostanie sprawdzona.",
                    "pt-BR": "A Equipe cuja bandeira será verificada.",
                    "ru-RU": "Команда флаг которой нужно проверить.",
                    "zh-CN": "检测此队伍的旗帜。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B3A1",
        "descriptionLocalized": {
            "guid": "00000000BF05",
            "en-US": "Whether a specific Team's flag is at its base in Capture The Flag.",
            "de-DE": "Ob die Flagge eines bestimmten Teams in der Flaggeneroberung an ihrer Basis ist.",
            "es-ES": "Si la bandera de un equipo concreto está en su base en Captura la bandera.",
            "es-MX": "Verifica si la bandera de un equipo determinado se encuentra en su base en Captura la bandera.",
            "fr-FR": "Si le drapeau d’une équipe spécifique se trouve à sa base en mode Capture du drapeau.",
            "it-IT": "Specifica se la bandiera di una Squadra specifica si trova nella sua base in Cattura la Bandiera.",
            "ja-JP": "「キャプチャー・ザ・フラッグ」で特定チームのフラッグが自分の陣地にあるかどうか",
            "ko-KR": "깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.",
            "pl-PL": "Czy flaga określonej drużyny jest w swojej bazie w Zdobywaniu flagi.",
            "pt-BR": "Se a bandeira de uma Equipe específica está na base ou não no Capture a Bandeira.",
            "ru-RU": "Определяет находится ли флаг указанной команды на ее базе в режиме «Захват флага».",
            "zh-CN": "在勇夺锦旗模式下，指定队伍的旗帜是否在其基地内。"
        },
        "en-US": "Is Flag At Base",
        "es-MX": "La bandera está en la base",
        "fr-FR": "Drapeau à la base",
        "ja-JP": "フラッグが陣地にある",
        "pt-BR": "É Bandeira na Base",
        "zh-CN": "旗帜是否在基地中"
    },
    "isFlagBeingCarried": {
        "description": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose flag to check.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BF06",
                    "en-US": "The Team whose flag to check.",
                    "de-DE": "Das Team dessen Flagge geprüft werden soll.",
                    "es-ES": "Equipo cuya bandera se comprueba.",
                    "es-MX": "El equipo cuya bandera se verificará.",
                    "fr-FR": "L’équipe dont il faut vérifier le drapeau.",
                    "it-IT": "La Squadra la cui bandiera sarà controllata.",
                    "ja-JP": "フラッグをチェックするチーム",
                    "ko-KR": "깃발을 확인할 팀입니다.",
                    "pl-PL": "Drużyna której flaga zostanie sprawdzona.",
                    "pt-BR": "A Equipe cuja bandeira será verificada.",
                    "ru-RU": "Команда флаг которой нужно проверить.",
                    "zh-CN": "检测此队伍的旗帜。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B3A2",
        "descriptionLocalized": {
            "guid": "00000000BF07",
            "en-US": "Whether a specific Team's flag is being carried by a member of the opposing team in Capture The Flag.",
            "de-DE": "Ob die Flagge eines bestimmten Teams in der Flaggeneroberung von einem Mitglied des gegnerischen Teams getragen wird.",
            "es-ES": "Si la bandera de un equipo concreto está en manos de un miembro del equipo rival en Captura la bandera.",
            "es-MX": "Verifica si la bandera de un equipo determinado está siendo transportada por un miembro del equipo rival en Captura la bandera.",
            "fr-FR": "Si le drapeau d’une équipe spécifique est actuellement en la possession d’un membre de l’équipe adverse en mode Capture du drapeau.",
            "it-IT": "Specifica se la bandiera di una Squadra specifica sta venendo trasportata da un membro della Squadra avversaria in Cattura la Bandiera.",
            "ja-JP": "「キャプチャー・ザ・フラッグ」で特定チームのフラッグを敵チームのメンバーが持っているかどうか",
            "ko-KR": "깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.",
            "pl-PL": "Czy flaga określonej drużyny jest niesiona przez członka drużyny przeciwnej w Zdobywaniu flagi.",
            "pt-BR": "Se a bandeira de uma Equipe específica está sendo carregada ou não por um membro da equipe adversária no Capture a Bandeira.",
            "ru-RU": "Определяет несет ли участник команды соперников флаг указанной команды в режиме «Захват флага».",
            "zh-CN": "在勇夺锦旗模式下，指定队伍的旗帜是否在其基地内。"
        },
        "en-US": "Is Flag Being Carried",
        "es-MX": "La bandera está siendo transportada",
        "fr-FR": "Drapeau transporté",
        "ja-JP": "フラッグが運ばれている",
        "pt-BR": "É Bandeira Sendo Carregada",
        "zh-CN": "是否有人携带旗帜"
    },
    "isGameInProgress": {
        "description": "Whether the main phase of the match is in progress (during which time combat and scoring are allowed).",
        "args": [],
        "return": "bool",
        "guid": "00000000B35E",
        "descriptionLocalized": {
            "guid": "00000000BEF5",
            "en-US": "Whether the main phase of the match is in progress during which time combat and scoring are allowed.",
            "de-DE": "Ob die Hauptphase des Matches aktuell läuft die Zeit in der Kämpfe und Punkte erlaubt sind.",
            "es-ES": "Si la partida está en su fase principal periodo durante el cual están permitidos el combate y la puntuación.",
            "es-MX": "Verifica si la fase principal de la partida está en progreso durante este período el combate y la anotación de puntos están permitidos.",
            "fr-FR": "Si la phase principale de la partie pendant laquelle le combat et le calcul des points est autorisé est en cours.",
            "it-IT": "Specifica se la fase principale della partita è in atto durante la quale i combattimenti e l'avanzamento del punteggio è permesso.",
            "ja-JP": "マッチのメインフェーズが進行しているかどうか（戦闘およびスコア集計が可能な時間）",
            "ko-KR": "경기의 주요 단계전투 및 점수 산정이 허용되는 시기가 진행 중인지 여부입니다.",
            "pl-PL": "Czy główna faza meczu jest w toku kiedy walka i zdobywanie punktów są dozwolone.",
            "pt-BR": "Se a fase principal da partida está em andamento ou não o tempo durante o qual combate e pontuação são permitidos.",
            "ru-RU": "Определяет находится ли матч в основной фазе в которой ведется бой и набираются очки.",
            "zh-CN": "此比赛是否正在主要阶段（可以进行战斗并获得分数的阶段）。"
        },
        "en-US": "Is Game In Progress",
        "es-MX": "Partida en curso",
        "fr-FR": "Partie en cours",
        "ja-JP": "ゲームが進行中",
        "pt-BR": "É Jogo em Andamento",
        "zh-CN": "游戏正在进行中"
    },
    "isInLoS": {
        "description": "Whether two positions have line of sight with each other.",
        "args": [
            {
                "name": "START POS",
                "description": "The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE4D",
                    "en-US": "The start position for the line-of-sight check. If a Player is provided a position 2 meters above the Player's feet is used.",
                    "de-DE": "Die Ausgangsposition für die Sichtfeld-Prüfung. Wenn ein Spieler angegeben ist wird eine Position 2 Meter über den Füßen des Spielers verwendet.",
                    "es-ES": "Posición inicial para la comprobación de línea de visión. Si se indica un jugador se utiliza una posición 2 metros por encima de sus pies.",
                    "es-MX": "La posición inicial para la verificación de la línea de visión. Si se detecta a un jugador se utilizará una posición 2 metros sobre los pies del jugador.",
                    "fr-FR": "La position de départ pour la vérification de la ligne de vue. Si un joueur est indiqué une position située 2 mètres au-dessus des pieds du joueur sert de point de référence.",
                    "it-IT": "La posizione iniziale del controllo sulla linea di tiro. Se viene fornito un Giocatore viene utilizzata una posizione equivalente a 2 metri sopra i piedi dello stesso.",
                    "ja-JP": "射線チェックの開始位置。プレイヤーが指定されている場合、プレイヤーの足から2メートル上の位置が使用される",
                    "ko-KR": "시야 확인의 시작 위치입니다. 플레이어가 설정되어 있으면 해당 플레이어의 발 위로 2미터 위치가 사용됩니다.",
                    "pl-PL": "Pozycja startowa do weryfikacji pola widzenia. Jeśli podano gracza użyta zostanie pozycja 2 metry nad jego stopami.",
                    "pt-BR": "A posição inicial da verificação de linha de visão. Se um Jogador for atribuído será usada uma posição a 2 metros acima dos pés do Jogador.",
                    "ru-RU": "Начальная точка проверки прямой видимости. Если указан игрок то проверка проводится на высоте 2 метров от ступней игрока.",
                    "zh-CN": "用于进行视线检测的起点位置。如果此处填入一名玩家，则使用从此玩家脚部向上2米的位置。"
                }
            },
            {
                "name": "END POS",
                "description": "The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used.",
                "type": [
                    "Position",
                    "Player"
                ],
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE4C",
                    "en-US": "The end position for the line-of-sight check. If a Player is provided a position 2 meters above the Player's feet is used.",
                    "de-DE": "Die Endposition für die Sichtfeld-Prüfung. Wenn ein Spieler angegeben ist wird eine Position 2 Meter über den Füßen des Spielers verwendet.",
                    "es-ES": "Posición final para la comprobación de línea de visión. Si se indica un jugador se utiliza una posición 2 metros por encima de sus pies.",
                    "es-MX": "La posición final para la verificación de línea de visión. Si se detecta a un jugador se utilizará una posición 2 metros sobre los pies del jugador.",
                    "fr-FR": "La position de fin pour la vérification de la ligne de vue. Si un joueur est indiqué une position située 2 mètres au-dessus des pieds du joueur sert de point de référence.",
                    "it-IT": "La posizione finale del controllo sulla linea di tiro. Se viene fornito un Giocatore viene utilizzata una posizione equivalente a 2 metri sopra i piedi dello stesso.",
                    "ja-JP": "射線チェックの終了位置。プレイヤーが指定されている場合、プレイヤーの足から2メートル上の位置が使用される",
                    "ko-KR": "시야 확인의 종료 위치입니다. 플레이어가 설정되어 있으면 해당 플레이어의 발 위로 2미터 위치가 사용됩니다.",
                    "pl-PL": "Pozycja końcowa do weryfikacji pola widzenia. Jeśli podano gracza użyta zostanie pozycja 2 metry nad jego stopami.",
                    "pt-BR": "A posição final da verificação de linha de visão. Se um Jogador for atribuído será usada uma posição a 2 metros acima dos pés do Jogador.",
                    "ru-RU": "Конечная точка проверки прямой видимости. Если указан игрок то проверка проводится на высоте 2 метров от ступней игрока.",
                    "zh-CN": "用于进行视线检测的终点位置。如果此处填入一名玩家，则使用从此玩家脚部向上2米的位置。"
                }
            },
            {
                "name": "BARRIERS",
                "description": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.",
                "type": "BarrierLos",
                "default": "BARRIERS DO NOT BLOCK LOS",
                "descriptionLocalized": {
                    "en-US": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B1EC",
        "descriptionLocalized": {
            "guid": "00000000BE4E",
            "en-US": "Whether two positions have line of sight with each other.",
            "de-DE": "Ob zwei Positionen sich gegenseitig im Sichtfeld haben.",
            "es-ES": "Si dos posiciones tienen línea de visión entre sí.",
            "es-MX": "Verifica si las dos posiciones tienen línea de visión mutua.",
            "fr-FR": "Si les deux positions partagent une ligne de vue.",
            "it-IT": "Controlla se due posizioni hanno linea di tiro tra esse.",
            "ja-JP": "2つの位置でお互い射線が通っているかどうか",
            "ko-KR": "두 위치가 서로 보이는지 여부입니다.",
            "pl-PL": "Czy dwie pozycje znajdują się w swoim polu widzenia.",
            "pt-BR": "Se duas posições têm ou não linha de visão uma com a outra.",
            "ru-RU": "Определяет находятся ли две точки в прямой видимости друг у друга.",
            "zh-CN": "两个位置是否在彼此的视线内。"
        },
        "en-US": "Is In Line of Sight",
        "es-MX": "En la línea de visión",
        "fr-FR": "Dans la ligne de vue",
        "ja-JP": "射線が通っている",
        "pt-BR": "É Na Linha de Visão",
        "zh-CN": "在视线内"
    },
    "isInSetup": {
        "description": "Whether the match is currently in its setup phase.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35D",
        "descriptionLocalized": {
            "guid": "00000000BEF4",
            "en-US": "Whether the match is currently in its Setup phase.",
            "de-DE": "Ob das Match aktuell in der Aufstellungsphase ist.",
            "es-ES": "Si la partida actual está actualmente en la fase de preparación.",
            "es-MX": "Verifica si la partida está actualmente en la fase de preparación.",
            "fr-FR": "Si la partie est actuellement en phase Préparation.",
            "it-IT": "Specifica se la partita si trova nella fase Organizzazione.",
            "ja-JP": "現在マッチがセットアップ中かどうか",
            "ko-KR": "경기가 현재 준비 단계인지 여부입니다.",
            "pl-PL": "Czy mecz jest obecnie w fazie przygotowania.",
            "pt-BR": "Se a partida está na fase de Organização ou não.",
            "ru-RU": "Определяет находится ли матч в фазе подготовки.",
            "zh-CN": "此比赛是否正在准备阶段。"
        },
        "en-US": "Is In Setup",
        "es-MX": "En preparación",
        "fr-FR": "Dans les paramètres",
        "ja-JP": "セットアップ中",
        "pt-BR": "É em Organização",
        "zh-CN": "正在设置"
    },
    "isInSuddenDeath": {
        "description": "Whether the current game of capture the flag is in sudden death.",
        "args": [],
        "return": "bool",
        "guid": "00000000B3A4",
        "descriptionLocalized": {
            "guid": "00000000BF0B",
            "en-US": "Whether the current game of Capture The Flag is in sudden death.",
            "de-DE": "Ob es sich beim aktuellen Flaggeneroberungsspiel um eine K.o.-Runde handelt.",
            "es-ES": "Si la partida actual de Captura la bandera está en muerte súbita.",
            "es-MX": "Verifica si la partida actual de Captura la bandera está en muerte súbita.",
            "fr-FR": "Si la partie de Capture du drapeau en cours est en mode Mort subite.",
            "it-IT": "Specifica se l'attuale partita di Cattura la Bandiera è in modalità Scontro decisivo.",
            "ja-JP": "現在のキャプチャー・ザ・フラッグのゲームがサドンデス状態かどうか",
            "ko-KR": "현재 깃발 뺏기 게임이 승자 결정전인지 여부입니다.",
            "pl-PL": "Czy bieżącą rozgrywką w Zdobywaniu flagi jest Decydującym starciem.",
            "pt-BR": "Se o jogo atual de Capture a Bandeira está na morte súbita ou não.",
            "ru-RU": "Определяет находится ли текущая игра в режиме «Захват флага» в фазе последнего боя.",
            "zh-CN": "当前勇夺锦旗游戏是否处于绝杀局状态。"
        },
        "en-US": "Is CTF Mode In Sudden Death",
        "es-MX": "Modo CLB en muerte súbita",
        "fr-FR": "Capture du drapeau en mort subite",
        "ja-JP": "キャプチャー・ザ・フラッグ・モードがサドンデス中",
        "pt-BR": "É Modo CaB em Morte Súbita",
        "zh-CN": "在夺旗模式中开始绝杀局"
    },
    "isMatchBetweenRounds": {
        "description": "Whether the match is between rounds.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35F",
        "descriptionLocalized": {
            "guid": "00000000BEF6",
            "en-US": "Whether the match is between rounds.",
            "de-DE": "Ob das Match aktuell zwischen zwei Runden ist.",
            "es-ES": "Si la partida está entre rondas.",
            "es-MX": "Verifica si la partida está entre rondas.",
            "fr-FR": "Si la partie est en transition entre deux manches.",
            "it-IT": "Specifica se la partita si trova tra un round e l'altro.",
            "ja-JP": "マッチがラウンドの間かどうか",
            "ko-KR": "경기 중 라운드 전환 시기인지 여부입니다.",
            "pl-PL": "Czy mecz jest między rundami.",
            "pt-BR": "Se a partida está entre rodadas ou não.",
            "ru-RU": "Определяет происходит ли смена раундов в матче.",
            "zh-CN": "此比赛是否正在两个回合之间。"
        },
        "en-US": "Is Between Rounds",
        "es-MX": "Entre rondas",
        "fr-FR": "Entre deux manches",
        "ja-JP": "ラウンドの間",
        "pt-BR": "É Entre Rodadas",
        "zh-CN": "处于回合之间"
    },
    "isMatchComplete": {
        "description": "Whether the match has finished.",
        "args": [],
        "return": "bool",
        "guid": "00000000B360",
        "descriptionLocalized": {
            "guid": "00000000BEF7",
            "en-US": "Whether the match has finished.",
            "de-DE": "Ob das Match beendet wurde.",
            "es-ES": "Si la partida ha finalizado.",
            "es-MX": "Verifica si la partida ha finalizado.",
            "fr-FR": "Si la partie est terminée.",
            "it-IT": "Specifica se la partita è terminata.",
            "ja-JP": "マッチが終了したかどうか",
            "ko-KR": "경기가 완료되었는지 여부입니다.",
            "pl-PL": "Czy mecz się zakończył.",
            "pt-BR": "Se a partida terminou ou não.",
            "ru-RU": "Определяет завершен ли матч.",
            "zh-CN": "此比赛是否已经结束。"
        },
        "en-US": "Is Match Complete",
        "es-MX": "Partida Completada",
        "fr-FR": "Partie terminée",
        "ja-JP": "マッチが完了している",
        "pt-BR": "É Partida Concluída",
        "zh-CN": "比赛结束"
    },
    "isObjectiveComplete": {
        "description": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "NUMBER",
                "description": "The index of the objective to consider, starting at 0 and counting up. Each control point, payload checkpoint, and payload destination has its own index.",
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BEED",
                    "en-US": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index.",
                    "de-DE": "Der Index des zu berücksichtigenden Zielpunkts ab 0 gezählt. Jeder Kontrollpunkt Fracht-Checkpoint und Frachtzielpunkt hat seinen eigenen Index.",
                    "es-ES": "Índice del objetivo que se considera empezando a contar desde 0. Cada punto del modo control punto de control de la carga y destino de la carga tiene su propio índice.",
                    "es-MX": "El índice del objetivo que se considerará la cuenta comienza de 0 en adelante. Cada punto de captura punto de control de la carga y destino de la carga tiene su propio índice.",
                    "fr-FR": "L’index de l’objectif à prendre en compte débutant à 0 et progressant. Chaque point de contrôle point de contrôle de convoi et destination de convoi possède son propre index.",
                    "it-IT": "L'indice dell'obiettivo da considerare che incrementa a partire da 0. Ogni punto di controllo checkpoint del carico e destinazione del carico ha il suo indice specifico.",
                    "ja-JP": "検討される目標のインデックス。カウントは0から開始される。各コントロール・ポイント、ペイロード・チェックポイント、ペイロード目的地にはそれぞれにインデックスがある",
                    "ko-KR": "고려해야 하는 목표의 인덱스로서 0에서 시작하여 증가합니다. 각 거점 화물 경유지 화물 목적지에는 각기 고유의 인덱스가 있습니다.",
                    "pl-PL": "Indeks zadania do uwzględnienia zaczynając od 0 i licząc w górę. Każdy punkt kontrolny punkt kontrolny ładunku i miejsce docelowe ładunku posiadają własny indeks.",
                    "pt-BR": "O índice do objetivo a ser considerado iniciando em 0 e somando. Cada ponto de controle ponto de verificação de carga e destino de carga tem seu próprio índice.",
                    "ru-RU": "Индекс рассматриваемой задачи от 0 и выше. Каждая контрольная точка объект контрольная или конечная точка доставки груза имеют свой индекс.",
                    "zh-CN": "考察的目标点的索引，从0开始逐渐累加。每个控制点、运载目标检查点、运载目标目的地都有其独自的索引。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B378",
        "en-US": "Is Objective Complete",
        "es-MX": "Objetivo completado",
        "fr-FR": "Objectif accompli",
        "ja-JP": "目標をクリアした",
        "pt-BR": "É Objetivo Concluído",
        "zh-CN": "目标是否完成"
    },
    "isTeamOnDefense": {
        "description": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEEF",
                    "en-US": "The Team whose role to check.",
                    "de-DE": "Das Team dessen Rolle geprüft werden soll.",
                    "es-ES": "Equipo cuyo papel se comprueba.",
                    "es-MX": "El equipo cuyo rol se verificará.",
                    "fr-FR": "L’équipe dont il faut vérifier le rôle.",
                    "it-IT": "La Squadra il cui ruolo sarà controllato.",
                    "ja-JP": "ロールを確認するチーム",
                    "ko-KR": "역할을 확인할 팀입니다.",
                    "pl-PL": "Drużyna której rola zostanie sprawdzona.",
                    "pt-BR": "A Equipe cuja função será verificada.",
                    "ru-RU": "Команда роль которой нужно проверить.",
                    "zh-CN": "检查此队伍的职责。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B359",
        "descriptionLocalized": {
            "guid": "00000000BEF1",
            "en-US": "Whether the specified Team is currently on defense. Results in False if the game mode is not Assault Escort or AssaultEscort.",
            "de-DE": "Ob das festgelegte Team aktuell in der Defensive ist. Ergibt False wenn der Spielmodus nicht Angriff Eskorte oder AngriffEskorte ist.",
            "es-ES": "Si el equipo especificado es el defensor ahora mismo. El resultado es «False» si el modo de juego no es asalto escolta o asaltoescolta.",
            "es-MX": "Verifica si el equipo especificado está actualmente en defensa. El resultado será falso si el modo de juego no es Asalto Escolta o AsaltoEscolta.",
            "fr-FR": "Si l’équipe spécifiée est actuellement en défense. Renvoie un résultat « Faux » si le mode de jeu n’est pas Attaque Escorte ou AttaqueEscorte.",
            "it-IT": "Specifica se la Squadra specificata è attualmente in difesa. Risulta False se la mappa non è di conquista trasporto o conquistatrasporto.",
            "ja-JP": "指定したチームが現在防衛側かどうか。ゲーム・モードがアサルト、エスコート、アサルトエスコート以外の場合は「FALSE」を返す",
            "ko-KR": "지정된 팀이 현재 수비 중인지 여부입니다. 게임 모드가 점령 호위 또는 점령호위가 아닌 경우 결과값은 False입니다.",
            "pl-PL": "Czy określona drużyna jest aktualnie w defensywie. Wynik to „False” Fałsz jeśli trybem gry nie jest Szturm Eskorta ani SzturmEskorta.",
            "pt-BR": "Se a Equipe especificada está na defesa ou não. Retorna o resultado Falso se o modo de jogo não for Ataque Escolta ou AtaqueEscolta.",
            "ru-RU": "Определяет защищается ли указанная команда. Возвращает ложное значение False во всех режимах кроме режимов захвата сопровождения и гибридного режима.",
            "zh-CN": "指定队伍是否是防守方。如果游戏模式不是攻防作战、护送、或攻击护送，则结果为“假”。"
        },
        "en-US": "Is Team On Defense",
        "es-MX": "Equipo defensor",
        "fr-FR": "Équipe en défense",
        "ja-JP": "防衛側のチーム",
        "pt-BR": "É Equipe na Defensa",
        "zh-CN": "正在防守"
    },
    "isTeamOnOffense": {
        "description": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose role to check.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEEF",
                    "en-US": "The Team whose role to check.",
                    "de-DE": "Das Team dessen Rolle geprüft werden soll.",
                    "es-ES": "Equipo cuyo papel se comprueba.",
                    "es-MX": "El equipo cuyo rol se verificará.",
                    "fr-FR": "L’équipe dont il faut vérifier le rôle.",
                    "it-IT": "La Squadra il cui ruolo sarà controllato.",
                    "ja-JP": "ロールを確認するチーム",
                    "ko-KR": "역할을 확인할 팀입니다.",
                    "pl-PL": "Drużyna której rola zostanie sprawdzona.",
                    "pt-BR": "A Equipe cuja função será verificada.",
                    "ru-RU": "Команда роль которой нужно проверить.",
                    "zh-CN": "检查此队伍的职责。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B354",
        "descriptionLocalized": {
            "guid": "00000000BEEE",
            "en-US": "Whether the specified Team is currently on offense. Results in False if the game mode is not Assault Escort or AssaultEscort.",
            "de-DE": "Ob das festgelegte Team aktuell in der Offensive ist. Ergibt False wenn der Spielmodus nicht Angriff Eskorte oder AngriffEskorte ist.",
            "es-ES": "Si el equipo especificado es el atacante ahora mismo. El resultado es «False» si el modo de juego no es asalto escolta o asaltoescolta.",
            "es-MX": "Verifica si el equipo especificado está actualmente al ataque. El resultado será falso si el modo de juego no es Asalto Escolta o AsaltoEscolta.",
            "fr-FR": "Si l’équipe spécifiée est actuellement en attaque. Renvoie un résultat « Faux » si le mode de jeu n’est pas Attaque Escorte ou AttaqueEscorte.",
            "it-IT": "Specifica se la Squadra specificata è attualmente in attacco. Risulta False se la modalità non è Conquista Trasporto o ConquistaTrasporto.",
            "ja-JP": "指定したチームが現在攻撃側かどうか。ゲーム・モードがアサルト、エスコート、アサルトエスコート以外の場合は「FALSE」を返す",
            "ko-KR": "지정된 팀이 현재 공격 중인지 여부입니다. 게임 모드가 점령 호위 또는 점령호위가 아닌 경우 결과값은 False입니다.",
            "pl-PL": "Czy określona drużyna jest aktualnie w ofensywie. Wynik to „False” Fałsz jeśli trybem gry nie jest Szturm Eskorta ani SzturmEskorta.",
            "pt-BR": "Se a Equipe especificada está no ataque ou não. Retorna o resultado Falso se o modo de jogo não for Ataque Escolta ou AtaqueEscolta.",
            "ru-RU": "Определяет нападает ли указанная команда. Возвращает ложное значение False во всех режимах кроме режимов захвата сопровождения и гибридного режима.",
            "zh-CN": "指定队伍是否是进攻方。如果游戏模式不是攻防作战、护送、或攻击护送，则结果为“假”。"
        },
        "en-US": "Is Team On Offense",
        "es-MX": "Equipo atacante",
        "fr-FR": "Équipe en attaque",
        "ja-JP": "攻撃側のチーム",
        "pt-BR": "É Equipe no Ataque",
        "zh-CN": "作为进攻队伍"
    },
    "isWaitingForPlayers": {
        "description": "Whether the match is waiting for players to join before starting.",
        "args": [],
        "return": "bool",
        "guid": "00000000B35B",
        "descriptionLocalized": {
            "guid": "00000000BEF2",
            "en-US": "Whether the match is waiting for Players to join before starting.",
            "de-DE": "Ob das Match vor seinem Beginn auf beitretende Spieler wartet.",
            "es-ES": "Si la partida está esperando a que los jugadores se unan para poder empezar.",
            "es-MX": "Verifica si la partida está esperando a que los jugadores se unan antes de comenzar.",
            "fr-FR": "Si la partie est en attente de l’arrivée des joueurs avant le début.",
            "it-IT": "Specifica se la partita è in attesa di Giocatori per iniziare.",
            "ja-JP": "現在マッチが開始前でほかのプレイヤーを待っているかどうか",
            "ko-KR": "경기 시작에 앞서 플레이어가 참여하기를 기다리고 있는지 여부입니다.",
            "pl-PL": "Czy mecz jest w fazie oczekiwania na dołączenie graczy przed startem.",
            "pt-BR": "Se a partida está aguardando a entrada de Jogadores antes de iniciar.",
            "ru-RU": "Определяет находится ли матч в режиме ожидания игроков перед началом.",
            "zh-CN": "此比赛是否正在等待玩家加入。"
        },
        "en-US": "Is Waiting For Players",
        "es-MX": "Esperando jugadores",
        "fr-FR": "En attente de joueurs",
        "ja-JP": "ほかのプレイヤーを待っている",
        "pt-BR": "É Aguardando Jogadores",
        "zh-CN": "正在等待玩家"
    },
    "len": {
        "description": "The number of elements in the specified array. For strings, use `strLen`.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose elements will be counted.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BE95",
                    "en-US": "The array whose elements will be counted.",
                    "de-DE": "Das Array dessen Elemente gezählt werden.",
                    "es-ES": "Matriz cuyos elementos se cuentan.",
                    "es-MX": "La matriz cuyos elementos serán contados.",
                    "fr-FR": "Le tableau dont les éléments seront comptés.",
                    "it-IT": "L'array i cui elementi saranno contati.",
                    "ja-JP": "要素がカウントされる配列",
                    "ko-KR": "요소의 개수를 셀 배열입니다.",
                    "pl-PL": "Tabela której elementy zostaną policzone.",
                    "pt-BR": "A Matriz cujos elementos serão contados.",
                    "ru-RU": "Массив количество элементов в котором нужно подсчитать.",
                    "zh-CN": "计算此数组的元素个数。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "00000000B26E",
        "en-US": "Count Of",
        "es-MX": "Conteo de",
        "fr-FR": "Décompte de",
        "ja-JP": "カウント: ",
        "pt-BR": "Contagem de",
        "zh-CN": "数量"
    },
    "localPlayer": {
        "description": "The player being controlled on the end user's computer. This value is different for each end user and thus can only be accessed in actions which affect visuals or the HUD. This value cannot be stored in variables.",
        "args": null,
        "return": "Player",
        "guid": "000000012BB1",
        "en-US": "Local Player",
        "es-MX": "Jugador local",
        "fr-FR": "Joueur local",
        "ja-JP": "ローカルプレイヤー",
        "pt-BR": "Jogador Local",
        "zh-CN": "本地玩家"
    },
    "localVector": {
        "description": "The vector in local coordinates corresponding to the provided vector in world coordinates.",
        "args": [
            {
                "name": "WORLD VECTOR",
                "description": "The vector in world coordinates that will be converted to local coordinates.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BEE4",
                    "en-US": "The Vector in world coordinates that will be converted to local coordinates.",
                    "de-DE": "Der Vektor in Weltkoordinaten der in lokale Koordinaten umgewandelt wird.",
                    "es-ES": "Vector en coordenadas del mundo que se convertirá a coordenadas locales.",
                    "es-MX": "El vector en coordenadas globales que se convertirá en coordenadas locales.",
                    "fr-FR": "Le vecteur en coordonnées mondiales qui sera converti en coordonnées locales.",
                    "it-IT": "Il Vettore in coordinate del mondo di gioco che sarà convertito in coordinate locali.",
                    "ja-JP": "ローカル座標に変換されるワールド座標のベクトル",
                    "ko-KR": "로컬 좌표로 전환될 월드 좌표 벡터입니다.",
                    "pl-PL": "Parametr „Vector” Wektor we współrzędnych świata który zostanie przekonwertowany na lokalne współrzędne.",
                    "pt-BR": "O Vetor em coordenadas do mundo que será convertido em coordenadas locais.",
                    "ru-RU": "Вектор в глобальной системе координат который нужно перенести в локальную систему координат.",
                    "zh-CN": "将此相对地图坐标的矢量值转化为相对于本地坐标的矢量值。"
                }
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the resulting vector will be relative.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEE3",
                    "en-US": "The Player to whom the resulting Vector will be relative.",
                    "de-DE": "Der Spieler zu dem der resultierende Vektor relativ ist.",
                    "es-ES": "Jugador al que será relativo el vector resultante.",
                    "es-MX": "El jugador vinculado al vector resultante.",
                    "fr-FR": "Le joueur auquel se rapportera le vecteur résultant.",
                    "it-IT": "Il Giocatore a cui il Vettore risultante farà riferimento.",
                    "ja-JP": "結果として生じるベクトルに関連するプレイヤー",
                    "ko-KR": "결과 벡터와 연관될 플레이어입니다.",
                    "pl-PL": "Gracz do którego odnosi się wynikowy parametr „Vector” Wektor.",
                    "pt-BR": "O Jogador a quem o Vetor resultante será relativo.",
                    "ru-RU": "Игрок относительно которого строится результирующий вектор.",
                    "zh-CN": "本地矢量是相对此玩家的。"
                }
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "Transform",
                "default": "ROTATION",
                "descriptionLocalized": {
                    "guid": "00000000BEE1",
                    "en-US": "Specifies whether the Vector should receive a rotation and a translation usually applied to positions or only a rotation usually applied to directions and velocities.",
                    "de-DE": "Legt fest ob der Vektor eine Rotation und eine Parallelverschiebung erhalten soll für gewöhnlich bei Positionen oder nur eine Rotation für gewöhnlich bei Richtungen und Geschwindigkeiten.",
                    "es-ES": "Especifica si el vector debe recibir una rotación y una traslación normalmente aplicadas a posiciones o solo una rotación normalmente aplicada a direcciones y velocidades.",
                    "es-MX": "Especifica si el vector debería recibir una rotación y una traslación por lo general aplicada a las posiciones o solo una rotación por lo general aplicada a las direcciones y las velocidades.",
                    "fr-FR": "Spécifie s’il faut appliquer au vecteur une rotation et une translation généralement appliquées aux positions ou uniquement une rotation généralement appliquée aux directions et aux vélocités.",
                    "it-IT": "Specifica se il Vettore deve ricevere una rotazione e una traslazione solitamente applicate a posizioni o solo una rotazione solitamente applicata a direzioni e velocità direzionali.",
                    "ja-JP": "ベクトルが平行移動および回転を行う（通常は位置に適用）のか、回転のみを行う（通常は方向および速度に適用）のか指定する",
                    "ko-KR": "벡터가 회전과 평행이동을 받는지일반적으로 위치에 적용 아니면 회전만 받는지일반적으로 방향 및 속도에 적용 여부를 설정합니다.",
                    "pl-PL": "Określa czy parametr „Vector” Wektor powinien otrzymać rotację i przełożenie zazwyczaj stosowane do pozycji czy tylko rotację zazwyczaj stosowaną do kierunków i prędkości.",
                    "pt-BR": "Especifica se o Vetor deve receber uma rotação e uma translação geralmente aplicada a posições ou apenas uma rotação geralmente aplicada a direções e velocidades.",
                    "ru-RU": "Определяет требуется ли для вектора поворот и смещение обычно применяется к местоположениям или только поворот обычно применяется к направлениям и векторным скоростям.",
                    "zh-CN": "指定此矢量是否接受旋转及平移（通常是位置），或者只接受旋转（通常是方向和速度）。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000B342",
        "descriptionLocalized": {
            "guid": "00000000BEE5",
            "en-US": "The Vector in local coordinates corresponding to the provided Vector in world coordinates.",
            "de-DE": "Der Vektor in lokalen Koordinaten der dem angegebenen Vektor in Weltkoordinaten entspricht.",
            "es-ES": "Vector en coordenadas locales que corresponde al indicado en coordenadas del mundo.",
            "es-MX": "El vector en coordenadas locales correspondiente al vector proporcionado en coordenadas globales.",
            "fr-FR": "Le vecteur en coordonnées locales correspondant au vecteur indiqué en coordonnées mondiales.",
            "it-IT": "Il Vettore in coordinate locali che corrisponde al Vettore fornito in coordinate del mondo di gioco.",
            "ja-JP": "与えられたワールド座標のベクトルに対応するローカル座標のベクトル",
            "ko-KR": "제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.",
            "pl-PL": "Parametr „Vector” Wektor w lokalnych współrzędnych odpowiadający podanemu parametrowi „Vector” Wektor we współrzędnych świata.",
            "pt-BR": "O Vetor em coordenadas locais correspondente ao Vetor fornecido em coordenadas do mundo.",
            "ru-RU": "Вектор в локальной системе координат соответствующий вектору указанному в глобальной системе координат.",
            "zh-CN": "相对于本地坐标的矢量值，与所提供的相对地图坐标的矢量值对应。"
        },
        "en-US": "Local Vector Of",
        "es-MX": "Vector local de",
        "fr-FR": "Vecteur local de",
        "ja-JP": "ローカルのベクトル: ",
        "pt-BR": "Vetor Local de",
        "zh-CN": "本地矢量"
    },
    "magnitude": {
        "description": "The magnitude (length) of the specified vector",
        "args": [
            {
                "name": "vector",
                "description": "The vector to calculate the magnitude of.",
                "type": "Vector",
                "default": "Vector",
                "descriptionLocalized": {
                    "en-US": "The vector to calculate the magnitude of.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "000000011F55",
        "en-US": "Magnitude Of",
        "es-MX": "Magnitud de",
        "fr-FR": "Ampleur de",
        "ja-JP": "変化の大きさ:",
        "pt-BR": "Magnitude de",
        "zh-CN": "幅值"
    },
    "max": {
        "guid": "00000000C418",
        "description": "The greater of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C412",
                    "en-US": "The left-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "左側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "左边的运算量，可以是结果为数字的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C413",
                    "en-US": "The right-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "右側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "右边的运算量，可以是结果为数字的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "descriptionLocalized": {
            "guid": "00000000C419",
            "en-US": "The greater of two numbers.",
            "de-DE": "Die größere von zwei Zahlen.",
            "es-ES": "El mayor de dos números.",
            "es-MX": "El mayor de dos números.",
            "fr-FR": "Le plus grand de deux nombres.",
            "it-IT": "Il maggiore tra due numeri.",
            "ja-JP": "2つの数値のうちの値の大きいほう",
            "ko-KR": "두 숫자 중 높은 수입니다.",
            "pl-PL": "Większa z dwóch liczb.",
            "pt-BR": "O maior de dois números.",
            "ru-RU": "Большее из двух чисел.",
            "zh-CN": "两个数字中较大的一个。"
        },
        "en-US": "Max",
        "es-MX": "Máximo",
        "fr-FR": "Maximum",
        "ja-JP": "最大",
        "pt-BR": "Máx.",
        "zh-CN": "较大"
    },
    "min": {
        "guid": "00000000C416",
        "description": "The lesser of two numbers.",
        "args": [
            {
                "name": "VALUE",
                "description": "The left-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C412",
                    "en-US": "The left-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der linke Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte izquierda. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado izquierdo. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de gauche. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a sinistra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "左側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "좌측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Lewostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado esquerdo. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Левый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "左边的运算量，可以是结果为数字的值。"
                }
            },
            {
                "name": "VALUE",
                "description": "The right-hand operand. May be any value that results in a number.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C413",
                    "en-US": "The right-hand operand. May be any Value that results in a number.",
                    "de-DE": "Der rechte Operand. Kann jeden Wert annehmen aus dem sich eine Zahl ergibt.",
                    "es-ES": "Operando de la parte derecha. Puede ser cualquier valor que tenga un número como resultado.",
                    "es-MX": "El operando del lado derecho. Puede ser cualquier valor cuyo resultado sea un número.",
                    "fr-FR": "L’opérande de droite. N’importe quel type de valeur est valide si elle donne un nombre.",
                    "it-IT": "L'operando a destra. Può essere qualsiasi Valore che risulti in un numero.",
                    "ja-JP": "右側の被演算子。数値として導き出される値になる場合がある",
                    "ko-KR": "우측 피연산자입니다. 결과값이 숫자로 나올 수 있는 아무 값이나 사용할 수 있습니다.",
                    "pl-PL": "Prawostronny operand. Może być dowolną wartością której wynikiem jest liczba.",
                    "pt-BR": "O operando do lado direito. Pode ser qualquer Valor que resulte em um número.",
                    "ru-RU": "Правый операнд. Можно использовать любое значение возвращающее число.",
                    "zh-CN": "右边的运算量，可以是结果为数字的值。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "descriptionLocalized": {
            "guid": "00000000C417",
            "en-US": "The lesser of two numbers.",
            "de-DE": "Die kleinere von zwei Zahlen.",
            "es-ES": "El menor de dos números.",
            "es-MX": "El menor de dos números.",
            "fr-FR": "Le moins grand de deux nombres.",
            "it-IT": "Il minore tra due numeri.",
            "ja-JP": "2つの数値のうちの値の小さいほう",
            "ko-KR": "두 숫자 중 낮은 수입니다.",
            "pl-PL": "Mniejsza z dwóch liczb.",
            "pt-BR": "O menor de dois números.",
            "ru-RU": "Меньшее из двух чисел.",
            "zh-CN": "两个数字中较小的一个。"
        },
        "en-US": "Min",
        "es-MX": "Mínimo",
        "fr-FR": "Minimum",
        "ja-JP": "分",
        "pt-BR": "Mín.",
        "zh-CN": "较小"
    },
    "nearestWalkablePosition": {
        "description": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
        "args": [
            {
                "name": "POSITION",
                "description": "The position from which to search for the nearest walkable position.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C327",
                    "en-US": "The position from which to search for the nearest walkable position.",
                    "de-DE": "Die Position deren nächstgelegene begehbare Position gesucht wird.",
                    "es-ES": "Posición desde la que se busca la posición más cercana por la que se pueda andar.",
                    "es-MX": "La posición desde la cual se buscará la posición caminable más cercana.",
                    "fr-FR": "La position à partir de laquelle déterminer la surface la plus proche sur laquelle il est possible de marcher.",
                    "it-IT": "La posizione dalla quale cercare la più vicina posizione accessibile.",
                    "ja-JP": "最も近い歩行可能な位置の検索を行う位置",
                    "ko-KR": "가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.",
                    "pl-PL": "Pozycja z której należy szukać najbliższej pozycji do której można dojść.",
                    "pt-BR": "A posição de onde buscar a posição transitável mais próxima.",
                    "ru-RU": "Точка от которой нужно искать ближайшую проходимую точку.",
                    "zh-CN": "寻找此位置附近最近的可行走位置。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000C324",
        "descriptionLocalized": {
            "guid": "00000000C325",
            "en-US": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
            "de-DE": "Die der festgelegten Position nächstliegende Position auf der Spieler stehen können und die von einem Erscheinungspunkt aus zu erreichen ist.",
            "es-ES": "Posición más cercana a la posición especificada sobre la que se puede estar de pie y es accesible desde un punto de aparición.",
            "es-MX": "La posición más cercana a la posición especificada en la que los jugadores pueden caminar y a la que pueden acceder desde un punto de reaparición.",
            "fr-FR": "La position la plus proche de celle spécifiée sur laquelle il est possible de se tenir et qui est accessible depuis un point d’apparition.",
            "it-IT": "La posizione più vicina a quella specificata in cui è possibile trovarsi eo è accessibile da un'area di partenza.",
            "ja-JP": "歩行可能かつスポーン地点から進入可能な指定位置に最も近い位置",
            "ko-KR": "서 있을 수 있고 생성 지점에서 접근 가능하며 지정된 위치에서 가장 가까운 위치입니다.",
            "pl-PL": "Pozycja najbliżej określonej pozycji na której można stanąć i jest dostępna z punktu startowego.",
            "pt-BR": "A posição mais próxima da posição especificada onde se pode ficar de pé e à qual se pode chegar saindo de um ponto de ressurgimento.",
            "ru-RU": "Ближайшее к указанной точке место на котором можно стоять и которое доступно с точки возрождения.",
            "zh-CN": "与指定位置最接近的、可以站立且能够从一个重生点到达的位置。"
        },
        "en-US": "Nearest Walkable Position",
        "es-MX": "Posición caminable más cercana",
        "fr-FR": "Position la plus proche en marchant",
        "ja-JP": "最も近い歩行可能な位置",
        "pt-BR": "Posição Transitável Mais Próxima",
        "zh-CN": "最近的可行走位置"
    },
    "normalize": {
        "description": "The unit-length normalization of a vector.",
        "args": [
            {
                "name": "VECTOR",
                "description": "The vector to normalize.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000C34C",
                    "en-US": "The Vector to normalize.",
                    "de-DE": "Der zu normierende Vektor.",
                    "es-ES": "Vector que se normaliza.",
                    "es-MX": "El vector que se normalizará.",
                    "fr-FR": "Le vecteur à normaliser.",
                    "it-IT": "Il Vettore da normalizzare.",
                    "ja-JP": "正規化するベクトル",
                    "ko-KR": "정규화할 벡터입니다.",
                    "pl-PL": "Parametr „Vector” Wektor do normalizacji.",
                    "pt-BR": "O Vetor a ser normalizado.",
                    "ru-RU": "Вектор который нужно нормализовать.",
                    "zh-CN": "要归一化的矢量。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Vector",
        "guid": "00000000C344",
        "descriptionLocalized": {
            "guid": "00000000C345",
            "en-US": "The unit-length normalization of a Vector.",
            "de-DE": "Das Normieren eines Vektors auf Einheitenlänge.",
            "es-ES": "Normalización de longitud de unidad de un vector.",
            "es-MX": "La normalización unitaria de un vector.",
            "fr-FR": "La normalisation d’unité de longueur d’un vecteur.",
            "it-IT": "La normalizzazione di lunghezza unitaria di un Vettore.",
            "ja-JP": "ベクトル正規化の単位長さ",
            "ko-KR": "벡터의 단위 길이 정규화입니다.",
            "pl-PL": "Jednostkowa normalizacja parametru „Vector” Wektor.",
            "pt-BR": "A normalização unitária de um Vetor.",
            "ru-RU": "Приведение вектора к единичной длине.",
            "zh-CN": "将矢量归一化为单位长度。"
        },
        "en-US": "Normalize",
        "es-MX": "Normalizar",
        "fr-FR": "Normalisation",
        "ja-JP": "正規化",
        "pt-BR": "Normalizar",
        "zh-CN": "归一化"
    },
    "null": {
        "description": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
        "args": null,
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B594",
        "descriptionLocalized": {
            "guid": "00000000BF15",
            "en-US": "The absence of a Player. Used when no Player is desired for a particular Input. Equivalent to the real number 0 for the purposes of comparison and debugging.",
            "de-DE": "Die Abwesenheit eines Spielers. Wird verwendet wenn kein Spieler für eine bestimmte Eingabe gewünscht wird. Entspricht der reellen Zahl 0 für Vergleichs- und Debugging-Zwecke.",
            "es-ES": "Ausencia de un jugador. Se utiliza cuando no se quiere ningún jugador para una entrada concreta. Equivale al número real «0» a efectos de comparación y depuración.",
            "es-MX": "La ausencia de un jugador. Se utiliza cuando se desea que no haya ningún jugador para una entrada determinada. Equivale al número real 0 para la solución de errores y la comparación.",
            "fr-FR": "L’absence d’un joueur. Utilisé lorsqu’aucun joueur n’est souhaité pour une entrée particulière. Équivalent au nombre réel 0 à des fins de comparaison et de débogage.",
            "it-IT": "L'assenza di un Giocatore. Usato quando nessun Giocatore è necessario per un Input particolare. Equivalente al numero reale 0 nell'ambito di confronti e debug.",
            "ja-JP": "プレイヤーの不在を表す。特定の入力にプレイヤーを使いたくない時に使用される。比較やデバッグのため、実数0と同等である",
            "ko-KR": "플레이어가 없음을 나타냅니다. 지정된 입력 정보에 플레이어를 지정하고 싶지 않을 때 사용할 수 있습니다. 비교 또는 디버그용으로 실수 0을 사용하는 것과 동일합니다.",
            "pl-PL": "Nieobecność gracza. Używane gdy dla danych wejściowych nie jest wymagany żaden gracz. Równoważne z rzeczywistą liczbą 0 dla celów porównania i debugowania.",
            "pt-BR": "A ausência de um Jogador. Usado quando nenhum Jogador é desejado em uma Entrada em particular. Equivalente ao número real 0 para fins de comparação de debug.",
            "ru-RU": "Отсутствие игрока. Используется когда указывать игрока в аргументе нежелательно. Аналогично действительному числу 0 при сравнениях или отладке.",
            "zh-CN": "一名玩家已离开。当没有玩家进行输入时使用。在用来比较或测试时等效于实数0。"
        },
        "en-US": "Null",
        "es-MX": "Nulo",
        "fr-FR": "Non applicable",
        "ja-JP": "NULL",
        "pt-BR": "Nulo",
        "zh-CN": "无"
    },
    "random.choice": {
        "description": "A random value from the specified array.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF1C",
                    "en-US": "The array from which to randomly take a Value. If a non-array Value is provided the result is simply the provided Value.",
                    "de-DE": "Das Array aus dem zufällig ein Wert bezogen wird. Wenn ein Wert außerhalb des Arrays angegeben wird ist das Ergebnis einfach der angegebene Wert.",
                    "es-ES": "Matriz de la que se extrae un valor aleatorio. Si se indica un valor que no está en la matriz el resultado será simplemente el valor proporcionado.",
                    "es-MX": "La matriz a partir de la cual se tomará un valor aleatoriamente. Si se proporciona un valor no matricial el resultado será simplemente el valor proporcionado.",
                    "fr-FR": "Le tableau dont il faut extraire une valeur aléatoire. Si une valeur étrangère au tableau est indiquée le résultat retournera simplement la valeur indiquée.",
                    "it-IT": "L'array dal quale estrarre casualmente un Valore. Se viene fornito un Valore non appartenente all'array il risultato fornito equivale al Valore stesso.",
                    "ja-JP": "値をランダム取得する配列。非配列の値が指定されている、結果は指定の値となる",
                    "ko-KR": "무작위 값을 취할 배열입니다. 배열이 아닌 값이 주어진 경우 주어진 값이 그대로 결과값이 됩니다.",
                    "pl-PL": "Tabela z której losowo pobierana jest wartość. Jeśli wartość nie pochodzi z tabeli wynikiem jest po prostu podana wartość.",
                    "pt-BR": "A matriz da qual um Valor será obtido aleatoriamente. Se um Valor que não é de matriz for fornecido o resultado será simplesmente o Valor fornecido.",
                    "ru-RU": "Массив из которого берется случайное значение. Если передан не массив возвращается само переданное значение.",
                    "zh-CN": "从一个数组中随机取值。如果提供的值不是数组，则结果为提供的值。"
                }
            }
        ],
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B599",
        "descriptionLocalized": {
            "guid": "00000000BF1D",
            "en-US": "A random Value from the specified array.",
            "de-DE": "Ein zufälliger Wert aus dem festgelegten Array.",
            "es-ES": "Un valor aleatorio de la matriz especificada.",
            "es-MX": "Un valor aleatorio de la matriz especificada.",
            "fr-FR": "Une valeur aléatoire du tableau spécifié.",
            "it-IT": "Un Valore casuale di un array specificato.",
            "ja-JP": "指定した配列のランダムな値",
            "ko-KR": "지정된 배열의 무작위 값입니다.",
            "pl-PL": "Losowa wartość z określonej tabeli.",
            "pt-BR": "Um Valor aleatório da matriz especificada.",
            "ru-RU": "Случайное значение из указанного массива.",
            "zh-CN": "指定数组中的一个随机值。"
        },
        "en-US": "Random Value In Array",
        "es-MX": "Valor aleatorio en matriz",
        "fr-FR": "Valeur aléatoire dans le tableau",
        "ja-JP": "配列内のランダムな値",
        "pt-BR": "Valor Aleatório na Matriz",
        "zh-CN": "数组随机取值"
    },
    "random.randint": {
        "description": "A random integer between the specified min and max, inclusive.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF17",
                    "en-US": "The smallest integer allowed. If a real Number is provided to this Input it is rounded to the nearest integer.",
                    "de-DE": "Die kleinste zulässige Ganzzahl. Wenn eine reelle Zahl für diese Eingabe verwendet wird wird sie auf die nächste Ganzzahl gerundet.",
                    "es-ES": "Número entero más bajo permitido. Si se indica un número real en esta entrada se redondea al número entero más cercano.",
                    "es-MX": "El número entero mínimo permitido. Si se detecta un número real en esta entrada se redondeará al número entero más cercano.",
                    "fr-FR": "Le plus petit nombre entier autorisé. Si un nombre réel est indiqué pour cette entrée il est arrondi au nombre entier le plus proche.",
                    "it-IT": "Il numero intero più piccolo permesso. Se a questo Input viene fornito un Numero reale esso viene arrotondato al numero intero più vicino.",
                    "ja-JP": "使用できる整数の最小値この入力に実数が指定されている場合、最も近い整数に四捨五入される",
                    "ko-KR": "허용된 최소 정수입니다. 이 입력 정보에 실수가 주어진 경우 가장 근접한 정수로 반올림됩니다.",
                    "pl-PL": "Najmniejsza dozwolona liczba całkowita. Jeśli podano liczbę rzeczywistą zostanie ona zaokrąglona do najbliższej liczby całkowitej.",
                    "pt-BR": "O menor número inteiro permitido. Se um Número real for fornecido nesta Entrada será arredondado para o inteiro mais próximo.",
                    "ru-RU": "Минимально допустимое целое число. Если указано действительное число то оно округляется до ближайшего целого.",
                    "zh-CN": "允许的最小整数。如果此处输入的是一个实数，则取最接近此实数的整数。"
                }
            },
            {
                "name": "MAX",
                "description": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer.",
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF18",
                    "en-US": "The largest integer allowed. If a real Number is provided to this Input it is rounded to the nearest integer.",
                    "de-DE": "Die größte zulässige Ganzzahl. Wenn eine reelle Zahl für diese Eingabe verwendet wird wird sie auf die nächste Ganzzahl gerundet.",
                    "es-ES": "Número entero más alto permitido. Si se indica un número real en esta entrada se redondea al número entero más cercano.",
                    "es-MX": "El número entero máximo permitido. Si se detecta un número real en esta entrada se redondeará al número entero más cercano.",
                    "fr-FR": "Le plus grand nombre entier autorisé. Si un nombre réel est indiqué pour cette entrée il est arrondi au nombre entier le plus proche.",
                    "it-IT": "Il numero intero più grande permesso. Se a questo Input viene fornito un Numero reale esso viene arrotondato al numero intero più vicino.",
                    "ja-JP": "使用できる整数の最大値この入力に実数が指定されている場合、最も近い整数に四捨五入される",
                    "ko-KR": "허용된 최대 정수입니다. 이 입력 정보에 실수가 주어진 경우 가장 근접한 정수로 반올림됩니다.",
                    "pl-PL": "Największa dozwolona liczba całkowita. Jeśli podano liczbę rzeczywistą zostanie ona zaokrąglona do najbliższej liczby całkowitej.",
                    "pt-BR": "O maior número inteiro permitido. Se um Número real for fornecido nesta Entrada será arredondado para o inteiro mais próximo.",
                    "ru-RU": "Максимально допустимое целое число. Если указано действительное число то оно округляется до ближайшего целого.",
                    "zh-CN": "允许的最大整数。如果此处输入的是一个实数，则取最接近此实数的整数。"
                }
            }
        ],
        "return": "int",
        "guid": "00000000B59B",
        "descriptionLocalized": {
            "guid": "00000000BF16",
            "en-US": "A random integer between the specified Min and Max inclusive.",
            "de-DE": "Eine zufällige Ganzzahl zwischen dem angegebenen Mindest- und Höchstwert einschließlich dieser Werte.",
            "es-ES": "Un número entero aleatorio entre el «Min» y el «Max» especificados ambos incluidos.",
            "es-MX": "Un número entero aleatorio entre el mínimo y el máximo especificados inclusive.",
            "fr-FR": "Un nombre entier aléatoire entre le minimum et le maximum spécifiés ces derniers inclus.",
            "it-IT": "Un numero intero casuale tra il Minimo e Massimo specificati. Inclusivo.",
            "ja-JP": "指定した最小値と最大値の間にあるランダムな整数（最小値と最大値を含む）",
            "ko-KR": "지정한 최대값 이하 최소값 이상 범위 내에서의 무작위 정수값입니다.",
            "pl-PL": "Losowa liczba całkowita między określonymi zmiennymi Min i Max włącznie.",
            "pt-BR": "Um número inteiro aleatório entre o Mín. e o Máx. especificados ambos incluídos.",
            "ru-RU": "Случайное целое число между минимальным и максимальным значениями диапазона включительно.",
            "zh-CN": "指定最小值与最大值之间的一个随机整数（包括最小值与最大值在内）。"
        },
        "en-US": "Random Integer",
        "es-MX": "Número entero aleatorio",
        "fr-FR": "Nombre entier aléatoire",
        "ja-JP": "ランダムな整数",
        "pt-BR": "Inteiro Aleatório",
        "zh-CN": "随机整数"
    },
    "random.shuffle": {
        "description": "A copy of the specified array with the values in a random order.",
        "args": [
            {
                "name": "ARRAY",
                "description": "The array whose copy will be randomized.",
                "type": "Array",
                "default": "GLOBAL VARIABLE",
                "descriptionLocalized": {
                    "guid": "00000000BF1F",
                    "en-US": "The array whose copy will be randomized.",
                    "de-DE": "Das Array dessen Kopie zufällig erstellt wird.",
                    "es-ES": "Matriz cuya copia se hará aleatoria.",
                    "es-MX": "La matriz cuya copia será aleatorizada.",
                    "fr-FR": "Le tableau dont la copie sera randomisée.",
                    "it-IT": "L'array la cui copia sarà ordinata casualmente.",
                    "ja-JP": "ランダムなコピーを作成する配列",
                    "ko-KR": "무작위 복사본을 만들 배열입니다.",
                    "pl-PL": "Tabela której kopia ma kolejność losową.",
                    "pt-BR": "A matriz cuja cópia será randomizada.",
                    "ru-RU": "Массив копия которого будет создана со значениями в случайном порядке.",
                    "zh-CN": "对此数组的复制进行随机排列。"
                }
            }
        ],
        "return": "Array",
        "guid": "00000000B598",
        "descriptionLocalized": {
            "guid": "00000000BF1E",
            "en-US": "A copy of the specified Array with the Values in a random order.",
            "de-DE": "Eine Kopie des festgelegten Arrays deren Werte eine zufällige Reihenfolge haben.",
            "es-ES": "Una copia de la matriz especificada con los valores en orden aleatorio.",
            "es-MX": "Una copia de la matriz especificada con los valores en orden aleatorio.",
            "fr-FR": "Une copie du tableau spécifié avec les valeurs dans un ordre aléatoire.",
            "it-IT": "Una copia dell'Array specificato contenente i Valori in ordine casuale.",
            "ja-JP": "指定の配列のコピー。値がランダムに並んでいる",
            "ko-KR": "지정된 배열의 값을 무작위 순서로 나열한 복사본입니다.",
            "pl-PL": "Kopia określonej tabeli z wartościami w losowej kolejności.",
            "pt-BR": "Uma cópia da Matriz especificada com os Valores em ordem aleatória.",
            "ru-RU": "Копия указанного массива со значениями в случайном порядке.",
            "zh-CN": "复制指定的数组，所有值随机排序。"
        },
        "en-US": "Randomized Array",
        "es-MX": "Matriz aleatorizada",
        "fr-FR": "Tableau aléatoire",
        "ja-JP": "ランダム化された配列",
        "pt-BR": "Matriz Randomizada",
        "zh-CN": "随机数组"
    },
    "random.uniform": {
        "description": "A random real number between the specified min and max.",
        "args": [
            {
                "name": "MIN",
                "description": "The smallest real number allowed.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF1B",
                    "en-US": "The smallest real Number allowed.",
                    "de-DE": "Die kleinste zulässige reelle Zahl.",
                    "es-ES": "Número real más bajo permitido.",
                    "es-MX": "El número real mínimo permitido.",
                    "fr-FR": "Le plus petit nombre réel autorisé.",
                    "it-IT": "Il Numero reale più piccolo permesso.",
                    "ja-JP": "使用できる実数の最小値",
                    "ko-KR": "허용된 최소 실수값입니다.",
                    "pl-PL": "Najmniejsza dozwolona liczba rzeczywista.",
                    "pt-BR": "O menor Número real permitido.",
                    "ru-RU": "Наименьшее из допустимых действительных чисел.",
                    "zh-CN": "允许的最小实数。"
                }
            },
            {
                "name": "MAX",
                "description": "The largest real number allowed.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF1A",
                    "en-US": "The largest real Number allowed.",
                    "de-DE": "Die größte zulässige reelle Zahl.",
                    "es-ES": "Número real más alto permitido.",
                    "es-MX": "El número real máximo permitido.",
                    "fr-FR": "Le plus grand nombre réel autorisé.",
                    "it-IT": "Il Numero reale più grande permesso.",
                    "ja-JP": "使用できる実数の最大値",
                    "ko-KR": "허용된 최대 실수값입니다.",
                    "pl-PL": "Największa dozwolona liczba rzeczywista.",
                    "pt-BR": "O maior Número real permitido.",
                    "ru-RU": "Наибольшее из допустимых действительных чисел.",
                    "zh-CN": "允许的最大实数。"
                }
            }
        ],
        "return": "float",
        "guid": "00000000B59A",
        "descriptionLocalized": {
            "guid": "00000000BF19",
            "en-US": "A random real Number between the specified Min and Max.",
            "de-DE": "Eine zufällige reelle Zahl zwischen dem angegebenen Mindest- und Höchstwert.",
            "es-ES": "Un número real aleatorio entre el «Min» y el «Max» especificados.",
            "es-MX": "Un número real aleatorio entre el mínimo y el máximo especificados.",
            "fr-FR": "Un nombre réel aléatoire entre le minimum et le maximum spécifiés.",
            "it-IT": "Un numero reale casuale tra il Minimo e Massimo specificati.",
            "ja-JP": "指定した最小値と最大値の間にあるランダムな実数（最小値と最大値を含む）",
            "ko-KR": "지정된 최대 및 최소값 범위 내에서의 무작위 실수값 하나입니다.",
            "pl-PL": "Losowa liczba rzeczywista między określonymi zmiennymi Min i Max.",
            "pt-BR": "Um Número real aleatório entre o Mín. e o Máx. especificados.",
            "ru-RU": "Случайное действительное число в пределах указанного диапазона.",
            "zh-CN": "指定最小值与最大值之间的一个随机实数。"
        },
        "en-US": "Random Real",
        "es-MX": "Número real aleatorio",
        "fr-FR": "Nombre réel aléatoire",
        "ja-JP": "ランダムな実数",
        "pt-BR": "Real Aleatório",
        "zh-CN": "随机实数"
    },
    "rgba": {
        "description": "A custom color with the specified red, green, blue and alpha values.",
        "args": [
            {
                "name": "Red",
                "description": "The red component of a color, from 0 to 255.",
                "type": "unsigned int",
                "default": 255,
                "descriptionLocalized": {
                    "en-US": "The red component of a color, from 0 to 255.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Green",
                "description": "The green component of a color, from 0 to 255.",
                "type": "unsigned int",
                "default": 255,
                "descriptionLocalized": {
                    "en-US": "The green component of a color, from 0 to 255.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Blue",
                "description": "The blue component of a color, from 0 to 255.",
                "type": "unsigned int",
                "default": 255,
                "descriptionLocalized": {
                    "en-US": "The blue component of a color, from 0 to 255.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Alpha",
                "description": "The alpha component of a color. 255 is perfectly opaque while 0 is perfectly invisible.",
                "type": "unsigned int",
                "default": 255,
                "descriptionLocalized": {
                    "en-US": "The alpha component of a color. 255 is perfectly opaque while 0 is perfectly invisible.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Color",
        "guid": "000000011DA2",
        "en-US": "Custom Color",
        "es-MX": "Color personalizado",
        "fr-FR": "Couleur personnalisée",
        "ja-JP": "カスタム・カラー",
        "pt-BR": "Cor Personalizada",
        "zh-CN": "自定义颜色"
    },
    "sin": {
        "description": "Sine of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C34A",
                    "en-US": "Angle in radians.",
                    "de-DE": "Winkel in Radiant.",
                    "es-ES": "Ángulo en radianes.",
                    "es-MX": "Ángulo en radianes.",
                    "fr-FR": "Angle en radians.",
                    "it-IT": "L'Angolo in radianti.",
                    "ja-JP": "ラジアンの角度",
                    "ko-KR": "각단위: Rad입니다.",
                    "pl-PL": "Kąt w radianach.",
                    "pt-BR": "Ângulo em radianos.",
                    "ru-RU": "Угол в радианах.",
                    "zh-CN": "角度，以弧度为单位。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C340",
        "descriptionLocalized": {
            "guid": "00000000C341",
            "en-US": "Sine of the specified Angle in radians.",
            "de-DE": "Sinus des festgelegten Winkels in Radiant.",
            "es-ES": "Seno del ángulo especificado en radianes.",
            "es-MX": "Seno del ángulo especificado en radianes.",
            "fr-FR": "Sinus de l’angle spécifié en radians.",
            "it-IT": "Il seno dell'Angolo specificato in radianti.",
            "ja-JP": "ラジアンの指定角度のサイン",
            "ko-KR": "지정된 각단위: Rad의 사인 값입니다.",
            "pl-PL": "Sinus określonego kąta w radianach.",
            "pt-BR": "Seno do Ângulo especificado em radianos.",
            "ru-RU": "Синус указанного угла в радианах.",
            "zh-CN": "指定角度（以弧度为单位）的正弦值。"
        },
        "en-US": "Sine From Radians",
        "es-MX": "Seno en radianes",
        "fr-FR": "Sinus en radians",
        "ja-JP": "ラジアンのサイン",
        "pt-BR": "Seno de Radianos",
        "zh-CN": "弧度的正弦值"
    },
    "sinDeg": {
        "description": "Sine of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C346",
                    "en-US": "Angle in degrees.",
                    "de-DE": "Winkel in Grad.",
                    "es-ES": "Ángulo en grados.",
                    "es-MX": "Ángulo en grados.",
                    "fr-FR": "Angle en degrés.",
                    "it-IT": "L'Angolo in gradi.",
                    "ja-JP": "度単位の角度",
                    "ko-KR": "각단위: 도입니다.",
                    "pl-PL": "Kąt w stopniach.",
                    "pt-BR": "Ângulo em graus.",
                    "ru-RU": "Угол в градусах.",
                    "zh-CN": "角度，以角度为单位。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C33C",
        "descriptionLocalized": {
            "guid": "00000000C33D",
            "en-US": "Sine of the specified Angle in degrees.",
            "de-DE": "Sinus des festgelegten Winkels in Grad.",
            "es-ES": "Seno del ángulo especificado en grados.",
            "es-MX": "Seno del ángulo especificado en grados.",
            "fr-FR": "Sinus de l’angle spécifié en degrés.",
            "it-IT": "Il seno dell'Angolo specificato in gradi.",
            "ja-JP": "度単位の指定角度のサイン",
            "ko-KR": "지정된 각단위: 도의 사인 값입니다.",
            "pl-PL": "Sinus określonego kąta w stopniach.",
            "pt-BR": "Seno do Ângulo especificado em graus.",
            "ru-RU": "Синус указанного угла в градусах.",
            "zh-CN": "指定角度（以度为单位）的正弦值。"
        },
        "en-US": "Sine From Degrees",
        "es-MX": "Seno en grados",
        "fr-FR": "Sinus en degrés",
        "ja-JP": "度のサイン",
        "pt-BR": "Seno de Graus",
        "zh-CN": "角度的正弦值"
    },
    "sqrt": {
        "description": "The square root of the specified value.",
        "args": [
            {
                "name": "VALUE",
                "description": "The real number value whose square root will be computed. Negative values result in zero.",
                "type": "unsigned float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C35E",
                    "en-US": "The real number Value whose square root will be computed. Negative Values result in zero.",
                    "de-DE": "Die reelle Zahl deren Quadratwurzel berechnet wird. Negative Werte ergeben 0.",
                    "es-ES": "Valor de número real cuya raíz cuadrada se computará. Los valores negativos tienen cero como resultado.",
                    "es-MX": "El valor de número real cuya raíz cuadrada se calculará. El resultado de los valores negativos será 0.",
                    "fr-FR": "La valeur en nombre réel dont la racine carrée sera calculée. Le résultat sera égal à 0 si la valeur est négative.",
                    "it-IT": "Il numero reale di cui verrà calcolata la radice quadrata. Valori negativi risultano zero.",
                    "ja-JP": "実数値で、この平方根が計算される。負の値は0になる",
                    "ko-KR": "제곱근을 계산할 실수값입니다. 음수의 경우 0이 됩니다.",
                    "pl-PL": "Wartość z liczbą rzeczywistą której pierwiastek kwadratowy zostanie obliczony. Wartości ujemne dają wynik zero.",
                    "pt-BR": "O Valor em número real cuja raiz quadrada será calculada. Valores negativos resultam em zero.",
                    "ru-RU": "Действительное число квадратный корень из которого нужно вычислить. Корень отрицательных значений приравнивается к нулю.",
                    "zh-CN": "计算此实数值的平方根。负数值则为0。"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C356",
        "descriptionLocalized": {
            "guid": "00000000C357",
            "en-US": "The square root of the specified Value.",
            "de-DE": "Die Quadratwurzel des festgelegten Werts.",
            "es-ES": "Raíz cuadrada del valor especificado.",
            "es-MX": "La raíz cuadrada del valor especificado.",
            "fr-FR": "La racine carrée de la valeur spécifiée.",
            "it-IT": "La radice quadrata del Valore specificato.",
            "ja-JP": "指定値の平方根",
            "ko-KR": "지정된 값의 제곱근입니다.",
            "pl-PL": "Pierwiastek kwadratowy określonej wartości.",
            "pt-BR": "A raiz quadrada do Valor especificado.",
            "ru-RU": "Квадратный корень указанного значения.",
            "zh-CN": "指定值的平方根。"
        },
        "en-US": "Square Root",
        "es-MX": "Raíz cuadrada",
        "fr-FR": "Racine carrée",
        "ja-JP": "平方根",
        "pt-BR": "Raiz Quadrada",
        "zh-CN": "平方根"
    },
    "strContains": {
        "description": "Whether the specified string contains the specified substring.",
        "args": [
            {
                "name": "String",
                "description": "The string in which to search for the specified substring.",
                "type": "String",
                "default": "Custom String",
                "descriptionLocalized": {
                    "en-US": "The string in which to search for the specified substring.",
                    "guid": "<unknown guid>"
                }
            },
            {
                "name": "Substring",
                "description": "The substring for which to search.",
                "type": "String",
                "default": "Custom String",
                "descriptionLocalized": {
                    "en-US": "The substring for which to search.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "000000012070",
        "en-US": "String Contains",
        "es-MX": "La cadena contiene",
        "fr-FR": "Contenu de la chaîne",
        "ja-JP": "含む文字列",
        "pt-BR": "String Contém",
        "zh-CN": "字符串包含"
    },
    "strLen": {
        "description": "The length in characters of the provided string.",
        "args": [
            {
                "name": "String",
                "description": "The string whose characters to count.",
                "type": "String",
                "default": "Global Variable",
                "descriptionLocalized": {
                    "en-US": "The string whose characters to count.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "0000000124A2",
        "en-US": "String Length",
        "es-MX": "Longitud de la cadena",
        "fr-FR": "Longueur de la chaîne",
        "ja-JP": "文字列の長さ",
        "pt-BR": "Tamanho da String",
        "zh-CN": "字符串长度"
    },
    "tan": {
        "description": "Tangent of the specified angle in radians.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in radians.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C34A",
                    "en-US": "Angle in radians.",
                    "de-DE": "Winkel in Radiant.",
                    "es-ES": "Ángulo en radianes.",
                    "es-MX": "Ángulo en radianes.",
                    "fr-FR": "Angle en radians.",
                    "it-IT": "L'Angolo in radianti.",
                    "ja-JP": "ラジアンの角度",
                    "ko-KR": "각단위: Rad입니다.",
                    "pl-PL": "Kąt w radianach.",
                    "pt-BR": "Ângulo em radianos.",
                    "ru-RU": "Угол в радианах.",
                    "zh-CN": "角度，以弧度为单位。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7FD",
        "descriptionLocalized": {
            "guid": "00000000C7FC",
            "en-US": "Tangent of the specified Angle in radians.",
            "de-DE": "Tangens des festgelegten Winkels in Radiant.",
            "es-ES": "Tangente del ángulo especificado en radianes.",
            "es-MX": "Tangente del ángulo especificado en radianes.",
            "fr-FR": "Tangente de l’angle spécifié en radians.",
            "it-IT": "Tangente dell'Angolo specificato in radianti.",
            "ja-JP": "ラジアンの指定角度のタンジェント",
            "ko-KR": "지정된 각단위: Rad의 탄젠트 값입니다.",
            "pl-PL": "Tangens określonego kąta wyrażony w radianach.",
            "pt-BR": "Tangente do Ângulo especificado em radianos.",
            "ru-RU": "Тангенс указанного угла в радианах.",
            "zh-CN": "指定弧度（以度为单位）的正切值。"
        },
        "en-US": "Tangent From Radians",
        "es-MX": "Tangente en radianes",
        "fr-FR": "Tangente en radians",
        "ja-JP": "ラジアンのタンジェント",
        "pt-BR": "Tangente de Radianos",
        "zh-CN": "弧度的正切值"
    },
    "tanDeg": {
        "description": "Tangent of the specified angle in degrees.",
        "args": [
            {
                "name": "ANGLE",
                "description": "Angle in degrees.",
                "type": "float",
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000C346",
                    "en-US": "Angle in degrees.",
                    "de-DE": "Winkel in Grad.",
                    "es-ES": "Ángulo en grados.",
                    "es-MX": "Ángulo en grados.",
                    "fr-FR": "Angle en degrés.",
                    "it-IT": "L'Angolo in gradi.",
                    "ja-JP": "度単位の角度",
                    "ko-KR": "각단위: 도입니다.",
                    "pl-PL": "Kąt w stopniach.",
                    "pt-BR": "Ângulo em graus.",
                    "ru-RU": "Угол в градусах.",
                    "zh-CN": "角度，以角度为单位。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7F8",
        "descriptionLocalized": {
            "guid": "00000000C7F9",
            "en-US": "Tangent of the specified Angle in degrees.",
            "de-DE": "Tangens des festgelegten Winkels in Grad.",
            "es-ES": "Tangente del ángulo especificado en grados.",
            "es-MX": "Tangente del ángulo especificado en grados.",
            "fr-FR": "Tangente de l’angle spécifié en degrés.",
            "it-IT": "Tangente dell'Angolo specificato in gradi.",
            "ja-JP": "度単位の指定角度のタンジェント",
            "ko-KR": "지정된 각단위: 도의 탄젠트 값입니다.",
            "pl-PL": "Tangens określonego kąta wyrażony w stopniach.",
            "pt-BR": "Tangente do Ângulo especificado em graus.",
            "ru-RU": "Тангенс указанного угла в градусах.",
            "zh-CN": "指定角度（以度为单位）的正切值。"
        },
        "en-US": "Tangent From Degrees",
        "es-MX": "Tangente en grados",
        "fr-FR": "Tangente en degrés",
        "ja-JP": "度のタンジェント",
        "pt-BR": "Tangente de Graus",
        "zh-CN": "角度的正切值"
    },
    "teamHasHero": {
        "description": "Whether a specific hero is being played (either on a team or in the match).",
        "args": [
            {
                "name": "HERO",
                "description": "The hero to check for play.",
                "type": "Hero",
                "default": "HERO",
                "descriptionLocalized": {
                    "guid": "00000000BEC6",
                    "en-US": "The Hero to check for play.",
                    "de-DE": "Der Held auf dessen Einsatz im Spiel geprüft werden soll.",
                    "es-ES": "Héroe cuya presencia en juego se comprueba.",
                    "es-MX": "El héroe que se verificará para jugar.",
                    "fr-FR": "Le héros dont il faut vérifier la présence en jeu.",
                    "it-IT": "L'Eroe il cui utilizzo sarà controllato.",
                    "ja-JP": "プレイされているかチェックするヒーロー",
                    "ko-KR": "플레이 현황을 확인할 영웅입니다.",
                    "pl-PL": "Bohater do sprawdzenia czy jest w rozgrywce.",
                    "pt-BR": "O Herói a ser verificado em jogo.",
                    "ru-RU": "Герой факт игры за которого нужно проверить.",
                    "zh-CN": "检测此英雄是否在使用。"
                }
            },
            {
                "name": "TEAM",
                "description": "The team or teams on which to check for the hero being played.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEC7",
                    "en-US": "The Team or Teams on which to check for the Hero being played.",
                    "de-DE": "Das Team oder die Teams die auf den gespielten Helden geprüft werden sollen.",
                    "es-ES": "Equipo o equipos en los que se comprueba si el héroe está en juego.",
                    "es-MX": "El equipo o los equipos en los que se verificará el héroe con el que se está jugando.",
                    "fr-FR": "L’équipe ou les équipes dans lesquelles il faut vérifier la présence du héros.",
                    "it-IT": "La Squadra o le Squadre il cui utilizzo dell'Eroe sarà controllato.",
                    "ja-JP": "ヒーローがプレイされているかチェックするチーム",
                    "ko-KR": "영웅 플레이 현황을 확인할 팀입니다.",
                    "pl-PL": "Drużyna lub drużyny w których zostanie sprawdzone czy bohater jest w rozgrywce.",
                    "pt-BR": "As Equipes que seráão verificadas para ver se o Herói está em jogo.",
                    "ru-RU": "Команда или команды для которых нужно проверить факт игры за указанного героя.",
                    "zh-CN": "检测队伍中是否正在使用这名英雄。"
                }
            }
        ],
        "return": "bool",
        "guid": "00000000B292",
        "descriptionLocalized": {
            "guid": "00000000BEC5",
            "en-US": "Whether a specific Hero is being played either on a Team or in the match.",
            "de-DE": "Ob ein bestimmter Held gespielt wird in einem Team oder im Match.",
            "es-ES": "Si un héroe concreto se está jugando en un equipo o en la partida.",
            "es-MX": "Verifica si se está jugando con un héroe determinado ya sea en un equipo o en la partida.",
            "fr-FR": "Si un héros spécifique est en jeu dans une équipe ou dans la partie.",
            "it-IT": "Specifica se un Eroe specifico sta venendo utilizzato in una Squadra o in una partita.",
            "ja-JP": "チームまたはマッチで特定のヒーローがプレイされているかどうか",
            "ko-KR": "팀 또는 경기 내에서 지정된 영웅이 사용되고 있는지 여부입니다.",
            "pl-PL": "Czy konkretny bohater jest w rozgrywce albo w drużynie albo w meczu.",
            "pt-BR": "Se um Herói específico está sendo usado ou não em uma Equipe ou na partida.",
            "ru-RU": "Проверка игры за указанного героя в команде или матче.",
            "zh-CN": "指定英雄是否正在使用（可以限定在队伍中或游戏中）。"
        },
        "en-US": "Is Hero Being Played",
        "es-MX": "Jugando con el héroe",
        "fr-FR": "Héros joué",
        "ja-JP": "ヒーローがプレイされているか",
        "pt-BR": "É o Herói em Jogo",
        "zh-CN": "正在使用英雄"
    },
    "teamScore": {
        "guid": "00000000B353",
        "description": "The current score for the specified team. Results in 0 in free-for-all game modes.",
        "args": [
            {
                "name": "TEAM",
                "description": "The team whose score to acquire.",
                "type": "Team",
                "default": "TEAM",
                "descriptionLocalized": {
                    "guid": "00000000BEE6",
                    "en-US": "The Team whose score to acquire.",
                    "de-DE": "Das Team dessen Punktestand abgerufen werden soll.",
                    "es-ES": "Equipo cuya puntuación se adquiere.",
                    "es-MX": "El equipo cuya puntuación se adquirirá.",
                    "fr-FR": "L’équipe dont il faut acquérir le score.",
                    "it-IT": "La Squadra il cui punteggio sarà acquisito.",
                    "ja-JP": "スコアを取得するチーム",
                    "ko-KR": "점수 정보를 가져올 팀입니다.",
                    "pl-PL": "Drużyna której wynik należy pozyskać.",
                    "pt-BR": "A Equipe cuja pontuação será adquirida.",
                    "ru-RU": "Команда счет которой нужно получить.",
                    "zh-CN": "获取此队伍的得分。"
                }
            }
        ],
        "return": "int",
        "descriptionLocalized": {
            "guid": "00000000BEE7",
            "en-US": "The current score for the specified Team. Results in 0 in free-for-all game modes.",
            "de-DE": "Der aktuelle Punktestand des festgelegten Teams. Das Ergebnis lautet 0 für klassische Deathmatch-Modi.",
            "es-ES": "Puntuación actual del equipo especificado. El resultado es «0» en modos de juego de todos contra todos.",
            "es-MX": "La puntuación actual del equipo especificado. El resultado será 0 en los modos de juego de todos contra todos.",
            "fr-FR": "Le score actuel de l’équipe spécifiée. Renvoie le résultat 0 en mode Chacun pour soi.",
            "it-IT": "Il punteggio attuale della Squadra specificata. Risulta 0 nelle modalità Tutti contro tutti.",
            "ja-JP": "指定したチームの現在のスコア。FFAゲーム・モードでは0を返す",
            "ko-KR": "지정된 팀의 현재 점수입니다. 개별 전투 모드에서는 결과값이 0입니다.",
            "pl-PL": "Bieżący wynik dla określonej drużyny. Wynik jest równy 0 w trybach każdy na każdego.",
            "pt-BR": "A pontuação atual da Equipe especificada. Retorna o resultado 0 em modos de jogo todos contra todos.",
            "ru-RU": "Счет указанной команды в данный момент. Для FFA это значение равно 0.",
            "zh-CN": "指定队伍当前的得分。在自由混战模式中结果为0。"
        },
        "en-US": "Team Score",
        "es-MX": "Puntuación del equipo",
        "fr-FR": "Score de l’équipe",
        "ja-JP": "チーム・スコア",
        "pt-BR": "Pontuação da Equipe",
        "zh-CN": "团队得分"
    },
    "true": {
        "description": "The boolean value of true.",
        "args": null,
        "isConstant": true,
        "return": "BoolLiteral",
        "guid": "00000000AC39",
        "descriptionLocalized": {
            "guid": "00000000BDF7",
            "en-US": "The Boolean Value of True.",
            "de-DE": "Der boolesche Wert True.",
            "es-ES": "El valor booleano «True».",
            "es-MX": "El valor booleano de verdadero.",
            "fr-FR": "La valeur booléenne pour « Vrai ».",
            "it-IT": "Il Valore Booleano pari a True.",
            "ja-JP": "「TRUE」のBoolean値",
            "ko-KR": "True의 부울 값입니다.",
            "pl-PL": "Logiczna wartość prawdy.",
            "pt-BR": "O Valor Booleano \"Verdadeiro\".",
            "ru-RU": "Логическое верное значение True.",
            "zh-CN": "布尔值，真。"
        },
        "en-US": "True",
        "es-MX": "Verdadero",
        "fr-FR": "Vrai",
        "zh-CN": "真"
    },
    "updateEveryTick": {
        "description": "Increases the update frequency of the provided value to once per tick. Useful for smoothing the appearance of certain Values, such as getPosition(), that normally only update every few ticks. Applies to rule conditions as well as reevaluating action parameters. The value is interpolated client-side if the framerate is higher than the tick rate. May increase server load and/or lower frame rate.",
        "args": [
            {
                "name": "Value",
                "description": "The value that will be updated once per tick.",
                "type": [
                    "Object",
                    "Array"
                ],
                "default": "Position Of",
                "descriptionLocalized": {
                    "en-US": "The value that will be updated once per tick.",
                    "guid": "<unknown guid>"
                }
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000001232B",
        "en-US": "Update Every Frame",
        "es-MX": "Actualizar todos los cuadros",
        "fr-FR": "Actualiser à chaque image",
        "ja-JP": "フレームごとに更新",
        "pt-BR": "Atualizar a Cada Quadro",
        "zh-CN": "逐帧更新"
    },
    "vect": {
        "guid": "00000000B0F1",
        "description": "A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.",
        "args": [
            {
                "name": "X",
                "description": "The x value of the vector.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BE01",
                    "en-US": "The X Value of the vector.",
                    "de-DE": "Der X-Wert des Vektors.",
                    "es-ES": "Valor X del vector.",
                    "es-MX": "El valor X del vector.",
                    "fr-FR": "La valeur X du vecteur.",
                    "it-IT": "Il Valore X del vettore.",
                    "ja-JP": "ベクトルのX値",
                    "ko-KR": "벡터의 X 값입니다.",
                    "pl-PL": "Wartość X wektora.",
                    "pt-BR": "O Valor X do vetor.",
                    "ru-RU": "Компонент X значения вектора.",
                    "zh-CN": "矢量的X轴值。"
                }
            },
            {
                "name": "Y",
                "description": "The y value of the vector.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF6E",
                    "en-US": "The Y Value of the vector.",
                    "de-DE": "Der Y-Wert des Vektors.",
                    "es-ES": "Valor Y del vector.",
                    "es-MX": "El valor Y del vector.",
                    "fr-FR": "La valeur Y du vecteur.",
                    "it-IT": "Il Valore Y del vettore.",
                    "ja-JP": "ベクトルのY値",
                    "ko-KR": "벡터의 Y 값입니다.",
                    "pl-PL": "Wartość Y wektora.",
                    "pt-BR": "O Valor Y do vetor.",
                    "ru-RU": "Компонент Y значения вектора.",
                    "zh-CN": "矢量的Y轴值。"
                }
            },
            {
                "name": "Z",
                "description": "The z value of the vector.",
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "NUMBER",
                "descriptionLocalized": {
                    "guid": "00000000BF6D",
                    "en-US": "The Z Value of the vector.",
                    "de-DE": "Der Z-Wert des Vektors.",
                    "es-ES": "Valor Z del vector.",
                    "es-MX": "El valor Z del vector.",
                    "fr-FR": "La valeur Z du vecteur.",
                    "it-IT": "Il Valore Z del vettore.",
                    "ja-JP": "ベクトルのX値",
                    "ko-KR": "벡터의 Z 값입니다.",
                    "pl-PL": "Wartość Z wektora.",
                    "pt-BR": "O Valor Z do vetor.",
                    "ru-RU": "Компонент Z значения вектора.",
                    "zh-CN": "矢量的Z轴值。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Vector",
        "descriptionLocalized": {
            "guid": "00000000BE00",
            "en-US": "A vector composed of three real numbers X Y Z where X is left Y is up and Z is forward. Vectors are used for position direction and velocity.",
            "de-DE": "Ein Vektor aus drei reellen Zahlen X Y Z. X entspricht nach links Y nach oben und Z nach vorne. Vektoren werden für Position Richtung und Geschwindigkeitsvektor verwendet.",
            "es-ES": "Un vector compuesto por tres números reales X Y Z donde X es hacia la izquierda Y es hacia arriba y Z es hacia delante. Los vectores se usan para la posición la dirección y la velocidad direccional.",
            "es-MX": "Un vector compuesto por tres números reales X Y Z donde X es izquierda Y es arriba y Z es adelante. Los vectores se utilizan para establecer la posición la dirección y la velocidad.",
            "fr-FR": "Un vecteur composé de trois nombres réels X Y Z X correspondant à la gauche Y au haut et Z à l’avant. Les vecteurs servent à gérer la position la direction et la vélocité.",
            "it-IT": "Un vettore composto da tre numeri reali X Y Z dove X indica la sinistra Y indica su e Z indica avanti. I vettori sono usati per indicare posizione direzione e velocità direzionale.",
            "ja-JP": "3つの実数（X、Y、Z）で構成されたベクトル。Xは左方向、Yは上方向、Zは前方向を示すベクトルは位置、方向、速度を示す",
            "ko-KR": "3개의 실수X Y Z로 이루어진 벡터입니다. X는 좌측 Y는 위 Z는 전방을 의미합니다. 벡터는 위치 방향 속도로 사용됩니다.",
            "pl-PL": "Wektor złożony z trzech liczb rzeczywistych X Y Z gdzie „X” to lewo „Y” to góra a „Z” to przód. Parametry „Vector” Wektor są wykorzystywane do określania pozycji kierunku i prędkości.",
            "pt-BR": "Um vetor composto de três números reais X Y Z em que X é esquerda Y é acima e Z é adiante. Vetores são usados para posição direção e velocidade.",
            "ru-RU": "Значение вектора состоит из трех действительных чисел X Y Z где X соответствует направлению влево Y – направлению вверх а Z – направлению вперед. Векторами выражаются местоположение направление и векторная скорость объекта.",
            "zh-CN": "矢量在三个方向上的实数值（X、Y、Z），X为左，Y为上，Z为前。矢量用来表示位置、方向和速度。"
        },
        "en-US": "Vector",
        "fr-FR": "Vecteur",
        "ja-JP": "ベクトル",
        "pt-BR": "Vetor",
        "zh-CN": "矢量"
    },
    "vectorTowards": {
        "description": "The displacement vector from one position to another.",
        "args": [
            {
                "name": "START POS",
                "description": "The position from which the resulting displacement vector begins.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE43",
                    "en-US": "The position from which the resulting displacement Vector begins.",
                    "de-DE": "Die Position an der der resultierende Verschiebungsvektor beginnt.",
                    "es-ES": "Posición desde la que comienza el vector de desplazamiento resultante.",
                    "es-MX": "La posición desde la cual comienza el vector de desplazamiento resultante.",
                    "fr-FR": "La position d’où part le vecteur de déplacement résultant.",
                    "it-IT": "La posizione dalla quale il Vettore di spostamento risultante inizia.",
                    "ja-JP": "結果として生じる転置ベクトルの開始位置",
                    "ko-KR": "변위 벡터가 시작하는 위치입니다.",
                    "pl-PL": "Pozycja w której rozpoczyna się wektor przemieszczenia.",
                    "pt-BR": "A posição na qual o Vetor de deslocamento resultante começa.",
                    "ru-RU": "Точка с которой начинается результирующий вектор смещения.",
                    "zh-CN": "位移矢量的起点。"
                }
            },
            {
                "name": "END POS",
                "description": "The position at which the resulting displacement vector ends.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BE42",
                    "en-US": "The position at which the resulting displacement Vector ends.",
                    "de-DE": "Die Position an der der resultierende Verschiebungsvektor endet.",
                    "es-ES": "Posición en la que finaliza el vector de desplazamiento resultante.",
                    "es-MX": "La posición donde finaliza el vector de desplazamiento resultante.",
                    "fr-FR": "La position où s’arrête le vecteur de déplacement résultant.",
                    "it-IT": "La posizione alla quale il Vettore di spostamento risultante termina.",
                    "ja-JP": "結果として生じる転置ベクトルの終了位置",
                    "ko-KR": "변위 벡터가 종료되는 위치입니다.",
                    "pl-PL": "Pozycja w której kończy się wektor przemieszczenia.",
                    "pt-BR": "A posição na qual o Vetor de deslocamento resultante termina.",
                    "ru-RU": "Точка в которой заканчивается результирующий вектор смещения.",
                    "zh-CN": "位移矢量的终点。"
                }
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B1EB",
        "descriptionLocalized": {
            "guid": "00000000BE44",
            "en-US": "The displacement Vector from one position to another.",
            "de-DE": "Der Verschiebungsvektor von einer Position zu einer anderen.",
            "es-ES": "Vector de desplazamiento de una posición a otra.",
            "es-MX": "El vector de desplazamiento de una posición a otra.",
            "fr-FR": "Le vecteur de déplacement d’une position à l’autre.",
            "it-IT": "Il Vettore di spostamento da una posizione all'altra.",
            "ja-JP": "ある位置から別の位置へ移動する転置ベクトル",
            "ko-KR": "한 위치에서 다른 위치까지의 변위 벡터입니다.",
            "pl-PL": "Wektor przemieszczenia z jednej pozycji na drugą.",
            "pt-BR": "O Vetor de deslocamento de uma posição para a outra.",
            "ru-RU": "Вектор смещения из одной точки в другую.",
            "zh-CN": "从一个位置到另一个位置的位移矢量。"
        },
        "en-US": "Vector Towards",
        "es-MX": "Vector hacia",
        "fr-FR": "Vecteur vers",
        "ja-JP": "ベクトルの方向: ",
        "pt-BR": "Vetor Rumo a",
        "zh-CN": "向量"
    },
    "verticalAngleOfDirection": {
        "description": "The vertical angle in degrees corresponding to the specified direction vector.",
        "args": [
            {
                "name": "DIRECTION",
                "description": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.",
                "type": "Direction",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BF4A",
                    "en-US": "The direction Vector from which to acquire a vertical angle in degrees. The Vector is unitized before calculation begins.",
                    "de-DE": "Der Richtungsvektor dessen vertikaler Winkel in Grad abgerufen werden soll. Der Vektor wird normiert bevor die Berechnung beginnt.",
                    "es-ES": "Vector de dirección cuyo ángulo vertical en grados se adquiere. El vector se normaliza antes del comienzo del cálculo.",
                    "es-MX": "El vector de dirección a partir del cual se adquirirá un ángulo vertical en grados. El vector es unificado antes de que comience el cálculo.",
                    "fr-FR": "Le vecteur de direction à partir duquel acquérir un angle vertical en degrés. Le vecteur est normalisé avant le calcul.",
                    "it-IT": "Il Vettore direzionale dal quale acquisire l'angolo verticale in gradi. Il Vettore viene normalizzato prima dell'inizio del calcolo.",
                    "ja-JP": "頂角を算出するための方向ベクトル。計算を開始する前にベクトルは統合される",
                    "ko-KR": "종축각단위: 도 정보를 가져올 방향 벡터입니다. 벡터는 연산 전에 정규화됩니다.",
                    "pl-PL": "Kierunkowy parametr wektorowy z którego pobierany jest podany w stopniach kąt pionowy. Parametr „Vector” Wektor zostaje przekształcony na jednostki przed rozpoczęciem obliczeń.",
                    "pt-BR": "O Vetor direcional do qual será adquirido um ângulo vertical em graus. O Vetor é unitizado antes de o cálculo ser iniciado.",
                    "ru-RU": "Вектор направления от которого строится вертикальный угол в градусах. Перед вычислением вектор нормализуется.",
                    "zh-CN": "对此方向矢量获取水平角度，单位为度。此矢量在计算开始前进行统一化。"
                }
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000BB2B",
        "descriptionLocalized": {
            "guid": "00000000BF4B",
            "en-US": "The vertical angle in degrees corresponding to the specified direction Vector.",
            "de-DE": "Der vertikale Winkel der dem festgelegten Richtungsvektor entspricht in Grad.",
            "es-ES": "Ángulo vertical en grados que se corresponde con el vector de dirección especificado.",
            "es-MX": "El ángulo vertical en grados correspondiente al vector de dirección especificado.",
            "fr-FR": "L’angle vertical en degrés correspondant au vecteur de direction spécifié.",
            "it-IT": "L'angolo verticale in gradi corrispondente al Vettore direzionale specificato.",
            "ja-JP": "指定された方向ベクトルに対する頂角（度）",
            "ko-KR": "지정된 방향 벡터에 대응하는 종축각단위: 도입니다.",
            "pl-PL": "Podany w stopniach kąt pionowy odpowiadający określonemu kierunkowemu parametrowi „Vector” Wektor.",
            "pt-BR": "O ângulo vertical em graus correspondente ao Vetor direcional especificado.",
            "ru-RU": "Вертикальный угол в градусах соответствующий указанному вектору направления.",
            "zh-CN": "与指定方向矢量的垂直夹角，单位为度。"
        },
        "en-US": "Vertical Angle From Direction",
        "es-MX": "Ángulo vertical desde la dirección",
        "fr-FR": "Angle vertical depuis une direction",
        "ja-JP": "方向からの頂角",
        "pt-BR": "Ângulo Vertical a partir da Direção",
        "zh-CN": "与此方向的垂直角度"
    },
    "verticalAngleTowards": {
        "description": "The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.",
        "args": [
            {
                "name": "PLAYER",
                "description": "The player from whose current facing the angle begins.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEB0",
                    "en-US": "The Player from whose current facing the angle begins.",
                    "de-DE": "Der Spieler bei dessen aktueller Blickrichtung der Winkel beginnt.",
                    "es-ES": "Jugador desde cuya orientación actual comienza el ángulo.",
                    "es-MX": "El jugador desde cuya orientación actual comienza el ángulo.",
                    "fr-FR": "Le joueur dont l’orientation actuelle forme le point de départ de l’angle.",
                    "it-IT": "Il Giocatore dalla cui direzione di osservazione inizia l'angolo.",
                    "ja-JP": "正方向が開始角度となるプレイヤー",
                    "ko-KR": "이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.",
                    "pl-PL": "Gracz od którego rozpoczyna się bieżący kąt skierowania.",
                    "pt-BR": "O Jogador cuja direção atual inicia o ângulo.",
                    "ru-RU": "Игрок относительно направления взгляда которого вычисляется угол.",
                    "zh-CN": "以此玩家当前面向的角度为起点。"
                }
            },
            {
                "name": "POSITION",
                "description": "The position in the world where the angle ends.",
                "type": "Position",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BEAF",
                    "en-US": "The position in the world where the angle ends.",
                    "de-DE": "Die Position in der Welt bei der der Winkel endet.",
                    "es-ES": "Posición en el mundo donde finaliza el ángulo.",
                    "es-MX": "La posición en el mundo donde finaliza el ángulo.",
                    "fr-FR": "La position dans le monde où l’angle prend fin.",
                    "it-IT": "La posizione nel mondo di gioco dove termina l'angolo.",
                    "ja-JP": "ワールドにおける、角度が終了する位置",
                    "ko-KR": "각 각이 종료되는 월드 내 위치입니다.",
                    "pl-PL": "Pozycja w świecie w której kończy się kąt.",
                    "pt-BR": "A posição no mundo onde o ângulo termina.",
                    "ru-RU": "Точка в игровом мире угол до которой нужно вычислить.",
                    "zh-CN": "测定与地图中此位置的夹角。"
                }
            }
        ],
        "return": "float",
        "guid": "00000000B27E",
        "en-US": "Vertical Angle Towards",
        "es-MX": "Ángulo vertical en dirección a",
        "fr-FR": "Angle vertical vers",
        "ja-JP": "頂角の方向: ",
        "pt-BR": "Ângulo Vertical Rumo a",
        "zh-CN": "垂直方向夹角"
    },
    "victim": {
        "guid": "00000000B330",
        "description": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.",
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "descriptionLocalized": {
            "guid": "00000000BED9",
            "en-US": "The Player that received the damage for the Event currently being processed by this Rule. May be the same as the Attacker or the Event Player.",
            "de-DE": "Der Spieler der den Schaden für das Event erhalten hat das aktuell durch diese Regel verarbeitet wird. Kann derselbe sein wie [Attacker] oder [Event Player].",
            "es-ES": "Jugador que recibió el daño del evento procesado actualmente por esta regla. Puede ser el mismo que «Attacker» o «Event Player».",
            "es-MX": "El jugador que recibió daño por el evento procesado actualmente por esta regla. Puede ser el mismo que el atacante o el jugador del evento.",
            "fr-FR": "Le joueur qui a subi les dégâts de l’évènement actuellement traité par cette règle. Peut être identique à l’attaquant ou au joueur exécutant.",
            "it-IT": "Il Giocatore che ha subito danni per l'Evento attualmente elaborato dalla Regola. Può corrispondere all'Attaccante o al Giocatore Evento.",
            "ja-JP": "このルールをもとに処理されているイベントでダメージを受けたプレイヤー。攻撃者またはイベント・プレイヤーと同じ場合がある",
            "ko-KR": "이 규칙으로 처리된 이벤트로 인해 피해를 받은 플레이어입니다. Attacker 또는 Event Player와 동일할 수 있습니다.",
            "pl-PL": "Gracz który otrzymał obrażenia w zdarzeniu aktualnie przetwarzanym przez tę regułę. Może być taki sam jak w zmiennej „Attacker” Atakujący lub „Victim” Atakowany.",
            "pt-BR": "O Jogador que recebeu o dano para o Evento que está sendo processado por esta Regra. Pode ser o mesmo que o Atacante ou o Jogador do Evento.",
            "ru-RU": "Игрок получивший урон в рамках события которое в данный момент обрабатывается этим правилом. Может совпадать с переменной [Attacker] или [Event Player].",
            "zh-CN": "根据此规则处理的事件中受到伤害的玩家。可能与攻击者或事件玩家是同一个人。"
        },
        "en-US": "Victim",
        "es-MX": "Víctima",
        "fr-FR": "Victime",
        "ja-JP": "犠牲者",
        "pt-BR": "Vítima",
        "zh-CN": "被攻击方"
    },
    "worldVector": {
        "description": "The vector in world coordinates corresponding to the provided vector in local coordinates.",
        "args": [
            {
                "name": "LOCAL VECTOR",
                "description": "The vector in local coordinates that will be converted to world coordinates.",
                "type": "Vector",
                "default": "VECTOR",
                "descriptionLocalized": {
                    "guid": "00000000BEDF",
                    "en-US": "The Vector in local coordinates that will be converted to world coordinates.",
                    "de-DE": "Der Vektor in lokalen Koordinaten der in Weltkoordinaten umgewandelt wird.",
                    "es-ES": "Vector en coordenadas locales que se convertirá a coordenadas del mundo.",
                    "es-MX": "El vector en coordenadas locales que se convertirá en coordenadas globales.",
                    "fr-FR": "Le vecteur en coordonnées locales qui sera converti en coordonnées mondiales.",
                    "it-IT": "Il Vettore in coordinate locali che sarà convertito in coordinate del mondo di gioco.",
                    "ja-JP": "ワールド座標に変換されるローカル座標のベクトル",
                    "ko-KR": "월드 좌표로 전환될 로컬 좌표 벡터입니다.",
                    "pl-PL": "Parametr „Vector” Wektor w lokalnych współrzędnych który zostanie przekonwertowany na współrzędne świata.",
                    "pt-BR": "O Vetor em coordenadas locais que será convertido em coordenadas do mundo.",
                    "ru-RU": "Вектор в локальной системе координат который нужно перенести в глобальную систему координат.",
                    "zh-CN": "将此相对本地坐标的矢量值转化为相对于地图坐标的矢量值。"
                }
            },
            {
                "name": "RELATIVE PLAYER",
                "description": "The player to whom the local vector is relative.",
                "type": "Player",
                "default": "EVENT PLAYER",
                "descriptionLocalized": {
                    "guid": "00000000BEE0",
                    "en-US": "The Player to whom the Local Vector is relative.",
                    "de-DE": "Der Spieler zu dem [Local Vector] relativ ist.",
                    "es-ES": "Jugador al que es relativo el «Local Vector».",
                    "es-MX": "El jugador vinculado al vector local.",
                    "fr-FR": "Le joueur auquel se rapporte le vecteur local.",
                    "it-IT": "Il Giocatore a cui il Vettore Locale fa riferimento.",
                    "ja-JP": "ローカル・ベクトルに関連するプレイヤー",
                    "ko-KR": "로컬 벡터와 연관될 플레이어입니다.",
                    "pl-PL": "Gracz do którego odnosi się lokalny parametr „Vector” Wektor.",
                    "pt-BR": "O Jogador a quem o Vetor Local é relativo.",
                    "ru-RU": "Игрок относительно которого строится локальный вектор.",
                    "zh-CN": "本地矢量是相对此玩家的。"
                }
            },
            {
                "name": "TRANSFORMATION",
                "description": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).",
                "type": "Transform",
                "default": "ROTATION",
                "descriptionLocalized": {
                    "guid": "00000000BEE2",
                    "en-US": "Specifies whether the Vector should receive a rotation and a translation usually applied to positions or only a rotation usually applied to directions and velocities.",
                    "de-DE": "Legt fest ob der Vektor eine Rotation und eine Parallelverschiebung erhalten soll für gewöhnlich bei Positionen oder nur eine Rotation für gewöhnlich bei Richtungen und Geschwindigkeiten.",
                    "es-ES": "Especifica si el vector debe recibir una rotación y una traslación normalmente aplicadas a posiciones o solo una rotación normalmente aplicada a direcciones y velocidades.",
                    "es-MX": "Especifica si el vector debería recibir una rotación y una traslación por lo general aplicada a las posiciones o solo una rotación por lo general aplicada a las direcciones y las velocidades.",
                    "fr-FR": "Spécifie s’il faut appliquer au vecteur une rotation et une translation généralement appliquées aux positions ou uniquement une rotation généralement appliquée aux directions et aux vélocités.",
                    "it-IT": "Specifica se il Vettore deve ricevere una rotazione e una traslazione solitamente applicate a posizioni o solo una rotazione solitamente applicata a direzioni e velocità direzionali.",
                    "ja-JP": "ベクトルが平行移動および回転を行う（通常は位置に適用）のか、回転のみを行う（通常は方向および速度に適用）のか指定する",
                    "ko-KR": "벡터가 회전과 평행이동을 받는지일반적으로 위치에 적용 아니면 회전만 받는지일반적으로 방향 및 속도에 적용 여부를 설정합니다.",
                    "pl-PL": "Określa czy parametr „Vector” Wektor powinien otrzymać rotację i przełożenie zazwyczaj stosowane do pozycji czy tylko rotację zazwyczaj stosowaną do kierunków i prędkości.",
                    "pt-BR": "Especifica se o Vetor deve receber uma rotação e uma translação geralmente aplicada a posições ou apenas uma rotação geralmente aplicada a direções e velocidades.",
                    "ru-RU": "Определяет требуется ли для вектора поворот и смещение обычно применяется к местоположениям или только поворот обычно применяется к направлениям и векторным скоростям.",
                    "zh-CN": "指定此矢量是否接受旋转及平移（通常是位置），或者只接受旋转（通常是方向和速度）。"
                }
            }
        ],
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000B33A",
        "descriptionLocalized": {
            "guid": "00000000BEDE",
            "en-US": "The Vector in world coordinates corresponding to the provided Vector in local coordinates.",
            "de-DE": "Der Vektor in Weltkoordinaten der dem angegebenen Vektor in lokalen Koordinaten entspricht.",
            "es-ES": "Vector en coordenadas del mundo que corresponde al indicado en coordenadas locales.",
            "es-MX": "El vector en coordenadas globales correspondiente al vector proporcionado en coordenadas locales.",
            "fr-FR": "Le vecteur en coordonnées mondiales correspondant au vecteur indiqué en coordonnées locales.",
            "it-IT": "Il Vettore in coordinate del mondo di gioco che corrisponde al Vettore fornito in coordinate locali.",
            "ja-JP": "与えられたローカル座標のベクトルに対応するワールド座標のベクトル",
            "ko-KR": "제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.",
            "pl-PL": "Parametr „Vector” Wektor we współrzędnych świata odpowiadający podanemu parametrowi „Vector” Wektor w lokalnych współrzędnych.",
            "pt-BR": "O Vetor em coordenadas do mundo correspondente ao Vetor fornecido em coordenadas locais.",
            "ru-RU": "Вектор в глобальной системе координат соответствующий вектору указанному в локальной системе координат.",
            "zh-CN": "相对于地图坐标的矢量值，与所提供的相对本地坐标的矢量值对应。"
        },
        "en-US": "World Vector Of",
        "es-MX": "Vector global de",
        "fr-FR": "Vecteur mondial de",
        "ja-JP": "ワールド座標のベクトル: ",
        "pt-BR": "Vetor do Mundo de",
        "zh-CN": "地图矢量"
    }
}
//end-json
