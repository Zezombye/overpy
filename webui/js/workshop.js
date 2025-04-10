"use strict";

console.debug = function () {};
Vue.component("v-select", VueSelect.VueSelect);
Vue.component("function-display", {
    props: ["ast", "astIdx", "depth"],
    template: "#function-display-template",
});
Vue.component("cgs-values", {
    props: ["values", "schema", "arrayObj", "arrayKey"],
    template: "#custom-game-settings-values",
});

const oldConsoleInfo = console.info;
const oldConsoleError = console.error;
const oldConsoleWarn = console.warn;

var app = new Vue({
    el: "#app-wrapper-wrapper",
    data: {
        decompilationLanguage: "en-US",
        textToDecompile: null,
        displayDeleteConfirmationFor: null,
        deleteForRule: null,
        displayInfo: false,
        hasPassedWelcomeScreen: localStorage.hasPassedWelcomeScreen,
        displayMetrics: false,
        displayVariableEditor: false,
        displaySubroutineEditor: false,
        displayExtensionsEditor: false,
        displayImport: false,
        displaySettings: false,
        editedGlobalVariables: [],
        editedPlayerVariables: [],
        editedSubroutines: [],
        activatedExtensions: [],
        editedActivatedExtensions: [],
        availableExtensionPoints: 0,
        spentExtensionPoints: 0,
        nbElements: 0,
        clipboard: {},
        compiledGamemode: null,
        projectToImportToId: null,
        currentProjectId: null,
        projects: [],
        customGameSettings: {
            gamemodes: {
                skirmish: {
                    heroLimit: "off",
                    "respawnTime%": 30,
                },
            },
        },
        editedCustomGameSettings: null,
        astToEdit: null,
        astToEditIsCondition: null,
        astToEditParent: null,
        astToEditIndex: null,
        rules: [],

        uiAvailableSettings: {
            optimization: ["none", "speed", "size"],
            language: ["en-US", "de-DE", "es-ES", "es-MX", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pl-PL", "pt-BR", "ru-RU", "zh-CN", "zh-TW"],
            compilationLanguage: ["en-US", "de-DE", "es-ES", "es-MX", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pl-PL", "pt-BR", "ru-RU", "zh-CN", "zh-TW"],
            background: ["random", "blizzard_world.jpg", "blizzard_world_2.jpg", "busan.jpg", "chateau_halloween.jpg", "dorado.jpg", "eichenwalde.jpg", "eichenwalde_halloween.jpg", "eichenwalde_halloween_2.jpg", "hanamura.jpg", "kings_row.jpg", "monte_carlo.jpg", "monte_carlo_2.jpg", "new_queen_street.jpg", "oasis.jpg", "paraiso.jpg", "paris.jpg", "rialto.jpg", "temple_of_anubis.jpg", "volskaya.jpg", "tf2.jpg", "tf2_2.jpg", "portal_2.jpg", "workshop.jpg", "forge.jpg"],
            disabledWarnings: null,
        },
        uiSettings: {
            optimization: "speed",
            language: "en-US",
            compilationLanguage: "en-US",
            background: "random",
            disabledWarnings: "",
        },

        ruleAttributesDisplayNamesKw,
        workshopUiKw,
        workshopUiCustomKw,
        eventKw,
        eventTeamKw,
        eventPlayerKw,
        actionKw,
        valueKw,
        valueFuncKw,
        stringKw,
        ruleKw,
        heroKw,
        mapKw,
        customGameSettingsSchema,
        constantValues,
        astToString,
        isTypeSuitable,
        translateVarToWs,
        translateSubroutineToWs,
        escapeString,
        functionNameToString,
        globalVariables: defaultVarNames.map((x, i) => ({ name: x, index: i })),
        playerVariables: defaultVarNames.map((x, i) => ({ name: x, index: i })),
        subroutines: defaultSubroutineNames.map((x, i) => ({ name: x, index: i })),
        ELEMENT_LIMIT,
    },
    computed: {
        background: function () {
            if (this.uiSettings.background === "random") {
                var availableBackgrounds = this.uiAvailableSettings.background.filter((x) => x !== "random");
                return availableBackgrounds[Math.floor(Math.random() * availableBackgrounds.length)];
            } else {
                return this.uiSettings.background;
            }
        },
    },
    methods: {
        info: function (str) {
            oldConsoleInfo(str);
            Toastify({
                text: str,
                duration: 5000,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "info",
            }).showToast();
        },
        warn: function (str) {
            oldConsoleWarn(str);
            Toastify({
                text: str,
                duration: 10000,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "warning",
            }).showToast();
        },
        error: function (str) {
            oldConsoleError(str);
            str = "" + str;
            if (str.startsWith("Error: ")) {
                str = str.substring("Error: ".length);
            }
            Toastify({
                text: str,
                duration: 10000,
                gravity: "bottom", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className: "error",
            }).showToast();
        },
        translate: function (keyword, keywordObj, ...args) {
            if (!keywordObj) {
                throw new Error("Invalid keywordobj for '" + keyword + "'");
            }
            if (!(keyword in keywordObj)) {
                console.log(keywordObj);
                throw new Error("Could not translate '" + keyword + "'");
            }
            var result = null;
            if (this.uiSettings.language in keywordObj[keyword]) {
                result = keywordObj[keyword][this.uiSettings.language];
            } else if ("en-US" in keywordObj[keyword]) {
                result = keywordObj[keyword]["en-US"];
            } else {
                throw new Error("Invalid keywordobj for '" + keyword + "': " + JSON.stringify(keywordObj));
            }
            if (result.includes("%1$s")) {
                result = result.replace("%1$s", args[0]);
                if (result.includes("|Rpl")) {
                    result = result.replace(/\|Rpl(.*):(.*);/, +args[0] === 1 ? "$1" : "$2");
                }
            }
            return result;
        },
        getDropdownOptionsForType: function (type) {
            if (type === "GlobalVariable") {
                return this.globalVariables
                    .slice()
                    .sort((a, b) => a.index - b.index)
                    .map((x) => ({ label: x.name, code: x.index }));
            } else if (type === "PlayerVariable") {
                return this.playerVariables
                    .slice()
                    .sort((a, b) => a.index - b.index)
                    .map((x) => ({ label: x.name, code: x.index }));
            } else if (type === "Subroutine") {
                return this.subroutines
                    .slice()
                    .sort((a, b) => a.index - b.index)
                    .map((x) => ({ label: x.name, code: x.index }));
            }
            var keywordObj = null;
            var sort = true;
            if (type === "void") {
                keywordObj = this.actionKw;
            } else if (type in this.constantValues) {
                keywordObj = this.constantValues[type];
                sort = false;
            } else if (type === "LocalizedStringLiteral") {
                keywordObj = this.stringKw;
            } else if (type === "event") {
                keywordObj = this.eventKw;
                sort = false;
            } else if (type === "eventPlayer") {
                keywordObj = this.eventPlayerKw;
                sort = false;
            } else if (type === "eventTeam") {
                keywordObj = this.eventTeamKw;
                sort = false;
            } else if (type === "BoolLiteral") {
                keywordObj = { true: this.valueFuncKw.true, false: this.valueFuncKw.false };
            } else {
                keywordObj = this.valueFuncKw;
            }
            return this.getDropdownOptionsForKeywordObj(keywordObj, sort);
        },
        getDropdownOptionsForKeywordObj: function (keywordObj, sort = true) {
            var result = Object.keys(keywordObj)
                .filter((x) => typeof keywordObj[x] === "object" && !keywordObj[x].onlyInOw1 && x !== "__global__")
                .map((x) => ({ label: this.uiSettings.language in keywordObj[x] ? keywordObj[x][this.uiSettings.language] : keywordObj[x]["en-US"], code: x }))
                .slice();
            if (sort) {
                result = result.sort((a, b) => a.label.localeCompare(b.label));
            }
            return result;
        },
        decompile: function (content) {
            if (this.projectToImportToId !== null) {
                this.loadProject(this.projectToImportToId);
            } else {
                try {
                    if (!content) {
                        console.error(this.translate("cannotImportEmptyGamemode", this.workshopUiCustomKw));
                        return;
                    }

                    resetGlobalVariables(this.decompilationLanguage);
                    var [customGameSettings, rules] = decompileAllRulesToAst(content);
                    if (!customGameSettings) {
                        console.error(this.translate("gamemodeMustHaveSettings", this.workshopUiCustomKw));
                        return;
                    }
                    console.log(customGameSettings);
                    console.log(rules);
                    this.customGameSettings = JSON.parse(customGameSettings.replace("settings {", "{"));
                    this.globalVariables = globalVariables;
                    this.playerVariables = playerVariables;
                    this.subroutines = subroutines;
                    this.activatedExtensions = [...activatedExtensions];
                    //Add default var names (if eg there are no player variables, then adding a player variable will error because we cannot select one)
                    //Plus, we need var names to be in order for the UI
                    for (var i = 0; i < 128; i++) {
                        if (!this.globalVariables.map((x) => x.index).includes(i)) {
                            this.globalVariables.push({ index: i, name: defaultVarNames[i] });
                        }
                        if (!this.playerVariables.map((x) => x.index).includes(i)) {
                            this.playerVariables.push({ index: i, name: defaultVarNames[i] });
                        }
                        if (!this.subroutines.map((x) => x.index).includes(i)) {
                            this.subroutines.push({ index: i, name: defaultSubroutineNames[i] });
                        }
                    }
                    for (var rule of rules) {
                        if ("conditions" in rule.ruleAttributes) {
                            for (var i = 0; i < rule.ruleAttributes.conditions.length; i++) {
                                rule.ruleAttributes.conditions[i] = this.adjustAstForWorkshop(rule.ruleAttributes.conditions[i]);
                                rule.ruleAttributes.conditions[i].parent = rule;
                                rule.ruleAttributes.conditions[i].isSelected = false;
                                rule.ruleAttributes.conditions[i].isDisabled ||= false;
                            }
                        } else {
                            rule.ruleAttributes.conditions = [];
                        }
                        if ("subroutineName" in rule.ruleAttributes) {
                            rule.ruleAttributes.subroutineName = this.subroutines.filter((x) => x.name === rule.ruleAttributes.subroutineName)[0].index;
                        }
                        for (var i = 0; i < rule.children.length; i++) {
                            rule.children[i] = this.adjustAstForWorkshop(rule.children[i]);
                            rule.children[i].parent = rule;
                            rule.children[i].isSelected = false;
                            rule.children[i].isDisabled ||= false;
                        }

                        if (rules.length > 50) {
                            rule.isCollapsed = true;
                        } else {
                            rule.isCollapsed = false;
                        }
                        rule.isSelected = false;
                    }
                    this.rules = rules;
                    this.globalVariables.sort((a, b) => a.index - b.index);
                    this.playerVariables.sort((a, b) => a.index - b.index);
                    this.subroutines.sort((a, b) => a.index - b.index);
                    this.textToDecompile = null;
                    this.setCurrentProject(this.projectToImportToId);
                } catch (err) {
                    console.error(err + ", " + this.translate("contactZez", this.workshopUiCustomKw));
                    return;
                }
            }
            console.info(this.translate("successfullyImported", this.workshopUiCustomKw));
            this.projectToImportToId = null;
            this.displayImport = false;
            this.compileGamemode();
        },
        adjustAstForWorkshop: function (ast) {
            //We cannot use overpy functions because they also do a bunch of stuff such as optimization
            //This function does stuff like replacing __equals__(1,2) by __compare__(1, ==, 2)
            const comparisonFuncToOpMapping = {
                __equals__: "==",
                __inequals__: "!=",
                __lessThanOrEquals__: "<=",
                __greaterThanOrEquals__: ">=",
                __lessThan__: "<",
                __greaterThan__: ">",
            };
            if (ast.name in comparisonFuncToOpMapping) {
                var result = new Ast("__compare__", [this.adjustAstForWorkshop(ast.args[0]), new Ast(comparisonFuncToOpMapping[ast.name], [], [], "__Operator__"), this.adjustAstForWorkshop(ast.args[1])]);
                result.comment = ast.comment;
                result.isDisabled = ast.isDisabled;
                return result;
            } else if (ast.name === "__assignTo__" || ast.name === "__modifyVar__") {
                var newName = ast.name === "__assignTo__" ? "__set" : "__modify";
                if (ast.args[0].name === "__globalVar__") {
                    //A = 3 -> __setGlobalVariable__(A, 3)
                    newName += "GlobalVariable__";
                    ast.args = [ast.args[0].args[0]].concat(ast.args.slice(1));
                } else if (ast.args[0].name === "__playerVar__") {
                    //eventPlayer.A = 3 -> __setPlayerVariable__(eventPlayer, A, 3)
                    newName += "PlayerVariable__";
                    ast.args = [ast.args[0].args[0], ast.args[0].args[1]].concat(ast.args.slice(1));
                } else if (ast.args[0].name === "__valueInArray__") {
                    if (ast.args[0].args[0].name === "__globalVar__") {
                        //A[0] = 3 -> __setGlobalVariableAtIndex__(A, 0, 3)
                        newName += "GlobalVariableAtIndex__";
                        ast.args = [ast.args[0].args[0].args[0], ast.args[0].args[1]].concat(ast.args.slice(1));
                    } else if (ast.args[0].args[0].name === "__playerVar__") {
                        //eventPlayer.A[0] = 3 -> __setPlayerVariableAtIndex__(eventPlayer, A, 0, 3)
                        newName += "PlayerVariableAtIndex__";
                        ast.args = [ast.args[0].args[0].args[0], ast.args[0].args[0].args[1], ast.args[0].args[1]].concat(ast.args.slice(1));
                    } else {
                        throw new Error("Cannot modify or assign to " + this.functionNameToString(ast.args[0].args[0]));
                    }
                } else {
                    throw new Error("Cannot modify or assign to " + this.functionNameToString(ast.args[0]));
                }
                ast.name = newName;
            } else if (ast.name === "__for__") {
                var newName = "";
                if (ast.args[0].name === "__globalVar__") {
                    newName = "GlobalVariable";
                    ast.args = [ast.args[0].args[0]].concat(ast.args.slice(1));
                } else if (ast.args[0].name === "__playerVar__") {
                    newName = "PlayerVariable";
                    ast.args = [ast.args[0].args[0], ast.args[0].args[1]].concat(ast.args.slice(1));
                } else {
                    error("Expected a variable for 1st argument of " + functionNameToString(ast) + ", but got " + functionNameToString(ast.args[0]));
                }
                newName = "__for" + newName + "__";
                ast.name = newName;
            } else if (ast.name === "__negate__") {
                ast.args[0].args[0].name = "" + -ast.args[0].args[0].name;
                ast.args[0].args[0].numValue = -ast.args[0].args[0].numValue;
                ast = ast.args[0];
            } else if (ast.type === "TeamLiteral") {
                return new Ast("__team__", [ast]);
            } else if (ast.type === "ColorLiteral" && ast.parent.name !== "__color__") {
                return new Ast("__color__", [ast]);
            } else if (ast.type === "ButtonLiteral" && ast.parent.name !== "__button__") {
                return new Ast("__button__", [ast]);
            } else if (ast.name === "__customString__") {
                //add potentially missing arguments
                for (var i = 0; i < 4; i++) {
                    if (ast.args.length <= i) {
                        ast.args.push(new Ast("null"));
                    }
                }
            } else if (ast.type === "GlobalVariable") {
                ast.name = this.globalVariables.filter((x) => x.name === ast.name)[0].index;
            } else if (ast.type === "PlayerVariable") {
                ast.name = this.playerVariables.filter((x) => x.name === ast.name)[0].index;
            } else if (ast.type === "Subroutine") {
                ast.name = this.subroutines.filter((x) => x.name === ast.name)[0].index;
            }
            for (var i = 0; i < ast.args.length; i++) {
                ast.args[i] = this.adjustAstForWorkshop(ast.args[i]);
                ast.args[i].parent = ast;
            }
            return ast;
        },
        compileGamemode: function () {
            //Adjust AST for overpy

            function recursivelySetFilestack(ast, fileStack) {
                ast.fileStack = fileStack;
                for (var arg of ast.args) {
                    recursivelySetFilestack(arg, fileStack);
                }
            }

            var rules = structuredClone(this.rules);
            for (let [ruleIdx, rule] of rules.entries()) {
                if (rule.children.length === 0) {
                    rule.ruleAttributes.isDelimiter = true;
                }
                rule.fileStack = [{ ruleNb: ruleIdx + 1, rule: rule.ruleAttributes.name }];
                for (var i = 0; i < rule.children.length; i++) {
                    var comment = rule.children[i].comment;
                    if (rule.children[i].isDisabled) {
                        var dummyAction = getAstForUselessInstruction();
                        rule.children[i] = dummyAction;
                    } else {
                        resetGlobalVariables(this.uiSettings.language);
                        globalVariables = structuredClone(this.globalVariables)
                            .filter((x) => x.name !== defaultVarNames[x.index])
                            .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "globalvar") }));
                        playerVariables = structuredClone(this.playerVariables)
                            .filter((x) => x.name !== defaultVarNames[x.index])
                            .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "playervar") }));
                        subroutines = structuredClone(this.subroutines)
                            .filter((x) => x.name !== defaultSubroutineNames[x.index])
                            .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "subroutine") }));
                        rule.children[i] = decompile(this.displayAst(rule.children[i], false));
                    }
                    rule.children[i].comment = comment;
                    rule.children[i].parent = rule;

                    recursivelySetFilestack(rule.children[i], [{ ruleNb: ruleIdx + 1, rule: rule.ruleAttributes.name, actionNb: i + 1 }]);
                }

                //console.log(rule.ruleAttributes.name);
                //put the depth and remove the __end__
                for (var i = rule.children.length - 1; i >= 0; i--) {
                    if (["__for__", "__if__", "__elif__", "__else__", "__while__"].includes(rule.children[i].name)) {
                        var depth = 0;
                        for (var j = i + 1; j < rule.children.length; j++) {
                            if (rule.children[j].name === "__end__" && depth === 0) {
                                break;
                            } else if (rule.children[j].name === "__end__") {
                                depth--;
                            } else if (["__if__", "__elif__", "__else__"].includes(rule.children[i].name) && ["__else__", "__elif__"].includes(rule.children[j].name) && depth === 0) {
                                break;
                            } else {
                                if (["__for__", "__if__", "__while__"].includes(rule.children[j].name)) {
                                    depth++;
                                }
                                rule.children[i].children.push(rule.children[j]);
                                rule.children[j].parent = rule.children[i];
                            }
                        }
                        rule.children.splice(i + 1, j - i - 1);
                    }
                }
                rule.children = rule.children.filter((x) => x.name !== "__end__");

                rule.ruleAttributes.conditionComments = [];
                rule.ruleAttributes.conditions = rule.ruleAttributes.conditions.filter((x) => !x.isDisabled);
                for (var i = 0; i < rule.ruleAttributes.conditions.length; i++) {
                    resetGlobalVariables(this.uiSettings.language);
                    globalVariables = structuredClone(this.globalVariables)
                        .filter((x) => x.name !== defaultVarNames[x.index])
                        .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "globalvar") }));
                    playerVariables = structuredClone(this.playerVariables)
                        .filter((x) => x.name !== defaultVarNames[x.index])
                        .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "playervar") }));
                    subroutines = structuredClone(this.subroutines)
                        .filter((x) => x.name !== defaultSubroutineNames[x.index])
                        .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "subroutine") }));
                    rule.ruleAttributes.conditionComments.push(rule.ruleAttributes.conditions[i].comment);
                    rule.ruleAttributes.conditions[i] = decompile(this.displayAst(rule.ruleAttributes.conditions[i], false));
                    rule.ruleAttributes.conditions[i].parent = new Ast("@Condition", [], [], "__Annotation__");
                    recursivelySetFilestack(rule.ruleAttributes.conditions[i], [{ ruleNb: ruleIdx + 1, rule: rule.ruleAttributes.name, conditionNb: i + 1 }]);
                }

                if ("subroutineName" in rule.ruleAttributes) {
                    rule.ruleAttributes.subroutineName = this.subroutines.filter((x) => x.index === rule.ruleAttributes.subroutineName)[0].name;
                    rule.name = "__def__";
                    delete rule.ruleAttributes.event;
                    rule.ruleAttributes.conditions = undefined;
                }
            }

            resetGlobalVariables(this.uiSettings.compilationLanguage);
            if (this.uiSettings.optimization === "none") {
                enableOptimization = false;
            } else if (this.uiSettings.optimization === "size") {
                optimizeForSize = true;
            }
            activatedExtensions = this.activatedExtensions;
            compileCustomGameSettings(structuredClone(this.customGameSettings));
            globalVariables = structuredClone(this.globalVariables)
                .filter((x) => x.name !== defaultVarNames[x.index])
                .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "globalvar") }));
            playerVariables = structuredClone(this.playerVariables)
                .filter((x) => x.name !== defaultVarNames[x.index])
                .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "playervar") }));
            subroutines = structuredClone(this.subroutines)
                .filter((x) => x.name !== defaultSubroutineNames[x.index])
                .map((x) => ({ index: x.index, name: translateNameToAvoidKeywords(x.name, "subroutine") }));
            globalSuppressedWarnings = this.uiSettings.disabledWarnings.split(",").map((x) => x.trim());

            return compileRules(rules);
        },
        saveGamemode: function () {
            if (this.compiledGamemode) {
                var result = this.compiledGamemode;
            } else {
                var result = this.compileGamemode();
            }
            this.saveProject();
            navigator.clipboard
                .writeText(result)
                .then(() => {
                    this.compiledGamemode = null;
                    console.info(this.translate("successfullyCompiled", this.workshopUiCustomKw));
                })
                .catch((e) => {
                    this.compiledGamemode = result;
                    this.error(this.translate("compilationTooLong", this.workshopUiCustomKw));
                });
        },
        displayHtml: function (str, actuallyDisplayHtml = true, category) {
            if (actuallyDisplayHtml) {
                return "<span class='code-" + category + "'>" + str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") + "</span>";
            } else {
                return str;
            }
        },
        displayAst: function (ast, useHtml = true) {
            const modifyVarFuncToOpMapping = {
                __add__: "+=",
                __subtract__: "-=",
                __multiply__: "*=",
                __divide__: "/=",
                __modulo__: "%=",
                __raiseToPower__: "^=",
            };
            const funcToOpMapping = {
                __add__: "+",
                __subtract__: "-",
                __multiply__: "*",
                __divide__: "/",
                __modulo__: "%",
                __raiseToPower__: "^",
                __and__: "&&",
                __or__: "||",
            };
            const astOperatorPrecedence = {
                __ifThenElse__: 2,
                __or__: 3,
                __and__: 4,
                __compare__: 5,
                __add__: 6,
                __subtract__: 6,
                __multiply__: 7,
                __divide__: 7,
                __modulo__: 7,
                __raiseToPower__: 8,
                __not__: 9,
            };
            var result = "";
            if (ast.name in funcToOpMapping && ast.args.length === 2) {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (
                    ast.args[0].name in astOperatorPrecedence &&
                    astContainsFunctions(
                        ast.args[0],
                        Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] < astOperatorPrecedence[ast.name] + (ast.name === "__raiseToPower__" ? 1 : 0)),
                    )
                ) {
                    op1 = "(" + op1 + ")";
                }
                var op2 = this.displayAst(ast.args[1], useHtml);

                if (
                    ast.args[1].name in astOperatorPrecedence &&
                    astContainsFunctions(
                        ast.args[1],
                        Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] <= astOperatorPrecedence[ast.name] - (ast.name === "__raiseToPower__" ? 1 : 0)),
                    )
                ) {
                    op2 = "(" + op2 + ")";
                }
                return op1 + " " + this.displayHtml(funcToOpMapping[ast.name], useHtml, "operator") + " " + op2;
            } else if (ast.name === "__compare__") {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (
                    ast.args[0].name in astOperatorPrecedence &&
                    astContainsFunctions(
                        ast.args[0],
                        Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] < astOperatorPrecedence[ast.name] + 0.5),
                    )
                ) {
                    op1 = "(" + op1 + ")";
                }
                var op2 = this.displayAst(ast.args[2], useHtml);

                if (
                    ast.args[2].name in astOperatorPrecedence &&
                    astContainsFunctions(
                        ast.args[2],
                        Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] <= astOperatorPrecedence[ast.name] + 0.5),
                    )
                ) {
                    op2 = "(" + op2 + ")";
                }
                return op1 + " " + this.displayHtml(ast.args[1].name, useHtml, "operator") + " " + op2;
            } else if (ast.name === "__ifThenElse__") {
                var opThen = this.displayAst(ast.args[1], useHtml);
                if (ast.args[1].name in astOperatorPrecedence && astContainsFunctions(ast.args[1], Object.keys(astOperatorPrecedence))) {
                    opThen = "(" + opThen + ")";
                }
                var opIf = this.displayAst(ast.args[0], useHtml);
                if (ast.args[0].name in astOperatorPrecedence && astContainsFunctions(ast.args[0], Object.keys(astOperatorPrecedence))) {
                    opIf = "(" + opIf + ")";
                }
                var opElse = this.displayAst(ast.args[2], useHtml);
                if (ast.args[2].name in astOperatorPrecedence && astContainsFunctions(ast.args[2], Object.keys(astOperatorPrecedence))) {
                    opElse = "(" + opElse + ")";
                }
                return opIf + " ? " + opThen + " : " + opElse;
            } else if (ast.name === "__not__") {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (
                    ast.args[0].name in astOperatorPrecedence &&
                    astContainsFunctions(
                        ast.args[0],
                        Object.keys(astOperatorPrecedence).filter((x) => astOperatorPrecedence[x] < astOperatorPrecedence[ast.name]),
                    )
                ) {
                    op1 = "(" + op1 + ")";
                }
                return "!" + op1;
            } else if (ast.type === "GlobalVariable") {
                result += this.displayHtml(this.globalVariables.filter((x) => x.index === +ast.name)[0].name, useHtml, "var");
            } else if (ast.type === "PlayerVariable") {
                result += this.displayHtml(this.playerVariables.filter((x) => x.index === +ast.name)[0].name, useHtml, "var");
            } else if (ast.type === "Subroutine") {
                result += this.displayHtml(this.subroutines.filter((x) => x.index === +ast.name)[0].name, useHtml, "var");
            } else if (ast.name === "__team__") {
                return this.displayAst(ast.args[0], useHtml);
            } else if (["CustomStringLiteral", "FullwidthStringLiteral", "BigLettersStringLiteral"].includes(ast.type)) {
                result += this.displayHtml(this.escapeString(ast.name, true), useHtml, "string");
            } else if (ast.type === "LocalizedStringLiteral") {
                result += this.displayHtml(this.escapeString(this.translate(ast.name, this.stringKw), true), useHtml, "string");
            } else if (ast.name === "__number__") {
                return this.displayHtml(+ast.args[0].name + "", useHtml, "var");
            } else if (["FloatLiteral", "IntLiteral", "UnsignedIntLiteral"].includes(ast.type)) {
                return this.displayHtml(+ast.name + "", useHtml, "var");
            } else if (ast.name === "__globalVar__") {
                return this.displayHtml(this.translate("__global__", this.valueKw), useHtml, "var") + "." + this.displayAst(ast.args[0], useHtml);
            } else if (ast.name === "__setGlobalVariable__") {
                return this.displayHtml(this.translate("__global__", this.valueKw), useHtml, "var") + "." + this.displayAst(ast.args[0], useHtml) + " = " + this.displayAst(ast.args[1], useHtml);
            } else if (ast.name === "__modifyGlobalVariable__" && ast.args[1].name in modifyVarFuncToOpMapping) {
                return this.displayHtml(this.translate("__global__", this.valueKw), useHtml, "var") + "." + this.displayAst(ast.args[0], useHtml) + " " + modifyVarFuncToOpMapping[ast.args[1].name] + " " + this.displayAst(ast.args[2], useHtml);
            } else if (ast.name === "__setGlobalVariableAtIndex__") {
                return this.displayHtml(this.translate("__global__", this.valueKw), useHtml, "var") + "." + this.displayAst(ast.args[0], useHtml) + "[" + this.displayAst(ast.args[1], useHtml) + "] = " + this.displayAst(ast.args[2], useHtml);
            } else if (ast.name === "__modifyGlobalVariableAtIndex__" && ast.args[2].name in modifyVarFuncToOpMapping) {
                return this.displayHtml(this.translate("__global__", this.valueKw), useHtml, "var") + "." + this.displayAst(ast.args[0], useHtml) + " [" + this.displayAst(ast.args[1], useHtml) + "] " + modifyVarFuncToOpMapping[ast.args[2].name] + " " + this.displayAst(ast.args[3], useHtml);
            } else if (ast.name === "__playerVar__") {
                var result = this.displayAst(ast.args[0], useHtml);
                if (ast.args[0].name in astOperatorPrecedence && astContainsFunctions(ast.args[0], Object.keys(astOperatorPrecedence))) {
                    result = "(" + result + ")";
                }
                return result + "." + this.displayAst(ast.args[1], useHtml);
            } else if (ast.name === "__setPlayerVariable__") {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (ast.args[0].name in astOperatorPrecedence && astContainsFunctions(ast.args[0], Object.keys(astOperatorPrecedence))) {
                    op1 = "(" + op1 + ")";
                }
                return op1 + "." + this.displayAst(ast.args[1], useHtml) + " = " + this.displayAst(ast.args[2], useHtml);
            } else if (ast.name === "__modifyPlayerVariable__" && ast.args[2].name in modifyVarFuncToOpMapping) {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (ast.args[0].name in astOperatorPrecedence && astContainsFunctions(ast.args[0], Object.keys(astOperatorPrecedence))) {
                    op1 = "(" + op1 + ")";
                }
                return op1 + "." + this.displayAst(ast.args[1], useHtml) + " " + modifyVarFuncToOpMapping[ast.args[2].name] + " " + this.displayAst(ast.args[3], useHtml);
            } else if (ast.name === "__setPlayerVariableAtIndex__") {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (ast.args[0].name in astOperatorPrecedence && astContainsFunctions(ast.args[0], Object.keys(astOperatorPrecedence))) {
                    op1 = "(" + op1 + ")";
                }
                return op1 + "." + this.displayAst(ast.args[1], useHtml) + "[" + this.displayAst(ast.args[2], useHtml) + "] = " + this.displayAst(ast.args[3], useHtml);
            } else if (ast.name === "__modifyPlayerVariableAtIndex__" && ast.args[3].name in modifyVarFuncToOpMapping) {
                var op1 = this.displayAst(ast.args[0], useHtml);
                if (ast.args[0].name in astOperatorPrecedence && astContainsFunctions(ast.args[0], Object.keys(astOperatorPrecedence))) {
                    op1 = "(" + op1 + ")";
                }
                return op1 + "." + this.displayAst(ast.args[1], useHtml) + "[" + this.displayAst(ast.args[2], useHtml) + "] " + modifyVarFuncToOpMapping[ast.args[3].name] + " " + this.displayAst(ast.args[4], useHtml);
            } else if (ast.type === "void") {
                result += this.displayHtml(this.translate(ast.name, this.actionKw), useHtml, "operator");
            } else if (this.isTypeSuitable(["Object", "Array"], ast.type)) {
                result += this.displayHtml(this.translate(ast.name, this.valueKw), useHtml, "value");
            } else if (ast.type in this.constantValues) {
                if (ast.name === "__removed_from_ow2__") {
                    result += this.displayHtml(ast.name, useHtml, ast.type === "__Operator__" ? "operator" : "value");
                } else {
                    if (!(ast.name in this.constantValues[ast.type])) {
                        throw new Error("Unknown " + ast.type.replace("Literal", "").toLowerCase() + " '" + ast.name + "'");
                    }
                    result += this.displayHtml(this.translate(ast.name, this.constantValues[ast.type]), useHtml, ast.type === "__Operator__" ? "operator" : "value");
                }
            } else {
                throw new Error("Unknown type '" + ast.type + "' of '" + ast.name + "'");
            }
            if (ast.args.length > 0) {
                if (ast.name === "__customString__" || ast.name === "__localizedString__") {
                    var maxStrArg = ast.args[0].name.includes("{2}") ? 3 : ast.args[0].name.includes("{1}") ? 2 : ast.args[0].name.includes("{0}") ? 1 : 0;
                    result +=
                        "(" +
                        ast.args
                            .slice(0, maxStrArg + 1)
                            .map((x) => this.displayAst(x, useHtml))
                            .join(", ") +
                        ")";
                } else {
                    result += "(" + ast.args.map((x) => this.displayAst(x, useHtml)).join(", ") + ")";
                }
            }
            return result;
        },
        calculateActionPadding: function (action, actionIdx, ruleChildren) {
            var indent = 0;
            if (actionIdx === 0) {
                indent = 0;
            } else {
                if (!ruleChildren[actionIdx - 1].isDisabled && ["__if__", "__elif__", "__else__", "__while__", "__forGlobalVariable__", "__forPlayerVariable__"].includes(ruleChildren[actionIdx - 1].name)) {
                    indent = ruleChildren[actionIdx - 1].indent + 1;
                } else {
                    indent = ruleChildren[actionIdx - 1].indent;
                }
                if (!action.isDisabled && (action.name === "__end__" || action.name === "__else__" || action.name === "__elif__")) {
                    indent--;
                }
            }
            if (indent < 0) {
                indent = 0;
            }
            if (indent > 5) {
                indent = 5;
            }
            action.indent = indent;
            return indent * 25 + "px";
        },
        updateTextareasHeight: function () {
            Vue.nextTick(() => {
                for (var textarea of document.getElementsByTagName("textarea")) {
                    this.updateTextareaHeight(textarea);
                }
            });
        },
        editActionOrCondition: function (ast, isCondition, index) {
            this.astToEdit = structuredClone(ast);
            this.astToEditParent = ast.parent;
            this.astToEditIsCondition = isCondition;
            this.astToEditIndex = index;
            this.updateTextareasHeight();
            console.log(ast);
        },
        cancelEdition: function () {
            this.astToEdit = null;
        },
        validateEditedAst: function () {
            console.log(this.astToEdit);
            console.log(this.astToEditParent);
            console.log(this.astToEditIsCondition);
            console.log(this.astToEditIndex);
            if (this.astToEditIsCondition) {
                if (this.astToEditIndex === null) {
                    this.astToEditParent.ruleAttributes.conditions.push(this.astToEdit);
                } else {
                    this.astToEditParent.ruleAttributes.conditions[this.astToEditIndex] = this.astToEdit;
                }
            } else {
                if (this.astToEditIndex === null) {
                    this.astToEditParent.children.push(this.astToEdit);
                } else {
                    this.astToEditParent.children[this.astToEditIndex] = this.astToEdit;
                }
            }
            this.astToEdit.parent = this.astToEditParent;
            this.astToEdit = null;
            this.compileGamemode();
        },
        rebuildAst: function (ast) {
            //console.log("Rebuilding AST: '"+ast.name+"'");
            //When selecting a new function, recreate its arguments using defaults
            if (ast.type in this.constantValues || ["FloatLiteral", "IntLiteral", "UnsignedIntLiteral", "GlobalVariable", "PlayerVariable", "Subroutine", "CustomStringLiteral", "LocalizedStringLiteral"].includes(ast.type)) {
                return; //no args
            }
            var astDefaultsToOverpy = {
                "==": "==",
                0: 0,
                99999: 99999,
                ADD: "__add__",
                "All Damage Dealt": "DAMAGE_DEALT",
                "All Players": "getPlayers",
                "ALL PLAYERS": "getPlayers",
                All: "ALL",
                ALL: "ALL",
                Armor: "ARMOR",
                Array: "__array__",
                "ARROW: DOWN": "ARROW_DOWN",
                "Assisters and Targets": "ASSISTERS_AND_TARGETS",
                "BARRIERS DO NOT BLOCK LOS": "PASS_THROUGH_BARRIERS",
                Button: "__button__",
                BUTTON: "__button__",
                "CANCEL CONTRARY MOTION": "CANCEL_CONTRARY_MOTION",
                "CLIP AGAINST SURFACES": "SURFACES",
                COLOR: "__color__",
                COMPARE: "__compare__",
                "COUNT OF": "len",
                "CURRENT ARRAY ELEMENT": "__currentArrayElement__",
                "Custom String": "__customString__",
                "CUSTOM STRING": "__customString__",
                "Default Visibility": "DEFAULT",
                "DEFAULT VISIBILITY": "DEFAULT",
                DEFAULT: "DEFAULT",
                "DESTINATION AND DURATION": "DESTINATION_AND_DURATION",
                "DESTINATION AND RATE": "DESTINATION_AND_RATE",
                "DIRECTION AND MAGNITUDE": "DIRECTION_AND_MAGNITUDE",
                "DIRECTION AND TURN RATE": "DIRECTION_AND_TURN_RATE",
                "DIRECTION, RATE, AND MAX SPEED": "DIRECTION_RATE_AND_MAX_SPEED",
                "Event Player": "eventPlayer",
                "EVENT PLAYER": "eventPlayer",
                false: "false",
                "Global Variable": "__globalVar__",
                "GLOBAL VARIABLE": "__globalVar__",
                "GOOD BEAM": "GOOD",
                "GOOD EXPLOSION": "GOOD_EXPLOSION",
                HACKED: "HACKED",
                HEALTH: "NORMAL",
                HELLO: "Hello",
                Hero: "__hero__",
                HERO: "__hero__",
                "IGNORE CONDITION": "IGNORE_CONDITION",
                "Last Assist ID": "getLastAssistID",
                "LAST CREATED ENTITY": "getLastCreatedEntity",
                "Last Created Health Pool": "getLastCreatedHealthPool",
                "LAST DAMAGE MODIFICATION ID": "getLastDamageModification",
                "LAST DAMAGE OVER TIME ID": "getLastDoT",
                "LAST HEALING MODIFICATION ID": "getLastHoT",
                "Last Text ID": "getLastCreatedText",
                "LAST TEXT ID": "getLastCreatedText",
                Left: "LEFT",
                LEFT: "LEFT",
                NULL: "null",
                NUMBER: "__number__",
                OFF: "OFF",
                "PLAYER VARIABLE": "__playerVar__",
                "Position Of": ".getPosition",
                "PRIMARY FIRE": "PRIMARY_FIRE",
                "RECEIVERS, DAMAGERS, AND DAMAGE PERCENT": "RECEIVERS_DAMAGERS_AND_DMGPERCENT",
                "RECEIVERS, HEALERS, AND HEALING PERCENT": "RECEIVERS_HEALERS_AND_HEALPERCENT",
                "REPLACE EXISTING THROTTLE": "REPLACE_EXISTING",
                "RESTART RULE": "RESTART",
                ROTATION: "ROTATION",
                SPHERE: "SPHERE",
                STRING: "__customString__",
                Team: "__team__",
                TEAM: "__team__",
                "TO WORLD": "TO_WORLD",
                true: "true",
                TRUE: "true",
                UP: "__roundUp__",
                Vector: "vect",
                VECTOR: "vect",
                "VISIBLE TO AND POSITION": "VISIBILITY_AND_POSITION",
                "VISIBLE TO AND STRING": "VISIBILITY_AND_STRING",
                "VISIBLE TO, POSITION, AND RADIUS": "VISIBILITY_POSITION_AND_RADIUS",
                "VISIBLE TO, POSITION, AND STRING": "VISIBILITY_POSITION_AND_STRING",
                "Visible To, Values, and Color": "VISIBILITY_VALUES_AND_COLOR",
                "VOICE LINE UP": "VOICE_LINE_UP",
                White: "WHITE",
                WHITE: "WHITE",
                0: 0,
                1: 1,
                100: 100,
                255: 255,
                null: "null",
                true: "true",
            };
            ast.args = [];
            var keywordObj = ast.type === "void" ? this.actionKw : this.valueFuncKw;
            if (keywordObj[ast.name].args !== null) {
                for (var arg of keywordObj[ast.name].args) {
                    var astType = arg.type;
                    if (astType in this.constantValues) {
                        if (arg.default && arg.default in astDefaultsToOverpy) {
                            if (!(astDefaultsToOverpy[arg.default] in constantValues[astType])) {
                                console.error(astDefaultsToOverpy[arg.default] + " doesn't exist, please tell Zezombye about it");
                                var astName = astType === "TeamLiteral" ? "ALL" : Object.keys(constantValues[astType])[0];
                            } else {
                                var astName = astDefaultsToOverpy[arg.default];
                            }
                        } else {
                            var astName = astType === "TeamLiteral" ? "ALL" : Object.keys(constantValues[astType])[0];
                        }
                    } else if (astType === "FloatLiteral" || astType === "IntLiteral" || astType === "UnsignedIntLiteral") {
                        if (arg.default) {
                            var astName = "" + arg.default;
                        } else {
                            var astName = "0";
                        }
                    } else if (arg.default && arg.default in astDefaultsToOverpy) {
                        console.log("Setting default: " + arg.default);
                        var astName = astDefaultsToOverpy[arg.default];
                    } else if (astType === "GlobalVariable") {
                        var astName = this.globalVariables[0].index;
                    } else if (astType === "PlayerVariable") {
                        var astName = this.playerVariables[0].index;
                    } else if (astType === "Subroutine") {
                        var astName = this.subroutines[0].index;
                    } else if (astType === "CustomStringLiteral") {
                        var astName = "";
                    } else if (astType === "Player") {
                        var astName = "eventPlayer";
                    } else if (astType === "Hero" || ("" + ast.type === "[object Object]" && ast.type.Array === "Hero")) {
                        var astName = "__hero__";
                    } else if (astType === "Button") {
                        var astName = "__button__";
                    } else if (astType === "Map") {
                        var astName = "__map__";
                    } else if (astType === "Gamemode") {
                        var astName = "__gamemode__";
                    } else if (astType === "Team") {
                        var astName = "__team__";
                    } else if (astType === "Color") {
                        var astName = "__color__";
                    } else if (astType === "DamageModificationId") {
                        var astName = "getLastDamageModification";
                    } else if (astType === "DotId") {
                        var astName = "getLastDoT";
                    } else if (astType === "EntityId") {
                        var astName = "getLastCreatedEntity";
                    } else if (astType === "HealingModificationId") {
                        var astName = "getLastHealingModification";
                    } else if (astType === "HealthPoolId") {
                        var astName = "getLastCreatedHealthPool";
                    } else if (astType === "HotId") {
                        var astName = "getLastHoT";
                    } else if (astType === "String") {
                        var astName = "__customString__";
                    } else if (astType === "Array" || "" + astType === "[object Object]") {
                        var astName = "__array__";
                    } else if (astType === "bool" || astType === "BoolLiteral") {
                        var astName = "true";
                    } else if (astType === "Direction" || astType === "Position" || astType === "Vector") {
                        var astName = "vect";
                    } else if (Array.isArray(astType) && astType.includes("Player")) {
                        var astName = "getPlayers";
                    } else {
                        var astName = "__number__";
                        astType = "float";
                    }
                    if (isNumber(astName) && !["GlobalVariable", "PlayerVariable", "Subroutine", "FloatLiteral", "IntLiteral", "UnsignedIntLiteral"].includes(astType)) {
                        var astArg = getAstForNumber(+astName);
                        astArg.parent = ast;
                    } else {
                        var astArg = new Ast("" + astName, [], [], astType);
                        if (["GlobalVariable", "PlayerVariable", "Subroutine"].includes(astType)) {
                            astArg.name = +astArg.name;
                        }
                        astArg.parent = ast;
                        this.rebuildAst(astArg);
                    }
                    ast.args.push(astArg);
                }
            }
        },
        rebuildRuleAttributes: function (rule) {
            if (rule.ruleAttributes.event === "global") {
                delete rule.ruleAttributes.eventTeam;
                delete rule.ruleAttributes.eventPlayer;
                delete rule.ruleAttributes.subroutineName;
            } else if (rule.ruleAttributes.event === "__subroutine__") {
                delete rule.ruleAttributes.eventTeam;
                delete rule.ruleAttributes.eventPlayer;
                this.$set(rule.ruleAttributes, "subroutineName", this.subroutines[0].index);
            } else {
                delete rule.ruleAttributes.subroutineName;
                if (!rule.ruleAttributes.eventTeam) {
                    this.$set(rule.ruleAttributes, "eventTeam", "all");
                }
                if (!rule.ruleAttributes.eventPlayer) {
                    this.$set(rule.ruleAttributes, "eventPlayer", "all");
                }
            }
        },
        selectAllRules: function () {
            if (this.rules.every((x) => x.isSelected)) {
                for (var rule of this.rules) {
                    rule.isSelected = false;
                }
            } else {
                for (var rule of this.rules) {
                    rule.isSelected = true;
                }
            }
        },
        selectAllConditions: function (rule) {
            var unselectAll = rule.ruleAttributes.conditions.every((x) => x.isSelected);
            for (var condition of rule.ruleAttributes.conditions) {
                condition.isSelected = !unselectAll;
            }
        },
        selectAllActions: function (rule) {
            var unselectAll = rule.children.every((x) => x.isSelected);
            for (var action of rule.children) {
                action.isSelected = !unselectAll;
            }
        },
        toggleSelectedRules: function () {
            for (var rule of this.rules) {
                if (rule.isSelected) {
                    rule.ruleAttributes.isDisabled = !rule.ruleAttributes.isDisabled;
                }
            }
        },
        toggleSelectedActions: function (rule) {
            for (var action of rule.children) {
                if (action.isSelected) {
                    action.isDisabled = !action.isDisabled;
                }
            }
        },
        toggleSelectedConditions: function (rule) {
            for (var condition of rule.ruleAttributes.conditions) {
                if (condition.isSelected) {
                    condition.isDisabled = !condition.isDisabled;
                }
            }
        },
        addAction: function (rule) {
            var action = new Ast("__setGlobalVariable__", [new Ast(this.globalVariables[0].index + "", [], [], "GlobalVariable"), getAstFor0()]);
            action.args[0].name = +action.args[0].name;
            action.isSelected = false;
            action.isDisabled = false;
            action.parent = rule;
            this.editActionOrCondition(action, false, null);
        },
        addCondition: function (rule) {
            var condition = new Ast("__compare__", [getAstFor0(), new Ast("==", [], [], "__Operator__"), getAstFor0()]);
            condition.isSelected = false;
            condition.isDisabled = false;
            condition.parent = rule;
            this.editActionOrCondition(condition, true, null);
        },
        addRule: function () {
            var rule = new Ast("__rule__");
            rule.isSelected = false;
            rule.isCollapsed = false;
            rule.ruleAttributes = {};
            rule.ruleAttributes.conditions = [];
            rule.ruleAttributes.event = "global";
            rule.ruleAttributes.name = this.translate("rule", this.workshopUiKw, this.rules.length + 1);
            rule.ruleAttributes.isDisabled = false;
            this.rules.push(rule);
        },
        copySelectedRules: function () {
            this.clipboard = {
                type: "rules",
                content: this.rules.filter((x) => x.isSelected).map((x) => structuredClone(x)),
            };
        },
        copySelectedActions: function (rule) {
            this.clipboard = {
                type: "actions",
                content: rule.children.filter((x) => x.isSelected).map((x) => structuredClone(x)),
            };
        },
        copySelectedConditions: function (rule) {
            this.clipboard = {
                type: "conditions",
                content: rule.ruleAttributes.conditions.filter((x) => x.isSelected).map((x) => structuredClone(x)),
            };
        },
        pasteRules: function () {
            var dataToPaste = this.clipboard.content.map((x) => structuredClone(x));
            for (var elem of dataToPaste) {
                elem.isSelected = false;
            }
            this.rules.push(...dataToPaste);
        },
        pasteActions: function (rule) {
            var dataToPaste = this.clipboard.content.map((x) => structuredClone(x));
            for (var elem of dataToPaste) {
                elem.isSelected = false;
                elem.parent = rule;
            }
            rule.children.push(...dataToPaste);
        },
        pasteConditions: function (rule) {
            var dataToPaste = this.clipboard.content.map((x) => structuredClone(x));
            for (var elem of dataToPaste) {
                elem.isSelected = false;
                elem.parent = rule;
            }
            rule.ruleAttributes.conditions.push(...dataToPaste);
        },
        deleteSelectedActions: function (rule) {
            this.displayDeleteConfirmationFor = "actions";
            this.deleteForRule = rule;
        },
        deleteSelectedConditions: function (rule) {
            this.displayDeleteConfirmationFor = "conditions";
            this.deleteForRule = rule;
        },
        deleteSelectedRules: function () {
            this.displayDeleteConfirmationFor = "rules";
            this.deleteForRule = null;
        },
        cancelDeletion: function () {
            this.displayDeleteConfirmationFor = null;
            this.deleteForRule = null;
        },
        validateDeletion: function () {
            if (this.displayDeleteConfirmationFor === "actions") {
                this.deleteForRule.children = this.deleteForRule.children.filter((x) => !x.isSelected);
            } else if (this.displayDeleteConfirmationFor === "conditions") {
                this.deleteForRule.ruleAttributes.conditions = this.deleteForRule.ruleAttributes.conditions.filter((x) => !x.isSelected);
            } else {
                this.rules = this.rules.filter((x) => !x.isSelected);
            }
            this.displayDeleteConfirmationFor = null;
            this.deleteForRule = null;
        },
        moveSelected(array, moveUp) {
            if (moveUp) {
                var arrayStop = array.length;
                for (var i = 0; i < arrayStop; i++) {
                    if (array[i].isSelected) {
                        if (i === 0) {
                            var elem = array[i];
                            array.shift();
                            array.push(elem);
                            arrayStop--;
                            i--;
                        } else if (!array[i - 1].isSelected) {
                            var elem = array[i];
                            array.splice(i, 1);
                            array.splice(i - 1, 0, elem);
                        }
                    }
                }
            } else {
                var arrayStop = 0;
                for (var i = array.length - 1; i >= arrayStop; i--) {
                    if (array[i].isSelected) {
                        if (i === array.length - 1) {
                            var elem = array[i];
                            array.pop();
                            array.unshift(elem);
                            arrayStop++;
                            i++;
                        } else if (!array[i + 1].isSelected) {
                            var elem = array[i];
                            array.splice(i, 1);
                            array.splice(i + 1, 0, elem);
                        }
                    }
                }
            }
        },
        moveSelectedActions(rule, moveUp) {
            this.moveSelected(rule.children, moveUp);
        },
        moveSelectedConditions(rule, moveUp) {
            this.moveSelected(rule.ruleAttributes.conditions, moveUp);
        },
        moveSelectedRules(moveUp) {
            this.moveSelected(this.rules, moveUp);
        },
        moveArrayElement(array, i, moveUp) {
            if (moveUp && i > 0) {
                var elem = array.args[i];
                array.args.splice(i, 1);
                array.args.splice(i - 1, 0, elem);
            } else if (!moveUp && i < array.args.length - 1) {
                var elem = array.args[i];
                array.args.splice(i, 1);
                array.args.splice(i + 1, 0, elem);
            }
        },
        removeFromArray(array, i) {
            array.args.splice(i, 1);
        },
        addToArray(array) {
            var arg = new Ast("null");
            arg.parent = array;
            array.args.push(arg);
        },
        validateVariableOrSubroutineName: function (index, name, type) {
            if (!name) {
                throw new Error(this.translate("empty" + type + "Name", this.workshopUiKw, index));
            }
            if (name.length > 32) {
                throw new Error(this.translate("tooLong" + type + "Name", this.workshopUiKw, index));
            }
            if (!name.match(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/)) {
                throw new Error(this.translate("invalid" + type + "Name", this.workshopUiKw, index));
            }
        },
        editVariables: function () {
            this.displayVariableEditor = true;
            this.editedGlobalVariables = structuredClone(this.globalVariables);
            this.editedPlayerVariables = structuredClone(this.playerVariables);
        },
        editSubroutines: function () {
            this.displaySubroutineEditor = true;
            this.editedSubroutines = structuredClone(this.subroutines);
        },
        cancelVarEdition: function () {
            this.displayVariableEditor = false;
        },
        cancelSubroutineEdition: function () {
            this.displaySubroutineEditor = false;
        },
        validateVariables: function () {
            for (var v of this.editedGlobalVariables) {
                v.name = v.name.trim();
                this.validateVariableOrSubroutineName(v.index, v.name, "GlobalVar");
                if (this.editedGlobalVariables.filter((x) => x.name === v.name).length > 1) {
                    throw new Error(this.translate("conflictingGlobalVarName", this.workshopUiKw, v.index));
                }
            }
            for (var v of this.editedPlayerVariables) {
                v.name = v.name.trim();
                this.validateVariableOrSubroutineName(v.index, v.name, "PlayerVar");
                if (this.editedPlayerVariables.filter((x) => x.name === v.name).length > 1) {
                    throw new Error(this.translate("conflictingPlayerVarName", this.workshopUiKw, v.index));
                }
            }
            this.globalVariables = structuredClone(this.editedGlobalVariables);
            this.playerVariables = structuredClone(this.editedPlayerVariables);
            this.displayVariableEditor = false;
        },
        validateSubroutines: function () {
            for (var v of this.editedSubroutines) {
                v.name = v.name.trim();
                this.validateVariableOrSubroutineName(v.index, v.name, "Subroutine");
                if (this.editedSubroutines.filter((x) => x.name === v.name).length > 1) {
                    throw new Error(this.translate("conflictingSubroutineName", this.workshopUiKw, v.index));
                }
            }
            this.subroutines = structuredClone(this.editedSubroutines);
            this.displaySubroutineEditor = false;
        },
        resetVariablesToDefault: function () {
            for (var i = 0; i < this.editedGlobalVariables.length; i++) {
                this.editedGlobalVariables[i].name = defaultVarNames[i];
                this.editedPlayerVariables[i].name = defaultVarNames[i];
            }
        },
        resetSubroutinesToDefault: function () {
            for (var i = 0; i < this.editedSubroutines.length; i++) {
                this.editedSubroutines[i].name = defaultSubroutineNames[i];
            }
        },
        editExtensions: function () {
            this.compileGamemode();
            this.editedActivatedExtensions = structuredClone(this.activatedExtensions);
            this.availableExtensionPoints = availableExtensionPoints;
            this.displayExtensionsEditor = true;
        },
        getSpentExtensionPoints: function () {
            return [...this.editedActivatedExtensions].map((x) => this.customGameSettingsSchema.extensions.values[x].points).reduce((partialSum, x) => partialSum + x, 0);
        },
        cancelExtensionEdition: function () {
            this.displayExtensionsEditor = false;
        },
        validateExtensions: function () {
            if (this.getSpentExtensionPoints() > this.availableExtensionPoints) {
                throw new Error(this.translate("notEnoughExtensionPoints", this.workshopUiKw));
            }
            this.activatedExtensions = structuredClone(this.editedActivatedExtensions);
            this.displayExtensionsEditor = false;
        },
        resetExtensionsToDefault: function () {
            this.editedActivatedExtensions = [];
        },
        displayMetricsScreen: function () {
            this.compileGamemode();
            this.nbElements = nbElements;
            this.displayMetrics = true;
        },
        calculateDropdownPosition: function (dropdownList, component, { width }) {
            dropdownList.style.width = width;
            const popper = Popper.createPopper(component.$refs.toggle, dropdownList, {
                placement: "bottom",
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, -1],
                        },
                    },
                    {
                        name: "toggleClass",
                        enabled: true,
                        phase: "write",
                        fn({ state }) {
                            component.$el.classList.toggle("drop-up", state.placement === "top");
                        },
                    },
                ],
            });
            return () => popper.destroy();
        },
        updateTextareaHeight: function (textarea) {
            textarea.style.height = "";
            textarea.style.height = textarea.scrollHeight + "px";
        },
        editCustomGameSettings: function () {
            var editedCustomGameSettings = structuredClone(this.customGameSettings);

            function fillMissingKeys(settings, schema) {
                for (var key of Object.keys(schema)) {
                    if (key === "extensions" || key === "workshop") {
                        continue;
                    }
                    if (!(key in settings)) {
                        //console.log("Adding key '"+key+"'");
                        if (schema[key].values === "__boolOnOff__") {
                            if (schema[key].default === "on") {
                                settings[key] = true;
                            } else if (schema[key].default === "off") {
                                settings[key] = false;
                            } else {
                                throw new Error("no default for '" + key + "'");
                            }
                        } else if (schema[key].values === "__boolYesNo__") {
                            if (schema[key].default === "yes") {
                                settings[key] = true;
                            } else if (schema[key].default === "no") {
                                settings[key] = false;
                            } else {
                                throw new Error("no default for '" + key + "'");
                            }
                        } else if (schema[key].values === "__boolEnabled__") {
                            if (schema[key].default === "enabled") {
                                settings[key] = true;
                            } else if (schema[key].default === "disabled") {
                                settings[key] = false;
                            } else {
                                throw new Error("no default for '" + key + "'");
                            }
                        } else if (schema[key].values === "__boolReverseOnOff__") {
                            if (schema[key].default === "on") {
                                settings[key] = false;
                            } else if (schema[key].default === "off") {
                                settings[key] = true;
                            } else {
                                throw new Error("no default for '" + key + "'");
                            }
                        } else if (schema[key].values === "__percent__") {
                            settings[key] = schema[key].default;
                        } else if (schema[key].values === "__int__") {
                            settings[key] = schema[key].default;
                        } else if (schema[key].values === "__float__") {
                            settings[key] = schema[key].default;
                        } else if (schema[key].values === "__percent__") {
                            settings[key] = schema[key].default;
                        } else if (schema[key].values === "__string__") {
                            settings[key] = "";
                        } else if (typeof schema[key].values === "object") {
                            var defaultSetting = Object.keys(schema[key].values).filter((x) => schema[key].values[x].default === true);
                            if (defaultSetting.length !== 1) {
                                throw new Error("Could not find default setting for '" + key + "'");
                            }
                            settings[key] = defaultSetting[0];
                        }
                    }
                }
            }

            if (!editedCustomGameSettings.lobby) {
                editedCustomGameSettings.lobby = {};
            }
            fillMissingKeys(editedCustomGameSettings.lobby, customGameSettingsSchema.lobby.values);
            if (!editedCustomGameSettings.main) {
                editedCustomGameSettings.main = {};
            }
            fillMissingKeys(editedCustomGameSettings.main, customGameSettingsSchema.main.values);
            if (!editedCustomGameSettings.gamemodes) {
                editedCustomGameSettings.gamemodes = {};
            }
            for (var gamemode in customGameSettingsSchema.gamemodes.values) {
                if (gamemode in gamemodeKw && gamemodeKw[gamemode].onlyInOw1) {
                    delete editedCustomGameSettings.gamemodes[gamemode];
                    continue;
                }
                if (gamemode !== "general") {
                    if (!(gamemode in editedCustomGameSettings.gamemodes)) {
                        editedCustomGameSettings.gamemodes[gamemode] = { enabled: false };
                    } else if (!("enabled" in editedCustomGameSettings.gamemodes[gamemode])) {
                        editedCustomGameSettings.gamemodes[gamemode].enabled = true;
                    }
                    if (!("enabledMaps" in editedCustomGameSettings.gamemodes[gamemode])) {
                        editedCustomGameSettings.gamemodes[gamemode].enabledMaps = Object.keys(mapKw).filter((x) => mapKw[x].gamemodes.includes(gamemode));
                    }
                    editedCustomGameSettings.gamemodes[gamemode].enabledMaps = editedCustomGameSettings.gamemodes[gamemode].enabledMaps.filter((x) => !mapKw[x].onlyInOw1);
                    if ("disabledMaps" in editedCustomGameSettings.gamemodes[gamemode]) {
                        editedCustomGameSettings.gamemodes[gamemode].enabledMaps = editedCustomGameSettings.gamemodes[gamemode].enabledMaps.filter((x) => !editedCustomGameSettings.gamemodes[gamemode].disabledMaps.includes(x));
                        delete editedCustomGameSettings.gamemodes[gamemode].disabledMaps;
                    }
                } else if (!(gamemode in editedCustomGameSettings.gamemodes)) {
                    editedCustomGameSettings.gamemodes[gamemode] = {};
                }
                fillMissingKeys(editedCustomGameSettings.gamemodes[gamemode], customGameSettingsSchema.gamemodes.values[gamemode].values);
                editedCustomGameSettings.gamemodes[gamemode].isCollapsed = true;
                editedCustomGameSettings.gamemodes[gamemode].isArrayCollapsed = true;
            }
            if (!editedCustomGameSettings.heroes) {
                editedCustomGameSettings.heroes = {};
            }
            for (var team in customGameSettingsSchema.heroes.teams) {
                if (!(team in editedCustomGameSettings.heroes)) {
                    editedCustomGameSettings.heroes[team] = {};
                }
                editedCustomGameSettings.heroes[team].isCollapsed = true;
                editedCustomGameSettings.heroes[team].isArrayCollapsed = true;
                if ("disabledHeroes" in editedCustomGameSettings.heroes[team]) {
                    editedCustomGameSettings.heroes[team].enabledHeroes = Object.keys(heroKw).filter((x) => !editedCustomGameSettings.heroes[team].disabledHeroes.includes(x));
                    delete editedCustomGameSettings.heroes[team].disabledHeroes;
                } else if (!("enabledHeroes" in editedCustomGameSettings.heroes[team])) {
                    editedCustomGameSettings.heroes[team].enabledHeroes = Object.keys(heroKw);
                }
                for (var hero in customGameSettingsSchema.heroes.values) {
                    if (hero === "disabledHeroes" || hero === "enabledHeroes") {
                        continue;
                    }
                    //console.log(hero);
                    if (!(hero in editedCustomGameSettings.heroes[team])) {
                        editedCustomGameSettings.heroes[team][hero] = {};
                    }
                    fillMissingKeys(editedCustomGameSettings.heroes[team][hero], customGameSettingsSchema.heroes.values[hero].values);
                    editedCustomGameSettings.heroes[team][hero].isCollapsed = true;
                }
            }

            for (var key in editedCustomGameSettings) {
                editedCustomGameSettings[key].isCollapsed = true;
            }

            this.editedCustomGameSettings = editedCustomGameSettings;
            this.displaySettings = true;
        },

        validateSettings: function () {
            function removeDefaults(settings, schema) {
                for (var key in settings) {
                    if (key === "enabled") {
                        continue;
                    }
                    if (!(key in schema)) {
                        throw new Error(key + " not found in schema");
                    }
                    var defaultSetting = schema[key].default;
                    if (schema[key].values === "__boolReverseOnOff__") {
                        defaultSetting = defaultSetting === "on" ? false : true;
                    } else if (["yes", "enabled", "on"].includes(defaultSetting)) {
                        defaultSetting = true;
                    } else if (["no", "disabled", "off"].includes(defaultSetting)) {
                        defaultSetting = false;
                    } else if (typeof schema[key].values === "object") {
                        defaultSetting = Object.keys(schema[key].values).filter((x) => schema[key].values[x].default === true)[0];
                    }
                    if (settings[key] === defaultSetting) {
                        delete settings[key];
                    }
                }
            }

            for (var key in this.editedCustomGameSettings) {
                delete this.editedCustomGameSettings[key].isCollapsed;
            }
            removeDefaults(this.editedCustomGameSettings.lobby, customGameSettingsSchema.lobby.values);
            removeDefaults(this.editedCustomGameSettings.main, customGameSettingsSchema.main.values);
            for (var gamemode in this.editedCustomGameSettings.gamemodes) {
                delete this.editedCustomGameSettings.gamemodes[gamemode].isCollapsed;
                delete this.editedCustomGameSettings.gamemodes[gamemode].isArrayCollapsed;
                removeDefaults(this.editedCustomGameSettings.gamemodes[gamemode], customGameSettingsSchema.gamemodes.values[gamemode].values);
                if ("enabledMaps" in this.editedCustomGameSettings.gamemodes[gamemode] && this.editedCustomGameSettings.gamemodes[gamemode].enabledMaps.length === Object.keys(mapKw).filter((x) => mapKw[x].gamemodes.includes(gamemode) && !mapKw[x].onlyInOw1).length) {
                    delete this.editedCustomGameSettings.gamemodes[gamemode].enabledMaps;
                }
                if (!this.editedCustomGameSettings.gamemodes[gamemode].enabled) {
                    delete this.editedCustomGameSettings.gamemodes[gamemode].enabledMaps;
                }
                if (!this.editedCustomGameSettings.gamemodes[gamemode].enabled && Object.keys(this.editedCustomGameSettings.gamemodes[gamemode]).length <= 1) {
                    delete this.editedCustomGameSettings.gamemodes[gamemode];
                }
            }
            for (var team in this.editedCustomGameSettings.heroes) {
                delete this.editedCustomGameSettings.heroes[team].isCollapsed;
                delete this.editedCustomGameSettings.heroes[team].isArrayCollapsed;
                for (var hero in this.editedCustomGameSettings.heroes[team]) {
                    delete this.editedCustomGameSettings.heroes[team][hero].isCollapsed;
                    delete this.editedCustomGameSettings.heroes[team][hero].isArrayCollapsed;
                    if (hero !== "enabledHeroes") {
                        console.log(hero);
                        removeDefaults(this.editedCustomGameSettings.heroes[team][hero], customGameSettingsSchema.heroes.values[hero].values);
                        if (Object.keys(this.editedCustomGameSettings.heroes[team][hero]).length === 0) {
                            delete this.editedCustomGameSettings.heroes[team][hero];
                        }
                    } else if (this.editedCustomGameSettings.heroes[team].enabledHeroes.length === Object.keys(heroKw).length) {
                        delete this.editedCustomGameSettings.heroes[team].enabledHeroes;
                    }
                }
                if (Object.keys(this.editedCustomGameSettings.heroes[team]).length === 0) {
                    delete this.editedCustomGameSettings.heroes[team];
                }
            }

            for (var key in this.editedCustomGameSettings) {
                if (Object.keys(this.editedCustomGameSettings[key]).length === 0) {
                    delete this.editedCustomGameSettings[key];
                }
            }

            this.customGameSettings = structuredClone(this.editedCustomGameSettings);
            this.displaySettings = false;
            this.compileGamemode();
        },
        loadProjects: async function () {
            //var projects = await fetch("https://workshop.codes/api/owo");
            var projects = [];

            if (projects.length === 0) {
                //If user has no projects, create a project for them
                this.createNewProject("Untitled");
                //projects = await fetch("https://workshop.codes/api/owo");
                projects = [{ id: "fdsmio-ameoi-qdfpskl", name: "Gengu Parkour (3) final (true final) (1)" }];
            }
            if (window.location.pathname.startsWith("/C:")) {
                this.currentProjectId = projects[0].id;
            } else {
                var currentProjectId = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
                if (currentProjectId === "workshop-ui") {
                    //User is currently not in a project. Redirect him to the first project
                    this.currentProjectId = projects[0].id;
                    this.setUrl();
                } else {
                    this.currentProjectId = projects.filter((x) => x.id === currentProjectId)[0].id;
                }
            }
            this.projects = projects;
        },
        createNewProject: async function (projectName) {
            //var projectId = await fetch("https://workshop.codes/api/owo/"+this.currentProjectId, {method: "post"});
            var projectId = "mljljkmqsdf-ezaioroi-dsqfosi";
            this.projects.push({ name: projectName, id: projectId });
            return projectId; //the id of the project
        },
        setUrl: function () {
            if (window.location.pathname.startsWith("/C:")) {
                window.location.hash = this.currentProjectId;
            } else {
                //note: it has to not reload the page somehow
                window.location = "https://workshop.codes/workshop-ui/" + this.currentProjectId;
            }
        },
        setCurrentProject: async function (projectId) {
            if (projectId === null) {
                projectId = await this.createNewProject("Untitled Project");
            }
            this.currentProjectId = this.projects.filter((x) => x.id === projectId)[0].id;
        },
        loadProject: function (projectId) {
            //var projectData = fetch("htts://workshop.codes/api/owo/"+this.currentProjectId);
            var projectData = {
                rules: [
                    {
                        name: "__rule__",
                        args: [],
                        children: [
                            {
                                name: "__setGlobalVariable__",
                                args: [
                                    {
                                        name: 0,
                                        args: [],
                                        children: [],
                                        type: "GlobalVariable",
                                        argIndex: 0,
                                        childIndex: 0,
                                        wasParsed: false,
                                    },
                                    {
                                        name: "__number__",
                                        args: [
                                            {
                                                name: "0",
                                                args: [],
                                                children: [],
                                                type: "UnsignedIntLiteral",
                                                numValue: 0,
                                                argIndex: 0,
                                                childIndex: 0,
                                                wasParsed: false,
                                            },
                                        ],
                                        children: [],
                                        type: "int",
                                        argIndex: 0,
                                        childIndex: 0,
                                        wasParsed: false,
                                    },
                                ],
                                children: [],
                                type: "void",
                                argIndex: 0,
                                childIndex: 0,
                                wasParsed: false,
                                isSelected: true,
                                isDisabled: true,
                                indent: 0,
                            },
                            {
                                name: "__setGlobalVariable__",
                                args: [
                                    {
                                        name: 0,
                                        args: [],
                                        children: [],
                                        type: "GlobalVariable",
                                        fileStack: null,
                                        argIndex: 0,
                                        childIndex: 0,
                                        wasParsed: false,
                                    },
                                    {
                                        name: "__number__",
                                        args: [
                                            {
                                                name: "0",
                                                args: [],
                                                children: [],
                                                type: "UnsignedIntLiteral",
                                                numValue: 0,
                                                fileStack: null,
                                                argIndex: 0,
                                                childIndex: 0,
                                                wasParsed: false,
                                            },
                                        ],
                                        children: [],
                                        type: "int",
                                        fileStack: null,
                                        argIndex: 0,
                                        childIndex: 0,
                                        wasParsed: false,
                                    },
                                ],
                                children: [],
                                type: "void",
                                fileStack: null,
                                argIndex: 0,
                                childIndex: 0,
                                wasParsed: false,
                                isSelected: false,
                                isDisabled: false,
                                indent: 0,
                            },
                        ],
                        type: "void",
                        argIndex: 0,
                        childIndex: 0,
                        wasParsed: false,
                        isSelected: true,
                        isCollapsed: false,
                        ruleAttributes: {
                            conditions: [],
                            event: "global",
                            name: "Rule 1",
                            isDisabled: false,
                        },
                    },
                ],
                customGameSettings: {
                    main: {
                        description: "Some awesome game mode",
                        modeName: "GameMode v1.0",
                    },
                    gamemodes: {
                        skirmish: {
                            heroLimit: "off",
                            "respawnTime%": 30,
                        },
                    },
                },
                globalVariables: defaultVarNames.map((x, i) => ({ name: x, index: i })),
                playerVariables: defaultVarNames.map((x, i) => ({ name: x, index: i })),
                subroutines: defaultSubroutineNames.map((x, i) => ({ name: x, index: i })),
                activatedExtensions: [],
                disabledWarnings: "",
                optimization: "speed",
            };

            function addParent(ast) {
                for (var arg of ast.args) {
                    arg.parent = ast;
                    addParent(arg);
                }
                for (var child of ast.children) {
                    child.parent = ast;
                    addParent(child);
                }
                if (ast.name === "__rule__") {
                    for (var cond of ast.ruleAttributes.conditions) {
                        cond.parent = ast;
                        addParent(cond);
                    }
                }
            }
            for (var rule of projectData.rules) {
                addParent(rule);
            }

            this.rules = projectData.rules;
            this.customGameSettings = projectData.customGameSettings;
            this.globalVariables = projectData.globalVariables;
            this.playerVariables = projectData.playerVariables;
            this.subroutines = projectData.subroutines;
            this.activatedExtensions = projectData.activatedExtensions;
            this.uiSettings.disabledWarnings = projectData.disabledWarnings;
            this.uiSettings.optimization = projectData.optimization;

            this.currentProjectId = this.projects.filter((x) => x.id === projectId)[0].id;
            this.setUrl();
        },
        saveProject: async function () {
            return;
            await fetch("https://workshop.codes/owo/" + this.currentProjectId, {
                method: "post",
                body: JSON.stringify({
                    rules: this.rules,
                    customGameSettings: this.customGameSettings,
                    globalVariables: this.globalVariables,
                    playerVariables: this.playerVariables,
                    subroutines: this.subroutines,
                    activatedExtensions: this.activatedExtensions,
                    name: this.customGameSettings?.main?.modeName || "<Untitled mode>",
                }),
            });
        },
        loadUiSettings: async function () {
            if (localStorage.uiSettings) {
                var uiSettings = JSON.parse(localStorage.uiSettings);

                this.uiSettings.background = uiSettings.background;
                this.uiSettings.language = uiSettings.language;
                this.uiSettings.compilationLanguage = uiSettings.compilationLanguage;
                this.decompilationLanguage = uiSettings.compilationLanguage;
            }
        },
        saveUiSettings: async function () {
            localStorage.uiSettings = JSON.stringify({
                background: this.uiSettings.background,
                language: this.uiSettings.language,
                compilationLanguage: this.uiSettings.compilationLanguage,
            });
            localStorage.hasPassedWelcomeScreen = this.hasPassedWelcomeScreen;
        },
        filterDropdownOptions: function (options, search) {
            search = search.toLocaleLowerCase().replace(/[-:' ]/g, "");
            return options
                .filter((option) => {
                    let label = option.label.toLocaleLowerCase().replace(/[-:' ]/g, "");
                    return label.includes(search);
                })
                .sort((a, b) =>
                    a.label
                        .toLocaleLowerCase()
                        .replace(/[-:' ]/g, "")
                        .startsWith(search) &&
                    !b.label
                        .toLocaleLowerCase()
                        .replace(/[-:' ]/g, "")
                        .startsWith(search)
                        ? -1
                        : !a.label
                                .toLocaleLowerCase()
                                .replace(/[-:' ]/g, "")
                                .startsWith(search) &&
                            b.label
                                .toLocaleLowerCase()
                                .replace(/[-:' ]/g, "")
                                .startsWith(search)
                          ? 1
                          : a.label.localeCompare(b.label),
                );
        },
    },

    created: function () {
        this.loadUiSettings();
        this.loadProjects();
    },

    watch: {
        "uiSettings.language": {
            handler: function (newValue) {
                document.getElementsByTagName("body")[0].className = "font-futurano2d " + newValue;
            },
            immediate: true,
        },
    },
});

console.info = app.info;
console.warn = app.warn;
console.error = app.error;
