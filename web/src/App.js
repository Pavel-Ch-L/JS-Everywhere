import React from 'react';
import ReactDom from 'react-dom';

// Импортируем глобальные стили
import GlobalStyle from './components/GlobalStyle';
// Импортируем маршруты
import Pages from './pages';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Pages />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
