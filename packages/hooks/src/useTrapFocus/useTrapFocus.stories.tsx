<<<<<<< HEAD
import { Lock, Mail } from "@ode-react-ui/icons";
import { Button } from "../../../components/src/Button";
import Label from "../../../components/src/Form/Label";
import Input from "../../../components/src/Form/Input";
import FormControl from "../../../components/src/Form/FormControl";
=======
import { StoryObj } from "@storybook/react";
import { Lock, Mail } from "@ode-react-ui/icons";
import { FormControl, Input, Label } from "../../../components/src/Form";
import { Button } from "../../../components/src/Button";
import { useEffect, useRef } from "react";
>>>>>>> c7fc32c (chore(dep): upgraded version StoryBook)
import useTrapFocus from "./useTrapFocus";

export default {
  title: "Hooks/useTrapFocus",
};

<<<<<<< HEAD
const Template = () => {
  const ref = useTrapFocus();
=======
type Story = StoryObj<typeof HTMLDivElement>;

const Template = () => {
  const divRef = useRef<any>();

  useEffect(() => {
    useTrapFocus(divRef);
  }, []);
>>>>>>> c7fc32c (chore(dep): upgraded version StoryBook)

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
};

export const Base: Story = {
  render: Template,
};
