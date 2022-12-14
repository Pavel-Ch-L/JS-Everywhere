require('dotenv').config();
const db = require('./db');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;
console.log(process.env.DB_HOST);
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
    notes: () => notes,
    note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Adam Scott'
      };
      notes.push(noteValue);
      return noteValue;
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
