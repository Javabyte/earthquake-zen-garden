import styled from "styled-components";

export const StyledTable = styled.table`
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  table-layout: ${({ fixed }) => (fixed ? "fixed" : "auto")};
  margin: auto;
  th {
    :hover {
      cursor: pointer;
    }
    font-weight: ${({ trFontWeight }) =>
      trFontWeight ? trFontWeight : "bold"};
  }
  td {
    text-align: center;
    font-weight: ${({ tdFontWeight }) =>
      tdFontWeight ? tdFontWeight : "normal"};
    padding: ${({ tdPadding }) => (tdPadding ? tdPadding : "auto")};
  }
`;
