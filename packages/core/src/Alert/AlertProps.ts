import { ComponentPropsWithRef, ReactNode } from "react";

export interface AlertRef {
  show: Function;
  hide: Function;
}

export type AlertTypes = "success" | "warning" | "info" | "danger";

export interface AlertProps extends ComponentPropsWithRef<"div"> {
  /**
   * Type of alert
   */
  type?: AlertTypes;

  /**
   * Alert can be closed with a button ?
   */
  isDismissible?: boolean;

  /**
   * Alert is displayed as Toast
   */
  isToast?: boolean;

  /**
   * Alert must close after delay
   */
  autoClose?: boolean;

  /**
   * If autoClose if activated, set the delay
   * Défault : 3000
   */
  autoCloseDelay?: number;

  /**
   * Alert box content
   */
  children: ReactNode;

  /**
   * Alert box action
   */
  button?: ReactNode;

  /**
   * Callback when alert is closed
   */
  onClose?: Function;

  /**
   * Callback when alert is closed
   */
  onVisibilityChange?: Function;

  /**
   * Add custom class
   */
  className?: string;
}
