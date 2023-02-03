import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import DropdownTrigger from "./DropdownTrigger";
import { Filter, Plus, Settings } from "@ode-react-ui/icons";

export default {
  title: "Components/Dropdown/DropdownTrigger",
  component: DropdownTrigger,
} as ComponentMeta<typeof DropdownTrigger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownTrigger> = (args: any) => {
  return (
    <div className="d-flex gap-16">
      <DropdownTrigger title="Default dropdown" />
      <DropdownTrigger title="Selected dropdown" state="selected" />
      <DropdownTrigger title="Disabled dropdown" state="disabled" />
      <DropdownTrigger title="Focused dropdown" state="focus" />
    </div>
  );
};

export const States = Template.bind({});

const TemplateSize: ComponentStory<typeof DropdownTrigger> = (args: any) => {
  return (
    <div className="d-flex gap-16 align-items-end">
      <DropdownTrigger size="lg" title="Big dropdown (default)" />
      <DropdownTrigger size="md" title="Medium dropdown" />
      <DropdownTrigger size="sm" title="Small dropdown" />
    </div>
  );
};

export const Sizes = TemplateSize.bind({});

const TemplateIcon: ComponentStory<typeof DropdownTrigger> = (args: any) => {
  return (
    <div>
      <div className="d-flex gap-16 align-items-end mb-16">
        <DropdownTrigger icon={<Plus />} size="md" title="Plus dropdown" />
        <DropdownTrigger icon={<Filter />} size="md" title="Filter dropdown" />
        <DropdownTrigger
          icon={<Settings />}
          size="md"
          title="Settings dropdown"
        />
      </div>
      <div className="d-flex gap-16 align-items-end mb-16">
        <DropdownTrigger icon={<Plus />} size="sm" title="Plus dropdown" />
        <DropdownTrigger icon={<Filter />} size="sm" title="Filter dropdown" />
        <DropdownTrigger
          icon={<Settings />}
          size="sm"
          title="Settings dropdown"
        />
      </div>
    </div>
  );
};

export const Icons = TemplateIcon.bind({});

const TemplateStyle: ComponentStory<typeof DropdownTrigger> = (args: any) => {
  return (
    <div>
      <div className="d-flex gap-16 align-items-end mb-16">
        <DropdownTrigger
          icon={<Filter />}
          variant="ghost"
          title="Default dropdown"
        />
        <DropdownTrigger
          icon={<Filter />}
          variant="ghost"
          title="Selected dropdown"
          state="selected"
        />
        <DropdownTrigger
          icon={<Filter />}
          variant="ghost"
          title="Disabled dropdown"
          state="disabled"
        />
        <DropdownTrigger
          icon={<Filter />}
          variant="ghost"
          title="Focused dropdown"
          state="focus"
        />
      </div>
      <div className="d-flex gap-16 align-items-end">
        <DropdownTrigger icon={<Filter />} title="Default dropdown" />
        <DropdownTrigger
          icon={<Filter />}
          title="Selected dropdown"
          state="selected"
        />
        <DropdownTrigger
          icon={<Filter />}
          title="Disabled dropdown"
          state="disabled"
        />
        <DropdownTrigger
          icon={<Filter />}
          title="Focused dropdown"
          state="focus"
        />
      </div>
    </div>
  );
};

export const Style = TemplateStyle.bind({});
