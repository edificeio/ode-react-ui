# ODE React UI

Open Digital Education Frontend Library with ReactJS

## What is inside?

Ode React UI is a Monorepo containing:

- [Advanced](./packages/advanced/README.md): Advanced Components Library (TreeView, Rich Editor, ...)
- [Core](./packages/core/README.md): Core Components Library (Button, Header, ...)
- [Hooks](./packages/hooks/README.md): Hooks Library
- [Icons](./packages/icons/README.md): Icons Library
- [Storybook](./apps/docs/README.md): Storybook documentation

Many tools are already configured like:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [Turborepo](https://turborepo.org/)
- [Storybook](https://storybook.js.org/)

---

## Getting Started

### Install

> ⚠️ Before starting any development, please read the [CONTRIBUTION](./CONTRIBUTING.md) GUIDE.

```bash
yarn
```

> The script build will be run as a pre-install script so you can use each library

## Dev

Any available commands during your development.

### Lint

> Lint all libs from root folder

```bash
yarn lint
```

### Prettier

> Prettier all libs from root folder

```bash
yarn format
```

### Clean

> Clean all node_modules and lock file.

```bash
yarn clean
```

### Build

> Build all libs from root folder

```bash
yarn build
```

---

## Storybook

> Start Storybook on port 6006

```bash
yarn docs
```

> If you want to work inside a React Application, start the playground.

```bash
yarn playground
```

---

## [Turborepo](https://turborepo.org/)

### Cache

Turborepo will cache `build`, `lint`, `fix` and `format` results. So if no changes is detected and you run one command again, Turborepo will read from the cache and only apply the task on new changes.

### Versioning and Publishing

- [Versioning and Publishing](https://turborepo.org/docs/handbook/publishing-packages/versioning-and-publishing)

## Github Actions

- [Github Actions](https://turborepo.org/docs/ci/github-actions)

---

## License

This project is licensed under the AGPL-3.0 license.
