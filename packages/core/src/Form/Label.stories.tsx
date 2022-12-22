import { Mail } from "@ode-react-ui/icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormControl, Label } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Label",
  component: Label,
  args: {
    children: "Email",
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <FormControl id="uuid">
    <Label {...args}>{args.children}</Label>
  </FormControl>
);

export const Base = Template.bind({});

export const OptionalField = () => {
  return (
    <FormControl id="email-0" isOptional>
      <Label>Email</Label>
    </FormControl>
  );
};
OptionalField.parameters = {
  docs: {
    description: {
      story:
        "By passing `isOptional` through FormControl Component, we inform the user that this field is not required.",
    },
  },
};

export const OptionalFieldCustomText = () => {
  return (
    <FormControl id="email-1" isOptional>
      <Label leftIcon={<Mail />} optionalText="Not mandatory">
        Email
      </Label>
    </FormControl>
  );
};
OptionalFieldCustomText.parameters = {
  docs: {
    description: {
      story:
        "You can custom the optional text with `optionalText` on Label Component.",
    },
  },
};

export const RequiredField = () => {
  return (
    <FormControl id="email-2" isRequired>
      <Label leftIcon={<Mail />}>Email</Label>
    </FormControl>
  );
};

export const RequiredFieldCustomText = () => {
  return (
    <FormControl id="email-3" isRequired>
      <Label leftIcon={<Mail />} requiredText="- Mandatory">
        Email
      </Label>
    </FormControl>
  );
};

export const LabelWithIcon = Template.bind({});
LabelWithIcon.args = {
  leftIcon: <Mail />,
};
