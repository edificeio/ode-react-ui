import { Meta, StoryObj } from "@storybook/react";
import { Lock, Mail } from "@ode-react-ui/icons";
import { FormControl, Input, Label } from "../../../components/src/Form";
import { Button } from "../../../components/src/Button";
import useTrapFocus from "./useTrapFocus";

const meta: Meta<typeof useTrapFocus> = {
  title: "Hooks/useTrapFocus",
};

export default meta;
type Story = StoryObj<typeof useTrapFocus>;

export const Base: Story = {
  render: (args) => {
    const ref = useTrapFocus();

    return (
      <div ref={ref} className="border rounded-4 m-64 py-12 px-8">
        <h2 className="p-12">Trap Focus!</h2>
        <p className="p-12">
          Press Tab or Shift+Tab to cycle through elements focus
        </p>

        <FormControl id="email" isRequired className="p-12">
          <Label leftIcon={<Mail />} requiredText="- Mandatory">
            Email
          </Label>
          <Input
            type="text"
            placeholder="Enter your email..."
            size="md"
            autoFocus
          />
        </FormControl>

        <FormControl id="password" isRequired className="p-12">
          <Label leftIcon={<Lock />} requiredText="- Mandatory">
            Password
          </Label>
          <Input type="text" placeholder="Enter your password..." size="md" />
        </FormControl>

        <div className="d-flex align-items-center justify-content-end">
          <Button type="button" color="tertiary" variant="ghost">
            Cancel
          </Button>

          <Button type="button" color="primary" variant="filled">
            Submit
          </Button>
        </div>
      </div>
    );
  },
};
