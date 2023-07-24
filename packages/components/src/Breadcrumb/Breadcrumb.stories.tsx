import { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import React from "react";
import { Button } from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          "Breadcrumb is always composed of the app logo, a primary action button, and in some cases can have a secondary action. The app logo and the name of the app take the app color.",
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
      displayName: "Blog",
      isExternal: false,
    },
  },
} as Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const Base: Story = {};

export const BreadcrumbStory2: Story = {
  name: "Basic breadcrumb with primary action",
  args: {
    actions: (
      <>
        <Button>Action</Button>
      </>
    ),
  },
};

export const BreadcrumbStory3: Story = {
  name: "Basic breadcrumb with primary and secondary action",
  args: {
    actions: (
      <>
        <Button variant="outline">Button</Button>
        <Button>Action</Button>
      </>
    ),
  },
};

export const BreadcrumbStory4: Story = {
  name: "Current Page Breadcrumb with resource name",
  args: {
    name: "Mon nouveau blog",
  },
  parameters: {
    docs: {
      description: {
        story:
          "If we navigate to a resource page, the name property receives the name of the target resource.",
      },
    },
  },
};

export const BreadcrumbStory5: Story = {
  name: "Current Page Breadcrumb with resource name and possible actions.",
  args: {
    name: "Mon nouveau blog",
    actions: (
      <>
        <Button variant="outline">Button 1</Button>
        <Button>Button 2</Button>
      </>
    ),
  },
};
