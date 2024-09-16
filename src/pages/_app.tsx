import mainTheme from "@styles/mainTheme"
import GlobalStyle from "@styles/global-styles"
import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <ThemeProvider theme={mainTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}
