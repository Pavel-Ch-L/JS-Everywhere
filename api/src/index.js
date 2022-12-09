const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
const port = process.env.PORT || 4000;

let notes = [
  {
    id: '1',
    content: 'This is a note',
    author: 'Adam Scott'
  },
  {
    id: '2',
    content: 'This is another note',
    author: 'Harlow Everly'
  },
  {
    id: '3',
    content: 'Oh hey look, another note!',
    author: 'Riley Harrison'
  }
];

// Построение схемы Graph QL
const typeDefs = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Query {
    hello: String
    notes: [Note!]!
  }
`;

//  Предоставим функцию распознаватель для полей схемы
const resolvers = {
  Query: {
    hello: () => 'Hellow World!',
    notes: () => notes
  }
};

// Настройка Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Применяем промежуточное ПО Apollo Graph QL и указываем путь к /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
  console.log(
    `Graph QL server running at http://localhost:${port}${server.graphqlPath}`
  );
});
