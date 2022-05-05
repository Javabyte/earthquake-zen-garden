import React from "react";
import { Link } from "react-router-dom";

const TableBody = ({ tableColumns, tableData }) => {
  // for each data object, we need to ouput n amount of columns depending on how many titles there are.
  // loop through each data object, and for each data object, return the column data associated with it.

  return (
    <tbody>
      {tableData.map((dataObj) => (
        <tr key={dataObj.id}>
          {tableColumns.map((column) => (
            <td key={column.dataKey}>
              {column.isLink ? (
                <Link to={`/${column.linkText}/${dataObj.id}`} state={dataObj}>
                  {dataObj[column.dataKey]}
                </Link>
              ) : (
                dataObj[column.dataKey]
              )}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

// I didn't memo TableBody because the Table is memod so this component should not be re-rendering unless Table does.

export default TableBody;
