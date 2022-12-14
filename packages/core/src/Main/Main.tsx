import clsx from "clsx";

import { MainProps } from "./MainProps";

export default function Main({ children, className }: MainProps) {
  const classes = clsx("container-fluid", className);
  return <main className={classes}>{children}</main>;
}

Main.displayName = "Main";
