const { articles } = require('../data')

class Article {
  static all () {
    return articles
  }
}

module.exports = {
  Article
}
