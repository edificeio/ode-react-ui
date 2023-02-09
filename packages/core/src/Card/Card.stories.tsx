import { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./Card";
import { CardProps } from "./CardProps";

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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} />
);

export const Base = Template.bind({});

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  resourceSrc:
    "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
};

export const LoadingCard = Template.bind({});
LoadingCard.args = {
  isLoading: true,
};

export const AnimatedCard = Template.bind({});
AnimatedCard.args = {
  isAnimated: true,
};

export const FolderCard = Template.bind({});
FolderCard.args = {
  isFolder: true,
};

export const FolderLoadingCard = Template.bind({});
FolderLoadingCard.args = {
  isFolder: true,
  isLoading: true,
};

export const SelectedCard = Template.bind({});
SelectedCard.args = {
  isFolder: false,
  isSelected: true,
};

export const SelectedFolder = Template.bind({});
SelectedFolder.args = {
  isFolder: true,
  isSelected: true,
};
