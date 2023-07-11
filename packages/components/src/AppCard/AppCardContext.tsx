import { createContext, useContext } from "react";

import { HeadingElement } from "../Heading";

interface ContextProps {
  code: string;
  displayName: string;
  headingStyle?: HeadingElement;
  icon: string;
  isHeading?: boolean;
  level?: HeadingElement;
  bgCode: string;
}

export const Context = createContext<ContextProps | null>({
  code: "placeholder",
  displayName: "Application",
  headingStyle: "h3",
  icon: "",
  isHeading: false,
  level: "h1",
  bgCode: "",
});

export function useAppCard() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      `AppCard compound components cannot be rendered outside the AppCard component`,
    );
  }
  return context;
}
