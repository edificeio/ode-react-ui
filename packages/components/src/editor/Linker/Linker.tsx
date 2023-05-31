import { ChangeEvent, useState } from "react";

import clsx from "clsx";

import { Button } from "../../Button";
import ExternalLinker from "./ExternalLinker";
import InternalLinker, { InternalLink } from "./InternalLinker";

/**
 * Definition of a link.
 */
export type Link = {
  url: string;
  title: string;
  target: "blank" | "self";
};

export type LinkerType = "search" | "external";

export interface LinkerProps {
  /**
   * Link types the component allows to create :
   * `internal`, `external`, [`internal`, `external`] (default)
   */
  types?: LinkerType | Array<LinkerType>;

  /** Default tooltip value. */
  title?: string;

  /** Default link target. */
  target?: "blank" | "self";

  /** Translations */
  labels?: {
    "linker.search"?: string;
    "linker.external"?: string;
    "linker.external.placeholder"?: string;
    "linker.address"?: string;
    "linker.address.placeholder"?: string;
    search?: string;
    "linker.tooltip"?: string;
    "linker.tooltip.placeholder"?: string;
    "linker.blank"?: string;
  };
}

const Linker = ({
  labels = {
    "linker.search": "Search the platform",
    "linker.external": "Web site address",
    "linker.tooltip": "Tooltip",
    "linker.tooltip.placeholder": "Tooltip",
    "linker.blank": "Open this link in a new tab",
  },
  types = ["search", "external"],
  title = "",
  target = "self",
}: LinkerProps) => {
  const [type, setType] = useState<LinkerType>(
    typeof types === "string" ? types : types[0],
  );
  const isSearch = () => type === "search";
  const handleClickInternal = () => setType("search");
  const handleClickExternal = () => setType("external");

  const [model, setModel] = useState<Link>({
    url: "",
    title: title,
    target: target,
  });
  const isTargetBlank = () => model.target === "blank";

  const handleTooltipChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({ ...model, title: event.target.value });
  };
  const handleBlankChange = () => {
    setModel({ ...model, target: isTargetBlank() ? "self" : "blank" });
  };
  const handleInternalChange = (internal: InternalLink) => {
    const url = /*TODO*/ internal.application;
    setModel({ ...model, url });
  };
  const handleExternalChange = (url: string) => {
    setModel({ ...model, url });
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

      {isSearch() ? (
        <InternalLinker labels={labels} onChange={handleInternalChange} />
      ) : (
        <ExternalLinker labels={labels} onChange={handleExternalChange} />
      )}

      <div>
        <label>
          {labels["linker.tooltip"]}
          <input
            type="text"
            placeholder={labels["linker.tooltip.placeholder"]}
            defaultValue={model.title}
            onChange={handleTooltipChange}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={isTargetBlank()}
            onChange={handleBlankChange}
          />
          &nbsp;{labels["linker.blank"]}
        </label>
      </div>
    </>
  );
};

Linker.displayName = "Linker";
export default Linker;
