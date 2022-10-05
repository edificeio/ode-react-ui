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
yarn pretty
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

## Lerna

[Lerna Documentation](https://lerna.js.org/docs/features/run-tasks)

- To add a new dependency to a package, use `lerna add` to do so:

[@lerna/add](https://github.com/lerna/lerna/tree/main/commands/add#readme)

```bash
yarn lerna add <dep> --dev --exact
```

- If you want start a command (`build`, `lint`, ...) for a specific package from root folder, add `--scope` option:

[--scope](https://lerna.js.org/docs/features/run-tasks#run-a-single-task)

```bash
yarn <command> --scope=@ode-react-ui/core
```

## NX

[Cache Tasks](https://lerna.js.org/docs/features/cache-tasks)

If any command (`build`, `lint`, ...) was successful, NX will cache the result and not retry the task if no change has occurred. See [nx.json](./nx.json)

> Nx read the output from the cache instead of running the command for 1 out of 2 tasks.
