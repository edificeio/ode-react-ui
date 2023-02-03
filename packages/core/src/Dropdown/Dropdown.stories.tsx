import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Dropdown from "./Dropdown";
import DropdownTrigger from "./DropdownTrigger";
import { Button } from "../Button";
import { Filter } from "@ode-react-ui/icons";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args: any) => {
  return (
    <>
      <Dropdown {...args} />
    </>
  );
};

export const Base = Template.bind({});
Base.args = {
  children: (
    <DropdownTrigger title="Dropdown toggle" icon={<Filter width={20} />} />
  ),
  content: (
    <ul className="dropdown-menu show">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Separated link
        </a>
      </li>
    </ul>
  ),
};
