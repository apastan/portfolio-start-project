import React from 'react';
import styled, {useTheme} from "styled-components";
import {Link} from "../link/Link";


export function Socials() {
    const theme = useTheme();

    return (
        <StyledSocials>
            {/*TODO - Add links to socials*/}
            <li>
                <Link href="#" iconSettings={{
                    iconId: "githubHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                    // @ts-ignore
                    fill: theme.colors.socialIconsHeader
                }}></Link>
            </li>
            <li>
                <Link href="#" iconSettings={{
                    iconId: "twitterHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 32 32",
                    // @ts-ignore
                    fill: theme.colors.socialIconsHeader
                }}></Link>
            </li>
            <li>
                <Link href="#" iconSettings={{
                    iconId: "linkedinHeader",
                    width: "30px",
                    height: "30px",
                    viewBox: "0 0 30 30",
                    // @ts-ignore
                    fill: theme.colors.socialIconsHeader
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