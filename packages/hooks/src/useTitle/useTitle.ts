import { useEffect, useState } from "react";

export default function useTitle() {
  const documentDefined = typeof document !== "undefined";

  const [title, setTitle] = useState<string>(() => document.title);

  useEffect(() => {
    if (!documentDefined) return;

    setTitle(document.title);
  }, []);

  return {
    title,
  };
}
