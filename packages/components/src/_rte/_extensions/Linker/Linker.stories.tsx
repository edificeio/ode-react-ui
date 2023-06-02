import { Meta, StoryObj } from "@storybook/react";

import Linker, { LinkerProps } from "./Linker";
import React from "react";

export default {
  title: "Rich Text Editor/Linker",
  component: Linker,
  args: {} as LinkerProps,
} as Meta<typeof Linker>;

type Story = StoryObj<typeof Linker>;

export const Base: Story = {
  render: (args: LinkerProps) => (
    <div className="App">
      <Linker {...args} />
    </div>
  ),
  args: {} as LinkerProps,
};
