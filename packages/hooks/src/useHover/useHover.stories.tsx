import useHover from "./useHover";
import { Button } from "@ode-react-ui/core";
// @ts-ignore
import docs from "./useHover.docs.mdx";

export default {
  title: "Hooks/useHover",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const [ref, isHovered] = useHover<HTMLButtonElement>();
  return (
    <>
      <Button ref={ref} color="primary" variant="filled">
        Hover Me!
      </Button>
      <div>{isHovered ? "😀" : "😭"}</div>
    </>
  );
};
