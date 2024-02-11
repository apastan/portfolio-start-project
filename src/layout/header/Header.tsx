import React from 'react';
import {FlexContainer} from "../../components/styled/FlexContainer";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socilas} from "../../components/socials/Socilas";
import styled from "styled-components";

export function Header() {
    return (
        // TODO - Create Styled header
        <StyledHeader>
            <Logo/>

            <FlexWrapper>
                <Menu/>
                <Socilas/>
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