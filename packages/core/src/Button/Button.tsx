/**
 * Button  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-button--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
import { forwardRef, Ref } from "react";

import clsx from "clsx";

import Loading from "../Loading/Loading";
import { ButtonProps, ButtonRef } from "./ButtonProps";

/**
 * Primary UI component for user interaction
 */

const Button = forwardRef(
  (
    {
      color = "primary",
      type = "button",
      size = "md",
      children,
      isLoading,
      loadingIcon,
      loadingPosition,
      leftIcon,
      rightIcon,
      className,
      variant = "filled",
      ...restProps
    }: ButtonProps,
    ref: Ref<ButtonRef>,
  ) => {
    const classes = clsx(
      "btn",
      {
        [`btn-filled btn-${color}`]: variant === "filled",
        [`btn-${variant}-${color}`]:
          variant === "outline" || variant === "ghost",
        "btn-icon": !children,
        "btn-loading": isLoading,
        "btn-lg": size === "lg",
        "btn-sm": size === "sm",
      },
      className,
    );

    return (
      <button ref={ref} className={classes} type={type} {...restProps}>
        {isLoading ? (
          <Loading
            isLoading
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
  },
);

Button.displayName = "Button";

export default Button;
