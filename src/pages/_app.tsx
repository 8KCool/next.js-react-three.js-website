import {AppProps} from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import {Toaster} from 'react-hot-toast'
import '../styles/globals.css'
import {PRIMARY_COLOR} from '../util/constants'
import {EarlyAccessModalProvider} from "../context/EarlyAccessModalContext";
import { ThemeProvider } from 'next-themes'


function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=1, viewport-fit=cover"
        />
      </Head>
      {/* Progress Bar */}
      <NextNProgress
        color={PRIMARY_COLOR}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Toaster/>
    <ThemeProvider attribute="class" enableSystem={true}>  
      <EarlyAccessModalProvider>
        <Component {...pageProps} />
      </EarlyAccessModalProvider>
      </ThemeProvider>  
    </>
  )
}

export default MyApp
