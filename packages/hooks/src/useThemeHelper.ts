import useOdeFactory from "./useOdeFactory";

export default function useThemeHelper() {
  const { conf } = useOdeFactory();

  /**
   * Get Platform using conf shorthand
   */
  function getPlatform() {
    return conf().Platform;
  }

  /**
   * Get the configured CDN URL root.
   */
  function getCDN() {
    return getPlatform().cdnDomain;
  }

  /**
   * Get Degree School
   * @returns true if degree is 1D or false if is 2D
   */
  async function getDegreeSchool(): Promise<boolean> {
    const { themeName } = await getPlatform().theme.onSkinReady();
    const getConf = await getPlatform().theme.getConf();

    for (const override of getConf.overriding) {
      if (override.child === themeName) {
        return override.parent === "panda";
      }
    }
    return false;
  }

  /**
   * Theme
   * @returns a string with the current skin path
   */

  async function getThemeName(): Promise<string> {
    const theme = await getPlatform().theme.onSkinReady();
    /* const getConf = await getPlatform().theme.getConf(); */

    return theme?.skin;
  }

  /**
   * Theme
   * @returns the path URL to the active theme, for example : /assets/themes/ode-bootstrap-neo
   * */
  async function getBootstrapThemePath(): Promise<string> {
    const { themeName } = await getPlatform().theme.onSkinReady();
    const getConf = await getPlatform().theme.getConf();

    for (const override of getConf.overriding) {
      if (override.child === themeName) {
        return `${getCDN()}/assets/themes/${override.bootstrapVersion}`;
      }
    }
    return `${getCDN()}/assets/themes/${themeName}`;
  }

  /**
   * Theme
   * @returns the complete string path with skin
   */
  async function getBootstrapSkinPath(): Promise<string> {
    const stylePath = await getBootstrapThemePath();
    return `${stylePath}/skins/${getPlatform().theme.skinName}`;
  }

  return {
    getDegreeSchool,
    getBootstrapSkinPath,
    getThemeName,
  };
}
