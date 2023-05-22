import {
  createContext,
  type ReactNode,
  useMemo,
  useContext,
  useEffect,
  // useState,
} from "react";

import { UseQueryResult } from "@tanstack/react-query";
import {
  App,
  IConfigurationFramework,
  IExplorerFramework,
  IHttp,
  NotifyFrameworkFactory,
  ISessionFramework,
  IUserInfo,
  ISession,
  IUserDescription,
  IWebApp,
  UserProfile,
  IGetConf,
  IGetSession,
  IOdeTheme,
} from "ode-ts-client";

import { useConf } from "../useConf";
import { useSession } from "../useSession";

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
  appCode: App;
  applications: IWebApp[] | undefined;
  configurationFramework: IConfigurationFramework;
  confQuery: UseQueryResult<IGetConf>;
  currentApp: IWebApp | undefined;
  currentLanguage: string | undefined;
  http: IHttp;
  i18n: (key: string, params?: Record<string, any> | undefined) => string;
  init: boolean;
  session: ISession;
  sessionQuery: UseQueryResult<IGetSession>;
  theme: IOdeTheme | undefined;
  user: IUserInfo | any;
  userDescription: IUserDescription | undefined;
  userProfile: UserProfile | undefined;
}

export const Context = createContext<ContextProps | null>(null!);

export function OdeClientProvider({
  children,
  framework,
  params,
}: OdeClientProps) {
  const { http, sessionFramework, configurationFramework } = framework;

  const appCode = params.app;

  const sessionQuery = useSession();
  const confQuery = useConf({ appCode });

  const init = confQuery?.isSuccess && sessionQuery?.isSuccess;

  useEffect(() => {
    const link = document.getElementById("theme") as HTMLAnchorElement;
    link.href = `${confQuery?.data?.theme?.bootstrapUrl}/theme.css` as string;
  }, [confQuery?.data]);

  useEffect(() => {
    const link = document.getElementById("favicon") as HTMLAnchorElement;
    link.href =
      `${confQuery?.data?.theme?.basePath}/img/illustrations/favicon.ico` as string;
  }, [confQuery?.data]);

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("lang", sessionQuery?.data?.currentLanguage || "fr");
  }, [sessionQuery?.data]);

  const values = useMemo(
    () => ({
      appCode,
      applications: confQuery?.data?.applications,
      configurationFramework,
      confQuery,
      currentApp: confQuery?.data?.currentApp,
      currentLanguage: sessionQuery?.data?.currentLanguage,
      http,
      i18n: configurationFramework.Platform.idiom.translate,
      init,
      session: sessionFramework.session,
      sessionQuery,
      theme: confQuery?.data?.theme,
      user: sessionQuery?.data?.user,
      userDescription: sessionQuery?.data?.userDescription,
      userProfile: sessionQuery?.data?.userProfile,
    }),
    [init],
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
