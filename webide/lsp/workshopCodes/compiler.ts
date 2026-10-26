/*
 * The workshop.codes editor syntax (comments, mixins, parameter objects, @for, @each, @if), expanded into
 * plain workshop code before decompilation.
 *
 * Ported from workshop.codes (app/javascript/src/utils/compiler/*.ts and app/javascript/src/utils/operators.ts),
 * https://github.com/netux/workshop.codes, MIT License, Copyright (c) 2019 Mitchel Jager.
 * Differences: comments inside strings are kept, and recursive mixins and huge loops raise an error
 * instead of hanging. Translations (@translate) are not supported.
 */
import data from "./data.json";
import {
    findRangesOfStrings,
    getClosingBracket,
    getCommasIndexesOutsideQuotes,
    getPhraseFromIndex,
    removeSurroundingParenthesis,
    replaceBetween,
    splitArgumentsString,
} from "./parse";

export class WorkshopCodesError extends Error {
    /** @param location Matches the source code that causes the error, to find its file. */
    constructor(
        message: string,
        readonly location?: RegExp,
    ) {
        super(message);
    }
}

function escapeRegExp(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

type FunctionData = [label: string, keys: string[], defaults: (string | number)[]];

const functions = data.functions as FunctionData[];
const constants = data.constants as Record<string, string[]>;

const MAX_EXPANSIONS = 10_000;

// --- Comments (comments.ts) ---

/** Removes `//` and `/* *\/` comments, except inside strings (unlike workshop.codes) and `://` (URLs). */
export function removeComments(content: string): string {
    const strings = findRangesOfStrings(content);
    const isInString = (index: number) => strings.some(([start, end]) => index > start && index < end);
    return content.replace(/\/\*[\s\S]*?\*\/|(?<=^|[^:])\/\/.*$/gm, (comment, offset: number) => (isInString(offset) ? comment : ""));
}

// --- Parameter objects (parameterObjects.ts) ---

interface ParameterObject {
    start: number;
    end: number;
    given: Record<string, string>;
    givenKeys: string[];
    phraseParameters: string[];
    phraseDefaults: (string | number)[];
}

function parseParameterObjectContent(innerContent: string): { result: Record<string, string>; keys: string[] } {
    const result: Record<string, string> = {};
    const keys: string[] = [];

    for (const item of splitArgumentsString(innerContent)) {
        const separator = item.indexOf(":");
        const key = (separator < 0 ? item : item.slice(0, separator)).trim();
        const value = (separator < 0 ? "" : item.slice(separator + 1)).trim();
        if (!key) continue;
        keys.push(key);
        result[key] = value;
    }

    return { result, keys };
}

function getFirstParameterObject(fullContent: string, startFromIndex = 0): ParameterObject | null {
    const content = fullContent.slice(startFromIndex);
    const match = content.match(/[a-z]\s*\(\s*{/);

    if (!match?.index) return null;

    let end = getClosingBracket(content, "{", "}", match.index - 1);
    if (end === -1) end = match.index + match.length;

    const start = match.index + match[0].indexOf("{");
    const phrase = getPhraseFromIndex(content, match.index);
    // Like workshop.codes: only the first space of each name is ignored.
    const completion = functions.find(([label]) => label.replace(" ", "") === phrase.replace(" ", ""));
    const innerContent = content.slice(match.index + match[0].length, end).trim();
    const { result: given, keys: givenKeys } = parseParameterObjectContent(innerContent);

    const result = { start: start + startFromIndex, end: end + startFromIndex, given, givenKeys };
    if (!completion) {
        return { ...result, phraseParameters: [], phraseDefaults: [] };
    }
    return { ...result, phraseParameters: completion[1], phraseDefaults: completion[2] };
}

function replaceParameterObject(content: string, parameterObject: ParameterObject): string {
    const { start, end, given, phraseParameters, phraseDefaults } = parameterObject;

    if (end > content.length - 1) return content;

    const parameters = phraseDefaults.map((parameterDefault, i) => given[phraseParameters[i]] || parameterDefault);
    return replaceBetween(content, parameters.join(", "), start, end + 1);
}

/** `Create HUD Text({ Header: "Hello" })` -> `Create HUD Text(All Players(All Teams), "Hello", Null, ...)` */
export function evaluateParameterObjects(content: string): string {
    let startFromIndex = 0;

    for (let safety = 0; safety <= 1000; ) {
        const parameterObject = getFirstParameterObject(content, startFromIndex);
        if (!parameterObject) break;

        if (!parameterObject.phraseParameters.length) {
            startFromIndex = parameterObject.start;
            continue;
        }

        content = replaceParameterObject(content, parameterObject);
        safety++;
    }

    return content;
}

// --- Mixins (mixins.ts) ---

interface Mixin {
    content: string;
    full: string;
    params: { key: string; default: string }[];
    hasContents: boolean;
}

export type Mixins = Record<string, Mixin>;

const mixinDefinitionRegex = (name: string) => new RegExp(`@mixin\\s+${escapeRegExp(name)}\\b`);

function getMixins(content: string): Mixins {
    const mixins: Mixins = {};
    const mixinRegex = /@mixin/g;

    let match;
    while ((match = mixinRegex.exec(content)) != null) {
        let closing = getClosingBracket(content, "{", "}", match.index);
        if (closing < 0) closing = content.length;

        const definition = content.slice(match.index, closing);
        const name = definition.match(/(?<=@mixin\s)(\w+)/)?.[0];

        if (!name) throw new WorkshopCodesError("Mixin is missing a name", /@mixin(?!\s+\w)/);
        if (mixins[name]) throw new WorkshopCodesError(`Mixin "${name}" is already defined`, mixinDefinitionRegex(name));

        const firstOpenBracket = definition.indexOf("{");
        const firstOpenParen = definition.indexOf("(");
        const closingParen = getClosingBracket(definition, "(", ")", firstOpenParen - 1);
        if (closingParen < 0) continue;

        const params = splitArgumentsString(definition.slice(firstOpenParen + 1, closingParen).replace(/\s/, ""))
            .map((param) => {
                const slicedAt = param.indexOf("=");
                return slicedAt != -1 ? [param.slice(0, slicedAt), param.slice(slicedAt + 1)] : [param];
            })
            .map(([key, value]) => ({ key: key.trim(), default: (value || "").trim() }));

        const body = definition.slice(firstOpenBracket + 1, closing).trim();
        if (body.includes(`@include ${name}`)) throw new WorkshopCodesError("Can not include a mixin in itself", mixinDefinitionRegex(name));

        mixins[name] = { content: body, full: content.slice(match.index, closing + 1), params, hasContents: body.includes("@contents") };
    }

    return mixins;
}

function getOpeningBracketAt(content: string): number {
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        if (char === "{") return i;
        if (!char.match(/\s/)) return -1;
    }
    return -1;
}

function getSlotContents(contents: string): Record<string, string> {
    const slotContents: Record<string, string> = {};
    const defaultSlotContent = [];

    const slotsRegex = /@slot\("([^"]+)"\)[\s\n]*{/g;
    let lastIndex = 0;
    let match;

    while ((match = slotsRegex.exec(contents)) !== null) {
        const name = match[1] || "";
        const slotClosing = getClosingBracket(contents, "{", "}", match.index);

        defaultSlotContent.push(contents.slice(lastIndex, match.index).trim());
        slotContents[name] = contents.slice(match.index + match[0].length, slotClosing).trim();
        lastIndex = slotClosing + 1;
    }

    defaultSlotContent.push(contents.slice(lastIndex).trim());

    return { ...slotContents, default: defaultSlotContent.join("").trim() };
}

function replaceContents(content: string, index: number, closing: number, mixinContent: string): { contents: string; fullMixin: string; replaceWith: string } {
    let contents = "";
    let contentsClosing = getClosingBracket(content, "{", "}", index);
    if (contentsClosing == -1) contentsClosing = content.length;

    const openingBracketAt = getOpeningBracketAt(content.slice(closing + 1, content.length));
    const fullMixin = content.slice(index, openingBracketAt != -1 ? contentsClosing + 1 : closing + 1);

    if (openingBracketAt != -1) contents = content.slice(closing + 1 + openingBracketAt + 1, contentsClosing);

    const slotContents = getSlotContents(contents);

    let replaceWith = mixinContent;
    while (replaceWith.indexOf("@contents") != -1) {
        const match = /@contents(?:\("(.+?)"\))?;?/.exec(replaceWith)!;
        const slot = match[1] || "default";
        replaceWith = replaceBetween(replaceWith, slotContents[slot] || "", match.index, match.index + match[0].length);
    }

    return { contents, fullMixin, replaceWith };
}

function replaceIncludes(content: string, mixins: Mixins): string {
    for (let expansions = 0; content.indexOf("@include") != -1; expansions++) {
        if (expansions > MAX_EXPANSIONS) {
            throw new WorkshopCodesError("Too many @include expansions: do mixins include each other?", /@include\b/);
        }
        const index = content.indexOf("@include");
        const closing = getClosingBracket(content, "(", ")", index + 1);

        if (closing < 0) throw new WorkshopCodesError("Mixin @include was not closed properly", /@include\b/);

        const full = content.slice(index, closing + 1);
        const name = full.match(/(?<=@include\s)(\w+)/)?.[0];
        const mixin = name === undefined ? undefined : mixins[name];
        const parameterObjectGiven = getFirstParameterObject(full)?.given;

        if (!mixin) {
            throw new WorkshopCodesError(`Included a mixin that was not specified: "${name}"`, name === undefined ? /@include(?!\s+\w)/ : new RegExp(`@include\\s+${escapeRegExp(name)}\\b`));
        }

        const argumentsOpeningParen = full.indexOf("(");
        const argumentsClosingParen = getClosingBracket(full, "(", ")", argumentsOpeningParen - 1);

        if (argumentsClosingParen < 0) return content;

        let splitArguments = splitArgumentsString(full.slice(argumentsOpeningParen + 1, argumentsClosingParen)) || [];

        // A single parameter object argument gives the parameters by name.
        if (splitArguments.length === 1 && parameterObjectGiven) splitArguments = [];

        const replaced = replaceContents(content, index, closing, mixin.content);
        let replaceWith = replaced.replaceWith;

        mixin.params
            .map((param, paramIndex) => ({ ...param, index: paramIndex }))
            .sort((p1, p2) => p2.key.length - p1.key.length)
            .forEach((param) => {
                replaceWith = replaceWith.replaceAll("Mixin." + param.key, splitArguments[param.index]?.trim() || parameterObjectGiven?.[param.key] || param.default);
            });

        const closingSemicolon = (!mixin.hasContents || !replaced.contents) && content[closing + 1] == ";";

        content = replaceBetween(content, replaceWith, index, index + ((replaced.contents && replaced.fullMixin) || full).length + (closingSemicolon ? 1 : 0));
    }

    return content;
}

// --- @for (for.ts) ---

export function evaluateForLoops(content: string): string {
    // "@for ([var] [from] number through|to number [in steps of number]) {"
    const forRegex = /@for\s+\(\s*((?:(\w+)\s+)?(?:from\s+))?(-?[\d.]+)\s+(?:(through|to)\s+)?(-?[\d.]+)(?:\s*in steps of\s+(-?[\d.]+))?\s*\)\s*\{/g;

    let match;
    while ((match = forRegex.exec(content)) != null) {
        const [full, , variable, startString, clusivityKeyword, endString, stepString = "1"] = match;

        const inclusive = clusivityKeyword === "through";
        const openingBracketIndex = match.index + full.length - 1;
        const closingBracketIndex = getClosingBracket(content, "{", "}", openingBracketIndex - 1);
        const location = new RegExp(escapeRegExp(full).replace(/\s+/g, "\\s+"));
        if (closingBracketIndex < 0) throw new WorkshopCodesError("@for block was not closed properly", location);

        const body = content.substring(openingBracketIndex + 1, closingBracketIndex);

        const [start, end, step] = [parseFloat(startString), parseFloat(endString), parseFloat(stepString)];
        if (step === 0) throw new WorkshopCodesError("For loop would cause an infinite loop", location);

        let repeatedContent = "";
        let iterations = 0;
        for (let i = start; i < end + (inclusive ? step : 0); i += step) {
            if (++iterations > MAX_EXPANSIONS) throw new WorkshopCodesError(`@for loop with more than ${MAX_EXPANSIONS} iterations`, location);
            repeatedContent += body.replaceAll(`For.${variable || "i"}`, i.toString());
        }

        content = replaceBetween(content, repeatedContent, match.index, closingBracketIndex + 1);
        forRegex.lastIndex = 0;
    }

    return content;
}

// --- @each (each.ts) ---

const openToClosingArrayBracketsMap: Record<string, string> = { "(": ")", "[": "]" };
const openArrayBracketRegex = /(?<!\\)(?:\(|\[)/g;

function parseArrayValues(input: string): string[] {
    const commaRegex = /, */g;

    const result = [];
    const validCommaIndexes = getCommasIndexesOutsideQuotes(input);

    let commaMatch;
    let nextStartingIndex = 0;
    let lastValidCommaEndIndex = -1;

    while ((commaMatch = commaRegex.exec(input)) != null) {
        if (!validCommaIndexes.includes(commaMatch.index)) continue;

        // A comma inside brackets belongs to a single value, e.g. "(2, 3)" in "[1, (2, 3), 4]".
        openArrayBracketRegex.lastIndex = nextStartingIndex;
        const openBracketMatch = openArrayBracketRegex.exec(input);

        if (openBracketMatch != null && openBracketMatch.index < commaMatch.index) {
            const openingBracketChar = openBracketMatch[0];
            const closingBracketChar = openToClosingArrayBracketsMap[openingBracketChar];
            const closingBracketIndex = getClosingBracket(input, openingBracketChar, closingBracketChar, openBracketMatch.index - 1);
            nextStartingIndex = closingBracketIndex < 0 ? input.length : closingBracketIndex + 1;
        } else {
            const commaEndIndex = commaMatch.index + commaMatch[0].length - 1;
            result.push(input.substring(lastValidCommaEndIndex + 1, commaMatch.index));

            lastValidCommaEndIndex = commaEndIndex;
            nextStartingIndex = lastValidCommaEndIndex + 1;
        }

        commaRegex.lastIndex = nextStartingIndex;
    }

    const lastValue = input.substring(lastValidCommaEndIndex + 1);
    if (lastValue.length > 0 || lastValidCommaEndIndex === input.length - 1) {
        result.push(lastValue);
    }

    return result;
}

export function evaluateEachLoops(content: string): string {
    // "@each (item[, index] in [a, b, c]) {" or "@each (item[, index] in Constant.Button) {"
    const eachRegex = /@each\s*\((\w+)(?:,\s+(\w+))?\s+in\s+(\[.*?\]|(?:Constant)\.[\w\s]+)\s*\)\s*\{/gs;

    let match;
    while ((match = eachRegex.exec(content)) != null) {
        const [, valueVar, indexVar, iterableStr] = match;

        let iterable: string[] = [];
        if (iterableStr[0] === "[" && iterableStr[iterableStr.length - 1] === "]") {
            iterable = parseArrayValues(iterableStr.substring(1, iterableStr.length - 1));
        } else {
            const constantName = iterableStr.substring("Constant.".length).trim();
            const values = constants[constantName];
            if (values === undefined) {
                throw new WorkshopCodesError(`Unknown constant 'Constant.${constantName}' in @each`, new RegExp(`Constant\\.${escapeRegExp(constantName).replace(/\s+/g, "\\s+")}`));
            }
            iterable = values;
        }

        const openingBracketIndex = match.index + match[0].length - 1;
        const closingBracketIndex = getClosingBracket(content, "{", "}", openingBracketIndex - 1);
        if (closingBracketIndex < 0) continue;

        const contentToRepeat = content.substring(openingBracketIndex + 1, closingBracketIndex);
        const indexVarRegex = new RegExp(`Each\\.${escapeRegExp(indexVar || "i")}(?=\\W|$)`, "g");
        const valueVarRegex = new RegExp(`Each\\.${escapeRegExp(valueVar)}(?=\\W|$)`, "g");

        const finalContent = iterable.reduce((current, value, index) => current + contentToRepeat.replaceAll(indexVarRegex, String(index)).replaceAll(valueVarRegex, () => value), "");

        content = replaceBetween(content, finalContent, match.index, closingBracketIndex + 1);
        // Back to the replaced content, for nested @each.
        eachRegex.lastIndex = match.index;
    }

    return content;
}

// --- @if (conditionals.ts, operators.ts) ---

interface ComparisonOperator {
    type: "binary" | "unary-left" | "unary-right";
    order: number;
    eval: (...args: (string | boolean | null)[]) => string | boolean | null;
}

const comparisonOperators: Record<string, ComparisonOperator> = {
    "!": { type: "unary-left", order: -1, eval: (v) => !v },
    "==": { type: "binary", order: 0, eval: (l, r) => l === r },
    "!=": { type: "binary", order: 0, eval: (l, r) => l !== r },
    "*=": { type: "binary", order: 0, eval: (l, r) => String(l).includes(String(r)) },
    "~=": {
        type: "binary",
        order: 0,
        eval(l, r) {
            const match = String(r).match(/^\/(.+)\/(\w*)$/);
            if (!match) return false;
            let regex;
            try {
                regex = new RegExp(match[1], match[2]);
            } catch {
                return false;
            }
            return regex.test(String(l));
        },
    },
    "&&": { type: "binary", order: 1, eval: (l, r) => l && r },
    "||": { type: "binary", order: 1, eval: (l, r) => l || r },
};

// Higher order operators first, then longer symbols first.
const sortedComparisonOperatorsSymbols = Object.keys(comparisonOperators).sort((a, b) => {
    const orderRank = comparisonOperators[b].order - comparisonOperators[a].order;
    return orderRank === 0 ? b.length - a.length : orderRank;
});

interface ExpressionTree {
    value: string | null;
    invalid: boolean;
    operator: string | null;
    arguments: ExpressionTree[];
}

function getExpressionTree(expression: string): ExpressionTree {
    expression = removeSurroundingParenthesis(expression).trim();

    const result: ExpressionTree = { value: null, invalid: false, operator: null, arguments: [] };

    if (expression.length === 0) return result;

    if (expression.at(0) === "/" && expression.at(-1) === "/") {
        result.value = expression;
        return result;
    }

    for (let currentIndex = 0; currentIndex < expression.length; currentIndex++) {
        const char = expression[currentIndex];
        if (char === "(") {
            const closingIndex = getClosingBracket(expression, "(", ")", currentIndex - 1);
            if (closingIndex < 0) {
                result.invalid = true;
                break;
            }
            currentIndex = closingIndex;
        } else {
            let operatorSymbol = null;
            let operatorIndex = -1;
            for (const symbol of sortedComparisonOperatorsSymbols) {
                const index = expression.indexOf(symbol, currentIndex);
                if (index >= 0) {
                    operatorSymbol = symbol;
                    operatorIndex = index;
                    break;
                }
            }

            if (operatorSymbol == null) {
                result.value = expression;
                break;
            }

            const operator = comparisonOperators[operatorSymbol];
            const lefthand = expression.substring(0, operatorIndex);
            const righthand = expression.substring(operatorIndex + operatorSymbol.length);

            result.operator = operatorSymbol;

            if (operator.type === "binary" || operator.type === "unary-right") {
                if (lefthand.length > 0) {
                    result.arguments.push(getExpressionTree(lefthand));
                } else {
                    result.invalid = true;
                    break;
                }
            }
            if (operator.type === "binary" || operator.type === "unary-left") {
                if (righthand.length > 0) {
                    result.arguments.push(getExpressionTree(righthand));
                } else {
                    result.invalid = true;
                    break;
                }
            }
            break;
        }
    }

    return result;
}

function evaluateExpressionTree(node: ExpressionTree): boolean | string | null {
    if (node.invalid) return null;
    if (node.value != null) return node.value.trim();

    const evaluatedArguments = node.arguments.map((argument) => evaluateExpressionTree(argument));
    return comparisonOperators[node.operator!].eval(...evaluatedArguments);
}

export function evaluateConditionals(content: string): string {
    const ifStartRegex = /@if[\s\n]*\(/g;
    const startBracketRegex = /[\s\n]*\{/g;
    const elseStartRegex = /[\s\n]*@else[\s\n]*\{/g;
    const elseIfStartRegex = /[\s\n]*@else if[\s\n]*\(/g;

    let match;
    while ((match = ifStartRegex.exec(content)) != null) {
        const openingConditionParenIndex = match.index + match[0].length - 1;
        const closingConditionParenIndex = getClosingBracket(content, "(", ")", openingConditionParenIndex - 1);
        if (closingConditionParenIndex < 0) continue;

        const conditionExpressionTree = getExpressionTree(content.substring(openingConditionParenIndex + 1, closingConditionParenIndex));

        startBracketRegex.lastIndex = closingConditionParenIndex + 1;
        const startBracketMatch = startBracketRegex.exec(content);
        if (startBracketMatch == null || startBracketMatch.index !== closingConditionParenIndex + 1) continue;

        const openingBracketIndex = startBracketMatch.index + startBracketMatch[0].length - 1;
        let closingBracketIndex = getClosingBracket(content, "{", "}", openingBracketIndex - 1);
        if (closingBracketIndex < 0) continue;

        let conditionalEndingIndex = closingBracketIndex;

        let trueBlockContent = content.substring(openingBracketIndex + 1, closingBracketIndex);
        let falseBlockContent = "";
        let passed = evaluateExpressionTree(conditionExpressionTree);

        elseIfStartRegex.lastIndex = closingBracketIndex;
        let elseIfMatch = elseIfStartRegex.exec(content);

        while (elseIfMatch != null && elseIfMatch.index === closingBracketIndex + 1) {
            const openingElseifConditionParenIndex = elseIfMatch.index + elseIfMatch[0].length - 1;
            const closingElseifConditionParenIndex = getClosingBracket(content, "(", ")", openingElseifConditionParenIndex - 1);
            if (closingElseifConditionParenIndex < 0) break;

            const conditionElseifExpressionTree = getExpressionTree(content.substring(openingElseifConditionParenIndex + 1, closingElseifConditionParenIndex));

            startBracketRegex.lastIndex = closingElseifConditionParenIndex + 1;
            const startElseifBracketMatch = startBracketRegex.exec(content);
            if (startElseifBracketMatch == null || startElseifBracketMatch.index !== closingElseifConditionParenIndex + 1) break;

            const openingElseifBracketIndex = startElseifBracketMatch.index + startElseifBracketMatch[0].length - 1;
            closingBracketIndex = getClosingBracket(content, "{", "}", openingElseifBracketIndex - 1);
            if (closingBracketIndex < 0) break;

            conditionalEndingIndex = closingBracketIndex;

            if (!passed) {
                passed = evaluateExpressionTree(conditionElseifExpressionTree);
                if (passed) {
                    trueBlockContent = content.substring(openingElseifBracketIndex + 1, closingBracketIndex);
                }
            }

            elseIfStartRegex.lastIndex = closingBracketIndex;
            elseIfMatch = elseIfStartRegex.exec(content);
        }

        elseStartRegex.lastIndex = closingBracketIndex + 1;
        const elseMatch = elseStartRegex.exec(content);
        if (elseMatch != null && elseMatch.index === closingBracketIndex + 1) {
            const afterElseMatchedTextIndex = elseMatch.index + elseMatch[0].length;
            const matchingClosingBracketForElseIndex = getClosingBracket(content, "{", "}", afterElseMatchedTextIndex - 2);
            if (matchingClosingBracketForElseIndex > 0) {
                falseBlockContent = content.substring(afterElseMatchedTextIndex, matchingClosingBracketForElseIndex);
                conditionalEndingIndex = matchingClosingBracketForElseIndex;
            } else {
                continue;
            }
        }

        content = replaceBetween(content, passed ? trueBlockContent : falseBlockContent, match.index, conditionalEndingIndex + 1);
        // Back to the replaced content, for nested @if.
        ifStartRegex.lastIndex = match.index;
    }

    return content;
}

// --- Compilation (compile.ts) ---

/**
 * Takes the mixin definitions out of the content (without comments), and adds them to `mixins`.
 * Like the workshop.codes editor, which compiles all items joined together, mixins defined anywhere can be
 * included anywhere.
 */
export function extractMixins(content: string, mixins: Mixins): string {
    for (const [name, mixin] of Object.entries(getMixins(content))) {
        if (mixins[name]) throw new WorkshopCodesError(`Mixin "${name}" is already defined`, mixinDefinitionRegex(name));
        mixins[name] = mixin;
        content = content.replace(mixin.full, "");
    }
    return content;
}

/**
 * Expands the workshop.codes syntax of content (without comments and mixin definitions) into plain workshop
 * code. Unlike workshop.codes, the variables and subroutines blocks are not generated (the decompiler
 * declares the names it does not know), and the settings block is not moved to the top.
 */
export function expandWorkshopCodesSyntax(content: string, mixins: Mixins): string {
    content = replaceIncludes(content, mixins);
    content = evaluateParameterObjects(content);
    content = evaluateForLoops(content);
    content = evaluateEachLoops(content);
    content = evaluateConditionals(content);
    if (/@translate\b/.test(content)) {
        throw new WorkshopCodesError("workshop.codes translations (@translate) are not supported.", /@translate\b/);
    }
    return content;
}
