import React from "react";

export interface DropdownTriggerProps
  extends React.ComponentPropsWithRef<"button"> {
  /**
   * Dropdown trigger title
   */
  title: string;
  /**
   * Controlable state off dropdown trigger
   */
  variant?: "ghost" | "outline";
  /**
   * Controlable state off dropdown trigger
   */
  state?: "default" | "hover" | "selected" | "disabled" | "focus";
  /**
   * Add an icon in dropdown trigger
   */
  icon?: React.ReactNode;
  /**
   * Button size
   */
  size?: "sm" | "md" | "lg";
  /**
   * Add a badge
   */
  badgeContent?: string | number;
}

export type DropdownTriggerType = React.ReactElement<DropdownTriggerProps>;
