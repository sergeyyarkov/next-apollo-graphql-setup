const { query } = require('./query')
const { articleType } = require('./types')

const typeDefs = [query, articleType]

module.exports = {
  typeDefs
}
