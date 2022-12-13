import useTitle from "./useTitle";
import { Heading } from "@ode-react-ui/core";
// @ts-ignore
import docs from "./useTitle.docs.mdx";

export default {
  title: "Hooks/useTitle",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const { title } = useTitle();

  return (
    <Heading level="h1" headingStyle="h3">
      {title}
    </Heading>
  );
};
