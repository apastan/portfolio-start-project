import React from 'react';
import styled, {useTheme} from "styled-components";
import {FlexContainer} from "../../../../components/styled/FlexContainer";
import {PseudoIconLink} from "../../../../components/links/pseudo-icon-link/PseudoIconLink";


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

    const theme = useTheme();

    return (
        <StyledProject>
            <ProjectImage src={imgSrc} alt={altText}/>
            <ProjectDescription>
                <ProjectTitle>{title}</ProjectTitle>
                <Description>{description}</Description>
                <TechStack>
                    <span>Tech stack:</span> {techStack.join(", ")}
                </TechStack>
                {/* TODO - Create IconLink Component */}
                <FlexContainer sx="column-gap: 50px;">
                    <PseudoIconLink
                        href={linkToProject}
                        // @ts-ignore
                        //sx={`font-size: 16px;font-weight: 400;line-height: 26px;color: ${theme.colors.projectLinks}`}

                        // @ts-ignore
                        // iconId={theme === "light" ? "projectLinkLightTheme" : "projectLinkDarkTheme"}
                        iconUrl={theme.colors.projectLinkIcon}
                    >
                        Live Preview
                    </PseudoIconLink>
                    <PseudoIconLink
                        href={linkToGithub}

                        // @ts-ignore
                        // iconId={theme === "light" ? "gitHubProjectLinkLightTheme" : "gitHubProjectLinkDarkTheme"}
                        iconUrl={theme.colors.projectLinkGitHubIcon}
                    >
                        View Code
                    </PseudoIconLink>
                </FlexContainer>
            </ProjectDescription>
        </StyledProject>
    );
}

const StyledProject = styled.li`
    background-color: ${props => props.theme.colors.projectBackground};
    width: 375px;
    min-height: 570px;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
`

const ProjectImage = styled.img`
    width: 375px;
    display: block;
`

const ProjectDescription = styled.div`
    padding: 25px 30px;

    a {
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        color: ${props => props.theme.colors.projectLinks}
    }
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
    line-height: 26px;
    color: ${props => props.theme.colors.projectDescription};
    margin-bottom: 12px;
`

const TechStack = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.theme.colors.projectStack};
    margin-bottom: 21px;

    span {
        font-weight: 400;
    }
`