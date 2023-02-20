import { forwardRef, Ref, useMemo } from "react";

import clsx from "clsx";

import { RadioProps } from "./RadioProps";

const Radio = forwardRef(
  (
    {
      model,
      icon,
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
