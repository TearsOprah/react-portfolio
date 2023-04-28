import howToLearnImg from '../assets/howtolearn.png';
import travelToRussia from '../assets/TraveltoRussia.png';
import mestoJS from '../assets/mestoJS.png';
import mestoAuth from '../assets/mestoAuth.png';
import courses from '../assets/courses.png';

const projects = [
  {
    'title': {'ru': 'Подборки курсов', 'en': 'Course selections'},
    'image': courses,
    'description': {'ru': 'Приложение с подборками образовательных курсов', 'en': 'An application with a selection of educational courses'},
    'demoLink': 'https://react-courses-frontend.vercel.app/',
    'codeLink': 'https://github.com/TearsOprah/react-courses-frontend',
    'stack': ['JS', 'React', 'Flex Box', 'Grid Layout', 'Adaptive', 'Api' ],
    'id': 0,
  },
  {
    'title': {'ru': 'место на React', 'en': 'mesto-react'},
    'image': mestoJS,
    'description': {'ru': 'Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки на свои и чужие карточки', 'en': 'An interactive page where you can add photos, delete them and put likes on your own and other people\'s cards'},
    'demoLink': 'https://mesto-react-opal.vercel.app/',
    'codeLink': 'https://github.com/TearsOprah/mesto-react',
    'stack': ['JS', 'React', 'BEM', 'OOP', 'Api', 'Adaptive'],
    'id': 1,
  },
  {
    'title': {'ru': 'место на React c авторизацией', 'en': 'mesto-react with auth'},
    'image': mestoAuth,
    'description': {'ru': 'Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки на свои и чужие карточки. Регистрация и авторизация пользователей', 'en': 'An interactive page where you can add photos, delete them and put likes on your own and other people\'s cards. Registration and authorization of users'},
    'demoLink': 'https://react-mesto-auth-xi.vercel.app/sign-in',
    'codeLink': 'https://github.com/TearsOprah/react-mesto-auth',
    'stack': ['JS', 'React', 'BEM', 'OOP', 'Api', 'Adaptive',],
    'id': 2,
  },
  {
    'title': {'ru': 'место', 'en': 'mesto'},
    'image': mestoJS,
    'description': {'ru': 'Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки на свои и чужие карточки', 'en': 'An interactive page where you can add photos, delete them and put likes on your own and other people\'s cards'},
    'demoLink': 'https://tearsoprah.github.io/mesto/',
    'codeLink': 'https://github.com/TearsOprah/mesto',
    'stack': ['JS', 'Adaptive', 'BEM', 'OOP', 'Webpack', 'Api'],
    'id': 3,
  },
  {
    'title': {'ru': 'Путешествие по России', 'en': 'Travel to Russia'},
    'image': travelToRussia,
    'description': {'ru': 'Практическая работа по созданию адаптивного одностраничного сайта', 'en': 'Practical work on creating an adaptive one-page website'},
    'demoLink': 'https://tearsoprah.github.io/russian-travel/',
    'codeLink': 'https://github.com/TearsOprah/russian-travel',
    'stack': ['БЭМ', 'Flex Box', 'Grid Layout', 'Adaptive'],
    'id': 4,
  },
  {
    'title': {'ru': 'Научиться учиться', 'en': 'How to learn'},
    'image': howToLearnImg,
    'description': {'ru': 'Практическая работа по созданию типового одностраничного сайта', 'en': 'Practical work on creating a typical one-page website'},
    'demoLink': 'https://tearsoprah.github.io/how-to-learn/',
    'codeLink': 'https://github.com/TearsOprah/how-to-learn',
    'stack': ['BEM', 'Flex Box'],
    'id': 5,
  },
]

export default projects;
