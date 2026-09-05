import assert from "node:assert/strict";

import { actionKw } from "../data/actions";
import { formatDocumentation, getLocalizedString, localizableDocumentation } from "../data/opy/documentation";
import { makeSignatureHelp } from "../languageServer/completionState";

const localized = {
    "en-US": "English documentation.",
    "ko-KR": "한국어 문서입니다.",
};
assert.equal(getLocalizedString(localized, "ko-KR"), "한국어 문서입니다.");
assert.equal(getLocalizedString(localized, "ja-JP"), "English documentation.");

assert.equal(formatDocumentation("arguments", "ko-KR"), "인자:");
assert.equal(formatDocumentation("returns", "ko-KR"), "반환값:");
assert.match(formatDocumentation("defaultValue", "ko-KR", "0.016"), /생략하면 기본값은/);
assert.match(formatDocumentation("defaultValue", "ko-KR", "0.016"), /0\.016/);
assert.equal(formatDocumentation("arguments", "ja-JP"), "Arguments:");

const dynamic = localizableDocumentation("globalVariableIndex", 3);
assert.equal(getLocalizedString(dynamic, "ko-KR"), "전역 변수입니다. (인덱스: 3)");
assert.equal(getLocalizedString(dynamic, "fr-FR"), "A global variable. (index: 3)");

assert.equal(typeof actionKw.wait.description, "object");
assert.ok(actionKw.wait.description["en-US"]);
assert.equal("guid" in actionKw.wait.description, false, "description GUIDs must not be persisted");
assert.equal(
    getLocalizedString(actionKw.wait.description, "ko-KR"),
    actionKw.wait.description["ko-KR"] ?? actionKw.wait.description["en-US"],
    "missing DataTool translations must fall back to English",
);

const signatureHelp = makeSignatureHelp(
    "localizedExample",
    {
        args: [
            {
                name: "value",
                description: {
                    "en-US": "The example value.",
                    "ko-KR": "예시 값입니다.",
                },
                type: "float",
            },
        ],
        description: localized,
        return: "void",
    },
    0,
    null,
    "ko-KR",
);
assert.ok(signatureHelp);
const parameterDocumentation = signatureHelp.signatures[0].parameters?.[0].documentation;
assert.ok(parameterDocumentation && typeof parameterDocumentation !== "string");
assert.match(parameterDocumentation.value, /예시 값입니다/);
assert.match(parameterDocumentation.value, /타입:/);
assert.match(parameterDocumentation.value, /float/);

console.log("Documentation localization tests passed.");
