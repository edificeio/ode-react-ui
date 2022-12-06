/* eslint-disable react/button-has-type */
/**
 * Loading  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/story/components-core-loading--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/core/src/Loading/Loading.tsx
 */

import { forwardRef } from "react";

import { Loader } from "@ode-react-ui/icons";
import clsx from "clsx";

import { LoadingProps } from "./LoadingProps";

/**
 * Inform user about loading status
 */

const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  (props: LoadingProps, ref): JSX.Element => {
    const {
      loading,
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
      "is-loading": loading,
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
