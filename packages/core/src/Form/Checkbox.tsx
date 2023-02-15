import { forwardRef, Ref } from "react";

import clsx from "clsx";

import { CheckboxProps } from "./CheckboxProps";

const Checkbox = forwardRef(
  (
    { label, disabled = false, checked = false, ...restProps }: CheckboxProps,
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
        id: restProps.id
          ? restProps.id
          : (Math.floor(Math.random() * 9999999999) + 10000000000).toString(),
      },
    };

    return (
      <div className="position-relative d-inline-block mt-6 form-check">
        <input {...inputProps} />
        {label && (
          <label className="form-check-label" htmlFor={inputProps.id}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
