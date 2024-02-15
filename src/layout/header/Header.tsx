import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";
import styled from "styled-components";
import {Container} from "../../components/styled/Container";
import {FlexContainer} from "../../components/styled/FlexContainer";

export function Header() {
    return (
        <StyledHeader>
            <Container>
                <ModifiedFlexContainer justifyContent={"space-between"}>
                    <Logo/>
                    <FlexWrapper>
                        <Menu/>
                        <Socials/>
                    </FlexWrapper>
                </ModifiedFlexContainer>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`

`

const ModifiedFlexContainer = styled(FlexContainer)`
    // padding-right: 11px;
`

const FlexWrapper = styled.div`
    display: flex;
    gap: 51px;
`