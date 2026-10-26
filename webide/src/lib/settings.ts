import { reactive, watch } from "vue";

import overpyPackage from "../../../package.json";
import { api } from "./api";

export interface SettingDefinition {
    key: string;
    /** Group shown in the settings editor. */
    section: string;
    title: string;
    description: string;
    type: "boolean" | "number" | "string" | "enum";
    default: unknown;
    enum?: string[];
    enumDescriptions?: string[];
    minimum?: number;
    maximum?: number;
}

type PackageSetting = {
    type: string;
    description: string;
    default: unknown;
    enum?: string[];
    enumDescriptions?: string[];
    minimum?: number;
    maximum?: number;
};

/** "overpy.workshopLanguage" -> "Workshop Language" */
function titleFromKey(key: string): string {
    const name = key.substring(key.lastIndexOf(".") + 1);
    return name.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
}

const NOT_APPLICABLE_OVERPY_SETTINGS = [
    // The web IDE always uses the language server.
    "overpy.useLanguageServer",
];

const overpySettings: SettingDefinition[] = Object.entries(overpyPackage.contributes.configuration.properties as Record<string, PackageSetting>)
    .filter(([key]) => !NOT_APPLICABLE_OVERPY_SETTINGS.includes(key))
    .map(([key, setting]) => ({
        key,
        section: overpyPackage.contributes.configuration.title,
        title: titleFromKey(key),
        description: key === "overpy.compileOnSave" ? `${setting.description} Automatic saves (see Files: Auto Save) do not trigger a compilation.` : setting.description,
        type: setting.enum ? "enum" : (setting.type as SettingDefinition["type"]),
        default: setting.default,
        enum: setting.enum,
        enumDescriptions: setting.enumDescriptions,
        minimum: setting.minimum,
        maximum: setting.maximum,
    }));

export const settingDefinitions: SettingDefinition[] = [
    {
        key: "workbench.colorTheme",
        section: "Workbench",
        title: "Color Theme",
        description: "Specifies the color theme used in the workbench.",
        type: "enum",
        default: "Dark Modern",
        enum: ["Dark Modern", "Light Modern"],
    },
    {
        key: "explorer.sortOrder",
        section: "Explorer",
        title: "Sort Order",
        description:
            "Controls the order of files and folders in the explorer, which is also the order in which they are compiled. Files are sorted by name, numbers in their natural order (e.g. '2 rules.opy' before '10 rules.opy').",
        type: "enum",
        default: "mixed",
        enum: ["mixed", "default"],
        enumDescriptions: ["Files and folders are sorted together by name.", "Folders are displayed before files."],
    },
    {
        key: "files.autoSave",
        section: "Files",
        title: "Auto Save",
        description: "Controls auto save of editors that have unsaved changes.",
        type: "enum",
        default: "off",
        enum: ["off", "afterDelay", "onFocusChange"],
        enumDescriptions: [
            "An editor with changes is never automatically saved.",
            "An editor with changes is automatically saved after the configured Files: Auto Save Delay.",
            "An editor with changes is automatically saved when the editor loses focus.",
        ],
    },
    {
        key: "files.autoSaveDelay",
        section: "Files",
        title: "Auto Save Delay",
        description: "Controls the delay in milliseconds after which an editor with unsaved changes is saved automatically. Only applies when Files: Auto Save is set to afterDelay.",
        type: "number",
        default: 1000,
        minimum: 100,
        maximum: 60000,
    },
    { key: "editor.fontSize", section: "Editor", title: "Font Size", description: "Controls the font size in pixels.", type: "number", default: 14, minimum: 6, maximum: 100 },
    {
        key: "editor.fontFamily",
        section: "Editor",
        title: "Font Family",
        description: "Controls the font family. Leave empty to use the default monospace font.",
        type: "string",
        default: "",
    },
    {
        key: "editor.tabSize",
        section: "Editor",
        title: "Tab Size",
        description: "The number of spaces a tab is equal to. This setting is overridden based on the file contents when Editor: Detect Indentation is on.",
        type: "number",
        default: 4,
        minimum: 1,
        maximum: 16,
    },
    {
        key: "editor.insertSpaces",
        section: "Editor",
        title: "Insert Spaces",
        description: "Insert spaces when pressing Tab. This setting is overridden based on the file contents when Editor: Detect Indentation is on.",
        type: "boolean",
        default: true,
    },
    {
        key: "editor.detectIndentation",
        section: "Editor",
        title: "Detect Indentation",
        description: "Controls whether Editor: Tab Size and Editor: Insert Spaces will be automatically detected when a file is opened based on the file contents.",
        type: "boolean",
        default: true,
    },
    {
        key: "editor.wordWrap",
        section: "Editor",
        title: "Word Wrap",
        description: "Controls how lines should wrap.",
        type: "enum",
        default: "on",
        enum: ["off", "on", "bounded"],
        enumDescriptions: ["Lines will never wrap.", "Lines will wrap at the viewport width.", "Lines will wrap at the minimum of viewport and 80 columns."],
    },
    { key: "editor.minimap.enabled", section: "Editor", title: "Minimap", description: "Controls whether the minimap is shown.", type: "boolean", default: true },
    {
        key: "editor.lineNumbers",
        section: "Editor",
        title: "Line Numbers",
        description: "Controls the display of line numbers.",
        type: "enum",
        default: "on",
        enum: ["on", "off", "relative", "interval"],
    },
    {
        key: "editor.renderWhitespace",
        section: "Editor",
        title: "Render Whitespace",
        description: "Controls how the editor should render whitespace characters.",
        type: "enum",
        default: "selection",
        enum: ["none", "boundary", "selection", "trailing", "all"],
    },
    {
        key: "editor.stickyScroll.enabled",
        section: "Editor",
        title: "Sticky Scroll",
        description: "Shows the nested current scopes during the scroll at the top of the editor.",
        type: "boolean",
        default: true,
    },
    {
        key: "editor.bracketPairColorization.enabled",
        section: "Editor",
        title: "Bracket Pair Colorization",
        description: "Controls whether bracket pair colorization is enabled or not.",
        type: "boolean",
        default: true,
    },
    {
        key: "editor.inlayHints.enabled",
        section: "Editor",
        title: "Inlay Hints",
        description: "Enables the inlay hints in the editor (such as parameter names, see OverPy: Inlay Hints Min Parameters).",
        type: "enum",
        default: "on",
        enum: ["on", "onUnlessPressed", "offUnlessPressed", "off"],
        enumDescriptions: ["Inlay hints are enabled.", "Inlay hints are showing by default and hide when holding Ctrl+Alt.", "Inlay hints are hidden by default and show when holding Ctrl+Alt.", "Inlay hints are disabled."],
    },
    {
        key: "editor.cursorBlinking",
        section: "Editor",
        title: "Cursor Blinking",
        description: "Control the cursor animation style.",
        type: "enum",
        default: "blink",
        enum: ["blink", "smooth", "phase", "expand", "solid"],
    },
    {
        key: "editor.mouseWheelZoom",
        section: "Editor",
        title: "Mouse Wheel Zoom",
        description: "Zoom the font of the editor when using mouse wheel and holding Ctrl.",
        type: "boolean",
        default: false,
    },
    ...overpySettings,
];

const definitionsByKey = new Map(settingDefinitions.map((definition) => [definition.key, definition]));

function defaultValues(): Record<string, unknown> {
    return Object.fromEntries(settingDefinitions.map((definition) => [definition.key, definition.default]));
}

/** Current value of every setting (defaults merged with the user's settings). */
export const settings = reactive<Record<string, unknown>>(defaultValues());

export function getSetting<T>(key: string): T {
    if (!definitionsByKey.has(key)) {
        throw new Error(`Unknown setting '${key}'`);
    }
    return settings[key] as T;
}

function isValidValue(definition: SettingDefinition, value: unknown): boolean {
    switch (definition.type) {
        case "boolean":
            return typeof value === "boolean";
        case "string":
            return typeof value === "string";
        case "number":
            return (
                typeof value === "number" &&
                Number.isFinite(value) &&
                (definition.minimum === undefined || value >= definition.minimum) &&
                (definition.maximum === undefined || value <= definition.maximum)
            );
        case "enum":
            return typeof value === "string" && definition.enum!.includes(value);
    }
}

let loading = false;

/** Replaces the current settings by the ones stored in the user's account. */
export function loadUserSettings(userSettings: Record<string, unknown>): void {
    loading = true;
    Object.assign(settings, defaultValues());
    for (const [key, value] of Object.entries(userSettings)) {
        const definition = definitionsByKey.get(key);
        if (!definition) {
            console.warn(`Ignoring unknown setting '${key}' stored in the account.`);
            continue;
        }
        if (!isValidValue(definition, value)) {
            console.warn(`Ignoring invalid value for setting '${key}':`, value);
            continue;
        }
        settings[key] = value;
    }
    loading = false;
}

export function setSetting(key: string, value: unknown): void {
    const definition = definitionsByKey.get(key);
    if (!definition) {
        throw new Error(`Unknown setting '${key}'`);
    }
    if (!isValidValue(definition, value)) {
        throw new Error(`Invalid value for setting '${key}': ${JSON.stringify(value)}`);
    }
    settings[key] = value;
}

export function resetSetting(key: string): void {
    setSetting(key, definitionsByKey.get(key)!.default);
}

export function isModified(key: string): boolean {
    return settings[key] !== definitionsByKey.get(key)?.default;
}

let saveTimer: ReturnType<typeof setTimeout> | undefined;
let saveErrorHandler: (error: unknown) => void = (error) => {
    throw error;
};

export function onSettingsSaveError(handler: (error: unknown) => void): void {
    saveErrorHandler = handler;
}

// Persist the settings that differ from the defaults to the account, debounced.
// Synchronous flush, so that changes made by loadUserSettings() are seen while `loading` is set.
watch(
    settings,
    () => {
        if (loading) {
            return;
        }
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
            const modified = Object.fromEntries(Object.entries(settings).filter(([key]) => isModified(key)));
            api.saveSettings(modified).catch(saveErrorHandler);
        }, 500);
    },
    { flush: "sync" },
);
