### This is a next-apollo-graphql setup to start develop your web site. This setup uses server side rendering.


## 🚀 Getting Started

To start the development server, you need to run the following commands below. 

```bash
npm install
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

Our application runs on port `3000`, and GraphQL server also runs on `localhost:3000/api/graphql`.

## ⚡ Using Query

You can easily use `Query` component to send queries to the GraphQL server. Just pass your query to the `Query` component.
```jsx
<Query query={ARTICLES_QUERY}>
    {({ data: { articles } }) => {
        return <Articles articles={articles} />;
    }}
</Query>
```

Use the `withData` HOC to wrap your pages.
```jsx

// ./frontend/pages/articles.js
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Query from '../components/Query/query'
import ARTICLES_QUERY from '../apollo/queries/articles/articles';
import withData from '../lib/apollo';


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

export default withData(Articles)

```
## License:
[MIT](https://github.com/sergeyyarkov/next-apollo-graphql-setup/blob/master/LICENSE)





