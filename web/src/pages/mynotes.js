import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'My Notes - Notedly';
  });
  return (
    <div>
      <h1>Notedly</h1>
      <p>This is my notes</p>
    </div>
  );
};

export default MyNotes;
