import { useOdeClient } from "../OdeClientProvider";

export default function useI18n() {
  const { i18n } = useOdeClient();

  return { i18n };
}
