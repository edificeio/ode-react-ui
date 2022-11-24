import { useOdeFactory } from "./useOdeFactory";

// import { conf } from "../utils";

export const useThemeHelper = () => {
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
};

export default useThemeHelper;

// export class ThemeHelperService {
//     static $inject =["odeNgHelperService"];
//     }

//     /** Apply a theme from its URL */
//     async applyStyle( stylePath:string ) {
//         if( stylePath && stylePath.length > 0 && stylePath.lastIndexOf('/', stylePath.length-1) !== stylePath.length-1 )
//             stylePath += "/";
//         stylePath = `${stylePath}theme.css?version=${this.platform.deploymentTag}`;
//         if($('#theme').length === 0) {
//             const style = angular.element(
//                 `<link rel="stylesheet"
//                     type="text/css"
//                     href="${stylePath}"
//                     id="theme"
//                     crossorigin="anonymous" />`
//             );
//             var favicon = angular.element(
//                 `<link rel="icon" href="${this.platform.theme.basePath}img/illustrations/favicon.ico" />`
//             );
//             style.on('load', e => {
//                 $('body').show();
//             });
//             $('head')
//                 .append(style)
//                 .append(favicon);
//             setTimeout(function () {
//                 $('body').show();
//             }, 300);
//         }
//         else {
//             $('#theme').attr('href', stylePath);
//         }
//     }

//     /** @return list of available derived themes (skins) for the user. */
//     listThemes():Promise<IThemeDesc[]> {
//         return this.platform.theme.listThemes();
//     }

//     /** Apply a derived theme (skin) and save it as prefered, then update the data in cache. */
//     async setTheme( theme:IThemeDesc ) {
//         let stylePath = await this.getBootstrapThemePath();
//         this.applyStyle( `${stylePath}/skins/${theme._id}` );
//         this.platform.theme.setDefaultTheme( theme );
//     }

//
// }
