module.exports = {
  root: true,
  extends: ["@ode-react-ui/eslint-config-custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
