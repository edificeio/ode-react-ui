import {
  createContext,
  type ReactNode,
  useMemo,
  useContext,
  useEffect,
} from "react";

import { IOdeTheme } from "ode-ts-client";

import { useOdeClient } from "../OdeClientProvider";
import { useConf } from "../useConf";

export interface ThemeProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  theme: IOdeTheme | undefined;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null!);

export function ThemeProvider({ children }: ThemeProps) {
  const { appCode } = useOdeClient();

  const confQuery = useConf({ appCode });

  useEffect(() => {
    const link = document.getElementById("theme") as HTMLAnchorElement;
    const favicon = document.getElementById("favicon") as HTMLAnchorElement;
    link.href = `${confQuery?.data?.theme?.bootstrapUrl}/theme.css` as string;
    favicon.href =
      `${confQuery?.data?.theme?.basePath}/img/illustrations/favicon.ico` as string;
  }, [confQuery?.data]);

  const values = useMemo(
    () => ({
      theme: confQuery?.data?.theme,
    }),
    [confQuery?.data?.theme],
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export function useOdeTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`Cannot be used outside of OdeClientProvider`);
  }
  return context;
}
