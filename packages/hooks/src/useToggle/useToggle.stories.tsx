import useToggle from "./useToggle";
import { Button } from "../../../components/src/Button";
import { Heading } from "../../../components/src/Heading";

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
      <Button color="primary" variant="filled" onClick={toggle}>
        Toggle
      </Button>
    </>
  );
};
