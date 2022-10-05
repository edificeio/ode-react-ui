export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssresources: [
    {
      id: `one`,
      // code: `<link rel="stylesheet" type="text/css" href="http://localhost:8090/assets/themes/ode-bootstrap-one/skins/default/theme.css"></link>`,
      code: `<link rel="stylesheet" type="text/css" href="https://unpkg.com/ode-bootstrap-one@1.0.0-feat-produit.202209221151/dist/skins/default/theme.css"></link>`,
      picked: false,
    },

    {
      id: `neo`,
      // code: `<link rel="stylesheet" type="text/css" href="http://localhost:8090/assets/themes/ode-bootstrap-neo/skins/default/theme.css"></link>`,
      code: `<link rel="stylesheet" type="text/css" href="https://unpkg.com/ode-bootstrap-neo@1.0.0-feat-produit.202209221149/dist/skins/default/theme.css"></link>`,
      picked: true,
    },
  ],
  options: {
    selectedPanel: "storybook/cssresources/panel",
  },
};
