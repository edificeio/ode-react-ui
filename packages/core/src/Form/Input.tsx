import { forwardRef, Ref } from "react";

import clsx from "clsx";

import { useFormControl } from "./FormContext";
import { InputProps } from "./InputProps";

/**
 * Input Form Component
 */

const Input = forwardRef(
  (
    {
      noValidationIcon,
      placeholder,
      size = "md",
      type = "text",
      ...restProps
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const { id, isRequired, isReadOnly, status } = useFormControl();

    const classes = clsx({
      "form-control": !isReadOnly,
      "form-control-lg": size === "lg",
      "form-control-sm": size === "sm",
      "is-invalid": status === "invalid",
      "is-valid": status === "valid",
      "form-control-plaintext": isReadOnly,
      "no-validation-icon": noValidationIcon,
    });
    return (
      <input
        ref={ref}
        id={id}
        className={classes}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        readOnly={isReadOnly}
        {...restProps}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
