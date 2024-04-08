const fs = require("fs");
const JsDiff = require("diff");
const UglifyJS = require("uglify-js");

//import overpy files
overpyFiles = [


"utils/other.js",
"data/opy/stringEntities.js",
"data/opy/constants.js",
"data/opy/modules.js",
"data/opy/internalFunctions.js",
"data/opy/functions.js",
"data/opy/keywords.js",
"data/opy/memberFunctions.js",
"data/actions.js",
"data/values.js",
"data/maps.js",
"data/heroes.js",
"data/gamemodes.js",
"data/constants.js",
"data/other.js",
"data/ui.js",
"data/customGameSettings.js",
"data/opy/preprocessing.js",
"data/opy/annotations.js",
"globalVars.js",
"utils/logging.js",
"utils/ast.js",
"utils/types.js",
"utils/compilation.js",
"utils/decompilation.js",
"utils/file.js",
"utils/optimization.js",
"utils/strings.js",
"utils/translation.js",
"utils/varNames.js",
"utils/tokens.js",
"decompiler/decompileTest.js",
"decompiler/workshopToAst.js",
"decompiler/astToOpy.js",
"decompiler/decompiler.js",
"compiler/obfuscation.js",

"compiler/functions/__add__.js",
"compiler/functions/__and__.js",
"compiler/functions/__append__.js",
"compiler/functions/__array__.js",
"compiler/functions/__arraySlice__.js",
"compiler/functions/__assignTo__.js",
"compiler/functions/__button__.js",
"compiler/functions/__chaseAtRate__.js",
"compiler/functions/__chaseOverTime__.js",
"compiler/functions/__color__.js",
"compiler/functions/__del__.js",
"compiler/functions/__dict__.js",
"compiler/functions/__distanceTo__.js",
"compiler/functions/__divide__.js",
"compiler/functions/__doWhile__.js",
"compiler/functions/__elif__.js",
"compiler/functions/__else__.js",
"compiler/functions/__equals__.js",
"compiler/functions/__for__.js",
"compiler/functions/__format__.js",
"compiler/functions/__filteredArray__.js",
"compiler/functions/__gamemode__.js",
"compiler/functions/__globalVar__.js",
"compiler/functions/__greaterThan__.js",
"compiler/functions/__greaterThanOrEquals__.js",
"compiler/functions/__hero__.js",
"compiler/functions/__if__.js",
"compiler/functions/__ifThenElse__.js",
"compiler/functions/__indexOfArrayValue__.js",
"compiler/functions/__inequals__.js",
"compiler/functions/__lastOf__.js",
"compiler/functions/__lessThan__.js",
"compiler/functions/__lessThanOrEquals__.js",
"compiler/functions/__map__.js",
"compiler/functions/__mappedArray__.js",
"compiler/functions/__modifyVar__.js",
"compiler/functions/__modulo__.js",
"compiler/functions/__multiply__.js",
"compiler/functions/__negate__.js",
"compiler/functions/__number__.js",
"compiler/functions/__not__.js",
"compiler/functions/__or__.js",
"compiler/functions/__playerVar__.js",
"compiler/functions/__raiseToPower__.js",
"compiler/functions/__remove__.js",
"compiler/functions/__reverse__.js",
"compiler/functions/__rule__.js",
"compiler/functions/__skip__.js",
"compiler/functions/__subtract__.js",
"compiler/functions/__switch__.js",
"compiler/functions/__team__.js",
"compiler/functions/__valueInArray__.js",
"compiler/functions/__wait__.js",
"compiler/functions/__while__.js",
"compiler/functions/__xComponentOf__.js",
"compiler/functions/__yComponentOf__.js",
"compiler/functions/__zComponentOf__.js",
"compiler/functions/_&addToScore.js",
"compiler/functions/_&setStatusEffect.js",
"compiler/functions/_&setUltCharge.js",
"compiler/functions/_&toArray.js",
"compiler/functions/abs.js",
"compiler/functions/acos.js",
"compiler/functions/acosDeg.js",
"compiler/functions/addToTeamScore.js",
"compiler/functions/all.js",
"compiler/functions/any.js",
"compiler/functions/asin.js",
"compiler/functions/asinDeg.js",
"compiler/functions/atan2.js",
"compiler/functions/atan2Deg.js",
"compiler/functions/attacker.js",
"compiler/functions/break.js",
"compiler/functions/ceil.js",
"compiler/functions/continue.js",
"compiler/functions/cos.js",
"compiler/functions/cosDeg.js",
"compiler/functions/createBeam.js",
"compiler/functions/createEffect.js",
"compiler/functions/createWorkshopSetting.js",
"compiler/functions/crossProduct.js",
"compiler/functions/directionTowards.js",
"compiler/functions/disableInspector.js",
"compiler/functions/distance.js",
"compiler/functions/dotProduct.js",
"compiler/functions/enableInspector.js",
"compiler/functions/eventPlayer.js",
"compiler/functions/floor.js",
"compiler/functions/getAllPlayers.js",
"compiler/functions/getOppositeTeam.js",
"compiler/functions/healer.js",
"compiler/functions/healee.js",
"compiler/functions/len.js",
"compiler/functions/lineIntersectsSphere.js",
"compiler/functions/log.js",
"compiler/functions/max.js",
"compiler/functions/min.js",
"compiler/functions/normalize.js",
"compiler/functions/playEffect.js",
"compiler/functions/print.js",
"compiler/functions/printLog.js",
"compiler/functions/round.js",
"compiler/functions/sin.js",
"compiler/functions/sinDeg.js",
"compiler/functions/sorted.js",
"compiler/functions/sqrt.js",
"compiler/functions/tan.js",
"compiler/functions/tanDeg.js",
"compiler/functions/vect.js",
"compiler/functions/vectorTowards.js",
"compiler/functions/victim.js",
"compiler/functions/wait.js",
"compiler/functions/waitUntil.js",
"compiler/tokenizer.js",
"compiler/astParser.js",
"compiler/astToWorkshop.js",
"compiler/parser.js",
"compiler/compiler.js",
"data/localizedStrings.js",


];

var overpyCode = "";
for (file of overpyFiles) {
	overpyCode += fs.readFileSync(process.cwd()+"/src/"+file).toString()
}

overpyCode += `
if (typeof module !== "undefined") {
	module.exports = {
		decompileAllRules: decompileAllRules,
		decompileActions: decompileActions,
		decompileConditions: decompileConditions,
		astToOpy: astToOpy,
		compile: compile,
		actionKw: actionKw,
		valueFuncKw: valueFuncKw,
		constantValues: constantValues,
		annotations: opyAnnotations,
		eventKw: eventKw,
		eventTeamKw: eventTeamKw,
		eventSlotKw: eventSlotKw,
		eventPlayerKw: eventPlayerKw,
		ruleKw: ruleKw,
		stringKw: stringKw,
		heroKw: heroKw,
		mapKw: mapKw,
		opyFuncs: opyFuncs,
		opyMemberFuncs: opyMemberFuncs,
		opyKeywords: opyKeywords,
		opyConstants: opyConstants,
		opyModules: opyModules,
		currentLanguage: currentLanguage,
		macros: macros,
		resetGlobalVariables: resetGlobalVariables,
		preprocessingDirectives: preprocessingDirectives,
		typeToString: typeToString,
		opyStringEntities: opyStringEntities,
		customGameSettingsSchema: customGameSettingsSchema,
	};
}
`

fs.writeFileSync("./VS Code Extension/overpy.js", overpyCode);

var minifiedCode = UglifyJS.minify(overpyCode).code;
fs.writeFileSync("./VS Code Extension/overpy.min.js", minifiedCode);

//fs.writeFileSync("./bot/overpy.js", overpyCode);

//Generate functions.md

const overpy = require("./VS Code Extension/overpy.js");

var functionsMd = `

Some functions (such as operators) have transformations applied to them. If you cannot find the function here, then it is in the [special functions page](https://github.com/Zezombye/overpy/wiki/Functions).

## Normal functions

Workshop function | OverPy function
----------------- | ---------------
`;

var allFunctions = Object.assign({}, overpy.actionKw, overpy.valueFuncKw);
var normalFunctions = Object.keys(allFunctions).filter(x => !x.startsWith("_")).sort((a,b) => allFunctions[a]["en-US"].localeCompare(allFunctions[b]["en-US"]));

for (var func of normalFunctions) {
	functionsMd += allFunctions[func]["en-US"]+" | "+func;
	if (allFunctions[func].args !== null) {
		functionsMd += "()";
	}
	functionsMd += "\n";
}

functionsMd += `

## Player functions

These functions take a player as first argument. The first argument is removed and put before the function.

Example: \`Teleport(Event Player, Vector(1,2,3))\` is written as \`eventPlayer.teleport(vect(1,2,3))\`.

Workshop function | OverPy function
----------------- | ---------------
`

var playerFunctions = Object.keys(allFunctions).filter(x => x.startsWith("_&")).sort((a,b) => allFunctions[a]["en-US"].localeCompare(allFunctions[b]["en-US"]));
for (var func of playerFunctions) {
	functionsMd += allFunctions[func]["en-US"]+" | \\<player\\>."+func.substring(2)+"()";
	functionsMd += "\n";
}

fs.writeFileSync("./FUNCTIONS.md", functionsMd);

//Run the unit tests
var oldcwd = process.cwd();
var testsDir = process.cwd()+"/src/tests/";
process.chdir(testsDir);
var unitTestFiles = fs.readdirSync(testsDir)
	.filter((fileName) => fileName.endsWith("opy"));

for (var unitTestFile of unitTestFiles) {
    if (fs.statSync(testsDir+unitTestFile).isDirectory()) {
        continue;
    }
    console.log("Checking unit test '"+unitTestFile+"'");
    var unitTestContent = fs.readFileSync(testsDir + unitTestFile).toString();
    var output = overpy.compile(unitTestContent).result;

    var outputFile = testsDir+"/results/"+unitTestFile.replace(".opy", ".txt");

    if (fs.existsSync(outputFile)) {
        var outputFileContent = fs.readFileSync(outputFile).toString();
        if (outputFileContent !== output) {
            console.error("Error: output for unit test '"+unitTestFile+"' did not match result");
			console.error("Diff:")

			var diff = JsDiff.diffLines(outputFileContent, output);
			for (var part of diff) {
				if (part.added) {

					console.error("------ADDED--------------");
					console.error(part.value.split("\n").map(x => "+ "+x).join("\n"));
				} else if (part.removed) {
					console.error("------REMOVED--------------");
					console.error(part.value.split("\n").map(x => "- "+x).join("\n"));
				}
			}

            process.exit();
        }
    } else {
        console.log("Result for unit test '"+unitTestFile+"' does not exist, creating it.");
        fs.writeFileSync(outputFile, output);
    }
}

process.chdir(oldcwd);


//Generate json schema
var jsonSchema = {
	"$schema": "http://json-schema.org/schema#",
	"$id": "overpy/customGameSettingsSchema.json",
	"type": "object",
	"properties": {},
	"additionalProperties": false,
}

function generateJsonSchema(json, settings) {
	if (typeof settings === "object") {
		if (!("values" in settings)) {
			throw new Error("Object '"+settings["en-US"]+"' has no values");
		}
		if (typeof settings.values === "object") {
			//It is an enum if none of the objects have a "values" field.
			var isEnum = true;
			for (var key in settings.values) {
				//console.log("testing "+key);
				//console.log(settings);
				//console.log(settings.values[key])
				//console.log(settings.values[key].values)
				if (settings.values[key].values) {
					isEnum = false;
					break;
				}
			}
			if (!isEnum) {
				json.type = "object";
				json.additionalProperties = false;
				json.properties = {}
				for (var key in settings.values) {
					//console.log("generating "+key);
					json.properties[key] = {}
					generateJsonSchema(json.properties[key], settings.values[key]);
				}
			} else {
				json.type = "string";
				json.enum = Object.keys(settings.values);
			}
		} else if (settings.values === "__string__") {
			json.type = "string";
			if ("maxChars" in settings) {
				json.maxLength = settings.maxChars;
			}
		} else if (settings.values === "__boolYesNo__" || settings.values === "__boolEnabled__" || settings.values === "__boolOnOff__" || settings.values === "__boolReverseOnOff__") {
			json.type = "boolean";
		} else if (settings.values === "__int__") {
			json.type = "integer";
			if ("min" in settings) {
				json.minimum = settings.min;
			}
			if ("max" in settings) {
				json.maximum = settings.max;
			}
		} else if (settings.values === "__percent__" || settings.values === "__float__") {
			json.type = "number";
			if ("min" in settings) {
				json.minimum = settings.min;
			}
			if ("max" in settings) {
				json.maximum = settings.max;
			}
		} else {
			throw new Error("Unhandled type: "+settings.values)
		}
		if (settings.description) {
			json.description = settings.description;
		}
	} else {
		throw new Error("Unhandled value : "+settings)
	}
}

for (var key in overpy.customGameSettingsSchema) {
	//console.log("generating "+key);
	if (key === "main" || key === "lobby") {
		jsonSchema.properties[key] = {};
		generateJsonSchema(jsonSchema.properties[key], overpy.customGameSettingsSchema[key]);

	} else if (key === "gamemodes") {
		jsonSchema.properties[key] = {
			type: "object",
			additionalProperties: false,
			properties: {},
		};

		for (var gamemode in overpy.customGameSettingsSchema[key].values) {
			//console.log("generating gamemode "+gamemode);
			jsonSchema.properties[key].properties[gamemode] = {
				type: "object",
				additionalProperties: false,
				properties: {},
			}
			if (gamemode === "general") {
				var validMaps = Object.keys(overpy.mapKw);
			} else {
				var validMaps = Object.keys(overpy.mapKw).filter(x => overpy.mapKw[x].gamemodes.includes(gamemode));
			}
			for (var key2 in overpy.customGameSettingsSchema[key].values[gamemode].values) {
				if (key2 === "disabledMaps" || key2 === "enabledMaps") {
					jsonSchema.properties[key].properties[gamemode].properties[key2] = {
						"type": "array",
						"items": {
							"anyOf": [
								{
									"type": "string",
									"enum": validMaps,
								},
								{
									"type": "object",
									"oneOf": validMaps.map((mapKey) => {
										const map = overpy.mapKw[mapKey];
										return {
											"properties": {
												[mapKey]: {
													"type": "array",
													"items": {
														"type": "string",
														"enum": map.variants ? Object.keys(map.variants) : []
													}
												}
											},
											"additionalProperties": false
										}
									})
								}
							]
						}
					};
				} else {
					jsonSchema.properties[key].properties[gamemode].properties[key2] = {};
					generateJsonSchema(jsonSchema.properties[key].properties[gamemode].properties[key2], overpy.customGameSettingsSchema[key].values[gamemode].values[key2]);
				}
			}
		}
	} else if (key === "heroes") {
		jsonSchema.definitions = {
			"heroes": {
				type: "object",
				additionalProperties: false,
				properties: {},
			},
		}
		for (var hero in overpy.customGameSettingsSchema[key].values) {
			//console.log("generating hero "+hero);
			jsonSchema.definitions.heroes.properties[hero] = {}
			if (hero === "disabledHeroes" || hero === "enabledHeroes") {
				jsonSchema.definitions.heroes.properties[hero] = {
					"type": "array",
					"items": {
						"type": "string",
						"enum": Object.keys(overpy.heroKw),
					}
				}
			} else {
				generateJsonSchema(jsonSchema.definitions.heroes.properties[hero], overpy.customGameSettingsSchema[key].values[hero])
			}
		}
		jsonSchema.properties[key] = {
			type: "object",
			additionalProperties: false,
			properties: {},
		}
		for (var team in overpy.customGameSettingsSchema[key].teams) {
			/*jsonSchema.properties[key].properties[team] = {
				"$ref": "#/definitions/heroes",
			}*/
			jsonSchema.properties[key].properties[team] = jsonSchema.definitions.heroes;
		}
	} else if (key === "workshop") {
		jsonSchema.properties[key] = {
			type: "object",
			"patternProperties": {
				".*": {
					"type": ["number", "boolean", "string"],
				},
			},
		}

	} else if (key === "extensions") {
		//do not put this key into the schema
	} else {
		throw new Error("unknown key "+key);
	}
}

fs.writeFileSync("./VS Code Extension/customGameSettingsSchema.json", JSON.stringify(jsonSchema, null, 4));
