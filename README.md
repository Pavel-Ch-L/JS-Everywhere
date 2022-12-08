# Разработка на JavaScript. &emsp; Автор: Адам Д. Скотт

<br>
<img src="./api/cover.png" width="200" align="right" />

## 1. Среда разработки

    • NVM - менеджер версий Node (для windows - nvm-windows).
    • LTS (long-term support) - долгосрочная поддержка. Стандартный 
        приод поддержки длится 3 года после изначального релиза версии. 
        Релизы с четными номерами являются LTS версиями.
    • Expo - пакет инструментов, упрощающий начальную загрузку и 
        разработку проектов под iOS/Android с помощю React Native. expo.io
        npm i -g expo-cli
    • Тема Dracula + шрифт Source Code Pro.

## 2. Введение в API

    • В нашем API пользователи смогут:
    - создавать заметки, а также читать, обновлять и удалять их;
    - просматривать ленту заметок, созданых другими пользователями, и читать их отдельные заметки 
        без возможности обновления или удаления;
    - создавать аккаунт, авторизовываться и выходить из системы;
    - просматривать информацию своего профиля, а также публичную информацию профилей 
        др пользователей;
    - добавлять в "избранное" заметки др пользователей и составлять из них список.

    • Graph QL - спецификация разработанная в Facebook 2012 г. Она позволяет клиенту 
        запрашивать именно те данные, которые ему нужны, что существенно упрощает и снижает число запросов.
    • REST отличается тем, что при обращении к серверу опирается на структуру URL и параметры запросов.
    • cp .env.example .env

## 3. Создание веб-приложения с помощю Node и Express

    • Сценарии package.json
    	"scripts": {
    		...
    		"dev": "nodemon src/index.js"
    		...
    	}

