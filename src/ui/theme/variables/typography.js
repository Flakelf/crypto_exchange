import { css } from 'styled-components'

const mainFontName = 'Arial'

const mainFont = css`
  font-family: ${mainFontName}, sans-serif;
`

const h1 = css`
  font-size: 36px;
  line-height: 39px;

  ${p => p.theme.typography.mainFont}
`

const h2 = css`
  font-size: 20px;
  line-height: 39px;

  ${p => p.theme.typography.mainFont}
`

export default {
  mainFontName,
  mainFont,
  h1,
  h2,
}
