import { ReactNode } from "react";

export interface PopoverProps {
  /**
   * Popover id for a11y
   */
  id?: string;
  /**
   * When Popover is visible
   */
  isVisible?: boolean;
  /**
   * React Node
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

export interface PopoverElementProps {
  /**
   * React Node
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}
