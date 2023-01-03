import React, { useEffect } from 'react';

import Button from '../components/Button';

const Home = () => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'Notedly';
  });
  return (
    <div>
      <p>This is the home page</p>
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
