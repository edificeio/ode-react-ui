import { useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Base as SelectListStory } from "./SelectList.stories";

import Dropdown from "./Dropdown";
import DropdownTrigger from "./DropdownTrigger";
import {
  Filter,
  SortAscendingLetters,
  SortDescending,
  SortDescendingLetters,
} from "@ode-react-ui/icons";
import SelectList, { OptionListItemType } from "./SelectList";
import React from "react";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  decorators: [
    (Story) => (
      <div style={{ height: "15em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

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

export const Base: Story = {
  render: (args) => {
    const [listModel, setListModel] = useState<(string | number)[]>([]);
    return (
      <Dropdown
        trigger={
          <DropdownTrigger
            title="Dropdown toggle"
            icon={<Filter width={20} />}
            badgeContent={listModel.length > 0 ? listModel.length : undefined}
          />
        }
        content={
          <SelectList
            options={options}
            model={listModel}
            onChange={(model) => setListModel(model)}
          />
        }
      />
    );
  },
};

export const HidingCheckbox: Story = {
  render: (args) => {
    const [listModel, setListModel] = useState<(string | number)[]>([]);
    return (
      <Dropdown
        trigger={
          <DropdownTrigger
            title="Dropdown toggle"
            icon={<Filter width={20} />}
          />
        }
        content={
          <SelectList
            options={options}
            model={listModel}
            onChange={(model) => setListModel(model)}
            hideCheckbox
          />
        }
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Checkboxes are hideable by adding `hideCheckbox` props to the `<SelectList/>` Component.",
      },
    },
  },
};

export const Ghost: Story = {
  render: (args) => {
    const [listModel, setListModel] = useState<(string | number)[]>([]);

    return (
      <div className="d-flex justify-content-between ">
        <Dropdown
          trigger={
            <DropdownTrigger
              title="Dropdown toggle"
              variant="ghost"
              icon={<Filter width={20} />}
              badgeContent={listModel.length > 0 ? listModel.length : undefined}
            />
          }
          content={
            <SelectList
              options={options}
              model={listModel}
              onChange={(model) => setListModel(model)}
              hideCheckbox
            />
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Change `variant` props to `ghost` in `<DropdownTrigger/> Component",
      },
    },
  },
};
