import { CSSProperties } from "react";

import {
  SuccessOutline,
  InfoCircle,
  Error,
  Loader,
  Placeholder,
} from "@ode-react-ui/icons";

export type ToastType =
  | "success"
  | "error"
  | "loading"
  | "blank"
  | "custom"
  | "warning";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type Renderable = JSX.Element | string | null;

export interface IconTheme {
  primary: string;
  secondary: string;
}

export type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
export type ValueOrFunction<TValue, TArg> =
  | TValue
  | ValueFunction<TValue, TArg>;

const isFunction = <TValue, TArg>(
  valOrFunction: ValueOrFunction<TValue, TArg>,
): valOrFunction is ValueFunction<TValue, TArg> =>
  typeof valOrFunction === "function";

export const resolveValue = <TValue, TArg>(
  valOrFunction: ValueOrFunction<TValue, TArg>,
  arg: TArg,
): TValue => (isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction);

export interface ReactHotToastProps {
  type: ToastType;
  id: string;
  message: ValueOrFunction<Renderable, ReactHotToastProps>;
  icon?: Renderable;
  duration?: number;
  pauseDuration: number;
  position?: ToastPosition;

  ariaProps: {
    role: "status" | "alert";
    "aria-live": "assertive" | "off" | "polite";
  };

  style?: CSSProperties;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  iconTheme?: IconTheme;

  createdAt: number;
  visible: boolean;
  height?: number;
}

export type ToastOptions = Partial<
  Pick<
    ReactHotToastProps,
    | "id"
    | "icon"
    | "duration"
    | "ariaProps"
    | "className"
    | "style"
    | "position"
    | "iconTheme"
  >
>;

export type DefaultToastOptions = ToastOptions & {
  [key in ToastType]?: ToastOptions;
};

export interface ToasterProps {
  position?: ToastPosition;
  toastOptions?: DefaultToastOptions;
  reverseOrder?: boolean;
  gutter?: number;
  containerStyle?: React.CSSProperties;
  containerClassName?: string;
  children?: (toast: ReactHotToastProps) => JSX.Element;
}

export interface ToastWrapperProps {
  id: string;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  style?: React.CSSProperties;
  onHeightUpdate: (id: string, height: number) => void;
  children?: React.ReactNode;
}

export interface ToastProps {
  dismiss: any;
  resolveValue: typeof resolveValue;
  Toaster: React.ComponentType;
  toastOptions: any;
  i18n?: (key: string, params?: Record<string, any> | undefined) => string;
}

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
