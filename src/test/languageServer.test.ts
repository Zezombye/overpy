import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import * as path from "node:path";

import {
    CodeActionKind,
    Color,
    CompletionItem,
    CompletionItemKind,
    DiagnosticSeverity,
    FoldingRangeKind,
    Hover,
    Range,
    SymbolKind,
    TextEdit,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";

import { getCodeActions } from "../languageServer/codeActions";
import { getCompletionList } from "../languageServer/completions";
import { extractDeclarationDocs } from "../languageServer/declarationDocs";
import { getColorPresentations, getDocumentColors } from "../languageServer/colors";
import { getDefinition, getWorkspaceDefinition, getWorkspaceDocuments, invalidateOpyFileCache } from "../languageServer/definition";
import { toLspDiagnostic } from "../languageServer/diagnostics";
import { getDiagnosticUrisToClear } from "../languageServer/documentLifecycle";
import { getDocumentLinks } from "../languageServer/documentLinks";
import { getIdentifierAtPosition, getPrecedingQualifiedName, rangesEqual } from "../languageServer/documentUtils";
import { getFoldingRanges } from "../languageServer/foldingRanges";
import { getHover } from "../languageServer/hover";
import { getInlayHints } from "../languageServer/inlayHints";
import { getWorkspaceReferences } from "../languageServer/references";
import { getSemanticTokens, semanticTokenTypes } from "../languageServer/semanticTokens";
import { getPrepareRename, getWorkspaceRename } from "../languageServer/rename";
import { initializeLanguageServerData, initializeLanguageServerRuntime } from "../languageServer/runtime";
import { getSignatureHelp } from "../languageServer/signatureHelp";
import { getDocumentSymbols } from "../languageServer/symbols";
import { validateTextDocument } from "../languageServer/validation";
import type { CompilationDiagnostic } from "../types";

void main();

async function main(): Promise<void> {
    await initializeLanguageServerData();

    const sourceFileStack = {
        name: "test.opy",
        path: "/tmp/test.opy",
        startLine: 2,
        startCol: 5,
        endLine: 2,
        endCol: 9,
        remainingChars: 0,
        staticMember: true as const,
        fileStackMemberType: "normal" as const,
    };

    const diagnostic = toLspDiagnostic({
        message: "Expected expression",
        severity: "error",
        fileStack: [sourceFileStack],
    } satisfies CompilationDiagnostic);

    assert.deepEqual(diagnostic, {
        message: "Expected expression",
        severity: DiagnosticSeverity.Error,
        range: {
            start: { line: 1, character: 4 },
            end: { line: 1, character: 8 },
        },
        source: "overpy",
    });

    const warning = toLspDiagnostic({
        message: "Check this (w_wait_9999)",
        severity: "warning",
        fileStack: [sourceFileStack],
    } satisfies CompilationDiagnostic);

    assert.equal(warning?.severity, DiagnosticSeverity.Warning);
    assert.equal(warning?.code, "w_wait_9999");

    const declarationDocs = extractDeclarationDocs(
        [
            "globalvar score # The team's score",
            "# Charge toward the ultimate",
            "playervar ultCharge",
            "def resetScore(): # Reset the score to zero",
            "# Tracks the match lifecycle",
            "enum GameStatus: # high level summary",
            "    # Waiting for players to join",
            "    SETUP = 0",
            "    PLAYING = 1 # Match is live",
            "#!define NOT_A_DOC 5",
        ].join("\n"),
    );
    assert.equal(declarationDocs.variables.get("score"), "The team's score");
    assert.equal(declarationDocs.variables.get("ultCharge"), "Charge toward the ultimate");
    assert.equal(declarationDocs.subroutines.get("resetScore"), "Reset the score to zero");
    // The enum itself merges its above-block comment with the inline comment on the declaration.
    assert.equal(declarationDocs.enums.get("GameStatus"), "Tracks the match lifecycle  \nhigh level summary");
    assert.equal(declarationDocs.enumMembers.get("GameStatus")?.get("SETUP"), "Waiting for players to join");
    assert.equal(declarationDocs.enumMembers.get("GameStatus")?.get("PLAYING"), "Match is live");

    const macroDocs = extractDeclarationDocs(
        [
            "# Max team size",
            "macro MAX_PLAYERS = 5",
            "",
            "# unrelated section header",
            "",
            "macro SCORE_STEP = 1",
            "# above note",
            "macro BOTH = 3 # inline note",
            "# doc for helper",
            "macro helper():",
            "    pass",
            "macro AFTER = 9",
            "# member macro doc",
            "macro Foo.bar = 7",
        ].join("\n"),
    );
    // Contiguous comment directly above attaches.
    assert.equal(macroDocs.macros.get("MAX_PLAYERS"), "Max team size");
    // A blank line between the comment and the macro breaks the block (the bug).
    assert.equal(macroDocs.macros.get("SCORE_STEP"), undefined);
    // Above block and inline comment are merged, block first, with a Markdown hard break.
    assert.equal(macroDocs.macros.get("BOTH"), "above note  \ninline note");
    // Function macro picks up its contiguous comment...
    assert.equal(macroDocs.macros.get("helper"), "doc for helper");
    // ...and does not leak onto the following declaration.
    assert.equal(macroDocs.macros.get("AFTER"), undefined);
    // Member macros are keyed by their full name.
    assert.equal(macroDocs.macros.get("Foo.bar"), "member macro doc");

    const annotationDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "rule \"hello\":\n    @");
    const annotationCompletions = getCompletionList(annotationDocument, { line: 1, character: 5 }, "@");
    assert.ok(annotationCompletions.items.some((item) => item.label === "@Event"));

    const memberDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "eventPlayer.");
    const memberCompletions = getCompletionList(memberDocument, { line: 0, character: "eventPlayer.".length }, ".");
    assert.ok(memberCompletions.items.some((item) => item.label === "teleport"));

    const enumDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "Hero.");
    const enumCompletions = getCompletionList(enumDocument, { line: 0, character: "Hero.".length }, ".");
    assert.ok(enumCompletions.items.some((item) => item.label === "ANA"));

    const directiveDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "#!");
    const directiveCompletions = getCompletionList(directiveDocument, { line: 0, character: 2 }, "!");
    assert.ok(directiveCompletions.items.some((item) => item.label === "define"));

    const defaultDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wa");
    const defaultCompletions = getCompletionList(defaultDocument, { line: 0, character: 2 });
    assert.ok(defaultCompletions.items.some((item) => item.label === "wait" && item.kind === CompletionItemKind.Function));

    const argEnumDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(1, ");
    const argEnumCompletions = getCompletionList(argEnumDocument, { line: 0, character: "wait(1, ".length });
    assert.ok(argEnumCompletions.items[0].label.startsWith("Wait."), "enum members should be hoisted to the top");
    const waitValue = argEnumCompletions.items.find((item) => item.label === "Wait.IGNORE_CONDITION");
    assert.ok(waitValue);
    assert.equal(waitValue.insertText, "Wait.IGNORE_CONDITION");
    assert.equal(waitValue.filterText, "IGNORE_CONDITION");
    assert.ok(waitValue.sortText?.startsWith("0"));
    assert.ok(argEnumCompletions.items.some((item) => item.label === "wait"), "default completions should still be present");

    const memberArgDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "eventPlayer.isHoldingButton(");
    const memberArgCompletions = getCompletionList(memberArgDocument, { line: 0, character: "eventPlayer.isHoldingButton(".length });
    assert.ok(memberArgCompletions.items.some((item) => item.label === "Button.INTERACT" && item.insertText === "Button.INTERACT"));

    const nonEnumArgDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(");
    const nonEnumArgCompletions = getCompletionList(nonEnumArgDocument, { line: 0, character: "wait(".length });
    assert.ok(!nonEnumArgCompletions.items.some((item) => item.label.startsWith("Wait.")), "non-enum argument should not surface enum members");

    const firstParameterDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(");
    const firstParameterHelp = getSignatureHelp(firstParameterDocument, { line: 0, character: "wait(".length }, "(");
    assert.ok(firstParameterHelp);
    assert.match(firstParameterHelp.signatures[0].label, /^wait\(/);
    assert.equal(firstParameterHelp.activeParameter, 0);

    const secondParameterDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(1,");
    const secondParameterHelp = getSignatureHelp(secondParameterDocument, { line: 0, character: "wait(1,".length }, ",");
    assert.ok(secondParameterHelp);
    assert.equal(secondParameterHelp.activeParameter, 1);

    const keywordParameterDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(waitBehavior=");
    const keywordParameterHelp = getSignatureHelp(keywordParameterDocument, { line: 0, character: "wait(waitBehavior=".length });
    assert.ok(keywordParameterHelp);
    assert.equal(keywordParameterHelp.activeParameter, 1);

    const hoverFunctionDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(1)");
    const functionHover = getHover(hoverFunctionDocument, { line: 0, character: 1 });
    assert.ok(functionHover);
    assert.match(getHoverText(functionHover), /^```opy\nwait\(/);
    assert.match(getHoverText(functionHover), /time/);

    const hoverNoArgMemberDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "eventPlayer.getFacingDirection()");
    const noArgMemberHover = getHover(hoverNoArgMemberDocument, { line: 0, character: "eventPlayer.getF".length });
    assert.ok(noArgMemberHover);
    assert.match(getHoverText(noArgMemberHover), /^```opy\nPlayer\.getFacingDirection\(\) -> Direction\n```/);
    assert.match(getHoverText(noArgMemberHover), /directional vector/);

    const hoverEnumDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "Hero.ANA");
    const enumHover = getHover(hoverEnumDocument, { line: 0, character: "Hero.A".length });
    assert.ok(enumHover);
    assert.match(getHoverText(enumHover), /\*\*Hero\.ANA\*\*/);

    const hoverAnnotationDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "@Event global");
    const annotationHover = getHover(hoverAnnotationDocument, { line: 0, character: 2 });
    assert.ok(annotationHover);
    assert.match(getHoverText(annotationHover), /\*\*@Event\*\*/);

    const semanticDocument = TextDocument.create(
        "file:///tmp/test.opy",
        "overpy",
        1,
        ["wait(1) # Hero.ANA in a comment", "Hero.ANA", "eventPlayer.getFacingDirection()"].join("\n"),
    );
    const semanticTokens = decodeSemanticTokens(getSemanticTokens(semanticDocument).data);
    assert.ok(semanticTokens.some((token) => token.line === 0 && token.character === 0 && token.length === 4 && token.type === "function"));
    assert.ok(semanticTokens.some((token) => token.line === 1 && token.character === 0 && token.length === 4 && token.type === "constant.character.escape"));
    assert.ok(semanticTokens.some((token) => token.line === 1 && token.character === 5 && token.length === 3 && token.type === "enumMember"));
    assert.ok(semanticTokens.some((token) => token.line === 2 && token.character === 12 && token.type === "method"));
    assert.ok(!semanticTokens.some((token) => token.line === 0 && token.character > 7), "tokens inside comments should be ignored");

    const blockCommentDocument = TextDocument.create(
        "file:///tmp/block.opy",
        "overpy",
        1,
        ["/* wait Hero.ANA", "eventPlayer.getFacingDirection() still a comment */", "wait(1)"].join("\n"),
    );
    const blockCommentTokens = decodeSemanticTokens(getSemanticTokens(blockCommentDocument).data);
    assert.ok(!blockCommentTokens.some((token) => token.line === 0), "no tokens on the opening line of a block comment");
    assert.ok(!blockCommentTokens.some((token) => token.line === 1), "no tokens on a continued block comment line");
    assert.ok(
        blockCommentTokens.some((token) => token.line === 2 && token.character === 0 && token.type === "function"),
        "code after a block comment is still highlighted",
    );

    const inlayBlockCommentDocument = TextDocument.create(
        "file:///tmp/test.opy",
        "overpy",
        1,
        "/* wait(1, IGNORE_CONDITION) */",
    );
    assert.equal(getInlayHints(inlayBlockCommentDocument).length, 0, "calls inside block comments should be ignored");

    const hoverInLineCommentDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "# wait here");
    assert.equal(getHover(hoverInLineCommentDocument, { line: 0, character: 2 }), null, "no hover inside a line comment");
    const hoverInBlockCommentDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "/* wait */");
    assert.equal(getHover(hoverInBlockCommentDocument, { line: 0, character: 3 }), null, "no hover inside a block comment");

    const inlayDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(1, IGNORE_CONDITION)");
    const inlayHints = getInlayHints(inlayDocument);
    const timeHint = inlayHints.find((hint) => hint.label === "time:");
    assert.ok(timeHint);
    assert.deepEqual(timeHint.position, { line: 0, character: 5 });
    const waitBehaviorHint = inlayHints.find((hint) => hint.label === "waitBehavior:");
    assert.ok(waitBehaviorHint);
    assert.deepEqual(waitBehaviorHint.position, { line: 0, character: 8 });

    const inlayMemberDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "eventPlayer.isHoldingButton(Button.JUMP)");
    const inlayMemberHints = getInlayHints(inlayMemberDocument);
    assert.ok(inlayMemberHints.some((hint) => hint.label === "button:"));
    assert.ok(!inlayMemberHints.some((hint) => hint.label === "player:"), "the implicit self parameter should not be hinted");

    const inlayKeywordDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "wait(waitBehavior=IGNORE_CONDITION)");
    assert.equal(getInlayHints(inlayKeywordDocument).length, 0, "keyword arguments are already named");

    const inlayCommentDocument = TextDocument.create("file:///tmp/test.opy", "overpy", 1, "# wait(1, IGNORE_CONDITION)");
    assert.equal(getInlayHints(inlayCommentDocument).length, 0, "calls inside comments should be ignored");

    const structureDocument = TextDocument.create(
        "file:///tmp/structure.opy",
        "overpy",
        1,
        [
            "globalvar score",
            "playervar ultCharge",
            "",
            "enum GameStatus:",
            "    SETUP = 0",
            "    PLAYING = 1",
            "",
            "def resetScore():",
            "    score = 0",
            "",
            "rule \"setup\":",
            "    @Event global",
            "    wait(1)",
        ].join("\n"),
    );
    const symbols = getDocumentSymbols(structureDocument);
    assert.deepEqual(
        symbols.map((symbol) => [symbol.name, symbol.detail, symbol.kind]),
        [
            ["score", "globalvar", SymbolKind.Variable],
            ["ultCharge", "playervar", SymbolKind.Variable],
            ["GameStatus", "enum", SymbolKind.Enum],
            ["resetScore", "def", SymbolKind.Function],
            ["setup", "rule", SymbolKind.Event],
        ],
    );
    assert.deepEqual(symbols.find((symbol) => symbol.name === "setup")?.range, {
        start: { line: 10, character: 0 },
        end: { line: 12, character: 11 },
    });

    const foldingRanges = getFoldingRanges(structureDocument);
    assert.ok(
        foldingRanges.some(
            (range) =>
                range.startLine === 3 &&
                range.endLine === 5 &&
                range.kind === FoldingRangeKind.Region,
        ),
    );
    assert.ok(
        foldingRanges.some(
            (range) =>
                range.startLine === 10 &&
                range.endLine === 12 &&
                range.kind === FoldingRangeKind.Region,
        ),
    );

    assert.ok(warning);
    const codeActions = getCodeActions(structureDocument, [warning]);
    assert.equal(codeActions.length, 1);
    assert.equal(codeActions[0].kind, CodeActionKind.QuickFix);
    assert.equal(codeActions[0].title, "Suppress w_wait_9999 for this file");
    assert.deepEqual(codeActions[0].edit?.changes?.[structureDocument.uri], [
        {
            range: {
                start: { line: 0, character: 0 },
                end: { line: 0, character: 0 },
            },
            newText: "#!suppressWarnings w_wait_9999\n",
        },
    ]);

    const definitionDocument = TextDocument.create(
        "file:///tmp/definition.opy",
        "overpy",
        1,
        [
            "globalvar score",
            "playervar charge",
            "#!define MAX_SCORE 20",
            "macro SCORE_STEP = 1",
            "enum GameStatus:",
            "    SETUP = 0",
            "    PLAYING = 1",
            "def resetScore():",
            "    score = 0",
            "rule \"use symbols\":",
            "    @Event global",
            "    score = MAX_SCORE + SCORE_STEP",
            "    resetScore()",
            "    status = GameStatus.PLAYING",
            "    eventPlayer.charge = 100",
            "    wait(1)",
        ].join("\n"),
    );

    assert.deepEqual(getDefinition(definitionDocument, { line: 11, character: 6 })?.range, {
        start: { line: 0, character: 10 },
        end: { line: 0, character: 15 },
    });
    assert.deepEqual(getDefinition(definitionDocument, { line: 11, character: 13 })?.range, {
        start: { line: 2, character: 9 },
        end: { line: 2, character: 18 },
    });
    assert.deepEqual(getDefinition(definitionDocument, { line: 11, character: 25 })?.range, {
        start: { line: 3, character: 6 },
        end: { line: 3, character: 16 },
    });
    assert.deepEqual(getDefinition(definitionDocument, { line: 12, character: 5 })?.range, {
        start: { line: 7, character: 4 },
        end: { line: 7, character: 14 },
    });
    assert.deepEqual(getDefinition(definitionDocument, { line: 13, character: 16 })?.range, {
        start: { line: 4, character: 5 },
        end: { line: 4, character: 15 },
    });
    assert.deepEqual(getDefinition(definitionDocument, { line: 13, character: 27 })?.range, {
        start: { line: 6, character: 4 },
        end: { line: 6, character: 11 },
    });
    assert.deepEqual(getDefinition(definitionDocument, { line: 14, character: 17 })?.range, {
        start: { line: 1, character: 10 },
        end: { line: 1, character: 16 },
    });
    assert.equal(getDefinition(definitionDocument, { line: 15, character: 5 }), null);

    const memberVariableDefinitionDocument = TextDocument.create(
        "file:///tmp/member-definition.opy",
        "overpy",
        1,
        [
            "globalvar EditorOn",
            "playervar EditorOn",
            "rule \"use member variable\":",
            "    @Event global",
            "    hostPlayer.EditorOn = true",
            "    EditorOn = true",
        ].join("\n"),
    );
    assert.deepEqual(getDefinition(memberVariableDefinitionDocument, { line: 4, character: 18 })?.range, {
        start: { line: 1, character: 10 },
        end: { line: 1, character: 18 },
    });
    assert.deepEqual(getDefinition(memberVariableDefinitionDocument, { line: 5, character: 6 })?.range, {
        start: { line: 0, character: 10 },
        end: { line: 0, character: 18 },
    });

    const memberVariableReferences = await getWorkspaceReferences(
        memberVariableDefinitionDocument,
        { line: 4, character: 18 },
        [],
        [memberVariableDefinitionDocument],
    );
    assert.deepEqual(
        memberVariableReferences.map((reference) => reference.range),
        [
            {
                start: { line: 1, character: 10 },
                end: { line: 1, character: 18 },
            },
            {
                start: { line: 4, character: 15 },
                end: { line: 4, character: 23 },
            },
        ],
    );

    const globalVariableReferences = await getWorkspaceReferences(
        memberVariableDefinitionDocument,
        { line: 5, character: 6 },
        [],
        [memberVariableDefinitionDocument],
    );
    assert.deepEqual(
        globalVariableReferences.map((reference) => reference.range),
        [
            {
                start: { line: 0, character: 10 },
                end: { line: 0, character: 18 },
            },
            {
                start: { line: 5, character: 4 },
                end: { line: 5, character: 12 },
            },
        ],
    );

    assert.deepEqual(
        await getPrepareRename(memberVariableDefinitionDocument, { line: 4, character: 18 }, [], [memberVariableDefinitionDocument]),
        {
            start: { line: 4, character: 15 },
            end: { line: 4, character: 23 },
        },
    );
    assert.deepEqual(
        await getWorkspaceRename(
            memberVariableDefinitionDocument,
            { line: 4, character: 18 },
            "EditorEnabled",
            [],
            [memberVariableDefinitionDocument],
        ),
        {
            changes: {
                [memberVariableDefinitionDocument.uri]: [
                    {
                        range: {
                            start: { line: 1, character: 10 },
                            end: { line: 1, character: 18 },
                        },
                        newText: "EditorEnabled",
                    },
                    {
                        range: {
                            start: { line: 4, character: 15 },
                            end: { line: 4, character: 23 },
                        },
                        newText: "EditorEnabled",
                    },
                ],
            },
        },
    );
    assert.deepEqual(
        await getWorkspaceRename(
            memberVariableDefinitionDocument,
            { line: 5, character: 6 },
            "GlobalEditorOn",
            [],
            [memberVariableDefinitionDocument],
        ),
        {
            changes: {
                [memberVariableDefinitionDocument.uri]: [
                    {
                        range: {
                            start: { line: 0, character: 10 },
                            end: { line: 0, character: 18 },
                        },
                        newText: "GlobalEditorOn",
                    },
                    {
                        range: {
                            start: { line: 5, character: 4 },
                            end: { line: 5, character: 12 },
                        },
                        newText: "GlobalEditorOn",
                    },
                ],
            },
        },
    );
    assert.deepEqual(
        await getWorkspaceRename(definitionDocument, { line: 13, character: 27 }, "ACTIVE", [], [definitionDocument]),
        {
            changes: {
                [definitionDocument.uri]: [
                    {
                        range: {
                            start: { line: 6, character: 4 },
                            end: { line: 6, character: 11 },
                        },
                        newText: "ACTIVE",
                    },
                    {
                        range: {
                            start: { line: 13, character: 24 },
                            end: { line: 13, character: 31 },
                        },
                        newText: "ACTIVE",
                    },
                ],
            },
        },
    );
    assert.equal(await getPrepareRename(definitionDocument, { line: 15, character: 5 }, [], [definitionDocument]), null);
    assert.equal(
        await getWorkspaceRename(memberVariableDefinitionDocument, { line: 4, character: 18 }, "1Invalid", [], [memberVariableDefinitionDocument]),
        null,
    );

    const workspaceRoot = await mkdtemp(path.join(tmpdir(), "overpy-lsp-"));
    try {
        const nestedRoot = path.join(workspaceRoot, "scripts");
        const sharedPath = path.join(nestedRoot, "shared.opy");
        const mainPath = path.join(workspaceRoot, "main.opy");
        await mkdir(nestedRoot);
        await writeFile(
            sharedPath,
            [
                "globalvar sharedScore",
                "enum SharedState:",
                "    READY = 1",
            ].join("\n"),
        );

        const workspaceDocument = TextDocument.create(
            URI.file(mainPath).toString(),
            "overpy",
            1,
            [
                "rule \"use workspace\":",
                "    @Event global",
                "    sharedScore = SharedState.READY",
            ].join("\n"),
        );

        const sharedVariableDefinition = await getWorkspaceDefinition(workspaceDocument, { line: 2, character: 7 }, [workspaceRoot]);
        assert.equal(sharedVariableDefinition?.uri, URI.file(sharedPath).toString());
        assert.deepEqual(sharedVariableDefinition?.range, {
            start: { line: 0, character: 10 },
            end: { line: 0, character: 21 },
        });

        const sharedEnumDefinition = await getWorkspaceDefinition(workspaceDocument, { line: 2, character: 22 }, [workspaceRoot]);
        assert.equal(sharedEnumDefinition?.uri, URI.file(sharedPath).toString());
        assert.deepEqual(sharedEnumDefinition?.range, {
            start: { line: 1, character: 5 },
            end: { line: 1, character: 16 },
        });

        const sharedEnumMemberDefinition = await getWorkspaceDefinition(workspaceDocument, { line: 2, character: 32 }, [workspaceRoot]);
        assert.equal(sharedEnumMemberDefinition?.uri, URI.file(sharedPath).toString());
        assert.deepEqual(sharedEnumMemberDefinition?.range, {
            start: { line: 2, character: 4 },
            end: { line: 2, character: 9 },
        });

        const sharedVariableReferences = await getWorkspaceReferences(workspaceDocument, { line: 2, character: 7 }, [workspaceRoot]);
        assert.deepEqual(
            sharedVariableReferences.map((reference) => [reference.uri, reference.range]),
            [
                [
                    URI.file(sharedPath).toString(),
                    {
                        start: { line: 0, character: 10 },
                        end: { line: 0, character: 21 },
                    },
                ],
                [
                    workspaceDocument.uri,
                    {
                        start: { line: 2, character: 4 },
                        end: { line: 2, character: 15 },
                    },
                ],
            ],
        );

        await writeFile(mainPath, "rule \"noop\":\n    pass\n");

        const linkDocument = TextDocument.create(
            URI.file(mainPath).toString(),
            "overpy",
            1,
            [
                "#!mainFile \"main.opy\"",
                "#!include \"scripts/shared.opy\"",
                "#!include \"scripts/\"",
                "#!include \"missing.opy\"",
                "rule \"noop\":",
                "    pass",
            ].join("\n"),
        );

        const documentLinks = getDocumentLinks(linkDocument);
        assert.deepEqual(
            documentLinks.map((link) => [link.range, link.target]),
            [
                [
                    { start: { line: 0, character: 12 }, end: { line: 0, character: 20 } },
                    URI.file(mainPath).toString(),
                ],
                [
                    { start: { line: 1, character: 11 }, end: { line: 1, character: 29 } },
                    URI.file(sharedPath).toString(),
                ],
                [
                    { start: { line: 2, character: 11 }, end: { line: 2, character: 19 } },
                    URI.file(nestedRoot).toString(),
                ],
            ],
        );

        // Doc comments live in an #!included file but must surface on hover at the usage site,
        // and the enum-name vs member side of the dot must resolve to different hovers.
        const docsSharedPath = path.join(workspaceRoot, "docs-shared.opy");
        await writeFile(
            docsSharedPath,
            [
                "# The current game phase",
                "enum DocState: # phase tracker",
                "    # Waiting for players",
                "    LOBBY = 0 # initial value",
                "    LIVE = 1",
            ].join("\n"),
        );
        const docsMainPath = path.join(workspaceRoot, "docs-main.opy");
        const docsMainText = [
            "#!include \"docs-shared.opy\"",
            "rule \"r\":",
            "    @Event global",
            "    wait(DocState.LOBBY, Wait.IGNORE_CONDITION)",
        ].join("\n");
        await writeFile(docsMainPath, docsMainText);
        const docsMainDocument = TextDocument.create(URI.file(docsMainPath).toString(), "overpy", 1, docsMainText);
        await validateTextDocument(docsMainDocument, "en-US");

        // Right of the dot -> member hover (merged above-block + inline comment from the included file).
        const includedMemberHover = getHover(docsMainDocument, { line: 3, character: "    wait(DocState.LO".length });
        assert.ok(includedMemberHover);
        assert.match(getHoverText(includedMemberHover), /\*\*DocState\.LOBBY\*\*/);
        assert.match(getHoverText(includedMemberHover), /Waiting for players/);
        assert.match(getHoverText(includedMemberHover), /initial value/);

        // Left of the dot -> enum-level hover (its own doc comment), never the member doc.
        const includedEnumHover = getHover(docsMainDocument, { line: 3, character: "    wait(DocS".length });
        assert.ok(includedEnumHover);
        assert.match(getHoverText(includedEnumHover), /\*\*DocState\*\*/);
        assert.match(getHoverText(includedEnumHover), /The current game phase/);
        assert.match(getHoverText(includedEnumHover), /phase tracker/);
        assert.doesNotMatch(getHoverText(includedEnumHover), /Waiting for players/);
    } finally {
        await rm(workspaceRoot, { force: true, recursive: true });
    }

    const colorDocument = TextDocument.create(
        "file:///tmp/colors.opy",
        "overpy",
        1,
        [
            "#!suppressWarnings w_unused_variable",
            "globalvar named = Color.RED",
            "globalvar customRgb = rgb(255, 0, 0)",
            "globalvar customRgba = rgb(0, 255, 0, 128)",
            "globalvar fromHsl = hsl(0, 1, 0.5)",
            "globalvar dynamic = Color.TEAM_1",
            "globalvar expr = rgb(score, 0, 0)",
            "globalvar inString = \"Color.RED rgb(1, 2, 3)\"",
            "# comment Color.BLUE rgb(4, 5, 6)",
        ].join("\n"),
    );

    const documentColors = getDocumentColors(colorDocument)
        .map((entry) => ({ text: colorDocument.getText(entry.range), color: entry.color }))
        .sort((left, right) => left.text.localeCompare(right.text));

    assert.deepEqual(
        documentColors,
        [
            { text: "Color.RED", color: Color.create(200 / 255, 0, 19 / 255, 1) },
            { text: "hsl(0, 1, 0.5)", color: Color.create(1, 0, 0, 1) },
            { text: "rgb(0, 255, 0, 128)", color: Color.create(0, 1, 0, 128 / 255) },
            { text: "rgb(255, 0, 0)", color: Color.create(1, 0, 0, 1) },
        ],
    );

    const exactNamedPresentations = getColorPresentations(Color.create(200 / 255, 0, 19 / 255, 1), Range.create(1, 18, 1, 27));
    assert.deepEqual(exactNamedPresentations, [
        { label: "rgb(200, 0, 19)", textEdit: TextEdit.replace(Range.create(1, 18, 1, 27), "rgb(200, 0, 19)") },
        { label: "Color.RED", textEdit: TextEdit.replace(Range.create(1, 18, 1, 27), "Color.RED") },
    ]);

    const translucentPresentations = getColorPresentations(Color.create(1, 0, 0, 0.5), Range.create(2, 0, 2, 0));
    assert.deepEqual(translucentPresentations, [
        { label: "rgb(255, 0, 0, 128)", textEdit: TextEdit.replace(Range.create(2, 0, 2, 0), "rgb(255, 0, 0, 128)") },
    ]);

    await initializeLanguageServerRuntime();

    const invalidDocument = TextDocument.create(
        "file:///tmp/bad.opy",
        "overpy",
        1,
        "rule \"bad\":\n    @Event global\n    wait(",
    );
    const invalidValidation = await validateTextDocument(invalidDocument, "en-US");
    const invalidDiagnostics = invalidValidation.diagnosticsByUri.get(invalidDocument.uri) ?? [];
    assert.ok(invalidDiagnostics.some((item) => item.severity === DiagnosticSeverity.Error));

    const validDocument = TextDocument.create(
        "file:///tmp/good.opy",
        "overpy",
        1,
        "rule \"hello\":\n    @Event global\n    wait(1)",
    );
    const validValidation = await validateTextDocument(validDocument, "en-US");
    const validDiagnostics = validValidation.diagnosticsByUri.get(validDocument.uri) ?? [];
    assert.equal(validDiagnostics.filter((item) => item.severity === DiagnosticSeverity.Error).length, 0);

    // An error from a resolved enum member must point at the usage site, not the enum definition.
    const enumUsageDocument = TextDocument.create(
        "file:///tmp/enum-usage.opy",
        "overpy",
        1,
        ["enum Wa:", "    h = 1", "", "Wa.h"].join("\n"),
    );
    const enumUsageValidation = await validateTextDocument(enumUsageDocument, "en-US");
    const enumUsageDiagnostics = enumUsageValidation.diagnosticsByUri.get(enumUsageDocument.uri) ?? [];
    const enumUsageError = enumUsageDiagnostics.find((item) => item.severity === DiagnosticSeverity.Error);
    assert.ok(enumUsageError, "expected an error for an enum member used outside a rule");
    assert.equal(enumUsageError.range.start.line, 3, "enum usage error should be on the `Wa.h` line");
    assert.equal(enumUsageError.range.start.character, 0);

    // An error from a resolved macro constant must point at the usage site, not the macro definition.
    const macroUsageDocument = TextDocument.create(
        "file:///tmp/macro-usage.opy",
        "overpy",
        1,
        ["macro foo = 1", "", "foo"].join("\n"),
    );
    const macroUsageValidation = await validateTextDocument(macroUsageDocument, "en-US");
    const macroUsageDiagnostics = macroUsageValidation.diagnosticsByUri.get(macroUsageDocument.uri) ?? [];
    const macroUsageError = macroUsageDiagnostics.find((item) => item.severity === DiagnosticSeverity.Error);
    assert.ok(macroUsageError, "expected an error for a macro constant used outside a rule");
    assert.equal(macroUsageError.range.start.line, 2, "macro usage error should be on the `foo` line");
    assert.equal(macroUsageError.range.start.character, 0);

    // A placement error from an expanded function macro must point at the call site, not the macro body.
    const macroCallDocument = TextDocument.create(
        "file:///tmp/macro-call.opy",
        "overpy",
        1,
        ["macro a(b, c):", "    b + c", "", "a(1, 2)"].join("\n"),
    );
    const macroCallValidation = await validateTextDocument(macroCallDocument, "en-US");
    const macroCallDiagnostics = macroCallValidation.diagnosticsByUri.get(macroCallDocument.uri) ?? [];
    const macroCallError = macroCallDiagnostics.find((item) => item.severity === DiagnosticSeverity.Error);
    assert.ok(macroCallError, "expected an error for a function macro called outside a rule");
    assert.equal(macroCallError.range.start.line, 3, "function macro placement error should be on the `a(1, 2)` line");
    assert.equal(macroCallError.range.start.character, 0);

    // A real error inside a macro body must still point into the body, not the call site.
    const macroBodyErrorDocument = TextDocument.create(
        "file:///tmp/macro-body.opy",
        "overpy",
        1,
        ["macro a(b, c):", "    b + c + zzz", "", "rule \"r\":", "    @Event global", "    a(1, 2)"].join("\n"),
    );
    const macroBodyErrorValidation = await validateTextDocument(macroBodyErrorDocument, "en-US");
    const macroBodyErrorDiagnostics = macroBodyErrorValidation.diagnosticsByUri.get(macroBodyErrorDocument.uri) ?? [];
    const macroBodyError = macroBodyErrorDiagnostics.find((item) => item.severity === DiagnosticSeverity.Error);
    assert.ok(macroBodyError, "expected an error for an undefined name in a macro body");
    assert.equal(macroBodyError.range.start.line, 1, "macro body error should stay on the body line");

    const documentedDocument = TextDocument.create(
        "file:///tmp/documented.opy",
        "overpy",
        1,
        [
            "globalvar score # The team's score",
            "# Charge toward the ultimate",
            "playervar ultCharge",
            "enum GameStatus:",
            "    # Waiting for players to join",
            "    SETUP = 0",
            "    PLAYING = 1 # Match is live",
            "# Reset the score back to zero",
            "def resetScore():",
            "    score = 0",
            "rule \"hello\":",
            "    @Event global",
            "    resetScore()",
        ].join("\n"),
    );
    await validateTextDocument(documentedDocument, "en-US");

    const scoreHover = getHover(documentedDocument, { line: 0, character: "globalvar sc".length });
    assert.ok(scoreHover);
    assert.match(getHoverText(scoreHover), /The team's score/);

    const ultChargeHover = getHover(documentedDocument, { line: 2, character: "playervar ul".length });
    assert.ok(ultChargeHover);
    assert.match(getHoverText(ultChargeHover), /Charge toward the ultimate/);

    const resetScoreHover = getHover(documentedDocument, { line: 8, character: "def reset".length });
    assert.ok(resetScoreHover);
    assert.match(getHoverText(resetScoreHover), /Reset the score back to zero/);

    const enumMemberCompletions = getCompletionList(
        TextDocument.create("file:///tmp/enum.opy", "overpy", 1, "GameStatus."),
        { line: 0, character: "GameStatus.".length },
        ".",
    );
    const setupItem = enumMemberCompletions.items.find((item) => item.label === "SETUP");
    assert.ok(setupItem);
    assert.match(getDocumentationValue(setupItem), /Waiting for players to join/);
    const playingItem = enumMemberCompletions.items.find((item) => item.label === "PLAYING");
    assert.ok(playingItem);
    assert.match(getDocumentationValue(playingItem), /Match is live/);

    // Extending a built-in enum adds members; it must not erase the built-in ones.
    const extendedEnumDocument = TextDocument.create(
        "file:///tmp/extend-hero.opy",
        "overpy",
        1,
        ["enum Hero:", "    cat = Hero.JETPACK_CAT"].join("\n"),
    );
    await validateTextDocument(extendedEnumDocument, "en-US");
    const extendedHeroCompletions = getCompletionList(
        TextDocument.create("file:///tmp/hero-use.opy", "overpy", 1, "Hero."),
        { line: 0, character: "Hero.".length },
        ".",
    );
    assert.ok(
        extendedHeroCompletions.items.some((item) => item.label === "cat"),
        "extended enum member should be present",
    );
    assert.ok(
        extendedHeroCompletions.items.some((item) => item.label === "ANA"),
        "built-in enum members should survive extension",
    );

    const macroDocsDocument = TextDocument.create(
        "file:///tmp/macros.opy",
        "overpy",
        1,
        [
            "globalvar score",
            "# Points awarded per kill",
            "macro KILL_POINTS = 100",
            "",
            "# unrelated header",
            "",
            "macro RESPAWN_TIME = 5",
            "rule \"r\":",
            "    @Event global",
            "    score = KILL_POINTS",
            "    wait(RESPAWN_TIME, Wait.IGNORE_CONDITION)",
        ].join("\n"),
    );
    await validateTextDocument(macroDocsDocument, "en-US");

    const killPointsHover = getHover(macroDocsDocument, { line: 9, character: "    score = KIL".length });
    assert.ok(killPointsHover);
    assert.match(getHoverText(killPointsHover), /Points awarded per kill/);

    const respawnHover = getHover(macroDocsDocument, { line: 10, character: "    wait(RESPAW".length });
    assert.ok(respawnHover);
    assert.doesNotMatch(getHoverText(respawnHover), /unrelated header/, "a blank line should break the comment block");

    // Validating B must not erase A's symbols for hover/completion/signature/inlay:
    // each consumer must read A's per-URI snapshot, not the most-recently-validated global.
    const bleedDocA = TextDocument.create(
        "file:///tmp/bleedA.opy",
        "overpy",
        1,
        [
            "macro scaleA(value):",
            "    value * 2",
            "globalvar scoreA",
            "rule \"rA\":",
            "    @Event global",
            "    scoreA = scaleA(scoreA)",
        ].join("\n"),
    );
    const bleedDocB = TextDocument.create(
        "file:///tmp/bleedB.opy",
        "overpy",
        1,
        [
            "macro scaleB(value):",
            "    value * 3",
            "globalvar scoreB",
            "rule \"rB\":",
            "    @Event global",
            "    scoreB = scaleB(scoreB)",
        ].join("\n"),
    );
    await validateTextDocument(bleedDocA, "en-US");
    await validateTextDocument(bleedDocB, "en-US"); // global now reflects B

    const bleedHover = getHover(bleedDocA, { line: 5, character: "    scoreA = sca".length });
    assert.ok(bleedHover, "hover on A's macro must resolve from A's snapshot");
    assert.match(getHoverText(bleedHover), /scaleA/);

    const bleedCompletions = getCompletionList(bleedDocA, { line: 3, character: 0 });
    assert.ok(
        bleedCompletions.items.some((item) => item.label === "scaleA"),
        "A's default completions must contain A's macro",
    );
    assert.ok(
        !bleedCompletions.items.some((item) => item.label === "scaleB"),
        "A's default completions must not contain B's macro",
    );

    const bleedSignature = getSignatureHelp(bleedDocA, { line: 5, character: "    scoreA = scaleA(".length }, "(");
    assert.ok(bleedSignature, "signature help on A's macro must resolve from A's snapshot");

    const bleedInlay = getInlayHints(bleedDocA);
    assert.ok(
        bleedInlay.some((hint) => hint.label === "value:"),
        "inlay hints on A's call must resolve A's parameter name",
    );

    // Built-ins are shared, so they still resolve regardless of which document is focused.
    const bleedBuiltinHover = getHover(bleedDocA, { line: 5, character: "    scoreA = scaleA(sco".length });
    assert.ok(bleedBuiltinHover, "built-in/user symbols in A still hover after B validated");

    const overlayRoot = await mkdtemp(path.join(tmpdir(), "overpy-overlay-"));
    try {
        const includePath = path.join(overlayRoot, "lib.opy");
        await writeFile(includePath, "macro ON_DISK_MACRO = 1\n");
        const overlayMainPath = path.join(overlayRoot, "overlay-main.opy");
        const overlayMainText = [
            "#!include \"lib.opy\"",
            "globalvar score",
            "rule \"r\":",
            "    @Event global",
            "    score = ON_DISK_MACRO",
        ].join("\n");
        await writeFile(overlayMainPath, overlayMainText);

        const overlayMainDoc = TextDocument.create(URI.file(overlayMainPath).toString(), "overpy", 1, overlayMainText);
        const overlayIncludeDoc = TextDocument.create(
            URI.file(includePath).toString(),
            "overpy",
            2,
            "macro ON_DISK_MACRO = 1\nmacro UNSAVED_MACRO = 2\n",
        );

        await validateTextDocument(overlayMainDoc, "en-US", [overlayMainDoc, overlayIncludeDoc]);
        const overlayCompletions = getCompletionList(overlayMainDoc, { line: 2, character: 0 });
        assert.ok(
            overlayCompletions.items.some((item) => item.label === "ON_DISK_MACRO"),
            "on-disk include macro must still resolve",
        );
        assert.ok(
            overlayCompletions.items.some((item) => item.label === "UNSAVED_MACRO"),
            "unsaved open-include macro must resolve from the live buffer overlay",
        );
    } finally {
        await rm(overlayRoot, { force: true, recursive: true });
    }

    // Closing a main file must clear diagnostics it published to its includes,
    // but never blank an include that is open or still published-to by another main file.
    const mainUri = "file:///tmp/close-main.opy";
    const includeUri = "file:///tmp/close-include.opy";
    const otherMainUri = "file:///tmp/close-other-main.opy";

    // (1) Lone main closes -> its include is cleared (its own URI is excluded; the caller clears it).
    const loneMap = new Map<string, Set<string>>([[mainUri, new Set([mainUri, includeUri])]]);
    assert.deepEqual(
        getDiagnosticUrisToClear(mainUri, loneMap, () => false),
        [includeUri],
    );

    // (2) Two mains share an include; closing one retains the shared include.
    const sharedMap = new Map<string, Set<string>>([
        [mainUri, new Set([mainUri, includeUri])],
        [otherMainUri, new Set([otherMainUri, includeUri])],
    ]);
    assert.deepEqual(
        getDiagnosticUrisToClear(mainUri, sharedMap, () => false),
        [],
    );

    // (3) The include is itself an open document -> never blanked.
    assert.deepEqual(
        getDiagnosticUrisToClear(mainUri, loneMap, (uri) => uri === includeUri),
        [],
    );

    // (4) No recorded entry -> nothing to clear.
    assert.deepEqual(
        getDiagnosticUrisToClear("file:///tmp/never-validated.opy", loneMap, () => false),
        [],
    );

    // Shared identifier-at-position primitive characterization.
    const primitiveDoc = TextDocument.create("file:///tmp/primitive.opy", "overpy", 1, "Hero.ANA = wait");
    const wordPattern = { char: /[A-Za-z0-9_]/, token: /^[A-Za-z0-9_]+$/ };

    // Cursor on the first token of a qualified name returns just that token.
    const heroToken = getIdentifierAtPosition(primitiveDoc, { line: 0, character: 2 }, wordPattern.char, wordPattern.token);
    assert.equal(heroToken?.text, "Hero");
    assert.deepEqual(heroToken?.range, Range.create(0, 0, 0, 4));

    // Cursor just past a token's end (on the boundary) still resolves the token.
    const boundaryToken = getIdentifierAtPosition(primitiveDoc, { line: 0, character: 4 }, wordPattern.char, wordPattern.token);
    assert.equal(boundaryToken?.text, "Hero");

    // Cursor on whitespace with no adjacent word char returns null.
    const noToken = getIdentifierAtPosition(
        TextDocument.create("file:///tmp/none.opy", "overpy", 1, "   "),
        { line: 0, character: 1 },
        wordPattern.char,
        wordPattern.token,
    );
    assert.equal(noToken, null);

    // Preceding qualified name: the member after a dot reports its owner.
    assert.equal(getPrecedingQualifiedName("Hero.ANA", "Hero.".length), "Hero");
    assert.equal(getPrecedingQualifiedName("ANA", 0), undefined);

    assert.ok(rangesEqual(Range.create(0, 0, 0, 4), Range.create(0, 0, 0, 4)));
    assert.ok(!rangesEqual(Range.create(0, 0, 0, 4), Range.create(0, 0, 0, 5)));

    // `@`-annotations are highlighted with the `regexp` token type.
    const annotationTokenDocument = TextDocument.create(
        "file:///tmp/annotation-token.opy",
        "overpy",
        1,
        "rule \"r\":\n    @Event global",
    );
    const annotationTokens = decodeSemanticTokens(getSemanticTokens(annotationTokenDocument).data);
    assert.ok(
        annotationTokens.some((token) => token.type === "regexp" && token.line === 1),
        "the @Event annotation should emit a regexp semantic token",
    );

    // The .opy file index is cached per root and only refreshed on explicit invalidation.
    const cacheRoot = await mkdtemp(path.join(tmpdir(), "opy-cache-"));
    try {
        await writeFile(path.join(cacheRoot, "first.opy"), "globalvar a\n");
        const probe = TextDocument.create(URI.file(path.join(cacheRoot, "probe.opy")).toString(), "overpy", 1, "globalvar p\n");

        invalidateOpyFileCache();
        const firstScan = await getWorkspaceDocuments(probe, [cacheRoot], []);
        assert.ok(firstScan.some((doc) => doc.uri.endsWith("first.opy")));

        // Adding a file without invalidating must not appear (stale cache is intended).
        await writeFile(path.join(cacheRoot, "second.opy"), "globalvar b\n");
        const cachedScan = await getWorkspaceDocuments(probe, [cacheRoot], []);
        assert.ok(!cachedScan.some((doc) => doc.uri.endsWith("second.opy")), "new file is hidden until cache invalidated");

        // After invalidation the new file is discovered.
        invalidateOpyFileCache();
        const freshScan = await getWorkspaceDocuments(probe, [cacheRoot], []);
        assert.ok(freshScan.some((doc) => doc.uri.endsWith("second.opy")), "invalidation refreshes the index");
    } finally {
        await rm(cacheRoot, { recursive: true });
        invalidateOpyFileCache();
    }

    console.log("LSP adapter tests passed");
}

function getDocumentationValue(item: CompletionItem): string {
    if (typeof item.documentation === "string") {
        return item.documentation;
    }
    return item.documentation?.value ?? "";
}

function decodeSemanticTokens(data: number[]): { line: number; character: number; length: number; type: string }[] {
    const tokens: { line: number; character: number; length: number; type: string }[] = [];
    let line = 0;
    let character = 0;

    for (let index = 0; index < data.length; index += 5) {
        const deltaLine = data[index];
        const deltaCharacter = data[index + 1];
        if (deltaLine === 0) {
            character += deltaCharacter;
        } else {
            line += deltaLine;
            character = deltaCharacter;
        }
        tokens.push({ line, character, length: data[index + 2], type: semanticTokenTypes[data[index + 3]] });
    }

    return tokens;
}

function getHoverText(hover: Hover): string {
    if (typeof hover.contents === "string") {
        return hover.contents;
    }

    if (Array.isArray(hover.contents)) {
        return hover.contents.map((item) => (typeof item === "string" ? item : item.value)).join("\n");
    }

    return hover.contents.value;
}
