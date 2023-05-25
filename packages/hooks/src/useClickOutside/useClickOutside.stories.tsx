import { useState } from "react";

import useClickOutside from "./useClickOutside";
import { Button } from "../../../components/src/Button";
// @ts-ignore
import docs from "./useClickOutside.docs.mdx";

export default {
  title: "Hooks/useClickOutside",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const [isOpen, setOpen] = useState<boolean>(true);

  const ref = useClickOutside(() => setOpen(false));

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
