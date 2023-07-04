import useScrollToTop from "./useScrollToTop";
import { Button } from "../../../components/src/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof useScrollToTop> = {
  title: "Hooks/useScrollToTop",
};

export default meta;
type Story = StoryObj<typeof useScrollToTop>;

export const Example: Story = {
  render: (args) => {
    return (
      <>
        <Button color="primary" variant="filled" onClick={useScrollToTop}>
          Go to Top
        </Button>
      </>
    );
  },
};
