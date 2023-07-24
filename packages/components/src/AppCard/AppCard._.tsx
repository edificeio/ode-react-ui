import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { AppCard, BaseProps } from ".";
import { AppIcon } from "../AppIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AppCard",
  component: AppCard,
  subcomponents: {
    Icon: AppIcon,
  },
  parameters: {
    docs: {
      description: {
        component:
          "AppCard component displays the icon and the name of an application.",
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
    level: "h1",
    headingStyle: "h3",
    isHeading: true,
    as: "div",
  },
} as Meta<typeof AppCard>;

type Story = StoryObj<typeof AppCard>;

const Template = (args: BaseProps) => (
  <AppCard {...args}>
    <AppIcon app={args.app} size="40" />
    <AppCard.Name />
  </AppCard>
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

export const OnlyTitle: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app} isHeading headingStyle="h3" level="h1">
        <AppCard.Name />
      </AppCard>
    );
  },

  args: {
    app: {
      address: "/blog",
      icon: "blog-large",
      name: "Blog",
      scope: [],
      display: false,
      displayName: "",
      isExternal: false,
    },
  },

  parameters: {
    docs: {
      description: {
        story: "When no icon is required, displays only the application title.",
      },
    },
  },
};

export const OnlyIcon: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app} isHeading level="h1" headingStyle="h3">
        <AppIcon app={args.app} size="40" />
      </AppCard>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "For example, when used as default when no image is defined in the Card Component.",
      },
    },
  },
};

export const PassingData: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app} isHeading headingStyle="h3" level="h1">
        <AppIcon app={args.app} size="40" />
        <AppCard.Name />
      </AppCard>
    );
  },
};

export const ImageAsIcon: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app} isHeading headingStyle="h3" level="h1">
        <AppIcon app={args.app} size="40" />
        <AppCard.Name />
      </AppCard>
    );
  },

  args: {
    app: {
      address: "/form",
      icon: "https://ent.l-educdenormandie.fr/formulaire/public/img/logo.svg",
      name: "Formulaire",
      scope: [],
      display: false,
      displayName: "",
      isExternal: false,
    },
  },

  parameters: {
    docs: {
      description: {
        story:
          "When an url is added instead of an app code, we return an image",
      },
    },
  },
};

export const HeadingStyle: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app} isHeading>
        <AppIcon app={args.app} size="40" />
        <AppCard.Name />
      </AppCard>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "Heading props: `headingStyle` and `as` are optional. Default is `H1`",
      },
    },
  },
};

export const TitleAsText: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app}>
        <AppIcon app={args.app} size="40" />
        <AppCard.Name />
      </AppCard>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "Without passing `isHeading` props, the application name will be a paragraph.",
      },
    },
  },
};

export const IconCustomSize: Story = {
  render: (args: BaseProps) => {
    return (
      <AppCard app={args.app} isHeading level="h1" headingStyle="h3">
        <AppIcon app={args.app} size="24" />
        <AppCard.Name />
      </AppCard>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "AppIcon size can be changed and accept : `16`, `24`, `32`, `40` and `48`. Default to `24`",
      },
    },
  },
};

export const UseAsALink: Story = {
  render: (args: BaseProps) => {
    const mockedApp = {
      address: "/blog",
      icon: "blog-large",
      name: "Blog",
      scope: [],
      display: false,
      displayName: "",
      isExternal: false,
    };
    return (
      <AppCard
        app={mockedApp}
        isHeading
        headingStyle="h3"
        level="h1"
        as="a"
        href="/"
      >
        <AppIcon app={args.app} size="40" />
        <AppCard.Name />
      </AppCard>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "By using the `as` props, you can override the default behaviour of this component. In some contexts, we need a link, so use `as='a'` and add an `href` prop.",
      },
    },
  },
};
