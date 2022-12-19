import { forwardRef, Ref } from "react";

/**
 * Alert  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-alert--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Alert/Alert.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/alert/
 */
import {
  AlertCircle,
  Error,
  InfoCircle,
  SuccessOutline,
} from "@ode-react-ui/icons";
import clsx from "clsx";

import { AlertProps, AlertRef } from "./AlertProps";

const Alert = forwardRef(
  (
    {
      variant = "success",
      className = "",
      children,
      isDismissible = false,
    }: AlertProps,
    ref: Ref<AlertRef>,
  ) => {
    const mapping = {
      success: { icon: <SuccessOutline />, classModifier: "alert-success" },
      warning: { icon: <AlertCircle />, classModifier: "alert-warning" },
      information: { icon: <InfoCircle />, classModifier: "alert-info" },
      error: { icon: <Error />, classModifier: "alert-danger" },
    };

    const classes = clsx(
      "alert",
      mapping[variant].classModifier,
      {
        "alert-dismissible": isDismissible,
      },
      className,
    );

    return (
      <div ref={ref} className={classes} role="alert">
        <div className="me-12">{mapping[variant].icon}</div>
        <div>{children}</div>
        {isDismissible && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        )}
      </div>
    );
  },
);

Alert.displayName = "Alert";

export default Alert;
