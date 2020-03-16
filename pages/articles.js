import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Query from '../components/Query/query'
import ARTICLES_QUERY from '../apollo/queries/articles/articles'
import { withApollo } from '../lib/apollo'

const Articles = () => {
  return (
    <>
      <SEO pageTitle='Articles page' />
      <Layout>
        <h1>Articles page</h1>
        <div>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return articles.map(art => {
                return (
                  <div key={art.id}>
                    <p>
                        title: {art.title} <br />
                        id: {art.id}
                    </p>
                  </div>
                )
              })
            }}
          </Query>
        </div>
      </Layout>
    </>
  )
}

export default withApollo({ ssr: true })(Articles)
