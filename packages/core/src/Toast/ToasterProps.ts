// https://github.com/timolins/react-hot-toast/blob/main/src/core/types.ts
import { CSSProperties } from "react";

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

export interface Toast {
  type: ToastType;
  id: string;
  message: ValueOrFunction<Renderable, Toast>;
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
    Toast,
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
  children?: (toast: Toast) => JSX.Element;
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
