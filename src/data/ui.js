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

"use strict";

const ruleAttributesDisplayNamesKw =
//begin-json
{
    "event": {
        "guid": "00000000B23E",
        "en-US": "Event",
        "es-ES": "Evento",
        "es-MX": "Evento",
        "fr-FR": "Évènement",
        "it-IT": "Evento",
        "ja-JP": "イベント",
        "pl-PL": "Zdarzenie",
        "pt-BR": "Evento",
        "ru-RU": "Событие",
        "zh-CN": "事件"
    },
    "eventPlayer": {
        "guid": "00000000B25A",
        "en-US": "Player",
        "es-ES": "Jugador",
        "es-MX": "Jugador",
        "fr-FR": "Joueur",
        "it-IT": "Giocatore",
        "ja-JP": "プレイヤー",
        "pl-PL": "Gracz",
        "pt-BR": "Jogador",
        "ru-RU": "Игрок",
        "zh-CN": "玩家"
    },
    "eventTeam": {
        "guid": "00000000B23A",
        "en-US": "Team",
        "es-ES": "Equipo",
        "es-MX": "Equipo",
        "fr-FR": "Équipe",
        "it-IT": "Squadra",
        "ja-JP": "チーム",
        "pl-PL": "Drużyna",
        "pt-BR": "Equipe",
        "ru-RU": "Команда",
        "zh-CN": "队伍"
    },
    "subroutineName": {
        "guid": "00000000FEBE",
        "en-US": "Subroutine",
        "es-ES": "Subrutina",
        "es-MX": "Subrutina",
        "fr-FR": "Sous-programme",
        "ja-JP": "サブルーチン",
        "pl-PL": "Podprogram",
        "pt-BR": "Sub-rotina",
        "ru-RU": "Подпрограмма",
        "zh-CN": "子程序",
        "zh-TW": "子程序"
    }
}
//end-json

const workshopUiKw =
//begin-json
{
    "action": {
        "guid": "00000000BBC7",
        "en-US": "Action",
        "de-DE": "Aktion",
        "es-ES": "Acción",
        "es-MX": "Acción",
        "it-IT": "Azione",
        "ja-JP": "アクション",
        "pl-PL": "Działanie",
        "pt-BR": "Ação",
        "ru-RU": "Действие",
        "zh-CN": "动作",
        "zh-TW": "動作"
    },
    "actions": {
        "guid": "0000000077D4",
        "en-US": "Actions",
        "de-DE": "Aktionen",
        "es-ES": "Acciones",
        "es-MX": "Acciones",
        "it-IT": "Azioni",
        "ja-JP": "アクション",
        "pl-PL": "Działania",
        "pt-BR": "Ações",
        "ru-RU": "Действия",
        "zh-CN": "动作",
        "zh-TW": "動作"
    },
    "addAction": {
        "guid": "00000000BB39",
        "en-US": "Create Action",
        "de-DE": "Aktion hinzufügen",
        "es-ES": "Crear acción",
        "es-MX": "Crear acción",
        "fr-FR": "Créer une action",
        "it-IT": "Crea azione",
        "ja-JP": "アクションを作成",
        "ko-KR": "Action 생성",
        "pl-PL": "Stwórz działanie",
        "pt-BR": "Criar Ação",
        "ru-RU": "Создать действие",
        "zh-CN": "创建动作",
        "zh-TW": "建立動作"
    },
    "addCondition": {
        "guid": "00000000BB38",
        "en-US": "Create Condition",
        "de-DE": "Bedingung hinzufügen",
        "es-ES": "Crear condición",
        "es-MX": "Crear condición",
        "fr-FR": "Créer une condition",
        "it-IT": "Crea condizione",
        "ja-JP": "条件を作成",
        "ko-KR": "Condition 생성",
        "pl-PL": "Stwórz warunek",
        "pt-BR": "Criar Condição",
        "ru-RU": "Создать условие",
        "zh-CN": "创建条件",
        "zh-TW": "建立條件"
    },
    "cancel": {
        "guid": "0000000076E9",
        "en-US": "Cancel",
        "de-DE": "Abbrechen",
        "es-ES": "Cancelar",
        "es-MX": "Cancelar",
        "fr-FR": "Annuler",
        "it-IT": "Annulla",
        "ja-JP": "キャンセル",
        "ko-KR": "취소",
        "pl-PL": "Anuluj",
        "pt-BR": "Cancelar",
        "ru-RU": "Отмена",
        "zh-CN": "取消",
        "zh-TW": "取消"
    },
    "conditions": {
        "guid": "0000000077D3",
        "en-US": "Conditions",
        "de-DE": "Bedingungen",
        "es-ES": "Condiciones",
        "es-MX": "Condiciones",
        "it-IT": "Condizioni",
        "ja-JP": "条件",
        "pl-PL": "Warunki",
        "pt-BR": "Condições",
        "ru-RU": "Условия",
        "zh-CN": "条件",
        "zh-TW": "條件"
    },
    "conflictingGlobalVarName": {
        "guid": "00000000EB21",
        "en-US": "Error: Global variable '%1$s' conflicts with another variable",
        "de-DE": "Fehler: Globale Variable [%1$s] steht in Konflikt mit einer anderen Variable.",
        "es-ES": "Error: La variable global «%1$s» entra en conflicto con otra variable.",
        "es-MX": "Error: La variable global '%1$s' está en conflicto con otra variable",
        "fr-FR": "Erreur : la variable globale « %1$s » entre en conflit avec une autre variable",
        "it-IT": "Errore: la Variabile Globale '%1$s' è in conflitto con un'altra variabile",
        "ja-JP": "エラー: グローバル変数「%1$s」が他の変数と矛盾しています",
        "ko-KR": "오류: 전역 변수 '%1$s'이(가) 다른 변수와 충돌합니다.",
        "pl-PL": "Błąd: Występuje konflikt globalnej zmiennej „%1$s” z inną zmienną",
        "pt-BR": "Erro: Conflito da variável global '%1$s' com outra variável",
        "ru-RU": "Ошибка: обнаружен конфликт глобальной переменной '%1$s' с другой переменной",
        "zh-CN": "错误：全局变量”%1$s“与另一个变量冲突",
        "zh-TW": "錯誤：全域變數'%1$s'與其它變數相衝突"
    },
    "conflictingPlayerVarName": {
        "guid": "00000000EB2B",
        "en-US": "Error: Player variable '%1$s' conflicts with another variable",
        "de-DE": "Fehler: Spielervariable [%1$s] steht in Konflikt mit einer anderen Variable.",
        "es-ES": "Error: La variable de jugador «%1$s» entra en conflicto con otra variable.",
        "es-MX": "Error: La variable de jugador '%1$s' está en conflicto con otra variable",
        "fr-FR": "Erreur : la variable de joueur « %1$s » entre en conflit avec une autre variable",
        "it-IT": "Errore: la Variabile Giocatore '%1$s' è in conflitto con un'altra variabile",
        "ja-JP": "エラー: プレイヤー変数「%1$s」が他の変数と矛盾しています",
        "ko-KR": "오류: 플레이어 변수 '%1$s'이(가) 다른 변수와 충돌합니다.",
        "pl-PL": "Błąd: Występuje konflikt globalnej „%1$s” gracza z inną zmienną.",
        "pt-BR": "Erro: Conflito da variável de jogador '%1$s' com outra variável",
        "ru-RU": "Ошибка: обнаружен конфликт переменной игрока '%1$s' с другой переменной",
        "zh-CN": "错误：玩家变量”%1$s“与另一个变量冲突",
        "zh-TW": "錯誤：玩家變數'%1$s'與其它變數相衝突"
    },
    "conflictingSubroutineName": {
        "guid": "00000000FEDD",
        "en-US": "Error: Subroutine '%1$s' conflicts with another subroutine",
        "de-DE": "Fehler: Subroutine [%1$s] steht in Konflikt mit einer anderen Subroutine.",
        "es-ES": "Error: La subrutina «%1$s» entra en conflicto con otra.",
        "es-MX": "Error: La subrutina '%1$s' está en conflicto con otra subrutina",
        "fr-FR": "Erreur : le sous-programme « %1$s » est en conflit avec un autre sous-programme",
        "it-IT": "Errore: la Subroutine '%1$s' è in conflitto con un'altra subroutine",
        "ja-JP": "エラー: サブルーチン「%1$s」が他のサブルーチンと矛盾しています",
        "ko-KR": "오류: '%1$s' 서브루틴이 다른 서브루틴과 충돌합니다.",
        "pl-PL": "Błąd: Konflikt podprogramu „%1$s” z innym podprogramem",
        "pt-BR": "Erro: Sub-rotina '%1$s' está em conflito com outra",
        "ru-RU": "Ошибка: подпрограмма '%1$s' конфликтует с другой подпрограммой",
        "zh-CN": "错误：子程序”%1$s“与另一个子程序冲突",
        "zh-TW": "錯誤：子程序'%1$s'與其它子程序相衝突"
    },
    "deleteActions": {
        "guid": "00000000BA15",
        "en-US": "Delete (%1$s) |RplAction:Actions;?",
        "de-DE": "(%1$s) |RplAktion:Aktionen; löschen?",
        "es-ES": "¿Eliminar (%1$s) |Rplacción:acciones;?",
        "es-MX": "¿Deseas eliminar (%1$s) |Rpl la acción:las acciones?",
        "fr-FR": "Supprimer %1$s |Rplaction:actions; ?",
        "it-IT": "Eliminare (%1$s) |Rplazione:azioni;?",
        "ja-JP": "（%1$s）個のアクションを削除しますか？",
        "ko-KR": "Action (%1$s)개를 삭제하시겠습니까?",
        "pl-PL": "Usunąć (%1$s) |Rpldziałanie:działania:działań;?",
        "pt-BR": "Excluir (%1$s) |RplAção:Ações;?",
        "ru-RU": "Удалить (%1$s) |Rplдействие:действия:действий;?",
        "zh-CN": "删除这(%1$s)个动作？",
        "zh-TW": "刪除這(%1$s)個動作？"
    },
    "deleteConditions": {
        "guid": "00000000BA16",
        "en-US": "Delete (%1$s) |RplCondition:Conditions;?",
        "de-DE": "(%1$s) |RplBedingung:Bedingungen; löschen?",
        "es-ES": "¿Eliminar (%1$s) |Rplcondición:condiciones;?",
        "es-MX": "¿Deseas eliminar (%1$s) |Rpl la condición:las condiciones?",
        "fr-FR": "Supprimer %1$s |Rplcondition:conditions; ?",
        "it-IT": "Eliminare (%1$s) |Rplcondizione:condizioni;?",
        "ja-JP": "（%1$s）個の条件を削除しますか？",
        "ko-KR": "Condition (%1$s)개를 삭제하시겠습니까?",
        "pl-PL": "Usunąć (%1$s) |Rplwarunek:warunki:warunków;?",
        "pt-BR": "Excluir (%1$s) |RplCondição:Condições;?",
        "ru-RU": "Удалить (%1$s) |Rplусловие:условия:условий;?",
        "zh-CN": "删除这(%1$s)个条件？",
        "zh-TW": "刪除這(%1$s)個條件？"
    },
    "deleteRules": {
        "guid": "00000000BA17",
        "en-US": "Delete (%1$s) |RplRule:Rules;?",
        "de-DE": "%1$s |RplRegel:Regeln; löschen?",
        "es-ES": "¿Eliminar (%1$s) |Rplregla:reglas;?",
        "es-MX": "¿Deseas eliminar (%1$s) |Rpl la regla:las reglas?",
        "fr-FR": "Supprimer %1$s |Rplrègle:règles; ?",
        "it-IT": "Eliminare (%1$s) |Rplregola:regole;?",
        "ja-JP": "（%1$s）個のルールを削除しますか？",
        "ko-KR": "Rule (%1$s)개를 삭제하시겠습니까?",
        "pl-PL": "Usunąć (%1$s) |Rplregułę:reguły:reguł;?",
        "pt-BR": "Excluir (%1$s) |RplRegra:Regras;?",
        "ru-RU": "Удалить (%1$s) |Rplправило:правила:правил;?",
        "zh-CN": "删除这(%1$s)个规则？",
        "zh-TW": "刪除這(%1$s)個規則？"
    },
    "editAction": {
        "guid": "00000000B988",
        "en-US": "Edit Action",
        "de-DE": "Aktion bearbeiten",
        "es-ES": "Editar acción",
        "es-MX": "Editar acción",
        "fr-FR": "Éditer l’action",
        "it-IT": "Modifica azione",
        "ja-JP": "アクションを編集",
        "ko-KR": "Action 편집",
        "pl-PL": "Edytuj działanie",
        "pt-BR": "Editar Ação",
        "ru-RU": "Изменить действие",
        "zh-CN": "编辑动作",
        "zh-TW": "編輯動作"
    },
    "editComment": {
        "guid": "00000000FBAC",
        "en-US": "Edit Comment",
        "de-DE": "Kommentar bearbeiten",
        "es-ES": "Editar comentario",
        "es-MX": "Editar comentario",
        "fr-FR": "Éditer le commentaire",
        "it-IT": "Modifica commento",
        "ja-JP": "コメントを編集",
        "ko-KR": "코멘트 편집",
        "pl-PL": "Edytuj komentarz",
        "pt-BR": "Editar comentário",
        "ru-RU": "Комментарий",
        "zh-CN": "编辑注释",
        "zh-TW": "編輯註解"
    },
    "editCondition": {
        "guid": "00000000B987",
        "en-US": "Edit Condition",
        "de-DE": "Bedingung bearbeiten",
        "es-ES": "Editar condición",
        "es-MX": "Editar condición",
        "fr-FR": "Éditer la condition",
        "it-IT": "Modifica condizione",
        "ja-JP": "条件を編集",
        "ko-KR": "Condition 편집",
        "pl-PL": "Edytuj warunek",
        "pt-BR": "Editar Condição",
        "ru-RU": "Изменить условие",
        "zh-CN": "编辑条件",
        "zh-TW": "編輯條件"
    },
    "editExtensions": {
        "guid": "000000012996",
        "en-US": "Edit Extensions",
        "de-DE": "Erweiterungen bearbeiten",
        "es-ES": "Editar extensiones",
        "es-MX": "Editar extensiones",
        "fr-FR": "Éditer les extensions",
        "it-IT": "Modifica estensioni",
        "ja-JP": "拡張を編集",
        "ko-KR": "확장 편집",
        "pl-PL": "Edytuj rozszerzenia",
        "pt-BR": "Editar Extensões",
        "ru-RU": "Расширения",
        "zh-CN": "编辑扩展",
        "zh-TW": "編輯擴充功能"
    },
    "editSubroutineNames": {
        "guid": "00000000FFF3",
        "en-US": "Edit Subroutine Names",
        "de-DE": "Subroutinennamen ändern",
        "es-ES": "Editar nombres de subrutinas",
        "es-MX": "Editar nombres de subrutina",
        "fr-FR": "Éditer les noms de sous-programmes",
        "it-IT": "Modifica nomi subroutine",
        "ja-JP": "サブルーチンの名前を編集",
        "ko-KR": "Subroutine 이름 편집",
        "pl-PL": "Edytuj nazwy podprogramów",
        "pt-BR": "Editar nomes de sub-rotinas",
        "ru-RU": "Изменить имена подпрограмм",
        "zh-CN": "编辑子程序名称",
        "zh-TW": "編輯子程序命名"
    },
    "editVariableNames": {
        "guid": "00000000EAAB",
        "en-US": "Edit Variable Names",
        "de-DE": "Variablennamen ändern",
        "es-ES": "Editar nombres de variables",
        "es-MX": "Editar nombres de variables",
        "fr-FR": "Modifier les noms de variables",
        "it-IT": "Modifica nomi variabili",
        "ja-JP": "変数の名前を編集",
        "ko-KR": "Variable 이름 편집",
        "pl-PL": "Edytuj nazwy zmiennych",
        "pt-BR": "Editar Nomes de Variáveis",
        "ru-RU": "Изменить имена переменных",
        "zh-CN": "编辑变量名",
        "zh-TW": "編輯變數命名"
    },
    "emptyGlobalVarName": {
        "guid": "00000000EB29",
        "en-US": "Error: Global variable '%1$s' requires a name",
        "de-DE": "Fehler: Globale Variable [%1$s] benötigt einen Namen.",
        "es-ES": "Error: La variable global «%1$s» requiere un nombre.",
        "es-MX": "Error: La variable global '%1$s' requiere un nombre",
        "fr-FR": "Erreur : la variable globale « %1$s » doit être nommée",
        "it-IT": "Errore: la Variabile Globale '%1$s' richiede un nome",
        "ja-JP": "エラー: グローバル変数「%1$s」の名前が必要です",
        "ko-KR": "오류: 전역 변수 '%1$s'에 이름이 필요합니다.",
        "pl-PL": "Błąd: Zmienna globalna (%1$s) wymaga nazwy",
        "pt-BR": "Erro: A variável global '%1$s' requer um nome",
        "ru-RU": "Ошибка: глобальной переменной '%1$s' требуется имя",
        "zh-CN": "错误：全局变量“%1$s“需要一个名称",
        "zh-TW": "錯誤：全域變數'%1$s'需要命名"
    },
    "emptyPlayerVarName": {
        "guid": "00000000EB1E",
        "en-US": "Error: Player variable '%1$s' requires a name",
        "de-DE": "Fehler: Spielervariable [%1$s] benötigt einen Namen.",
        "es-ES": "Error: La variable de jugador «%1$s» requiere un nombre.",
        "es-MX": "Error: La variable de jugador '%1$s' requiere un nombre",
        "fr-FR": "Erreur : la variable de joueur « %1$s » doit être nommée",
        "it-IT": "Errore: la Variabile Giocatore '%1$s' richiede un nome",
        "ja-JP": "エラー: プレイヤー変数「%1$s」の名前が必要です",
        "ko-KR": "오류: 플레이어 변수 '%1$s'에 이름이 필요합니다.",
        "pl-PL": "Błąd: Zmienna gracza (%1$s) wymaga nazwy",
        "pt-BR": "Erro: A variável de jogador '%1$s' requer um nome",
        "ru-RU": "Ошибка: переменной игрока '%1$s' требуется имя",
        "zh-CN": "错误：玩家变量“%1$s“需要一个名称",
        "zh-TW": "錯誤：玩家變數'%1$s'需要命名"
    },
    "emptySubroutineName": {
        "guid": "00000000FEDA",
        "en-US": "Error: Subroutine '%1$s' requires a name",
        "de-DE": "Fehler: Subroutine [%1$s] benötigt einen Namen.",
        "es-ES": "Error: La subrutina «%1$s» requiere un nombre.",
        "es-MX": "Error: La subrutina '%1$s' requiere un nombre",
        "fr-FR": "Erreur : le sous-programme « %1$s » requiert un nom",
        "it-IT": "Errore: la Subroutine '%1$s' richiede un nome",
        "ja-JP": "エラー: サブルーチン「%1$s」の名前が必要です",
        "ko-KR": "오류: '%1$s' 서브루틴에 이름이 필요합니다.",
        "pl-PL": "Błąd: Podprogram „%1$s” wymaga nazwy",
        "pt-BR": "Erro: Sub-rotina '%1$s' requer um nome",
        "ru-RU": "Ошибка: подпрограмме '%1$s' требуется имя",
        "zh-CN": "错误：子程序“%1$s“需要一个名称",
        "zh-TW": "錯誤：子程序'%1$s'需要命名"
    },
    "extensionPointsAvailable": {
        "guid": "000000012A6A",
        "en-US": "Extension Points Available",
        "de-DE": "Verfügbare Erweiterungspunkte",
        "es-ES": "Puntos de extensión disponibles",
        "es-MX": "Puntos de extensión disponibles",
        "fr-FR": "Points d’extension disponibles",
        "it-IT": "Punti estensione disponibili",
        "ja-JP": "利用可能拡張ポイント",
        "ko-KR": "사용 가능한 확장 포인트",
        "pl-PL": "Dostępne punkty rozszerzeń",
        "pt-BR": "Pontos de Extensão Disponíveis",
        "ru-RU": "Доступные очки расширений",
        "zh-CN": "可用扩展点数",
        "zh-TW": "可用的擴充點數"
    },
    "extensionPointsAvailableDesc": {
        "guid": "000000012A6B",
        "en-US": "You can gain Extension Points by removing Player Slots or by disabling all non-Workshop Maps",
        "de-DE": "Du erhältst Erweiterungspunkte, indem du Spielerslots entfernst oder alle Karten deaktivierst, die nicht aus dem Workshop stammen.",
        "es-ES": "Puedes conseguir puntos de extensión eliminando ranuras de jugador o desactivando todos los mapas que no son del Taller.",
        "es-MX": "Puedes obtener puntos de extensión si eliminas puestos de jugadores o si deshabilitas todos los mapas que no sean del Workshop.",
        "fr-FR": "Vous pouvez gagner des points d’extension en supprimant des emplacements de joueurs ou en désactivant toutes les cartes qui ne proviennent pas de la Forge",
        "it-IT": "Puoi ottenere punti estensione rimuovendo slot giocatore o disattivando le mappe non appartenenti al Workshop",
        "ja-JP": "プレイヤースロットを削除するか、すべての非「WORKSHOP」マップを無効化すると、拡張ポイントを得られる",
        "ko-KR": "확장 포인트는 플레이어 슬롯을 제거하거나 워크샵이 아닌 전장을 모두 비활성화하여 얻을 수 있습니다",
        "pl-PL": "Możesz zdobyć punkty rozszerzeń, usuwając miejsca dla graczy lub wyłączając wszystkie mapy niewarsztatowe.",
        "pt-BR": "Você pode receber Pontos de Extensão removendo Espaços de Jogador ou desativando todos os Mapas que não forem do Workshop",
        "ru-RU": "Чтобы получить очки расширений, уберите ячейки игроков или оставьте только поля боя из категории «Мастерская».",
        "zh-CN": "移除玩家栏位或禁用所有非地图工坊地图即可获得扩展点数",
        "zh-TW": "移除玩家欄位或關閉所有非工作坊地圖可獲得擴充點數"
    },
    "extensionPointsSpent": {
        "guid": "000000012A8B",
        "en-US": "Extension Points Spent",
        "de-DE": "Verwendete Erweiterungspunkte",
        "es-ES": "Puntos de extensión empleados",
        "es-MX": "Puntos de extensión gastados",
        "fr-FR": "Points d’extension dépensés",
        "it-IT": "Punti estensione spesi",
        "ja-JP": "消費拡張ポイント",
        "ko-KR": "사용한 확장 포인트",
        "pl-PL": "Użyte punkty rozszerzeń",
        "pt-BR": "Pontos de Extensão Gastos",
        "ru-RU": "Потраченные очки расширений",
        "zh-CN": "已用扩展点数",
        "zh-TW": "消耗的擴充點數"
    },
    "extensionPointsSpentDesc": {
        "guid": "000000012A8D",
        "en-US": "Extension Points Spent cannot exceed Extension Points Available",
        "de-DE": "Es können nicht mehr Erweiterungspunkte verwendet werden, als verfügbar sind.",
        "es-ES": "Los puntos de extensión empleados no pueden superar los puntos de extensión disponibles.",
        "es-MX": "Los puntos de extensión gastados no pueden exceder los puntos de extensión disponibles",
        "fr-FR": "Les points d’extension dépensés ne peuvent pas dépasser les points d’extension disponibles",
        "it-IT": "I punti estensione spesi non possono superare quelli disponibili",
        "ja-JP": "消費拡張ポイントは利用可能拡張ポイント以下に収める必要がある",
        "ko-KR": "사용한 확장 포인트는 사용 가능한 확장 포인트를 초과할 수 없습니다",
        "pl-PL": "Liczba użytych punktów rozszerzeń nie może przekroczyć dostępnych punktów rozszerzeń",
        "pt-BR": "Os Pontos de Extensão Gastos não podem exceder os Pontos de Extensão Disponíveis",
        "ru-RU": "Количество потраченных очков расширений не должно превышать количество доступных очков.",
        "zh-CN": "已用扩展点数不能超过可用扩展点数",
        "zh-TW": "消耗的擴充點數不可大於可用的擴充點數"
    },
    "invalidGlobalVarName": {
        "guid": "00000000EB25",
        "en-US": "Error: Global variable '%1$s' contains an invalid name",
        "de-DE": "Fehler: Globale Variable [%1$s] enthält einen ungültigen Namen.",
        "es-ES": "Error: La variable global «%1$s» contiene un nombre no válido.",
        "es-MX": "Error: La variable global '%1$s' contiene un nombre no válido",
        "fr-FR": "Erreur : la variable globale « %1$s » contient un nom invalide",
        "it-IT": "Errore: la Variabile Globale '%1$s' contiene un nome non valido",
        "ja-JP": "エラー: グローバル変数「%1$s」に無効な名前が含まれています",
        "ko-KR": "오류: 전역 변수 '%1$s'이(가) 유효하지 않은 이름을 포함하고 있습니다.",
        "pl-PL": "Błąd: Zmienna globalna (%1$s) zawiera nieprawidłową nazwę",
        "pt-BR": "Erro: A variável global '%1$s' contém um nome inválido",
        "ru-RU": "Ошибка: глобальная переменная '%1$s' содержит некорректное имя",
        "zh-CN": "错误：全局变量”%1$s“包含无效的名称",
        "zh-TW": "錯誤：全域變數'%1$s'包含無效命名"
    },
    "invalidPlayerVarName": {
        "guid": "00000000EB2A",
        "en-US": "Error: Player variable '%1$s' contains an invalid name",
        "de-DE": "Fehler: Spielervariable [%1$s] enthält einen ungültigen Namen.",
        "es-ES": "Error: La variable de jugador «%1$s» contiene un nombre no válido.",
        "es-MX": "Error: La variable de jugador '%1$s' contiene un nombre no válido",
        "fr-FR": "Erreur : la variable de joueur « %1$s » contient un nom invalide",
        "it-IT": "Errore: la Variabile Giocatore '%1$s' contiene un nome non valido",
        "ja-JP": "エラー: プレイヤー変数「%1$s」に無効な名前が含まれています",
        "ko-KR": "오류: 플레이어 변수 '%1$s'이(가) 유효하지 않은 이름을 포함하고 있습니다.",
        "pl-PL": "Błąd: Zmienna gracza (%1$s) zawiera nieprawidłową nazwę",
        "pt-BR": "Erro: A variável de jogador '%1$s' contém um nome inválido",
        "ru-RU": "Ошибка: переменная игрока '%1$s' содержит некорректное имя",
        "zh-CN": "错误：玩家变量”%1$s“包含无效的名称",
        "zh-TW": "錯誤：玩家變數'%1$s'包含無效命名"
    },
    "invalidSubroutineName": {
        "guid": "00000000FEDC",
        "en-US": "Error: Subroutine '%1$s' contains an invalid name",
        "de-DE": "Fehler: Subroutine [%1$s] enthält einen ungültigen Namen.",
        "es-ES": "Error: La subrutina «%1$s» contiene un nombre no válido.",
        "es-MX": "Error: La subrutina '%1$s' contiene un nombre no válido",
        "fr-FR": "Erreur : le sous-programme « %1$s » contient un nom invalide",
        "it-IT": "Errore: la Subroutine '%1$s' contiene un nome non valido",
        "ja-JP": "エラー: サブルーチン「%1$s」に無効な名前が含まれています",
        "ko-KR": "오류: '%1$s' 서브루틴에 유효하지 않은 이름이 포함되어 있습니다.",
        "pl-PL": "Błąd: Podprogram „%1$s” zawiera nieprawidłową nazwę",
        "pt-BR": "Erro: Sub-rotina '%1$s' contém nome inválido",
        "ru-RU": "Ошибка: подпрограмма '%1$s' содержит некорректное имя",
        "zh-CN": "错误：子程序”%1$s“包含无效的名称",
        "zh-TW": "錯誤：子程序'%1$s'的命名無效"
    },
    "noActions": {
        "guid": "00000000BA40",
        "en-US": "No Actions",
        "de-DE": "Keine Aktionen",
        "es-ES": "No hay acciones",
        "es-MX": "Sin acciones",
        "fr-FR": "Aucune action",
        "it-IT": "Nessuna azione",
        "ja-JP": "アクションなし",
        "ko-KR": "Action 없음",
        "pl-PL": "Brak działań",
        "pt-BR": "Sem Ações",
        "ru-RU": "Нет действий",
        "zh-CN": "无动作",
        "zh-TW": "無動作"
    },
    "noConditions": {
        "guid": "00000000BA41",
        "en-US": "No Conditions",
        "de-DE": "Keine Bedingungen",
        "es-ES": "No hay condiciones",
        "es-MX": "Sin condiciones",
        "fr-FR": "Aucune condition",
        "it-IT": "Nessuna condizione",
        "ja-JP": "条件なし",
        "ko-KR": "Condition 없음",
        "pl-PL": "Brak warunków",
        "pt-BR": "Sem Condições",
        "ru-RU": "Нет условий",
        "zh-CN": "无条件",
        "zh-TW": "無條件"
    },
    "noRules": {
        "guid": "00000000BA3F",
        "en-US": "No Rules",
        "de-DE": "Keine Regeln",
        "es-ES": "No hay reglas",
        "es-MX": "Sin reglas",
        "fr-FR": "Aucune règle",
        "it-IT": "Nessuna regola",
        "ja-JP": "ルールなし",
        "ko-KR": "Rule 없음",
        "pl-PL": "Brak reguł",
        "pt-BR": "Sem Regras",
        "ru-RU": "Нет правил",
        "zh-CN": "无规则",
        "zh-TW": "無規則"
    },
    "notEnoughExtensionPoints": {
        "guid": "000000012C28",
        "en-US": "Error: Too many Workshop Extension Points spent; please remove one or more Extensions.",
        "de-DE": "Fehler: Zu viele Erweiterungspunkte verwendet. Bitte entferne eine oder mehr Erweiterungen.",
        "es-ES": "Error: Se han empleado demasiados puntos de extensión del Taller. Elimina una o más extensiones.",
        "es-MX": "Error: Demasiados puntos de extensión del Workshop gastados; elimina una o más extensiones.",
        "fr-FR": "Erreur : trop de points d’extension de la Forge dépensés ; veuillez supprimer une ou plusieurs extensions.",
        "it-IT": "Errore: hai speso troppi punti estensione Workshop. Rimuovi una o più estensioni.",
        "ja-JP": "エラー: 消費拡張ポイントが多すぎます。拡張を1つ以上削除してください",
        "ko-KR": "경고: 사용한 워크샵 확장 포인트가 너무 많습니다. 하나 이상의 확장을 제거하십시오.",
        "pl-PL": "Błąd: Użyto zbyt wiele punktów rozszerzeń Warsztatu; usuń jedno lub więcej rozszerzeń.",
        "pt-BR": "Erro: Excesso de gastos de Pontos de Extensão do Workshop; remova uma ou mais Extensões.",
        "ru-RU": "Ошибка: потрачено слишком много очков расширений «Мастерской». Удалите одно или несколько расширений.",
        "zh-CN": "错误：已用地图工坊扩展点数过多；请移除一项或多项扩展。",
        "zh-TW": "錯誤：消耗的工作坊擴充點數過多，請移除至少一個擴充"
    },
    "ok": {
        "guid": "0000000076E8",
        "en-US": "Ok",
        "de-DE": "OK",
        "es-ES": "Aceptar",
        "es-MX": "Aceptar",
        "fr-FR": "OK",
        "it-IT": "OK",
        "ja-JP": "OK",
        "ko-KR": "확인",
        "pl-PL": "OK",
        "ru-RU": "ОК",
        "zh-CN": "确定",
        "zh-TW": "確認"
    },
    "resetToDefaults": {
        "guid": "00000000FFF5",
        "en-US": "Reset to Defaults",
        "de-DE": "Einstellungen zurücksetzen",
        "es-ES": "Restablecer valores por defecto",
        "es-MX": "Restablecer a valores predeterminados",
        "fr-FR": "Paramètres par défaut",
        "it-IT": "Ripristina le impostazioni predefinite",
        "ja-JP": "デフォルトに戻す",
        "ko-KR": "기본값으로 다시 설정",
        "pl-PL": "Przywróć domyślne",
        "pt-BR": "Restaurar predefinições",
        "ru-RU": "По умолчанию",
        "zh-CN": "重设为默认",
        "zh-TW": "恢復為預設值"
    },
    "rule": {
        "guid": "00000000AD34",
        "en-US": "Rule %1$s",
        "es-ES": "Regla %1$s",
        "es-MX": "Regla %1$s",
        "fr-FR": "Règle %1$s",
        "it-IT": "Regola %1$s",
        "ja-JP": "ルール%1$s",
        "pl-PL": "Reguła %1$s",
        "pt-BR": "Regra %1$s",
        "ru-RU": "Правило %1$s",
        "zh-CN": "规则 %1$s"
    },
    "rules": {
        "guid": "00000000B98E",
        "en-US": "Rules",
        "de-DE": "Regeln",
        "es-ES": "Reglas",
        "es-MX": "Reglas",
        "fr-FR": "Règles",
        "it-IT": "Regole",
        "ja-JP": "ルール",
        "pl-PL": "Reguły",
        "pt-BR": "Regras",
        "ru-RU": "Правила",
        "zh-CN": "规则",
        "zh-TW": "規則"
    },
    "scriptDiagnostics": {
        "guid": "00000000F418",
        "en-US": "Script Diagnostics",
        "de-DE": "Skriptdiagnostik",
        "es-ES": "Diagnóstico de script",
        "es-MX": "Diagnóstico de secuencia de comandos",
        "fr-FR": "Diagnostic du script",
        "it-IT": "Diagnostica script",
        "ja-JP": "スクリプト診断",
        "ko-KR": "스크립트 진단",
        "pl-PL": "Diagnostyka skryptu",
        "pt-BR": "Diagnóstico de script",
        "ru-RU": "Диагностика скрипта",
        "zh-CN": "诊断脚本",
        "zh-TW": "腳本診斷分析"
    },
    "settings": {
        "guid": "000000002CD4",
        "en-US": "SETTINGS",
        "de-DE": "EINSTELLUNGEN",
        "es-ES": "AJUSTES",
        "es-MX": "CONFIGURACIÓN",
        "fr-FR": "PARAMÈTRES",
        "it-IT": "IMPOSTAZIONI",
        "ja-JP": "設定",
        "ko-KR": "설정",
        "pl-PL": "USTAWIENIA",
        "pt-BR": "CONFIGURAÇÕES",
        "ru-RU": "НАСТРОЙКИ",
        "zh-CN": "比赛设置",
        "zh-TW": "設定"
    },
    "tooLongGlobalVarName": {
        "guid": "00000000EB2F",
        "en-US": "Error: Global variable '%1$s' contains a name that is too long",
        "de-DE": "Fehler: Globale Variable [%1$s] enthält einen zu langen Namen.",
        "es-ES": "Error: La variable global «%1$s» contiene un nombre demasiado largo.",
        "es-MX": "Error: La variable global '%1$s' contiene un nombre que es demasiado largo",
        "fr-FR": "Erreur : la variable globale « %1$s » contient un nom trop long",
        "it-IT": "Errore: la Variabile Globale '%1$s' contiene un nome troppo lungo",
        "ja-JP": "エラー: グローバル変数「%1$s」に含まれる名前が長すぎます",
        "ko-KR": "오류: 전역 변수 '%1$s'이(가) 너무 긴 이름을 포함하고 있습니다.",
        "pl-PL": "Błąd: Zmienna globalna (%1$s) zawiera zbyt długą nazwę",
        "pt-BR": "Erro: A variável global '%1$s' contém um nome muito longo",
        "ru-RU": "Ошибка: глобальная переменная '%1$s' содержит слишком длинное имя",
        "zh-CN": "错误：全局变量”%1$s“包含过长的名称",
        "zh-TW": "錯誤：全域變數'%1$s'包含過長的命名"
    },
    "tooLongPlayerVarName": {
        "guid": "00000000EB2E",
        "en-US": "Error: Player variable '%1$s' contains a name that is too long",
        "de-DE": "Fehler: Spielervariable [%1$s] enthält einen zu langen Namen.",
        "es-ES": "Error: La variable de jugador «%1$s» contiene un nombre demasiado largo.",
        "es-MX": "Error: La variable de jugador '%1$s' contiene un nombre que es demasiado largo",
        "fr-FR": "Erreur : la variable de joueur « %1$s » contient un nom trop long",
        "it-IT": "Errore: la Variabile Giocatore '%1$s' contiene un nome troppo lungo",
        "ja-JP": "エラー: プレイヤー変数「%1$s」に含まれる名前が長すぎます",
        "ko-KR": "오류: 플레이어 변수 '%1$s'이(가) 너무 긴 이름을 포함하고 있습니다.",
        "pl-PL": "Błąd: Zmienna gracza (%1$s) zawiera zbyt długą nazwę",
        "pt-BR": "Erro: A variável de jogador '%1$s' contém um nome muito longo",
        "ru-RU": "Ошибка: переменная игрока '%1$s' содержит слишком длинное имя",
        "zh-CN": "错误：玩家变量”%1$s“包含过长的名称",
        "zh-TW": "錯誤：玩家變數'%1$s'包含過長的命名"
    },
    "tooLongSubroutineName": {
        "guid": "00000000FEDB",
        "en-US": "Error: Subroutine '%1$s' contains a name that is too long",
        "de-DE": "Fehler: Subroutine [%1$s] enthält einen zu langen Namen.",
        "es-ES": "Error: La subrutina «%1$s» contiene un nombre demasiado largo.",
        "es-MX": "Error: La subrutina '%1$s' contiene un nombre que es demasiado largo",
        "fr-FR": "Erreur : le sous-programme « %1$s » contient un nom trop long",
        "it-IT": "Errore: la Subroutine '%1$s' contiene un nome troppo lungo",
        "ja-JP": "エラー: サブルーチン「%1$s」に含まれる名前が長すぎます",
        "ko-KR": "오류: '%1$s' 서브루틴에 너무 긴 이름이 포함되어 있습니다.",
        "pl-PL": "Błąd: Podprogram „%1$s” zawiera zbyt długą nazwę",
        "pt-BR": "Erro: Sub-rotina '%1$s' contém um nome muito longo",
        "ru-RU": "Ошибка: подпрограмма '%1$s' содержит слишком длинное имя",
        "zh-CN": "错误：子程序”%1$s“包含过长的名称",
        "zh-TW": "錯誤：子程序'%1$s'包含過長的命名"
    },
    "totalElementCount": {
        "guid": "00000000F41B",
        "en-US": "Total Element Count",
        "de-DE": "Gesamtanzahl aller Elemente",
        "es-ES": "Total de elementos",
        "es-MX": "Recuento total de elementos",
        "fr-FR": "Nombre total d’éléments",
        "it-IT": "Numero totale elementi",
        "ja-JP": "合計要素数",
        "ko-KR": "총 요소 수",
        "pl-PL": "Łączna liczba elementów",
        "pt-BR": "Total de elementos",
        "ru-RU": "Всего элементов",
        "zh-CN": "总计元素数量",
        "zh-TW": "元件數量"
    },
    "totalElementCountDesc": {
        "guid": "00000000F41D",
        "en-US": "Elements include rules, conditions, actions, and values (up to a max of %1$s)",
        "de-DE": "Elemente schließen Regeln, Konditionen, Aktionen und Werte ein (bis zu einem Maximum von %1$s)",
        "es-ES": "Entre los elementos se incluyen reglas, condiciones, acciones y valores (hasta un máximo de %1$s)",
        "es-MX": "Los elementos incluyen reglas, condiciones, acciones y valores (hasta un máximo de %1$s)",
        "fr-FR": "Ces éléments incluent les règles, conditions, actions et valeurs (jusqu’à un maximum de %1$s).",
        "it-IT": "Gli elementi includono regole, condizioni, azioni e valori (fino a un massimo di %1$s)",
        "ja-JP": "要素にはルール、条件、アクション、値が含まれます（最大%1$sまで）",
        "ko-KR": "요소에는 규칙, 조건, 액션, 값이 포함됩니다 (최대 %1$s)",
        "pl-PL": "Do elementów zaliczają się reguły, warunki, działania i wartości (maksymalnie %1$s)",
        "pt-BR": "Elementos incluem regras, condições, ações e valores (até %1$s)",
        "ru-RU": "Элементы включают в себя правила, условия, действия и значения (вплоть до %1$s).",
        "zh-CN": "元素包括规则、条件、行动和值（最多可有%1$s个）",
        "zh-TW": "元件包括規則、條件、動作和數值（最高為%1$s）"
    }
}
//end-json

const workshopUiCustomKw = {
    "zezWorkshopUiRecreation": {
        "en-US": "Zez's workshop UI recreation",
        "zh-CN": "Zez的工坊编辑器再现",
    },
    "untitledMode": {
        "en-US": "<Untitled mode>",
        "zh-CN": "未命名的工坊",
    },
    "pressButtonToImport1": {
        "en-US": "Press the",
        "fr-FR": "Appuyez sur le bouton",
        "zh-CN": "点击",
    },
    "pressButtonToImport2": {
        "en-US": "button to import an existing gamemode",
        "fr-FR": "pour importer un mode existant",
        "zh-CN": "按钮导入模式",
    },
    "sizeOfLargestRule": {
        "en-US": "Size of largest rule",
        "zh-CN": "最大规则的大小",
    },
    "idk": {
        "en-US": "IDK",
        "zh-CN": "未知",
    },
    "howTheFuck": {
        "en-US": "How the fuck do you calculate this shit?",
        "zh-CN": "这鬼东西你怎么算?",
    },
    "hoursSpent": {
        "en-US": "Hours spent making this UI",
        "zh-CN": "制作这个UI花费的小时数",
    },
    "flexboxMaster": {
        "en-US": "I am now a master at FlexBox",
        "zh-CN": "现在我是个网页大师",
    },
    "para1": {
        "en-US": "The UI was tested on Firefox with a resolution of 1920x1080. You can zoom or dezoom if the UI is not adapted to your screen resolution.",
        "zh-CN": "本UI已在火狐浏览器1920x1080分辨率测试过. 如果本UI不符合你屏幕的分辨率你可以进行缩放大小.",
    },
    "para2": {
        "en-US": "You can save manually by clicking on the Save button:",
        "zh-CN": "你可以点击保存按钮手动保存:",
    },
    "para3": {
        "en-US": "Then, you can paste into Overwatch by clicking on the button below:",
        "zh-CN": "然后可以在守望先锋中点击如下按钮粘贴到游戏:",
    },
    "para4": {
        "en-US": "This workshop UI uses OverPy to decompile and compile. The only known limitation is that disabled actions and conditions cannot be outputted; they will be replaced by useless actions. Some errors use the OverPy syntax for functions.",
        "zh-CN": "此工坊界面使用OverPy(为工坊脚本制作的一个high-level脚本语言)工作. 已知问题只有被禁用的条件与动作会被忽略, 不会被输出; 和工坊的原有脚本错误提示会用overpy的格式来提示.",
    },
    "para5": {
        "en-US": "Below, you can configure some settings for the UI and for OverPy:",
        "zh-CN": "下方, 你可以调整一些界面设置和Overpy设置",
    },
    "para6": {
        "en-US": "如果有任何问题和反馈欢迎加入discord频道!",
    },
    "para7": {
        "en-US": "Made by Zezombye, with help from Mitsiee",
        "zh-CN": "Zezombye制作, 和Mitsiee帮助",
    },
    "importGamemode": {
        "en-US": "Import Gamemode",
        "zh-CN": "导入游戏脚本",
    },
    "importProject": {
        "en-US": "Import project:",
        "zh-CN": "导入游戏脚本:",
    },
    "pasteGamemodeHere": {
        "en-US": "Paste your gamemode here",
        "zh-CN": "粘贴你的游戏脚本到下方",
    },
    "language": {
        "en-US": "Language",
        "zh-CN": "语言",
    },
    "note1": {
        "en-US": "Note: this will erase the existing rules.",
        "zh-CN": "注意: 这操作会清除现有规则.",
    },
    "note2": {
        "en-US": "The gamemode has to be copied straight from Overwatch.",
        "zh-CN": "游戏脚本需要直接从守望先锋中复制",
    },
    "setting-optimization": {
        "en-US": "Optimization",
        "zh-CN": "优化",
    },
    "setting-optimization-none": {
        "en-US": "No optimization",
        "zh-CN": "不优化",
    },
    "setting-optimization-speed": {
        "en-US": "Optimize for speed (default)",
        "zh-CN": "优化速度 (默认)",
    },
    "setting-optimization-size": {
        "en-US": "Optimize for size (reduce element count)",
        "zh-CN": "优化大小 (减少元素数量)",
    },
    "setting-language": {
        "en-US": "UI Language",
        "zh-CN": "界面语言",
    },
    "setting-compilationLanguage": {
        "en-US": "Compilation Language",
        "zh-CN": "输出脚本语言",
    },
    "setting-language-en-US": {
        "en-US": "🍔 English [en-US]",
    },
    "setting-language-de-DE": {
        "en-US": "🍺 Deutsch [de-DE]",
    },
    "setting-language-es-ES": {
        "en-US": "🐂 Español (EU) [es-ES]",
    },
    "setting-language-es-MX": {
        "en-US": "🌮 Español (AL) [es-MX]",
    },
    "setting-language-fr-FR": {
        "en-US": "🥖 Français [fr-FR]",
    },
    "setting-language-it-IT": {
        "en-US": "🤌 Italiano [it-IT]",
    },
    "setting-language-ja-JP": {
        "en-US": "🥷 日本語 [ja-JP]",
    },
    "setting-language-ko-KR": {
        "en-US": "🎮 한국어 [ko-KR]",
    },
    "setting-language-pl-PL": {
        "en-US": "🇵🇱 Polski [pl-PL]",
    },
    "setting-language-pt-BR": {
        "en-US": "🧱 Português [pt-BR]",
    },
    "setting-language-ru-RU": {
        "en-US": "🇷🇺 Русский [ru-RU]",
    },
    "setting-language-zh-CN": {
        "en-US": "🇨🇳 简体中文 [zh-CN]",
    },
    "setting-language-zh-TW": {
        "en-US": "🇹🇼 繁體中文 [zh-TW]",
    },
    "setting-compilationLanguage-en-US": {
        "en-US": "🍔 English [en-US]",
    },
    "setting-compilationLanguage-de-DE": {
        "en-US": "🍺 Deutsch [de-DE]",
    },
    "setting-compilationLanguage-es-ES": {
        "en-US": "🐂 Español (EU) [es-ES]",
    },
    "setting-compilationLanguage-es-MX": {
        "en-US": "🌮 Español (AL) [es-MX]",
    },
    "setting-compilationLanguage-fr-FR": {
        "en-US": "🥖 Français [fr-FR]",
    },
    "setting-compilationLanguage-it-IT": {
        "en-US": "🤌 Italiano [it-IT]",
    },
    "setting-compilationLanguage-ja-JP": {
        "en-US": "🥷 日本語 [ja-JP]",
    },
    "setting-compilationLanguage-ko-KR": {
        "en-US": "🎮 한국어 [ko-KR]",
    },
    "setting-compilationLanguage-pl-PL": {
        "en-US": "🇵🇱 Polski [pl-PL]",
    },
    "setting-compilationLanguage-pt-BR": {
        "en-US": "🧱 Português [pt-BR]",
    },
    "setting-compilationLanguage-ru-RU": {
        "en-US": "🇷🇺 Русский [ru-RU]",
    },
    "setting-compilationLanguage-zh-CN": {
        "en-US": "🇨🇳 简体中文 [zh-CN]",
    },
    "setting-compilationLanguage-zh-TW": {
        "en-US": "🇹🇼 繁體中文 [zh-TW]",
    },
    "setting-background": {
        "en-US": "Background",
        "zh-CN": "背景",
    },
    "setting-background-random": {
        "en-US": "Random",
        "zh-CN": "随机",
    },
    "setting-background-blizzard_world.jpg": {
        "en-US": "Blizzard World #1",
        "zh-CN": "暴雪世界#1",
    },
    "setting-background-blizzard_world_2.jpg": {
        "en-US": "Blizzard World #2",
        "zh-CN": "暴雪世界#2",
    },
    "setting-background-busan.jpg": {
        "en-US": "Busan",
        "zh-CN": "釜山",
    },
    "setting-background-chateau_halloween.jpg": {
        "en-US": "Château Halloween",
        "zh-CN": "万圣节吉拉德堡",
    },
    "setting-background-dorado.jpg": {
        "en-US": "Dorado",
        "zh-CN": "多伦多",
    },
    "setting-background-eichenwalde.jpg": {
        "en-US": "Eichenwalde",
        "zh-CN": "艾兴瓦尔德",
    },
    "setting-background-eichenwalde_halloween.jpg": {
        "en-US": "Eichenwalde Halloween #1",
        "zh-CN": "万圣节艾兴瓦尔德#1",
    },
    "setting-background-eichenwalde_halloween_2.jpg": {
        "en-US": "Eichenwalde Halloween #2",
        "zh-CN": "万圣节艾兴瓦尔德#2",
    },
    "setting-background-hanamura.jpg": {
        "en-US": "Hanamura",
        "zh-CN": "花村",
    },
    "setting-background-kings_row.jpg": {
        "en-US": "King's Row",
        "zh-CN": "国王大道",
    },
    "setting-background-monte_carlo.jpg": {
        "en-US": "Monte Carlo #1",
        "zh-CN": "皇家赛道#1",
    },
    "setting-background-monte_carlo_2.jpg": {
        "en-US": "Monte Carlo #2",
        "zh-CN": "皇家赛道#2",
    },
    "setting-background-new_queen_street.jpg": {
        "en-US": "New Queen Street",
        "zh-CN": "新皇后街",
    },
    "setting-background-oasis.jpg": {
        "en-US": "Oasis",
        "zh-CN": "绿洲",
    },
    "setting-background-paraiso.jpg": {
        "en-US": "Paraiso",
        "zh-CN": "帕拉伊苏",
    },
    "setting-background-paris.jpg": {
        "en-US": "Paris",
        "zh-CN": "巴黎",
    },
    "setting-background-rialto.jpg": {
        "en-US": "Rialto",
        "zh-CN": "里阿尔托",
    },
    "setting-background-temple_of_anubis.jpg": {
        "en-US": "Temple of Anubis",
        "zh-CN": "阿努比斯神殿",
    },
    "setting-background-volskaya.jpg": {
        "en-US": "Volskaya",
        "zh-CN": "沃斯卡娅工业区",
    },
    "setting-background-tf2.jpg": {
        "en-US": "TF2 #1",
    },
    "setting-background-tf2_2.jpg": {
        "en-US": "TF2 #2",
    },
    "setting-background-portal_2.jpg": {
        "en-US": "Portal 2",
    },
    "setting-background-workshop.jpg": {
        "en-US": "Workshop",
        "zh-CN": "工作间",
    },
    "setting-background-forge.jpg": {
        "en-US": "Forge",
        "zh-CN": "铁匠铺",
    },
    "setting-disabledWarnings": {
        "en-US": "Disabled warnings (separate by commas)",
        "zh-CN": "禁用警告 (逗号分隔)",
    },
    "cannotImportEmptyGamemode": {
        "en-US": "Cannot import an empty gamemode",
        "zh-CN": "无法导入空游戏脚本",
    },
    "gamemodeMustHaveSettings": {
        "en-US": "Gamemode must have settings",
        "zh-CN": "游戏脚本必须有设置段落",
    },
    "contactZez": {
        "en-US": "contact Zezombye about this",
        "zh-CN": "此问题联系Zezombye",
    },
    "successfullyImported": {
        "en-US": "Successfully imported!",
        "zh-CN": "导入成功!",
    },
    "successfullyCompiled": {
        "en-US": "Successfully compiled! (copied into clipboard)",
        "zh-CN": "输出成功! (已复制到剪贴板)",
    },
    "compilationTooLong": {
        "en-US": "Compilation took too long, please click again to copy.",
        "zh-CN": "生成过久, 请重新点击复制",
    },
    "modeWillNotBeSaved": {
        "en-US": "You are not signed in and nothing you do will be saved to your account.",
        "zh-CN": "你没有登录, 你的操作不会被保存到你的本站账户.",
    },
    "pleaseSignIn": {
        "en-US": "Please sign in",
        "zh-CN": "请登录",
    },
    "youAreNotSignedIn": {
        "en-US": "You are not signed in and your mode will not be saved. It is still copied to your clipboard.",
        "zh-CN": "你没有登录, 你的工坊不会被保存. 但一样复制到了你的剪贴板.",
    }
}