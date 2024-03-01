import styled from "styled-components";
import {FlexContainer} from "../../../../components/styled/FlexContainer";
import {Logo} from "../../../../components/logo/Logo";
import {Socials} from "../../../../components/socials/Socials";
import {theme} from "../../../../styles/theme/theme";

export function ContactDetails() {
    return (
        <StyledContactDetails>
            <StyledFlexContainer>
                {/*TODO - Style logo*/}
                <Logo/>
                <ContactsFlexContainer>
                    <Phone href="tel:+91 12345 09876">+91 12345 09876</Phone>
                    <Email href="email:info@example.com">info@example.com</Email>
                    <Socials/>
                </ContactsFlexContainer>
            </StyledFlexContainer>
        </StyledContactDetails>
    );
}

const Phone = styled.a`

`

const Email = styled.a`

`

const StyledContactDetails = styled.div`
    margin-top: 200px;

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

const StyledFlexContainer = styled(FlexContainer)`
    justify-content: space-between;

    ${theme.media.xl} {
        justify-content: center;
    }
`

const ContactsFlexContainer = styled(FlexContainer)`
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    & {
        gap: 80px;
    }

    ${theme.media.md} {
        flex-direction: column;
        gap: 20px;
    }
`