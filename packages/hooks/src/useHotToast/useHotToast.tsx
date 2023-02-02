import { ElementType, ReactNode } from "react";

import toast from "react-hot-toast";

export interface HotToastOptions {
  isDismissible?: boolean;
  duration?: number;
}

export default function useHotToast(Component: ElementType) {
  const hotToast = {
    success: (message: string | ReactNode, options?: HotToastOptions) =>
      toast.custom(
        <Component
          type="success"
          isToast={true}
          isDismissible={options?.isDismissible}
          className="mb-12"
        >
          {message}
        </Component>,
        { duration: options?.duration },
      ),
    error: (message: string | ReactNode, options?: HotToastOptions) =>
      toast.custom(
        <Component
          type="danger"
          isToast={true}
          isDismissible={options?.isDismissible}
          className="mb-12"
        >
          {message}
        </Component>,
        { duration: options?.duration },
      ),
    info: (message: string | ReactNode, options?: HotToastOptions) =>
      toast.custom(
        <Component
          type="info"
          isToast={true}
          isDismissible={options?.isDismissible}
          className="mb-12"
        >
          {message}
        </Component>,
        { duration: options?.duration },
      ),
    warning: (message: string | ReactNode, options?: HotToastOptions) =>
      toast.custom(
        <Component
          type="warning"
          isToast={true}
          isDismissible={options?.isDismissible}
          className="mb-12"
        >
          {message}
        </Component>,
        { duration: options?.duration },
      ),
    loading: toast.loading,
  };

  return { hotToast };
}
