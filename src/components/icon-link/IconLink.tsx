import React from 'react';
import styled, {css} from "styled-components";
import {Icon, IconPropsType} from "../icon/Icon";
import {FlexContainer} from "../styled/FlexContainer";

type IconLinkPropsType = {
    iconSettings: IconPropsType
    href: string
    sx?: string
}

export function IconLink({iconSettings, href, sx}: IconLinkPropsType) {

    return (
        <StyledIconLink href={href} sx={sx || ""}>
            <FlexContainer justifyContent={"center"} alignItems={"center"}>
                <Icon {...iconSettings}></Icon>
            </FlexContainer>
        </StyledIconLink>
    );
}

type StyledIconLinkPropsType = {
    sx: string
}

const StyledIconLink = styled.a<StyledIconLinkPropsType>`
    /*    svg + span {
            margin-left: 10px;
        }*/

    ${props => props.sx && css`${props.sx}`};
`