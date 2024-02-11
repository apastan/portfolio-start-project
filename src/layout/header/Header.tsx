import React from 'react';
import {FlexContainer} from "../../components/styled/FlexContainer";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socilas} from "../../components/socials/Socilas";

export function Header() {
    return (
        // TODO - Create Styled header
        <FlexContainer as={"header"} justifyContent={"space-between"}>
            <Logo/>

            <FlexContainer>
                <Menu/>
                <Socilas/>
            </FlexContainer>
        </FlexContainer>
    );
}

