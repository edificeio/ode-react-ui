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
   * State controlling select state
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
   * Define the min width (default 250px)
   */
  minWidth?: string;
}

export type SelectListType = React.ReactElement<SelectListProps>;
