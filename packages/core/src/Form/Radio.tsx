import React, { forwardRef, Ref } from "react";

import clsx from "clsx";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * State controlling radio group
   */
  model: string | boolean;
  /**
   * Label of the radio checkbox
   */
  label?: string | false;
}

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
    const inputProps = {
      ...restProps,
      ...{
        type: "radio",
        checked: model === restProps.value,
        disabled,
        ref,
        className: clsx(restProps.className, "form-check-input c-pointer"),
      },
    };

    return (
      <div className="position-relative form-check">
        <input {...inputProps} />
        {label && (
          <label className="form-check-label" htmlFor={restProps.id}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Radio.displayName = "Radio";

export default Radio;
