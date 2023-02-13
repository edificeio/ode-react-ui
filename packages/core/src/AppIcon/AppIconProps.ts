import { IWebApp } from "ode-ts-client";

/* type MergeElementProps<
  T extends React.ElementType,
  P extends object = {},
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P; */

export type AppIconSize = "24" | "32" | "40" | "48" | "80" | "160";

export interface BaseProps {
  /**
   * Define icon size
   */
  size?: AppIconSize;
  /**
   * App information to get code and name
   */
  app?: IWebApp;
}

type AppVariants = "square" | "circle" | "rounded";
type SquareVariant = Extract<AppVariants, { type: "square" }>;

export type Props =
  | {
      /**
       * Show icon full width
       */
      iconFit?: "contain";
      /**
       * Square variant
       */
      variant?: SquareVariant;
    }
  | {
      /**
       * Add padding around icon
       */
      iconFit: "ratio";
      /**
       * Rounded or Circle variant
       */
      variant: AppVariants;
    };

export type AppIconProps = BaseProps & Props;
