import { useCallback, useState } from "react";

export default function useModal(initialState = false): [boolean, any] {
  const [isOpen, setOpen] = useState<boolean>(initialState);

  const toggle = useCallback((): void => {
    setOpen((prevState: any) => !prevState);
  }, []);

  return [isOpen, toggle];
}
