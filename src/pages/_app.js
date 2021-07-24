import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`


  a {
  text-decoration: none;
}


  body {

    font-family: sans-serif;
    background-color: #D9E6F6
  }

  #__next {
    min-height: 100vh;
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
