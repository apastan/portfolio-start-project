import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme/theme";


export function Menu() {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link href="/#">Home</Link>
                </li>
                <li>
                    <Link href="/#techstack">Tech Stack</Link>
                </li>
                <li>
                    <Link href="/#projects">Projects</Link>
                </li>
                <li>
                    <Link href="/#contacts">Contact</Link>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 60px; // figma - different values
        list-style-type: none;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.headerMenuText};
    font-family: ${theme.fonts.secondaryFontFamily};
    font-size: 20px;
    font-weight: 500;
    line-height: 26px; // ??
    letter-spacing: 0px;
`