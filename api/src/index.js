require('dotenv').config({ path: __dirname + '/.env' });
const db = require('./db');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers');
const models = require('./models');

const app = express();
const port = process.env.PORT || 4000;
const typeDefs = require('./schema');
const DB_HOST = process.env.DB_HOST;

// Подключаем БД
db.connect(DB_HOST);

// Настройка Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    // Добавление моделей БД в контекст
    return { models };
  }
});

// Применяем промежуточное ПО Apollo Graph QL и указываем путь к /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
  console.log(
    `Graph QL server running at http://localhost:${port}${server.graphqlPath}`
  );
});
