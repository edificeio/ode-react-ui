import { Search, UserSearch } from "@ode-react-ui/icons";
import { Meta, StoryObj } from "@storybook/react";

import SearchButton from "./SearchButton";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Buttons/SearchButton",
  component: SearchButton,
  args: {
    "aria-label": "search",
    type: "button",
    disabled: false,
    icon: <Search />,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof SearchButton>;

type Story = StoryObj<typeof SearchButton>;

export const Base: Story = {};

export const WithCustomIcon: Story = {
  args: {
    icon: <UserSearch />,
  },
};
