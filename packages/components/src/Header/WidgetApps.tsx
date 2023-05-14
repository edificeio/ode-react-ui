import { type ReactNode } from "react";

import { AppIcon } from "@ode-react-ui/components";
import { useI18n } from "@ode-react-ui/core";
import { type IWebApp } from "ode-ts-client";

export const WidgetAppsFooter = () => {
  const { i18n } = useI18n();
  return (
    <div className="widget-footer">
      <div className="widget-footer-action">
        <a href="/welcome" className="link">
          {i18n("plus")}
        </a>
      </div>
    </div>
  );
};

export const WidgetAppsBody = ({
  bookmarkedApps,
}: {
  bookmarkedApps: IWebApp[];
}) => {
  const { i18n } = useI18n();

  return (
    <div className="widget-body d-flex flex-wrap">
      {!bookmarkedApps.length && (
        <div className="text-dark">{i18n("navbar.myapps.more")}</div>
      )}
      {bookmarkedApps.slice(0, 6).map((app, index) => {
        return (
          <a key={index} href={app.address} className="bookmarked-app">
            <AppIcon app={app} size="32" />
          </a>
        );
      })}
    </div>
  );
};

export default function WidgetApps({ children }: { children: ReactNode }) {
  return (
    <div className="widget">
      <div className="widget-applications">{children}</div>
    </div>
  );
}
