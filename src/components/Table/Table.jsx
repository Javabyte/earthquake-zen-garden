import React, { useState } from "react";
import { StyledTable } from "./Table.styled.jsx";
import TableHead from "../TableHead/TableHead.jsx";
import TableBody from "../TableBody/TableBody.jsx";

// data (earthquake) is passed down as props to this component.

const Table = ({
  caption = "",
  tableColumns,
  data,
  trFontWeight,
  tdFontWeight,
  tdPadding,
}) => {
  // Quick check to see if we have data being passed in.
  if (!tableColumns.length || !data.length)
    return <h3>Make sure data is being fetched!</h3>;

  const [tableData, updateTableData] = useState(data);

  // handleTableSort will be passed to TableHead. This so the TableHead can pass changes to this component for table updates.
  const handleTableSort = function (selectedColumn, sortOrder) {
    const currentTableData = [...tableData];

    let sorted = currentTableData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[selectedColumn] > b[selectedColumn] ? 1 : -1;
      }
      return a[selectedColumn] > b[selectedColumn] ? -1 : 1;
    });
    updateTableData(sorted);
  };

  return (
    <StyledTable
      trFontWeight={trFontWeight}
      tdFontWeight={tdFontWeight}
      tdPadding={tdPadding}
    >
      <caption>{caption}</caption>
      <TableHead
        tableColumns={tableColumns}
        handleTableSort={handleTableSort}
      />
      <TableBody tableColumns={tableColumns} tableData={tableData} />
    </StyledTable>
  );
};

export default Table;
