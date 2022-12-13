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
    - просматривать информацию своего профиля, а также публичную информацию профилей др пользователей;
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

## 4. Наш первый Graph QL

    • Graph QL позволяет эффективно связывать данные, что снижает сложность и число запросов.
    • apollo-server-express - преобразование Express сервера в Graph QL сервер. Он позволяет
        передавать данные из NodeJS приложения в виде Graph QL API и предоставляет полезные инструменты
        вроде Graph QL Playground.
    • Схемы - это письменное представление данных и взаимодействий. API может возвращать данные и
        выполнять действия, которые определены в рамках этой схемы. Основопологающее таких схем типы объектов:
        - String
        - Boolean
        - Int
        - Float
        - Id
    • Определить поле которое требует обязательное значение можно с помощю !
        type Pizza {
            id: ID!
            size: String!
            slices: Int!
            toppings: [String]
        }
    • Распознаватели - распознают данные запрошенные API.
    • Запросы - запрашивают от API данные в желаемом формате. Запрос никогда не изменяет данные, а только
        обращается к ним.
    • Мутации - используют, когда хотят изменить данные в API. Как и запрос, мутация возвращает данные в
        форме объекта представленного, как правило, конечным результатом выполненного действия.
    • Аргумент схемы - позволяет получателю API передавать в функцию распознавания конкретные значения.
    • Apollo Server передает функциям распознавателям следующие параметры:
        - parent - результат родительского запроса, который полезен при вложении запросов;
        - args - аргументы, передавемые пользователем в запросе;
        - context - информация, которая передается от серверного приложения функциям распознавания и
            может включать, к примеру, данные о текущем пользователе или содержимое БД;
        - info - информация о самом запросе.
    • https://www.apollographql.com/docs/

## 5. Базы данных

    • MongoDB команды:
        - show databases
        - use learning
        - show collections
        - db.dropDatabase()
        - db.pizza.drop()
        - db.pizza.insertOne({type: "Cheese"})
        - db.pizza.insertMany ( [{},{}] )
        - db.pizza.deleteMany({})
        - db.pizza.find()
        - db.pizza.find({type: "cheese})
        - db.pizza.remove({type: "Mashroom"})
        - db.version()

    • Коллекции группируют схожие документы вместе.
    •
