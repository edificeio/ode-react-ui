export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  stylesheetToggle: {
    stylesheets: [
      {
        id: "one",
        title: "Thème ONE",
        url: "https://unpkg.com/ode-bootstrap-one@1.0.0-feat-produit.202209221151/dist/skins/default/theme.css",
      },
      {
        id: "neo",
        title: "Thème NEO",
        url: "https://unpkg.com/ode-bootstrap-neo@1.0.0-feat-produit.202209221149/dist/skins/default/theme.css",
      },
    ],
  },
};
