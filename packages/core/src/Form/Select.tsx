import React, { forwardRef, Ref, useId } from "react";

import clsx from "clsx";

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
   * Label of the select
   */
  label?: string | false;
  /**
   * Add a placeholder option
   */
  placeholderOption?: string | false;
  /**
   * Unique id of select
   */
  id?: string;
  /**
   * Status to handle Form Validation
   */
  status?: "valid" | "invalid";
}

const Select = forwardRef(
  (
    {
      options,
      model,
      label = false,
      disabled = false,
      placeholderOption = false,
      id = "",
      status,
      children,
      ...restProps
    }: SelectProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const selectId = id !== "" ? id : useId();
    const selectProps = {
      ...restProps,
      ...{
        id: selectId,
        checked: model === restProps.value,
        disabled,
        ref,
        className: clsx(restProps.className, "form-select c-pointer", {
          "is-invalid": status === "invalid",
          "is-valid": status === "valid",
        }),
      },
    };

    return (
      <>
        {label && (
          <label className="form-label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <select {...selectProps}>
          {placeholderOption && <option disabled>{placeholderOption}</option>}
          {options?.map((option) => {
            const value = typeof option === "object" ? option.value : option;
            const label = typeof option === "object" ? option.label : option;
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </>
    );
  },
);

Select.displayName = "Select";

export default Select;
