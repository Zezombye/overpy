<script setup lang="ts">
import { onMounted, ref } from "vue";

import overpyIconUrl from "../../../img/overpy.png?url";
import { AUTH_PROVIDER_NAMES, type AuthProvider, type ProvidersResponse } from "../../shared/api";
import { api, oauthStartUrl } from "../lib/api";
import { ideUrl, LOCAL_PROJECT_ID } from "../lib/router";

const query = new URLSearchParams(location.search);
const error = ref<string | null>(query.get("error"));
const config = ref<ProvidersResponse | null>(null);

const providerClasses: Record<AuthProvider, string> = {
    battlenet: "bg-[#148eff] text-white hover:bg-[#0074e0]",
    discord: "bg-[#5865f2] text-white hover:bg-[#4752c4]",
    google: "border border-[#dadce0] bg-white text-[#3c4043] hover:bg-[#f7f8f8]",
};

function nextPath(): string {
    const next = query.get("next");
    return next && next.startsWith("/") && !next.startsWith("//") && next !== "/login" ? next : "/";
}

function signIn(provider: AuthProvider): void {
    location.assign(oauthStartUrl(provider, { next: nextPath() }));
}

onMounted(async () => {
    try {
        config.value = await api.providers();
    } catch (e) {
        console.error(e);
        error.value = e instanceof Error ? e.message : String(e);
    }
});
</script>

<template>
    <div class="flex h-full items-center justify-center overflow-auto bg-sidebar p-4">
        <div class="w-full max-w-sm rounded-md border border-border bg-editor p-8 shadow-xl">
            <div class="mb-7 flex flex-col items-center gap-3">
                <img :src="overpyIconUrl" alt="" class="h-14 w-14" />
                <h1 class="text-xl font-light text-fg-strong">OverPy IDE</h1>
            </div>

            <p v-if="error" class="mb-4 rounded-sm border border-error bg-error-bg px-2.5 py-1.5 break-words">{{ error }}</p>

            <p v-if="config === null && !error" class="text-center text-fg-muted">Loading…</p>
            <p v-else-if="config && config.providers.length === 0" class="text-center text-fg-muted">
                No sign-in method is configured on this server. Set the Battle.net, Discord and/or Google OAuth secrets (see webide/README.md).
            </p>
            <div v-else-if="config" class="flex flex-col gap-2.5">
                <button
                    v-for="provider in config.providers"
                    :key="provider"
                    class="h-10 rounded-[4px] text-[14px] font-medium"
                    :class="providerClasses[provider]"
                    @click="signIn(provider)"
                >
                    Continue with {{ AUTH_PROVIDER_NAMES[provider] }}
                </button>
            </div>

            <div class="my-5 flex items-center gap-3 text-fg-muted">
                <span class="flex-1 border-t border-border" />
                <span>or</span>
                <span class="flex-1 border-t border-border" />
            </div>
            <!-- A page load: the IDE's state lives as long as the page. -->
            <a class="vsc-button-secondary flex h-10 w-full items-center justify-center rounded-[4px] text-[14px]" :href="ideUrl(LOCAL_PROJECT_ID)">Use Without Account</a>
            <p class="mt-2 text-center text-[12px] text-fg-muted">You get a single project, stored in this browser only.</p>
        </div>
    </div>
</template>
