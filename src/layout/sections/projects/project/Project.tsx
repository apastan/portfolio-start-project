import React from 'react';
import styled from "styled-components";


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
            <ProjectTitle>{title}</ProjectTitle>
            <Description>{description}</Description>
            <TechStack>Tech stack : {techStack.join(", ")}</TechStack>
            {/* TODO - Create IconLink Component */}
        </StyledProject>
    );
}

const StyledProject = styled.li`
    max-width: 375px;
    min-height: 570px;
`

const ProjectImage = styled.img`
    width: 375px;
`

const ProjectTitle = styled.h3`

`

const TechStack = styled.p`

`

const Description = styled.p`

`