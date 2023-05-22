import { Meta, StoryObj } from "@storybook/react";

import { Filter, Plus, Settings } from "@ode-react-ui/icons";
import DropdownTrigger, { DropdownTriggerProps } from "./DropdownTrigger";
import React from "react";

export default {
  title: "Components/Dropdown/DropdownTrigger",
  component: DropdownTrigger,
} as Meta<typeof DropdownTrigger>;

type Story = StoryObj<typeof DropdownTrigger>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args: DropdownTriggerProps) => {
  return (
    <div className="d-flex gap-16">
      <DropdownTrigger title="Default dropdown" />
      <DropdownTrigger title="Selected dropdown" state="selected" />
      <DropdownTrigger title="Disabled dropdown" state="disabled" />
      <DropdownTrigger title="Focused dropdown" state="focus" />
    </div>
  );
};

export const States: Story = {
  render: Template,
};

const TemplateSize = () => {
  return (
    <div className="d-flex gap-16 align-items-end">
      <DropdownTrigger size="lg" title="Big dropdown (default)" />
      <DropdownTrigger size="md" title="Medium dropdown" />
      <DropdownTrigger size="sm" title="Small dropdown" />
    </div>
  );
};

export const Sizes: Story = {
  render: TemplateSize,
};

const TemplateIcon = () => {
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

export const Icons: Story = {
  render: TemplateIcon,
};

const TemplateStyle = () => {
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

export const Style: Story = {
  render: TemplateStyle,
};
