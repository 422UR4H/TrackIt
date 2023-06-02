import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body, button {
        font-family: 'Lexend Deca', 'sans-serif';
        font-weight: 400;
    }
`;

export default GlobalStyle;