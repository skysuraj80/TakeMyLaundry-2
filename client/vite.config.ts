import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // map "@" to <repo-root>/client/src
      "@": path.resolve(__dirname, "src")
    }
  }
});
