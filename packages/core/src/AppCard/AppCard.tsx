/**
 * AppCard Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-appcard--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/AppCard/AppCard.tsx
 */

import { forwardRef, useMemo } from "react";

import { useOdeIcons } from "@ode-react-ui/hooks";
import clsx from "clsx";

import AppIcon from "../AppIcon/AppIcon";
import { Context } from "./AppCardContext";
import {
  AppCardProps,
  AppCardRef,
  DefaultElementType,
  PolymorphicAppCard,
} from "./AppCardProps";
import AppName from "./AppName";

/**
 * AppCard Component displays icon and name of application
 */

const Root: PolymorphicAppCard = forwardRef(
  <T extends React.ElementType = DefaultElementType>(
    {
      app,
      as,
      children,
      headingStyle,
      isHeading = false,
      noName = false,
      level,
      className,
      variant = "title",
      ...restProps
    }: AppCardProps<T>,
    ref: AppCardRef<T>,
  ) => {
    const { getIconClass, getIconCode } = useOdeIcons();
    const { name } = app;
    const displayName = name || "Application";

    const classes = clsx(
      "app-card app-card-react",
      {
        "app-card-title": variant === "title",
      },
      getIconClass(app),
      className,
    );

    const value = useMemo(
      () => ({
        icon: app.icon,
        displayName,
        isHeading,
        level,
        headingStyle,
        code: getIconCode(app),
      }),
      [],
    );

    const Component = as || "div";

    return (
      <Context.Provider value={value}>
        <Component ref={ref} className={classes} {...restProps}>
          {children}
          {/* {showName()} */}
        </Component>
      </Context.Provider>
    );
  },
);

const AppCard = Object.assign({}, Root, {
  Icon: AppIcon,
  Name: AppName,
});

// @ts-expect-error
AppCard.displayName = "AppCard";

export default AppCard;
