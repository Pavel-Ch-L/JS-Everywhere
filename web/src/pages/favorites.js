import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'Favorites - Notedly';
  });
  return (
    <div>
      <p>This are my favorites</p>
    </div>
  );
};

export default Favorites;
