import React from 'react';
import styled from "styled-components";
import {Link} from "../link/Link";


export function Socials() {
    return (
        <StyledSocials>
            {/*TODO - Add links to socials*/}
            <li>
                <Link href="#" iconSettings={{
                    iconId: "githubHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                }}></Link>
            </li>
            <li>
                <Link href="#" iconSettings={{
                    iconId: "twitterHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 32 32",
                }}></Link>
            </li>
            <li>
                <Link href="#" iconSettings={{
                    iconId: "linkedinHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                }}></Link>
            </li>
        </StyledSocials>
    );
}

const StyledSocials = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
`