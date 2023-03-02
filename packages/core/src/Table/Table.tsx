/**
 * Table  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-table--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Table/Table.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/table/
 */

import { forwardRef, Ref } from "react";

import { TableProps, TableRef } from "./TableProps";

const Table = forwardRef(({ children }: TableProps, ref: Ref<TableRef>) => {
  return (
    <>
      <table className="table">{children}</table>
    </>
  );
});

Table.displayName = "Table";

export default Table;
