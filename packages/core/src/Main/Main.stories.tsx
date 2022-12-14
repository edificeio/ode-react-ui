import { ComponentStory, ComponentMeta } from "@storybook/react";
import Main from "./Main";

export default {
  title: "Layouts/Main",
  component: Main,
  args: {
    children: "This this the main content of the application.",
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args}></Main>;

export const Base = Template.bind({});
