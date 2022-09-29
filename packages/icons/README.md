# @ode-react-ui/icons

Open Digital Education React Icons Components Library

## Getting Started

### Build

```bash
yarn build
```

Use Vite [Library mode](https://vitejs.dev/guide/build.html#library-mode) configuration files from [Config](../../config/README.md) to build the library.

- Create all React Icons Components based on `*.svg` files inside `assets` folder and import them all inside `index.tsx` file
- Generate a `dist` folder with `index` files (ESM + CJS)
- Generate `*.d.ts` for every component and index files

### Lint

```bash
yarn lint
```

Use Eslint configuration file from [Config](../../config/README.md) to check all files inside `src` folder.

```bash
yarn lint:fix
```

If `yarn lint` shows issues, run this command to fix them.

### Prettier

```bash
yarn pretty
```

This command starts `prettier:check` + `prettier:write` using Prettier configuration file from [Config](../../config/README.md).

## Dev

You can test your Icon Component using `Storybook` or `Playground`. See [README]()

## Icons List

[List](LIST.md)
