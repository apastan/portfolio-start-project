import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Typography} from "./components/styled/Typography";


function App() {
    return (
        <>
            <Header/>
            <Typography as={"h1"} sx={()=> `color: red;`}>
                Hi 👋,
                My name is
                <span>Pavan MG</span>
                I build things for web
            </Typography>
        </>
    );
}

export default App;

/*
const MainHeading = styled(Typography)`
    color: aqua;
`
*/

/*
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;*/
