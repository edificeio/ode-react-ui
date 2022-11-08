# Open Digital Education React Icons Library

![npm](https://img.shields.io/npm/v/@ode-react-ui/icons?style=flat-square)
![bundlephobia](https://img.shields.io/bundlephobia/min/@ode-react-ui/icons?style=flat-square)

## Getting Started

Use Vite [Library mode](https://vitejs.dev/guide/build.html#library-mode) configuration files from [Config](../../config/README.md) to build the library.

### First

- Add a new `*.svg` to assets
- Name of `*.svg` file should be in camelCase (e.g: `addUser`)

### Build

```bash
yarn build
```

- Create all React Icons Components based on `*.svg` files inside `assets` folder and import them all inside `index.tsx` file
- Generate a `dist` folder with `index` files (ESM + CJS)
- Generate `*.d.ts` for every component and index files

### Lint

```bash
yarn lint
```

Use Eslint configuration file from [Config](../../config/README.md) to check all files inside `src` folder.

```bash
yarn fix
```

If `yarn lint` shows issues, run this command to fix them.

### Prettier

```bash
yarn format
```

This command starts `format:check` + `format:write` using Prettier configuration file from [Config](../../config/README.md).

## Dev

You can test your Icon Component using `Storybook` or `Playground`. See [README]()

## Icons List

[List](LIST.md)
