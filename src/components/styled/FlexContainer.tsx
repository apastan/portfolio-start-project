import styled from "styled-components";


export type FlexContainerPropsType = {
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around"
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"
    alignContent?: "stretch" | "flex-start" | "flex-end"
}

export const FlexContainer = styled.div<FlexContainerPropsType>`
    display: flex;
    flex-direction: ${props => (props.flexDirection ?? "row")};
    flex-wrap: ${props => (props.flexWrap ?? "nowrap")};
    justify-content: ${props => (props.justifyContent ?? "flex-start")};
    align-items: ${props => (props.alignItems ?? "flex-start")};
    align-content: ${props => (props.alignContent ?? "stretch")};
`