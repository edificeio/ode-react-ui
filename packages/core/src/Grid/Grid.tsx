import clsx from "clsx";

// import Col from "./GridCol";
import { GridColProps, GridProps } from "./GridProps";
// import { GridProps } from "./GridProps";

/**
 * Grid of 12 columns on Desktop, 8 on Tablet and 4 on Mobile
 */
const Grid = ({ children }: GridProps) => {
  return <div className="grid">{children}</div>;
};

export const Column = ({
  sm,
  md,
  lg,
  children,
  className,
  as,
  ...restProps
}: GridColProps) => {
  const Component = as || "div";
  const classes = clsx(
    {
      [`g-col-${sm}`]: sm,
      [md ? `g-col-md-${md}` : ""]: md,
      [lg ? `g-col-lg-${lg}` : ""]: lg,
    },
    className,
  );
  return (
    <Component className={classes} {...restProps}>
      {children}
    </Component>
  );
};

Grid.displayName = "Grid";
Column.displayName = "Grid.Col";

Grid.Col = Column;

export default Grid;
