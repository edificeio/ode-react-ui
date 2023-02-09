import { useCallback, useRef, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import EmptyScreen from "./EmptyScreen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/EmptyScreen",
  component: EmptyScreen,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof EmptyScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmptyScreen> = (args: any) => {
  return (
    <div>
      <EmptyScreen {...args} />
    </div>
  );
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  image: "success",
  title: "Pour les accros aux post-it",
  text: "Idéal pour s'organiser ou simplement épingler toutes ses idées, le Mur collaboratif est un tableau virtuel interactif. Et comme son nom l'indique, on peut s'y mettre à plusieurs !",
};
