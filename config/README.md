# @ode-react-ui/config

Shared config between packages

- [Eslint Configuration](https://eslint.org/)
  - `base.js` is the main configuration file for Eslint
  - `eslint.js` is used by all packages except `@ode-react-ui/icons`
  - `eslint.icons.js` is used only by `@ode-react-ui/icons` due to separate rules
- [Prettier Configuration](https://prettier.io/)
  - `.prettierrc.json` is the main configuration file for Prettier
- [TypeScript Configuration](https://www.typescriptlang.org/)
  - `base.json` is the main configuration file for TypeScript
- [Vite Configuration](https://vitejs.dev/)
  - `vite.config.ts` is the main file used by all lib packages except storybook
