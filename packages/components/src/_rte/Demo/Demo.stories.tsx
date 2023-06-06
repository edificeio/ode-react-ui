import { Meta, StoryObj } from "@storybook/react";

import LinkerExtension, {
  LinkerExtensionProps,
} from "../_extensions/Linker/LinkerExtension";
import { DemoEditor } from ".";
import React from "react";

export default {
  title: "Rich Text Editor/Demo",
  component: LinkerExtension,
  args: {} as LinkerExtensionProps,
} as Meta<typeof LinkerExtension>;

type Story = StoryObj<typeof LinkerExtension>;

export const Base: Story = {
  render: (args: LinkerExtensionProps) => (
    <div className="App">
      <DemoEditor
        content="<p>Salut à tous !</p>"
        extensions={["bold", "linker"]}
      ></DemoEditor>
    </div>
  ),
  args: {} as LinkerExtensionProps,
};
