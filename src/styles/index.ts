import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  fontFamily:
    "futura-pt, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;",
  colors: {
    primary: "#183395",
    secondary: "#ddd", //TODO: Find 2nd color
    white: "#fff",
    black: "#101",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
        height: 100vh;
        font-size: '62.5%';
        font-family: ${(props) => props.theme.fontFamily};
        font-weight: 400;
        color: ${(props) => props.theme.colors.black};
        background-color: ${(props) => props.theme.colors.white};
    }
`;
