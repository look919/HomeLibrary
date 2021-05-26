import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    colors: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      bgcPrimary: string;
      fontColorPrimary: string;
    };
  }
}
