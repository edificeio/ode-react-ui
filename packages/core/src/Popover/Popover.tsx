import { forwardRef, Ref } from "react";

import clsx from "clsx";
import { motion } from "framer-motion";
// import { usePopper } from "react-popper";

import { PopoverProps } from "./PopoverProps";

export const PopoverHeader = ({ children, className }: PopoverProps) => {
  const classes = clsx("popover-header", className);
  return <div className={classes}>{children}</div>;
};

export const PopoverBody = ({ children, className }: PopoverProps) => {
  const classes = clsx("popover-body", className);
  return <div className={classes}>{children}</div>;
};

export const PopoverFooter = ({ children, className }: PopoverProps) => {
  const classes = clsx("popover-footer", className);
  return <div className={classes}>{children}</div>;
};

const Popover = forwardRef(
  (
    { children, className, id, ...restProps }: PopoverProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const classes = clsx(
      "popover position-absolute top-100 start-50 translate-middle-x",
      className,
    );

    return (
      <motion.div
        aria-labelledby={id}
        ref={ref}
        className={classes}
        role="tooltip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          duration: 1.5,
        }}
        {...restProps}
      >
        {children}
      </motion.div>
    );
  },
);

Popover.displayName = "Popover";
export default Popover;
