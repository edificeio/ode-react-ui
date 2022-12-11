import { Mail, Search } from "@ode-react-ui/icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button";

import { FormControl, Label, Input, FormText } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Forms/Form Control",
  component: FormControl,
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
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args}>
    <Label>Email</Label>
    <Input type="text" placeholder="Placeholder text" size="md" />
  </FormControl>
);

export const Base = Template.bind({});

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
    <FormControl id="email">
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

export const ReadOnlyStatus = ({ ...args }) => {
  return (
    <FormControl id="example-5" isReadOnly>
      <Input type={args.type} size={args.size} placeholder={args.placeholder} />
    </FormControl>
  );
};
ReadOnlyStatus.args = {
  disabled: false,
  size: "md",
  type: "text",
  placeholder: "This input is readonly and can't be modified.",
};
