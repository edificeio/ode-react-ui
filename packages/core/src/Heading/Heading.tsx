import { forwardRef } from "react";

import clsx from "clsx";

import { HeadingProps } from "./HeadingProps";

/**
 * Heading component to display heading elements
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level: Component = "h1",
      headingStyle = "h1",
      children,
      className,
      ...restProps
    }: HeadingProps,
    ref,
  ) => {
    const classes = clsx(headingStyle, className);
    return (
      <Component ref={ref} className={classes} {...restProps}>
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";

export default Heading;
