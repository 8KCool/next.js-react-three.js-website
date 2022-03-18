import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
