import { Meta, StoryObj } from "@storybook/react";

import Loading, { LoadingProps } from "./Loading";

import { Hourglass } from "@ode-react-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    loadingPosition: {
      options: ["left", "right"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    isLoading: true,
    loadingPosition: "left",
    loadingIcon: undefined,
  },
} as Meta<typeof Loading>;

type Story = StoryObj<typeof Loading>;

export const Base: Story = {
  args: {
    loadingPosition: "left",
    children: "Loading...",
  },

  decorators: [
    (Story) => (
      <div
        className="is-loading btn d-inline-flex align-items-center"
        style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
      >
        {Story()}
      </div>
    ),
  ],
};

export const LoadingWithCustomColor: Story = {
  render: (args: LoadingProps) => {
    return <Loading {...args} color="blue" />;
  },
};

export const LoadingWithText: Story = {
  args: {
    loadingPosition: "left",
    children: "Loading...",
  },

  decorators: [
    (Story) => (
      <div
        className="is-loading btn d-inline-flex align-items-center"
        style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
      >
        {Story()}
      </div>
    ),
  ],
};

export const LoadingRightWithText: Story = {
  args: {
    loadingPosition: "right",
    children: "Loading...",
  },

  decorators: [
    (Story) => (
      <div
        className="is-loading btn d-inline-flex align-items-center"
        style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
      >
        {Story()}
      </div>
    ),
  ],
};

export const LoadingCustomIcon: Story = {
  args: {
    loadingPosition: "left",
    loadingIcon: <Hourglass />,
    children: "Loading...",
  },

  decorators: [
    (Story) => (
      <div
        className="is-loading btn d-inline-flex align-items-center"
        style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
      >
        {Story()}
      </div>
    ),
  ],
};

export const LoadingCustomIconWithColor: Story = {
  args: {
    loadingPosition: "left",
    loadingIcon: <Hourglass color="blue" />,
    children: "Loading...",
  },
};

export const LoadingRightCustomIcon: Story = {
  args: {
    loadingPosition: "right",
    loadingIcon: <Hourglass />,
    children: "Loading...",
  },

  decorators: [
    (Story) => (
      <div
        className="is-loading btn d-inline-flex align-items-center"
        style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
      >
        {Story()}
      </div>
    ),
  ],
};
