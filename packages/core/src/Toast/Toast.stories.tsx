import { ComponentMeta, ComponentStory } from "@storybook/react";
import toast, { Toaster, resolveValue } from "react-hot-toast";
import { Button } from "../Button";

import Toast from "./Toast";
import { ToastProps } from "./ToastProps";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component:
          "Toast Component is contextual and used on the interface to guide users. It can be closable if the message is one-time information. Alert Component can be accompanied by a button to refer users to additional information available. The colors used in the Component come from the support palette.",
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Toast>;

export const Base = () => {
  // Action to close the Toast
  const { dismiss } = toast;

  /**
   * Optional options:
   * https://react-hot-toast.com/docs/toaster
   */
  const toastOptions = {
    position: "top-right",
    reverseOrder: false,
    gutter: 8,
  };

  const displayToast = () => {
    toast("This is a toast");
  };

  return (
    <>
      <Button type="button" onClick={displayToast}>
        Show Toast Component
      </Button>
      <Toast
        Toaster={Toaster}
        resolveValue={resolveValue}
        dismiss={dismiss}
        toastOptions={toastOptions}
      />
    </>
  );
};

export const Success = () => {
  // Action to close Toast from react-hot-toast
  const { dismiss } = toast;

  // Optional options from react-hot-toast
  const toastOptions = {
    position: "top-right",
    reverseOrder: false,
    gutter: 8,
  };

  const displayToast = () => {
    toast.success("This is a success toast");
  };

  return (
    <>
      <Button type="button" onClick={displayToast}>
        Show Toast Component
      </Button>
      <Toast
        Toaster={Toaster}
        resolveValue={resolveValue}
        dismiss={dismiss}
        toastOptions={toastOptions}
      />
    </>
  );
};

export const Error = () => {
  // Action to close Toast from react-hot-toast
  const { dismiss } = toast;

  // Optional options from react-hot-toast
  const toastOptions = {
    position: "top-right",
    reverseOrder: false,
    gutter: 8,
  };

  const displayToast = () => {
    toast.error("This is an error toast");
  };

  return (
    <>
      <Button type="button" onClick={displayToast}>
        Show Toast Component
      </Button>
      <Toast
        Toaster={Toaster}
        resolveValue={resolveValue}
        dismiss={dismiss}
        toastOptions={toastOptions}
      />
    </>
  );
};
export const Loading = () => {
  // Action to close Toast from react-hot-toast
  const { dismiss } = toast;

  // Optional options from react-hot-toast
  const toastOptions = {
    position: "top-right",
    reverseOrder: false,
    gutter: 8,
  };

  const displayToast = () => {
    toast.loading("This is a loading toast");
  };

  return (
    <>
      <Button type="button" onClick={displayToast}>
        Show Toast Component
      </Button>
      <Toast
        Toaster={Toaster}
        resolveValue={resolveValue}
        dismiss={dismiss}
        toastOptions={toastOptions}
      />
    </>
  );
};
/* 
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
    <Button type="button" variant="ghost" color="tertiary">
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
 */
