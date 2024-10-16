HW6

Урок 6. 

Погружение в Redux. Connect

Разработать приложение для управления каталогом продуктов, позволяющее добавлять, удалять, отображать и редактировать продукты.

Настройка Redux Store:

Используйте configureStore из @reduxjs/toolkit для создания хранилища.

Определите начальное состояние и создайте слайс с использованием createSlice для продуктов. Каждый продукт должен иметь id, name, description, price, и available.

В слайсе определите редьюсеры и действия для добавления нового продукта, удаления продукта по ID, обновления продукта и изменения его доступности.


Компоненты React:

Компонент для добавления продукта:
Создайте форму, позволяющую пользователям вводить данные нового продукта (имя, описание, цена, доступность) и добавлять его в каталог.

Компонент для отображения продуктов:
Разработайте компонент, который отображает список всех продуктов с их атрибутами, а также кнопки для удаления продукта из каталога и переключения его доступности.

Компонент для редактирования продукта:
Опционально, предоставьте возможность редактирования существующих продуктов, чтобы можно было изменять их имя, описание, цену и доступность.


HW5

Урок 5. 

Компоненты высшего порядка знакомство с Redux
Приложение для переключения темы сайта
Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

Функционал:

Action types: TOGGLE_THEME.
Actions: Создайте действие для переключения темы.
Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
Component: Создайте компонент, который отображает переключатель для изменения темы сайта.


Описание:

Состояние: 

Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").

Интерфейс: 

Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.

HW4

Урок 4. 

Children. Роутинг в React
Создать приложение с двумя страницами: "Главная страница" и "О нас".
На каждой странице должна быть навигационная ссылка для перехода на другую страницу.

Шаги выполнения:

Установка react-router-dom:
Если еще не установлен, добавьте react-router-dom в ваш проект: npm install react-router-dom.

Создание компонентов:
— Создайте два компонента: HomePage.jsx и AboutPage.jsx.
— В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
— Реализовать переходы.




HW3

Задание 1:

 Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.


Задание 2: 

Список дел с Material UI

Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

Компоненты:
Используйте TextField для ввода новой задачи.
Добавьте Button для добавления задачи в список.
Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

Логика:
При нажатии на кнопку добавления, новая задача должна добавляться в список.
Рядом с каждой задачей должна быть кнопка для её удаления.

HW2

Задание: Список комментариев с удалением.

Цель: Комбинирование useState, рендеринга списков и обработки событий для создания интерактивного интерфейса.

Задача:

Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

Можно использовать заготовку:

const [comments, setComments] = useState([
{ id: 1, text: "Это первый комментарий" },
{ id: 2, text: "Это второй комментарий" },
{ id: 3, text: "Это третий комментарий" }
]);

HW1

Развернуть новый проект с использованием create-react-app.

Создать компонент Message, отображающий переданный ему props текст.

Стилизовать компоненты через css (при желании можно использовать less или sass).

Дополнительное задание: Установить расширение React Devtools.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
