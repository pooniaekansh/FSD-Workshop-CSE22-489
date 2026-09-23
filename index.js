const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define GraphQL Schema
const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

// Define Resolvers
const root = {
    Name: () => "Ekansh",
    Email: () => "ekansh@gmail.com",
    RollNo: () => 20
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: {
        defaultQuery: "{\n  Name\n  Email\n  RollNo\n}\n"
    }
}));

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
});