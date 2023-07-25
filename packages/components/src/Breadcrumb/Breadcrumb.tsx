import { forwardRef, Ref } from "react";

import { RafterLeft } from "@ode-react-ui/icons";
import clsx from "clsx";
import { IWebApp } from "ode-ts-client";
import { useTranslation } from "react-i18next";

import BreadcrumbItem from "./BreadcrumbItem";
import BreadcrumbList from "./BreadcrumbList";
import BreadcrumbNav from "./BreadcrumbNav";
import { AppIcon } from "../AppIcon";
import { IconButton } from "../Button";

export interface BreadcrumbProps {
  /**
   * Pass all data about current application
   */
  app: IWebApp;
  /**
   * Show name of the current resource
   */
  name?: string;
  /**
   * Actions
   */
  actions?: JSX.Element;
}

const Breadcrumb = forwardRef(
  ({ app, name, actions }: BreadcrumbProps, ref: Ref<HTMLElement>) => {
    const { t } = useTranslation();

    const classes = clsx(actions ? "justify-content-between" : "");

    return (
      <BreadcrumbNav app={app} ref={ref} className={classes}>
        <BreadcrumbList>
          {name ? (
            <>
              <BreadcrumbItem>
                <a href={app?.address}>
                  <IconButton
                    variant="ghost"
                    color="tertiary"
                    icon={<RafterLeft />}
                    aria-label={t(app?.displayName)}
                  />
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem
                className="h3 d-flex align-items-center gap-12"
                aria-current="page"
              >
                <AppIcon app={app} size="40" />
                <h1 className="h3">{name}</h1>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <a
                href={app?.address}
                className="d-flex align-items-center gap-12 text-reset"
              >
                <AppIcon app={app} size="40" />
                <h1 className="h3">{t(app?.displayName)}</h1>
              </a>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
        {actions ? (
          <div className="d-flex align-items-center gap-8">{actions}</div>
        ) : null}
      </BreadcrumbNav>
    );
  },
);

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;
