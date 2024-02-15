import React from 'react';
import styled from "styled-components";


export function Menu() {
    return (
        <StyledNav>
            <ul>
                {/*TODO - Add link to id attribute*/}
                <li>
                    <a href="/#">Home</a>
                </li>
                {/*                <li>
                    <a href="#">About</a>
                </li>*/}
                <li>
                    <a href="/#techstack">Tech Stack</a>
                </li>
                <li>
                    <a href="/#projects">Projects</a>
                </li>
                <li>
                    <a href="/#contacts">Contact</a>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    ul {
        display: flex;
        gap: 60px; // На мекете дичь
        list-style-type: none;
    }
`