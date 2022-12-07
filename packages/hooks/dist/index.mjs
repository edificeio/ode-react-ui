import { ConfigurationFrameworkFactory, ExplorerFrameworkFactory, NotifyFrameworkFactory, TransportFrameworkFactory, SessionFrameworkFactory } from "ode-ts-client";
import { useEffect, useState, useCallback } from "react";
function useOdeFactory() {
  function conf() {
    return ConfigurationFrameworkFactory.instance();
  }
  function explore() {
    return ExplorerFrameworkFactory.instance();
  }
  function notif() {
    return NotifyFrameworkFactory.instance();
  }
  function http() {
    return TransportFrameworkFactory.instance().http;
  }
  function session() {
    return SessionFrameworkFactory.instance().session;
  }
  return {
    conf,
    explore,
    notif,
    http,
    session
  };
}
function useOdeIcons() {
  const { conf } = useOdeFactory(), iconOfWidget = {
    "last-infos-widget": "ic-widget-actualites",
    birthday: "ic-star",
    "calendar-widget": "ic-widget-calendar",
    "carnet-de-bord": "ic-widget-carnet-de-bord",
    "record-me": "ic-widget-microphone",
    mood: "ic-star",
    "my-apps": "ic-widget-apps",
    notes: "ic-widget-notes",
    "rss-widget": "ic-widget-rss",
    "bookmark-widget": "ic-widget-signets",
    qwant: "ic-widget-qwant",
    "qwant-junior": "ic-widget-qwant",
    "agenda-widget": "ic-widget-agenda",
    "cursus-widget": "ic-widget-aide-devoirs",
    "maxicours-widget": "ic-widget-maxicours",
    "school-widget": "ic-widget-schoolbook",
    universalis: "ic-widget-universalis"
  };
  function getIconCode(app) {
    const { icon } = app;
    let appCode = icon.trim().toLowerCase() || "";
    switch (appCode && appCode.length > 0 ? appCode.endsWith("-large") && (appCode = appCode.replace("-large", "")) : appCode = app.displayName.trim().toLowerCase(), appCode = conf().Platform.idiom.removeAccents(appCode), appCode) {
      case "admin.title":
        appCode = "admin";
        break;
      case "banques des savoirs":
        appCode = "banquesavoir";
        break;
      case "collaborativewall":
        appCode = "collaborative-wall";
        break;
      case "communaut\xE9s":
        appCode = "community";
        break;
      case "directory.user":
        appCode = "userbook";
        break;
      case "emploi du temps":
        appCode = "edt";
        break;
      case "messagerie":
        appCode = "conversation";
        break;
      case "news":
        appCode = "actualites";
        break;
      case "homeworks":
      case "cahier de texte":
        appCode = "cahier-de-texte";
        break;
      case "diary":
      case "cahier de texte 2d":
        appCode = "cahier-textes";
        break;
    }
    return appCode;
  }
  function isIconUrl(icon) {
    return icon && (icon.startsWith("/") || icon.startsWith("http://") || icon.startsWith("https://"));
  }
  function getIconClass(app) {
    const appCode = getIconCode(app);
    return appCode ? `color-app-${appCode}` : "color-app-default";
  }
  function getWidgetIconClass(widget) {
    return iconOfWidget[widget.platformConf.name];
  }
  return {
    getIconClass,
    getIconCode,
    getWidgetIconClass,
    isIconUrl
  };
}
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        !ref.current || ref.current.contains(event.target) || handler(event);
      };
      return document.addEventListener("mousedown", listener), document.addEventListener("touchstart", listener), () => {
        document.removeEventListener("mousedown", listener), document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}
function useThemeHelper() {
  const { conf } = useOdeFactory();
  function getPlatform() {
    return conf().Platform;
  }
  function getCDN() {
    return getPlatform().cdnDomain;
  }
  function loadThemeJs(theme) {
    const { body } = document, script = document.createElement("script");
    script.id = "themeJs", script.src = `${getPlatform().cdnDomain}/assets/themes/${theme}/js/theme.js?version=${getPlatform().deploymentTag}`, script.type = "text/javascript", body.append(script);
  }
  function removeThemeJS() {
    const script = document.getElementById("themeJS");
    return script == null ? void 0 : script.remove();
  }
  return {
    getPlatform,
    getCDN,
    loadThemeJs,
    removeThemeJS
  };
}
function useTitle() {
  const documentDefined = typeof document < "u", [title, setTitle] = useState(() => document.title);
  return useEffect(() => {
    !documentDefined || setTitle(document.title);
  }, []), {
    title
  };
}
function useToggle(initialState = !1) {
  const [state, setState] = useState(initialState), toggle = useCallback(
    () => setState((prevState) => !prevState),
    []
  );
  return [state, toggle];
}
export {
  useOdeFactory,
  useOdeIcons,
  useOnClickOutside,
  useThemeHelper,
  useTitle,
  useToggle
};
