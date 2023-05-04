// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import dts from "vite-plugin-dts";
// import { resolve } from "path";
// import pkg from "./package.json";

/* export default defineConfig({
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        nav: resolve(__dirname, "src/nav/index.ts"),
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    dts({
      insertTypesEntry: false,
      outputDir: "dist",
    }),
  ],
}); */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import pkg from "./package.json";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  esbuild: {
    minifyIdentifiers: false,
  },
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: ["src/index.ts", "src/nav/index.ts"],
      external: [
        ...Object.keys(pkg.peerDependencies),
        "@ode-react-ui/icons/nav",
      ],
      output: [
        {
          dir: "dist",
          format: "esm",
          preserveModules: true,
          preserveModulesRoot: "src",
          sourcemap: true,
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.js`;
          },
        },
      ],
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    visualizer(),
    dts(),
  ],
});
