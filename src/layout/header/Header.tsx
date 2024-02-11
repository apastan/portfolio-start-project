import React from 'react';
import {FlexContainer} from "../../components/styled/FlexContainer";
import {Logo} from "../../components/logo/Logo";

export function Header() {
    return (
        // TODO - Create Styled header
        <FlexContainer as={"header"} justifyContent={"space-between"}>
            {/*TODO Create Logo component*/}
            <Logo/>

            {/*TODO - Flex container*/}
            <FlexContainer>
                {/*TODO - Add FlexContainer styled component*/}
                {/*TODO - Create HeaderNavigation component*/}
                <nav>
                    <FlexContainer as={"ul"}>
                        {/*TODO - Add link to id attribute*/}
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Tech Stack</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </FlexContainer>
                </nav>

                {/*TODO - Add FlexContainer styled component*/}
                {/*TODO - Create Socials component*/}
                <FlexContainer as={"ul"}>
                    {/*TODO - Add links to socials*/}
                    <li><a href="#"></a>Icon 1</li>
                    <li><a href="#"></a>Icon 2</li>
                    <li><a href="#"></a>Icon 3</li>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    );
}

