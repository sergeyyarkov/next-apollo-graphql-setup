const { gql } = require('apollo-boost')

const articleType = gql`
  type Article {
    id: ID
    title: String
  }
`

module.exports = {
  articleType
}
