import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import port from "../backendPort";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            "/api": {
                target: port,
                changeOrigin: true,
            },
        },
    },
});
