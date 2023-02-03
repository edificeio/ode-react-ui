import React from "react";

export interface DropdownProps {
  /**
   * Menu to display in dropdown
   */
  content: React.ReactNode;
  /**
   * Element to be wrapped as Tooltip trigger
   */
  children: React.ReactNode;
}
