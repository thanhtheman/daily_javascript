const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Thanh",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World'
            },
            age: {
                type: GraphQLInt,
                resolve: () => 5 + 2
            }
        })
    })
})

const schema2 = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "ThanhQ",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Thanh is talented'
            },
            score: {
                type: GraphQLInt,
                resolve: () => 5 + 152
            }
        })
    })
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log('Server Running'))

