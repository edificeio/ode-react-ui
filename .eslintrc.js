module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "jsx-a11y"],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "no-console": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    ".eslintrc.js",
    "*.d.ts",
    "*.docs.mdx",
    "*.stories.tsx",
    "dist",
    "node_modules",
    "prettier.config.js",
    "public",
    "svgr.config.cjs",
    "tsconfig.json",
    "vite.config.ts",
  ],
};
