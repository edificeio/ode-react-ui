import { forwardRef, ReactNode, Ref } from "react";

import { useOdeIcons } from "@ode-react-ui/core";
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
  app: IWebApp;
  name?: string;
  actions?: JSX.Element;
}

const Breadcrumb = forwardRef(
  ({ app, name, actions }: BreadcrumbProps, ref: Ref<HTMLElement>) => {
    const { t } = useTranslation();

    return (
      <BreadcrumbNav app={app} ref={ref} hasActions={!!actions}>
        <BreadcrumbList>
          {name ? (
            <>
              <BreadcrumbItem>
                <a href={app?.address}>
                  <IconButton
                    variant="ghost"
                    color="tertiary"
                    icon={<RafterLeft />}
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
