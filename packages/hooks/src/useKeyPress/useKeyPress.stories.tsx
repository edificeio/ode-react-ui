import useKeyPress from "./useKeyPress";
import { Button } from "../../../components/src/Button";
// @ts-ignore
import docs from "./useKeyPress.mdx";
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof useKeyPress> = {
  title: "Hooks/useKeyPress",
  parameters: {
    docs: { page: docs },
  },
};

export default meta;
type Story = StoryObj<typeof useKeyPress>;

export const Example: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    useKeyPress(() => {
      setIsVisible(false);
    }, ["Escape"]);

    return (
      <div>
        {isVisible ? (
          <Button type="button" color="primary" variant="filled">
            Press the Escape key to hide me
          </Button>
        ) : (
          <p className="body">You hide the button with the Escape Key</p>
        )}
      </div>
    );
  },
};
