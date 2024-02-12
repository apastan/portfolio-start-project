import React from 'react';
import styled from "styled-components";
import {FlexContainer, FlexContainerPropsType} from "../../../components/styled/FlexContainer";
import {SectionTitle} from "../../../components/styled/SectionTitle";
import project1Img from "../../../assets/images/projects/project-1.png"
import project2Img from "../../../assets/images/projects/project-2.png"
import project3Img from "../../../assets/images/projects/project-3.png"
import project4Img from "../../../assets/images/projects/project-4.png"
import project5Img from "../../../assets/images/projects/project-5.png"
import project6Img from "../../../assets/images/projects/project-6.png"
import {Project} from "./project/Project";


const ProjectsMockData = [
    {
        imgSrc: project1Img,
        altText: "Alt Text",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    },
    {
        imgSrc: project2Img,
        altText: "Alt Text",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    },
    {
        imgSrc: project3Img,
        altText: "Alt Text",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }, {
        imgSrc: project4Img,
        altText: "Alt Text",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }, {
        imgSrc: project5Img,
        altText: "Alt Text",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }, {
        imgSrc: project6Img,
        altText: "Alt Text",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }
]

export function Projects() {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Description>Things I’ve built so far</Description>
            <UlFlexContainer as={"ul"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {
                    ProjectsMockData.map((project) => <Project projectData={project}/>)
                }
            </UlFlexContainer>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`

`

const Description = styled.p`

`

const UlFlexContainer = styled(FlexContainer)<FlexContainerPropsType>`
    li {
        list-style-type: none;
    }
`