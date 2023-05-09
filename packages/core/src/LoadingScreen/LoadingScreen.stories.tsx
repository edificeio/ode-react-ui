import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingScreen, { LoadingScreenProps } from "./LoadingScreen";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    docs: {
      description: {
        component:
          "The LoadingScreen component is commonly used with Lazy Loaded Components (code splitting) to notify the user that components are loading.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoadingScreen>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoadingScreen> = (
  args: LoadingScreenProps,
) => <LoadingScreen {...args} />;

export const Base = Template.bind({});

export const Position = Template.bind({});
Position.parameters = {
  docs: {
    description: {
      story:
        "Position of the component is set to `true` per default. If set to `false`, LoadingScreen will take the whole screen and shows an overlay",
    },
  },
};
