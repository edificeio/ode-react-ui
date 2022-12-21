import { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import ActionsBar from "./ActionsBar";

export default {
  title: "Components/Core/ActionsBar",
  component: ActionsBar,
} as ComponentMeta<typeof ActionsBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActionsBar> = (args) => {
  return (
    <>
      <ActionsBar {...args} />
    </>
  );
};

export const Base = Template.bind({});
Base.args = {
  children: (
    <>
      <Button type="button" variant="ghost" className="text-white">
        Créer
      </Button>
      <Button type="button" variant="ghost" className="text-white">
        Modifier
      </Button>
      <Button type="button" variant="ghost" className="text-white">
        Publier
      </Button>
    </>
  ),
};
