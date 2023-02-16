export interface OptionsType {
  /**
   * Value
   */
  value: string;
  /**
   * Label
   */
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Options list
   */
  options: OptionsType[] | number[] | string[];
  /**
   * State controlling select state
   */
  model?: string | undefined;
  /**
   * Add a placeholder option
   */
  placeholderOption?: string | false;
}
