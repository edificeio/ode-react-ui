import { useState } from "react";

export default function useModal(initialState = false) {
  const [isOpen, setOpen] = useState<boolean>(initialState);

  function toggle(state: boolean) {
    setOpen(state);
  }

  return [isOpen, toggle];
}
