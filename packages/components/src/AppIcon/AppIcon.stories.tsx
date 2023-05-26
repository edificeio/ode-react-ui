import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppIcon, { AppIconProps } from "./AppIcon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/AppIcon",
  component: AppIcon,
  parameters: {
    docs: {
      description: {
        component: "AppIcon is used as a placeholder for Application Icon",
      },
    },
  },
  args: {
    size: "40",
  },
  argTypes: {
    variant: {
      options: ["square", "rounded", "circle"],
      control: { type: "inline-radio" },
    },
    iconFit: {
      options: ["contain", "ratio"],
      control: { type: "inline-radio" },
    },
    size: {
      options: ["24", "40", "48", "80", "160"],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof AppIcon>;

const Template: ComponentStory<typeof AppIcon> = (args: AppIconProps) => (
  <AppIcon {...args} />
);
export const Base = Template.bind({});

export const AppIconSizes = (args: AppIconProps) => {
  return (
    <div className="d-flex align-items-center gap-8">
      <AppIcon app={args.app} size="24" />
      <AppIcon app={args.app} size="40" />
      <AppIcon app={args.app} size="48" />
      <AppIcon app={args.app} size="80" />
      <AppIcon app={args.app} size="160" />
    </div>
  );
};
AppIconSizes.parameters = {
  docs: {
    description: {
      story: "App icon can take different size with the `size` prop attribute.",
    },
  },
};

export const AppIconAsImage = Template.bind({});
AppIconAsImage.args = {
  app: {
    address: "/form",
    icon: "https://ent.l-educdenormandie.fr/formulaire/public/img/logo.svg",
    name: "Formulaire",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
};
AppIconAsImage.parameters = {
  docs: {
    description: {
      story:
        "If the `icon` property is a `url`, AppIcon displays the image instead of an svg icon.",
    },
  },
};

export const AppIconImageSizes = (args: AppIconProps) => {
  return (
    <div className="d-flex align-items-center gap-8">
      <AppIcon app={args.app} size="24" />
      <AppIcon app={args.app} size="40" />
      <AppIcon app={args.app} size="48" />
      <AppIcon app={args.app} size="80" />
      <AppIcon app={args.app} size="160" />
    </div>
  );
};
AppIconImageSizes.args = {
  app: {
    address: "/form",
    icon: "https://ent.l-educdenormandie.fr/formulaire/public/img/logo.svg",
    name: "Formulaire",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  },
};
AppIconImageSizes.parameters = {
  docs: {
    description: {
      story:
        "Like the default AppIcon, the `size` prop attribute works on image too.",
    },
  },
};

export const AppIconWithRatio = Template.bind({});
AppIconWithRatio.args = {
  app: {
    icon: "blog",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Blog",
    scope: [],
  },
  iconFit: "ratio",
};
AppIconWithRatio.parameters = {
  docs: {
    description: {
      story:
        "Using the `iconFit` attribute with the `ratio` value will give a `backgroundColor` and some `padding` to the AppIcon. Default value is `contain`",
    },
  },
};

export const AppIconRatioSizes = (args: AppIconProps) => {
  return (
    <div className="d-flex align-items-center gap-8">
      <AppIcon app={args.app} size="24" variant="square" iconFit="ratio" />
      <AppIcon app={args.app} size="40" variant="square" iconFit="ratio" />
      <AppIcon app={args.app} size="48" variant="square" iconFit="ratio" />
      <AppIcon app={args.app} size="80" variant="square" iconFit="ratio" />
      <AppIcon app={args.app} size="160" variant="square" iconFit="ratio" />
    </div>
  );
};
AppIconRatioSizes.args = {
  iconFit: "ratio",
  variant: "rounded",
};

export const AppIconCircle = Template.bind({});
AppIconCircle.args = {
  app: {
    icon: "blog",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Blog",
    scope: [],
  },
  iconFit: "ratio",
  variant: "circle",
};
AppIconCircle.parameters = {
  docs: {
    description: {
      story:
        "Using the `variant` attribute with the `circle` value will change the shape of AppIcon. Default value is `square`",
    },
  },
};

export const AppIconCircleSizes = (args: AppIconProps) => {
  return (
    <div className="d-flex align-items-center gap-8">
      <AppIcon app={args.app} size="24" iconFit="ratio" variant="circle" />
      <AppIcon app={args.app} size="40" iconFit="ratio" variant="circle" />
      <AppIcon app={args.app} size="48" iconFit="ratio" variant="circle" />
      <AppIcon app={args.app} size="80" iconFit="ratio" variant="circle" />
      <AppIcon app={args.app} size="160" iconFit="ratio" variant="circle" />
    </div>
  );
};

export const AppIconRounded = Template.bind({});
AppIconRounded.args = {
  app: {
    icon: "blog",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Blog",
    scope: [],
  },
  iconFit: "ratio",
  variant: "rounded",
};
AppIconRounded.parameters = {
  docs: {
    description: {
      story:
        "Using the `variant` attribute with the `rounded` value will change the shape of AppIcon. Default value is `square`",
    },
  },
};

export const AppIconRoundedSizes = (args: AppIconProps) => {
  return (
    <div className="d-flex align-items-center gap-8">
      <AppIcon app={args.app} size="24" iconFit="ratio" variant="rounded" />
      <AppIcon app={args.app} size="40" iconFit="ratio" variant="rounded" />
      <AppIcon app={args.app} size="48" iconFit="ratio" variant="rounded" />
      <AppIcon app={args.app} size="80" iconFit="ratio" variant="rounded" />
      <AppIcon app={args.app} size="160" iconFit="ratio" variant="rounded" />
    </div>
  );
};
AppIconRoundedSizes.args = {
  app: {
    icon: "blog",
    address: "",
    display: false,
    displayName: "",
    isExternal: false,
    name: "Blog",
    scope: [],
  },
};
