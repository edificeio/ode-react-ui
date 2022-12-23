import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "../index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Avatar used for Card Components, as Placeholder for Application Icon",
      },
    },
  },
  args: {
    isIconUrl: false,
    variant: "square",
    size: "md",
    appCode: "placeholder",
    appName: "placeholder",
    alt: "alternative text",
    src: "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
  },
  argTypes: {
    isIconUrl: { control: "boolean" },
    variant: {
      options: ["square", "circle", "title"],
      control: { type: "select" },
    },
    size: {
      options: ["md", "lg"],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: any) => (
  <Avatar {...args} />
);
export const Base = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const IconCircle = Template.bind({});
IconCircle.args = {
  size: "md",
  variant: "circle",
};

export const Image = Template.bind({});
Image.args = {
  isIconUrl: true,
};

export const ImageCustomURL = Template.bind({});
ImageCustomURL.args = {
  isIconUrl: true,
  src: "https://ent.l-educdenormandie.fr/formulaire/public/img/logo.svg",
};

export const ImageLarge = Template.bind({});
ImageLarge.args = {
  isIconUrl: true,
  size: "lg",
};

export const ImageCircle = Template.bind({});
ImageCircle.args = {
  isIconUrl: true,
  variant: "circle",
};

export const IconApp = () => {
  const mockedApp = {
    address: "/blog",
    icon: "exercizer",
    name: "Blog",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  };
  return <Avatar appCode={mockedApp.icon} variant="square" />;
};

export const IconAppLarge = () => {
  const mockedApp = {
    address: "/blog",
    icon: "exercizer",
    name: "Blog",
    scope: [],
    display: false,
    displayName: "",
    isExternal: false,
  };
  return <Avatar appCode={mockedApp.icon} variant="square" size="lg" />;
};
