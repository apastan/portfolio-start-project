import React from 'react';

export function Header() {
    return (
        // TODO - Create Styled header
        <header>
            <a href="#">
                {/*TODO - insert logo and fill alt attribute*/}
                <img src="" alt=""/>
            </a>

            {/*TODO - Flex container*/}
            <div>
                {/*TODO - Add FlexContainer styled component*/}
                {/*TODO - Create HeaderNavigation component*/}
                <nav>
                    <ul>
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
                    </ul>
                </nav>

                {/*TODO - Add FlexContainer styled component*/}
                {/*TODO - Create Socials component*/}
                <div>
                    <ul>
                        {/*TODO - Add links to socials*/}
                        <li><a href="#"></a>1</li>
                        <li><a href="#"></a>2</li>
                        <li><a href="#"></a>3</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

