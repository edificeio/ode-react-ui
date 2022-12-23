export type Omitted = "disabled" | "required" | "size" | "id" | "readOnly";

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<"input">, Omitted> {
  /**
   * Control size of input
   */
  size: "sm" | "md" | "lg";
  /**
   * Type of input (text, password, ..)
   */
  type: string;
  /**
   * Change text of placeholder
   */
  placeholder?: string;
  /**
   * Disabled status
   */
  disabled?: boolean;
  /**
   * Remove validation icon
   */
  noValidationIcon?: boolean;
}
