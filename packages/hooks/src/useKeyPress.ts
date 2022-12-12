import { useEffect } from "react";

export default function useKeyPress(
  callback: () => void,
  keyCodes: string[],
): void {
  const handler = ({ code }: KeyboardEvent) => {
    if (keyCodes.includes(code)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}
