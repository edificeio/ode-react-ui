import { type IWidget, WidgetName, IWebApp } from "ode-ts-client";

export default function useOdeIcons() {
  /**
   * Map between widget name and its icon name
   */
  const iconOfWidget: { [name in WidgetName]: string } = {
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
    "universalis-widget": "ic-widget-universalis",
    "briefme-widget": "ic-widget-briefme",
  };
  /**
   * Map between apps and their CSS code.
   * @param app
   */
  function getIconCode(app: IWebApp): string {
    let appCode = app?.icon.trim().toLowerCase() || "";
    if (appCode && appCode.length > 0) {
      if (appCode.endsWith("-large")) appCode = appCode.replace("-large", "");
    } else {
      appCode = app.displayName.trim().toLowerCase();
    }
    // appCode = configurationFramework.Platform.idiom.removeAccents(appCode);
    // @see distinct values for app's displayName is in query /auth/oauth2/userinfo
    switch (appCode) {
      case "admin.title":
        appCode = "admin";
        break;
      case "banques des savoirs":
        appCode = "banquesavoir";
        break;
      case "collaborativewall":
        appCode = "collaborative-wall";
        break;
      case "communautés":
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
      default:
        break;
    }
    return appCode;
  }

  function isIconUrl(icon: string): string | boolean {
    return (
      icon &&
      (icon.startsWith("/") ||
        icon.startsWith("http://") ||
        icon.startsWith("https://"))
    );
  }

  /**
   *
   * @param app
   * @return the CSS class used to style icons
   */
  function getIconClass(app: IWebApp): string {
    const appCode = getIconCode(app);
    if (appCode) return `color-app-${appCode}`;
    return `color-app-placeholder`;
  }
  /**
   *
   * @param app
   * @return the CSS class used to style icons
   */
  function getBackgroundIconClass(app: IWebApp): string {
    const appCode = getIconCode(app);
    if (appCode) return `bg-app-${appCode}`;
    return `bg-app-placeholder`;
  }

  /**
   *
   * @param app
   * @return the CSS class used to style icons
   */
  function getBackgroundLightIconClass(app: IWebApp): string {
    const appCode = getIconCode(app);
    if (appCode) return `bg-light-${appCode}`;
    return `bg-light-placeholder`;
  }

  /**
   *
   * @param widget
   * @return the CSS class of a widget
   */
  function getWidgetIconClass(widget: IWidget): string {
    return iconOfWidget[widget.platformConf.name];
  }

  return {
    getIconClass,
    getBackgroundIconClass,
    getBackgroundLightIconClass,
    getIconCode,
    getWidgetIconClass,
    isIconUrl,
  };
}
