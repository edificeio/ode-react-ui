import { ReactNode } from "react";

export interface FormControlProps extends React.ComponentPropsWithRef<"div"> {
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
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * Status to handle Form Validation
   */
  status?: "valid" | "invalid";
}
