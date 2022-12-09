import { createContext, useContext } from "react";

interface AppCardContextProps {
  icon: string;
  displayName: string;
  code: string;
}

export const AppCardContext = createContext<AppCardContextProps | null>({
  icon: "",
  displayName: "Application",
  code: "placeholder",
});

export default function useAppCardContext() {
  const context = useContext(AppCardContext);
  if (!context) {
    throw new Error(
      `AppCard compound components cannot be rendered outside the AppCard component`,
    );
  }
  return context;
}
