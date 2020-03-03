const { ApolloServer, gql } = require('apollo-server-micro')
const { typeDefs } = require('../../graphql/typeDefs')
const { resolvers } = require('../../graphql/resolvers')

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const handler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = { api: { bodyParser: false } }
export default handler
