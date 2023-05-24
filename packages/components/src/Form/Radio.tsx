import { ChangeEvent, forwardRef, ReactNode, Ref, useMemo } from "react";

import clsx from "clsx";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * State controlling activated radio group
   */
  model: string | boolean | number;
  /**
   * Use onChange event Handler to set new value of model
   */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Label of the radio checkbox
   */
  label?: string | false;
  /**
   * Replace with an icon
   */
  icon?: ReactNode;
}

const Radio = forwardRef(
  (
    { model, icon, label = false, disabled = false, ...restProps }: RadioProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = useMemo(
      () =>
        restProps.id
          ? restProps.id
          : (
              Math.floor(Math.random() * 999999999999) + 1000000000000
            ).toString(),
      [restProps.id],
    );
    const inputProps = {
      ...restProps,
      ...{
        type: "radio",
        checked: model === restProps.value,
        disabled,
        ref,
        className: clsx(
          restProps.className,
          "form-check-input c-pointer",
          icon && "d-none",
        ),
        id,
      },
    };

    return (
      <div className={clsx("position-relative form-check", icon && "ps-0")}>
        <input {...inputProps} />
        {icon && (
          <label
            htmlFor={inputProps.id}
            className={clsx(
              "c-pointer",
              model !== restProps.value && "text-muted",
            )}
          >
            {icon}
          </label>
        )}
        {!icon && label && (
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
