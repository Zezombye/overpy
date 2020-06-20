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


/*
A type is suitable if each type of the receivedType is suitable for any of the types in expectedType.
Eg: ["unsigned float", "Vector"] is suitable for ["float", "Direction"].
However ["float", "Vector"] is not suitable for ["float"].

A type is defined as "suitable" if it is the type, or a child type, of expectedType.
Eg: "float" is suitable for "Object". However "Object" is not suitable for "float".
Moreover, {Array: "Player"} is not suitable for "Array".

The special "Value" type is suitable for any child type of object or array.
*/
function isTypeSuitable(expectedType, receivedType, valueTypeIsSuitable=true) {

    //console.log("expected type = "+JSON.stringify(expectedType)+", received type = "+JSON.stringify(receivedType));

    if (receivedType instanceof Array) {
        //Check if each of the received type is valid for the expected type.
        return receivedType.every(x => isTypeSuitable(expectedType, x));
    }

    if (expectedType instanceof Array) {
        //Check if the received type is valid for any of the expected types.
        return expectedType.some(x => isTypeSuitable(x, receivedType));
    }

    if (typeof receivedType === "string") {
        if (typeof expectedType === "string") {
            //Do not check for type "Variable". Functions with such a type are checked manually.
            if (expectedType === "Variable") {
                return true;
            }
            //Handle the special "value" type.
            if (receivedType === "Value" && valueTypeIsSuitable) {
                return expectedType === "Value" || expectedType === "Array" || typeMatrix["Object"].includes(expectedType);
            } else if (expectedType === "Value" && valueTypeIsSuitable) {
                return receivedType === "Array" || typeMatrix["Object"].includes(receivedType);
            } else {
                //The most simple case: both types are string. Simply use the type matrix to see if the received type is a child (or the type itself) of the expected type.
                if (!(expectedType in typeMatrix)) {
                    error("Unhandled type '"+expectedType+"'");
                }
                return typeMatrix[expectedType].includes(receivedType);
            }

        } else if (typeof expectedType === "object") {
            var expectedTypeName = Object.keys(expectedType)[0];
            if (expectedTypeName === "Array") {
                //The only string type that would be suitable for Array is the special "value" type.
                return receivedType === "Value";

            } else if (["Vector", "Direction", "Position", "Velocity"].includes(expectedTypeName)) {
                return isTypeSuitable(expectedTypeName, receivedType);

            }
        }
    } else if (typeof receivedType === "object") {
        var receivedTypeName = Object.keys(receivedType)[0];
        if (receivedTypeName === "Array") {
            if (typeof expectedType === "string") {
                //The only string type that is suitable for an array is "Array".
                return expectedType === "Array";

            } else if (typeof expectedType === "object") {
                
                var expectedTypeName = Object.keys(expectedType)[0];
                if (expectedTypeName === "Array") {
                    return isTypeSuitable(expectedType[expectedTypeName], receivedType[receivedTypeName]);

                } else if (["Vector", "Direction", "Position", "Velocity"].includes(expectedTypeName)) {
                    //An array cannot be suitable for a vector
                    return false;
                }
            }
        } else if (["Vector", "Direction", "Position", "Velocity"].includes(receivedTypeName)) {
            if (typeof expectedType === "string") {
                //The default type for vectors is float.
                return isTypeSuitable(expectedType, receivedTypeName) && receivedType[receivedTypeName].every(x => isTypeSuitable("float", x));

            } else if (typeof expectedType === "object") {
                
                var expectedTypeName = Object.keys(expectedType)[0];
                if (expectedTypeName === "Array") {
                    //An vector cannot be suitable for a array
                    return false;

                } else if (["Vector", "Direction", "Position", "Velocity"].includes(expectedTypeName)) {
                    if (isTypeSuitable(expectedTypeName, receivedTypeName)) {
                        if (expectedType[expectedTypeName].length !== receivedType[receivedTypeName].length) {
                            return false;

                        } else {
                            for (var i = 0; i < expectedType[expectedTypeName].length; i++) {
                                if (!isTypeSuitable(expectedType[expectedTypeName][i], receivedType[receivedTypeName][i])) {
                                    return false;
                                }
                            }
                            return true;
                        }

                    } else {
                        return false;
                    }
                }
            }
        }
    }

    error("Unhandled expected type '"+JSON.stringify(expectedType)+"' or received type '"+JSON.stringify(receivedTypeName)+"'");

}

function replaceType(type, matchReplacementObj) {
    if (typeof matchReplacementObj !== "object") {
        error("Expected type object but got '"+matchReplacementObj+"' of type '"+typeof matchReplacementObj+"'");
    }
    if (typeof type === "string") {
        if (type in matchReplacementObj) {
            return matchReplacementObj[type];
        } else {
            return type;
        }
    } else if (type instanceof Array) {
        return type.map(x => replaceType(x, matchReplacementObj));
    } else {
        for (var key in type) {
            type[key] = replaceType(type[key], matchReplacementObj);
        }
        return type;
    }
    error("This shouldn't happen");
}
