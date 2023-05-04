import { createContext, type ReactNode, useMemo, useContext } from "react";

import { useOdeBackend } from "@ode-react-ui/hooks";
import {
  App,
  IConfigurationFramework,
  IExplorerFramework,
  IHttp,
  NotifyFrameworkFactory,
  ISessionFramework,
  IWebApp,
  ISession,
  ITheme,
} from "ode-ts-client";

export interface OdeProviderParams {
  alternativeApp?: boolean;
  app: App;
  cdnDomain?: string | null;
  version?: string | null;
}

export interface FrameworkProps {
  configurationFramework: IConfigurationFramework;
  explorerFramework?: IExplorerFramework;
  http: IHttp;
  notifyFramework: NotifyFrameworkFactory;
  sessionFramework: ISessionFramework;
}

export interface OdeClientProps {
  children: ReactNode;
  framework: FrameworkProps;
  params: OdeProviderParams;
}

export interface ContextProps {
  app: IWebApp;
  appCode: string;
  basePath: string;
  configurationFramework: IConfigurationFramework;
  currentLanguage: string;
  getBootstrapTheme: () => string;
  http: IHttp;
  i18n: (key: string, params?: Record<string, any> | undefined) => string;
  is1d: boolean;
  isAppLoading: boolean;
  params: OdeProviderParams;
  session: ISession;
  theme: ITheme;
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
    isLoading: isAppLoading,
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
      isAppLoading,
    }),
    [isAppLoading],
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
