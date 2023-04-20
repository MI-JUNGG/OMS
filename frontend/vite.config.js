import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import sass from "sass";

export default defineConfig({
    plugins: [react()],

    css: {
        preprocessorOptions: {
            sass: {
                implementation: sass,
            },
        },
    },
});
