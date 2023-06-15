import { type ReactNode } from "react";

import { AppIcon } from "@ode-react-ui/components";
import { type IWebApp } from "ode-ts-client";

export const BookmarkedAppsFooter = ({ translate }: { translate: string }) => {
  // const { i18n } = useI18n();
  return (
    <div className="widget-footer">
      <div className="widget-footer-action">
        <a href="/welcome" className="link">
          {/* {i18n("plus")} */}
          {translate}
        </a>
      </div>
    </div>
  );
};

export const BookmarkedAppsBody = ({
  translate,
  bookmarkedApps,
}: {
  translate: string;
  bookmarkedApps: IWebApp[];
}) => {
  return (
    <div className="widget-body d-flex flex-wrap">
      {!bookmarkedApps.length && <div className="text-dark">{translate}</div>}
      {bookmarkedApps.slice(0, 6).map((app, index) => {
        return (
          <a key={index} href={app.address} className="bookmarked-app">
            <AppIcon app={app} size="32" />
            test
          </a>
        );
      })}
    </div>
  );
};

export default function BookmarkedApps({ children }: { children: ReactNode }) {
  return (
    <div className="widget">
      <div className="widget-applications">
        {children}
        <AppIcon size="32" />
      </div>
    </div>
  );
}
