import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Technologies} from "./layout/sections/technologies/Technologies";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/sections/footer/Footer";

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
            <Technologies/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 1204px;
    margin: 0 auto;
`

export default App;