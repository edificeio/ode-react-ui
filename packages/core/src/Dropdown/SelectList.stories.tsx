import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Canvas, Meta, Story } from "@storybook/addon-docs";

import SelectList from "./SelectList";
import {
  SortAscendingLetters,
  SortDescending,
  SortDescendingLetters,
} from "@ode-react-ui/icons";
import { OptionListItemType } from "./SelectListProps";

export default {
  title: "Components/Dropdown/SelectList",
  component: SelectList,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
} as ComponentMeta<typeof SelectList>;

const options: OptionListItemType[] = [
  {
    value: 1,
    label: "Item choice",
    icon: SortAscendingLetters,
  },
  {
    value: 2,
    label: "Item choice 2",
    icon: SortDescendingLetters,
  },
  {
    value: 3,
    label: "Item choice 3",
    icon: SortDescending,
  },
];

const optionsNoIcons: OptionListItemType[] = [
  {
    value: 1,
    label: "Item choice 1",
  },
  {
    value: 2,
    label: "Item choice 2",
  },
  {
    value: 3,
    label: "Item choice 3",
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectList> = (args: any) => {
  const [listModel, setListModel] = useState<(string | number)[]>([]);
  return (
    <div className="d-flex gap-16">
      <SelectList
        model={listModel}
        onChange={(model) => setListModel(model)}
        {...args}
      />
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  options: options,
};

export const NoIcons = Template.bind({});
NoIcons.args = {
  options: optionsNoIcons,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  options: options,
  minWidth: "100%",
};

export const NoCheckbox = Template.bind({});
NoCheckbox.args = {
  options: options,
  hideCheckbox: true,
};
