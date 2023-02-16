import { forwardRef, Ref, useId } from "react";

import clsx from "clsx";

import { useFormControl } from "./FormContext";
import { SelectProps } from "./SelectProps";

const Select = forwardRef(
  (
    {
      options,
      model,
      disabled = false,
      placeholderOption = false,
      children,
      ...restProps
    }: SelectProps,
    ref: Ref<HTMLSelectElement>,
  ) => {
    const { id, isRequired, status } = useFormControl();

    const selectId = id !== "" ? id : useId();
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
