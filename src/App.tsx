import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Technologies} from "./layout/sections/technologies/Technologies";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/Global.styled";
import React, {useState} from "react";
import {darkTheme, INITIAL_THEME_MODE, lightTheme} from "./styles/theme/modes";


function App() {

    const [themeMode, setThemeMode] = useState<"light" | "dark">(INITIAL_THEME_MODE);
    const isLightMode = themeMode === "light";

    const toggleMode = () => {
        if (themeMode === "light") {
            setThemeMode("dark");
        } else {
            setThemeMode("light")
        }
    }

    return (
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <Header toggleMode={toggleMode}/>
            {/*  TODO - Wrap with <main>  */}
            <Main/>
            <Technologies/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;