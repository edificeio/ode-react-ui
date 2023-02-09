/**
 * Toast Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-alert--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Toast/Toast.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */

import {
  SuccessOutline,
  InfoCircle,
  Error,
  Loader,
  Placeholder,
} from "@ode-react-ui/icons";

import { Toast as ToastType } from "./ToasterProps";
import { ToastProps } from "./ToastProps";

function Toast(props: ToastProps) {
  const { Toaster, toastOptions, resolveValue, dismiss } = props;

  const mapping = {
    blank: { icon: <InfoCircle />, classModifier: "toast-info" },
    success: { icon: <SuccessOutline />, classModifier: "toast-success" },
    error: { icon: <Error />, classModifier: "toast-danger" },
    loading: {
      icon: <Loader aria-label="Loading" />,
      classModifier: "toast-loading",
    },
    custom: { icon: <Placeholder />, classModifier: "toast-custom" },
  };

  return (
    <Toaster {...toastOptions}>
      {(toast: ToastType) => {
        return (
          <div
            className={`toast fade gap-12 ${
              // @ts-expect-error
              mapping[toast.type].classModifier
            } ${toast.type === "loading" ? "is-loading" : null} ${
              toast.visible ? "show" : "hide"
            }`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            {
              // @ts-expect-error
              mapping[toast.type].icon
            }
            {/* <div className="toast-body">{resolveValue(message, toast)}</div> */}
            <div className="toast-body">
              {resolveValue(toast.message, toast)}
            </div>
            {toast.type !== "loading" && (
              <button
                type="button"
                className="btn-close ms-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={() => dismiss(toast.id)}
              ></button>
            )}
          </div>
        );
      }}
    </Toaster>
  );
}

Toast.displayName = "Toast";

export default Toast;
