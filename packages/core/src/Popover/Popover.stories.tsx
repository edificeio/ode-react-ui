import { useHover } from "@ode-react-ui/hooks";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AnimatePresence } from "framer-motion";
import { useId } from "react";

import { Button, Popover, PopoverProps } from "../index";
import { PopoverBody, PopoverFooter, PopoverHeader } from "./Popover";

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
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args: PopoverProps) => {
  const [popoverRef, isPopoverHovered] = useHover<HTMLButtonElement>();
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
      <Button
        ref={popoverRef}
        aria-haspopup="true"
        aria-expanded={isPopoverHovered}
      >
        Hover me!
        <AnimatePresence>
          {isPopoverHovered ? (
            <Popover id={popoverId}>
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
          ) : null}
        </AnimatePresence>
      </Button>
    </div>
  );
};
export const Base = Template.bind({});
