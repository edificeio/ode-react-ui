import useOdeFactory from "./useOdeFactory";
import { IWebApp, IWidget, WidgetName } from "./utils/useOdeTsClient";

export type AppCode = string | null;

export interface UseAppIconsProps {
  /**
   * appCode from application. If doesn't exist, defaultIcon is served.
   */
  appCode?: AppCode;
  /**
   * defaultIcon must be a string from @ode-react-ui/icons
   */
  defaultIcon?: string;
}

export default function useOdeIcons() {
  const { conf } = useOdeFactory();
  /**
   * Map between widget name and its icon name
   */
  const iconOfWidget: { [name in WidgetName]: string } = {
    "last-infos-widget": "ic-widget-actualites",
    "birthday": "ic-star", // FIXME obviously wrong => create missing icon in CSS
    "calendar-widget": "ic-widget-calendar",
    "carnet-de-bord": "ic-widget-carnet-de-bord",
    "record-me": "ic-widget-microphone",
    "mood": "ic-star", // FIXME obviously wrong => create missing icon in CSS
    "my-apps": "ic-widget-apps",
    "notes": "ic-widget-notes",
    "rss-widget": "ic-widget-rss",
    "bookmark-widget": "ic-widget-signets",
    "qwant": "ic-widget-qwant",
    "qwant-junior": "ic-widget-qwant",
    "agenda-widget": "ic-widget-agenda",
    "cursus-widget": "ic-widget-aide-devoirs",
    "maxicours-widget": "ic-widget-maxicours",
    "school-widget": "ic-widget-schoolbook",
    "universalis": "ic-widget-universalis",
  };
  /**
   * Map between apps and their CSS code.
   * @param app
   */
  function getIconCode(app: IWebApp): string {
    const { icon } = app;
    let appCode = icon.trim().toLowerCase() || "";
    if (appCode && appCode.length > 0) {
      if (appCode.endsWith("-large")) appCode = appCode.replace("-large", "");
    } else {
      appCode = app.displayName.trim().toLowerCase();
    }
    appCode = conf().Platform.idiom.removeAccents(appCode);
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
    return `color-app-default`;
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
    getIconCode,
    getWidgetIconClass,
    isIconUrl,
  };
}
