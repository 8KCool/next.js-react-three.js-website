import { ReactNode } from 'react'
import { APP_DESC, APP_TITLE, SITE_URL } from '../../../util/constants'

interface MetaTagsProps {
  children?: ReactNode
}

export const MetaTags: React.FC<MetaTagsProps> = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="application-name" content={APP_TITLE} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Trigan Dao" />
      <meta name="description" content={APP_DESC} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#5B34EA" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#202635" />

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />

      {/* TWITTER CONFIGURATION */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://trigan.org" />
      <meta name="twitter:title" content={APP_TITLE} />
      <meta name="twitter:description" content={APP_DESC} />
      <meta
        name="twitter:image"
        content={SITE_URL + '/images/twitter_image.png'}
      />
      <meta name="twitter:creator" content="@TriganDAO" />

      {/* OPEN GRAPH CONFIGURATION */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={APP_TITLE} />
      <meta property="og:description" content={APP_DESC} />
      <meta property="og:site_name" content={APP_TITLE} />
      <meta property="og:url" content={SITE_URL} />
      <meta
        property="og:image"
        content={SITE_URL + '/icons/apple-touch-icon.png'}
      />
    </>
  )
}
