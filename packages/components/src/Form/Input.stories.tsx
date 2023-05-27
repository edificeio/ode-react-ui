import { Meta, StoryObj } from "@storybook/react";
import { Ref, useEffect, useRef } from "react";
import { Button } from "../Button";

import { FormControl, Input, Label, FormText, InputProps } from "./index";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Input",
  component: Input,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    type: {
      options: [
        "button",
        "checkbox",
        "color",
        "date",
        "datetime-local",
        "email",
        "file",
        "hidden",
        "image",
        "month",
        "number",
        "password",
        "radio",
        "range",
        "reset",
        "search",
        "submit",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ],
      control: { type: "select" },
    },
  },
  args: {
    disabled: false,
    placeholder: "Text Placeholder",
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => {
  return (
    <FormControl id="example">
      <Input {...args} />
    </FormControl>
  );
};

export const Base: Story = {
  render: Template,

  args: {
    type: "text",
    size: "md",
    placeholder: "Open Digital Education",
  },
};

export const Small: Story = {
  render: Template,

  args: {
    size: "sm",
    type: "text",
    placeholder: "Open Digital Education",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Used when the information to fill is within a block, for exemple on a calendar component to set the date interval.",
      },
    },
  },
};

export const Medium: Story = {
  render: Template,

  args: {
    type: "text",
    size: "md",
    placeholder: "Open Digital Education",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Used when there are many information to fill on a page. We use the medium size to gain space on the page.",
      },
    },
  },
};

export const Large: Story = {
  render: Template,

  args: {
    size: "lg",
    type: "text",
    placeholder: "Open Digital Education",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Used when the information to fill is within a block, for exemple on a calendar component to set the date interval.",
      },
    },
  },
};

export const InputWithValue: Story = {
  render: ({ ...args }) => {
    const inputRef: Ref<HTMLInputElement> = useRef(null);

    useEffect(() => {
      // Can be a type guard
      if (inputRef.current != null) {
        inputRef.current.value = "This input has a value.";
      }
    }, []);

    return (
      <FormControl id="example-2">
        <Input
          ref={inputRef}
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
        />
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story: "When Input has a value, `border-color` changes.",
      },
    },
  },
};

export const InputFocused: Story = {
  render: ({ ...args }) => {
    const inputRef: Ref<HTMLInputElement> = useRef(null);

    const handleFocus = () => {
      inputRef.current?.focus();
    };

    return (
      <FormControl id="example-3" className="d-flex gap-8">
        <Input
          ref={inputRef}
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
        />
        <Button
          type="button"
          color="primary"
          variant="filled"
          onClick={handleFocus}
        >
          Focus
        </Button>
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "When Input is focused, `border-color` changes depending on the theme.",
      },
    },
  },
};

export const ValidStatus: Story = {
  render: ({ ...args }) => {
    return (
      <FormControl id="example-4" status="valid">
        <Input
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
        />
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "If input is valid (if condition met is true), we pass `status='valid'` through FormControl Component",
      },
    },
  },
};

export const ValidStatusWithMessage: Story = {
  render: ({ ...args }) => {
    return (
      <FormControl id="example-4" status="valid">
        <Input
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
        />
        <FormText>Informative message</FormText>
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "By passing `status='valid'` through FormControl Component, informative message will go green too :)",
      },
    },
  },
};

export const InvalidStatus: Story = {
  render: ({ ...args }) => {
    return (
      <FormControl id="example-4" status="invalid">
        <Input
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
        />
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "If input is invalid (if condition met is false), we pass `status='invalid'` through FormControl Component",
      },
    },
  },
};

export const InvalidStatusWithMessage: Story = {
  render: ({ ...args }) => {
    return (
      <FormControl id="example-4" status="invalid">
        <Label>Label Text</Label>
        <Input
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
        />
        <FormText>Informative message</FormText>
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "By passing `status='invalid'` through FormControl Component, informative message will go red too :(",
      },
    },
  },
};

export const StatusWithoutIcon: Story = {
  render: ({ ...args }) => {
    return (
      <FormControl id="example-4" status="valid">
        <Input
          type={args.type}
          placeholder={args.placeholder}
          size={args.size}
          noValidationIcon
        />
      </FormControl>
    );
  },

  parameters: {
    docs: {
      description: {
        story:
          "You can add the `noValidationIcon` props to the Input Component to remove validation icon",
      },
    },
  },
};

export const DisabledStatus: Story = {
  render: Template,

  args: {
    disabled: true,
    size: "md",
    type: "text",
    placeholder: "Open Digital Education",
  },
};
