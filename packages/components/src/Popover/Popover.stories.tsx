import { useHover } from "@ode-react-ui/hooks";
import { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";

import { Button } from "../Button";
import { PopoverBody, PopoverFooter, PopoverHeader, Popover } from "./Popover";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: "Popover Component",
      },
    },
  },
} as Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

const PopoverWithHooks = () => {
  const [popoverRef, isPopoverHovered] = useHover<HTMLDivElement>();
  const popoverId = useId();
  return (
    <div
      style={{
        height: "200px",
        display: "grid",
        placeItems: "center",
        marginBottom: "30rem",
      }}
      className="position-relative"
    >
      <div ref={popoverRef} className="position-relative">
        <Button aria-haspopup="true" aria-expanded={isPopoverHovered}>
          Hover me!
        </Button>
        {isPopoverHovered}
        <Popover id={popoverId} isVisible={isPopoverHovered}>
          <PopoverHeader>
            <p>Header</p>
          </PopoverHeader>
          <PopoverBody>
            <p>Body</p>
          </PopoverBody>
          <PopoverFooter className="border-top border-ghost">
            <p>Footer</p>
          </PopoverFooter>
        </Popover>
      </div>
    </div>
  );
};

export const Base: Story = {
  render: () => <PopoverWithHooks />,
};
