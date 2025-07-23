import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // 👇 Important fallback to index.html for all routes
  preview: {
    port: 5173,
  },
  // 👇 Enable fallback routing
  appType: 'spa',
});
