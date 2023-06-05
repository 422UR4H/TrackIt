import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body, button {
        font-family: 'Lexend Deca', 'sans-serif';
        font-weight: 400;
    }

    body {
        background-color: #F2F2F2;
    }

    button {
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
        }
    }
`;

export default GlobalStyle;