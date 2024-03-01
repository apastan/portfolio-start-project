import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";
import styled from "styled-components";
import {Container} from "../../components/styled/Container";
import {FlexContainer} from "../../components/styled/FlexContainer";
import {ThemeSwitcher} from "./theme-switcher/themeSwitcher";
import {theme} from "../../styles/theme/theme";

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
                        <Menu isFooterMenu={false}/>
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

`

const FlexWrapper = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: end;
    padding: 10px 0;

    width: 100%;

    ${theme.media.xs} {
        gap: 20px;
    }
`