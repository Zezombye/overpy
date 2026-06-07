import { Color, ColorInformation, ColorPresentation, Range, TextEdit } from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";

import { constantValues } from "../data/constants";

const namedColorPattern = /\bColor\.([A-Za-z0-9_]+)\b/g;
const colorCallPattern = /\b(rgb|hsl)\s*\(/g;
const integerArgumentPattern = /^\d+$/;
const floatArgumentPattern = /^\d*\.?\d+$/;

type Rgba = { red: number; green: number; blue: number; alpha: number };

/** Maps a `red,green,blue` key (0-255 ints, fully opaque) to a `Color.NAME` constant. */
const namedColorByRgb = buildNamedColorIndex();

/**
 * Surfaces a colour swatch (and a native colour picker) for every literal colour in the
 * document: `Color.NAME` constants, `rgb(r, g, b[, a])`, and `hsl(h, s, l[, a])`. Calls whose
 * arguments are expressions rather than plain numbers are skipped, since they have no single
 * value to preview.
 */
export function getDocumentColors(document: TextDocument): ColorInformation[] {
    const masked = maskStringsAndComments(document.getText());
    const colors: ColorInformation[] = [];

    for (const match of masked.matchAll(namedColorPattern)) {
        const rgba = getNamedColor(match[1] ?? "");
        if (!rgba) {
            continue;
        }

        const start = match.index ?? 0;
        colors.push(toColorInformation(document, start, start + match[0].length, rgba));
    }

    for (const match of masked.matchAll(colorCallPattern)) {
        const start = match.index ?? 0;
        const openParenIndex = start + match[0].length - 1;
        const call = readCall(masked, openParenIndex);
        if (!call) {
            continue;
        }

        const rgba = (match[1] === "rgb" ? parseRgbCall : parseHslCall)(call.args);
        if (!rgba) {
            continue;
        }

        colors.push(toColorInformation(document, start, call.end, rgba));
    }

    return colors;
}

/**
 * Provides the text the picker writes back when a colour is chosen. Always offers an
 * `rgb(...)` form (with alpha only when not fully opaque); when the colour exactly matches a
 * built-in constant, that `Color.NAME` is offered as a second option.
 */
export function getColorPresentations(color: Color, range: Range): ColorPresentation[] {
    const red = toByte(color.red);
    const green = toByte(color.green);
    const blue = toByte(color.blue);
    const alpha = toByte(color.alpha);

    const rgbLabel = alpha === 255 ? `rgb(${red}, ${green}, ${blue})` : `rgb(${red}, ${green}, ${blue}, ${alpha})`;
    const presentations: ColorPresentation[] = [
        { label: rgbLabel, textEdit: TextEdit.replace(range, rgbLabel) },
    ];

    if (alpha === 255) {
        const namedColor = namedColorByRgb.get(`${red},${green},${blue}`);
        if (namedColor) {
            const namedLabel = `Color.${namedColor}`;
            presentations.push({ label: namedLabel, textEdit: TextEdit.replace(range, namedLabel) });
        }
    }

    return presentations;
}

function toColorInformation(document: TextDocument, startOffset: number, endOffset: number, rgba: Rgba): ColorInformation {
    return {
        range: Range.create(document.positionAt(startOffset), document.positionAt(endOffset)),
        color: Color.create(rgba.red / 255, rgba.green / 255, rgba.blue / 255, rgba.alpha / 255),
    };
}

function getNamedColor(name: string): Rgba | undefined {
    const colorLiteral = constantValues.ColorLiteral?.[name];
    if (!colorLiteral || typeof colorLiteral.red !== "number" || typeof colorLiteral.green !== "number" || typeof colorLiteral.blue !== "number") {
        // TEAM_1/TEAM_2 and any unknown name resolve at runtime — there is nothing to preview.
        return undefined;
    }

    return {
        red: colorLiteral.red,
        green: colorLiteral.green,
        blue: colorLiteral.blue,
        alpha: typeof colorLiteral.alpha === "number" ? colorLiteral.alpha : 255,
    };
}

function parseRgbCall(args: string[]): Rgba | undefined {
    if (args.length < 3 || args.length > 4 || !args.every((argument) => integerArgumentPattern.test(argument))) {
        return undefined;
    }

    return {
        red: clampByte(Number(args[0])),
        green: clampByte(Number(args[1])),
        blue: clampByte(Number(args[2])),
        alpha: args.length === 4 ? clampByte(Number(args[3])) : 255,
    };
}

function parseHslCall(args: string[]): Rgba | undefined {
    if (args.length < 3 || args.length > 4 || !args.every((argument) => floatArgumentPattern.test(argument))) {
        return undefined;
    }

    const hue = ((Number(args[0]) % 360) + 360) % 360;
    const saturation = clampUnit(Number(args[1]));
    const lightness = clampUnit(Number(args[2]));
    const alpha = args.length === 4 ? clampByte(Number(args[3])) : 255;

    // Mirrors the conversion in src/compiler/functions/hsl.ts.
    const channel = (n: number): number => {
        const k = (n + hue / 30) % 12;
        const value = lightness - saturation * Math.min(lightness, 1 - lightness) * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return clampByte(Math.round(value * 255));
    };

    return { red: channel(0), green: channel(8), blue: channel(4), alpha };
}

/** Reads a parenthesised argument list, returning the top-level argument texts and the offset past the closing `)`. */
function readCall(masked: string, openParenIndex: number): { args: string[]; end: number } | undefined {
    const args: string[] = [];
    let depth = 1;
    let segmentStart = openParenIndex + 1;

    for (let index = openParenIndex + 1; index < masked.length; index++) {
        const character = masked[index];
        if (character === "(" || character === "[" || character === "{") {
            depth++;
        } else if (character === ")" || character === "]" || character === "}") {
            depth--;
            if (depth === 0) {
                args.push(masked.slice(segmentStart, index).trim());
                return { args, end: index + 1 };
            }
        } else if (character === "," && depth === 1) {
            args.push(masked.slice(segmentStart, index).trim());
            segmentStart = index + 1;
        }
    }

    return undefined;
}

function buildNamedColorIndex(): Map<string, string> {
    const index = new Map<string, string>();
    const colorLiterals = constantValues.ColorLiteral ?? {};

    for (const name of Object.keys(colorLiterals)) {
        const rgba = getNamedColor(name);
        if (!rgba || rgba.alpha !== 255) {
            continue;
        }

        const key = `${rgba.red},${rgba.green},${rgba.blue}`;
        if (!index.has(key)) {
            index.set(key, name);
        }
    }

    return index;
}

function toByte(unitValue: number): number {
    return clampByte(Math.round(unitValue * 255));
}

function clampByte(value: number): number {
    return Math.max(0, Math.min(255, value));
}

function clampUnit(value: number): number {
    return Math.max(0, Math.min(1, value));
}

/** Replaces string-literal and comment regions with spaces, preserving every offset. */
function maskStringsAndComments(text: string): string {
    let result = "";
    let inString = false;
    let inComment = false;
    let quote = "";

    for (let index = 0; index < text.length; index++) {
        const character = text[index];

        if (character === "\n" || character === "\r") {
            inString = false;
            inComment = false;
            result += character;
            continue;
        }

        if (inComment) {
            result += " ";
            continue;
        }

        if (inString) {
            if (character === quote && text[index - 1] !== "\\") {
                inString = false;
            }
            result += " ";
            continue;
        }

        if (character === "\"" || character === "'") {
            inString = true;
            quote = character;
            result += " ";
            continue;
        }

        if (character === "#") {
            inComment = true;
            result += " ";
            continue;
        }

        result += character;
    }

    return result;
}
