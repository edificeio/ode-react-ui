import { Meta, StoryObj } from "@storybook/react";
import LoadingScreen from "./LoadingScreen";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/LoadingScreen",
  component: LoadingScreen,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The LoadingScreen component is commonly used with Lazy Loaded Components (code splitting) to notify the user that components are loading.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof LoadingScreen>;

type Story = StoryObj<typeof LoadingScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Base: Story = {
  render: (args) => <LoadingScreen />,
};

export const Position: Story = {
  render: (args) => <LoadingScreen />,

  parameters: {
    docs: {
      description: {
        story:
          "Position of the component is set to `true` per default. If set to `false`, LoadingScreen will take the whole screen and shows an overlay",
      },
    },
  },
};
