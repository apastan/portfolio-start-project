import styled from "styled-components";
import photo from "../../../assets/images/avatar.jpg"
import {FlexContainer} from "../../../components/styled/FlexContainer";
import {theme} from "../../../styles/theme/theme";
import {Container} from "../../../components/styled/Container";
import abstract from "../../../assets/images/abstract.svg";

export function Main() {
    return (
        <StyledMain>
            <Container>
                <StyledFlexContainer sx="height: 100%">
                    <Title>
                        <Introduce>
                            Hi <span className="hiAnimation">👋</span>,<br/>
                            My name is<br/>
                            {/* TODO - Update name*/}
                            <Name> Pavan MG</Name>
                        </Introduce>
                        <Slogan as={"span"}>I build things for web</Slogan>
                    </Title>
                    {/*TODO - Add abstraction pseudo element*/}
                    {/*TODO - Add alternative text*/}
                    {/*TODO - Change photo*/}
                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </StyledFlexContainer>
            </Container>
        </StyledMain>
    );
}

const StyledFlexContainer = styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 992px) {
        flex-direction: column;
        justify-content: space-around;
    }
`

const StyledMain = styled.section`
    min-height: 90vh;
    display: flex;
`

const Title = styled.div`

`

const Introduce = styled.h1`
    color: ${props => props.theme.colors.h1};
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -1px;

    ${theme.media.lg} {
        text-align: center;
    }

    ${theme.media.md} {
        font-size: 50px;
    }

    ${theme.media.xs} {
        font-size: calc((100vw - 360px) / (575 - 360) * (50 - 30) + 30px);
    }

    span.hiAnimation {
        display: inline-block;
        animation: hello 3s infinite;
    }

    @keyframes hello {
        50% {
            transform: rotate(90deg);
        }
    }
`

const Slogan = styled(Introduce)`

`

const Name = styled.span`
    background: ${theme.colors.gradientText};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

/*
const Photo = styled.img`
    width: 358px; // 340 + 9 + 9
    height: 358px; // 340 + 9 + 9
    background: ${theme.colors.imageBorderGradient};
    padding: 9px;
    border-radius: 230px;
`
*/

/*
const Photo = styled.img`
    border-radius: 230px;
    display: block; // or display: flex;
`

const PhotoWrapper = styled.div`
    background: ${theme.colors.imageBorderGradient};
    padding: 9px;
    border-radius: 230px;
`
*/

const PhotoWrapper = styled.div`
    position: relative;

    background-clip: padding-box;
    border: solid 9px transparent;
    border-radius: 230px;

    &::before {
        content: '';
        display: block;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;

        margin: -9px;
        border-radius: inherit;
        background: ${theme.colors.imageBorderGradient};
    }

    &::after {
        position: absolute;
        top: -30%;
        left: -30%;
        //transform: translate(10%, 10%);

        background-image: url(${abstract});
        background-size: contain;
        background-repeat: no-repeat;
        content: "";
        display: block;
        width: 540px;
        height: 540px;
    }

    ${theme.media.xxl} {
        &::after {
            display: none;
        }
    }
`

const Photo = styled.img`
    border-radius: 230px;
    display: block; // or display: flex;

    @media screen and (max-width: 576px) {
        width: 100%;
        height: auto;
    }
`