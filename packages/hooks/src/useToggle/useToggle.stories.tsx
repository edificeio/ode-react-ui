import useToggle from "./useToggle";
import { Button } from "../../../components/src/Button";
import { Heading } from "../../../components/src/Heading";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof useToggle> = {
  title: "Hooks/useToggle",
};

export default meta;
type Story = StoryObj<typeof useToggle>;

export const Example: Story = {
  render: (args) => {
    const [state, toggle] = useToggle(false);

    return (
      <>
        <Heading level="h1" headingStyle="h3">
          {state.toString()}
        </Heading>
        <Button color="primary" variant="filled" onClick={toggle}>
          Toggle
        </Button>
      </>
    );
  },
};
