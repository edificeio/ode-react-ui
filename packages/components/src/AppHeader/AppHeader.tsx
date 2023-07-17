import React from "react";

import { IWebApp } from "ode-ts-client";

import { AppCard } from "../AppCard";
import { AppIcon } from "../AppIcon";

export interface AppHeaderProps {
  /**
   * Element to be wrapped as Tooltip trigger
   */
  actions?: React.ReactNode;
  app: IWebApp;
  resourceName?: string;
  isLink?: boolean;
}

const AppHeader = ({ app, actions, resourceName, isLink }: AppHeaderProps) => {
  return (
    <div className="d-flex justify-content-between p-16 mx-n16 border-bottom">
      <AppCard app={app} isHeading headingStyle="h3" level="h1">
        <AppIcon app={app} size="40" />
        {isLink ? (
          <a href={app.address}>
            <AppCard.Name />
          </a>
        ) : (
          <AppCard.Name />
        )}
        <AppCard.Resource resourceName={resourceName} />
      </AppCard>
      {actions && <div className="cell">{actions}</div>}
    </div>
  );
};

AppHeader.displayName = "AppHeader";

export default AppHeader;
