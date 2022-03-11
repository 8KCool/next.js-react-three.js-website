import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1.0, user-scalable=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
