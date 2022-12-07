import { ReactNode } from "react";
import { LoadingIcon, LoadingPosition } from "../Loading/LoadingProps";
export declare type ButtonRef = HTMLButtonElement;
export declare type ButtonTypes = "button" | "submit" | "reset";
export declare type ButtonColors = "primary" | "secondary" | "tertiary" | "danger";
export declare type ButtonVariants = "filled" | "outline" | "ghost";
export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
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
     * When using Icon Button
     */
    ariaLabel?: string;
}
