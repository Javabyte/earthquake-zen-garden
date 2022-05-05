import React from "react";
import Nav from "../components/Nav/Nav.jsx";

/*
  Option to add in a h2 or 'Heading' component, but I could not think about adding a global state for the title of the pages.
  I have added a H2 tag to each page instead.
*/

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
