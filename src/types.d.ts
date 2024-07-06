export enum ow_languages {
  enUS = "en-US",
  esMX = "es-MX",
  frFR = "fr-FR",
  jaJP = "ja-JP",
  ptBR = "pt-BR",
  trTR = "tr-TR",
  zhCN = "zh-CN",
  deDE = "de-DE",
  esES = "es-ES",
  itIT = "it-IT",
  koKR = "ko-KR",
  plPL = "pl-PL",
  ruRU = "ru-RU",
  thTH = "th-TH",
  zhTW = "zh-TW",
}
type OWLanguage = `${ow_languages}`;

export type Variable = {
  "name": string,
  "index": number,
  isChased?: boolean,
  isUsedInForLoop?: boolean,
  isUsedInRuleCondition?: boolean,
}

export type Subroutine = {
  name: string,
  index: number,
  isFromDefStatement: boolean
}

export type LocalizableString = { guid?: string } & {
  [language in OWLanguage]?: string;
}

export type Value = {
  guid: string,
  description?: string,
  descriptionLocalized?: LocalizableString,
  args: Argument[] | null,
  return: ReturnType | ReturnType[],
  isConstant?: boolean,
  canBePutInBoolean?: boolean,
} & {
  [language in OWLanguage]?: string;
}

export type Argument = {
  name: string,
  nameLocalized?: LocalizableString,
  description?: string,
  descriptionLocalized?: LocalizableString,
  type: any,
  default?: any,

  min?: number,
  max?: number,
  literalMax?: number,
} & ReplaceableData

export type Map = {
  guid?: string,
  gamemodes: string[],
  variants?: Record<string, string>,
  isSymmetrical?: boolean,
  /** Symmetry axis is defined as `z = a*x + b`, or as `x = number`. */
  symmetryAxis?: {
    a: number,
    b: number
  } | { x: number },
  onlyInOw1?: boolean,
  isWorkshopMap?: boolean
} & {
    [language in OWLanguage]?: string
  }

export enum Overwatch2Heroes {
  ana = "ana",
  ashe = "ashe",
  baptiste = "baptiste",
  bastion = "bastion",
  brigitte = "brigitte",
  cassidy = "cassidy",
  doomfist = "doomfist",
  dva = "dva",
  echo = "echo",
  genji = "genji",
  hanzo = "hanzo",
  illari = "illari",
  junkerQueen = "junkerQueen",
  junkrat = "junkrat",
  kiriko = "kiriko",
  lifeweaver = "lifeweaver",
  lucio = "lucio",
  mauga = "mauga",
  mei = "mei",
  mercy = "mercy",
  moira = "moira",
  orisa = "orisa",
  pharah = "pharah",
  ramattra = "ramattra",
  reaper = "reaper",
  reinhardt = "reinhardt",
  roadhog = "roadhog",
  sigma = "sigma",
  sojourn = "sojourn",
  soldier76 = "soldier",
  sombra = "sombra",
  symmetra = "symmetra",
  torbjorn = "torbjorn",
  tracer = "tracer",
  venture = "venture",
  widowmaker = "widowmaker",
  winston = "winston",
  // Because Zezombye used this name and now we're stuck with it
  hammond = "hammond",
  zarya = "zarya",
  zenyatta = "zenyatta",
}

export type Hero = Overwatch2Heroes;

export type HeroData = {
  guid?: string,
  passive?: LocalizableString,
  primaryFire?: LocalizableString,
  secondaryFire?: LocalizableString,
  ability1?: LocalizableString,
  ability2?: LocalizableString,
  ability3?: LocalizableString,
  ultimate: LocalizableString
} & {
    [language in OWLanguage]?: string
  }

export type ReplaceableData = {
  canReplace0ByFalse?: boolean,
  canReplace0ByNull?: boolean,
  canReplace1ByTrue?: boolean,
  canReplaceNullVectorByNull?: boolean
}

export type ReturnType = string | { Array: string } | { Direction: [string, string, string] }

export type Type = string[] | string | { [key: string]: string | Type[] };

/**
 * Represents one layer of the file stack.
 * This is used to keep track of the current file and line number when an error occurs.
 *
 * @param name The file name.
 * @param currentLineNb The current line number.
 * @param currentColNb The current column number.
 */
export type BaseNormalFileStackMember = {
  name: string,
  currentLineNb: number,
  currentColNb: number,
  fileStackMemberType: "normal"
};

export type ScriptFileStackMember = BaseNormalFileStackMember & {
  staticMember: true
}

export type MacroFileStackMember = BaseNormalFileStackMember & {
  staticMember: false,
  remainingChars: number,
  callNbChars: number,
  callCols: number,
  callLines: number
}

export type BaseWebUIFileStackMember = {
  rule: string,
  ruleNb: number,
  fileStackMemberType: "webUI"
}

export type RuleWebUIFileStackMember = BaseWebUIFileStackMember & {
  webUIType: "rule"
}
export type ConditionWebUIFileStackMember = BaseWebUIFileStackMember & {
  webUIType: "condition",
  conditionNb: number
}

export type ActionWebUIFileStackMember = BaseWebUIFileStackMember & {
  webUIType: "action",
  actionNb: number
}

export type WebUIFileStackMember = RuleWebUIFileStackMember | ConditionWebUIFileStackMember | ActionWebUIFileStackMember

export type FileStackMember = ScriptFileStackMember | MacroFileStackMember | WebUIFileStackMember;

export type BaseMacroData = {
  isFunction: boolean,
  fileStack: FileStackMember[],
  content: string,
  isMember: boolean,
  startingCol: number,
  text: string,
  name: string,
  replacement: string
};

export interface FunctionMacroData extends BaseMacroData {
  isFunction: true,
  args: string[]
  isScript: boolean,
  scriptPath: string;
};

export interface FunctionMacroData extends BaseMacroData {
  isFunction: false
};

export type MacroData = FunctionMacroData | NonFunctionMacroData;
