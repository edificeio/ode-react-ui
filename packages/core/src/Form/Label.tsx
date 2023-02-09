import { forwardRef, Ref, useEffect } from "react";

import clsx from "clsx";

import { useFormControl } from "./FormContext";
import { LabelProps } from "./LabelProps";

const Label = forwardRef(
  (
    {
      leftIcon,
      optionalText = "Optional",
      requiredText = "*",
      children,
      className,
    }: LabelProps,
    ref?: Ref<HTMLLabelElement>,
  ) => {
    const { id, isOptional, isRequired } = useFormControl();

    const classes = clsx(
      "form-label",
      {
        "has-icon": leftIcon,
      },
      className,
    );

    const optionalState = isOptional && !isRequired;
    const requiredState = isRequired && !isOptional;

    useEffect(() => {
      if (isOptional && isRequired) {
        throw new Error("Cannot be optional and required at the same time");
      }
    }, []);

    return (
      <label ref={ref} htmlFor={id} className={classes}>
        {leftIcon}
        {children}
        {optionalState && <em className="optional">- {optionalText}</em>}
        {requiredState && <em className="required">{requiredText}</em>}
      </label>
    );
  },
);

Label.displayName = "Label";

export default Label;
