import { ReactNode } from "react";

export interface FormControlProps {
  /**
   * For accessibility
   */
  id: string;
  /**
   * Is field optional ?
   */
  isOptional?: boolean;
  /**
   * Is field required ?
   */
  isRequired?: boolean;
  /**
   * Is field readonly ?
   */
  isReadOnly?: boolean;
  /**
   * Label, Input and Text
   */
  children: ReactNode;
  /**
   * For additional styling
   */
  className?: string;
  /**
   * Status to handle Form Validation
   */
  status?: "valid" | "invalid";
}
