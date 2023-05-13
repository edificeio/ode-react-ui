import { App, IOdeTheme } from "ode-ts-client";

import { useConf } from "../useConf";

/** Custom Hook for ode-ts-client integration */
export default function useTheme({ appCode }: { appCode: App }): {
  theme: IOdeTheme | undefined;
} {
  const confQuery = useConf({ appCode });

  const theme = confQuery.data?.theme;

  return { theme };
}
