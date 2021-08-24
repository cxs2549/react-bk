import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }
    :root {
        --maxWidth: 1300px;
        --brandBase: #F2E6D4;
        --brandRed: #ca2216;
    }
    body {
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        background-color: #F2E6D4;
    }
    main {
        max-width: var(--maxWidth);
        margin: 0 auto;
        margin-bottom: 128px;
        @media (min-width: 768px) {
            margin-bottom: 74px;
        }
    }
    button, svg, a, img {
        cursor: pointer;
        font-family: 'Paytone One';
        letter-spacing: .5px;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
`

export default GlobalStyles
