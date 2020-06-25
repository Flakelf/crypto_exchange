import { createGlobalStyle } from 'styled-components'

import { normalize } from './normalize'

import bgbgbgbmjmjmjmj from './assets/bgbgbgbmjmjmjmj.jpg'

const GlobalStyles = createGlobalStyle`
    ${normalize}

    body {
        background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${bgbgbgbmjmjmjmj})
    }

    html, body, body > div {
        display: flex;
        width: 100%;
        height: 100%;
    }
`

export { GlobalStyles }
