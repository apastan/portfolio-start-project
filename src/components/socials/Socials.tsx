import React from 'react';
import styled from "styled-components";
import {Link} from "../link/Link";


export function Socials() {
    return (
        <StyledSocials>
            {/*TODO - Add links to socials*/}
            <li>
                <Link href="#">Icon 1</Link>
            </li>
            <li>
                <Link href="#">Icon 2</Link>
            </li>
            <li>
                <Link href="#">Icon 3</Link>
            </li>
        </StyledSocials>
    );
}

const StyledSocials = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
`