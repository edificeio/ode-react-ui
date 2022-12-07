# Open Digital Education React Icons Library

![npm](https://img.shields.io/npm/v/@ode-react-ui/icons?style=flat-square)
![bundlephobia](https://img.shields.io/bundlephobia/min/@ode-react-ui/icons?style=flat-square)

## Getting Started

Use Vite [Library mode](https://vitejs.dev/guide/build.html#library-mode).

### First

- Add a new `*.svg` to assets

### Build

```bash
yarn build
```

- Create all React Icons Components based on `*.svg` files from `assets` folder and import them all inside `index.tsx` file
- Generate a `dist` folder with `index` files (ESM + CJS)
- Generate `*.d.ts` for every component and index files

### Lint

```bash
yarn lint
```

```bash
yarn fix
```

If `yarn lint` shows issues, run this command to fix them.

### Prettier

```bash
yarn format
```

This command starts `format:check` + `format:write`

## Dev

You can test your Icon Component using `Storybook` or `Playground`. See [README](../../apps/docs/README.md)

## Icons List

[List](LIST.md)
