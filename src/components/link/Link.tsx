import React, {ReactNode} from 'react';
import styled from "styled-components";
import {Icon, IconPropsType} from "../icon/Icon";
import {FlexContainer} from "../styled/FlexContainer";

type LinkPropsType = {
    iconSettings?: IconPropsType
    children?: ReactNode
    href: string
}

export function Link({children, iconSettings, href}: LinkPropsType) {
    return (
        <StyledLink href={href}>
            <FlexContainer justifyContent={"center"} alignItems={"center"}>
                {iconSettings && <Icon {...iconSettings}></Icon>}
                {children && <span>{children}</span>}
            </FlexContainer>
        </StyledLink>
    );
}

const StyledLink = styled.a`
    svg + span {
        margin-left: 10px;
    }
`