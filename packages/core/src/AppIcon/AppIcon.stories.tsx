import { ComponentStory, ComponentMeta } from "@storybook/react";
import AppIcon from "./AppIcon";
import { AppIconProps } from "./AppIconProps";

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
    app: {},
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
Base.args = {
  app: {},
};

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

export const AppIconAsImageSizes = (args: AppIconProps) => {
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
AppIconAsImageSizes.args = {
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

export const AppIconWithRatioSizes = (args: AppIconProps) => {
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
AppIconWithRatioSizes.args = {
  iconFit: "ratio",
  variant: "rounded",
};

export const AppIconWithCircle = Template.bind({});
AppIconWithCircle.args = {
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

export const AppIconWithCircleSizes = (args: AppIconProps) => {
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

export const AppIconWithRounded = Template.bind({});
AppIconWithRounded.args = {
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

export const AppIconWithRoundedSizes = (args: AppIconProps) => {
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
AppIconWithRoundedSizes.args = {
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
