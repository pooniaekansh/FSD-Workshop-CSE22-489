const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Fixed typo: schemma -> schema
const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
    Name: () => {
        return 'Ekansh';
    },
    Email: () => {
        return 'abc@gmail.com';
    },
    RollNo: () => {
        return 3;
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
});
