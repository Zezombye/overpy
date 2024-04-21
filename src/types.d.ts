export const enum ow_languages {
  enUS="en-US",
  esMX="es-MX",
  frFR="fr-FR",
  jaJP="ja-JP",
  ptBR="pt-BR",
  trTR="tr-TR",
  zhCN="zh-CN",
  deDE="de-DE",
  esES="es-ES",
  itIT="it-IT",
  koKR="ko-KR",
  plPL="pl-PL",
  ruRU="ru-RU",
  thTH="th-TH",
  zhTW="zh-TW",
}
type OWLanguage = `${ow_languages}`;

export type Variable = {
  "name": string,
  "index": number
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
