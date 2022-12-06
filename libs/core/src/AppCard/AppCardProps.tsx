import { ReactNode } from "react";

import { HeadingProps } from "../Heading/HeadingProps";
import { MergeElementProps } from "../utils/merge-element";

type AppHeadingProps = Pick<HeadingProps, "level" | "headingStyle">;

export type AppCardProps<P extends React.ElementType = "div"> = {
  /**
   * Polymorphic Component
   */
  as?: P;
  /**
   * Pass all information about an app
   */
  app: any;
  /**
   * Use as title element (h1, h2)
   */
  isHeading?: boolean;
  /**
   * Passing compounds components
   */
  children?: ReactNode;
  /**
   * Title, Card Component, ...
   */
  variant?: string;
} & MergeElementProps<P, AppHeadingProps>;
