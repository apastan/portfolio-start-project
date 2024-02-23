import React from 'react';
import styled from "styled-components";
import {IconLink} from "../links/icon-link/IconLink";


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
                }} ariaAttrs={{"aria-label": "Link to GitHub"}}></IconLink>
            </li>
            <li>
                <IconLink href="#" iconSettings={{
                    iconId: "twitterHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "2 2 30 30",
                }} ariaAttrs={{"aria-label": "Link to Twitter"}}></IconLink>
            </li>
            <li>
                <IconLink href="#" iconSettings={{
                    iconId: "linkedinHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                }} ariaAttrs={{"aria-label": "Link to LinkedIn"}}></IconLink>
            </li>
        </StyledSocials>
    );
}

const StyledSocials = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
`