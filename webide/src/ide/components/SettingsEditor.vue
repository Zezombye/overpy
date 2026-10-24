<script setup lang="ts">
import { computed, reactive, ref } from "vue";

import { isModified, resetSetting, type SettingDefinition, setSetting, settingDefinitions, settings } from "../../lib/settings";

const query = ref("");
/** Invalid values typed in number inputs, kept until corrected. */
const invalidInputs = reactive(new Map<string, string>());

const sections = computed(() => {
    const filter = query.value.trim().toLowerCase();
    const bySection = new Map<string, SettingDefinition[]>();
    for (const definition of settingDefinitions) {
        if (filter && ![definition.key, definition.title, definition.description, definition.section].some((text) => text.toLowerCase().includes(filter))) {
            continue;
        }
        const list = bySection.get(definition.section) ?? [];
        list.push(definition);
        bySection.set(definition.section, list);
    }
    return [...bySection.entries()];
});

function onNumberInput(definition: SettingDefinition, raw: string): void {
    const value = Number(raw);
    const { minimum, maximum } = definition;
    if (raw.trim() === "" || !Number.isFinite(value) || (minimum !== undefined && value < minimum) || (maximum !== undefined && value > maximum)) {
        invalidInputs.set(
            definition.key,
            `Value must be a number${minimum !== undefined ? ` greater than or equal to ${minimum}` : ""}${maximum !== undefined ? `${minimum !== undefined ? " and" : ""} less than or equal to ${maximum}` : ""}.`,
        );
        return;
    }
    invalidInputs.delete(definition.key);
    setSetting(definition.key, value);
}

function reset(definition: SettingDefinition): void {
    invalidInputs.delete(definition.key);
    resetSetting(definition.key);
}
</script>

<template>
    <div class="flex flex-col overflow-hidden bg-editor select-text">
        <div class="mx-auto w-full max-w-[1000px] shrink-0 px-6 pt-3 pb-2">
            <input v-model="query" class="vsc-input h-[30px] w-full text-[14px]" placeholder="Search settings" spellcheck="false" />
            <p class="mt-2 text-[12px] text-fg-muted">Settings are saved in your account and apply to all your projects.</p>
        </div>
        <div class="min-h-0 flex-1 overflow-y-auto">
            <div class="mx-auto w-full max-w-[1000px] px-6 pb-10">
                <p v-if="sections.length === 0" class="py-6 text-fg-muted">No settings found.</p>
                <section v-for="[section, definitions] in sections" :key="section">
                    <h2 class="mt-4 mb-1 text-[26px] font-semibold text-fg-strong">{{ section }}</h2>
                    <div
                        v-for="definition in definitions"
                        :key="definition.key"
                        class="group relative -mx-3 rounded-sm px-3 py-2.5 hover:bg-[color-mix(in_srgb,var(--vsc-fg)_4%,transparent)]"
                    >
                        <span v-if="isModified(definition.key)" class="absolute top-3 bottom-3 left-0 w-[2px] bg-modified" />
                        <div class="mb-1 flex items-center gap-2">
                            <span class="font-semibold text-fg-strong">
                                <span class="text-fg">{{ definition.section }}: </span>{{ definition.title }}
                            </span>
                            <button v-if="isModified(definition.key)" class="vsc-toolbar-button opacity-0 group-hover:opacity-100" title="Reset Setting" @click="reset(definition)">
                                <span class="codicon codicon-discard" />
                            </button>
                        </div>

                        <label v-if="definition.type === 'boolean'" class="flex cursor-pointer items-start gap-2 text-fg-muted">
                            <input
                                type="checkbox"
                                class="vsc-checkbox mt-px shrink-0"
                                :checked="settings[definition.key] as boolean"
                                @change="setSetting(definition.key, ($event.target as HTMLInputElement).checked)"
                            />
                            <span>{{ definition.description }}</span>
                        </label>
                        <template v-else>
                            <p class="mb-1.5 text-fg-muted">{{ definition.description }}</p>
                            <select
                                v-if="definition.type === 'enum'"
                                class="vsc-select min-w-[200px]"
                                :value="settings[definition.key]"
                                @change="setSetting(definition.key, ($event.target as HTMLSelectElement).value)"
                            >
                                <option v-for="(option, index) in definition.enum" :key="option" :value="option" :title="definition.enumDescriptions?.[index]">
                                    {{ option }}{{ definition.enumDescriptions?.[index] && definition.enumDescriptions[index] !== option ? ` — ${definition.enumDescriptions[index]}` : "" }}
                                </option>
                            </select>
                            <template v-else-if="definition.type === 'number'">
                                <input
                                    type="number"
                                    class="vsc-input w-[200px]"
                                    :class="invalidInputs.has(definition.key) ? '!border-error' : ''"
                                    :value="settings[definition.key]"
                                    :min="definition.minimum"
                                    :max="definition.maximum"
                                    @input="onNumberInput(definition, ($event.target as HTMLInputElement).value)"
                                />
                                <p v-if="invalidInputs.has(definition.key)" class="mt-1 w-fit border border-error bg-error-bg px-1.5 py-0.5 text-[12px]">
                                    {{ invalidInputs.get(definition.key) }}
                                </p>
                            </template>
                            <input
                                v-else
                                class="vsc-input w-full max-w-[500px]"
                                :value="settings[definition.key]"
                                spellcheck="false"
                                @change="setSetting(definition.key, ($event.target as HTMLInputElement).value)"
                            />
                        </template>
                        <p class="mt-1 text-[11px] text-fg-muted opacity-0 group-hover:opacity-70">{{ definition.key }}</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
