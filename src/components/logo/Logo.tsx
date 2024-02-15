import React from 'react';
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

export function Logo() {
    return (
        <StyledLogo href="#">
            {/* TODO - insert real logo */}
            <img src={logo} alt="Logo" width="97px" height="59px"/>
        </StyledLogo>
    );
}

const StyledLogo = styled.a`
    height: 59px; //figma - 59px
`