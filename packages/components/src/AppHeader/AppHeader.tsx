import React from "react";

import { IWebApp } from "ode-ts-client";

import { AppCard } from "../AppCard";
import { AppIcon } from "../AppIcon";

export interface AppHeaderProps {
  /**
   * Element to be wrapped as Tooltip trigger
   */
  actions: React.ReactNode;
  app: IWebApp;
  resourceName: string;
}

const AppHeader = ({ app, actions, resourceName }: AppHeaderProps) => {
  return (
    <div className="d-flex justify-content-between p-16 mx-n16 border-bottom">
      <AppCard app={app} isHeading headingStyle="h3" level="h1">
        <AppIcon app={app} size="40" />
        <a href={app.address}>
          <AppCard.Name />
        </a>
        <AppCard.Resource resourceName={resourceName} />
      </AppCard>
      <div className="cell">{actions}</div>
    </div>
  );
};

AppHeader.displayName = "AppHeader";

export default AppHeader;
