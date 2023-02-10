import { type ReactNode } from "react";

import clsx from "clsx";

export function Navbar({
  children,
  className,
  ...restProps
}: {
  children: ReactNode;
  className?: string;
}) {
  const classes = clsx("navbar", className);

  return (
    <nav className={classes} {...restProps}>
      {children}
    </nav>
  );
}
