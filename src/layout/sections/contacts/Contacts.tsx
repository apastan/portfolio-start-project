import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/styled/SectionTitle";
import {ContactDetails} from "./contact-details/ContactDetails";

export function Contacts() {
    return (
        <StyledContacts id="contacts">
            <SectionTitle>For any questions please mail me:</SectionTitle>
            <Email>hi@pavanmg.in</Email>
            <ContactDetails/>
        </StyledContacts>
    );
}

const StyledContacts = styled.section`
    text-align: center;
`

const Email = styled.span`
    background: linear-gradient(90.00deg, rgb(19, 176, 245), rgb(231, 15, 170));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`