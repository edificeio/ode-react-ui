import useTitle from "./useTitle";
import { Heading } from "@ode-react-ui/core";

export default {
  title: "Hooks/useTitle",
};

export const Example = () => {
  const { title } = useTitle();

  return (
    <Heading level="h1" headingStyle="h3">
      {title}
    </Heading>
  );
};
