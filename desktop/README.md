<img src="cover.png" width="200" align="right" />

# Разработка на JS (JavaScript Everywhere Desktop Application)

Этот репозиторий содержит примеры кода для глав, посвященных созданию Electron desktop application.
[_JavaScript Everywhere_](https://www.jseverywhere.io/) by Adam D. Scott, published by O'Reilly Media

## Поддержка

Лучшее место для получения помощи - Spectrum channel, [spectrum.chat/jseverywhere](https://spectrum.chat/jseverywhere).

## Структура проекта

- `/src` Если вы следуете за примерами в книге, эта дирректория для написания проекта.
- `/solutions` Эта дирректория для примеров кода к каждой главе. Если у вас трудности ипользуйте ее для решения проблеммы.
- `/final` Дирректория содержит финальный проект.

## Для запуска готового приложения

Для запуска приложения в процессе разработки:

```
npm run dev
```

Для запуска уже готового приложения:

```
npm run final
```

## Связанные репозитории

- [API 🗄️ ](https://github.com/javascripteverywhere/api)
- [Web 💻 ](https://github.com/javascripteverywhere/web)
- [Mobile 🤳](https://github.com/javascripteverywhere/mobile)
  <br>
  <hr>
  <br>

# Разработка на JavaScript. &emsp; Автор: Адам Д. Скотт

Конспект разделов книги о построении Desktop Application (стр. 222-241)

<br>

## 18. Создание десктопных приложений с помощю Electron

    • Electron - фреймворк, предназначенный для создания кроссплатформенных дектопных приложений с
        помощю веб-технологий.
        Работает он на основе Node и движка Chromium.
    • CSP - content security policy позволяет указывать домены, с которых приложению разрешено
        загружать ресурсы.
    • Electron Builder - библиотека для упаковки, сборки, дистрибуции приложения.
