import { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {},
  args: {
    app: {
      icon: "blog",
      address: "",
      display: false,
      displayName: "",
      isExternal: false,
      name: "Blog",
      scope: [],
    },
    userSrc: "https://i.pravatar.cc/300",
    onOpen: () => console.log("open"),
    onSelect: () => console.log("select"),
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Base: Story = {};

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "If no `resourceSrc` is passed, Card Component shows the AppIcon placeholder.",
      },
    },
  },
};

export const CardWithImage: Story = {
  args: {
    resourceSrc:
      "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
  },

  parameters: {
    docs: {
      description: {
        story:
          "If `resourceSrc` is provided, Card Component shows the actual image.",
      },
    },
  },
};

export const Variant: Story = {
  render: () => {
    return (
      <div className="d-flex align-items-center gap-16">
        <Card className="flex-fill" />
        <Card isFolder className="flex-fill" />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "If `isFolder` props is set to true, Component will be a folder card. Otherwise, it is a resource card.",
      },
    },
  },
};

export const LoadingStatus: Story = {
  render: () => {
    return (
      <div className="d-flex align-items-center gap-16">
        <Card isLoading className="flex-fill" />
        <Card isFolder isLoading className="flex-fill" />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "Card Component accepts an `isLoading` prop to show loading status.",
      },
    },
  },
};

export const SelectedState: Story = {
  render: () => {
    return (
      <div className="d-flex align-items-center gap-16">
        <Card isSelected className="flex-fill" />
        <Card isFolder isSelected className="flex-fill" />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "Prop `isSelected` is used when any action can be performed with the ActionBar Component.",
      },
    },
  },
};

export const TooltipShare: Story = {
  render: () => {
    const message = "Tooltip Shared";
    return (
      <div className="d-flex align-items-center gap-16">
        <Card messageShared={message} isShared className="flex-fill" />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story: "Card Component tooltip with picto shared",
      },
    },
  },
};

export const TooltipPublic: Story = {
  render: () => {
    const message = "Tooltip Public";
    return (
      <div className="d-flex align-items-center gap-16">
        <Card messagePublic={message} isPublic className="flex-fill" />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story: "Card Component tooltip with picto public",
      },
    },
  },
};
