import styled from "styled-components";
import { StyledTable } from "../Table/Table.styled.jsx";

//naming practices could have been better. Due to time constraints, I only added attributes for current styles.

export const StyledDetailsTable = styled(StyledTable)`
  border-spacing: ${({ borderSpacing }) => (borderSpacing ? borderSpacing : 0)};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  th {
    vertical-align: top;
    text-align: start;
    padding: ${({ padding }) => (padding ? padding : "auto")};

    :hover {
      cursor: default;
    }
  }
  td {
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
    word-wrap: ${({ wordWrap }) => (wordWrap ? wordWrap : "auto")};
    text-align: start;
    vertical-align: top;
  }
`;
