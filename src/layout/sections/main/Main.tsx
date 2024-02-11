import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/50353683 1 (1).png"
import {FlexContainer} from "../../../components/styled/FlexContainer";

export function Main() {
    return (
        <StyledMain>
            <FlexContainer justifyContent={"space-between"} alignItems={"center"}>
                <div>
                    <h1>
                        Hi 👋,
                        My name is
                        {/* TODO - Update name*/}
                        <span>Pavan MG</span>
                    </h1>
                    <span>I build things for web</span>
                </div>
                {/*TODO - Add abstraction pseudo element*/}
                <div>
                    {/*TODO - Add alternative text*/}
                    {/*TODO - Change photo*/}
                    <Photo src={photo} alt=""/>
                </div>
            </FlexContainer>
        </StyledMain>
    );
}

const StyledMain = styled.section`
`

const Photo = styled.img`
    width: 349px;
    height: 349px;
    border: 9px solid 230px;
`