import React from 'react';
import ReactDom from 'react-dom';

// Импортируем маршруты
import Pages from './pages';

const App = () => {
  return (
    <div>
      <Pages />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
