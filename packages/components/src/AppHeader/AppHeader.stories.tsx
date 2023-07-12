import { Meta, StoryObj } from "@storybook/react";

import { BaseProps } from "../AppCard";
import { AppHeader } from "../AppHeader";
import { Button } from "../Button";
import { AppIcon } from "../AppIcon";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AppHeader",
  component: AppHeader,
  subcomponents: {
    Icon: AppIcon,
  },
  parameters: {
    docs: {
      description: {
        component:
          "AppHeader component displays action buttons and the title with its resource and icon.",
      },
    },
  },
  args: {
    app: {
      address: "/blog",
      icon: "",
      name: "",
      scope: [],
      display: false,
      displayName: "",
      isExternal: false,
    },
  },
} as Meta<typeof AppHeader>;

type Story = StoryObj<typeof AppHeader>;

const Template = (args: BaseProps) => (
  <AppHeader
    app={args.app}
    resourceName="Resource"
    actions={
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </>
    }
  />
);

export const Base: Story = {
  render: Template,
  args: {
    app: {
      address: "/blog",
      icon: "",
      name: "",
      scope: [],
      display: false,
      displayName: "",
      isExternal: false,
    },
  },
};
