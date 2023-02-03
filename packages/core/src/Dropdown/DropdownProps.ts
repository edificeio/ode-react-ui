import React, { ReactElement } from "react";

import { DropdownTriggerProps } from "./DropdownTriggerProps";

export interface DropdownProps {
  /**
   * Menu to display in dropdown
   */
  content: React.ReactNode;
  /**
   * Element to be wrapped as Tooltip trigger
   */
  trigger: ReactElement<DropdownTriggerProps>;
}
