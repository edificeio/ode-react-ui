/**
 * AppTitle Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/story/components-core-apptitle--application-example
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/core/src/AppTitle/AppTitle.tsx
 */

import { forwardRef } from "react";

import { Placeholder } from "@ode-react-ui/icons";
import clsx from "clsx";

import { AppTitleProps, AppTitleRef } from "./AppTitleProps";

/**
 * AppTitle shows icon and name of application
 */

export const AppTitle = forwardRef<AppTitleRef, AppTitleProps>(
  (props: AppTitleProps, ref) => {
    const {
      icon = <Placeholder />,
      code,
      name = "Application",
      ...restProps
    } = props;

    const cx = clsx("app-title d-none d-md-flex gap-12 align-items-center", {
      [`color-app-${code}`]: code,
      [`color-app-default`]: !code,
    });

    return (
      <div ref={ref} className={cx} {...restProps}>
        {icon}
        <h1 className="h3">{name}</h1>
      </div>
    );
  },
);

AppTitle.displayName = "AppTitle";

export default AppTitle;
