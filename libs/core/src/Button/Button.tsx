/* eslint-disable react/button-has-type */
/**
 * Button  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/story/components-core-button--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
import { forwardRef } from "react";

import clsx from "clsx";

import { Loading } from "../Loading/Loading";
import { ButtonProps, ButtonRef } from "./ButtonProps";

/**
 * Primary UI component for user interaction
 */

const Button = forwardRef<ButtonRef, ButtonProps>((props: ButtonProps, ref) => {
  const {
    color = "primary",
    children,
    loading = false,
    loadingIcon,
    loadingPosition,
    leftIcon,
    rightIcon,
    variant = "filled",
    ariaLabel,
    ...restProps
  } = props;

  const cx = clsx("btn", {
    "btn-icon": !children,
    [`btn-filled btn-${color}`]: variant === "filled",
    [`btn-${variant}-${color}`]: variant === "outline" || variant === "ghost",
    "btn-loading": loading,
  });

  return (
    <button ref={ref} className={cx} aria-label={ariaLabel} {...restProps}>
      {loading ? (
        <Loading
          loading
          loadingIcon={loadingIcon}
          loadingPosition={loadingPosition}
        >
          {children}
        </Loading>
      ) : (
        <span>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
