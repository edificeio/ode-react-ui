import { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Avatar used for Card Components or User image. Default image is a placeholder or when `src` isn't provided or on error.",
      },
    },
  },
  args: {
    variant: "square",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["square", "rounded", "circle"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {
  render: (args) => <Avatar {...args} />,
};

export const AvatarSizes: Story = {
  render: (args) => {
    return (
      <div className="d-flex align-items-center gap-8">
        <Avatar size="xs" alt="alternative text" />
        <Avatar size="sm" alt="alternative text" />
        <Avatar size="md" alt="alternative text" />
        <Avatar size="lg" alt="alternative text" />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "Avatar Component accepts 4 sizes with the `size` prop attribute: `xs | sm | md | lg`",
      },
    },
  },
};

export const AvatarShapes: Story = {
  render: (args) => {
    return (
      <div className="d-flex align-items-center gap-8">
        <Avatar
          src="https://i.pravatar.cc/300"
          size="md"
          variant="square"
          alt="alternative text"
        />
        <Avatar
          src="https://i.pravatar.cc/300"
          size="md"
          variant="rounded"
          alt="alternative text"
        />
        <Avatar
          src="https://i.pravatar.cc/300"
          size="md"
          variant="circle"
          alt="alternative text"
        />
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "Avatar Component can take 3 different shapes with the `variant` prop attribute: `square | rounded | circle`. Default value is `square`",
      },
    },
  },
};

export const AvatarFallback: Story = {
  render: (args) => (
    <Avatar
      src="/assets/themes/ode-bootstrap/images/no-avatar"
      size="md"
      variant="square"
      alt="alternative text"
    />
  ),

  parameters: {
    docs: {
      description: {
        story:
          "If `src` is undefined or on error, we use the placeholder image as a fallback.",
      },
    },
  },
};

export const AvatarCustomFallback: Story = {
  render: (args) => {
    return (
      <Avatar
        size="md"
        alt="alternative text"
        imgPlaceholder="https://bit.ly/kent-c-dodds"
      />
    );
  },

  parameters: {
    docs: {
      description: {
        story: "You can override the default fallback with `imgPlaceholder`",
      },
    },
  },
};
