import {LogicalLine, Token} from "./compiler/tokenizer.js";
import {TranslationLanguage, TranslatedString} from "./compiler/translations.js";
import {Constant} from "./data/constants.js";
import {Variable, Subroutine, OWLanguage, MacroData, AstConstantData, AstMacroData, CompilationDiagnostic, FileStackMember, Argument, Type, ScriptFileStackMember} from "./types.d.js";
import {Ast} from "./utils/ast.js";

function getInternalFileStack(): FileStackMember[] {
    return [
        {
            name: "<internal>",
            startLine: null,
            startCol: null,
            endCol: null,
            endLine: null,
            remainingChars: 99999999999, //does not matter
            staticMember: true,
            fileStackMemberType: "normal",
        } as ScriptFileStackMember,
    ];
}

//Interface merging must be used, otherwise properties are initialized to undefined and the fallback to the prototype doesn't work.

export interface OverPyCompiler {
    tokenize: (content: string) => LogicalLine[];
    parseMacro: (initialMacroData: {fileStack: FileStackMember[]; content: string;}) => MacroData;
    parseLines: (lines: LogicalLine[]) => Ast[];
    parseString: (content: Token[], kwargs?: Record<string, any>) => Ast;
    parse: (content: Token[], kwargs?: Record<string, any>) => Ast;
    parseArgs: (funcName: string, args: Token[][]) => any[];
    parseMember: (object: Token[], member: Token[]) => any;
    parseLiteralArray: (content: Token[]) => Ast;
    parseDictionary: (content: Token[]) => Ast;
    parseOpyMacro: (macro: string, argNames: string[], args: Ast[]) => Ast;
    parseOpyMacroAst: (content: Ast) => Ast;
    getAstForArgDefault: (arg: Argument) => any;
    parseAst: (content: Ast) => Ast;
    parseAstRules: (rules: Ast[]) => Ast[];
    getRuleFilePath: (fileStackForRule: any[]) => {fileName: string; filePath: string;};
    applyRulePrefixTemplate: (rule: Ast) => string;
    astRulesToWs: (rules: Ast[]) => {compiledRules: string[]; elementCountSummary: string;};
    compileRules: (astRules: Ast[]) => string;
    exportToPoFiles: (translatedStrings: TranslatedString[]) => void;
    importFromPoFiles: () => TranslatedString[];
    parseType: (tokens: Token[]) => Ast;
    addVariable: (content: string, isGlobalVariable: boolean, index: number, fileStack: FileStackMember[], initValue?: Token[] | null) => void;
    translateVarToWs: (content: string, isGlobalVariable: boolean, fileStack: FileStackMember[]) => string;
    addSubroutine: (content: string, index: number | null, fileStack: FileStackMember[], isFromDefStatement?: boolean) => void;
    translateSubroutineToWs: (content: string, fileStack: FileStackMember[]) => string;
    getInitDirectivesRules: () => Ast[];
    compileCustomGameSettings: (customGameSettings: any) => void;
    parseAstMacro: (macro: Ast) => Ast[];
    getDecompressionAst: (compressedString: Ast, compressionInfo: {strValues: string[]; minDecimalPlace: number; maxDecimalPlace: number; offset: number; arrayType: string;}) => Ast;
    getTranslatedString: (str: string, context: string | null, fileStack: import("./types.d.js").BaseNormalFileStackMember[]) => Ast;
    parseStringTokens: (string: string, isFormattedString?: boolean) => import("./types.d.js").StringToken[];
    astRuleConditionToWs: (condition: Ast) => string;
    astActionToWs: (action: Ast, nbTabs: number) => string;
    astToWs: (content: Ast) => string;
    addScriptErrorFileStack: (errorObject: Error, scriptPath: string, lineOffset: number) => void;
    resolveMacro: (macro: MacroData, args: string[] | undefined, indentLevel: number) => string;
    Ast: (name: string, args?: any[], children?: Ast[], type?: any) => Ast;
    getAstFor0: () => Ast;
    getAstFor1: () => Ast;
    getAstForMinus1: () => Ast;
    getAstFor2: () => Ast;
    getAstFor0_016: () => Ast;
    getAstFor0_001: () => Ast;
    getAstFor0_0001: () => Ast;
    getAstFor255: () => Ast;
    getAstFor10000: () => Ast;
    getAstFor10Million: () => Ast;
    getAstForInfinity: () => Ast;
    getAstForMinusInfinity: () => Ast;
    getAstForE: () => Ast;
    getAstForNumber: (nb: number) => Ast;
    getAstForBool: (bool: boolean) => any;
    getAstForNull: () => Ast;
    getAstForColorWhite: () => Ast;
    getAstForTeamAll: () => Ast;
    getAstForUselessInstruction: () => Ast;
    getAstForEnd: () => Ast;
    getAstForEmptyArray: () => Ast;
    getAstForNullVector: () => Ast;
    getAstForVector: (x: number, y: number, z: number) => Ast;
    getAstForCurrentArrayIndex: () => Ast;
    getAstForCustomString: (content: string, formatArgs?: Ast[]) => Ast;
    getAstForFucktonOfSpaces: () => any;
    getAstForFalse: () => Ast;
    getAstForTrue: () => Ast;
    warn: (warnType: string, message: string, fileStackOverride?: FileStackMember[]) => void;
    debug: (data: string) => void;
    getTypeCheckFailedMessage: (content: Ast, argNb: number, expectedType: Type, received: Ast) => string;
    typeToString: (type: Type) => string;
    getFileStackRange: (tokens: Token[]) => FileStackMember[];
    compileCustomGameSettingsDict: (providedSettings: Record<string, any>, refDict: {[key: string]: {values: string | Record<string, any>;};}) => Record<string, any>;
    error: (str: string, fileStackOverride?: FileStackMember[]) => never;
    astContainsFunctions: (ast: Ast, functionNames: string[], errorOnTrue?: boolean) => boolean;
    astContainsRandom: (ast: Ast) => boolean;
    isTypeSuitable: (expectedType: Type | Type[], receivedType: Type | Type[], valueTypeIsSuitable?: boolean) => boolean;
    generateVariablesField: () => string;
    generateSubroutinesField: () => string;
    prepareAstForCompression: (content: Ast, assumeDefaultValues?: boolean) => {strValues: string[]; minDecimalPlace: number; maxDecimalPlace: number; offset: number; arrayType: string | null;};
    compressToString: (compressionInfo: {strValues: string[]; minDecimalPlace: number; maxDecimalPlace: number; offset: number; arrayType: string;}) => string;
    getOperator: (tokens: Token[], operators: string[], rtlPrecedence?: boolean, allowUnaryPlusOrMinus?: boolean) => {operatorFound: string | null; operatorPosition: number;};
    customGameSettingsAstToObject: (customGameSettings: Ast) => Record<string, any> | Array<any> | string | number | boolean;
    splitCustomString: (tokens: import("./types.d.js").StringToken[], args: Ast[]) => Ast;
    tows: (keyword: Token | string, keywordArray: Record<string, any>, options?: Record<string, string>) => string;
    translate: (keyword: string, toWorkshop: boolean, keywordObj: Record<string, any>, options?: Record<string, any>) => string;
    splitTokens: (tokens: Token[], str: string, getAllTokens?: boolean, rtl?: boolean) => Token[][];
    getTokenBracketPos: (tokens: Token[], returnFirstPair?: boolean) => number[];
    checkVarNameForBadWords: (varName: string) => void;
    unescapeString: (content: string, tows: boolean) => string;
    getFileStackCopy: () => any;
    getUniqueNumber: () => number;
    getFilenameFromPath: (filename: string) => any;
    getFilePaths: (pathStr: string, basePath: string) => string[];
    getFileContent: (path: string) => string;
    isVarName: (nameToCheck: string, checkForGlobalVar: boolean) => boolean;
    isSubroutineName: (nameToCheck: string) => boolean;
    getBracketPositions: (content: string, returnFirstPair?: boolean, stringIncludesApos?: boolean) => number[];
    getArgs: (content: string) => string[];
    splitStrOnDelimiter: (content: string, delimiter: string, getAllMembers?: boolean, rtl?: boolean) => string[];
    makeChildrenUseless: (children: Ast[]) => Ast[];
    getAstForTranslatedString: (content: Ast, replacements?: Ast[]) => Ast;
    createSuitableWorkshopSettingString: (str: Ast, isName: boolean) => Ast;
    getStrVisualLength: (text: string) => number;
}

export class OverPyCompiler {

    globalVariables: Variable[] = [];
    playerVariables: Variable[] = [];
    subroutines: Subroutine[] = [];
    currentLanguage: OWLanguage = "en-US";
    
    nbTabs: number = 0;

    mainFileName: string = "";
    // The absolute path of the folder containing the main file. Used for relative paths.
    rootPath: string = "";
    /** Called after compilation to transform the compiled output. Set with #!postCompileHook */
    postCompileHook?: ((content: string) => string);
    //Global variables used to keep track of the name for the current array element/index.
    //Should be null at the beginning and end of each rule; if not, throws an error.
    currentArrayElementName: string = "";
    currentArrayIndexName: string = "";
    /** Set at each rule, to get the rule name for translated strings */
    currentRuleName: string = "";
    /** Set at each rule, to check whether it is legal to use "eventPlayer" and related. */
    currentRuleEvent: string = "";
    /** Set at each rule (but only in astToWorkshop). Used for ruleCondition. */
    currentRuleConditions: Ast[] = [];
    /** The number of times the specified label is referenced. If that number is 0, then the label is considered as not accessed. */
    currentRuleLabelAccess: Record<string, number> = {};
    //Whether the rule has a variable goto (like "goto loc+A"), meaning some optimizations cannot be done safely.
    currentRuleHasVariableGoto: boolean = false;
    //Optimization settings
    enableOptimization: boolean = true;
    optimizeForSize: boolean = false;
    optimizeForSizeAggressive: boolean = false;
    optimizeStrict: boolean = false;

    //Macros
    macros: MacroData[] = [];
    astConstants: Record<string, AstConstantData> = {};
    astMacros: Record<string, AstMacroData> = {};
    astMacroLocalVariables: string[] = [];
    
    /** All warnings encountered during this compilation run. */
    encounteredWarnings: CompilationDiagnostic[] = [];
    /** All warnings encountered during this compilation run that were either suppressed or otherwise ignored. */
    hiddenWarnings: string[] = [];
    /** A set of warning types that will not invoke a visible warning. Specified using the \@SuppressWarnings annotation, and applies to the current rule only. */
    suppressedWarningTypes: string[] = [];
    /** A set of warning types that will not invoke a visible warning */
    globallySuppressedWarningTypes: string[] = [];
    /** A list of imported files, to prevent import loops.*/
    importedFiles: string[] = [];

    disableUnusedVars: boolean = false;

    compiledCustomGameSettings: string = "";

    /** The stack of the files (macros count as "files").*/
    fileStack: FileStackMember[] = getInternalFileStack();
    
    /** An unique number for automatically generated labels. */
    uniqueNumber: number = 1;
    
    //Initialization directives for global and player variables.
    globalInitDirectives: Ast[] = [];
    playerInitDirectives: Ast[] = [];

    /** Workshop setting names, as each name must be unique even if belonging to different categories. */
    workshopSettingNames: string[] = [];

    /** User-declared enums. */
    enumMembers: Record<string, Record<string, Ast>> = {};
    
    //Replacements for 0, 1, and Team.1. Those are functions that give exactly those values, and are able to be applied to all inputs. As such, they are not function dependent.
    replacementFor0: string = "";
    replacementFor1: string = "";
    replacementForTeam1: string = "";
    replacementForEmptyString: string = "";

    /** The number of elements the gamemode takes. */
    nbElements: number = 0;
    /** For the weird behavior where element count goes up by 1 for every 2 hero literals in the parameters of an action argument. */
    nbHeroesInValue: number = 0;
    /** The extensions that are activated in the current gamemode. */
    activatedExtensions: string[] = [];
    /** The amount of available extension points. */
    availableExtensionPoints: number = 0;
    /** List of used maps for the getCurrentMap() fix, in lowercase */
    usedMaps: Set<string> = new Set();
    
    /** Bypass for <tx> and <fg> */
    enableTagsSetup: boolean = false;
    
    //Translation options
    translationLanguages: TranslationLanguage[] = [];
    keepUnusedTranslations: boolean = false;
    disableTranslationSourceLines: boolean = false;
    usePlayerVarForTranslations: boolean = false;
    generateRuleForTranslationsPlayerVar: boolean = true;
    useTlErr: boolean = true;
    /** List of translated strings encountered during compilation */
    translatedStrings: TranslatedString[] = [];
    /** The constant that will be used to determine the player's language */
    translationLanguageConstant: Constant | null = null;
    translationLanguageConstantOpy: string = "";

    //Misc compilation options
    excludeVariablesInCompilation: boolean = false;
    globalvarInitRuleName: string = "Initialize global variables";
    playervarInitRuleName: string = "Initialize player variables";
    disableInspector: boolean = false;
    debugElementCount: boolean = false;
    allowMacroRedeclaration: boolean = false;
    useVariableForCompressionAlphabet: boolean = false;
    writeToOutputFile: boolean = false;


    /** Stack of rule prefixes, managed by __pushRulePrefixStack__ and __popRulePrefixStack__ around #!include directives. */
    rulePrefixStack: string[] = [];
    /** The current rule prefix set by #!rulePrefix. Empty string means no prefix. */
    currentRulePrefix: string = "";
    rulePrefixTemplate: string = '';
    rulePrefixTemplateFilestack: FileStackMember[] = [];

    
}

export interface OverPyDecompiler {
    
    topy: (keyword: string, keywordArray: Record<string, any>, options?: Record<string, any>) => string;
    translate: (keyword: string, toWorkshop: boolean, keywordObj: Record<string, any>, options?: Record<string, any>) => string;
    error: (str: string, fileStackOverride?: FileStackMember[]) => never;
    warn: (warnType: string, message: string, fileStackOverride?: FileStackMember[]) => void;
    getFileStackCopy: () => any;
    getUniqueNumber: () => number;
    decompileCustomGameSettingsDict: (dict: string[], kwObj: Record<string, any>, options?: Record<string, any>) => Record<string, string | number | boolean>;
    unescapeString: (content: string, tows: boolean) => string;
    getPrefixString: (content: string) => string;
    getOperatorInStr: (content: string, operators: string[], rtlPrecedence?: boolean) => {operatorFound: string | null; operatorPosition: number;};
    getBracketPositions: (content: string, returnFirstPair?: boolean, stringIncludesApos?: boolean) => number[];
    getName: (content: string) => string;
    splitStrOnDelimiter: (content: string, delimiter: string, getAllMembers?: boolean, rtl?: boolean) => string[];
    splitInstructions: (content: string) => string[];
    getArgs: (content: string) => string[];
    addSubroutine: (content: string, index: number | null, fileStack: FileStackMember[], isFromDefStatement?: boolean) => void;
    translateSubroutineToPy: (content: string, fileStack: FileStackMember[]) => string;
    isVarName: (nameToCheck: string, checkForGlobalVar: boolean) => boolean;
    isSubroutineName: (nameToCheck: string) => boolean;
    translateVarToPy: (content: string, isGlobalVariable: boolean, fileStack: FileStackMember[]) => string;
    translateNameToAvoidKeywords: (initialName: string, nameType: string) => string;
    addVariable: (content: string, isGlobalVariable: boolean, index: number, fileStack: FileStackMember[], initValue?: Token[] | null) => void;
    tows: (keyword: Token | string, keywordArray: Record<string, any>, options?: Record<string, string>) => string;
    decompileAllRulesToAst: (content: string) => string | [string, Ast[]];
    decompileVarNames: (content: string) => void;
    decompileSubroutines: (content: string) => void;
    decompileCustomGameSettings: (content: string) => string;
    Ast: (name: string, args?: any[], children?: Ast[], type?: any) => Ast;
    isTypeSuitable: (expectedType: Type | Type[], receivedType: Type | Type[], valueTypeIsSuitable?: boolean) => boolean;
    decompileConditions: (content: string) => Ast[];
    decompileRuleToAst: (content: string) => Ast;
    decompileActions: (content: string) => Ast[];
    decompileAction: (content: string) => Ast;
    decompile: (content: string) => Ast;
    getAstForNumber: (nb: number) => Ast;
    getAstForNull: () => Ast;
    astRulesToOpy: (rules: Ast[]) => string;
    astArgsToOpy: (funcName: string, args: Ast[]) => string;
    getAstForArgDefault: (arg: Argument) => any;
    getAstForFalse: () => Ast;
    getAstForTrue: () => Ast;
    getAstForTeamAll: () => Ast;
    getAstForE: () => Ast;
    getAstForInfinity: () => Ast;
    getAstForNullVector: () => Ast;
    getAstFor0: () => Ast;
    astActionsToOpy: (actions: Ast[]) => string;
    astToOpy: (content: Ast) => string;
    astContainsFunctions: (ast: Ast, functionNames: string[], errorOnTrue?: boolean) => boolean;
}

export class OverPyDecompiler {

    globalVariables: Variable[] = [];
    playerVariables: Variable[] = [];
    subroutines: Subroutine[] = [];
    currentLanguage: OWLanguage = "en-US";

    currentArrayElementName: string = "";
    currentArrayIndexName: string = "";

    fileStack: FileStackMember[] = getInternalFileStack();
    encounteredWarnings: CompilationDiagnostic[] = [];
    /** Global variable used to mark the action number of the last loop in the rule.
     *
     * Is reset at each rule.
     */
    decompilationLabelNumber: number = 0;
    /** Global variable used for "skip", to keep track of where the skip ends.
     *
     * Is reset at each rule.
     */
    decompilerGotos: { remainingActions: number; label: string }[] = [];
    currentRuleHasVariableGoto: boolean = false;
    /** Global variable used for the number of tabs.
     *
     * Is reset at each rule.
     */
    nbTabs: number = 0;
    /** Global variable used to keep track of operator precedence.
     *
     * Is reset at each action and rule condition.
     */
    operatorPrecedenceStack: Record<string, number>[] = [];
    
    activatedExtensions: string[] = [];
}
