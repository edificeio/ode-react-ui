import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import Radio, { RadioProps } from "./Radio";
import { Applications, ViewList } from "@ode-react-ui/icons";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Radio",
  component: Radio,
  args: {
    label: "",
    value: "",
    model: "",
    onChange: () => {},
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;
export const Base: Story = {
  render: (args: RadioProps) => {
    const [value, setValue] = useState<string>("CM1");

    return (
      <div>
        <div className="align-items-center">
          <div>
            <Radio
              label="Classe préparatoire"
              value="CP"
              model={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <Radio
              label="Cours élémentaire 1"
              value="CM1"
              model={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div>
            <Radio
              label="Cours élémentaire 2"
              value="CM2"
              model={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div>Option séléctionnée : {value && value}</div>
      </div>
    );
  },
};

export const RadioWithIcons: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("list");

    return (
      <div>
        <div className="d-flex gap-16 align-items-center">
          <Radio
            icon={<ViewList />}
            value="list"
            model={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Radio
            icon={<Applications />}
            value="grid"
            model={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>Type de vue : {value && value}</div>
      </div>
    );
  },
};
