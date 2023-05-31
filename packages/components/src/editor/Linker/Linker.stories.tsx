import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../Button";

import Linker, { LinkerProps } from "./Linker";
import React from "react";

export default {
  title: "Editor/Linker",
  component: Linker,
  subcomponents: { Button },
} as Meta<typeof Linker>;

type Story = StoryObj<typeof Linker>;

export const Base: Story = {
  render: (args: LinkerProps) => <Linker {...args} />,
  args: {},
};
