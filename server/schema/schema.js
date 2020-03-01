const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const Articles = [
    {id: 1, title: 'Article 1'},
    {id: 2, title: 'Article 2'},
    {id: 3, title: 'Article 3'},
    {id: 4, title: 'Article 4'},
    {id: 5, title: 'Article 5'}
]

const ArticleType = new GraphQLObjectType({
    name: 'Article',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString }
    })
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        articles: {
            type: new GraphQLList(ArticleType),
            resolve() {
                return Articles
            }
        }
    }
})

module.exports = new GraphQLSchema({
  query: Query
});