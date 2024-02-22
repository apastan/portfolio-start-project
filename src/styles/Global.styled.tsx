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
        }};
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
`
