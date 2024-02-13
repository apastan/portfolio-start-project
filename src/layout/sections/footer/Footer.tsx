import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../components/styled/FlexContainer";
import {Menu} from "../../../components/menu/Menu";

export function Footer() {
    return (
        <StyledFooter>
            <FlexContainer justifyContent={"space-between"}>
                <Menu/>
                <Copyright>
                    {/*TODO - Add real info*/}
                    Built by <a href="/">Pavan MG</a> with Love & Coffee
                </Copyright>
            </FlexContainer>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 2px solid rgb(102, 102, 102, 0.3); /* dark content */
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
`

const Copyright = styled.small`

`