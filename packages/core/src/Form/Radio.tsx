import { forwardRef, Ref, useMemo } from "react";

import clsx from "clsx";

import { RadioProps } from "./RadioProps";

const Radio = forwardRef(
  (
    {
      model,
      label = false,
      disabled = false,
      checked = false,
      ...restProps
    }: RadioProps,
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
        type: "radio",
        checked: model === restProps.value,
        disabled,
        ref,
        className: clsx(restProps.className, "form-check-input c-pointer"),
        id,
      },
    };

    return (
      <div className="position-relative form-check">
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

Radio.displayName = "Radio";

export default Radio;
