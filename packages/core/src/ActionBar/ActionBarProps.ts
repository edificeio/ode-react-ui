import React from "react";

export interface ActionBarProps {
  /**
   * Add Buttons To Actions bar
   */
  children: React.ReactNode;
}
export type ActionBarType = React.FC<ActionBarProps>;
