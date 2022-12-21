import React from "react";

export interface ActionsBarProps {
  /**
   * Add Buttons To Actions bar
   */
  children: React.ReactNode;
}
export type ActionBarType = React.FC<ActionsBarProps>;
