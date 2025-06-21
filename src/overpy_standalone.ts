// ! NOTE: Import order matters here! The order of imports will determine
// ! the order in which esbuild includes the files.
// !
// ! Yes, this sucks. Too bad!
import { currentLanguage, macros, resetGlobalVariables, postInitialLoad, computeCustomGameSettingsSchema, overpyTemplate } from "./globalVars";
import { decompileAllRules } from "./decompiler/decompiler";
import { compile } from "./compiler/compiler";
import { actionKw } from "./data/actions";
import { constantValues } from "./data/constants";
import { customGameSettingsSchema } from "./data/customGameSettings";
import { heroKw } from "./data/heroes";
import { stringKw } from "./data/localizedStrings";
import { mapKw } from "./data/maps";
import { opyAnnotations } from "./data/opy/annotations";
import { opyConstants } from "./data/opy/constants";
import { opyFuncs } from "./data/opy/functions";
import { opyMacros } from "./data/opy/macros";
import { opyKeywords } from "./data/opy/keywords";
import { opyMemberFuncs } from "./data/opy/memberFunctions";
import { opyModules } from "./data/opy/modules";
import { preprocessingDirectives } from "./data/opy/preprocessing";
import { opyStringEntities } from "./data/opy/stringEntities";
import { eventKw, eventTeamKw, eventSlotKw, eventPlayerKw, ruleKw } from "./data/other";
import { valueFuncKw } from "./data/values";
import { astToOpy } from "./decompiler/astToOpy";
import { decompileActions, decompileConditions } from "./decompiler/workshopToAst";
import { typeToString } from "./utils/logging";

const readyPromise = new Promise<void>((resolve, reject) => {
    // Give all other files a chance to register their tasks
    setTimeout(() => {
        postInitialLoad();
        resolve();
    }, 10);
});

if (typeof module !== "undefined") {
    module.exports = {
        decompileAllRules,
        decompileActions,
        decompileConditions,
        astToOpy,
        compile,
        actionKw,
        valueFuncKw,
        constantValues,
        annotations: opyAnnotations,
        eventKw,
        eventTeamKw,
        eventSlotKw,
        eventPlayerKw,
        ruleKw,
        stringKw,
        heroKw,
        mapKw,
        opyFuncs,
        opyMemberFuncs,
        opyKeywords,
        opyConstants,
        opyModules,
        opyMacros,
        currentLanguage,
        macros,
        resetGlobalVariables,
        preprocessingDirectives,
        typeToString,
        opyStringEntities,
        customGameSettingsSchema,
        readyPromise,
        computeCustomGameSettingsSchema,
        overpyTemplate,
    };
}
