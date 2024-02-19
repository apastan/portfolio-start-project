import React from 'react';
import styled from "styled-components";
import {IconLink} from "../icon-link/IconLink";


export function Socials() {
    return (
        <StyledSocials>
            {/*TODO - Add links to socials*/}
            <li>
                <IconLink href="#" iconSettings={{
                    iconId: "githubHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                }}></IconLink>
            </li>
            <li>
                <IconLink href="#" iconSettings={{
                    iconId: "twitterHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 32 32",
                }}></IconLink>
            </li>
            <li>
                <IconLink href="#" iconSettings={{
                    iconId: "linkedinHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                }}></IconLink>
            </li>
        </StyledSocials>
    );
}

const StyledSocials = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
`