import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Radio from "./Radio";
import { Applications, Filter, ViewList } from "@ode-react-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Radio",
  component: Radio,
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args: any) => {
  const [value, setValue] = useState<string>("CM1");

  return (
    <div>
      <div className=" align-items-center">
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
};

export const Base = Template.bind({});

const IconTemplate: ComponentStory<typeof Radio> = (args: any) => {
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
};

export const Icon = IconTemplate.bind({});