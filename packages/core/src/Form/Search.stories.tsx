import { Mail, Search } from "@ode-react-ui/icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchButton from "../Button/SearchButton";

import { FormControl, Input } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Forms/Search",
  component: FormControl,
  parameters: {
    docs: {
      description: {
        component:
          "The Search Bar is the composition of FormControl, Input and SearchButton components. Adding the `input-group` class to the FormControl component will add the right style. All components have access to all their expected props.",
      },
    },
  },
  argTypes: {
    status: {
      options: ["valid", "invalid"],
      control: { type: "select" },
    },
  },
  args: {
    id: "search",
    isOptional: false,
    isReadOnly: false,
    isRequired: false,
    status: undefined,
  },
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl id={args.id} status={args.status} className="input-group">
    <Input
      type="search"
      placeholder="Placeholder text"
      size="md"
      noValidationIcon
    />
    <SearchButton type="submit" aria-label="search" icon={<Search />} />
  </FormControl>
);

export const Base = Template.bind({});

export const Large = () => {
  return (
    <FormControl id="large-search" className="input-group">
      <Input
        type="search"
        placeholder="Placeholder text"
        size="lg"
        noValidationIcon
      />
      <SearchButton type="submit" aria-label="search" icon={<Search />} />
    </FormControl>
  );
};
