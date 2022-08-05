import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    
    body{
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
        height: 200vh;
        background-color: #ffffff;
    }
`;

export default GlobalStyle;