import { IConfigurationFramework } from "ode-ts-client";

export default function useBookmark(
  configurationFramework: IConfigurationFramework,
) {
  const set = new Set();
  const bookmarkedApps = configurationFramework.User.bookmarkedApps.filter(
    (el) => {
      const duplicate = set.has(el.displayName);
      set.add(el.displayName);
      return !duplicate;
    },
  );

  return bookmarkedApps;
}
