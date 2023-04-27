import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import reactRefresh from "vite-plugin-react-refresh";

export default defineConfig({
    plugins: [
        react(),
        reactRefresh({
            parserPlugins: [],
            transformPlugins: ["babel-plugin-jsx-advanced"],
        }),
    ],

    css: {
        preprocessorOptions: {
            sass: {
                implementation: sass,
            },
        },
    },
});
