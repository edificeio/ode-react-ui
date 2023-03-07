import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import clsx from "clsx";

import { CheckboxProps } from "./CheckboxProps";

const Checkbox = forwardRef(
  (
    {
      label,
      disabled = false,
      checked = false,
      indeterminate = false,
      ...restProps
    }: CheckboxProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    // Local ref will be merged with forwardRef in useImperativeHandle below
    const refCheckbox = useRef<HTMLInputElement>(null);

    // We add two methods to control the alert from parent component
    useImperativeHandle(ref, () => ({
      ...(refCheckbox.current as HTMLInputElement),
    }));

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
        ref: refCheckbox,
        className: clsx(restProps.className, "form-check-input c-pointer"),
        id,
      },
    };

    useEffect(() => {
      refCheckbox.current!.indeterminate = indeterminate;
    }, [refCheckbox, indeterminate]);

    return (
      <div className="position-relative d-inline-block">
        <input {...inputProps} />
        {label && (
          <label className="ms-8 form-check-label" htmlFor={inputProps.id}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
