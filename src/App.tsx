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
import {darkTheme, lightTheme, START_MODE} from "./styles/theme/modes";


function App() {

    const [mode, setMode] = useState<"light" | "dark">(START_MODE)
    const isLightMode = mode === "light";

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light")
        }
        // console.log('сменили тему на: ', mode);
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