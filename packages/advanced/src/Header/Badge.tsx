import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="position-absolute badge rounded-pill bg-warning">
      {children}
    </span>
  );
}
