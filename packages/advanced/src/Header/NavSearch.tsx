import { forwardRef, type Ref, type ReactNode } from "react";

import { FormControl } from "@ode-react-ui/core";

export const NavSearch = forwardRef(
  ({ children }: { children: ReactNode }, ref: Ref<HTMLInputElement>) => {
    return (
      <FormControl
        id="my-search-input"
        className="search-text input-group py-8 px-12"
      >
        <FormControl.Input
          ref={ref}
          size="sm"
          type="text"
          name="my-search-input"
          placeholder="Rechercher"
        />
        {children}
      </FormControl>
    );
  },
);

NavSearch.displayName = "NavSearch";
