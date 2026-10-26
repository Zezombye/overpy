<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";

import overpyIconUrl from "../../../img/overpy.png?url";
import { AUTH_PROVIDER_NAMES, type ProjectSummary, validateProjectName } from "../../shared/api";
import UserAvatar from "../components/UserAvatar.vue";
import { api, oauthStartUrl } from "../lib/api";
import { formatRelativeTime } from "../lib/format";
import { ideUrl, navigate } from "../lib/router";
import { linkableProviders, logout, session, takeAuthError } from "../lib/session";
import { getSetting } from "../lib/settings";
import {
    importIntoNewProject,
    type ImportResult,
    notDecompiledMessage,
    parseWorkshopCodesExport,
    pickFile,
    projectNameForFile,
    type WorkshopCodesImport,
} from "../lib/workshopCodesImport";

const projects = ref<ProjectSummary[] | null>(null);
const error = ref<string | null>(takeAuthError());
const newName = ref("");
const creating = ref(false);
const renamingId = ref<string | null>(null);
const renameValue = ref("");
const deletingId = ref<string | null>(null);
const busyId = ref<string | null>(null);
const renameInput = ref<HTMLInputElement[]>([]);

function showError(e: unknown): void {
    console.error(e);
    error.value = e instanceof Error ? e.message : String(e);
}

async function refresh(): Promise<void> {
    try {
        projects.value = (await api.listProjects()).projects;
    } catch (e) {
        showError(e);
    }
}

function open(project: ProjectSummary): void {
    // Full page load: the IDE owns global state (Monaco, workers) for the lifetime of the page.
    location.assign(ideUrl(project.id));
}

async function create(): Promise<void> {
    const name = newName.value.trim();
    const validationError = validateProjectName(name);
    if (validationError) {
        error.value = validationError;
        return;
    }
    creating.value = true;
    error.value = null;
    try {
        const { project } = await api.createProject(name);
        open(project);
    } catch (e) {
        showError(e);
        creating.value = false;
    }
}

// Import of a workshop.codes export: pick the file, then confirm the project name.
const pendingImport = ref<{ imported: WorkshopCodesImport; name: string; decompile: boolean } | null>(null);
const importProgress = ref<string | null>(null);
// Shown after an import where some files could not be decompiled.
const importReport = ref<ImportResult | null>(null);

async function chooseImportFile(): Promise<void> {
    error.value = null;
    importReport.value = null;
    try {
        const file = await pickFile(".json,application/json");
        if (file) {
            pendingImport.value = { imported: parseWorkshopCodesExport(await file.text()), name: projectNameForFile(file), decompile: false };
        }
    } catch (e) {
        showError(e);
    }
}

async function confirmImport(): Promise<void> {
    const pending = pendingImport.value!;
    const name = pending.name.trim();
    const validationError = validateProjectName(name);
    if (validationError) {
        error.value = validationError;
        return;
    }
    error.value = null;
    try {
        const result = await importIntoNewProject(
            name,
            pending.imported,
            { decompile: pending.decompile, language: getSetting<string>("overpy.workshopLanguage") },
            (message) => (importProgress.value = message),
        );
        if (result.notDecompiled.length === 0) {
            open(result.project);
            return;
        }
        importReport.value = result;
        pendingImport.value = null;
        await refresh();
    } catch (e) {
        showError(e);
        await refresh();
    } finally {
        importProgress.value = null;
    }
}

async function startRename(project: ProjectSummary): Promise<void> {
    renamingId.value = project.id;
    renameValue.value = project.name;
    deletingId.value = null;
    await nextTick();
    renameInput.value[0]?.select();
}

async function confirmRename(project: ProjectSummary): Promise<void> {
    const name = renameValue.value.trim();
    if (name === project.name) {
        renamingId.value = null;
        return;
    }
    const validationError = validateProjectName(name);
    if (validationError) {
        error.value = validationError;
        return;
    }
    busyId.value = project.id;
    error.value = null;
    try {
        await api.renameProject(project.id, name);
        renamingId.value = null;
        await refresh();
    } catch (e) {
        showError(e);
    } finally {
        busyId.value = null;
    }
}

async function confirmDelete(project: ProjectSummary): Promise<void> {
    busyId.value = project.id;
    error.value = null;
    try {
        await api.deleteProject(project.id);
        deletingId.value = null;
        await refresh();
    } catch (e) {
        showError(e);
    } finally {
        busyId.value = null;
    }
}

async function signOut(): Promise<void> {
    try {
        await logout();
        navigate("/login", { replace: true });
    } catch (e) {
        showError(e);
    }
}

onMounted(refresh);
</script>

<template>
    <div class="flex h-full flex-col bg-sidebar">
        <header class="flex h-12 shrink-0 items-center gap-3 border-b border-border bg-titlebar px-5">
            <img :src="overpyIconUrl" alt="" class="h-6 w-6" />
            <span class="text-[15px] text-fg-strong">OverPy IDE</span>
            <span class="flex-1" />
            <a
                v-for="provider in linkableProviders()"
                :key="provider"
                class="vsc-link mr-2 text-[12px]"
                :href="oauthStartUrl(provider, { next: '/', link: true })"
                :title="`Also sign in to this account with ${AUTH_PROVIDER_NAMES[provider]}`"
            >
                Link {{ AUTH_PROVIDER_NAMES[provider] }}
            </a>
            <UserAvatar :user="session.user" />
            <span>{{ session.user?.name }}</span>
            <button class="vsc-button-secondary ml-2" @click="signOut">Sign out</button>
        </header>

        <main class="flex-1 overflow-auto">
            <div class="mx-auto max-w-3xl px-5 py-8">
                <h1 class="mb-1 text-2xl font-light text-fg-strong">Projects</h1>
                <p class="mb-6 text-fg-muted">Each project is a workspace folder, saved online with your account.</p>

                <form class="mb-6 flex gap-2" @submit.prevent="create">
                    <input v-model="newName" class="vsc-input flex-1" placeholder="New project name" maxlength="64" :disabled="creating" />
                    <button type="submit" class="vsc-button" :disabled="creating || newName.trim() === ''">
                        {{ creating ? "Creating…" : "Create project" }}
                    </button>
                    <button type="button" class="vsc-button-secondary" :disabled="importProgress !== null" @click="chooseImportFile">Import from workshop.codes…</button>
                </form>

                <form v-if="pendingImport" class="mb-6 rounded-md border border-border bg-editor p-4" @submit.prevent="confirmImport">
                    <p class="mb-3">
                        {{ pendingImport.imported.fileCount }} workshop file{{ pendingImport.imported.fileCount === 1 ? "" : "s" }} will be imported into a new
                        project, in the workshop.codes order.
                        <template v-if="pendingImport.imported.hasTranslations"> Translations are not imported.</template>
                    </p>
                    <label class="mb-3 flex cursor-pointer items-start gap-2">
                        <input v-model="pendingImport.decompile" type="checkbox" class="vsc-checkbox mt-px shrink-0" :disabled="importProgress !== null" />
                        <span>
                            Decompile the workshop files into OverPy files
                            <span class="block text-fg-muted">
                                The workshop.codes syntax (mixins, @for, @if...) is expanded. Files that cannot be decompiled, and files that only define
                                mixins, are kept as workshop files.
                            </span>
                        </span>
                    </label>
                    <div class="flex gap-2">
                        <input v-model="pendingImport.name" class="vsc-input flex-1" placeholder="Project name" maxlength="64" :disabled="importProgress !== null" />
                        <button type="submit" class="vsc-button" :disabled="importProgress !== null || pendingImport.name.trim() === ''">
                            {{ importProgress ?? "Import" }}
                        </button>
                        <button type="button" class="vsc-button-secondary" :disabled="importProgress !== null" @click="pendingImport = null">Cancel</button>
                    </div>
                </form>

                <div v-if="importReport" class="mb-6 rounded-md border border-warning bg-editor p-4">
                    <p class="mb-2">
                        <strong class="text-fg-strong">{{ importReport.project.name }}</strong> was imported, but
                        {{ importReport.notDecompiled.length }} file{{ importReport.notDecompiled.length === 1 ? "" : "s" }} could not be decompiled and
                        {{ importReport.notDecompiled.length === 1 ? "was" : "were" }} kept as workshop files (.ow):
                    </p>
                    <pre class="mb-3 max-h-60 overflow-auto rounded-sm bg-sidebar p-2 text-[12px] whitespace-pre-wrap select-text">{{
                        notDecompiledMessage(importReport.notDecompiled)
                    }}</pre>
                    <div class="flex gap-2">
                        <button class="vsc-button" @click="open(importReport.project)">Open project</button>
                        <button class="vsc-button-secondary" @click="importReport = null">Close</button>
                    </div>
                </div>

                <p v-if="error" class="mb-4 rounded-sm border border-error bg-error-bg px-3 py-2">{{ error }}</p>

                <p v-if="projects === null && !error" class="text-fg-muted">Loading projects…</p>
                <p v-else-if="projects && projects.length === 0" class="rounded-md border border-dashed border-border p-8 text-center text-fg-muted">
                    You don't have any projects yet. Create one above to get started.
                </p>
                <ul v-else-if="projects" class="divide-y divide-border overflow-hidden rounded-md border border-border bg-editor">
                    <li v-for="project in projects" :key="project.id" class="group flex min-h-14 items-center gap-3 px-4 py-2 hover:bg-list-hover">
                        <span class="codicon codicon-folder text-[18px] text-fg-muted" />
                        <template v-if="renamingId === project.id">
                            <form class="flex flex-1 gap-2" @submit.prevent="confirmRename(project)">
                                <input
                                    ref="renameInput"
                                    v-model="renameValue"
                                    class="vsc-input flex-1"
                                    maxlength="64"
                                    :disabled="busyId === project.id"
                                    @keydown.escape="renamingId = null"
                                />
                                <button type="submit" class="vsc-button" :disabled="busyId === project.id">Rename</button>
                                <button type="button" class="vsc-button-secondary" @click="renamingId = null">Cancel</button>
                            </form>
                        </template>
                        <template v-else-if="deletingId === project.id">
                            <span class="flex-1">
                                Delete <strong class="text-fg-strong">{{ project.name }}</strong> and all its files? This cannot be undone.
                            </span>
                            <button class="vsc-button !bg-[var(--vsc-error)]" :disabled="busyId === project.id" @click="confirmDelete(project)">Delete</button>
                            <button class="vsc-button-secondary" @click="deletingId = null">Cancel</button>
                        </template>
                        <template v-else>
                            <button class="flex flex-1 flex-col items-start text-left" @click="open(project)">
                                <span class="text-[14px] text-fg-strong group-hover:underline">{{ project.name }}</span>
                                <span class="text-xs text-fg-muted">
                                    {{ project.fileCount }} file{{ project.fileCount === 1 ? "" : "s" }} · updated {{ formatRelativeTime(project.updatedAt) }}
                                </span>
                            </button>
                            <button class="vsc-toolbar-button opacity-0 group-hover:opacity-100 focus:opacity-100" title="Rename" @click="startRename(project)">
                                <span class="codicon codicon-edit" />
                            </button>
                            <button
                                class="vsc-toolbar-button opacity-0 group-hover:opacity-100 focus:opacity-100"
                                title="Delete"
                                @click="
                                    deletingId = project.id;
                                    renamingId = null;
                                "
                            >
                                <span class="codicon codicon-trash" />
                            </button>
                        </template>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>
