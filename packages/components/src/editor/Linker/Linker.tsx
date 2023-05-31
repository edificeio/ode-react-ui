import { useState } from "react";

import clsx from "clsx";

import { Button } from "../../Button";
import ExternalLinker from "./ExternalLinker";

export type LinkerType = "search" | "external";

export interface LinkerProps {
  /**
   * Link types the component allows to create :
   * `internal`, `external`, [`internal`, `external`] (default)
   */
  types?: LinkerType | Array<LinkerType>;

  /** Translations */
  labels?: {
    "linker.search"?: string;
    "linker.external"?: string;
  };
}

const Linker = ({
  labels = {
    "linker.search": "Search the platform",
    "linker.external": "Web site address",
  },
  types = ["search", "external"],
}: LinkerProps) => {
  const [type, setType] = useState<LinkerType>(
    typeof types === "string" ? types : types[0],
  );

  const isSearch = () => type === "search";

  const handleClickInternal = () => {
    setType("search");
  };

  const handleClickExternal = () => {
    setType("external");
  };

  return (
    <>
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <Button
            type="button"
            className={clsx("nav-link", isSearch() ? "active" : "")}
            aria-current="page"
            onClick={handleClickInternal}
          >
            {labels["linker.search"]}
          </Button>
        </li>
        <li className="nav-item">
          <Button
            type="button"
            className={clsx("nav-link", isSearch() ? "" : "active")}
            aria-current="page"
            onClick={handleClickExternal}
          >
            {labels["linker.external"]}
          </Button>
        </li>
      </ul>

      {isSearch() ? <section></section> : <ExternalLinker />}
    </>
  );
};

Linker.displayName = "Linker";
export default Linker;
