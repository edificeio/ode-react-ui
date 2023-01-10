import useOdeFactory from "./useOdeFactory";

export default function useOdeBootstrap() {
  const { getPlatform, getCdn } = useOdeFactory();

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
   * e.g: cg77
   */
  /* async function getThemeName(): Promise<string> {
    const theme = await platform().theme.onSkinReady();

    return theme?.skin;
  } */

  /**
   * Theme
   * @returns the path URL to the active theme, for example : /assets/themes/ode-bootstrap-neo
   * */
  async function getBootstrapThemePath(): Promise<string> {
    const { themeName } = await getPlatform().theme.onSkinReady();
    const getConf = await getPlatform().theme.getConf();

    for (const override of getConf.overriding) {
      if (override.child === themeName) {
        return `${getCdn()}/assets/themes/${override.bootstrapVersion}`;
      }
    }
    return `${getCdn()}/assets/themes/${themeName}`;
  }

  /**
   * Theme
   * @returns the path of images in ode-boostrap
   */
  function getOdeBootstrapImages() {
    return "/assets/themes/ode-bootstrap/images";
  }

  /**
   * Theme
   * @returns the path of apps icons in ode-boostrap
   */
  function getOdeBootstrapIcons() {
    return "/assets/themes/ode-bootstrap/icons";
  }

  /**
   * Theme
   * @returns the complete CSS string path
   */
  async function getOdeBoostrapThemePath(): Promise<string> {
    const stylePath = await getBootstrapThemePath();
    const { skinName } = getPlatform().theme;
    return `${stylePath}/skins/${skinName}/theme.css`;
  }

  return {
    getDegreeSchool,
    getOdeBoostrapThemePath,
    getOdeBootstrapIcons,
    getOdeBootstrapImages,
  };
}
