import React from 'react';
import ReactDom from 'react-dom';

// Импортируем библиотеки Apollo Client
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Импортируем глобальные стили
import GlobalStyle from './components/GlobalStyle';
// Импортируем маршруты
import Pages from './pages';
// Настраиваем API URI и кэш
const uri = process.env.API_URI;
const cache = new InMemoryCache();
// Настраиваем Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <Pages />
  </ApolloProvider>
);

ReactDom.render(<App />, document.getElementById('root'));
