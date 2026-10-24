import { reactive } from "vue";

import { fuzzyMatch } from "./fuzzy";

export interface QuickPickItem {
    label: string;
    description?: string;
    detail?: string;
    /** Codicon name. */
    icon?: string;
    iconUrl?: string;
    keybinding?: string;
    /** Label of a separator shown above this item. */
    separator?: string;
    /** Shown even if it does not match the filter. */
    alwaysShow?: boolean;
}

export interface ShownItem {
    item: QuickPickItem;
    labelHighlights: number[];
    descriptionHighlights: number[];
}

export interface QuickInputItems {
    items: QuickPickItem[];
    /** Text the items are filtered with, or null to show them unfiltered. */
    filter: string | null;
    matchOnDescription?: boolean;
    /** Keeps the original order instead of sorting by match score. */
    keepOrder?: boolean;
    /** Replaces the placeholder (quick access modes). */
    placeholder?: string;
}

export interface QuickInputConfig {
    kind: "pick" | "input";
    title?: string;
    placeholder?: string;
    /** Message shown below the input box (input boxes only). */
    prompt?: string;
    password?: boolean;
    value?: string;
    valueSelection?: [number, number];
    getItems?: (value: string) => QuickInputItems | Promise<QuickInputItems>;
    validate?: (value: string) => string | null;
    /** Called with the active item (pick) or undefined (input). Return false to keep the quick input open. */
    onAccept: (item: QuickPickItem | undefined, value: string) => boolean | void;
    onHide: () => void;
}

export const quickInput = reactive({
    visible: false,
    kind: "pick" as "pick" | "input",
    title: undefined as string | undefined,
    placeholder: undefined as string | undefined,
    prompt: undefined as string | undefined,
    password: false,
    value: "",
    valueSelection: undefined as [number, number] | undefined,
    items: [] as ShownItem[],
    activeIndex: 0,
    validationMessage: null as string | null,
    busy: false,
    /** Incremented on each open, so the component can focus and select its input. */
    generation: 0,
});

let config: QuickInputConfig | undefined;
let itemsRequest = 0;

function filterItems(result: QuickInputItems): ShownItem[] {
    if (result.filter === null || result.filter.trim() === "") {
        return result.items.map((item) => ({ item, labelHighlights: [], descriptionHighlights: [] }));
    }
    const query = result.filter.trim().replace(/\s+/g, "");
    const matches: (ShownItem & { score: number; index: number })[] = [];
    result.items.forEach((item, index) => {
        const labelMatch = fuzzyMatch(query, item.label);
        if (labelMatch) {
            matches.push({ item, labelHighlights: labelMatch.highlights, descriptionHighlights: [], score: labelMatch.score + 10_000, index });
            return;
        }
        if (result.matchOnDescription && item.description) {
            const descriptionMatch = fuzzyMatch(query, `${item.description}/${item.label}`);
            if (descriptionMatch) {
                const descriptionLength = item.description.length + 1;
                matches.push({
                    item,
                    labelHighlights: descriptionMatch.highlights.filter((i) => i >= descriptionLength).map((i) => i - descriptionLength),
                    descriptionHighlights: descriptionMatch.highlights.filter((i) => i < item.description!.length),
                    score: descriptionMatch.score,
                    index,
                });
                return;
            }
        }
        if (item.alwaysShow) {
            matches.push({ item, labelHighlights: [], descriptionHighlights: [], score: -Infinity, index });
        }
    });
    if (!result.keepOrder) {
        matches.sort((a, b) => b.score - a.score || a.index - b.index);
    }
    // Separators only make sense in the original order.
    return matches.map(({ item, labelHighlights, descriptionHighlights }) => ({
        item: result.keepOrder ? item : { ...item, separator: undefined },
        labelHighlights,
        descriptionHighlights,
    }));
}

async function refreshItems(): Promise<void> {
    if (!config?.getItems) {
        quickInput.items = [];
        return;
    }
    const request = ++itemsRequest;
    const result = config.getItems(quickInput.value);
    if (result instanceof Promise) {
        quickInput.busy = true;
        const resolved = await result.finally(() => {
            if (request === itemsRequest) {
                quickInput.busy = false;
            }
        });
        if (request !== itemsRequest) {
            return;
        }
        applyItems(resolved);
    } else {
        applyItems(result);
    }
}

function applyItems(result: QuickInputItems): void {
    quickInput.items = filterItems(result);
    quickInput.activeIndex = 0;
    if (result.placeholder !== undefined) {
        quickInput.placeholder = result.placeholder;
    }
}

export function openQuickInput(newConfig: QuickInputConfig): void {
    if (config) {
        const previous = config;
        config = undefined;
        previous.onHide();
    }
    config = newConfig;
    Object.assign(quickInput, {
        visible: true,
        kind: newConfig.kind,
        title: newConfig.title,
        placeholder: newConfig.placeholder,
        prompt: newConfig.prompt,
        password: newConfig.password ?? false,
        value: newConfig.value ?? "",
        valueSelection: newConfig.valueSelection,
        items: [],
        activeIndex: 0,
        validationMessage: null,
        busy: false,
        generation: quickInput.generation + 1,
    });
    void refreshItems();
}

export function setQuickInputValue(value: string): void {
    quickInput.value = value;
    if (config?.kind === "input") {
        quickInput.validationMessage = config.validate?.(value) ?? null;
    }
    void refreshItems();
}

export function closeQuickInput(): void {
    if (!config) {
        return;
    }
    const closing = config;
    config = undefined;
    quickInput.visible = false;
    closing.onHide();
}

export function acceptQuickInput(index = quickInput.activeIndex): void {
    if (!config) {
        return;
    }
    const current = config;
    if (current.kind === "input") {
        const validationMessage = current.validate?.(quickInput.value) ?? null;
        quickInput.validationMessage = validationMessage;
        if (validationMessage) {
            return;
        }
    }
    const item = current.kind === "pick" ? quickInput.items[index]?.item : undefined;
    if (current.kind === "pick" && !item) {
        return;
    }
    config = undefined;
    quickInput.visible = false;
    if (current.onAccept(item, quickInput.value) === false && !config) {
        // Keep open: restore the config.
        config = current;
        quickInput.visible = true;
        return;
    }
    current.onHide();
}

export function showQuickPick<T extends QuickPickItem>(
    items: T[] | Promise<T[]>,
    options: { title?: string; placeholder?: string; matchOnDescription?: boolean; value?: string } = {},
): Promise<T | undefined> {
    return new Promise((resolve) => {
        let accepted: T | undefined;
        openQuickInput({
            kind: "pick",
            title: options.title,
            placeholder: options.placeholder,
            value: options.value,
            getItems: (value) =>
                items instanceof Promise
                    ? items.then((resolved) => ({ items: resolved, filter: value, matchOnDescription: options.matchOnDescription, keepOrder: value === "" }))
                    : { items, filter: value, matchOnDescription: options.matchOnDescription, keepOrder: value === "" },
            onAccept: (item) => {
                accepted = item as T;
            },
            onHide: () => resolve(accepted),
        });
    });
}

export function showInputBox(
    options: {
        title?: string;
        prompt?: string;
        placeholder?: string;
        value?: string;
        valueSelection?: [number, number];
        password?: boolean;
        validate?: (value: string) => string | null;
    } = {},
): Promise<string | undefined> {
    return new Promise((resolve) => {
        let accepted: string | undefined;
        openQuickInput({
            kind: "input",
            ...options,
            onAccept: (_item, value) => {
                accepted = value;
            },
            onHide: () => resolve(accepted),
        });
    });
}
