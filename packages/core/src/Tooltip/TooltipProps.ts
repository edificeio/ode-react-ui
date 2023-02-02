import React from "react";

type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";

export interface TooltipProps {
  /**
   * Element to be wrapped as Tooltip trigger
   */
  children: React.ReactNode;
  /**
   * Tooltip position
   */
  placement: Placement;
}
export type TooltipType = React.FC<TooltipProps>;
