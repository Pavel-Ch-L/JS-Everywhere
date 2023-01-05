import React, { useEffect } from 'react';
// Импорт библиотеки useQuery и синтаксис gql
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

// GraaphQL запрос хранящийся в переменной
const GET_NOTES = gql`
  query noteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const Home = () => {
  // Хук запроса
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  // Если данные загружаются, отображать сообщение о загрузке
  if (loading) {
    return <p>Loading...</p>;
  }

  // Если при получении данных произошел сбой, отобразить сообщение об ошибке
  if (error) {
    return <p>Error!</p>;
  }

  // Если получение даннып рошло успешно, отображаем их в UI
  // React требует присвоение каждому результату уникального ключа
  return (
    <div>
      {data.noteFeed.notes.map(note => (
        <article key={note.id}>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />{' '}
          {note.author.username} {note.createdAt} {note.favoriteCount}{' '}
          <ReactMarkdown source={note.content} />
        </article>
      ))}
    </div>
  );
};

/* import Button from '../components/Button'; */
/* 
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
 */

export default Home;
