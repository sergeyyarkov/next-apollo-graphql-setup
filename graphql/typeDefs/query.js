const { gql } = require('apollo-boost')

const query = gql`
  type Query {
    articles: [Article]
  }
`

module.exports = {
  query
}
