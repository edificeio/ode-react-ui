# @ode-react-ui/core

Open Digital Education React Core Components

![npm](https://badgen.net/npm/v/@ode-react-ui/core)
![bundlephobia](https://badgen.net/bundlephobia/minzip/@ode-react-ui/core)

## Getting Started

We follow [WAI ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) rules and [Bootstrap 5](https://getbootstrap.com/docs/5.0/components/accordion/) guidelines when making our components

### Build

```bash
yarn build
```

Use Vite [Library mode](https://vitejs.dev/guide/build.html#library-mode) configuration file from `config` workspace and TypeScript to build the library.

- Will generate a `dist` folder with `index` files (ESM + CJS)
- Will generate `*.d.ts` for every component and index files

### Lint

```bash
yarn lint
```

Use Eslint configuration file from `config` workspace to check all files inside `src` folder.

```bash
yarn fix
```

If `yarn lint` shows issues, run this command to fix them.

### Prettier

```bash
yarn format
```

This command starts `format:check` + `format:write` using Prettier configuration file from `config` workspace.

## Structure

### Component Folder

- Folder name always in PascalCase: `Button`
- Component file in PascalCase: `Button.tsx`
- Component types & interface: `ButtonProps.tsx`
- Stories file in PascalCase + stories extension : `Button.stories.tsx`

```bash
src
  -- ComponentFolder
    -- Component.tsx
    -- Component.stories.tsx
    -- ComponentProps.tsx
    -- index.tsx
```

- Import the Component inside his own `index` file: `index.tsx`

```jsx
export { default as Component } from "./Component";
```

### Component Guideline

Always add JSDoc syntax to Component file linking to :

- Storybook Doc
- Github Source file
- WAI-ARIA Component page if exists

```jsx
/**
 * Button Component
 *
 * @see Docs     Storybook Link
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/master/libs/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
```

### Component Syntax

#### Component description

- Always document basic guideline of Component. Used by Storybook to generate documentation.

```jsx
/**
 * Primary UI component for user interaction
 */
```

#### Interface description

- Always document typescript types and interface with JSDoc syntax. Used by Storybook to generate documentation.

```jsx
// Interface description (e.g: ButtonProps.tsx)
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
```

### Index file inside `src` folder

- Entry point of this React Library.
- Import your component inside `index.tsx` file.

```jsx
// Components
export { Button } from "./Button";
```

## Dev

You can build your component using `Storybook` or `Playground`. See [README]()

## Components Roadmap

[Roadmap](ROADMAP.md)
