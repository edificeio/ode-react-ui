import { ReactNode } from "react";

export interface PopoverProps {
  /**
   * Popover id for a11y
   */
  id?: string;
  /**
   * React Node
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}
