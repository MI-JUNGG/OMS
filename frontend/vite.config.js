import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import sass from "sass";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "react-redux":
                "/Users/joyunhwan/Desktop/OMS/frontend/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js",
        },
    },

    css: {
        preprocessorOptions: {
            sass: {
                implementation: sass,
            },
        },
    },
});
