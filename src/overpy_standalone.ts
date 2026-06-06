// ! NOTE: Import order matters here! The order of imports will determine
// ! the order in which esbuild includes the files.
// !
// ! Yes, this sucks. Too bad!
import { OverPyCompiler, OverPyDecompiler } from "./godClasses";
import { postInitialLoad, computeCustomGameSettingsSchema, overpyTemplate } from "./globalVars";
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
import { initializeQuickJSRuntime } from "./quickjs";

const readyPromise = new Promise<void>((resolve, reject) => {
    // Give all other files a chance to register their tasks
    setTimeout(async () => {
        postInitialLoad();
        await initializeQuickJSRuntime();
        resolve();
    }, 10);
});

if (typeof module !== "undefined") {
    module.exports = {
        OverPyCompiler,
        OverPyDecompiler,
        decompileAllRules,
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
        preprocessingDirectives,
        opyStringEntities,
        customGameSettingsSchema,
        readyPromise,
        computeCustomGameSettingsSchema,
        overpyTemplate,
    };
}
