/**
 * Button  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-button--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
import { forwardRef, ReactNode, Ref } from "react";

import clsx from "clsx";

import Button, { ButtonProps, ButtonRef } from "./Button";

type OmittedProps = "children" | "leftIcon" | "rightIcon";

export interface IconButtonProps extends Omit<ButtonProps, OmittedProps> {
  icon?: ReactNode;
  disabledHover?: boolean;
  backgroundColor?: string;
}

/**
 * IconButton extends ButtonComponent.
 */

const IconButton = forwardRef(
  (
    {
      icon,
      className,
      disabledHover,
      backgroundColor,
      ...restProps
    }: IconButtonProps,
    ref?: Ref<ButtonRef>,
  ) => {
    const buttonProps = {
      ...restProps,
      ...{
        className: clsx(
          "btn-icon btn-sm",
          {
            "disabled-hover": disabledHover,
          },
          className,
        ),
      },
    };

    return (
      <Button ref={ref} {...buttonProps} style={{ backgroundColor }}>
        {icon}
      </Button>
    );
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
