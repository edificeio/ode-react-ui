import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  level: "h1",
  headingStyle: "h1",
  children: "H1 title",
};
Heading1.parameters = {
  docs: {
    description: {
      story:
        "Heading component can receive 3 props: `as`, `headingStyle`, `children`",
    },
  },
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: "h2",
  headingStyle: "h2",
  children: "H2 title",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: "h3",
  headingStyle: "h3",
  children: "H3 Title",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  level: "h4",
  headingStyle: "h4",
  children: "H4 Title",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  level: "h5",
  headingStyle: "h5",
  children: "H5 Title",
};

export const Heading6 = Template.bind({});
Heading6.args = {
  level: "h6",
  headingStyle: "h6",
  children: "H6 Title",
};

export const CustomHeading = Template.bind({});
CustomHeading.args = {
  level: "h1",
  headingStyle: "h3",
  children: "Lorem ipsum dolor sit amet",
};
CustomHeading.parameters = {
  docs: {
    description: {
      story:
        "It's possible to match the style of an `Hn` element even if not possible to use its semantic HTML version.",
    },
  },
};
