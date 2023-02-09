import { ReactNode } from "react";

export type Omitted = "htmlFor";

export interface LabelProps
  extends Omit<React.ComponentPropsWithRef<"label">, Omitted> {
  /**
   * Display Icon to the left
   */
  leftIcon?: ReactNode;
  /**
   * Translated Optional Text
   */
  optionalText?: string;
  /**
   * Required Indicator or Text
   */
  requiredText?: string;
  /**
   * Label Text
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}
