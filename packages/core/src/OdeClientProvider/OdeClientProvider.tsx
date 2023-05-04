import { createContext, type ReactNode, useMemo, useContext } from "react";

import { useOdeBackend } from "@ode-react-ui/hooks";

import {
  ContextProps,
  FrameworkProps,
  OdeProviderParams,
} from "./OdeClientProps";

export interface OdeClientProps {
  children: ReactNode;
  framework: FrameworkProps;
  params: OdeProviderParams;
}

const Context = createContext<ContextProps | null>(null!);

export default function OdeClientProvider({
  children,
  framework,
  params,
}: OdeClientProps) {
  const { http, configurationFramework } = framework;

  const {
    app,
    currentLanguage,
    idiom,
    session,
    theme,
    getBootstrapTheme,
    isLoading,
  } = useOdeBackend({
    params,
    framework,
  });

  const is1d: boolean = theme?.is1D;
  const basePath: string = theme?.basePath;
  const appCode: string = params.app;

  const values = useMemo(
    () => ({
      app,
      appCode,
      basePath,
      currentLanguage,
      http,
      i18n: idiom.translate,
      is1d,
      params,
      session,
      theme,
      getBootstrapTheme,
      configurationFramework,
    }),
    [isLoading],
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useOdeClient() {
  const context = useContext(Context);

  if (!context) {
    throw new Error(`Cannot be used outside of OdeClientProvider`);
  }
  return context;
}
