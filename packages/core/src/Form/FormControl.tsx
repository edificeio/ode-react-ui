import { forwardRef, Ref, useMemo } from "react";

import { Context } from "./FormContext";
import { FormControlProps } from "./FormControlProps";
import FormText from "./FormText";
import Input from "./Input";
import Label from "./Label";

/**
 * Form Control Component
 */

const Root = forwardRef(
  (
    {
      children,
      className,
      id,
      isOptional,
      isReadOnly,
      isRequired,
      status,
    }: FormControlProps,
    ref?: Ref<HTMLDivElement>,
  ) => {
    const values = useMemo(
      () => ({
        id,
        isOptional: isOptional!,
        isRequired: isRequired!,
        isReadOnly: isReadOnly!,
        status: status!,
      }),
      [],
    );

    return (
      <Context.Provider value={values}>
        <div ref={ref} className={className}>
          {children}
        </div>
      </Context.Provider>
    );
  },
);

const FormControl = Object.assign({}, Root, {
  Label,
  Input,
  Text: FormText,
});

FormControl.displayName = "FormControl";

export default FormControl;
