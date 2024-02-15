const FALLBACK_FONTS = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`;
const PRIMARY_FONT_FAMILY = `\"DM Sans\"`;
const SECONDARY_FONT_FAMILY = `\"Poppins\"`;

export const theme = {
    fonts: {
        primaryFontFamily: `${PRIMARY_FONT_FAMILY}, ${FALLBACK_FONTS}`,
        secondaryFontFamily: `${SECONDARY_FONT_FAMILY}, ${FALLBACK_FONTS}`,
    },
    colors: {
        gradientText: "linear-gradient(#13B0F5, #E70FAA)"
        // gradientText: "linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170))",
    }
}