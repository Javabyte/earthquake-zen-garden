import React, { memo } from "react";
import { StyledDetailsTable } from "./DetailsTable.styled.jsx";

//Details table is a re-usable component that can be used and styled according to use. It is being used in the Profile and Details page.

const DetailsTable = ({
  tableColumns,
  data,
  margin,
  borderSpacing,
  wordWrap,
  padding,
  maxWidth,
  minWidth,
}) => {
  if (!tableColumns.length || !data.length) return;

  let tableRows = data.map((obj) =>
    tableColumns.map((column) => (
      <tr key={column.headerName}>
        <th>{column.headerName}</th>
        <td>{obj[column.dataKey]}</td>
      </tr>
    ))
  );

  return (
    <StyledDetailsTable
      margin={margin}
      borderSpacing={borderSpacing}
      wordWrap={wordWrap}
      padding={padding}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      <tbody>{tableRows}</tbody>
    </StyledDetailsTable>
  );
};

export default memo(DetailsTable);
