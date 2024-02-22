import styled from "styled-components";

export function ThemeSwitcher() {
    return (
        <Wrapper>
            <label>
                <input className="visually-hidden" type="checkbox" aria-label="Switch light/dark mode"
                       defaultChecked={true}/>
                <Slider></Slider>
            </label>
        </Wrapper>
    );
}

const sun = "#ffa500"
const moon = "#fffcc1";
const light = "#FFFFFF";
const dark = "#191919";
const outlineLight = "rgba(167, 167,167, 0.5)";
const outlineDark = "rgba(255, 255, 255, 0.8)";

const Slider = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;

    &::before {
        content: "";
        //text-shadow: 0px 0px 16px #ffa500;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        box-shadow: inset 10px -4px 0px 0px ${moon};
        background-color: ${dark};
        transition: 0.3s;
    }
`

const Wrapper = styled.div`
    position: relative;
    width: 60px;
    height: 30px;
    border-radius: 50px;

    label {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${dark};
        border-radius: 50px;
        cursor: pointer;
        border: 1px solid #A7A7A7;
        box-sizing: content-box;
    }

    label:focus-within {
        box-shadow: 0 0 0 3px ${props => props.theme.mode === "light" ? outlineLight : outlineDark};
    }

    input:checked + ${Slider} {
        background-color: ${light};
    }

    input:checked + ${Slider}::before {
        transform: translateX(30px);
        background-color: ${sun};
        box-shadow: none;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }
`