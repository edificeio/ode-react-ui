import React, { forwardRef, Ref } from "react";

import clsx from "clsx";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef(
  (
    { disabled = false, checked = false, ...restProps }: CheckboxProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const inputProps = {
      ...restProps,
      ...{
        type: "checkbox",
        checked,
        disabled,
        ref,
        className: clsx(restProps.className, "form-check-input c-pointer"),
      },
    };

    return (
      <div className="position-relative d-inline-block mt-8 form-check">
        <input {...inputProps} />
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
