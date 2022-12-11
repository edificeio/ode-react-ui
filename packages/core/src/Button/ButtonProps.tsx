import { ReactNode } from "react";

import { LoadingIcon, LoadingPosition } from "../Loading/LoadingProps";

export type ButtonRef = HTMLButtonElement;

export type ButtonTypes = "button" | "submit" | "reset";
export type ButtonColors = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonVariants = "filled" | "outline" | "ghost";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  /**
   * `button`, `submit` or `reset`
   */
  type: ButtonTypes;
  /**
   * `primary`, `secondary`, `tertiary` or `danger`
   */
  color?: ButtonColors;
  /**
   * `filled`, `outline` or `ghost`
   */
  variant?: ButtonVariants;
  /**
   * Does it has a text ?
   */
  children: ReactNode;
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
  isLoading?: boolean;
  /**
   * Override Loading Icon
   */
  loadingIcon?: LoadingIcon;
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
   * For specific styling
   */
  className?: string;
}
