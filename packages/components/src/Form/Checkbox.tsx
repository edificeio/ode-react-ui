import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import clsx from "clsx";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Add a label
   */
  label?: string;
  /**
   * If disable
   */
  disabled?: boolean;
  /**
   * If checked
   */
  checked?: boolean;
  /**
   * If indeterminate
   */
  indeterminate?: boolean;
}

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

    useEffect(() => {
      refCheckbox.current!.indeterminate = indeterminate;
    }, [refCheckbox, indeterminate]);

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
        type: "checkbox",
        checked,
        disabled,
        ref: refCheckbox,
        className: clsx(restProps.className, "form-check-input c-pointer"),
        id,
      },
    };

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
