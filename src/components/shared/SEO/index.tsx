import Head from 'next/head'
import { ReactNode } from 'react'
import { APP_DESC } from '../../../util/constants'

interface SEOProps {
  children?: ReactNode
  title: string
  description?: string
}

export const SEO: React.FC<SEOProps> = ({ title, description = APP_DESC }) => {
  return (
    <Head>
      <title>{`TRIGAN | ${title}`}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
