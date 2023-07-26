import { forwardRef, ReactNode, Ref, useEffect } from "react";

import { useOdeIcons } from "@ode-react-ui/core";
import clsx from "clsx";
import { IWebApp } from "ode-ts-client";
import { useTranslation } from "react-i18next";

export interface BreadcrumbNavProps extends React.ComponentPropsWithRef<"nav"> {
  /**
   * Pass all data about current application
   */
  app: IWebApp;
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

const BreadcrumbNav = forwardRef(
  ({ children, app, className }: BreadcrumbNavProps, ref: Ref<HTMLElement>) => {
    const { t } = useTranslation();
    const { getIconClass } = useOdeIcons();

    const classes = clsx(
      "d-flex align-items-center mb-0 p-16 border-bottom bg-white",
      getIconClass(app),
      className,
    );

    const style = { "--ode-breadcrumb-divider": "-" } as React.CSSProperties;

    return (
      <nav
        ref={ref}
        className={classes}
        aria-label={t("breadcrumb")}
        style={style}
      >
        {children}
      </nav>
    );
  },
);

BreadcrumbNav.displayName = "BreadcrumbNav";

export default BreadcrumbNav;
