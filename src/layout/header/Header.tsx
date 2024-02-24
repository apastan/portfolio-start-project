import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";
import styled from "styled-components";
import {Container} from "../../components/styled/Container";
import {FlexContainer} from "../../components/styled/FlexContainer";
import {ThemeSwitcher} from "./theme-switcher/themeSwitcher";

type HeaderPropsType = {
    toggleMode: () => void
}

export function Header(props: HeaderPropsType) {
    return (
        <StyledHeader>
            <Container>
                <ModifiedFlexContainer justifyContent={"space-between"} alignItems={"center"}>
                    <Logo/>
                    <FlexWrapper>
                        <Menu/>
                        <Socials/>
                        <ThemeSwitcher toggleMode={props.toggleMode}/>
                    </FlexWrapper>
                </ModifiedFlexContainer>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    svg {
        fill: ${props => props.theme.colors.socialIconsHeader};
    }
`

const ModifiedFlexContainer = styled(FlexContainer)`
    // padding-right: 11px; // figma - 11px
`

const FlexWrapper = styled.div`
    display: flex;
    gap: 50px; // figma 51px
    align-items: center;
`