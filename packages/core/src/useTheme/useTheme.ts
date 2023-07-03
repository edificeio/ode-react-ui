import { useOdeClient } from "../OdeClientProvider";

export default function useTheme() {
  const { theme } = useOdeClient();

  return { theme };
}
