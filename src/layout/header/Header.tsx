import React from 'react';
import {FlexContainer} from "../../components/styled/FlexContainer";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

export function Header() {
    return (
        // TODO - Create Styled header
        <FlexContainer as={"header"} justifyContent={"space-between"}>
            <Logo/>

            <FlexContainer>
                <Menu/>

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

