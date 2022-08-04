import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: content-box;
        --body: #111111;
        --text: #ffffff;
        --sections: #2c2c2c;
        --buttons: #F9A826;
        transition: all 0.15s ease-in-out;
    }
    html {
        /* a cada 1rem será considera 10px */
        font-size: 62.5%;
    }
    body, html {
        font-family: 'Roboto Mono', monospace, sans-serif;
        color: var(--text);
        width: 100vw;
        height: 100vh;
    }
    body {
        font-size: 1.6rem;
    }
    button {
        cursor: pointer;
        border: none;
        background: none;
    }
    a {
        text-decoration: none;
        color: var(--text);
    }
`;

export default GlobalStyle