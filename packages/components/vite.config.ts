import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { dependencies, peerDependencies } from "./package.json";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@ode-react-ui/components",
        replacement: resolve(__dirname, "src"),
      },
    ],
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    minify: false,
    target: "esnext", // use w/e here but don't set it too loose
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
      },
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
        "react/jsx-runtime",
        "@ode-react-ui/icons/nav",
      ],
    },
  },
  plugins: [react(), dts(), visualizer()],
});
