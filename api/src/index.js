require('dotenv').config({ path: __dirname + '/.env' });
const db = require('./db');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const models = require('./models');

const app = express();
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

// Подключаем БД
db.connect(DB_HOST);

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
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
  }
`;

//  Предоставим функцию распознаватель для полей схемы
const resolvers = {
  Query: {
    hello: () => 'Hellow World!',
    notes: async () => {
      return await models.Note.find();
    },
    note: async (parent, args) => {
      return await models.Note.findById(args.id);
    }
  },
  Mutation: {
    newNote: async (parent, args) => {
      return await models.Note.create({
        content: args.content,
        author: 'Adam Scott'
      });
    }
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
