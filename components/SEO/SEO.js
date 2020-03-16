import Head from 'next/head'

/*
    Put some SEO tags in Head component.
*/

const SEO = props => {
  const { pageTitle } = props

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
      name="description"
      content="-"
    />
    </Head>
  )
}

export default SEO
