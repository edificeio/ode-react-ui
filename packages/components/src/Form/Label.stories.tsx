import { Mail } from "@ode-react-ui/icons";
import { Meta, StoryObj } from "@storybook/react";

import { FormControl, Label } from "./index";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Label",
  component: Label,
  subcomponents: { FormControl },
  args: {
    children: "Email",
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

const Template = (args: any) => (
  <FormControl id="uuid">
    <Label {...args}>{args.children}</Label>
  </FormControl>
);

export const Base: Story = {
  render: Template,
};

export const OptionalField: Story = {
  render: (args) => {
    return (
      <FormControl id="email-0" isOptional>
        <Label>Email</Label>
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "By passing `isOptional` through FormControl Component, we inform the user that this field is not required.",
      },
    },
  },
};

export const OptionalFieldCustomText: Story = {
  render: (args) => {
    return (
      <FormControl id="email-1" isOptional>
        <Label leftIcon={<Mail />} optionalText="Not mandatory">
          Email
        </Label>
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "You can custom the optional text with `optionalText` on Label Component.",
      },
    },
  },
};

export const RequiredField: Story = {
  render: (args) => {
    return (
      <FormControl id="email-2" isRequired>
        <Label leftIcon={<Mail />}>Email</Label>
      </FormControl>
    );
  },
};

export const RequiredFieldCustomText: Story = {
  render: (args) => {
    return (
      <FormControl id="email-3" isRequired>
        <Label leftIcon={<Mail />} requiredText="- Mandatory">
          Email
        </Label>
      </FormControl>
    );
  },
};

export const LabelWithIcon: Story = {
  render: Template,

  args: {
    leftIcon: <Mail />,
  },
};
