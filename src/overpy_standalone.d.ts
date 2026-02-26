declare namespace overpy {
    type UnknownRecord = Record<string, unknown>;

    interface CompileResult {
        result: string;
        macros: unknown[];
        astMacros: UnknownRecord;
        astConstants: UnknownRecord;
        globalVariables: unknown[];
        playerVariables: unknown[];
        subroutines: unknown[];
        encounteredWarnings: unknown[];
        hiddenWarnings: string[];
        enumMembers: UnknownRecord;
        nbElements: number;
        activatedExtensions: string[];
        spentExtensionPoints: number;
        availableExtensionPoints: number;
        translationLanguages: string[];
        translatedStrings: unknown[];
    }

    function compile(
        content: string,
        language?: string,
        rootPath?: string,
        mainFileName?: string
    ): Promise<CompileResult>;

    function decompileAllRules(
        content: string,
        language?: string,
        options?: {
            ignoreVariableIndex?: boolean;
            ignoreSubroutineIndex?: boolean;
        }
    ): string;

    function decompileActions(content: string): unknown[];
    function decompileConditions(content: string): unknown[];
    function astToOpy(content: unknown): string;
    function resetGlobalVariables(language?: string): void;
    function typeToString(type: unknown): string;
    function computeCustomGameSettingsSchema(): unknown;

    const readyPromise: Promise<void>;
    const actionKw: UnknownRecord;
    const valueFuncKw: UnknownRecord;
    const constantValues: UnknownRecord;
    const annotations: UnknownRecord;
    const eventKw: UnknownRecord;
    const eventTeamKw: UnknownRecord;
    const eventSlotKw: UnknownRecord;
    const eventPlayerKw: UnknownRecord;
    const ruleKw: UnknownRecord;
    const stringKw: UnknownRecord;
    const heroKw: UnknownRecord;
    const mapKw: UnknownRecord;
    const opyFuncs: UnknownRecord;
    const opyMemberFuncs: UnknownRecord;
    const opyKeywords: UnknownRecord;
    const opyConstants: UnknownRecord;
    const opyModules: UnknownRecord;
    const opyMacros: UnknownRecord;
    const currentLanguage: string;
    const macros: unknown[];
    const preprocessingDirectives: UnknownRecord;
    const opyStringEntities: UnknownRecord;
    const customGameSettingsSchema: UnknownRecord;
    const overpyTemplate: string;
}

export = overpy;
