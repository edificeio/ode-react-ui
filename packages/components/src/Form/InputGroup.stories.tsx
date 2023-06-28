import { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import Button from "../Button/Button";

import { Checkbox, FormControl, Input, Radio } from "./index";
import React from "react";
import { Indeterminate } from "./Checkbox.stories";
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

export const MultiInputGroup: Story = {
  render: (args) => {
    const [username, setUsername] = useState<string>("");
    const [server, setServer] = useState<string>("");
    const serverUrl = useMemo(
      () => username + "@" + server,
      [username, server],
    );
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
        {
          <div className="py-8">
            Your url is {serverUrl !== "@" && serverUrl}
          </div>
        }
      </div>
    );
  },
};

export const CheckboxRadio: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>("CM1");
    return (
      <div>
        <FormControl id="addline" className="input-group mb-12">
          <div className="input-group-text">
            <Checkbox {...Indeterminate.args} />
          </div>
          <Input type="text" placeholder="Add this line" size="lg" />
        </FormControl>
        <FormControl id="slectLine" className="input-group mb-12">
          <div className="input-group-text">
            <Radio
              value="CP"
              model={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Input type="text" placeholder="Select this line" size="lg" />
        </FormControl>
        <FormControl id="slectLine" className="input-group">
          <div className="input-group-text">
            <Radio
              value="CE1"
              model={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <Input type="text" placeholder="Select this line" size="lg" />
        </FormControl>
      </div>
    );
  },
};
