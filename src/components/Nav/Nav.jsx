import { StyledNav } from "./Nav.styled.jsx";
import React from "react";
import Image from "../Image/Image.jsx";
import { Link } from "react-router-dom";

// Just in this scenario I didn't memoize the Nav component because it is at the top level.
const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <Image
          src="https://www.realtor.com/realtor-com.png"
          alt="'Back to home nav icon"
          width="55px"
          height="55px"
        />
      </Link>
      <h1 style={{ fontSize: "xx-large" }}>Earthquake Zen Garden</h1>
      <Link to="/profile"> Welcome Sally </Link>
    </StyledNav>
  );
};

export default Nav;
