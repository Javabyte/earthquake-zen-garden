import { createGlobalStyle } from "styled-components";

/*
  The web app is not responsive for mobile screen sizes. An improvement would be to add themes for breakpoints and
  have component styles accordingly in styledComponents. I did not set this up due to limited time.
*/
export default createGlobalStyle`
:root{

  /* Colors */ 
  --color-white: #ededed;
  --color-grey: #777777;
  --color-grey-dark: #444444;
  --color-blue:#0011bb;
  --color-purple:#6600cc;

  /* Typography */
  --font-primary:'sans-serif'
}


body{
  background-color: white;
  font-family: sans-serif;
  color: var(--color-grey-dark)
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}`;
