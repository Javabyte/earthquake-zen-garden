import styled from "styled-components";

const StyledFlexWrapper = styled.div`
  display: ${({ display }) => (display ? display : "block")};
  flex-flow: ${({ flexFlow }) => (flexFlow ? flexFlow : null)};
  margin: ${({ margin }) => (margin ? margin : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "auto"};
`;

export default StyledFlexWrapper;
