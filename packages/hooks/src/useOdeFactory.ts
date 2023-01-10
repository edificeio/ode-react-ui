import { ConfigurationFrameworkFactory } from "./utils/useOdeTsClient";

export default function useOdeFactory() {
  /** Short for accessing to the global ConfigurationFramework.  */
  const conf = ConfigurationFrameworkFactory.instance();

  /**
   * Get Platform using conf shorthand
   */
  function getPlatform() {
    return conf.Platform;
  }

  /**
   * Get the configured CDN URL root.
   */
  function getCdn() {
    return conf.Platform.cdnDomain;
  }

  return {
    conf,
    getPlatform,
    getCdn,
  };
}
