import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-boost'

const config = {
  link: new HttpLink({
    uri: process.env.GRAPHQL_API_URI,
    opts: {
      credentials: 'same-origin'
    }
  })
}

export default withData(config)
