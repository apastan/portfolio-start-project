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
import {Container} from "../../../components/styled/Container";
import {SectionSubtitle} from "../../../components/styled/SectionSubtitle";


const ProjectsMockData = [
    {
        imgSrc: project1Img,
        altText: "Alt Text",
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    },
    {
        imgSrc: project2Img,
        altText: "Alt Text",
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    },
    {
        imgSrc: project3Img,
        altText: "Alt Text",
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }, {
        imgSrc: project4Img,
        altText: "Alt Text",
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }, {
        imgSrc: project5Img,
        altText: "Alt Text",
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }, {
        imgSrc: project6Img,
        altText: "Alt Text",
        title: "Project Title goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: ["HTML", "JavaScript", "SASS", "React"],
        linkToProject: "#",
        linkToGithub: "#"
    }
]

export function Projects() {
    return (
        <StyledProjects id="projects">
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionSubtitle>Things I’ve built so far</SectionSubtitle>
                <UlFlexContainer as={"ul"}
                                 flexWrap={"wrap"}
                                 justifyContent={"space-around"}
                                 sx="row-gap:60px;column-gap:20px;">
                    {
                        ProjectsMockData.map((project, index) => <Project projectData={project} key={index}/>)
                    }
                </UlFlexContainer>
            </Container>
        </StyledProjects>
    );
}

const StyledProjects = styled.section`
    margin-bottom: 200px;
`

const UlFlexContainer = styled(FlexContainer)<FlexContainerPropsType>`
    li {
        list-style-type: none;
    }
`