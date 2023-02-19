import "../public/assets/main.css";

import React from "react";
import {
  ExplorerFrameworkFactory,
  ConfigurationFrameworkFactory,
  NotifyFrameworkFactory,
  SessionFrameworkFactory,
  TransportFrameworkFactory,
} from "ode-ts-client";

import { OdeClientProvider } from "@ode-react-ui/core";

export const sessionFramework = SessionFrameworkFactory.instance();
export const configurationFramework = ConfigurationFrameworkFactory.instance();
export const notifyFramework = NotifyFrameworkFactory.instance();
export const explorerFramework = ExplorerFrameworkFactory.instance();
export const { http } = TransportFrameworkFactory.instance();

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "320px",
      height: "963px",
    },
  },
  mobileLarge: {
    name: "Mobile Large",
    styles: {
      width: "376px",
      height: "801px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "801px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  desktopLarge: {
    name: "Desktop Large",
    styles: {
      width: "1280px",
      height: "768px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    // storySort: sortStories(SORT_ORDER),
    storySort: {
      // method: "alphabetical",
      order: [
        "Introduction",
        "Design Tokens",
        "Components",
        "Layouts",
        "Icons",
      ],
    },
  },
  viewport: { viewports: customViewports },
};

const withOdeProvider = (Story) => (
  <OdeClientProvider
    framework={{
      sessionFramework,
      configurationFramework,
      notifyFramework,
      http,
    }}
    params={{
      app: "blog",
    }}
  >
    <Story />
  </OdeClientProvider>
);

export const decorators = [withOdeProvider];
