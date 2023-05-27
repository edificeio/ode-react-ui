import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/src/Button";
import useHover from "./useHover";
import docs from "./useHover.mdx";

const meta: Meta<typeof useHover> = {
  title: "Hooks/useHover",
  parameters: {
    docs: { page: docs },
  },
};

export default meta;
type Story = StoryObj<typeof useHover>;

export const Example: Story = {
  render: (args) => {
    const [ref, isHovered] = useHover<HTMLButtonElement>();
    return (
      <>
        <Button ref={ref}>Hover Me!</Button>
        <div>{isHovered ? "😀" : "😭"}</div>
      </>
    );
  },
};
