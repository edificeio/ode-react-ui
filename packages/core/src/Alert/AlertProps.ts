import { ReactNode } from "react";

export type AlertRef = HTMLDivElement;

export type ALertVariants = "success" | "warning" | "information" | "error";

export interface AlertProps {
  /**
   * Type of alert
   */
  variant?: ALertVariants;

  /**
   * Is alert dissmissible
   */
  isDismissible?: boolean | string;

  /**
   * Add custom class
   */
  className?: string;

  /**
   * Does it has a text ?
   */
  children: ReactNode;
}
