import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppCard } from "../index";
import { BaseProps } from "./AppCardProps";
import AppIcon from "./AppIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AppCard",
  component: AppCard,
  subcomponents: { AppIcon },
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
} as ComponentMeta<typeof AppCard>;

const Template: ComponentStory<typeof AppCard> = (args: BaseProps) => (
  <AppCard {...args}>
    <AppCard.Icon size="40" />
    <AppCard.Name />
  </AppCard>
);

export const Base = Template.bind({});
Base.args = {
  app: {
    address: "/blog",
    icon: "",
    name: "",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
};

export const OnlyTitle = () => {
  // For example only
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
    <AppCard app={mockedApp} isHeading headingStyle="h3" level="h1">
      <AppCard.Name />
    </AppCard>
  );
};
OnlyTitle.parameters = {
  docs: {
    description: {
      story: "When no icon is required, displays only the application title.",
    },
  },
};

export const OnlyIcon = () => {
  // For example only
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
    <AppCard app={mockedApp} isHeading level="h1" headingStyle="h3">
      <AppCard.Icon size="48" />
    </AppCard>
  );
};
OnlyIcon.parameters = {
  docs: {
    description: {
      story:
        "For example, when used as default when no image is defined in the Card Component.",
    },
  },
};

export const PassingData = () => {
  // For example only
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
    <AppCard app={mockedApp} isHeading headingStyle="h3" level="h1">
      <AppCard.Icon size="40" />
      <AppCard.Name />
    </AppCard>
  );
};

export const ImageAsIcon = () => {
  // For example only
  const mockedApp = {
    address: "/form",
    icon: "https://ent.l-educdenormandie.fr/formulaire/public/img/logo.svg",
    name: "Formulaire",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  };

  return (
    <div>
      <AppCard app={mockedApp} isHeading headingStyle="h3" level="h1">
        <AppCard.Icon size="40" />
        <AppCard.Name />
      </AppCard>
    </div>
  );
};
ImageAsIcon.parameters = {
  docs: {
    description: {
      story: "When an url is added instead of an app code, we return an image",
    },
  },
};

export const HeadingStyle = () => {
  // For example
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
    <AppCard app={mockedApp} isHeading>
      <AppCard.Icon size="40" />
      <AppCard.Name />
    </AppCard>
  );
};
HeadingStyle.parameters = {
  docs: {
    description: {
      story:
        "Heading props: `headingStyle` and `as` are optional. Default is `H1`",
    },
  },
};

export const TitleAsText = () => {
  // For example only
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
    <AppCard app={mockedApp}>
      <AppCard.Icon size="40" />
      <AppCard.Name />
    </AppCard>
  );
};
TitleAsText.parameters = {
  docs: {
    description: {
      story:
        "Without passing `isHeading` props, the application name will be a paragraph.",
    },
  },
};

export const IconCustomSize = () => {
  // For example only
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
    <AppCard app={mockedApp} isHeading level="h1" headingStyle="h3">
      <AppCard.Icon size="24" />
      <AppCard.Name />
    </AppCard>
  );
};
IconCustomSize.parameters = {
  docs: {
    description: {
      story:
        "AppIcon size can be changed and accept : `16`, `24`, `32`, `40` and `48`. Default to `24`",
    },
  },
};

export const UseAsALink = () => {
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
      <AppCard.Icon size="40" />
      <AppCard.Name />
    </AppCard>
  );
};
UseAsALink.parameters = {
  docs: {
    description: {
      story:
        "By using the `as` props, you can override the default behaviour of this component. In some contexts, we need a link, so use `as='a'` and add an `href` prop.",
    },
  },
};
