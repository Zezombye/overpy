<script setup lang="ts">
import { ref } from "vue";

import type { User } from "../../shared/api";

defineProps<{ user: User | null; size?: number }>();

// Provider avatar URLs can expire (e.g. after an avatar change): fall back to the generic icon.
const failed = ref(false);
</script>

<template>
    <img
        v-if="user?.avatarUrl && !failed"
        :src="user.avatarUrl"
        alt=""
        referrerpolicy="no-referrer"
        class="shrink-0 rounded-full"
        :style="{ width: `${size ?? 18}px`, height: `${size ?? 18}px` }"
        @error="failed = true"
    />
    <span v-else class="codicon codicon-account shrink-0" :style="{ fontSize: `${size ?? 18}px` }" />
</template>
