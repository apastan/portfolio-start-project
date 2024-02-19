import {createGlobalStyle} from "styled-components"
import {theme} from "./theme/theme";

// @ts-ignore
export const GlobalStyles = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${theme.fonts.primaryFontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.2;
        background-color: ${({theme}) => {
            // @ts-ignore
            return theme.colors.appBackground;
        }}
`
