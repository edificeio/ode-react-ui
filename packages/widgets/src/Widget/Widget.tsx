import { type ReactNode } from "react";

import { AppIcon } from "@ode-react-ui/components";
import { type IWebApp } from "ode-ts-client";

export const WidgetFooter = ({ translate }: { translate: string }) => {
  return (
    <div className="widget-footer">
      <div className="widget-footer-action">
        <a href="/welcome" className="link">
          {translate}
        </a>
      </div>
    </div>
  );
};

export const WidgetHeader = ({ children }: { children: string }) => {
  return (
    <div className="widget-header">
      <div className="subtitle">{children}</div>
      <div className="widget-options">
        <div className="widget-handle">
          <i className="fas fa-grip-vertical"></i>
        </div>
      </div>
    </div>
  );
};

export const WidgetBody = ({
  translate,
  bookmarkedApps,
}: {
  translate: string;
  bookmarkedApps: IWebApp[];
}) => {
  return (
    <div className="widget-body p-12 d-flex flex-wrap">
      {!bookmarkedApps.length && (
        <div className="text-dark mx-auto">
          <a href="http://">{translate}</a>
        </div>
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

export default function Widget({ children }: { children: ReactNode }) {
  return (
    <div className="widget">
      <div className="widget-applications">{children}</div>
    </div>
  );
}
