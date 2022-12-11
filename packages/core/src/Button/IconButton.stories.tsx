import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconButton from "./IconButton";
import { AddUser, Block, Hourglass } from "@ode-react-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Buttons/Icon Button",
  component: IconButton,
  argTypes: {
    color: {
      options: ["primary", "secondary", "tertiary", "danger"],
      control: { type: "select" },
    },
    variant: {
      options: ["filled", "outline", "ghost"],
      control: { type: "select" },
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "select" },
    },
  },
  args: {
    "aria-label": "",
    "color": "primary",
    "variant": "filled",
    "disabled": false,
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  "aria-label": "Add User",
  "color": "primary",
  "variant": "filled",
  "type": "button",
  "disabled": false,
  "icon": <AddUser />,
};

export const IconWithAriaLabel = Template.bind({});
IconWithAriaLabel.args = {
  "aria-label": "Add User",
  "color": "primary",
  "variant": "filled",
  "type": "button",
  "disabled": false,
  "icon": <AddUser title="Add User" />,
};
IconWithAriaLabel.parameters = {
  docs: {
    description: {
      story:
        "When using an Icon Button, please provide a text to the aria-label attribute with ariaLabel props to make it accessible.",
    },
  },
};

export const LoadingIconButton = Template.bind({});
LoadingIconButton.args = {
  "aria-label": "Loading",
  "color": "primary",
  "variant": "filled",
  "type": "button",
  "isLoading": true,
};
LoadingIconButton.parameters = {
  docs: {
    description: {
      story:
        "When loading, please provide a text to the aria-label attribute to make it accessible.",
    },
  },
};

export const LoadingIconButtonWithCustomIcon = Template.bind({});
LoadingIconButtonWithCustomIcon.args = {
  "aria-label": "Loading",
  "color": "primary",
  "variant": "filled",
  "type": "button",
  "isLoading": true,
  "loadingIcon": <Hourglass title="Loading" />,
};

LoadingIconButtonWithCustomIcon.parameters = {
  docs: {
    description: {
      story:
        "You can override the default loading icon with a custom one using `loadingIcon` props.",
    },
  },
};

export const DisabledIconButton = Template.bind({});
DisabledIconButton.args = {
  "aria-label": "Add User",
  "color": "primary",
  "variant": "filled",
  "type": "button",
  "disabled": true,
  "icon": <Block title="Add User" />,
};
