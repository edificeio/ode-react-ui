import { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import Button from "../Button/Button";

import { FormControl, Input } from "./index";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/Input Group",
  component: FormControl,
  subcomponents: { Input, Button },
  parameters: {
    docs: {
      description: {
        component:
          "The Input group is made with FormControl, Inputs and Button components. Adding the `input-group` class to the FormControl component will add the right style. All components have access to all their expected props.",
      },
    },
  },
} as Meta<typeof FormControl>;

type Story = StoryObj<typeof FormControl>;

const Template = (args: any) => (
  <FormControl id={args.id} status={args.status} className="input-group">
    <span className="input-group-text">http://ode.example.test/</span>
    <FormControl.Input type="text" placeholder="Url path" size="md" />
    <Button type="submit" aria-label="search">
      Create this url
    </Button>
  </FormControl>
);

export const Base: Story = {
  render: Template,
};

export const MultiInputGroup = () => {
  const [username, setUsername] = useState<string>("");
  const [server, setServer] = useState<string>("");
  const serverUrl = useMemo(() => username + "@" + server, [username, server]);
  return (
    <div>
      <FormControl id="connect-url" className="input-group">
        <Input
          type="text"
          placeholder="Username"
          size="lg"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <span className="input-group-text">@</span>
        <Input
          type="text"
          placeholder="Server"
          size="lg"
          value={server}
          onChange={(event) => setServer(event.target.value)}
        />
        <Button type="submit" aria-label="search">
          Generate
        </Button>
      </FormControl>
      {<div className="py-8">Your url is {serverUrl !== "@" && serverUrl}</div>}
    </div>
  );
};

export const CheckboxRadio = () => {
  return (
    <div>
      <FormControl id="addline" className="input-group mb-12">
        <div className="input-group-text">
          <Input
            type="checkbox"
            placeholder="validate"
            size="lg"
            className="form-check-input mt-0"
          />
        </div>
        <Input type="text" placeholder="Add this line" size="lg" />
      </FormControl>
      <FormControl id="slectLine" className="input-group mb-12">
        <div className="input-group-text">
          <Input
            type="radio"
            name="slectLine"
            placeholder="validate"
            size="lg"
            className="form-check-input mt-0"
          />
        </div>
        <Input type="text" placeholder="Select this line" size="lg" />
      </FormControl>
      <FormControl id="slectLine" className="input-group">
        <div className="input-group-text">
          <Input
            type="radio"
            name="slectLine"
            placeholder="validate"
            size="lg"
            className="form-check-input mt-0"
          />
        </div>
        <Input type="text" placeholder="Select this line" size="lg" />
      </FormControl>
    </div>
  );
};
