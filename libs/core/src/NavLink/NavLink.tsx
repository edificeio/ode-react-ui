import { ReactNode } from "react";

import clsx from "clsx";

interface NavLinkProps<T> {
  /**
   * href link
   */
  link: T;
  /**
   * To override default classes
   */
  className?: T;
  /**
   * Children props
   */
  children: ReactNode;
  /**
   * Translate Text
   */
  translate?: T;
  /**
   * Give Navlink Button Style (for 1D navbar)
   */
  button?: boolean;
}

export default function NavLink({
  link,
  className,
  children,
  button,
  translate,
}: NavLinkProps<string>) {
  const classes = clsx(className, {
    "nav-link": !button,
    "button": button,
  });
  return (
    <a href={link} className={classes}>
      {children}
      {translate && <span>{translate}</span>}
    </a>
  );
}
