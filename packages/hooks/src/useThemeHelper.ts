import useOdeFactory from "./useOdeFactory";

export default function useThemeHelper() {
  const { conf } = useOdeFactory();

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
   * Return the path URL to the active theme, for example : /assets/themes/ode-bootstrap-neo
   * */
  /* async function getBootstrapThemePath(): Promise<string> {
    const theme = getPlatform().theme.themeName;
    const getConf = await getPlatform().theme.getConf();
    for (let override of getConf.overriding) {
      if (override.child === theme) {
        return `${getCDN()}/assets/themes/${override.bootstrapVersion}`;
      }
    }
    return `${getCDN()}/assets/themes/${theme}`;
  } */

  /* async function getBootstrapSkinPath(): Promise<string> {
    const stylePath = await getBootstrapThemePath();
    return `${stylePath}/skins/${getPlatform().theme.skinName}`;
  } */

  /**
   * Extracted from an old code base.
   * */
  /* function toSkinUrl(url: string): string {
    const theme = document.getElementById("theme");
    const path = getPlatform().theme.basePath;

    if (!theme.attr("href")) {
      return "";
    }
    if (
      url.indexOf("http://") === -1 &&
      url.indexOf("https://") === -1 &&
      url.indexOf("/workspace/") === -1
    ) {
      return path + url;
    }
    return url;
  } */

  /**
   * Load the JS of a derived theme (skin)
   */
  function loadThemeJs(theme: string) {
    const { body } = document;
    const script = document.createElement("script");

    script.id = "themeJs";
    script.src = `${
      getPlatform().cdnDomain
    }/assets/themes/${theme}/js/theme.js?version=${
      getPlatform().deploymentTag
    }`;
    script.type = "text/javascript";

    body.append(script);
  }

  function removeThemeJS() {
    const script = document.getElementById("themeJS");
    return script?.remove();
  }

  return {
    getPlatform,
    getCDN,
    loadThemeJs,
    removeThemeJS,
  };
}
