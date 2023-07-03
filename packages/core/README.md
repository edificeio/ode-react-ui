# Edifice React Core

![npm](https://img.shields.io/npm/v/@ode-react-ui/core?style=flat-square)
![bundlephobia](https://img.shields.io/bundlephobia/min/@ode-react-ui/core?style=flat-square)

## Getting Started

This library exports `OdeClientProvider` which is a React context provider to access `ode-ts-client` through an application.

It defines session, conf, user, theme to code an application.

You can have access to all these elements:

`appCode`: Current app name <br/>
`applications`: List of user's applications <br/>
`configurationFramework`: a re-export of `ode-ts-client` configurationFramework <br/>
`currentApp`: Current app object (displayName, prefix, url, ...) <br/>
`currentLanguage`: Current language used by the user <br/>
`http`: http method re-export from `ode-ts-client` <br/>
`i18n`: Method to translate i18n keys <br/>
`init`: If an app is ready or still loading <br/>
`session`: A re-export of `ode-ts-client` sessionFramework.session <br/>
`theme`: Current theme used with some utilities (basePath, bootstrapPath, skinName, ...) <br/>
`user`: User info <br/>
`userDescription`: User description <br/>
`userProfile`: User profile type <br/>

Some of them can be accessed directly with their custom hook:

`useI18n` <br/>
`useTheme` <br/>
`useUser`

## Dev

### Build

```bash
pnpm run build
```

### Lint

```bash
pnpm run lint
```

If `pnpm run lint` shows issues, run this command to fix them.

```bash
pnpm run fix
```

### Prettier

```bash
pnpm run format
```

## Structure

### Component

- Folder name always in PascalCase: `Button`
- Component file in PascalCase: `Button.tsx`
- Export types & interfaces inside Component file
- Stories file in PascalCase + `*.stories.tsx` : `Button.stories.tsx`

```bash
src
  -- <Component>Folder
    -- <Component>.tsx
    -- <Component>.stories.tsx
    -- index.ts
```

- Re-export the Component inside his own `index` file: `index.ts`
- Export everything if Component has types & interfaces

```jsx
export { default as Component } from "./Component";
export * from "./Component";
```

### Hook

- Folder name starts with `use` and written in camelCase: `useSession`
- Component file in camelCase: `useSession.ts`
- Export types & interfaces inside Hook file
- Stories file in PascalCase + `*.stories.tsx` : `useSession.stories.tsx`

```bash
src
  -- use<Hook>
    -- use<Hook>.tsx
    -- use<Hook>.stories.tsx
    -- index.ts
```

- Re-export the Hook inside his own `index` file: `index.ts`
- Export everything if Hook has types & interfaces

```jsx
export { default as useSession } from "./useSession";
export * from "./useSession";
```

### Guideline

- Always document basic guideline of Component with JSDoc format. Used by Storybook to generate documentation.

```jsx
/**
 * Primary UI component for user interaction
 */
```

### Interface description

- Always document typescript types and interface with JSDoc syntax. Used by Storybook to generate documentation.

```jsx
// Interface description (e.g: TreeViewProps.tsx)
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
- Import your component inside `index.ts` file.

```jsx
export * from "./Button";
```

## Dev

You can build your component using `Storybook`. See [README](../../docs/README.md)
