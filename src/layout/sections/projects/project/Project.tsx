import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/link/Link";
import {FlexContainer} from "../../../../components/styled/FlexContainer";


type ProjectPropsType = {
    projectData: {
        imgSrc: string
        altText: string
        title: string
        description: string
        techStack: Array<string>
        linkToProject: string
        linkToGithub: string
    }
}

export function Project(props: ProjectPropsType) {

    const {imgSrc, altText, title, description, techStack, linkToProject, linkToGithub} = props.projectData

    return (
        <StyledProject>
            <ProjectImage src={imgSrc} alt={altText}/>
            <ProjectDescription>
                <ProjectTitle>{title}</ProjectTitle>
                <Description>{description}</Description>
                <TechStack>Tech stack : {techStack.join(", ")}</TechStack>
                {/* TODO - Create IconLink Component */}
                <FlexContainer sx="column-gap: 50px;">
                    <Link
                        iconSettings={{
                            iconId: "linkToProjectBlack",
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 20 20",
                            fill: "none"
                        }}
                        href={linkToProject}>
                        Live Preview
                    </Link>
                    <Link iconSettings={{
                        iconId: "linkToGitHubProjectPageBlack",
                        width: "20px",
                        height: "20px",
                        viewBox: "0 0 20 20",
                        fill: "none"
                    }}
                          href={linkToGithub}>
                        View Code
                    </Link>
                </FlexContainer>
            </ProjectDescription>
        </StyledProject>
    )
        ;
}

const StyledProject = styled.li`
    width: 375px;
    min-height: 570px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
    background: rgb(255, 255, 255);
`

const ProjectImage = styled.img`
    width: 375px;
    display: block;
`

const ProjectDescription = styled.div`
    padding: 25px 30px;
`

const ProjectTitle = styled.h3`
    font-size: 28px;
    font-weight: 500;
    color: ${props => props.theme.colors.projectHeading};
    margin-bottom: 17px;
`

const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: ${props => props.theme.colors.projectDescription};
    margin-bottom: 12px;
`

const TechStack = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.color.projectStack};
`
