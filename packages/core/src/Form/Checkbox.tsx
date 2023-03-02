import { forwardRef, Ref, useMemo } from "react";

import clsx from "clsx";

import { CheckboxProps } from "./CheckboxProps";

const Checkbox = forwardRef(
  (
    { label, disabled = false, checked = false, ...restProps }: CheckboxProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = useMemo(
      () =>
        restProps.id
          ? restProps.id
          : (
              Math.floor(Math.random() * 999999999999) + 1000000000000
            ).toString(),
      [],
    );

    const inputProps = {
      ...restProps,
      ...{
        type: "checkbox",
        checked,
        disabled,
        ref,
        className: clsx(restProps.className, "form-check-input c-pointer"),
        id,
      },
    };

    return (
      <div className="position-relative d-inline-block form-check">
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
