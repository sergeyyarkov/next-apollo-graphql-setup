import { gql, ApolloServer } from 'apollo-server-micro'

const Articles = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' },
  { id: 4, title: 'Article 4' },
  { id: 5, title: 'Article 5' }
]

const typeDefs = gql`
    type Query {
        articles: [Article]
    }

    type Article {
        id: ID
        title: String
    }
`

const resolvers = {
  Query: {
    articles: (_parent, _args, _context) => Articles
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const handler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = { api: { bodyParser: false } }
export default handler
