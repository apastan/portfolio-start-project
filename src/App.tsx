import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Typography} from "./components/styled/Typography";

function App() {
    return (
        <StyledApp>
            <Header/>
            <Typography as={"h1"} sx={() => `color: red;`}>
                Hi 👋,
                My name is
                <span>Pavan MG</span>
                I build things for web
            </Typography>
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 1204px;
    margin: 0 auto;
`

export default App;