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
- [Lerna](https://lerna.js.org/docs/getting-started)
- [Storybook](https://storybook.js.org/)

## Getting Started

### Install

Install the project locally:

```bash
yarn
```

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

## Storybook

> Start Storybook on port 6006

```bash
yarn storybook
```

## Turborepo

[Turborepo](https://turborepo.org/)

### Github Actions

[Github Actions](https://turborepo.org/docs/ci/github-actions)
[Versioning and Publishing](https://turborepo.org/docs/handbook/publishing-packages/versioning-and-publishing)

## License

This project is licensed under the AGPL-3.0 license.
