import { ChangeEvent, useEffect, useState } from "react";

import clsx from "clsx";

import { Button } from "../../Button";
import ExternalLinker from "./ExternalLinker";
import InternalLinker, { InternalLink } from "./InternalLinker";
import { AppSearchResult, LinkerModel } from "./LinkerModel";

export type LinkerType = "search" | "external";

export interface LinkerProps {
  /**
   * Link types the component allows to create :
   * `search`, `external`, [`search`, `external`] (default)
   */
  types?: LinkerType | Array<LinkerType>;

  /** Internal linker : list of available apps */
  appPrefixes?: string[];

  /** Default (external) url value. */
  url?: string;

  /** Default tooltip value. */
  title?: string;

  /** Default link target. */
  target?: "_blank";

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

  /** Plug here a service (explore/search) to look for resources having a prefix and a term. */
  onSearch?: (appPrefix: string, term: string) => Promise<AppSearchResult[]>;

  /** Plug here a service (explore/open) to get the URL of the resource having a prefix and an id. */
  onSelectInternalResource?: (resource: AppSearchResult) => Promise<URL>;

  /** Notify when the link changes */
  onChange: (metadata: LinkerModel) => void;
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
  url = "",
  title,
  target,
  appPrefixes,
  onSearch,
  onSelectInternalResource,
  onChange,
}: LinkerProps) => {
  const [type, setType] = useState<LinkerType>(() => {
    // Determine which tab is to be shown by default
    if (typeof types === "string") return types;
    if (typeof url === "string" && types.indexOf("external") !== -1) {
      return "external";
    }
    return types[0];
  });
  const isSearch = () => type === "search";
  const handleClickInternal = () => setType("search");
  const handleClickExternal = () => setType("external");
  const isTargetBlank = () => model.target === "_blank";

  const [searchResults, setSearchResults] = useState<AppSearchResult[]>([]);

  const [model, setModel] = useState<LinkerModel>({
    href: url,
    title,
    target,
  });

  useEffect(() => onChange?.(model), [model, onChange]);

  const handleTooltipChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newModel: LinkerModel = { ...model, title: event.target.value };
    if (newModel.title?.length === 0) {
      delete newModel.title;
    }
    setModel(newModel);
  };
  const handleBlankChange = () => {
    // Switch between _blank and undefined
    const newModel = { ...model };
    if (isTargetBlank() && typeof newModel.target !== "undefined") {
      delete newModel.target;
    } else {
      newModel.target = "_blank";
    }
    setModel(newModel);
  };
  const handleSearchChange = ({
    application: appPrefix,
    text: term,
  }: InternalLink) => {
    onSearch?.(appPrefix, term).then((res) => {
      setSearchResults(res);
    });
  };
  // if( model.appPrefix ) {
  //   handleSearchChange( {application: model.appPrefix, text: ''} );
  // }
  const handleInternalChange = (result: AppSearchResult) => {
    setModel({ ...model, appPrefix: result.prefix, id: result.id });
    onSelectInternalResource?.(result).then((url) => {
      setModel({ ...model, href: url.toString() });
    });
  };
  const handleExternalChange = (href: string) => {
    setModel({ ...model, href });
  };

  return (
    <>
      <ul className="nav nav-pills justify-content-center mb-32">
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
        <>
          <InternalLinker
            options={appPrefixes}
            labels={labels}
            onChange={handleSearchChange}
          />
          <ul>
            {searchResults.map((res) => (
              <li>
                <button type="button" onClick={() => handleInternalChange(res)}>
                  {res.prefix} id={res.id}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ExternalLinker
          url={url}
          labels={labels}
          onChange={handleExternalChange}
        />
      )}
      <div className="mt-12">
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
      <div className="mt-12">
        <label>
          <input
            type="checkbox"
            checked={isTargetBlank()}
            onChange={handleBlankChange}
          />
          &nbsp;{labels["linker.blank"]}
        </label>
      </div>

      <div className="mt-32">
        <p>
          <u>[debug] Données du lien</u> : <code>{JSON.stringify(model)}</code>
        </p>
      </div>
    </>
  );
};

Linker.displayName = "Linker";
export default Linker;
