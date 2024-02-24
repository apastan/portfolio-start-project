import React from 'react';
import styled from "styled-components";
import {ContactDetails} from "./contact-details/ContactDetails";
import {Container} from "../../../components/styled/Container";
import {theme} from "../../../styles/theme/theme";

export function Contacts() {
    return (
        <StyledContacts id="contacts">
            <Container>
                <Title>For any questions please&nbsp;mail&nbsp;me:</Title>
                <Email>hi@pavanmg.in</Email>
                <ContactDetails/>
            </Container>
        </StyledContacts>
    );
}

const StyledContacts = styled.section`
    text-align: center;
`

const Email = styled.span`
    font-family: ${theme.fonts.secondaryFontFamily};
    font-size: 58px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: 3px; // -1px - is not similar

    background: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    ${theme.media.lg} {
        font-size: calc((100vw - 360px) / (991 - 360) * (58 - 32) + 32px);
    }
`

const Title = styled.h2`
    color: ${props => props.theme.colors.contactMeHeading};
    font-family: ${theme.fonts.secondaryFontFamily};
    font-size: 58px;
    font-weight: 700;
    letter-spacing: 3px; // -1px - is not similar

    ${theme.media.lg} {
        font-size: calc((100vw - 360px) / (991 - 360) * (58 - 32) + 32px);
    }
`