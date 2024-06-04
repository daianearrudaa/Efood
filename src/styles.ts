import { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  beige: '#FFEBD9',
  white: '#fff'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{

}

.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`