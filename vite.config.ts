import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js", // ← これが超重要
  },
  base: "/kyun65-react-miniapp04/",
});
