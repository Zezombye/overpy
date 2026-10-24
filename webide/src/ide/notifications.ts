import { reactive } from "vue";

export type Severity = "info" | "warning" | "error";

export interface NotificationAction {
    label: string;
    run: () => unknown;
}

export interface Notification {
    id: number;
    severity: Severity;
    message: string;
    actions: NotificationAction[];
    /** Shown as a toast (bottom right) until it times out or is closed; always listed in the notification center. */
    toast: boolean;
    progress: boolean;
}

const TOAST_DURATION: Record<Severity, number | null> = { info: 10_000, warning: 15_000, error: null };
const MAX_NOTIFICATIONS = 100;

export const notifications = reactive({
    list: [] as Notification[],
    centerVisible: false,
    doNotDisturb: false,
});

let nextId = 1;

export function notify(severity: Severity, message: string, actions: NotificationAction[] = [], options: { progress?: boolean } = {}): Notification {
    const notification = reactive<Notification>({
        id: nextId++,
        severity,
        message,
        actions,
        toast: !notifications.doNotDisturb || severity === "error",
        progress: options.progress ?? false,
    });
    notifications.list.unshift(notification);
    notifications.list.splice(MAX_NOTIFICATIONS);
    const duration = TOAST_DURATION[severity];
    if (duration !== null && actions.length === 0 && !notification.progress) {
        setTimeout(() => (notification.toast = false), duration);
    }
    return notification;
}

export const showInfo = (message: string, actions?: NotificationAction[]) => notify("info", message, actions);
export const showWarning = (message: string, actions?: NotificationAction[]) => notify("warning", message, actions);
export const showError = (message: string, actions?: NotificationAction[]) => notify("error", message, actions);

/** Logs an unexpected error and shows it to the user. */
export function reportError(error: unknown, prefix = "Error"): void {
    console.error(error);
    showError(`${prefix}: ${error instanceof Error ? error.message : String(error)}`);
}

export function dismissNotification(id: number): void {
    const index = notifications.list.findIndex((notification) => notification.id === id);
    if (index >= 0) {
        notifications.list.splice(index, 1);
    }
}

export function hideToast(id: number): void {
    const notification = notifications.list.find((n) => n.id === id);
    if (notification) {
        notification.toast = false;
    }
}

export function clearNotifications(): void {
    notifications.list.splice(0);
}

/** Shows a progress notification until `task` settles. */
export async function withProgress<T>(message: string, task: () => Promise<T>): Promise<T> {
    const notification = notify("info", message, [], { progress: true });
    try {
        return await task();
    } finally {
        dismissNotification(notification.id);
    }
}
