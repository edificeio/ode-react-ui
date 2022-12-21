import { ReactNode } from "react";

export interface AlertRef extends HTMLDivElement {
  show: Function;
  hide: Function;
}

export type ALertTypes = "success" | "warning" | "info" | "danger";

export interface AlertProps {
  /**
   * Type of alert
   */
  type?: ALertTypes;

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
