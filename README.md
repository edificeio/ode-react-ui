# ODE React UI

Open Digital Education Frontend Library with ReactJS

## What is inside?

Ode React UI is a Monorepo containing:

- [Config](./config/README.md): Shared configuration by all packages
- [Core](./packages/core/README.md): React Core Components
- [Icons](./packages/icons/README.md): React Icons Components Library
- [Hooks](./packages/hooks/README.md): React Hooks Library
- [Advanced](./packages/advanced/README.md): Advanced or Complex Components (e.g: TreeView, Rich Editor, ...)

Many tools are already configured like:

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [Lerna](https://lerna.js.org/docs/getting-started)

## Getting Started

### Install

Install the project locally:

```bash
yarn install
```

### Lint

> Lint all packages from root folder

```bash
yarn lint
```

### Prettier

> Prettier all packages from root folder

```bash
yarn pretty
```

## Build

> Build all packages from root folder

```bash
yarn build
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
