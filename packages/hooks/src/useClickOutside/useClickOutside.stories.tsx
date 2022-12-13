import { useRef, useState } from "react";

import useClickOutside from "./useClickOutside";
import { Button } from "@ode-react-ui/core";
// @ts-ignore
import docs from "./useClickOutside.docs.mdx";

export default {
  title: "Hooks/useClickOutside",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState<boolean>(true);

  useClickOutside(ref, () => setOpen(false));

  if (isOpen) {
    return (
      <Button ref={ref} type="button" color="primary" variant="filled">
        Click outside of me
      </Button>
    );
  }

  return (
    <Button
      type="button"
      color="secondary"
      variant="filled"
      onClick={() => setOpen(true)}
    >
      Restart
    </Button>
  );
};
