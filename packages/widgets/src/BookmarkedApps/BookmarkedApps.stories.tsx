import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import BookmarkedApps, {
  BookmarkedAppsBody,
  BookmarkedAppsFooter,
} from "./BookmarkedApps";

export default {
  title: "Widgets/BookmarkedApps",
  component: BookmarkedApps,
  /* args: {
    appPrefixes: ["wiki", "blog", "actualites"],
    onSearch: (appPrefix: string, term: string): Promise<AppSearchResult[]> => {
      return Promise.resolve(
        [
          {
            id: "123",
            prefix: "blog",
            subIds: { post: "14c0e7c2-2a07-43a6-b245-dcde2c4fb0d2" },
          },
          { id: "123", prefix: "blog", subIds: { post: "patati-patata" } },
          { id: "456", prefix: "wiki", subIds: { page: "569" } },
          { id: "789", prefix: "actualites" },
        ].filter((val) => val.prefix === appPrefix),
      );
    },
    onSelectInternalResource: ({
      prefix,
      id,
      subIds,
    }: AppSearchResult): Promise<URL> => {
      switch (prefix) {
        case "blog":
          return Promise.resolve(
            new URL(
              `/${prefix}#/view/${id}/${subIds?.["post"]}`,
              "https://example.com",
            ),
          );
        case "wiki":
          return Promise.resolve(
            new URL(
              `/${prefix}#/view/${id}/${subIds?.["page"]}`,
              "https://example.com",
            ),
          );
        case "actualites":
          return Promise.resolve(
            new URL(
              "/actualites#/view/thread/678/info/769",
              "https://example.com",
            ),
          );
        default:
          return Promise.reject("not.implemented");
      }
    },
  }, */
} as Meta<typeof BookmarkedApps>;

type Story = StoryObj<typeof BookmarkedApps>;

const bookmarkedApps = [];

export const Base: Story = {
  render: (args) => (
    <BookmarkedApps>
      <BookmarkedAppsBody
        bookmarkedApps={bookmarkedApps}
        translate="navbar.myapps.more"
      />
      <BookmarkedAppsFooter translate="more" />
    </BookmarkedApps>
  ),
};
