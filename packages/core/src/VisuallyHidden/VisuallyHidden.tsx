import { forwardRef, ReactNode, Ref } from "react";

const VisuallyHidden = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLSpanElement>) => {
    return (
      <span className="visually-hidden" ref={ref}>
        {children}
      </span>
    );
  },
);

VisuallyHidden.displayName = "VisuallyHidden";

export default VisuallyHidden;
