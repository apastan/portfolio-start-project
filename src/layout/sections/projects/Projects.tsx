import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/styled/FlexContainer";
import {SectionTitle} from "../../../components/styled/SectionTitle";


export function Projects() {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Description>Things I’ve built so far</Description>
            <StyledFlexContainer as={"ul"}>
                {/*  TODO - Create Project component  */}
            </StyledFlexContainer>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`

`

const Description = styled.p`

`

const StyledFlexContainer = styled(FlexContainer)`
    li {
        list-style-type: none;
    }
`