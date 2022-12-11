import { Search, UserSearch } from "@ode-react-ui/icons";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchButton from "./SearchButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Buttons/SearchButton",
  component: SearchButton,
  args: {
    "aria-label": "search",
    "type": "button",
    "disabled": false,
    "icon": <Search />,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SearchButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchButton> = (args) => (
  <SearchButton {...args} />
);

export const Base = Template.bind({});

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  icon: <UserSearch />,
};
