import { forwardRef, Ref } from "react";

import { useOdeIcons } from "@ode-react-ui/hooks";
import clsx from "clsx";

import { Image } from "../Image";
import { AppIconProps } from "./AppIconProps";

/**
 * Icon Component used to display the icon of an application
 */
const AppIcon = forwardRef(
  (
    { app, size = "24", iconFit = "contain", variant = "square" }: AppIconProps,
    ref: Ref<SVGSVGElement>,
  ) => {
    const { isIconUrl, getIconCode } = useOdeIcons();

    const isSquare = variant === "square";
    const isRounded = variant === "rounded";
    const isCircle = variant === "circle";
    const isContain = iconFit === "contain";
    const isRatio = iconFit === "ratio";

    const iconSizes = {
      "icon-xs": size === "24",
      "icon-sm": size === "40",
      "icon-md": size === "48",
      "icon-lg": size === "80",
      "icon-xl": size === "160",
    };

    const iconVariant = {
      square: isSquare,
      rounded: isRounded,
      "rounded-circle": isCircle,
    };

    const iconFits = {
      "icon-contain": isContain,
      "icon-ratio": isRatio,
    };

    const icon = app?.icon !== undefined ? app.icon : "placeholder";
    const displayName = app?.displayName !== undefined ? app.displayName : "";
    const code = app ? getIconCode(app) : "";
    const isIconURL = isIconUrl(icon);

    const appCode = code || "placeholder";

    const classes = clsx("app-icon", {
      ...iconSizes,
      ...iconVariant,
      ...iconFits,
      [`bg-light-${appCode}`]: appCode && !isContain,
      [`color-app-${appCode}`]: appCode,
    });

    if (isIconURL) {
      return (
        <Image
          src={icon}
          alt={displayName}
          objectFit="contain"
          width={size}
          height={size}
          className="h-full"
        />
      );
    }

    if (!isIconURL) {
      return (
        <div
          className={classes}
          style={{ width: size + "px", height: size + "px" }}
        >
          <svg
            ref={ref}
            width={size}
            height={size}
            role="img"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <use
              xlinkHref={`/assets/themes/ode-bootstrap/icons/apps.svg#${appCode}`}
            />
          </svg>
        </div>
      );
    }

    return (
      <div
        className={classes}
        style={{ width: size + "px", height: size + "px" }}
      >
        <svg
          ref={ref}
          width={size}
          height={size}
          role="img"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <use
            xlinkHref={`/assets/themes/ode-bootstrap/icons/apps.svg#${appCode}`}
          />
        </svg>
      </div>
    );
  },
);

AppIcon.displayName = "AppIcon";

export default AppIcon;
