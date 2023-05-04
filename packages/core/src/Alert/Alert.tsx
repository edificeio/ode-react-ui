import {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  Ref,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  AlertCircle,
  Error,
  InfoCircle,
  SuccessOutline,
} from "@ode-react-ui/icons";
import clsx from "clsx";

export interface AlertRef {
  show: Function;
  hide: Function;
}

export type AlertTypes = "success" | "warning" | "info" | "danger";

export interface AlertProps extends ComponentPropsWithRef<"div"> {
  /**
   * Type of alert
   */
  type?: AlertTypes;

  /**
   * Alert can be closed with a button ?
   */
  isDismissible?: boolean;

  /**
   * Alert is displayed as Toast
   */
  isToast?: boolean;

  /**
   * Alert must close after delay
   */
  autoClose?: boolean;

  /**
   * If autoClose if activated, set the delay
   * Défault : 3000
   */
  autoCloseDelay?: number;

  /**
   * Alert box content
   */
  children: ReactNode;

  /**
   * Alert box action
   */
  button?: ReactNode;

  /**
   * Callback when alert is closed
   */
  onClose?: Function;

  /**
   * Callback when alert is closed
   */
  onVisibilityChange?: Function;

  /**
   * Optional class for styling purpose
   */
  className?: string;
}

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

    // We add two methods to control the alert from parent component
    useImperativeHandle(ref, () => ({
      show,
      hide,
      ...(refAlert.current as HTMLDivElement),
    }));

    // The parent component can get alert visible state
    useLayoutEffect(() => {
      onVisibilityChange(isVisible);
    }, [isVisible]);

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

    // Here we are mapping alert type with icon Component and bootstrap class
    // https://getbootstrap.com/docs/5.2/components/alerts/
    const mapping = {
      success: { icon: <SuccessOutline />, classModifier: "alert-success" },
      warning: { icon: <AlertCircle />, classModifier: "alert-warning" },
      info: { icon: <InfoCircle />, classModifier: "alert-info" },
      danger: { icon: <Error />, classModifier: "alert-danger" },
    };

    // Create className Attribute from component parameters
    const toastClasses = {
      "is-dismissible": isDismissible,
      "is-toast ": isToast,
    };

    const classes = clsx(
      "alert gap-12",
      mapping[type].classModifier,
      toastClasses,
      className,
    );

    return (
      <>
        {isVisible ? (
          <div ref={refAlert} className={classes} role="alert">
            {mapping[type].icon}
            <div className="alert-content small">{children}</div>
            {button && <div className="ms-12">{button}</div>}
            {isDismissible && (
              <div className="btn-close-container">
                <button
                  type="button"
                  className="btn btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={hide}
                ></button>
              </div>
            )}
            {/* Waiting animation library */}
            {autoClose && (
              <div
                className="alert-progress"
                style={{
                  transform: `scaleX(0)`,
                }}
              ></div>
            )}
          </div>
        ) : null}
      </>
    );
  },
);

Alert.displayName = "Alert";

export default Alert;
