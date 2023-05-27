import { Meta, StoryObj } from "@storybook/react";
import toast, { Toaster, resolveValue } from "react-hot-toast";
import { Button } from "../Button";

import Toast from "./Toast";
import React from "react";

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
} as Meta<typeof Toast>;

type Story = StoryObj<typeof Toast>;

export const Base: Story = {
  render: (args) => {
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
  },
};

export const Success: Story = {
  render: (args) => {
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
  },
};

export const Error: Story = {
  render: (args) => {
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
  },
};
export const Loading: Story = {
  render: (args) => {
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
  },
};
