import styled from "styled-components";
import {FlexContainer} from "../../../components/styled/FlexContainer";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/styled/SectionTitle";
import {SectionSubtitle} from "../../../components/styled/SectionSubtitle";
import {Container} from "../../../components/styled/Container";

export function Technologies() {
    return (
        <StyledTechnologies id="techstack">
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionSubtitle>Technologies I’ve been working with recently</SectionSubtitle>
                <FlexContainer alignItems={"center"} flexWrap={"wrap"}>
                    <Icon iconId={"html"} height={"105"} width={"96"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"css"} height={"104"} width={"93"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"javascript"} height={"94"} width={"94"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"react"} height={"108"} width={"96"} viewBox={"-5 -10 120 120"}/>
                    <Icon iconId={"redux"} height={"105"} width={"96"} viewBox={"-8 -10 120 120"}/>
                    <Icon iconId={"bootstrap"} height={"100"} width={"100"} viewBox={"-15 -15 120 120"}/>
                    <Icon iconId={"tailwind"} height={"80"} width={"80"} viewBox={"0 10 120 120"}/>
                    <Icon iconId={"sass"} height={"100"} width={"100"} viewBox={"0 -15 120 120"}/>
                    <Icon iconId={"git"} height={"100"} width={"100"} viewBox={"-7 -7 120 120"}/>
                    <Icon iconId={"github"} height={"120"} width={"120"} viewBox={"-15 -15 120 120"}/>
                </FlexContainer>
            </Container>
        </StyledTechnologies>
    );
}

const StyledTechnologies = styled.section`
    svg {
        width: 20%;
        display: block;
        margin: auto;
    }

    margin-bottom: 200px;

    ${FlexContainer} {
        row-gap: 100px;
    }
`