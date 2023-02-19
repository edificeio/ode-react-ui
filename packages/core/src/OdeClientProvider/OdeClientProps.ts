import { ReactNode } from "react";

import {
  IConfigurationFramework,
  IExplorerFramework,
  IHttp,
  ISessionFramework,
  NotifyFrameworkFactory,
  App,
  IWebApp,
  ISession,
  ITheme,
} from "ode-ts-client";

export interface OdeProviderParams {
  app: App;
  alternativeApp?: boolean;
  version?: string | null;
  cdnDomain?: string | null;
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
  currentLanguage: string;
  http: IHttp;
  i18n: (key: string, params?: Record<string, any> | undefined) => string;
  params: OdeProviderParams;
  session: ISession;
  theme: ITheme;
  is1d: boolean;
  basePath: string;
}

export type { IWebApp, ISession, ITheme, IHttp };
