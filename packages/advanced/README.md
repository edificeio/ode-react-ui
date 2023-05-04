# Open Digital Education React Advanced Components

![npm](https://img.shields.io/npm/v/@ode-react-ui/advanced?style=flat-square)
![bundlephobia](https://img.shields.io/bundlephobia/min/@ode-react-ui/advanced?style=flat-square)

## Getting Started

We follow [WAI ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/) rules and [Bootstrap 5](https://getbootstrap.com/docs/5.0/components/accordion/) guidelines when making our components

### Build

```bash
yarn build
```

### Lint

```bash
yarn lint
```

If `yarn lint` shows issues, run the next command to fix them.

```bash
yarn fix
```

### Prettier

```bash
yarn format
```

This command starts `format:check` + `format:write`

## Structure

### Component Folder

- Folder name always in PascalCase: `TreeView`
- Component file in PascalCase: `TreeView.tsx`
- Export types & interfaces inside Component file
- Stories file in PascalCase + `*.stories.tsx` : `TreeView.stories.tsx`

```bash
src
  -- ComponentFolder
    -- Component.tsx
    -- Component.stories.tsx
    -- index.ts
```

- Re-export the Component inside his own `index` file: `index.tsx`
- Export everything if Component has types & interfaces

```jsx
export { default as Component } from "./Component";
export * from "./Component";
```

### Component Guideline

- Always document basic guideline of Component with JSDoc format. Used by Storybook to generate documentation.

```jsx
/**
 * TreeView component for file system navigation
 */
```

### Interface description

- Always document typescript types and interface with JSDoc syntax. Used by Storybook to generate documentation.

```jsx
// Interface description (e.g: TreeViewProps.tsx)
export interface RenderTree {
  /**
   * @param id : node's id
   */
  id: string;
  /**
   * @param name : name's id
   */
  name: string;
  /**
   * Is this node contains children ?
   */
  children?: readonly RenderTree[];
}
```

### Index file inside `src` folder

- Entry point of this React Library.
- Import your component inside `index.ts` file.

```jsx
export * from "./Button";
```

## Dev

You can build your component using `Storybook`. See [README](../../apps/docs/README.md)
