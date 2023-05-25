import { Button } from "@ode-react-ui/components";
import useHover from "./useHover";
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
      <Button ref={ref}>Hover Me!</Button>
      <div>{isHovered ? "😀" : "😭"}</div>
    </>
  );
};
