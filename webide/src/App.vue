<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref, watchEffect } from "vue";

import { navigate, route } from "./lib/router";
import { loadSession, session } from "./lib/session";
import { settings } from "./lib/settings";
import LoginView from "./views/LoginView.vue";
import ProjectsView from "./views/ProjectsView.vue";

// The IDE pulls in Monaco and the language client: only load it when needed.
const IdeView = defineAsyncComponent(() => import("./views/IdeView.vue"));

const loaded = ref(false);
const loadError = ref<string | null>(null);

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const systemDark = ref(prefersDark.matches);
prefersDark.addEventListener("change", () => (systemDark.value = prefersDark.matches));

watchEffect(() => {
    const dark = session.user ? settings["workbench.colorTheme"] !== "Light Modern" : systemDark.value;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
});

const view = computed(() => {
    if (!session.user) {
        return "login";
    }
    return route.value.name;
});

function reload(): void {
    location.reload();
}

onMounted(async () => {
    try {
        const loggedIn = await loadSession();
        if (!loggedIn && route.value.name !== "login") {
            navigate(`/login?next=${encodeURIComponent(location.pathname)}`, { replace: true });
        } else if (loggedIn && route.value.name === "login") {
            navigate("/", { replace: true });
        }
    } catch (error) {
        console.error(error);
        loadError.value = error instanceof Error ? error.message : String(error);
    }
    loaded.value = true;
});
</script>

<template>
    <div v-if="loadError" class="flex h-full items-center justify-center p-8">
        <div class="max-w-lg text-center">
            <h1 class="mb-2 text-lg text-fg-strong">Could not reach the OverPy IDE server</h1>
            <p class="mb-4 text-fg-muted">{{ loadError }}</p>
            <button class="vsc-button" @click="reload">Retry</button>
        </div>
    </div>
    <template v-else-if="loaded">
        <LoginView v-if="view === 'login'" />
        <ProjectsView v-else-if="view === 'projects'" />
        <IdeView v-else-if="view === 'ide' && route.name === 'ide'" :project-id="route.projectId" />
        <div v-else class="flex h-full flex-col items-center justify-center gap-3">
            <p class="text-fg-muted">Page not found.</p>
            <a class="vsc-link" href="/" @click.prevent="navigate('/')">Back to projects</a>
        </div>
    </template>
</template>
