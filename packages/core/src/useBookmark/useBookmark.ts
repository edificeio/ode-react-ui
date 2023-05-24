import { useOdeClient } from "../OdeClientProvider";

export default function useBookmark() {
  const { sessionQuery } = useOdeClient();

  const set = new Set();
  const bookmarkedApps = sessionQuery?.data?.bookmarkedApps.filter(
    (el: { displayName: unknown }) => {
      const duplicate = set.has(el.displayName);
      set.add(el.displayName);
      return !duplicate;
    },
  );

  return bookmarkedApps;
}
