import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";

function App() {
    return (
        <StyledApp>
            <Header/>
            <Main/>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 1204px;
    margin: 0 auto;
`

export default App;