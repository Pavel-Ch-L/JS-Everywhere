import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    // Обновляем заголовок документа
    document.title = 'My Notes - Notedly';
  });
  return (
    <div>
      <p>This is my notes</p>
    </div>
  );
};

export default MyNotes;
