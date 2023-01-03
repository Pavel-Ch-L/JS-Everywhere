import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'Favorites - Notedly';
  });
  return (
    <div>
      <h1>Notedly</h1>
      <p>This are my favorites</p>
    </div>
  );
};

export default Favorites;
