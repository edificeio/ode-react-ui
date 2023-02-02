import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import Tooltip from "./Tooltip";
import { AlertCircle } from "@ode-react-ui/icons";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "Wrapper component to show a contextual description on hover",
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args: any) => {
  return (
    <>
      <Tooltip {...args} />
    </>
  );
};

export const Base = Template.bind({});
Base.args = {
  message:
    "Optio minus varius reprehenderit ridiculus praesentium metus porttitor tellus.",
  children: (
    <>
      <Button type="button" variant="filled" color="primary">
        Default tooltip
      </Button>
    </>
  ),
};

export const Bottom = Template.bind({});
Bottom.args = {
  placement: "bottom",
  message:
    "Optio minus varius reprehenderit ridiculus praesentium metus porttitor tellus.",
  children: (
    <Button type="button" variant="filled" color="primary">
      Bottom Tooltip
    </Button>
  ),
};

export const Icon = Template.bind({});
Icon.args = {
  placement: "right",
  message:
    "Optio minus varius reprehenderit ridiculus praesentium metus porttitor tellus.",
  icon: <AlertCircle />,
  children: (
    <Button type="button" variant="filled" color="primary">
      Icon Tooltip
    </Button>
  ),
};
