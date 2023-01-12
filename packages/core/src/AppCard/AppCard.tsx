/**
 * AppCard Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-appcard--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/AppCard/AppCard.tsx
 */

import { forwardRef, useMemo } from "react";

import { useOdeIcons } from "@ode-react-ui/hooks";
import clsx from "clsx";

import { Context } from "./AppCardContext";
import {
  AppCardProps,
  AppCardRef,
  DefaultElementType,
  PolymorphicAppCard,
} from "./AppCardProps";
import AppIcon from "./AppIcon";
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
      level,
      className,
      ...restProps
    }: AppCardProps<T>,
    ref: AppCardRef<T>,
  ) => {
    const { getIconClass, getBackgroundLightIconClass, getIconCode } =
      useOdeIcons();
    const { name, icon } = app;
    const displayName = name || "Application";

    const classes = clsx(
      "application application-react application-title",
      getIconClass(app),
      className,
    );

    const value = useMemo(
      () => ({
        icon,
        displayName,
        isHeading,
        level,
        headingStyle,
        code: getIconCode(app),
        bgCode: getBackgroundLightIconClass(app),
      }),
      [],
    );

    const Component = as || "div";

    return (
      <Context.Provider value={value}>
        <Component ref={ref} className={classes} {...restProps}>
          {children}
        </Component>
      </Context.Provider>
    );
  },
);

const AppCard = Object.assign(Root, {
  Icon: AppIcon,
  Name: AppName,
});

// @ts-expect-error
Root.displayName = "AppCard";

export default AppCard;
