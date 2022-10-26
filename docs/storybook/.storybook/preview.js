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
        url: "assets/themes/ode-bootstrap-one.css",
      },
      {
        id: "neo",
        title: "Thème NEO",
        url: "assets/themes/ode-bootstrap-neo.css",
      },
    ],
  },
};
