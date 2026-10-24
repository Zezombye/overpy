import { reactive } from "vue";

export interface DialogOptions {
    message: string;
    detail?: string;
    severity?: "info" | "warning" | "error";
    /** The first button is the primary one. */
    buttons: string[];
    /** Index returned when the dialog is dismissed (Escape). Defaults to the last button. */
    cancelId?: number;
}

export const dialog = reactive({
    current: null as (DialogOptions & { resolve: (index: number) => void }) | null,
});

/** Shows a modal dialog and resolves to the index of the clicked button. */
export function showDialog(options: DialogOptions): Promise<number> {
    if (dialog.current) {
        dialog.current.resolve(dialog.current.cancelId ?? dialog.current.buttons.length - 1);
    }
    return new Promise((resolve) => {
        dialog.current = {
            ...options,
            resolve: (index) => {
                dialog.current = null;
                resolve(index);
            },
        };
    });
}

export async function confirm(message: string, detail: string | undefined, confirmLabel: string): Promise<boolean> {
    return (await showDialog({ message, detail, severity: "warning", buttons: [confirmLabel, "Cancel"] })) === 0;
}

/** The decompile dialog, which needs a multi-line text area. */
export const decompileDialog = reactive({
    visible: false,
});
