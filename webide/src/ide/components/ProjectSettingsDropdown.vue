<script setup lang="ts">
import { computed } from "vue";

import { PROJECT_SETTINGS, type ProjectSettingDefinition, projectSettingValue } from "../../../shared/projectSettings";
import { setProjectSetting, workspace } from "../workspace";
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
</script>

<template>
    <TitleBarDropdown title="Project Settings: compiler directives for the whole project" align="right" panel-class="w-[440px]">
        <template #button>
            <span class="codicon codicon-settings text-[16px]" />
            <span>Project Settings</span>
            <span v-if="enabledCount > 0" class="rounded-full bg-badge px-1.5 text-[11px] leading-[16px] text-badge-fg">{{ enabledCount }}</span>
        </template>
        <p class="border-b border-widget-border px-3 py-2 text-[12px] text-fg-muted">
            Compiler directives added before the project's files (which can override them, e.g. with <code>#!disableOptimizeStrict</code>). Saved in the project.
        </p>
        <div class="max-h-[65vh] overflow-y-auto px-3 pb-3">
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
        </div>
    </TitleBarDropdown>
</template>
