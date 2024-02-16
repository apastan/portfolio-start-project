import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/avatar.jpg"
import {FlexContainer} from "../../../components/styled/FlexContainer";
import {theme} from "../../../styles/theme/theme";

export function Main() {
    return (
        <StyledMain justifyContent={"space-between"} alignItems={"center"} as={"section"}>
            <Title>
                {/*  <br> is normal?  */}
                <Introduce>
                    Hi 👋,<br/>
                    My name is<br/>
                    {/* TODO - Update name*/}
                    <Name> Pavan MG</Name>
                </Introduce>
                <Slogan as={"span"}>I build things for web</Slogan>
            </Title>
            {/*TODO - Add abstraction pseudo element*/}
            {/*TODO - Add alternative text*/}
            {/*TODO - Change photo*/}
            <Photo src={photo} alt="" width="349px" height="349px"/>
        </StyledMain>
    );
}

const StyledMain = styled(FlexContainer)`
    border: 1px solid red;
    min-height: 90vh;
`

const Title = styled.div`

`

const Introduce = styled.h1`
    color: ${props => props.theme.colors.h1};
    font-family: ${theme.fonts.secondaryFontFamily};
    font-size: 58px;
    font-weight: 700;
    //font-size: inherit;
    //font-weight: inherit;
    line-height: 70px;
    letter-spacing: -1px;
    text-align: left;
`

const Slogan = styled(Introduce)`

`

const Name = styled.span`
    background: ${theme.colors.gradientText};
    //background: linear-gradient(90.00deg, #13B0F5, #E70FAA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`

const Photo = styled.img`
    width: 340px;
    height: 340px;
    //border: 9px solid;
    background: ${theme.colors.imageBorderGradient};
    padding: 9px;

    border-radius: 230px;
`

