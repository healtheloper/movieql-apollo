import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background-color:#0B0D0E;
        color:white;
        padding:10px;
    }
`;

export default GlobalStyle;
