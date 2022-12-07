import { forwardRef } from "react";

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
      ...restProps
    }: HeadingProps,
    ref,
  ) => {
    return (
      <Component ref={ref} className={headingStyle} {...restProps}>
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";

export default Heading;
