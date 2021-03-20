import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
  colors: {
    primary: "#183395",
    secondary: "#303F9F",
    white: "#fff",
    black: "#101",
  },
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  body {
        box-sizing: border-box;
        height: 100vh;
        margin: 0;
        font-size: 62.5%;
        font-family: ${(props) => props.theme.fontFamily};
        font-weight: 400;
        color: ${(props) => props.theme.colors.black};
        background-color: ${(props) => props.theme.colors.white};
    }

  h1,h2,h3 {
    margin: 0;
  }
  h1 {
    font-size: 2em;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


`;
