import howToLearnImg from '../assets/howtolearn.png';
import travelToRussia from '../assets/TraveltoRussia.png';
import mestoJS from '../assets/mestoJS.png';
import mestoAuth from '../assets/mestoAuth.png';
import courses from '../assets/courses.png';
import diplomYandex from '../assets/diplom_yandex.png';

const projects = [
  {
    'title': {'ru': 'Дипломный проект на веб-факультете Яндекс Практикум', 'en': 'The final project on the web faculty at @yandex.practicum'},
    'image': diplomYandex,
    'description': {
      'ru': 'Это сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.\n\n' +
        'Вот что было сделано:\n\n' +
        '- настроена инфраструктура и создан сервер на express;\n\n' +
        '- подключена база данных, созданы схемы и модели ресурсов API;\n\n' +
        '- реализовано логирование, аутентификация и авторизация на сервере;\n\n' +
        '- бэкенд задеплоен на Яндекс Облако;\n\n' +
        '- свёрстаны компоненты на React, разметка портирована в его формат;\n\n' +
        '- описана логика и вёрстка страниц регистрации, логина, редактирования профиля, сохранённых фильмов;\n\n' +
        '- реализованы асинхронные GET- и POST-запросы к API;\n\n' +
        '- проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле;',
      'en': 'This is a service where you can search for movies on demand and save them in your personal account.\n' +
        '\n' +
        'Here\'s what was done:\n' +
        '\n' +
        '- set up infrastructure and created Express server;\n\n' +
        '- connected database, created API schemas and resource models;\n\n' +
        '- implemented logging, authentication and authorization on the server;\n\n' +
        '- the backend was deployed on Yandex Сloud;\n\n' +
        '- components made up in React, markup was ported to the React format;\n\n' +
        '- described the logic and layout of registration, login, profile editing, and saved movies pages;\n\n' +
        '- asynchronous GET- and POST-requests to the API were implemented;\n\n' +
        '- authorized and unauthorized states, saving movies in the profile were worked out;\n\n' +
        '- received movies are filtered on the client side.'},
    'demoLink': '',
    'codeLink': 'https://github.com/TearsOprah/movies-explorer-frontend',
    'stack': ['JS', 'React', 'Express', 'MongoDB', 'NodeJS', 'Api', 'Nginx', 'JWT', 'Postman'],
    'id': 0,
  },
  {
    'title': {'ru': 'Подборки курсов', 'en': 'Course selections'},
    'image': courses,
    'description': {'ru': 'Приложение с подборками образовательных курсов', 'en': 'An application with a selection of educational courses'},
    'demoLink': 'https://react-courses-frontend.vercel.app/',
    'codeLink': 'https://github.com/TearsOprah/react-courses-frontend',
    'stack': ['JS', 'React', 'Flex Box', 'Grid Layout', 'Adaptive', 'Api' ],
    'id': 1,
  },
  {
    'title': {'ru': 'место на React', 'en': 'mesto-react'},
    'image': mestoJS,
    'description': {'ru': 'Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки на свои и чужие карточки', 'en': 'An interactive page where you can add photos, delete them and put likes on your own and other people\'s cards'},
    'demoLink': 'https://mesto-react-opal.vercel.app/',
    'codeLink': 'https://github.com/TearsOprah/mesto-react',
    'stack': ['JS', 'React', 'BEM', 'OOP', 'Api', 'Adaptive'],
    'id': 2,
  },
  {
    'title': {'ru': 'место на React c авторизацией', 'en': 'mesto-react with auth'},
    'image': mestoAuth,
    'description': {'ru': 'Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки на свои и чужие карточки. Регистрация и авторизация пользователей', 'en': 'An interactive page where you can add photos, delete them and put likes on your own and other people\'s cards. Registration and authorization of users'},
    'demoLink': 'https://react-mesto-auth-xi.vercel.app/sign-in',
    'codeLink': 'https://github.com/TearsOprah/react-mesto-auth',
    'stack': ['JS', 'React', 'BEM', 'OOP', 'Api', 'Adaptive',],
    'id': 3,
  },
  {
    'title': {'ru': 'место', 'en': 'mesto'},
    'image': mestoJS,
    'description': {'ru': 'Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки на свои и чужие карточки', 'en': 'An interactive page where you can add photos, delete them and put likes on your own and other people\'s cards'},
    'demoLink': 'https://tearsoprah.github.io/mesto/',
    'codeLink': 'https://github.com/TearsOprah/mesto',
    'stack': ['JS', 'Adaptive', 'BEM', 'OOP', 'Webpack', 'Api'],
    'id': 4,
  },
  {
    'title': {'ru': 'Путешествие по России', 'en': 'Travel to Russia'},
    'image': travelToRussia,
    'description': {'ru': 'Практическая работа по созданию адаптивного одностраничного сайта', 'en': 'Practical work on creating an adaptive one-page website'},
    'demoLink': 'https://tearsoprah.github.io/russian-travel/',
    'codeLink': 'https://github.com/TearsOprah/russian-travel',
    'stack': ['БЭМ', 'Flex Box', 'Grid Layout', 'Adaptive'],
    'id': 5,
  },
  {
    'title': {'ru': 'Научиться учиться', 'en': 'How to learn'},
    'image': howToLearnImg,
    'description': {'ru': 'Практическая работа по созданию типового одностраничного сайта', 'en': 'Practical work on creating a typical one-page website'},
    'demoLink': 'https://tearsoprah.github.io/how-to-learn/',
    'codeLink': 'https://github.com/TearsOprah/how-to-learn',
    'stack': ['BEM', 'Flex Box'],
    'id': 6,
  },
]

export default projects;
