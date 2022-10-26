import { ReactNode } from "react";

export type ButtonTypes = "button" | "submit" | "reset";
export type ButtonColors = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonVariants = "filled" | "outline" | "ghost";
export type LoadingPosition = "left" | "right" | undefined;

export type LoadingButtonProps = JSX.Element | undefined;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * `button`, `submit` or `reset`
   */
  type: ButtonTypes;
  /**
   * `primary`, `secondary`, `tertiary` or `danger`
   */
  color: ButtonColors;
  /**
   * `filled`, `outline` or `ghost`
   */
  variant: ButtonVariants;
  /**
   * Does it has a text ?
   */
  children: string;
  /**
   * Display Icon Component to the left
   */
  leftIcon?: ReactNode;
  /**
   * Display Icon Component to the right
   */
  rightIcon?: ReactNode;
  /**
   * Is it loading ?
   */
  loading?: boolean;
  /**
   * Override Loading Icon
   */
  loadingIcon?: LoadingButtonProps;
  /**
   * Loading Icon Position
   * `left`, `right`
   */
  loadingPosition?: LoadingPosition;
  /**
   * Disabled status
   */
  disabled?: boolean;
  /**
   * When using Icon Button
   */
  ariaLabel?: string;
}
