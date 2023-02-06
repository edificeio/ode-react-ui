import { resolveValue } from "./ToasterProps";

export interface ToastProps {
  dismiss: any;
  resolveValue: typeof resolveValue;
  Toaster: React.ComponentType;
  toastOptions: any;
  i18n?: (key: string, params?: Record<string, any> | undefined) => string;
}
