import React from 'react';
import {FlexContainer} from "../styled/FlexContainer";


export function Menu() {
    return (
        <nav>
            <FlexContainer as={"ul"}>
                {/*TODO - Add link to id attribute*/}
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Tech Stack</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </FlexContainer>
        </nav>
    );
}