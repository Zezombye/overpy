/// <reference types="vite/client" />

// Monaco internals without type declarations, see src/lib/codicons.ts.
declare module "monaco-editor/base/common/codicons.js" {}
declare module "monaco-editor/base/common/codiconsUtil.js" {
    export function getCodiconFontCharacters(): Record<string, number>;
}

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<object, object, unknown>;
    export default component;
}
