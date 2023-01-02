import { ConfigurationFrameworkFactory } from "./utils/useOdeTsClient";

export default function useOdeFactory() {
  /** Short for accessing to the global ConfigurationFramework.  */
  function conf() {
    return ConfigurationFrameworkFactory.instance();
  }

  return {
    conf,
  };
}
