import "styled-components";

declare module "styled-components" {
  export interface ITheme {
    textColor_primary: string;
    textColor_secondary: string;
    textColor_tertiary: string;
    bgColor_primary: string;
    bgColor_secondary: string;
    bgColor_tertiary: string;
    borderColor: string;
  }
}
