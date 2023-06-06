import { ReactNode, forwardRef, useMemo } from "react";

import { useOdeIcons } from "@ode-react-ui/core";
import clsx from "clsx";
import { IWebApp } from "ode-ts-client";

import { Context } from "./AppCardContext";
import AppName from "./AppName";
import { HeadingProps } from "../Heading";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../utils/create-polymorphic-component";

type AppHeadingProps = Pick<HeadingProps, "level" | "headingStyle">;

export type BaseProps = {
  /**
   * Pass all information about an app
   */
  app: IWebApp;
  /**
   * Use as title element (h1, h2)
   */
  isHeading?: boolean;
  /**
   * Passing compounds components
   */
  children?: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
} & AppHeadingProps;

export type AppCardProps<T extends React.ElementType> =
  PolymorphicComponentPropsWithRef<T, BaseProps>;

const defaultElement = "div";
export type DefaultElementType = typeof defaultElement;

export type AppCardRef<T extends React.ElementType> = PolymorphicRef<T>;

export type PolymorphicAppCard = <
  T extends React.ElementType = DefaultElementType,
>(
  props: AppCardProps<T>,
) => React.ReactElement | null;

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
        code: getIconCode(app)!,
        bgCode: getBackgroundLightIconClass(app),
      }),
      [
        app,
        displayName,
        getBackgroundLightIconClass,
        getIconCode,
        headingStyle,
        icon,
        isHeading,
        level,
      ],
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
  Name: AppName,
});

// @ts-expect-error
Root.displayName = "AppCard";

export default AppCard;
