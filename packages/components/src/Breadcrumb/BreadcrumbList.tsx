import { forwardRef, ReactNode, Ref } from "react";

export interface BreadcrumbListProps {
  children: ReactNode;
}

const BreadcrumbList = forwardRef(
  ({ children }: BreadcrumbListProps, ref: Ref<HTMLOListElement>) => {
    return (
      <ol ref={ref} className="breadcrumb d-flex align-items-center mb-0">
        {children}
      </ol>
    );
  },
);

BreadcrumbList.displayName = "BreadcrumbList";

export default BreadcrumbList;
