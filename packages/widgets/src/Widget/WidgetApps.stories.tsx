import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Widget, { WidgetBody, WidgetFooter, WidgetHeader } from "./Widget";

export default {
  title: "Widgets/Bookmarked Apps",
  component: Widget,
  decorators: [
    (Story) => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Widget>;

type Story = StoryObj<typeof Widget>;

const bookmarkedApps = [
  {
    address: "/blog",
    icon: "blog",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
  {
    address: "/wiki",
    icon: "wiki",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
  {
    address: "/conversation",
    icon: "conversation",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
  {
    address: "/rack",
    icon: "rack",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
  {
    address: "/scrapbook",
    icon: "scrapbook",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
  {
    address: "/workspace",
    icon: "workspace",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
];

const emptyBookmarks = [];

export const Base: Story = {
  render: (args) => (
    <Widget>
      <WidgetBody
        bookmarkedApps={bookmarkedApps}
        translate="Sélectionner vos applications favorites"
      />
    </Widget>
  ),
};

export const Empty: Story = {
  render: (args) => (
    <Widget>
      <WidgetHeader>Mes applis</WidgetHeader>
      <WidgetBody
        bookmarkedApps={emptyBookmarks}
        translate="Sélectionner vos applications favorites"
      />
      {emptyBookmarks.length > 0 && (
        <WidgetFooter translate="Plus"></WidgetFooter>
      )}
    </Widget>
  ),
};
