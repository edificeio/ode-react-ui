/* eslint-disable react/button-has-type */
/**
 * Button  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/story/components-core-button--primary
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
import { forwardRef } from "react";

import clsx from "clsx";

import { ButtonProps } from "./ButtonProps";
import { LoadingButton } from "./LoadingButton";

/**
 * Primary UI component for user interaction
 */

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      children,
      loading,
      loadingIcon,
      loadingPosition,
      leftIcon,
      rightIcon,
      variant,
      ariaLabel,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const cx = clsx("btn", {
      "btn-icon": !children,
      [`btn-filled btn-${color}`]: variant === "filled",
      [`btn-${variant}-${color}`]: variant === "outline" || variant === "ghost",
      "btn-loading": loading,
    });

    return (
      <button ref={ref} className={cx} {...props} aria-label={ariaLabel}>
        {loading ? (
          <LoadingButton
            loadingIcon={loadingIcon}
            loadingPosition={loadingPosition}
          >
            {children}
          </LoadingButton>
        ) : (
          <span>
            {leftIcon}
            {children}
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

export default Button;
