import { ReactNode } from "react";

import { LoadingIcon, LoadingPosition } from "../Loading/LoadingProps";

export type ButtonRef = HTMLButtonElement;

export type ButtonTypes = "button" | "submit" | "reset";
export type ButtonColors = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonVariants = "filled" | "outline" | "ghost";
export type ButtonSizes = "sm" | "md" | "lg";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  /**
   * `button`, `submit` or `reset`
   */
  type?: ButtonTypes;
  /**
   * `primary`, `secondary`, `tertiary` or `danger`
   */
  color?: ButtonColors;
  /**
   * `filled`, `outline` or `ghost`
   */
  variant?: ButtonVariants;
  /**
   * `sm`, `md` or `lg`
   */
  size?: ButtonSizes;
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
   * Optional class for styling purpose
   */
  className?: string;
}
