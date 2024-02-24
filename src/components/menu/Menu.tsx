import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme/theme";


type MenuPropsType = {
    isFooterMenu: boolean;
}

export function Menu({isFooterMenu}: MenuPropsType) {
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
                {!isFooterMenu && (
                    <li>
                        <Link href="/#contacts">Contact</Link>
                    </li>
                )}
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    ${theme.media.xl} {
        flex-grow: 1;
    }

    ul {
        display: flex;
        gap: 60px; // figma - different values
        list-style-type: none;
    }

    ${theme.media.lg} {
        ul {
            gap: 15px;
        }
    }

    ${theme.media.md} {
        display: none;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.headerMenuText};
    font-family: ${theme.fonts.secondaryFontFamily};
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    padding: 6px 12px;
    border-radius: 999px;

    &:hover {
        transition: 0.3s;
        background-color: ${props => props.theme.colors.menuLinkHover};
    }

    ${theme.media.lg} {
        font-size: calc((100vw - 768px) / (991 - 768) * (20 - 16) + 16px);
    }
`