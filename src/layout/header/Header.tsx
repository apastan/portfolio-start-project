import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";
import styled from "styled-components";

export function Header() {
    return (
        // TODO - Create Styled header
        <StyledHeader>
            <Logo/>

            <FlexWrapper>
                <Menu/>
                <Socials/>
            </FlexWrapper>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-right: 11px;
`

const FlexWrapper = styled.div`
    display: flex;
    gap: 51px; 
`