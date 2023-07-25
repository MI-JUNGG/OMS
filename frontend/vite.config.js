import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
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
<<<<<<< HEAD
    base: "./frontend",
=======
    base: "/frontend",
>>>>>>> 3170cf79be882b890797569f26617d180654a3b0
});
