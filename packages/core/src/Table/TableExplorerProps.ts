import React from "react";

export type TableExplorerRef = HTMLTableElement;

export interface TableExplorerProps {
  children?: Array<React.ReactElement<HTMLTableSectionElement>>;
}
