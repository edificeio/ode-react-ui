import { ElementType, ReactNode } from "react";

import toast from "react-hot-toast";

export default function useHotToast(Component: ElementType) {
  const hotToast = {
    success: (message: string | ReactNode) =>
      toast.custom(
        <Component type="success" isToast={true} className="mb-12">
          {message}
        </Component>,
      ),
    error: (message: string | ReactNode) =>
      toast.custom(
        <Component type="danger" isToast={true} className="mb-12">
          {message}
        </Component>,
      ),
    info: (message: string | ReactNode) =>
      toast.custom(
        <Component type="info" isToast={true} className="mb-12">
          {message}
        </Component>,
      ),
    warning: (message: string | ReactNode) =>
      toast.custom(
        <Component type="warning" isToast={true} className="mb-12">
          {message}
        </Component>,
      ),
    loading: toast.loading,
  };

  return { hotToast };
}
