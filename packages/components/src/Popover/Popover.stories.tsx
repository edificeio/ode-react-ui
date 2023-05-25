import { useHover } from "@ode-react-ui/hooks";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useId } from "react";

import {
  Popover,
  PopoverBody,
  PopoverFooter,
  PopoverHeader,
  PopoverProps,
} from "./Popover";
import { Button } from "../Button";

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
export const Base = Template.bind({});
