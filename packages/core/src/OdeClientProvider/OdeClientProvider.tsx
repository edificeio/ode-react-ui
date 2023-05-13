import {
  createContext,
  type ReactNode,
  useMemo,
  useContext,
  useEffect,
  useState,
} from "react";

import { useConf, useSession } from "@ode-react-ui/hooks";
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
  currentLanguage: string | undefined;
  currentApp: IWebApp | undefined;
  http: IHttp;
  i18n: (key: string, params?: Record<string, any> | undefined) => string;
  init: boolean;
  session: ISession;
  sessionQuery: UseQueryResult<IGetSession>;
  confQuery: UseQueryResult<IGetConf>;
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
  const { app } = params;

  const appCode = params.app;

  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          sessionFramework.initialize(),
          configurationFramework.initialize(null, null),
        ]);

        await configurationFramework.Platform.apps.initialize(app, true);
      } catch (error) {
        console.error(error);
      } finally {
        setInit(true);
      }
    })();
  }, []);

  const sessionQuery = useSession();
  const confQuery = useConf({ appCode });

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
