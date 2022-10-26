# ODE React UI

Open Digital Education Frontend Library with ReactJS

## What is inside?

Ode React UI is a Monorepo containing:

- [Config](./config/README.md): Shared configuration by all libs
- [Core](./libs/core/README.md): Core Components Library (e.g: Button, Header, ...)
- [Icons](./libs/icons/README.md): Icons Library
- [Hooks](./libs/hooks/README.md): Hooks Library
- [Advanced](./libs/advanced/README.md): Advanced Components Library (e.g: TreeView, Rich Editor, ...)

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

> Clean all node_modules symlink + node_modules + yarn.lock

```bash
yarn clean
```

### Build

> Build all libs from root folder

```bash
yarn build
```

### Pre-commit

> Lint + format all files from libs

When committing, husky handles `pre-commit`

```bash
yarn pre-commit
```

---

## Storybook

> Start Storybook on port 6006

```bash
yarn dev-storybook
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
