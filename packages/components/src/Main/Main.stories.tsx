import { Meta, StoryObj } from "@storybook/react";
import Main, { MainProps } from "./Main";
import React from "react";

export default {
  title: "Layout/Main",
  component: Main,
  args: {
    children: "This this the main content of the application.",
  },
} as Meta<typeof Main>;

type Story = StoryObj<typeof Main>;

const Template = (args: MainProps) => <Main {...args}></Main>;

export const Base: Story = {
  render: Template,
};
