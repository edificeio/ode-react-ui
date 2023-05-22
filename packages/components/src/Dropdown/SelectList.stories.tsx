import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import SelectList, { SelectListProps } from "./SelectList";
import { Audio, Block, Lock } from "@ode-react-ui/icons";
import React from "react";

export default {
  title: "Components/Dropdown/SelectList",
  component: SelectList,
  argTypes: {
    hideCheckbox: { control: "boolean" },
    onChange: { control: false },
    model: { control: false },
  },
} as Meta<typeof SelectList>;

type Story = StoryObj<typeof SelectList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: SelectListProps) => {
  const [listModel, setListModel] = useState<(string | number)[]>([]);

  return (
    <>
      <SelectList
        options={args.options}
        hideCheckbox={args.hideCheckbox}
        model={listModel}
        onChange={(model) => setListModel(model)}
      />
      <div className="my-32 p-8 bg-light">
        Selected options : {listModel.map((item) => item + ", ")}
      </div>
    </>
  );
};

export const Base: Story = {
  render: Template,

  args: {
    options: [
      {
        value: "disable",
        label: "Disable",
        icon: Block,
      },
      {
        value: "audio",
        label: "Enable audio conference",
        icon: Audio,
      },
      {
        value: "secure_mode",
        label: "Secure mode",
        icon: Lock,
      },
    ],
  },
};
