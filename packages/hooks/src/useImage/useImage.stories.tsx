import useImage from "./useImage";
import { Heading } from "@ode-react-ui/core";
// @ts-ignore
import docs from "./useImage.docs.mdx";

export default {
  title: "Hooks/useImage",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  // const title = useTitle();
  const title = "test";

  return (
    <Heading level="h1" headingStyle="h3">
      {title}
    </Heading>
  );
};
