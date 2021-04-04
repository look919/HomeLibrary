import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";
import BackgroundImage from "src/images/background.jpg";

export const Theme: DefaultTheme = {
  fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
  colors: {
    primary: "#183395",
    secondary: "#303F9F",
    white: "#def",
    black: "#101",
  },
};

export const device = {
  laptopL: "(min-width: 90em)",
  laptop: "(min-width: 80em)",
  tabletL: "(min-width: 64em)",
  tablet: "(min-width: 50em)",
  mobileL: "(min-width: 30em)",
  mobile: "(min-width: 25em)",
  mobileS: "(min-width: 21.25em)",
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
        margin: 0;
        font-size: 62.5%;
        font-family: ${(props) => props.theme.fontFamily};
        font-weight: 400;
        color: ${(props) => props.theme.colors.black};
        background-image: linear-gradient(to right bottom, rgba(221, 238, 255, 0.8), rgba(126, 146, 166, 0.8)), url(${BackgroundImage});
        width: 100%;
        overflow-x:hidden;
        min-height: 100vh;
    }

    #root {
      display: flex;
        flex-direction: column;
        align-items: center;
    }

    th, td {
      padding: 16px 4px !important;

      @media ${device.mobile} {
        padding: 16px 6px !important;
      }
    }

  h1,h2,h3 {
    margin: 0;
  }
  h1 {
    font-size: 2em;

    @media ${device.tablet} {
        font-size: 3em;
      }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  #mui-64487 {
    display: none;

      @media ${device.mobile} {
        display: initial;
      }
  }


`;
