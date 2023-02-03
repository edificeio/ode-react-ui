import React from "react";

export interface DropdownTriggerProps {
  /**
   * Dropdown trigger title
   */
  title: string;
  /**
   * Controlable state off dropdown trigger
   */
  style?: "ghost" | "outline";
  /**
   * Controlable state off dropdown trigger
   */
  state?: "hover" | "selected" | "disabled" | "focus";
  /**
   * Add an icon in dropdown trigger
   */
  icon?: React.ReactNode;
  /**
   * Button size
   */
  size?: "sm" | "md" | "lg";
}
