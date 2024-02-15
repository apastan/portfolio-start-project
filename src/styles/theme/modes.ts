type AppTheme = {
    colors: {
        appBackground: string,
        // primaryText: string,
        socialIconsHeader: string,
        h1: string,
        h2: string,
        h3: string,
        projectHeading: string,
        projectDescription: string,
        projectStack: string,
        projectLinks: string,
        // logoHeader: string,
        logoFooter: string,
        textFooter: string,
        textCopyright: string,
    }
}

export const lightTheme: AppTheme = {
    colors: {
        appBackground: "#FFFFFF",
        // primaryText: "#666666",
        socialIconsHeader: "#666666",
        h1: "#42446E",
        h2: "#42446E",
        h3: "#42446E",
        // logoHeader: "linear-gradient(82.16deg, rgb(19, 176, 245) -534.729%,rgb(202, 36, 180) 113.407%)",
        projectHeading: "#000000",
        projectDescription: "#666666",
        projectStack: "#42446E",
        projectLinks: "#000000",
        logoFooter: "#42446E",
        textFooter: "#42446E",
        textCopyright: "#666666",
    }
}

export const darkTheme: AppTheme = {
    colors: {
        appBackground: "#191919",
        // primaryText: "",
        socialIconsHeader: "#A7A7A7",
        h1: "#D9D9D9",
        h2: "#CCCCCC",
        h3: "#A7A7A7",
        // logoHeader: "",
        projectHeading: "#CCCCCC",
        projectDescription: "#CCCCCC",
        projectStack: "#CCCCCC",
        projectLinks: "#FFFFFF",
        logoFooter: "#A7A7A7",
        textFooter: "#A7A7A7",
        textCopyright: "#A7A7A7",
    }
}