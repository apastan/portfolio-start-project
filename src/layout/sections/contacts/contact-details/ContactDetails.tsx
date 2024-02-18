import React from 'react';
import styled from "styled-components";
import {FlexContainer} from "../../../../components/styled/FlexContainer";
import {Logo} from "../../../../components/logo/Logo";
import {Socials} from "../../../../components/socials/Socials";

export function ContactDetails() {
    return (
        <StyledContactDetails>
            <FlexContainer justifyContent={"space-between"}>
                {/*TODO - Style logo*/}
                <Logo/>
                <FlexContainer alignItems="center">
                    <Phone href="tel:+91 12345 09876">+91 12345 09876</Phone>
                    <Email href="email:info@example.com">info@example.com</Email>
                    <Socials/>
                </FlexContainer>
            </FlexContainer>
        </StyledContactDetails>
    );
}

const Phone = styled.a`

`

const Email = styled.a`

`

const StyledContactDetails = styled.div`
    margin-top: 200px;

    a + a, a + ul {
        margin-left: 60px;
    }

    ${Phone}, ${Email} {
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        color: ${props => props.theme.colors.textFooter};

        text-decoration: none;
    }

    svg {
        fill: ${props => props.theme.colors.textFooter};
    }
`


const StyledSocials = styled(Socials)`
    margin-left: 100px;
`