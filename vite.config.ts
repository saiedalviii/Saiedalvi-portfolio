import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages serves this repository from its project path.
  base: process.env.GITHUB_ACTIONS ? "/Saiedalvi-portfolio/" : "/",
});
