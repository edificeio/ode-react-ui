import {
  ConfigurationFrameworkFactory,
  ExplorerFrameworkFactory,
  NotifyFrameworkFactory,
  SessionFrameworkFactory,
  TransportFrameworkFactory,
  // @ts-ignore
} from "ode-ts-client";

export const useOdeFactory = () => {
  /** Short for accessing to the global ConfigurationFramework.  */
  function conf() {
    return ConfigurationFrameworkFactory.instance();
  }
  /** Short for accessing to the global ExplorerFramework.  */
  function explore() {
    return ExplorerFrameworkFactory.instance();
  }
  /** Short for accessing to the global NotifyFramework.  */
  function notif() {
    return NotifyFrameworkFactory.instance();
  }
  /** Short for accessing to the global http client.  */
  function http() {
    return TransportFrameworkFactory.instance().http;
  }
  /** Short for accessing to the global session.  */
  function session() {
    return SessionFrameworkFactory.instance().session;
  }

  return {
    conf,
    explore,
    notif,
    http,
    session,
  };
};

export default useOdeFactory;
