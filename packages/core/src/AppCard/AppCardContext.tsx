import { createContext, useContext } from "react";

import { HeadingElement } from "../Heading/HeadingProps";

interface ContextProps {
  icon: string;
  displayName: string;
  code: string;
  isHeading?: boolean;
  level?: HeadingElement;
  headingStyle?: HeadingElement;
}

export const Context = createContext<ContextProps | null>({
  icon: "",
  displayName: "Application",
  code: "placeholder",
  isHeading: false,
  level: "h1",
  headingStyle: "h3",
});

export default function useAppCard() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      `AppCard compound components cannot be rendered outside the AppCard component`,
    );
  }
  return context;
}
