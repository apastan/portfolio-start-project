import React from 'react';
import styled, {css} from "styled-components";
import {Icon, IconPropsType} from "../../icon/Icon";
import {FlexContainer} from "../../styled/FlexContainer";

type IconLinkPropsType = {
    iconSettings: IconPropsType
    href: string
    sx?: string
    ariaAttrs?: { [index: string]: string }
}

export function IconLink({iconSettings, href, sx, ariaAttrs}: IconLinkPropsType) {

    return (
        <StyledIconLink href={href} as={"a"} sx={sx || ""} {...ariaAttrs}>
            <Icon {...iconSettings}></Icon>
        </StyledIconLink>
    );
}

type StyledIconLinkPropsType = {
    sx: string
}

const StyledIconLink = styled(FlexContainer)<StyledIconLinkPropsType>`
    border-radius: 999px;
    padding: 7px;
    background-color: transparent;

    &:hover {
        transition: 0.3s;
        background-color: ${props => props.theme.colors.menuIconLinkHover};
    }

    ${props => props.sx && css`${props.sx}`};
`