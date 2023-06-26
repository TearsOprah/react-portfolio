import test_1_scr from "../assets/test_1_scr.png";
import test_1 from "../assets/test_1.png";
import test_2 from "../assets/test_2.png";

const testTasks = [
  {
    'title': {'ru': 'Простой интернет магазин', 'en': 'Simple online store'},
    'imageTask': test_1,
    'image': test_1_scr,
    'description': {'ru': 'В задании было предложено выполнить функционал клиентской части интернет магазина. К заданию был приложен примитивный дизайн png картинкой. На задание ушло около 8 часов неспешной работы', 'en': 'In the task, it was proposed to perform the functionality of the client part of the online store. A primitive png picture design was attached to the task. The task took about 8 hours of unhurried work'},
    'demoLink': 'https://frontend-test-aaccent-d6ye.vercel.app/',
    'codeLink': 'https://github.com/TearsOprah/frontend-test-aaccent',
    'stack': ['JS', 'React', 'Adaptive', 'Api' ],
    'id': 0,
  },
  {
    'title': {'ru': 'Корпоративный многостраничный сайт', 'en': 'Corporate website'},
    'image': test_2,
    'description': {'ru': 'В задании было предложено написать корпоративный сайт. К заданию был приложен дизайн главной страницы в формате psd для desktop экрана. В итоге мною был сделан адаптивный многостраничный сайт в виде spa приложения на React', 'en': 'In the assignment, it was suggested to write a corporate website. The design of the main page in psd format for the desktop screen was attached to the task. As a result, I made an adaptive multi-page website in the form of a spa application on React'},
    'demoLink': 'https://nls-test.vercel.app/',
    'codeLink': 'https://github.com/TearsOprah/NLS-test',
    'stack': ['JS', 'React', 'Adaptive'],
    'id': 1,
  },
]

export {testTasks};
