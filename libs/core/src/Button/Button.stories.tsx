import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import {
  AddUser,
  Close,
  Hourglass,
  RafterLeft,
  RafterRight,
} from "@ode-react-ui/icons";

import { withCssResources } from "@storybook/addon-cssresources";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Buttons/Button",
  component: Button,
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
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  decorators: [withCssResources],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  color: "primary",
  variant: "filled",
  children: "Label",
  type: "button",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "primary",
  variant: "filled",
  children: "Label",
  type: "button",
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: "Add the disabled props to the button to disable it.",
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  color: "danger",
  variant: "filled",
  children: "Label",
  type: "button",
  disabled: false,
};
Danger.parameters = {
  docs: {
    description: {
      story:
        "Used for destructive actions and warning the user of an important action.",
    },
  },
};

export const Icon = Template.bind({});
Icon.args = {
  ariaLabel: "Add User",
  color: "primary",
  variant: "filled",
  type: "button",
  disabled: false,
  leftIcon: <AddUser title="Add User" />,
};
Icon.parameters = {
  docs: {
    description: {
      story:
        "When using an Icon Button, please provide a text to the aria-label attribute with ariaLabel props to make it accessible.",
    },
  },
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  color: "primary",
  variant: "filled",
  children: "New user",
  type: "button",
  disabled: false,
  leftIcon: <AddUser title="Add User" />,
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  color: "primary",
  variant: "filled",
  children: "Close",
  type: "button",
  disabled: false,
  rightIcon: <Close title="Close" />,
};

export const WithBothIcon = Template.bind({});
WithBothIcon.args = {
  color: "primary",
  variant: "filled",
  children: "Button",
  type: "button",
  disabled: false,
  leftIcon: <RafterLeft title="Chevron Left" />,
  rightIcon: <RafterRight title="Chevron Right" />,
};

export const Loading = Template.bind({});
Loading.args = {
  ariaLabel: "Loading",
  color: "primary",
  variant: "filled",
  type: "button",
  loading: true,
};
Loading.parameters = {
  docs: {
    description: {
      story:
        "When loading, please provide a text to the aria-label attribute with ariaLabel props to make it accessible.",
    },
  },
};

export const LoadingWithText = Template.bind({});
LoadingWithText.args = {
  color: "primary",
  variant: "filled",
  children: "Loading...",
  type: "button",
  loading: true,
};
LoadingWithText.parameters = {
  docs: {
    description: {
      story:
        "Loading button is not disabled but we had `pointer-events:none` to desactive its behaviour. You can add the disabled props if you want. Default position of the loading icon is on the left.",
    },
  },
};

export const LoadingRightWithText = Template.bind({});
LoadingRightWithText.args = {
  color: "primary",
  variant: "filled",
  children: "Loading...",
  type: "button",
  loading: true,
  loadingPosition: "right",
};

LoadingRightWithText.parameters = {
  docs: {
    description: {
      story:
        "You can change the position of the loading icon by adding `loadingPosition='right'`",
    },
  },
};

export const LoadingWithCustomIcon = Template.bind({});
LoadingWithCustomIcon.args = {
  ariaLabel: "Loading",
  color: "primary",
  variant: "filled",
  type: "button",
  loading: true,
  loadingIcon: <Hourglass title="Loading" />,
};

LoadingWithCustomIcon.parameters = {
  docs: {
    description: {
      story:
        "Depending the context or the application, you can override the default loading icon with a custom one.",
    },
  },
};

export const ButtonGroupWithSecondaryAction = (args: any) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <Button {...args} color="secondary" variant="outline">
        Cancel
      </Button>
      <Button {...args} color="secondary" variant="filled">
        Save
      </Button>
    </div>
  );
};

ButtonGroupWithSecondaryAction.parameters = {
  docs: {
    description: {
      story:
        "When more than one buttons, primary action is always on the right side. Then secondary action on its left.",
    },
  },
};

export const ButtonGroupWithIcon = (args: any) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <Button {...args} color="primary" variant="filled">
        Button
      </Button>
      <Button
        {...args}
        color="primary"
        variant="filled"
        leftIcon={<RafterRight />}
        ariaLabel="Next Page"
      />
    </div>
  );
};

ButtonGroupWithIcon.parameters = {
  docs: {
    description: {
      story:
        "Pictograms buttons are standing by themselfs, if put with text buttons, always put them on the right. In this case, they are advanced options of the primary action button.",
    },
  },
};

/* export const ButtonGroupWithSecondaryAction = (args: any) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <Button
        {...args}
        color="primary"
        variant="ghost"
        leftIcon={<RafterLeft />}
        rightIcon={<RafterRight />}
      >
        Button
      </Button>
      <Button
        {...args}
        color="primary"
        variant="filled"
        leftIcon={<RafterLeft />}
        rightIcon={<RafterRight />}
      >
        Button
      </Button>
    </div>
  );
};

 */

export const ButtonGroupWithThirdAction = (args: any) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <Button
        {...args}
        color="primary"
        variant="ghost"
        leftIcon={<RafterLeft />}
        rightIcon={<RafterRight />}
      >
        Button
      </Button>
      <Button
        {...args}
        color="primary"
        variant="outline"
        leftIcon={<RafterLeft />}
        rightIcon={<RafterRight />}
      >
        Button
      </Button>
      <Button
        {...args}
        color="primary"
        variant="filled"
        leftIcon={<RafterLeft />}
        rightIcon={<RafterRight />}
      >
        Button
      </Button>
    </div>
  );
};

ButtonGroupWithThirdAction.parameters = {
  docs: {
    description: {
      story:
        "When more than two buttons, third action is furthest to the left.",
    },
  },
};
