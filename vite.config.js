import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/LeeChengwon-Portfolio",
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
