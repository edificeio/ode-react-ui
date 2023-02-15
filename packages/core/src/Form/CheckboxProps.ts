export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Add a label
   */
  label?: string;
  /**
   * If disable
   */
  disabled?: boolean;
  /**
   * If checked
   */
  checked?: boolean;
}
