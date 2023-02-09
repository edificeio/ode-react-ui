import { ReactNode } from "react";

export interface GridProps {
  /**
   * Content inside the Grid component. Usually GridCol components
   */
  children: ReactNode;
}

export interface GridColProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * Size on Mobile
   */
  sm: string;
  /**
   * Size on Tablet
   */
  md?: string;
  /**
   * Size on Desktop
   */
  lg?: string;
  /**
   * Accept content as children
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * As Prop
   */
  as?: React.ElementType;
}
