import { useCallback, useRef, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingScreen from "./LoadingScreen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    docs: {
      description: {
        component:
          "The LoadingScreen component is commonly used with the Lazy Loaded (code splitting) component to notify the user that components are loading.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoadingScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingScreen> = (
  args: ReturnType<typeof LoadingScreen>,
) => <LoadingScreen {...args} />;

export const Base = Template.bind({});
