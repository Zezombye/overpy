<script setup lang="ts">
import { computed, ref } from "vue";

import { PROJECT_SETTINGS, type ProjectSettingDefinition, projectSettingValue } from "../../../shared/projectSettings";
import { ideUrl } from "../../lib/router";
import { reportError, showInfo } from "../notifications";
import { setProjectPublic, setProjectSetting, workspace } from "../workspace";
import TitleBarDropdown from "./TitleBarDropdown.vue";

const sections = computed(() => {
    const result = new Map<string, ProjectSettingDefinition[]>();
    for (const definition of PROJECT_SETTINGS) {
        result.set(definition.section, [...(result.get(definition.section) ?? []), definition]);
    }
    return [...result];
});

const value = (definition: ProjectSettingDefinition) => projectSettingValue(workspace.settings, definition);

/** Settings that only apply if another one is enabled are greyed out otherwise. */
function isInactive(definition: ProjectSettingDefinition): boolean {
    const required = PROJECT_SETTINGS.find((candidate) => candidate.key === definition.requires);
    return required !== undefined && projectSettingValue(workspace.settings, required) !== true;
}

const enabledCount = computed(() => PROJECT_SETTINGS.filter((definition) => !isInactive(definition) && value(definition) !== false && value(definition) !== "" && value(definition) !== "none").length);

const publicLink = computed(() => (workspace.project ? new URL(ideUrl(workspace.project.id), location.origin).href : ""));
const changingPublic = ref(false);

function togglePublic(isPublic: boolean): void {
    changingPublic.value = true;
    setProjectPublic(isPublic)
        .catch((error) => reportError(error))
        .finally(() => (changingPublic.value = false));
}

function copyLink(): void {
    navigator.clipboard
        .writeText(publicLink.value)
        .then(() => showInfo("Copied the link of the project."))
        .catch((error) => reportError(error));
}
</script>

<template>
    <TitleBarDropdown title="Project Settings: sharing, and compiler directives for the whole project" align="right" panel-class="w-[440px]">
        <template #button>
            <span class="codicon codicon-settings text-[16px]" />
            <span>Project Settings</span>
            <span v-if="enabledCount > 0" class="rounded-full bg-badge px-1.5 text-[11px] leading-[16px] text-badge-fg">{{ enabledCount }}</span>
        </template>
        <div class="border-b border-widget-border px-3 py-2.5">
            <p v-if="workspace.readOnly" class="text-fg-muted">This project belongs to another user: it is read only.</p>
            <template v-else>
                <label class="flex cursor-pointer items-start gap-2">
                    <input type="checkbox" class="vsc-checkbox mt-px shrink-0" :checked="workspace.public" :disabled="changingPublic" @change="togglePublic(($event.target as HTMLInputElement).checked)" />
                    <span>
                        <span class="font-semibold text-fg-strong">Make Project Public</span>
                        <span class="block text-[12px] text-fg-muted">Anyone with the link can view the project, even without an account. Only you can modify it.</span>
                    </span>
                </label>
                <div v-if="workspace.public" class="mt-2 flex gap-1">
                    <input class="vsc-input h-[26px] min-w-0 flex-1 select-all" :value="publicLink" readonly @focus="($event.target as HTMLInputElement).select()" />
                    <button class="vsc-button-secondary h-[26px] shrink-0 px-2" @click="copyLink">Copy Link</button>
                </div>
            </template>
        </div>
        <p class="px-3 pt-2 text-[12px] text-fg-muted">
            Compiler directives added before the project's files (which can override them, e.g. with <code>#!disableOptimizeStrict</code>).
        </p>
        <fieldset class="max-h-[60vh] min-w-0 overflow-y-auto px-3 pb-3" :disabled="workspace.readOnly">
            <section v-for="[section, definitions] in sections" :key="section">
                <h3 class="mt-3 mb-1 text-[11px] font-bold tracking-wide text-fg-muted uppercase">{{ section }}</h3>
                <div v-for="definition in definitions" :key="definition.key" class="py-1.5" :class="isInactive(definition) ? 'opacity-50' : ''">
                    <label v-if="definition.type === 'boolean'" class="flex cursor-pointer items-start gap-2">
                        <input
                            type="checkbox"
                            class="vsc-checkbox mt-px shrink-0"
                            :checked="value(definition) === true"
                            @change="setProjectSetting(definition.key, ($event.target as HTMLInputElement).checked)"
                        />
                        <span>
                            <span class="font-semibold text-fg-strong">{{ definition.title }}</span>
                            <span class="block text-[12px] text-fg-muted">{{ definition.description }}</span>
                        </span>
                    </label>
                    <template v-else>
                        <div class="font-semibold text-fg-strong">{{ definition.title }}</div>
                        <div class="mb-1 text-[12px] text-fg-muted">{{ definition.description }}</div>
                        <select
                            v-if="definition.type === 'select'"
                            class="vsc-select w-full"
                            :value="value(definition)"
                            @change="setProjectSetting(definition.key, ($event.target as HTMLSelectElement).value)"
                        >
                            <option v-for="option in definition.options" :key="option.value" :value="option.value">{{ option.label }}</option>
                        </select>
                        <input
                            v-else
                            class="vsc-input h-[26px] w-full"
                            :value="value(definition)"
                            :placeholder="definition.placeholder"
                            spellcheck="false"
                            @input="setProjectSetting(definition.key, ($event.target as HTMLInputElement).value)"
                        />
                    </template>
                </div>
            </section>
        </fieldset>
    </TitleBarDropdown>
</template>
