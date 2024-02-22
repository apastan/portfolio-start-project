import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Technologies} from "./layout/sections/technologies/Technologies";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/Global.styled";
import React from "react";
import {lightTheme} from "./styles/theme/modes";


function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles/>
            <Header/>
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