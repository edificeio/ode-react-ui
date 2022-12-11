import { createContext, useContext } from "react";

interface ContextProps {
  icon: string;
  displayName: string;
  code: string;
}

export const Context = createContext<ContextProps | null>({
  icon: "",
  displayName: "Application",
  code: "placeholder",
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
