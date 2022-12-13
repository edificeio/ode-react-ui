import { useRef, useState } from "react";

import useClickOutside from "./useClickOutside";
import { Button } from "@ode-react-ui/core";

export default {
  title: "Hooks/useClickOutside",
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
