import { ReactNode } from "react";

import clsx from "clsx";

export interface MainProps {
  /**
   * App content
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}

export default function Main({ children, className }: MainProps) {
  const classes = clsx("container-fluid", className);
  return <main className={classes}>{children}</main>;
}

Main.displayName = "Main";
