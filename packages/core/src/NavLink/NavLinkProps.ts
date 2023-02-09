import { ReactNode } from "react";

export interface NavLinkProps<T> {
  /**
   * href link
   */
  link: T;
  /**
   * Optional class for styling purpose
   */
  className?: T;
  /**
   * Children props
   */
  children: ReactNode;
  /**
   * Translate Text
   */
  translate?: T;
  /**
   * Give Navlink Button Style (for 1D navbar)
   */
  button?: boolean;
}
