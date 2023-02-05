import { Head, Html, Main, NextScript } from 'next/document'
import { MetaTags } from '../components/shared/MetaTags'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Loading Additional Meta Tags */}
        <MetaTags />

        {/* Analytics */}
        <script
          defer
          data-domain="trigan.org"
          src="https://stats.trigan.org/js/plausible.js"
        />
      </Head>
      <body
        id="app"
        className="bg-light text-dark dark:bg-dark dark:text-white"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
