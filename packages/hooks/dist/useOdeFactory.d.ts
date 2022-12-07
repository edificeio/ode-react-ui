export default function useOdeFactory(): {
    conf: () => import("ode-ts-client").IConfigurationFramework;
    explore: () => import("ode-ts-client").IExplorerFramework;
    notif: () => import("ode-ts-client").INotifyFramework;
    http: () => import("ode-ts-client").IHttp;
    session: () => import("ode-ts-client").ISession;
};
