import styled from "styled-components";
import {FlexContainer} from "../../components/styled/FlexContainer";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/styled/Container";
import {theme} from "../../styles/theme/theme";

export function Footer() {
    return (
        <StyledFooter>
            <ModifiedContainer>
                <StyledFlexContainer>
                    <Menu isFooterMenu={true}/>
                    <Copyright>
                        {/*TODO - Add real info*/}
                        Built by <a href="/public">Pavan MG</a> with&nbsp;Love&nbsp;&&nbsp;Coffee
                    </Copyright>
                </StyledFlexContainer>
            </ModifiedContainer>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    a {
        color: ${props => props.theme.colors.textFooter};
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
    }
`

const ModifiedContainer = styled(Container)`
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 2px solid rgb(102, 102, 102, 0.3); /* dark content */
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
`

const StyledFlexContainer = styled(FlexContainer)`
    justify-content: space-between;

    ${theme.media.md} {
        justify-content: center;
    }
`

const Copyright = styled.small`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    color: ${props => props.theme.colors.textCopyright};
    text-align: center;

    a {
        background: ${theme.colors.gradientText};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`