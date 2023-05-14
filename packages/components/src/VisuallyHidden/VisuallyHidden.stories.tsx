import { ComponentMeta, ComponentStory } from "@storybook/react";
import VisuallyHidden, { VisuallyHiddenProps } from "./VisuallyHidden";
import { Button } from "../Button";
import { AddUser } from "@ode-react-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    docs: {
      description: {
        component:
          "It is used to visually hide an element but accessible for screen-readers. It renders html <span> as a wrapper of your content.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof VisuallyHidden>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VisuallyHidden> = (
  args: VisuallyHiddenProps,
) => <VisuallyHidden {...args} />;

export const Base = () => {
  return (
    <Button>
      <AddUser />
      <VisuallyHidden>Add User</VisuallyHidden>
    </Button>
  );
};
