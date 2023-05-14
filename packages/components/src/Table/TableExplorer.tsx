/**
 * TableExplorer  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-table--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Table/Table.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/table/
 */

import { forwardRef, Ref } from "react";

export type TableExplorerRef = HTMLTableElement;

export interface TableExplorerProps {
  children?: Array<React.ReactElement<HTMLTableSectionElement>>;
}

const TableExplorer = forwardRef(
  ({ children }: TableExplorerProps, ref: Ref<TableExplorerRef>) => {
    return (
      <>
        <table className="table-explorer">{children}</table>
      </>
    );
  },
);

TableExplorer.displayName = "TableExplorer";

export default TableExplorer;
