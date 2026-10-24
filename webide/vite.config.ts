import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    server: {
        port: 5173,
        strictPort: true,
        // The API is served by `wrangler dev` (see scripts/dev.mjs).
        proxy: {
            "/api": "http://127.0.0.1:8787",
        },
        fs: {
            // The IDE imports the grammar, language configuration, icons and settings from the OverPy repository root.
            allow: [".."],
        },
    },
    build: {
        target: "es2022",
        chunkSizeWarningLimit: 10_000,
    },
    worker: {
        format: "es",
    },
});
