import { forwardRef, Ref, useId } from "react";

import clsx from "clsx";

import { useFormControl } from "./FormContext";

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

const Select = forwardRef(
  (
    {
      options,
      model,
      disabled = false,
      placeholderOption = false,
      ...restProps
    }: SelectProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const { isRequired, status } = useFormControl();

    const selectId = useId();
    const selectProps = {
      ...restProps,
      ...{
        id: selectId,
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
        <select {...selectProps} required={isRequired}>
          {placeholderOption && (
            <option disabled selected={model === undefined}>
              {placeholderOption}
            </option>
          )}
          {options?.map((option) => {
            const value = typeof option === "object" ? option.value : option;
            const label = typeof option === "object" ? option.label : option;
            return (
              <option key={value} value={value} selected={model === value}>
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
