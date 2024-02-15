import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Technologies} from "./layout/sections/technologies/Technologies";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {Container} from "./components/styled/Container";

function App() {
    return (
        <>
            <Header/>
            {/*  TODO - Wrap with <main>  */}
            <Container>
                <Main/>
                <Technologies/>
                <Projects/>
                <Contacts/>
            </Container>
            <Footer/>
        </>
    );
}

export default App;