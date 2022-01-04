const { gql, ApolloServer } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Hello world from GraphQL'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({port: 9000})
    .then(({ url }) => console.log(`Server is running on port ${url}`));

