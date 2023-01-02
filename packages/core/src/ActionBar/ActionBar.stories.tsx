import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import ActionBar from "./ActionBar";

export default {
  title: "Components/ActionBar",
  component: ActionBar,
} as ComponentMeta<typeof ActionBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActionBar> = (args: any) => {
  return (
    <>
      <ActionBar {...args} />
    </>
  );
};

export const Base = Template.bind({});
Base.args = {
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
};
