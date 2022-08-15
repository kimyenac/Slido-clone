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
    
    button {
      font-size: 16px;
      background: none;
      border: none;
    }
    
    body{
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
        padding-top: 80px;
        background-color: #ffffff;
    }
`;

export default GlobalStyle;