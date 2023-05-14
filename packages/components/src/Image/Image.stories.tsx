import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image, ImageProps } from "../index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component: "Image Component",
      },
    },
  },
  args: {
    src: "https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0=",
    alt: "beautiful landscape",
  },
  argTypes: {},
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => (
  <Image {...args} />
);
export const Base = Template.bind({});

export const Ratio = (args: ImageProps) => {
  return (
    <div className="d-flex align-items-center">
      <div style={{ width: "60%" }}>
        <Image {...args} ratio="1" />
      </div>
      <div style={{ width: "60%" }}>
        <Image {...args} ratio="4" />
      </div>
      <div style={{ width: "60%" }}>
        <Image {...args} ratio="16" />
      </div>
      <div style={{ width: "60%" }}>
        <Image {...args} ratio="21" />
      </div>
    </div>
  );
};
