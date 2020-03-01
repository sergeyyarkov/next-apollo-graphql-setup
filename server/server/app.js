const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const cors = require('cors')

const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = 3005
app.listen(PORT, () => console.log(`Server listen port ${PORT}...`))

