import { useCallback, useRef, useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../Button";
import Alert from "./Alert";
import { AlertRef } from "./AlertProps";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Alerts/Alert",
  component: Alert,
  argTypes: {
    type: {
      options: ["success", "warning", "information", "error"],
      control: { type: "select" },
    },
    isDismissible: {
      control: { type: "boolean" },
    },
    onClose: {
      control: {
        type: null,
      },
    },
    onVisibilityChange: {
      control: {
        type: null,
      },
    },
  },
  args: {
    type: "success",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => {
  const ref = useRef<AlertRef>(null);
  const [showButton, setShowButtonState] = useState(false);

  const onClickButton = useCallback(() => {
    if (ref.current) {
      ref.current.show();
    }
  }, [ref]);

  return (
    <div>
      {showButton && (
        <Button type="button" onClick={onClickButton}>
          Show Alert again
        </Button>
      )}
      <Alert
        {...args}
        ref={ref}
        onVisibilityChange={(state: boolean) => setShowButtonState(!state)}
      >
        {args.children}
      </Alert>
    </div>
  );
};

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  type: "success",
  children:
    "Labore veniam sem officiis quibusdam, error, iusto erat consequat rhoncus venenatis pretium felis fugit ullamcorper perspiciatis, magni perspiciatis!",
};

export const Dissmissible = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dissmissible.args = {
  type: "success",
  children:
    "Ornare senectus inceptos, laboriosam montes suscipit, tristique rhoncus, tristique irure itaque cum, tellus imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
  isDismissible: true,
};

export const WithAction = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAction.args = {
  type: "success",
  button: (
    <Button type="button" variant="outline" color="tertiary">
      Voir
    </Button>
  ),
  children:
    "Ornare senectus inceptos, laboriosam montes suscipit, tristique rhoncus, tristique irure itaque cum, tellus imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
  isDismissible: true,
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  type: "warning",
  children:
    "Ornare senectus inceptos, laboriosam montes suscipit, tristique rhoncus, tristique irure itaque cum, tellus imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
};

export const Information = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Information.args = {
  type: "info",
  children:
    "Ornare senectus inceptos, laboriosam montes suscipit, tristique rhoncus, tristique irure itaque cum, tellus imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  type: "danger",
  children:
    "Ornare senectus inceptos, laboriosam montes suscipit, tristique rhoncus, tristique irure itaque cum, tellus imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
};

export const ToastBase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ToastBase.args = {
  type: "success",
  isToast: true,
  isDismissible: true,
  children:
    "Imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
};

export const ToastTimer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ToastTimer.args = {
  type: "success",
  isToast: true,
  isDismissible: true,
  autoClose: true,
  children:
    "Imperdiet ornare nostra nec curae cumque vitae, minus ridiculus? Auctor eget.",
};
