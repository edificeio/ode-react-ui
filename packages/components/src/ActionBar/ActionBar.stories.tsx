import { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import ActionBar, { ActionBarProps } from "./ActionBar";
import React from "react";

export default {
  title: "Components/ActionBar",
  component: ActionBar,
  subcomponents: { Button },
} as Meta<typeof ActionBar>;

type Story = StoryObj<typeof ActionBar>;

export const Base: Story = {
  render: (args: ActionBarProps) => <ActionBar {...args} />,
  args: {
    children: (
      <>
        <Button type="button" variant="filled" color="primary">
          Créer
        </Button>
        <Button type="button" variant="filled" color="primary">
          Modifier
        </Button>
        <Button type="button" variant="filled" color="primary">
          Publier
        </Button>
      </>
    ),
  },
};
