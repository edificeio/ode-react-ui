import { ReactNode, useCallback, useEffect, useState } from "react";

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
  IIdiom,
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

/** Custom Hook for ode-ts-client integration */
export default function useOdeBackend({
  params,
  framework,
}: {
  params: OdeProviderParams;
  framework: FrameworkProps;
}) {
  const { sessionFramework, configurationFramework } = framework;

  const [app, setApp] = useState<IWebApp>(undefined!);
  const [currentLanguage, setCurrentLanguage] = useState<string>("fr");
  const [idiom, setIdiom] = useState<IIdiom>(
    configurationFramework.Platform.idiom,
  );
  const [session, setSession] = useState<ISession>(undefined!);
  const [theme, setTheme] = useState<ITheme>(
    configurationFramework.Platform.theme,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        await Promise.all([
          sessionFramework.initialize(),
          configurationFramework.initialize(
            params.version || null,
            params.cdnDomain || null,
          ),
        ]);

        const promise: any = await Promise.all([
          configurationFramework.Platform.apps.initialize(
            params.app,
            params.alternativeApp,
          ),
          configurationFramework.Platform.apps.getWebAppConf(params.app),
          configurationFramework.Platform.theme.getConf(),
        ]);
        setSession(sessionFramework.session);
        setApp(promise[1]);
        setBootstrapTheme(promise[2]);
        setTheme(configurationFramework.Platform.theme);
        setIdiom(configurationFramework.Platform.idiom);
      } catch (error) {
        console.log(error); // An unrecovable error occured
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    const lang = session?.currentLanguage as string;

    if (session) {
      loadLangAttribute(lang);
      setCurrentLanguage(lang);
    }
  }, [session]);

  function setBootstrapTheme(conf: any) {
    let odeBootstrapPath: string = "";

    for (const override of conf.overriding) {
      if (override.child === configurationFramework.Platform.theme.themeName) {
        odeBootstrapPath = `${configurationFramework.Platform.cdnDomain}/assets/themes/`;
        odeBootstrapPath += `${override.bootstrapVersion}/skins/${configurationFramework.Platform.theme.skinName}/theme.css`;
      }
    }
    const link = document.getElementById("theme") as HTMLAnchorElement;
    link.href = odeBootstrapPath;
  }

  const getBootstrapTheme = useCallback(() => {
    let odeBootstrapPath: string = "";

    for (const override of theme.skins) {
      if (override.child === configurationFramework.Platform.theme.themeName) {
        odeBootstrapPath = `${configurationFramework.Platform.cdnDomain}/assets/themes/`;
        odeBootstrapPath += `${override.bootstrapVersion}`;
      }
    }

    return odeBootstrapPath;
  }, [theme]);

  const loadLangAttribute = useCallback(
    (currentLanguage: string) => {
      document
        .querySelector("html")
        ?.setAttribute("lang", currentLanguage || "fr");
    },
    [currentLanguage],
  );

  /** The custom-hook-ized login process */
  // function login(/* email: string, password: string */) {
  //   // sessionFramework.login(email, password).then(() => {
  //   //   setSession(sessionFramework.session); // ...same session object, but triggers React rendering.
  //   // });
  // }

  /** The custom-hook-ized logout process */
  // function logout() {
  //   // sessionFramework.logout().then(() => {
  //   //   setSession(sessionFramework.session); // ...same session object, but triggers React rendering.
  //   // });
  // }

  // Return instances, to be initialized later.
  return {
    isLoading,
    app,
    appName: params.app,
    currentLanguage,
    idiom,
    // login,
    // logout,
    session,
    theme,
    getBootstrapTheme,
  };
}
