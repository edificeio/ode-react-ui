import {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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
      button,
      isDismissible = false,
      isToast = false,
      autoClose = false,
      autoCloseDelay = 3000,
      onClose = () => {},
      onVisibilityChange = () => {},
    }: AlertProps,
    ref: Ref<AlertRef>,
  ) => {
    const [isVisible, setVisibleStatus] = useState<boolean>(true);

    // Local ref will be merged with forwardRef in useImperativeHandle below
    const refAlert = useRef<HTMLDivElement>(null);

    // Here we are mapping alert type with icon Component and bootstrap class
    // https://getbootstrap.com/docs/5.2/components/alerts/
    const mapping = {
      success: { icon: <SuccessOutline />, classModifier: "alert-success" },
      warning: { icon: <AlertCircle />, classModifier: "alert-warning" },
      info: { icon: <InfoCircle />, classModifier: "alert-info" },
      danger: { icon: <Error />, classModifier: "alert-danger" },
    };

    // Create className Attribute from component parameters
    const classes = clsx(
      "alert",
      mapping[type].classModifier,
      {
        "is-dismissible": isDismissible,
        "is-toast ": isToast,
      },
      className,
    );

    useEffect(() => {
      if (autoClose && isVisible) {
        setTimeout(() => {
          hide();
        }, autoCloseDelay);
      }
    }, [isVisible]);

    // Method to hide alert
    const hide = () => {
      setVisibleStatus(false);
      // The parent component can execute function when alert is closed
      onClose();
    };

    // Method to show alert
    const show = () => {
      setVisibleStatus(true);
    };

    // The parent component can get alert visible state
    useLayoutEffect(() => {
      onVisibilityChange(isVisible);
    }, [isVisible]);

    // We add to method to control the alert from parent component
    useImperativeHandle(ref, () => ({
      show,
      hide,
      ...(refAlert.current as HTMLDivElement),
    }));

    return (
      <>
        {isVisible && (
          <div ref={refAlert} className={classes} role="alert">
            <div className="me-12">{mapping[type].icon}</div>
            <div className="alert-content">{children}</div>
            {button}
            {isDismissible && (
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={hide}
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
