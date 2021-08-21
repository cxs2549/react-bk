import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }
    body {
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
        background-color: #F2E6D4;
    }
    button, svg, a, img {
        cursor: pointer;
        font-family: 'Paytone One';
    }
`

export default GlobalStyles
