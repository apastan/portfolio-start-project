const FALLBACK_FONTS = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`;
const PRIMARY_FONT_FAMILY = `\"Poppins\"`;
const SECONDARY_FONT_FAMILY = `\"DM Sans\"`;

export const theme = {
    fonts: {
        primaryFontFamily: `${PRIMARY_FONT_FAMILY}, ${FALLBACK_FONTS}`,
        secondaryFontFamily: `${SECONDARY_FONT_FAMILY}, ${FALLBACK_FONTS}`,
    },
    colors: {
        gradientText: "linear-gradient(90.00deg, #13B0F5, #E70FAA)",
        imageBorderGradient: "linear-gradient(#E70FAA, #13B0F5)"
    },
    media: {
        xs: "@media screen and (max-width: 575px)", // less than 575px
        md: "@media screen and (max-width: 767px)", // less than 767px
        lg: "@media screen and (max-width: 991px)", // less than 991px
        xl: "@media screen and (max-width: 1199px)", // less than 1199px
        xxl: "@media screen and (max-width: 1399px)", // less than 1399px

    }
}