import React, {ReactNode} from 'react';
import styled from "styled-components";
import {Icon, IconPropsType} from "../icon/Icon";

type LinkPropsType = {
    iconSettings?: IconPropsType
    children?: ReactNode
    href: string
}

export function Link({children, iconSettings, href}: LinkPropsType) {
    return (
        <StyledLink href={href}>
            <>
                {iconSettings && <Icon {...iconSettings}></Icon>}
                {children && <span>{children}</span>}
            </>
        </StyledLink>
    );
}

const StyledLink = styled.a`
    
`