import { StyledNav } from "./Nav.styled.jsx";
import React from "react";
import Image from "../Image/Image.jsx";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <Image
          src="https://www.realtor.com/realtor-com.png"
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
