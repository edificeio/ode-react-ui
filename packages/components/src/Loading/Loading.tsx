import { forwardRef, ReactNode, Ref } from "react";

import { Loader } from "@ode-react-ui/icons";
import clsx from "clsx";

export type LoadingPosition = "left" | "right" | undefined;
export type LoadingIcon = JSX.Element | undefined;

export interface LoadingProps {
  /**
   * Is it loading ?
   */
  isLoading: boolean;
  /**
   * Override default loading icon
   */
  loadingIcon?: LoadingIcon;
  /**
   * Default position to left. When using with another component, position can be switched
   */
  loadingPosition?: LoadingPosition;
  /** When using with another component, we can pass a children */
  children?: ReactNode;

  color?: string;
}

/**
 * Inform user about loading status
 */

const Loading = forwardRef(
  (props: LoadingProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      isLoading,
      loadingIcon,
      loadingPosition = "left",
      children,
      ...restProps
    } = props;

    const getLoadingIcon = () => {
      let icon;
      if (loadingIcon) {
        icon = loadingIcon;
      } else {
        icon = <Loader {...restProps} aria-label="Loading" />;
      }

      return icon;
    };

    const classes = clsx("loading", {
      "is-loading": isLoading,
    });

    return (
      <div className={classes} role="status" ref={ref}>
        {(!loadingPosition || loadingPosition === "left") && getLoadingIcon()}
        {children}
        {loadingPosition === "right" && getLoadingIcon()}
      </div>
    );
  },
);

Loading.displayName = "Loading";

export default Loading;
