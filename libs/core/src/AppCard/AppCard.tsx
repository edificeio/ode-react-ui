/**
 * AppCard Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/story/components-core-apptitle--application-example
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/core/src/AppCard/AppCard.tsx
 */

import { forwardRef, Ref, useMemo } from "react";

import { useOdeIcons } from "@ode-react-ui/hooks";
import clsx from "clsx";

import AppIcon from "../AppIcon/AppIcon";
import { Heading } from "../Heading";
import { AppCardContext } from "./AppCardContext";
import { AppCardProps } from "./AppCardProps";

/**
 * AppCard shows icon and name of application
 */

const Base = <T extends React.ElementType = "div">(
  {
    as,
    variant = "title",
    app,
    children,
    isHeading = false,
    level,
    headingStyle,
    ...restProps
  }: AppCardProps<T>,
  ref: Ref<HTMLDivElement>,
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
  );

  const value = useMemo(
    () => ({
      icon: app.icon,
      displayName: app.icon,
      code: getIconCode(app),
    }),
    [],
  );

  const Component = as || "div";

  return (
    <AppCardContext.Provider value={value}>
      <Component ref={ref} className={classes} {...restProps}>
        {children}
        {isHeading ? (
          <Heading {...{ level, headingStyle }}>{displayName}</Heading>
        ) : (
          <p>{displayName}</p>
        )}
      </Component>
    </AppCardContext.Provider>
  );
};

const Root = forwardRef(Base) as typeof Base;

const AppCard = Object.assign({}, Root, {
  Icon: AppIcon,
});

(Base as React.ForwardRefExoticComponent<AppCardProps>).displayName = "AppCard";

export default AppCard;
