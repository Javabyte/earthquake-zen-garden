import React from "react";
import StyledFlexWrapper from "./FlexWrapper.styled.jsx";

const FlexWrapper = ({
  display,
  maxWidth,
  height,
  children,
  justifyContent,
  flexFlow,
}) => {
  return (
    <StyledFlexWrapper
      display={display}
      maxWidth={maxWidth}
      height={height}
      justifyContent={justifyContent}
      flexFlow={flexFlow}
    >
      {children}
    </StyledFlexWrapper>
  );
};

export default FlexWrapper;
