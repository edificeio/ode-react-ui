import { ReactNode } from "react";

export interface MainProps {
  /**
   * App content
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}
