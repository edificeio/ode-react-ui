import { ReactNode } from "react";

export type AlertRef = HTMLDivElement;

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
   * Add custom class
   */
  className?: string;

  /**
   * Alert box content
   */
  children: ReactNode;

  /**
   * Callback when alert is closed
   */
  onClose?: Function;
}
