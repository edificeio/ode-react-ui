import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Ref, useEffect, useRef } from "react";
import { Button } from "../Button";

import { FormControl, Input, Label, FormText, InputProps } from "./index";

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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  return (
    <FormControl id="example">
      <Input {...args} />
    </FormControl>
  );
};

export const Base = Template.bind({});
Base.args = {
  type: "text",
  size: "md",
  placeholder: "Open Digital Education",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  type: "text",
  placeholder: "Open Digital Education",
};
Small.parameters = {
  docs: {
    description: {
      story:
        "Used when the information to fill is within a block, for exemple on a calendar component to set the date interval.",
    },
  },
};

export const Medium = Template.bind({});
Medium.args = {
  type: "text",
  size: "md",
  placeholder: "Open Digital Education",
};
Medium.parameters = {
  docs: {
    description: {
      story:
        "Used when there are many information to fill on a page. We use the medium size to gain space on the page.",
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  type: "text",
  placeholder: "Open Digital Education",
};
Large.parameters = {
  docs: {
    description: {
      story:
        "Used when the information to fill is within a block, for exemple on a calendar component to set the date interval.",
    },
  },
};

export const InputWithValue = ({ ...args }) => {
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
};
InputWithValue.parameters = {
  docs: {
    description: {
      story: "When Input has a value, `border-color` changes.",
    },
  },
};

export const InputFocused = ({ ...args }) => {
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
};
InputFocused.parameters = {
  docs: {
    description: {
      story:
        "When Input is focused, `border-color` changes depending on the theme.",
    },
  },
};

export const ValidStatus = ({ ...args }) => {
  return (
    <FormControl id="example-4" status="valid">
      <Input type={args.type} placeholder={args.placeholder} size={args.md} />
    </FormControl>
  );
};
ValidStatus.parameters = {
  docs: {
    description: {
      story:
        "If input is valid (if condition met is true), we pass `status='valid'` through FormControl Component",
    },
  },
};

export const ValidStatusWithMessage = ({ ...args }) => {
  return (
    <FormControl id="example-4" status="valid">
      <Input type={args.type} placeholder={args.placeholder} size={args.md} />
      <FormText>Informative message</FormText>
    </FormControl>
  );
};
ValidStatusWithMessage.parameters = {
  docs: {
    description: {
      story:
        "By passing `status='valid'` through FormControl Component, informative message will go green too :)",
    },
  },
};

export const InvalidStatus = ({ ...args }) => {
  return (
    <FormControl id="example-4" status="invalid">
      <Input type={args.type} placeholder={args.placeholder} size={args.md} />
    </FormControl>
  );
};
InvalidStatus.parameters = {
  docs: {
    description: {
      story:
        "If input is invalid (if condition met is false), we pass `status='invalid'` through FormControl Component",
    },
  },
};

export const InvalidStatusWithMessage = ({ ...args }) => {
  return (
    <FormControl id="example-4" status="invalid">
      <Label>Label Text</Label>
      <Input type={args.type} placeholder={args.placeholder} size={args.md} />
      <FormText>Informative message</FormText>
    </FormControl>
  );
};
InvalidStatusWithMessage.parameters = {
  docs: {
    description: {
      story:
        "By passing `status='invalid'` through FormControl Component, informative message will go red too :(",
    },
  },
};

export const StatusWithoutIcon = ({ ...args }) => {
  return (
    <FormControl id="example-4" status="valid">
      <Input
        type={args.type}
        placeholder={args.placeholder}
        size={args.md}
        noValidationIcon
      />
    </FormControl>
  );
};
StatusWithoutIcon.parameters = {
  docs: {
    description: {
      story:
        "You can add the `noValidationIcon` props to the Input Component to remove validation icon",
    },
  },
};

export const DisabledStatus = Template.bind({});
DisabledStatus.args = {
  disabled: true,
  size: "md",
  type: "text",
  placeholder: "Open Digital Education",
};

/* export const InputForm = () => {
  const formRef: Ref<HTMLFormElement> = useRef(null);
  const handleSubmit = (event: React.FormEvent) => {
    console.log(formRef);
    console.log(formRef.current);
    if (!formRef.current.checkValidity()) {
      console.log("in");
      event.preventDefault();
      event.stopPropagation();
    }
    formRef.current.classList.add("was-validated");
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="needs-validation"
      noValidate
    >
      <Input isRequired type="text" size="md" placeholder="hello" />
      <div className="mt-8">
        <Button type="submit" color="primary" variant="filled">
          Submit
        </Button>
      </div>
    </form>
  );
}; */

/* export const InputForm = () => {
  const formRef: Ref<HTMLFormElement> = useRef(null);
  const handleSubmit = (event: React.FormEvent) => {
    console.log(formRef);
    console.log(formRef.current);
    if (!formRef.current.checkValidity()) {
      console.log("in");
      event.preventDefault();
      event.stopPropagation();
    }
    formRef.current.classList.add("was-validated");
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="needs-validation"
      noValidate
    >
      <Input isRequired type="text" size="md" placeholder="hello" />
      <div className="mt-8">
        <Button type="submit" color="primary" variant="filled">
          Submit
        </Button>
      </div>
    </form>
  );
}; */
