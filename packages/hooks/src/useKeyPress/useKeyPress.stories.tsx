import useKeyPress from "./useKeyPress";
import { Button } from "../../../components/src/Button";
// @ts-ignore
import docs from "./useKeyPress.docs.mdx";
import { useState } from "react";

export default {
  title: "Hooks/useKeyPress",
  parameters: {
    docs: { page: docs },
  },
};

export const Example = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  useKeyPress(() => {
    setIsVisible(false);
  }, ["Escape"]);

  return (
    <div>
      {isVisible ? (
        <Button type="button" color="primary" variant="filled">
          Press the Escape key to hide me
        </Button>
      ) : (
        <p className="body">You hide the button with the Escape Key</p>
      )}
    </div>
  );
};
