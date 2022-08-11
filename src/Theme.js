import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle";

const themes = {
    default: {
        bg: "grey"
    },
    thor: {
        bg: "red",
        color: "blue",
        color2: "white"
    },
    minions: {
        bg: "Yellow",
        color: "blue",
        color2: "white"
    },
    superPets: {
        bg: "#0b314b",
        color: "gold",
        color2: "red"
    }
}

export const Theme = (props) => (
    <ThemeProvider theme={themes[props.theme]}>
        <GlobalStyle />
        {props.children}
    </ThemeProvider>
);