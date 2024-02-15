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
                <ModifiedFlexContainer justifyContent={"space-between"} alignItems={"center"}>
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
    margin-top: 40px; // figma - 41px
    margin-bottom: 220px;
`

const ModifiedFlexContainer = styled(FlexContainer)`
    // padding-right: 11px; // figma - 11px
`

const FlexWrapper = styled.div`
    display: flex;
    gap: 50px; // figma 51px
`