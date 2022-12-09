import clsx from "clsx";

import { NavLinkProps } from "./NavLinkProps";

export default function NavLink({
  link,
  className,
  children,
  button,
  translate,
}: NavLinkProps<string>) {
  const classes = clsx(className, {
    "nav-link": !button,
    button,
  });

  return (
    <a href={link} className={classes}>
      {children}
      {translate && <span>{translate}</span>}
    </a>
  );
}
