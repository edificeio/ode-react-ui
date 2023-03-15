import React from "react";

export interface OptionListItemType {
  /**
   * Value
   */
  value: string | number;
  /**
   * Label
   */
  label: string;
  /**
   * Add an icon
   */
  icon?: any;
}

export interface SelectListProps {
  /**
   * Options list
   */
  options: OptionListItemType[];
  /**
   * State initializing select state
   */
  model?: Array<string | number>;
  /**
   * Synchronisation of model value
   */
  onChange?: (model: Array<string | number>) => void;
  /**
   * Option to hide checkbox
   */
  hideCheckbox?: boolean;
  /**
   * Option to manage a model with only one element at a time.
   */
  isMonoSelection?: boolean;
}

export type SelectListType = React.ReactElement<SelectListProps>;
