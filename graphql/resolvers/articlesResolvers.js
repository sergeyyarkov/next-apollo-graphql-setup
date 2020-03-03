const { Article } = require('../models')

const articlesResolvers = {
  Query: {
    articles: () => Article.all()
  }
}

module.exports = {
  articlesResolvers
}
