import { defineConfig } from "vite";

export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
