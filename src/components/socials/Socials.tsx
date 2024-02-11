import React from 'react';
import styled from "styled-components";


export function Socials() {
    return (
        <StyledSocials>
            {/*TODO - Add links to socials*/}
            <li><a href="#"></a>Icon 1</li>
            <li><a href="#"></a>Icon 2</li>
            <li><a href="#"></a>Icon 3</li>
        </StyledSocials>
    );
}

const StyledSocials = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
`