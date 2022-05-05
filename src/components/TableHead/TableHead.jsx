import React, { useState } from "react";

const TableHead = ({ tableColumns, handleTableSort }) => {
  // The table head is the source of updating the table. We can pass changes up to Table component to update data state.
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // in the handleSort function, the selectedColumn is the column key to access the data, not col header.
  const handleHeaderSortChange = function (selectedColumn) {
    let orderToSortBy;
    // if clicking on a column or deviating away from the current selected column, sort by asc on the new col.
    if (selectedColumn !== sortColumn) {
      setSortOrder("asc");
      setSortColumn(selectedColumn);
      handleTableSort(selectedColumn, "asc");
    } else {
      orderToSortBy = sortOrder === "asc" ? "desc" : "asc";
      setSortOrder(orderToSortBy);
      handleTableSort(selectedColumn, orderToSortBy);
    }
  };

  return (
    <thead>
      <tr>
        {tableColumns.map((column) => (
          <th
            key={column.headerName}
            onClick={() => handleHeaderSortChange(column.dataKey)}
          >
            {column.headerName}
          </th>
        ))}
      </tr>
    </thead>
  );
};

// I didn't memo TableHead because the Table is memod so this component should not be re-rendering unless Table does.

export default TableHead;
