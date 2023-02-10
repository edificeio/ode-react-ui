import { IConfigurationFramework } from "ode-ts-client";

export default function useBookmark(
  configurationFramework: IConfigurationFramework,
) {
  return configurationFramework.User.bookmarkedApps;
}
