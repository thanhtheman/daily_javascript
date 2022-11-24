const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')
const app = express();



const authors = [{id: 1, name: 'J.K. Rowling'},{id: 2, name: 'Thanh Quach'},
{id: 3, name: 'Les Toyse'}]

const books = [{id: 1, name: 'Harry Potter Lesson 1', authorId: 1},
{id: 2, name: 'Harry Potter Lesson 2', authorId: 1},
{id: 3, name: 'Harry Potter Lesson 3', authorId: 1},
{id: 4, name: 'Cloud Engineering', authorId: 2},
{id: 5, name: 'Cloud Engineering Part 2', authorId: 2},
{id: 6, name: 'Cloud Engineering Part 3', authorId: 2},
{id: 7, name: 'Backend Developer Session 1', authorId: 3},
{id: 8, name: 'Backend Developer Session 2', authorId: 3},
{id: 9, name: 'Backend Developer Session 3', authorId: 3}]

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: "This is an author's name of a book",
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        books: {
            type: new GraphQLList(BookType),
            resolve: (author) => { return books.filter(book => author.id == book.authorId)}
        }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        random1: {type: GraphQLString},
        authorId: {type: new GraphQLNonNull(GraphQLInt)},
        random2: {type: GraphQLInt},
        author: {
            type: AuthorType,
            resolve: (book) => { return authors.find(author => author.id === book.authorId)}
        }
    })
})


const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        books: {
            type: new GraphQLList(BookType),
            description: 'List of all books',
            resolve: () => books
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of all authors',
            resolve: () => authors
        },
        author: {
            type: AuthorType,
            description: 'a single author',
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args) => authors.find(author => author.id === args.id)
        },
        book: {
            type: BookType,
            description: 'a single book',
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (parent, args) => books.find(book => book.id === args.id)
        },
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log('Server Running'))

