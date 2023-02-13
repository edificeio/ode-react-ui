import { ReactNode } from "react";

import { useOdeClient } from "@ode-react-ui/core";

export function Badge({ children }: { children: ReactNode }) {
  const { i18n } = useOdeClient();
  return (
    <span className="position-absolute badge rounded-pill bg-warning">
      {children}
      <span className="visually-hidden">{i18n("navbar.messages")}</span>
    </span>
  );
}
