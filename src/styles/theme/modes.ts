export type AppTheme = {
    mode: "dark" | "light"
    globalFocusColor: string
    aria: { ariaLabelThemeSwitcher: string }

    colors: {
        appBackground: string
        headerMenuText: string
        menuLinkHover: string
        menuIconLinkHover: string
        socialIconsHeader: string
        h1: string
        h2: string
        h3: string
        projectBackground: string
        projectHeading: string
        projectDescription: string
        projectStack: string
        projectLinks: string
        projectLinkGitHubIcon: string
        projectLinkIcon: string
        contactMeHeading: string
        logoFooter: string
        textFooter: string
        textCopyright: string
        gitHubLogo: string
    }
}

export const INITIAL_THEME_MODE: "light" | "dark" = "light";

export const lightTheme: AppTheme = {
    mode: "light",
    globalFocusColor: "rgba(25, 25, 25, 0.8)",
    aria: {ariaLabelThemeSwitcher: "Use Dark Mode"},
    colors: {
        appBackground: "#FFFFFF",
        headerMenuText: "#666666",
        menuLinkHover: "rgba(35, 39, 47, .05)",
        menuIconLinkHover: "rgba(35, 39, 47, .07)",
        socialIconsHeader: "#666666",
        h1: "#42446E",
        h2: "#42446E",
        h3: "#42446E",
        projectBackground: "#ffffff",
        projectHeading: "#000000",
        projectDescription: "#666666",
        projectStack: "#42446E",
        projectLinks: "#000000",
        projectLinkGitHubIcon: "data:image/svg+xml, %3Csvg width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4537_884)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4537_884'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
        projectLinkIcon: "data:image/svg+xml, %3Csvg width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2867 8.7133C10.6041 8.031 9.67846 7.64771 8.71334 7.64771C7.74821 7.64771 6.82259 8.031 6.14 8.7133L3.56584 11.2866C2.88324 11.9692 2.49976 12.895 2.49976 13.8604C2.49976 14.8257 2.88324 15.7515 3.56584 16.4341C4.24844 17.1167 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1167 8.71334 16.4341L10 15.1475' stroke='%23000000' fill='transparent' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525' stroke='%23000000' fill='transparent' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
        contactMeHeading: "#1E0E62",
        logoFooter: "#42446E",
        textFooter: "#42446E",
        textCopyright: "#666666",
        gitHubLogo: "#000000"
    }
}

export const darkTheme: AppTheme = {
    mode: "dark",
    globalFocusColor: "rgba(255, 255, 255, 0.8)",
    aria: {ariaLabelThemeSwitcher: "Use Light Mode"},
    colors: {
        appBackground: "#191919",
        socialIconsHeader: "#A7A7A7",
        headerMenuText: "#A7A7A7",
        menuLinkHover: "rgba(255, 255, 255, 0.2)",
        menuIconLinkHover: "rgba(255, 255, 255, 0.15)",
        h1: "#D9D9D9",
        h2: "#CCCCCC",
        h3: "#A7A7A7",
        projectBackground: "#363636",
        projectHeading: "#CCCCCC",
        projectDescription: "#CCCCCC",
        projectStack: "#CCCCCC",
        projectLinks: "#FFFFFF",
        projectLinkGitHubIcon: "data:image/svg+xml, %3Csvg width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2_5976)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1726 18.8173 16.8976 17.5414 18.1197 15.8395C19.3418 14.1375 19.9994 12.0952 20 10C20 4.475 15.525 0 10 0Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2_5976'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
        projectLinkIcon: "data:image/svg+xml, %3Csvg width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.2867 8.71333C10.6041 8.03103 9.67846 7.64774 8.71334 7.64774C7.74821 7.64774 6.82259 8.03103 6.14 8.71333L3.56584 11.2867C2.88324 11.9693 2.49976 12.8951 2.49976 13.8604C2.49976 14.8258 2.88324 15.7516 3.56584 16.4342C4.24844 17.1168 5.17424 17.5002 6.13959 17.5002C7.10493 17.5002 8.03074 17.1168 8.71334 16.4342L10 15.1475' stroke='%23FCFCFC' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round' fill='transparent'/%3E%3Cpath d='M8.71338 11.2867C9.39597 11.969 10.3216 12.3523 11.2867 12.3523C12.2518 12.3523 13.1775 11.969 13.86 11.2867L16.4342 8.71334C17.1168 8.03074 17.5003 7.10493 17.5003 6.13959C17.5003 5.17424 17.1168 4.24844 16.4342 3.56584C15.7516 2.88324 14.8258 2.49976 13.8605 2.49976C12.8951 2.49976 11.9693 2.88324 11.2867 3.56584L10 4.8525' stroke='%23FCFCFC' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round' fill='transparent'/%3E%3C/svg%3E",
        contactMeHeading: "#CCCCCC",
        logoFooter: "#A7A7A7",
        textFooter: "#A7A7A7",
        textCopyright: "#A7A7A7",
        gitHubLogo: "#ffffff"
    }
}