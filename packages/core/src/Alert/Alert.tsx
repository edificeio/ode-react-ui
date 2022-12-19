import { forwardRef, Ref, useState } from "react";

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
      type = "success",
      className = "",
      children,
      isDismissible = false,
      onClose = () => {},
    }: AlertProps,
    ref: Ref<AlertRef>,
  ) => {
    const [isVisible, setVisibleStatus] = useState<boolean>(true);

    const mapping = {
      success: { icon: <SuccessOutline />, classModifier: "alert-success" },
      warning: { icon: <AlertCircle />, classModifier: "alert-warning" },
      info: { icon: <InfoCircle />, classModifier: "alert-info" },
      danger: { icon: <Error />, classModifier: "alert-danger" },
    };

    const classes = clsx(
      "alert",
      mapping[type].classModifier,
      {
        "alert-dismissible": isDismissible,
      },
      className,
    );

    const closeAlertHandler = () => {
      setVisibleStatus(false);
      onClose();
    };

    return (
      <>
        {isVisible && (
          <div ref={ref} className={classes} role="alert">
            <div className="me-12">{mapping[type].icon}</div>
            <div>{children}</div>
            {isDismissible && (
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={closeAlertHandler}
              ></button>
            )}
          </div>
        )}
      </>
    );
  },
);

Alert.displayName = "Alert";

export default Alert;
