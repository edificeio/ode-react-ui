import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Dropdown from "./Dropdown";
import DropdownTrigger from "./DropdownTrigger";
import {
  Filter,
  SortAscendingLetters,
  SortDescending,
  SortDescendingLetters,
} from "@ode-react-ui/icons";
import SelectList, { OptionListItemType } from "./SelectList";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args: any) => {
  const [listModel, setListModel] = useState<(string | number)[]>([]);

  return (
    <div>
      <div className="d-flex justify-content-between ">
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
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export const Base = Template.bind({});

const GhostTemplate: ComponentStory<typeof Dropdown> = (args: any) => {
  const [listModel, setListModel] = useState<(string | number)[]>([]);

  return (
    <div>
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
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export const Ghost = GhostTemplate.bind({});
