import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { FloatingActionButton } from '../components/shared/FloatingActionButton'
import '../styles/globals.css'
import { PRIMARY_COLOR } from '../util/constants'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=1, viewport-fit=cover"
        />
        <script src="https://unpkg.com/driver.js/dist/driver.min.js"></script>
        <link
          rel="stylesheet"
          href="https://unpkg.com/driver.js/dist/driver.min.css"
        ></link>
      </Head>
      {/* Progress Bar */}
      <NextNProgress
        color={PRIMARY_COLOR}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <FloatingActionButton />
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
