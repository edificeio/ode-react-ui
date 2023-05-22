import React from "react";
import { Mail } from "@ode-react-ui/icons";
import { Meta, StoryObj } from "@storybook/react";

import { FormControl, Label, Input, FormText, FormControlProps } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Form Control",
  component: FormControl,
  subcomponents: { Label, Input, Text: FormText },
  argTypes: {
    status: {
      options: ["valid", "invalid"],
      control: { type: "select" },
    },
  },
  args: {
    id: "uuid",
    isOptional: false,
    isReadOnly: false,
    isRequired: false,
    status: undefined,
  },
} as Meta<typeof FormControl>;

type Story = StoryObj<typeof FormControl>;

const Template = (args: FormControlProps) => (
  <FormControl {...args}>
    <Label>Email</Label>
    <Input type="text" placeholder="Placeholder text" size="md" />
  </FormControl>
);

export const Base: Story = {
  render: Template,
};

export const WithLabel = () => {
  return (
    <FormControl id="email-X23">
      <Label>Email</Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
    </FormControl>
  );
};

export const WithLabelAndIcon = () => {
  return (
    <FormControl id="email-7">
      <Label leftIcon={<Mail />}>Email</Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
    </FormControl>
  );
};

export const WithInformativeMessage = () => {
  return (
    <FormControl id="email" style={{ marginTop: "3px" }}>
      <Label leftIcon={<Mail />}>Email</Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
      <FormText>Informative Message</FormText>
    </FormControl>
  );
};

export const OptionalField = () => {
  return (
    <FormControl id="email-0" isOptional>
      <Label leftIcon={<Mail />}>Email</Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
    </FormControl>
  );
};

export const OptionalFieldCustomText = () => {
  return (
    <FormControl id="email-1" isOptional>
      <Label leftIcon={<Mail />} optionalText="Not mandatory">
        Email
      </Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
    </FormControl>
  );
};

export const RequiredField = () => {
  return (
    <FormControl id="email-2" isRequired>
      <Label leftIcon={<Mail />}>Email</Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
    </FormControl>
  );
};

export const RequiredFieldCustomText = () => {
  return (
    <FormControl id="email-3" isRequired>
      <Label leftIcon={<Mail />} requiredText="- Mandatory">
        Email
      </Label>
      <Input type="text" placeholder="Placeholder text" size="md" />
    </FormControl>
  );
};

export const ReadOnlyStatus: Story = {
  render: ({ ...args }) => {
    return (
      <FormControl id="example-5" isReadOnly>
        <Input type="text" size="md" placeholder={args.placeholder} />
      </FormControl>
    );
  },

  args: {
    placeholder: "This input is readonly and can't be modified.",
  },
};
