import Head from 'next/head'

/*
    Put some SEO tags in Head component.
*/

const SEO = props => {
  const { pageTitle } = props

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  )
}

export default SEO
