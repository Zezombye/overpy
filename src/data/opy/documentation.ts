import type { LocalizableString, OWLanguage } from "../../types";

export const documentationKw = {
    arguments: { "en-US": "Arguments:", "ko-KR": "인자:" },
    type: { "en-US": "Type:", "ko-KR": "타입:" },
    class: { "en-US": "Class:", "ko-KR": "클래스:" },
    returns: { "en-US": "Returns:", "ko-KR": "반환값:" },
    value: { "en-US": "Value:", "ko-KR": "값:" },
    defaultValue: {
        "en-US": "If omitted, defaults to `{0}`.",
        "ko-KR": "생략하면 기본값은 `{0}`입니다.",
    },
    extension: {
        "en-US": "Part of extension `{0}`.",
        "ko-KR": "`{0}` 확장 기능에 포함됩니다.",
    },
    enum: { "en-US": "The `{0}` enum.", "ko-KR": "`{0}` 열거형입니다." },
    enumMember: { "en-US": "Enum with {0} member.", "ko-KR": "{0}개의 멤버를 가진 열거형입니다." },
    enumMembers: { "en-US": "Enum with {0} members.", "ko-KR": "{0}개의 멤버를 가진 열거형입니다." },
    userDefinedEnumMember: {
        "en-US": "A user-defined enum member.",
        "ko-KR": "사용자 정의 열거형 멤버입니다.",
    },
    globalVariable: { "en-US": "A global variable.", "ko-KR": "전역 변수입니다." },
    globalVariableIndex: {
        "en-US": "A global variable. (index: {0})",
        "ko-KR": "전역 변수입니다. (인덱스: {0})",
    },
    playerVariable: { "en-US": "A player variable.", "ko-KR": "플레이어 변수입니다." },
    playerVariableIndex: {
        "en-US": "A player variable. (index: {0})",
        "ko-KR": "플레이어 변수입니다. (인덱스: {0})",
    },
    subroutine: { "en-US": "A subroutine.", "ko-KR": "서브루틴입니다." },
    subroutineIndex: {
        "en-US": "A subroutine. (index: {0})",
        "ko-KR": "서브루틴입니다. (인덱스: {0})",
    },
    macroExecutesScript: {
        "en-US": "This macro executes the script:\n  `{0}`",
        "ko-KR": "이 매크로는 다음 스크립트를 실행합니다:\n  `{0}`",
    },
    macroResolvesTo: {
        "en-US": "This macro resolves to:\n\n```\n{0}\n```",
        "ko-KR": "이 매크로는 다음으로 변환됩니다:\n\n```\n{0}\n```",
    },
    macroResolvesInline: {
        "en-US": "This macro resolves to:\n`{0}`",
        "ko-KR": "이 매크로는 다음으로 변환됩니다:\n`{0}`",
    },
    noDocumentation: {
        "en-US": "<no documentation found for `{0}`>",
        "ko-KR": "`{0}`에 대한 문서를 찾을 수 없습니다.",
    },
} satisfies Record<string, LocalizableString>;

export type DocumentationKey = keyof typeof documentationKw;

export function getLocalizedString(
    value: string | LocalizableString | undefined,
    language: OWLanguage,
): string {
    if (value === undefined) return "";
    if (typeof value === "string") return value;
    return value[language] ?? value["en-US"] ?? "";
}

export function formatDocumentation(
    key: DocumentationKey,
    language: OWLanguage,
    ...args: Array<string | number>
): string {
    let result = getLocalizedString(documentationKw[key], language);
    args.forEach((arg, index) => {
        result = result.replaceAll(`{${index}}`, String(arg));
    });
    return result;
}

export function localizableDocumentation(
    key: DocumentationKey,
    ...args: Array<string | number>
): LocalizableString {
    const result: LocalizableString = {};
    for (const language of Object.keys(documentationKw[key]) as OWLanguage[]) {
        result[language] = formatDocumentation(key, language, ...args);
    }
    return result;
}
