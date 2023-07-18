import React from "react";

import { ElementType } from "@react-spring/web";
import { IWebApp } from "ode-ts-client";

import { AppCard } from "../AppCard";
import { AppIcon } from "../AppIcon";

export interface AppHeaderProps {
  /**
   *
   * Pass all information about an app
   */
  app: IWebApp;
  /**
   * Add Buttons
   */
  actions?: React.ReactNode;
  /**
   * Show resource name
   */
  resourceName?: string;
  /**
   * Add link on title
   */
  isLink?: boolean;
}

const AppHeader = ({ app, actions, resourceName, isLink }: AppHeaderProps) => {
  const linksProps = {
    as: isLink ? ("a" as ElementType<any> | undefined) : "div",
    href: isLink ? app.address : "",
  };

  return (
    <div className="d-flex justify-content-between p-16 mx-n16 border-bottom">
      <AppCard app={app} headingStyle="h3" level="h1" isHeading {...linksProps}>
        <AppIcon app={app} size="40" />
        <AppCard.Name />
        <AppCard.Resource resourceName={resourceName} />
      </AppCard>
      {actions && <div className="cell">{actions}</div>}
    </div>
  );
};

AppHeader.displayName = "AppHeader";

export default AppHeader;
