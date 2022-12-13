import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "./Loading";

import { Hourglass } from "@ode-react-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Loading",
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
} as ComponentMeta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Base = Template.bind({});
Base.args = {
  loadingPosition: "left",
  children: "Loading...",
};
Base.decorators = [
  (Story) => (
    <div
      className="is-loading btn d-inline-flex align-items-center"
      style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
    >
      {Story()}
    </div>
  ),
];

export const LoadingWithCustomColor = (args: any) => {
  return <Loading {...args} color="blue" />;
};

export const LoadingWithText = Template.bind({});
LoadingWithText.args = {
  loadingPosition: "left",
  children: "Loading...",
};
LoadingWithText.decorators = [
  (Story) => (
    <div
      className="is-loading btn d-inline-flex align-items-center"
      style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
    >
      {Story()}
    </div>
  ),
];

export const LoadingRightWithText = Template.bind({});
LoadingRightWithText.args = {
  loadingPosition: "right",
  children: "Loading...",
};
LoadingRightWithText.decorators = [
  (Story) => (
    <div
      className="is-loading btn d-inline-flex align-items-center"
      style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
    >
      {Story()}
    </div>
  ),
];

export const LoadingCustomIcon = Template.bind({});
LoadingCustomIcon.args = {
  loadingPosition: "left",
  loadingIcon: <Hourglass />,
  children: "Loading...",
};
LoadingCustomIcon.decorators = [
  (Story) => (
    <div
      className="is-loading btn d-inline-flex align-items-center"
      style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
    >
      {Story()}
    </div>
  ),
];

export const LoadingCustomIconWithColor = Template.bind({});
LoadingCustomIconWithColor.args = {
  loadingPosition: "left",
  loadingIcon: <Hourglass color="blue" />,
  children: "Loading...",
};

export const LoadingRightCustomIcon = Template.bind({});
LoadingRightCustomIcon.args = {
  loadingPosition: "right",
  loadingIcon: <Hourglass />,
  children: "Loading...",
};
LoadingRightCustomIcon.decorators = [
  (Story) => (
    <div
      className="is-loading btn d-inline-flex align-items-center"
      style={{ backgroundColor: "#4a4a4a", color: "#fff" }}
    >
      {Story()}
    </div>
  ),
];
