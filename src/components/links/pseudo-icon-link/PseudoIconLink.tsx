import React, {ReactNode} from 'react';
import styled from "styled-components";

type PseudoIconLinkPropsType = {
    children?: ReactNode
    href: string
    iconUrl: string
    sx?: string
}

export function PseudoIconLink({children, href, iconUrl, sx}: PseudoIconLinkPropsType) {
    return (
        <StyledPseudoIconLink href={href} sx={sx || ""} iconUrl={iconUrl}>
            <span>{children}</span>
        </StyledPseudoIconLink>
    );
}

type StyledPseudoIconLinkPropsType = {
    iconUrl: string;
    sx?: string
}

const StyledPseudoIconLink = styled.a<StyledPseudoIconLinkPropsType>`

    &::before {
        content: "";
        display: inline-block;
        height: 20px;
        width: 20px;
        margin-right: 10px;


        background-image: url("${props => props.iconUrl}");
        background-repeat: no-repeat;

        position: relative;
        top: 4px;
    }
`