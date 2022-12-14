import { useEffect, useState } from "react";

export default function useTitle() {
  const documentDefined = typeof document !== "undefined";

  const [state, setState] = useState<string>(() => document.title);

  useEffect(() => {
    if (!documentDefined) return;

    setState(document.title);
  }, []);

  return {
    state,
  };
}
