

// @ts-ignore - Standalone OverPy conditionally exports when run in Node
import * as overpy from "./out/overpy_standalone.js";
import * as fs from "fs";

overpy.computeCustomGameSettingsSchema();

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

fs.writeFileSync("./customGameSettingsSchema.json", JSON.stringify(jsonSchema, null, 4));
