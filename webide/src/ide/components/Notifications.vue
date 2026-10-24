<script setup lang="ts">
import { computed } from "vue";

import { clearNotifications, dismissNotification, hideToast, type Notification, notifications, reportError } from "../notifications";

const MAX_TOASTS = 3;

const toasts = computed(() => notifications.list.filter((notification) => notification.toast).slice(0, MAX_TOASTS));

const icons = {
    info: "codicon-info text-info",
    warning: "codicon-warning text-warning",
    error: "codicon-error text-error",
};

function runAction(notification: Notification, run: () => unknown): void {
    dismissNotification(notification.id);
    Promise.resolve()
        .then(run)
        .catch((error) => reportError(error));
}
</script>

<template>
    <div class="pointer-events-none fixed right-3 bottom-[34px] z-40 flex w-[450px] max-w-[calc(100vw-24px)] flex-col items-stretch gap-2">
        <div
            v-if="notifications.centerVisible"
            class="pointer-events-auto flex max-h-[60vh] flex-col overflow-hidden rounded-md border border-widget-border bg-widget shadow-[0_0_8px_2px_var(--vsc-shadow)]"
        >
            <div class="flex h-[35px] shrink-0 items-center border-b border-widget-border pr-1.5 pl-3 text-[11px] uppercase">
                <span class="flex-1">{{ notifications.list.length > 0 ? "Notifications" : "No new notifications" }}</span>
                <button class="vsc-toolbar-button" title="Clear All Notifications" @click="clearNotifications"><span class="codicon codicon-clear-all" /></button>
                <button class="vsc-toolbar-button" title="Hide Notifications" @click="notifications.centerVisible = false"><span class="codicon codicon-chevron-down" /></button>
            </div>
            <div class="overflow-y-auto">
                <div v-for="notification in notifications.list" :key="notification.id" class="group flex gap-2 border-b border-widget-border px-3 py-2 last:border-b-0">
                    <span class="codicon mt-px shrink-0" :class="icons[notification.severity]" />
                    <div class="min-w-0 flex-1">
                        <p class="break-words whitespace-pre-wrap select-text">{{ notification.message }}</p>
                        <div v-if="notification.actions.length > 0" class="mt-2 flex justify-end gap-2">
                            <button v-for="action in notification.actions" :key="action.label" class="vsc-button !px-2.5 !py-0.5" @click="runAction(notification, action.run)">
                                {{ action.label }}
                            </button>
                        </div>
                    </div>
                    <button class="vsc-toolbar-button invisible shrink-0 group-hover:visible" title="Clear Notification" @click="dismissNotification(notification.id)">
                        <span class="codicon codicon-close" />
                    </button>
                </div>
            </div>
        </div>

        <template v-else>
            <div
                v-for="notification in toasts"
                :key="notification.id"
                class="group pointer-events-auto flex gap-2 rounded-md border border-widget-border bg-widget px-3 py-2.5 shadow-[0_0_8px_2px_var(--vsc-shadow)]"
            >
                <span v-if="notification.progress" class="codicon codicon-loading codicon-modifier-spin mt-px shrink-0" />
                <span v-else class="codicon mt-px shrink-0" :class="icons[notification.severity]" />
                <div class="min-w-0 flex-1">
                    <p class="max-h-[200px] overflow-y-auto break-words whitespace-pre-wrap select-text">{{ notification.message }}</p>
                    <div v-if="notification.actions.length > 0" class="mt-2 flex justify-end gap-2">
                        <button v-for="action in notification.actions" :key="action.label" class="vsc-button !px-2.5 !py-0.5" @click="runAction(notification, action.run)">
                            {{ action.label }}
                        </button>
                    </div>
                </div>
                <button v-if="!notification.progress" class="vsc-toolbar-button shrink-0 opacity-60 group-hover:opacity-100" title="Close" @click="hideToast(notification.id)">
                    <span class="codicon codicon-close" />
                </button>
            </div>
        </template>
    </div>
</template>
