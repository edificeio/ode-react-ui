import { forwardRef, ReactNode, Ref, useEffect } from "react";

import { useOdeIcons } from "@ode-react-ui/core";
import clsx from "clsx";
import { IWebApp } from "ode-ts-client";
import { useTranslation } from "react-i18next";

export interface BreadcrumbNavProps extends React.ComponentPropsWithRef<"nav"> {
  app: IWebApp;
  children: ReactNode;
  hasActions?: boolean;
}

const BreadcrumbNav = forwardRef(
  (
    { children, app, hasActions }: BreadcrumbNavProps,
    ref: Ref<HTMLElement>,
  ) => {
    const { t } = useTranslation();
    const { getIconClass } = useOdeIcons();

    const classes = clsx("breadcrumb mb-0", getIconClass(app), {
      "justify-content-between": hasActions,
    });

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
