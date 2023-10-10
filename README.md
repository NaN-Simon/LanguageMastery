# Language Mastery
## About

[Deploy](https://nan-simon.github.io/LanguageMastery/)

Приложение для заучивания английских слов. Дано слово на английском, нужно ввести на русском. При верном вводе `❌` сменится на `✔`.

Доступны подсказки:

* описание - идет вместе с запросом или в данном случае в json
* добавление первой буквы по клику
* переход на oxford dictionary с уже сформированным url
* добавление в избранное (будет отображаться http://localhost:3000/#/favorites)

Используемые технологии:

* JavaScript библиотека: React + TypeScript
* Навигация: react-router-dom
* Стейт менеджер: redux toolkit (добавление в избранное)
* Хранение: localStorage
* CSS фреймворк: tailwindcss

Опубликовано при помощи: gh-pages


## Getting Started

### First run the command to install all the project dependencies:

`npm install`

### Upload questions exam-card:
..\src\node\convertible.txt

### Generate json:

npm run loadquests

### Run the development server:

`npm start`

Next, open http://localhost:3000 with your browser to see the result.


