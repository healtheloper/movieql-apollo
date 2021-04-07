import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        background-color:#131416;
        color:white;
    }
`;

export default GlobalStyle;
