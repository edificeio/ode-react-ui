import { useState } from "react";

import useOdeFactory from "./useOdeFactory";

export default function useThemeHelper() {
  const { conf } = useOdeFactory();
  const [theme, setTheme] = useState() as any;
  // const [is1D, setIs1D] = useState<boolean>(false);

  /**
   *
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
   * @returns boolean
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
   * Return the path URL to the active theme, for example : /assets/themes/ode-bootstrap-neo
   * */
  async function getBootstrapThemePath(): Promise<string> {
    const { themeName } = await getPlatform().theme.onSkinReady();
    const isReady = await getPlatform().theme.onSkinReady();
    const getConf = await getPlatform().theme.getConf();

    for (const override of getConf.overriding) {
      if (override.child === themeName) {
        return `${getCDN()}/assets/themes/${override.bootstrapVersion}`;
      }
    }
    setTheme(isReady);
    return `${getCDN()}/assets/themes/${themeName}`;
  }

  async function getBootstrapSkinPath(): Promise<string> {
    const stylePath = await getBootstrapThemePath();
    return `${stylePath}/skins/${getPlatform().theme.skinName}`;
  }

  return {
    getDegreeSchool,
    getBootstrapSkinPath,
    theme,
  };
}
