import { createGlobalStyle } from 'styled-components';
import { Theme } from '../Theme'

const Global = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        font-family: inherit;
    }

    *:focus {
        outline-color: ${Theme.palette.secondary.main};
    }

    body {
        color: ${Theme.palette.primary.main};
        font-family: 'Roboto';
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        line-height: 1.31;
        margin: 0;
        padding: 0;
    }

    ol,
    ul {
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ol {
        margin: 0;
    }

    a {
    color: inherit;
    opacity: 1;
    text-decoration: none;

    &:hover {
        color: inherit;
        opacity: 0.9;
        text-decoration: none;
      }
    }

    button,
    *[role='button'] {
        cursor: pointer;
    }
`;

export { Global }