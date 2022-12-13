import useToggle from "./useToggle";
import { Button, Heading } from "@ode-react-ui/core";

export default {
  title: "Hooks/useToggle",
};

export const Example = () => {
  const [state, toggle] = useToggle(false);

  return (
    <>
      <Heading level="h1" headingStyle="h3">
        {state.toString()}
      </Heading>
      <Button type="button" color="primary" variant="filled" onClick={toggle}>
        Toggle
      </Button>
    </>
  );
};
