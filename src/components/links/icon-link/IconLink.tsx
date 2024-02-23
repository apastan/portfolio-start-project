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
        <StyledIconLink href={href} sx={sx || ""} {...ariaAttrs}>
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
    border-radius: 100px;

    &:hover svg {
        border-radius: 50px;
        animation: pulse 2s infinite;
        @keyframes pulse {
            0% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
            }

            70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
            }

            100% {
                transform: scale(0.95);
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
        }
    }

    ${props => props.sx && css`${props.sx}`};
`