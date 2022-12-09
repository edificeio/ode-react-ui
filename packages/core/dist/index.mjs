import React, { useState, useEffect, createContext, useContext, forwardRef, useMemo } from "react";
import { ConfigurationFrameworkFactory, ExplorerFrameworkFactory, NotifyFrameworkFactory, TransportFrameworkFactory, SessionFrameworkFactory } from "ode-ts-client";
import { Loader, RafterDown } from "@ode-react-ui/icons";
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
function useTitle() {
  const documentDefined = typeof document < "u", [title, setTitle] = useState(() => document.title);
  return useEffect(() => {
    !documentDefined || setTitle(document.title);
  }, []), {
    title
  };
}
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const AppCardContext = createContext({
  icon: "",
  displayName: "Application",
  code: "placeholder"
});
function useAppCardContext() {
  const context = useContext(AppCardContext);
  if (!context)
    throw new Error(
      "AppCard compound components cannot be rendered outside the AppCard component"
    );
  return context;
}
const AppIcon = ({
  title,
  size = "24",
  color = "currentColor",
  ...props
}) => {
  const { isIconUrl } = useOdeIcons(), { code, displayName, icon } = useAppCardContext(), classes = clsx("icon", code || "");
  return isIconUrl(icon) ? /* @__PURE__ */ React.createElement("img", { src: icon, alt: displayName, width: size, height: size }) : /* @__PURE__ */ React.createElement(
    "svg",
    {
      width: size,
      height: size,
      fill: color,
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      className: classes,
      ...props
    },
    title ? /* @__PURE__ */ React.createElement("title", null, title) : null,
    /* @__PURE__ */ React.createElement("use", { xlinkHref: `apps.svg#${code || "placeholder"}` })
  );
};
AppIcon.displayName = "AppCard.Icon";
const AppIcon$1 = AppIcon, Heading = forwardRef(
  ({
    level: Component = "h1",
    headingStyle = "h1",
    children,
    ...restProps
  }, ref) => /* @__PURE__ */ React.createElement(Component, { ref, className: headingStyle, ...restProps }, children)
);
Heading.displayName = "Heading";
const Heading$1 = Heading, Root = forwardRef(
  ({
    app,
    as,
    children,
    headingStyle,
    isHeading = !1,
    level,
    variant = "title",
    ...restProps
  }, ref) => {
    const { getIconClass, getIconCode } = useOdeIcons(), { name } = app, displayName = name || "Application", classes = clsx(
      "app-card app-card-react",
      {
        "app-card-title": variant === "title"
      },
      getIconClass(app)
    ), value = useMemo(
      () => ({
        icon: app.icon,
        displayName: app.name,
        code: getIconCode(app)
      }),
      []
    ), Component = as || "div";
    return /* @__PURE__ */ React.createElement(AppCardContext.Provider, { value }, /* @__PURE__ */ React.createElement(Component, { ref, className: classes, ...restProps }, children, isHeading ? /* @__PURE__ */ React.createElement(Heading$1, { level, headingStyle }, displayName) : /* @__PURE__ */ React.createElement("p", null, displayName)));
  }
), AppCard = Object.assign({}, Root, {
  Icon: AppIcon$1
});
AppCard.displayName = "AppCard";
const AppCard$1 = AppCard, Loading = forwardRef(
  (props, ref) => {
    const {
      loading,
      loadingIcon,
      loadingPosition = "left",
      children,
      ...restProps
    } = props, getLoadingIcon = () => {
      let icon;
      return loadingIcon ? icon = loadingIcon : icon = /* @__PURE__ */ React.createElement(Loader, { ...restProps, "aria-label": "Loading" }), icon;
    }, classes = clsx("loading", {
      "is-loading": loading
    });
    return /* @__PURE__ */ React.createElement("div", { className: classes, role: "status", ref }, (!loadingPosition || loadingPosition === "left") && getLoadingIcon(), children, loadingPosition === "right" && getLoadingIcon());
  }
);
Loading.displayName = "Loading";
const Loading$1 = Loading, Button = forwardRef((props, ref) => {
  const {
    color = "primary",
    children,
    loading = !1,
    loadingIcon,
    loadingPosition,
    leftIcon,
    rightIcon,
    variant = "filled",
    ariaLabel,
    ...restProps
  } = props, classes = clsx("btn", {
    "btn-icon": !children,
    [`btn-filled btn-${color}`]: variant === "filled",
    [`btn-${variant}-${color}`]: variant === "outline" || variant === "ghost",
    "btn-loading": loading
  });
  return /* @__PURE__ */ React.createElement("button", { ref, className: classes, "aria-label": ariaLabel, ...restProps }, loading ? /* @__PURE__ */ React.createElement(
    Loading$1,
    {
      loading: !0,
      loadingIcon,
      loadingPosition
    },
    children
  ) : /* @__PURE__ */ React.createElement("span", null, leftIcon, children, rightIcon));
});
Button.displayName = "Button";
const Button$1 = Button, SvgCommunity = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M19.935 17.51c.725 0 1.348.264 1.868.792.52.529.78 1.162.78 1.898 0 .737-.26 1.37-.78 1.898-.52.529-1.135.793-1.844.793-.71 0-1.333-.264-1.869-.793a2.52 2.52 0 0 1-.78-1.922c0-.288.063-.6.19-.936l-3.997-2.931c-.773.8-1.703 1.2-2.79 1.2-1.089 0-2.019-.392-2.791-1.176-.773-.785-1.167-1.738-1.183-2.86 0-.143.024-.352.071-.624l-3.168-1.057a1.248 1.248 0 0 1-.852.337c-.378 0-.693-.129-.946-.385a1.315 1.315 0 0 1-.378-.96c0-.385.126-.698.378-.938.253-.24.568-.368.946-.384.316 0 .584.104.804.312.221.208.37.457.45.745l3.192 1.08a3.798 3.798 0 0 1 1.443-1.56 3.839 3.839 0 0 1 2.033-.577c.82 0 1.577.248 2.27.745l4.706-4.781c-.252-.48-.378-.921-.378-1.321 0-.737.26-1.37.78-1.898.52-.529 1.143-.793 1.869-.793.725 0 1.34.264 1.844.793.505.528.765 1.16.78 1.898a2.417 2.417 0 0 1-.78 1.873c-.536.513-1.159.777-1.868.793-.41 0-.844-.136-1.3-.408l-4.707 4.804c.49.705.733 1.474.733 2.307 0 .592-.134 1.177-.402 1.753l3.997 2.907c.52-.416 1.08-.624 1.679-.624Z",
      fill: "currentColor"
    }
  )
), SvgCommunity$1 = SvgCommunity, SvgDisconnect = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M22.995 13.153c0 1.393-.29 2.722-.872 3.987a10.627 10.627 0 0 1-2.336 3.292c-.975.929-2.147 1.665-3.516 2.21-1.369.544-2.79.817-4.26.817-1.472 0-2.9-.273-4.287-.817-1.386-.545-2.55-1.281-3.49-2.21a12.338 12.338 0 0 1-2.362-3.291A8.11 8.11 0 0 1 1 13.152c0-1.634.385-3.164 1.155-4.589.77-1.425 1.848-2.634 3.234-3.627.411-.289.873-.4 1.386-.337.514.064.907.289 1.181.673.308.368.428.793.36 1.273-.07.48-.309.857-.72 1.13a6.993 6.993 0 0 0-2.155 2.426 6.383 6.383 0 0 0-.18 5.717 6.98 6.98 0 0 0 1.566 2.186c.65.609 1.428 1.097 2.335 1.466a7.498 7.498 0 0 0 2.85.552 7.31 7.31 0 0 0 2.823-.552 8.296 8.296 0 0 0 2.36-1.466 6.04 6.04 0 0 0 1.567-2.186c.359-.849.547-1.738.564-2.666 0-1.09-.256-2.107-.77-3.051-.513-.945-1.232-1.754-2.156-2.427a1.752 1.752 0 0 1-.719-1.129c-.085-.464.035-.889.36-1.273.29-.384.693-.609 1.206-.673.514-.064.967.048 1.36.337 1.386.977 2.464 2.186 3.234 3.627a9.599 9.599 0 0 1 1.155 4.589ZM13.833 2.846v8.6c0 .465-.18.866-.54 1.202-.359.336-.786.505-1.283.505-.496 0-.932-.169-1.309-.505-.376-.336-.556-.737-.539-1.201v-8.6c0-.465.18-.865.54-1.202.359-.336.795-.504 1.308-.504.514 0 .941.168 1.284.504.342.337.521.737.539 1.201Z",
      fill: "currentColor"
    }
  )
), SvgDisconnect$1 = SvgDisconnect, SvgHome = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M20.584 13.536v7.458c0 .28-.098.512-.294.699a1.062 1.062 0 0 1-.667.307H13.91v-5.978h-3.817V22H4.383a.848.848 0 0 1-.668-.307 1.162 1.162 0 0 1-.293-.699v-7.569l8.567-7.375 8.568 7.375c.018.018.027.055.027.111Zm3.31-1.09-.908 1.146a.543.543 0 0 1-.32.168h-.054a.59.59 0 0 1-.32-.084L11.989 4.682 1.687 13.676a.505.505 0 0 1-.347.084.544.544 0 0 1-.32-.168l-.935-1.145a.524.524 0 0 1-.08-.363.589.589 0 0 1 .16-.335l10.703-9.33c.32-.28.694-.419 1.121-.419.427 0 .81.14 1.148.419l3.63 3.156V2.56c0-.15.044-.27.133-.363a.458.458 0 0 1 .347-.14h2.856c.143 0 .258.046.347.14a.504.504 0 0 1 .134.363v6.34l3.256 2.85c.107.074.16.186.16.335 0 .149-.036.27-.107.363Z",
      fill: "currentColor"
    }
  )
), SvgHome$1 = SvgHome, SvgMyApps = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M1.898 22.555c-.072-.145-.096-1.37-.048-2.691l.048-2.402h5.261v5.26l-2.595.049c-1.994.048-2.594 0-2.666-.216Zm7.76 0c-.049-.145-.073-1.37-.049-2.691l.072-2.402h5.238v5.26l-2.571.049c-2.018.048-2.595 0-2.69-.216Zm7.759 0c-.048-.145-.072-1.37-.048-2.691l.072-2.402h5.237v5.26l-2.57.049c-1.994.048-2.595 0-2.691-.216Zm-15.52-7.76c-.071-.168-.095-1.37-.047-2.69l.048-2.403h5.261v5.261l-2.595.048c-1.994.048-2.594 0-2.666-.216Zm7.76 0c-.048-.168-.072-1.37-.048-2.69l.072-2.403h5.238v5.261l-2.571.048c-2.018.048-2.595 0-2.69-.216Zm7.76 0c-.048-.168-.072-1.37-.048-2.69l.072-2.403h5.237v5.261l-2.57.048c-1.994.048-2.595 0-2.691-.216ZM1.897 7.011c-.071-.144-.095-1.345-.047-2.666l.048-2.402h5.261V7.18l-2.595.072c-1.994.048-2.594 0-2.666-.24Zm7.76 0c-.048-.144-.072-1.345-.048-2.666l.072-2.402h5.238V7.18l-2.571.072c-2.018.048-2.595 0-2.69-.24Zm7.76 0c-.048-.144-.072-1.345-.048-2.666l.072-2.402h5.237V7.18l-2.57.072c-1.994.048-2.595 0-2.691-.24Z",
      fill: "currentColor"
    }
  )
), SvgMyApps$1 = SvgMyApps, SvgNeoAssistance = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM7.123 7.667C8.276 5.958 9.745 5 12.013 5 14.425 5 17 6.941 17 9.5c0 2.113-1.377 2.932-2.418 3.552-.633.376-1.142.68-1.142 1.154v.169a.693.693 0 0 1-.682.703h-2.06a.693.693 0 0 1-.681-.703v-.287c0-1.768 1.269-2.5 2.266-3.075l.073-.042c.863-.499 1.392-.838 1.392-1.499 0-.874-1.082-1.454-1.956-1.454-1.112 0-1.64.53-2.351 1.449a.668.668 0 0 1-.945.121L7.27 8.63a.718.718 0 0 1-.147-.963ZM9.76 17.97c0-1.12.883-2.03 1.969-2.03 1.085 0 1.968.91 1.968 2.03 0 1.119-.883 2.029-1.968 2.029-1.086 0-1.969-.91-1.969-2.03Z",
      fill: "currentColor"
    }
  )
), SvgNeoAssistance$1 = SvgNeoAssistance, SvgNeoMessaging = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "m.5 21.257 7.46-8.216 4.052 2.403 4.052-2.403 7.46 8.216H.5Zm0-2.738V8.573l5.848 3.531L.5 18.52Zm0-12.084V3.048h23.023v3.387l-11.511 6.847L.5 6.435Zm17.176 5.67 5.848-3.532v9.946l-5.848-6.415Z",
      fill: "currentColor"
    }
  )
), SvgNeoMessaging$1 = SvgNeoMessaging, SvgNewRelease = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M13.07 13.07V6.54h-2.14v6.53h2.14zm0 4.4v-2.2h-2.14v2.2h2.14zM24 12l-2.65 3.01.35 4.04-3.93.86-2.04 3.48L12 21.8l-3.73 1.6-2.04-3.42-3.93-.92.35-4.04L0 12l2.65-3.06-.35-3.99 3.93-.86L8.27.6 12 2.2 15.73.6l2.04 3.48 3.93.86L21.34 9z"
    }
  )
), SvgNewRelease$1 = SvgNewRelease, SvgOneMessaging = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.051 12.366a455.802 455.802 0 0 1-2.746-1.822A6.543 6.543 0 0 1 .74 9.067C.248 8.44.002 7.859.002 7.322a2.7 2.7 0 0 1 .141-.905c.098-.286.242-.542.424-.752C.935 5.222 1.462 5 2.15 5h19.7c.541-.016 1.071.195 1.507.6.424.4.636.882.636 1.446 0 .673-.218 1.317-.657 1.93a6.217 6.217 0 0 1-1.632 1.567c-3.358 2.226-5.447 3.61-6.267 4.156l-.242.167-.323.222a15.448 15.448 0 0 1-1.42.902 4.052 4.052 0 0 1-.77.345 2.215 2.215 0 0 1-.67.115h-.026a2.222 2.222 0 0 1-.67-.116 4.052 4.052 0 0 1-.77-.344c-.272-.154-.506-.29-.697-.415a30.199 30.199 0 0 1-.723-.487c-.288-.2-.477-.33-.565-.389-.81-.545-1.98-1.323-3.51-2.334Zm10.943 3.962c1.517-1.052 3.74-2.524 6.667-4.416.478-.306.927-.68 1.339-1.113v10.16c0 .564-.209 1.044-.63 1.446-.437.405-.97.614-1.512.594H2.149c-.545.02-1.08-.192-1.52-.601C.21 21.995 0 21.52 0 20.95V10.8c.416.437.871.81 1.356 1.113 3.232 2.099 5.45 3.571 6.656 4.416.512.358.926.637 1.243.837a7.7 7.7 0 0 0 1.265.614c.475.198.97.303 1.47.313h.026c.5-.01.995-.115 1.47-.313a7.647 7.647 0 0 0 1.265-.614c.32-.2.735-.479 1.243-.837Z",
      fill: "currentColor"
    }
  )
), SvgOneMessaging$1 = SvgOneMessaging, SvgOneProfile = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement("g", { clipPath: "url(#one-profile_svg__a)" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      fill: "currentColor",
      d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 4.65a4.26 4.26 0 1 1 0 8.51 4.26 4.26 0 0 1 0-8.51Zm0 16.64a9.27 9.27 0 0 1-7.09-3.3 5.4 5.4 0 0 1 4.77-2.9c.11 0 .23.03.34.06.63.2 1.29.33 1.98.33.7 0 1.35-.13 1.98-.33.11-.03.23-.05.34-.05a5.4 5.4 0 0 1 4.77 2.89 9.27 9.27 0 0 1-7.09 3.3Z"
    }
  )),
  /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", { id: "one-profile_svg__a" }, /* @__PURE__ */ React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))
), SvgOneProfile$1 = SvgOneProfile, SvgProfile = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.308 18.368A13.406 13.406 0 0 1 12.154 23 13.406 13.406 0 0 1 2 18.368c1.528-2.63 7.136-3.927 10.154-3.927s8.625 1.296 10.154 3.927ZM6.91 6.41c.004 2.948 2.348 5.335 5.243 5.33h.008c2.895-.004 5.239-2.39 5.235-5.338C17.397 3.45 15.053 1 12.154 1 9.255 1 6.91 3.45 6.91 6.402v.008Z",
      fill: "currentColor"
    }
  )
), SvgProfile$1 = SvgProfile, SvgSearch = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M1.27 11.552a7.745 7.745 0 0 1 0-4.156c.38-1.377 1.095-2.579 2.149-3.604a7.928 7.928 0 0 1 2.716-1.777c1.02-.4 2.074-.6 3.161-.6 1.07 0 2.115.2 3.136.6 1.02.4 1.926.993 2.716 1.777a7.904 7.904 0 0 1 1.902 2.86 7.812 7.812 0 0 1 .518 3.29 7.647 7.647 0 0 1-.889 3.171c.461.129.865.36 1.21.697l4.297 4.156c.576.56.864 1.241.864 2.042 0 .801-.288 1.482-.864 2.042-.576.56-1.276.841-2.099.841-.823 0-1.523-.28-2.099-.84l-4.272-4.18a2.423 2.423 0 0 1-.74-1.178 8.302 8.302 0 0 1-3.68.84c-1.087 0-2.14-.2-3.16-.6a8.102 8.102 0 0 1-2.717-1.753 7.854 7.854 0 0 1-2.149-3.628Zm2.495-2.066c0 1.49.535 2.755 1.605 3.796 1.086 1.04 2.395 1.561 3.926 1.561 1.515 0 2.807-.52 3.877-1.561 1.07-1.041 1.613-2.307 1.63-3.796.016-1.49-.527-2.755-1.63-3.796-1.087-1.057-2.379-1.585-3.877-1.585-1.515 0-2.823.528-3.926 1.585C4.3 6.731 3.765 7.996 3.765 9.486Z",
      fill: "currentColor"
    }
  )
), SvgSearch$1 = SvgSearch, SvgUserbook = ({
  title,
  titleId,
  ...props
}) => /* @__PURE__ */ React.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    "aria-labelledby": titleId,
    ...props
  },
  title ? /* @__PURE__ */ React.createElement("title", { id: titleId }, title) : null,
  /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M0 24.58V.53h24.05v4.28h-2.62V7.1h2.62v4.28h-2.62v2.35h2.62V18h-2.62v2.3h2.62v4.29H0zm4.64-6.85h12.12V14l-4.5-2.67q.9-.46 1.4-1.3t.53-1.85q0-1.4-1.01-2.43T10.7 4.72 8.25 5.75 7.24 8.18q0 1.03.53 1.85t1.4 1.3L4.63 14v3.73z",
      fill: "currentColor"
    }
  )
), SvgUserbook$1 = SvgUserbook, Logo = forwardRef(
  ({ url, is1d, translate = "Retour accueil" }, ref) => {
    const classes = clsx("navbar-brand d-none d-md-block"), logo = `logo ${is1d ? "ONE" : "NEO"}`;
    return /* @__PURE__ */ React.createElement("a", { ref, className: classes, href: "/", "aria-label": translate }, /* @__PURE__ */ React.createElement("img", { className: "logo", src: url, alt: logo }));
  }
), Logo$1 = Logo;
function NavLink({
  link,
  className,
  children,
  button,
  translate
}) {
  const classes = clsx(className, {
    "nav-link": !button,
    button
  });
  return /* @__PURE__ */ React.createElement("a", { href: link, className: classes }, children, translate && /* @__PURE__ */ React.createElement("span", null, translate));
}
const Header = ({ is1d = !1 }) => {
  const welcomeUser = "Bonjour Support ONE, bienvenue !", { title } = useTitle(), [isCollapsed, setIsCollapsed] = useState(!0);
  function toggleCollapsedNav() {
    setIsCollapsed(!isCollapsed);
  }
  const classes = clsx("header header-react", {
    "no-2d": is1d,
    "no-1d": !is1d
  });
  return /* @__PURE__ */ React.createElement("header", { className: classes }, is1d ? /* @__PURE__ */ React.createElement("div", { className: "container-fluid" }, /* @__PURE__ */ React.createElement("nav", { className: "navbar" }, /* @__PURE__ */ React.createElement("a", { className: "navbar-title d-md-none text-truncate", href: "/" }, title), /* @__PURE__ */ React.createElement("div", { className: "d-none d-md-inline-flex gap-12 align-items-center" }, /* @__PURE__ */ React.createElement(SvgProfile$1, { className: "icon profile" }), /* @__PURE__ */ React.createElement("span", { className: "navbar-text" }, welcomeUser)), /* @__PURE__ */ React.createElement("ul", { className: "navbar-nav", "aria-label": "navigation principale" }, /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "nav-link" }, /* @__PURE__ */ React.createElement(SvgOneMessaging$1, { className: "icon notification" }), /* @__PURE__ */ React.createElement("span", { className: "position-absolute badge rounded-pill bg-danger" }, 2, /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Messages")))), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "nav-link" }, /* @__PURE__ */ React.createElement(SvgOneProfile$1, { className: "icon user" }), /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Profil"))), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "nav-link" }, /* @__PURE__ */ React.createElement(SvgNeoAssistance$1, { className: "icon help" }), /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Assistance"))), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "nav-link" }, /* @__PURE__ */ React.createElement(SvgDisconnect$1, { className: "icon logout" }), /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "D\xE9connexion"))), /* @__PURE__ */ React.createElement("li", { className: "nav-item d-md-none" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nav-link btn btn-naked",
      type: "button",
      "aria-controls": "navbarCollapsed",
      "aria-expanded": !isCollapsed,
      "aria-label": "Navigation secondaire",
      onClick: toggleCollapsedNav
    },
    /* @__PURE__ */ React.createElement(
      RafterDown,
      {
        className: "icon rafter-down",
        width: "20",
        height: "20"
      }
    )
  )))), /* @__PURE__ */ React.createElement(
    "nav",
    {
      className: "no-2d navbar navbar-secondary navbar-expand-md",
      "aria-label": "navigation secondaire"
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `collapse navbar-collapse ${isCollapsed ? "" : "show"}`,
        id: "navbarCollapsed"
      },
      /* @__PURE__ */ React.createElement(
        Logo$1,
        {
          is1d: !0,
          url: "/assets/logo-one.png",
          translate: "Retour accueil"
        }
      ),
      /* @__PURE__ */ React.createElement("ul", { className: "navbar-nav gap-8" }, /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "button" }, /* @__PURE__ */ React.createElement(SvgNewRelease$1, { color: "#fff", className: "d-md-none" }), /* @__PURE__ */ React.createElement("span", { className: "d-inline-block" }, "Quoi de neuf ?"))), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "button" }, /* @__PURE__ */ React.createElement(SvgUserbook$1, { color: "#fff", className: "d-md-none" }), /* @__PURE__ */ React.createElement("span", { className: "d-inline-block" }, "La classe"))), /* @__PURE__ */ React.createElement("li", { className: "nav-item" }, /* @__PURE__ */ React.createElement("a", { href: "/", className: "button" }, /* @__PURE__ */ React.createElement(SvgMyApps$1, { color: "#fff", className: "d-md-none" }), /* @__PURE__ */ React.createElement("span", { className: "d-inline-block" }, "Mes applis"))))
    )
  )) : /* @__PURE__ */ React.createElement("nav", { className: "navbar navbar-expand-md" }, /* @__PURE__ */ React.createElement("div", { className: "container-fluid" }, /* @__PURE__ */ React.createElement(
    Logo$1,
    {
      url: "https://recette.opendigitaleducation.com/assets/themes/cg77/img/illustrations/logo.png",
      translate: "Retour accueil"
    }
  ), /* @__PURE__ */ React.createElement("a", { href: "/", className: "navbar-title d-md-none" }, title), /* @__PURE__ */ React.createElement("div", { className: "navbar-nav" }, /* @__PURE__ */ React.createElement(NavLink, { link: "/", translate: "Home" }, /* @__PURE__ */ React.createElement(SvgHome$1, { color: "#fff" })), /* @__PURE__ */ React.createElement(NavLink, { link: "/welcome", translate: "Applications" }, /* @__PURE__ */ React.createElement(SvgMyApps$1, { color: "#fff" })), /* @__PURE__ */ React.createElement(NavLink, { link: "/", translate: "Conversation" }, /* @__PURE__ */ React.createElement(SvgNeoMessaging$1, { color: "#fff" })), /* @__PURE__ */ React.createElement(NavLink, { link: "/", translate: "Assistance" }, /* @__PURE__ */ React.createElement(SvgNeoAssistance$1, { color: "#fff" })), /* @__PURE__ */ React.createElement("div", { className: "dropdown" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-naked d-md-none",
      type: "button",
      "aria-controls": "dropdown-navbar",
      "aria-expanded": !isCollapsed,
      "aria-label": "Ouvrir sous-menu",
      onClick: toggleCollapsedNav
    },
    /* @__PURE__ */ React.createElement(
      RafterDown,
      {
        className: "icon rafter-down",
        width: "20",
        height: "20",
        color: "#fff"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `dropdown-menu dropdown-menu-end ${isCollapsed ? "" : "show"}`,
      id: "dropdown-navbar"
    },
    /* @__PURE__ */ React.createElement(
      NavLink,
      {
        link: "/",
        className: "dropdown-item",
        translate: "Communaut\xE9s"
      },
      /* @__PURE__ */ React.createElement(SvgCommunity$1, { className: "icon community" })
    ),
    /* @__PURE__ */ React.createElement(
      NavLink,
      {
        link: "/searchengine",
        className: "dropdown-item",
        translate: "Search"
      },
      /* @__PURE__ */ React.createElement(SvgSearch$1, { className: "icon search" })
    ),
    /* @__PURE__ */ React.createElement(
      NavLink,
      {
        link: "/userbook/mon-compte",
        className: "dropdown-item",
        translate: "Mon compte"
      },
      /* @__PURE__ */ React.createElement(SvgProfile$1, { className: "icon user" })
    ),
    /* @__PURE__ */ React.createElement("hr", { className: "dropdown-divider" }),
    /* @__PURE__ */ React.createElement(
      NavLink,
      {
        link: "/",
        className: "dropdown-item",
        translate: "D\xE9connexion"
      },
      /* @__PURE__ */ React.createElement(SvgDisconnect$1, { className: "icon logout" })
    )
  ))))));
}, Header$1 = Header;
export {
  AppCard$1 as AppCard,
  Button$1 as Button,
  Header$1 as Header,
  Heading$1 as Heading,
  Loading$1 as Loading
};
