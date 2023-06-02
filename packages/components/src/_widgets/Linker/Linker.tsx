import { ChangeEvent, useState } from "react";

import clsx from "clsx";

import { AppSearchResult, Link } from "../../_models/LinkerModel";
import { Button } from "../../Button";
import ExternalLinker from "./ExternalLinker";
import InternalLinker, { InternalLink } from "./InternalLinker";

export type LinkerType = "search" | "external";

export interface LinkerProps {
  /**
   * Link types the component allows to create :
   * `search`, `external`, [`search`, `external`] (default)
   */
  types?: LinkerType | Array<LinkerType>;

  /** Internal linker : list of available apps */
  appPrefixes?: string[];

  /** Default tooltip value. */
  title?: string;

  /** Default link target. */
  target: "_blank" | undefined;

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
  onGenerateUrl?: (resource: AppSearchResult) => Promise<URL>;
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
  target,
  appPrefixes, //TODO pass through a context ?
  onSearch,
  onGenerateUrl,
}: LinkerProps) => {
  const [type, setType] = useState<LinkerType>(
    typeof types === "string" ? types : types[0],
  );
  const isSearch = () => type === "search";
  const handleClickInternal = () => setType("search");
  const handleClickExternal = () => setType("external");

  const [searchResults, setSearchResults] = useState<AppSearchResult[]>([]);

  const [model, setModel] = useState<Link>({
    url: "",
    title: title,
    target: target,
    appPrefix: appPrefixes?.[0],
  });
  const isTargetBlank = () => model.target === "_blank";

  const handleTooltipChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModel({ ...model, title: event.target.value });
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
    onGenerateUrl?.(result).then((url) => {
      setModel({ ...model, url: url.toString() });
    });
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
      Lien actuel : {JSON.stringify(model)}
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
