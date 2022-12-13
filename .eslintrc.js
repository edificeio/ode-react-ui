module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "plugin:react/jsx-runtime",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "arrow-parens": "off",
    "prefer-object-spread": "off",
    "react/display-name": "off",
    "react/function-component-definition": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-console": "off",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always",
        "alphabetize": {
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
    "storybook-static",
    "svgr.config.cjs",
    "tsconfig.json",
    "vite.config.ts",
  ],
};
