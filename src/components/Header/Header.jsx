import {useState, useEffect} from "react";
import './Header.scss'
import {Link} from "react-router-dom";
import texts from "../../utils/texts.js";

export default function Header({setCurrentLang, currentLang}) {

  const navLinks = [
    { title: texts[currentLang].home, path: "/" },
    { title: texts[currentLang].projects, path: "/projects" },
    { title: texts[currentLang].contacts, path: "/contacts" },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // смена языка
  const handleLang = () => {
    currentLang === 'ru' ? setCurrentLang('en') : setCurrentLang('ru')
  }

  return (
    <header className="header">

      <div className={'header__branding'}>
        <h2>TearsOprah</h2>
        <div>Logo</div>
      </div>

      <nav className="nav">

          <button className="menu-icon" onClick={handleMenuClick}>
            Меню
          </button>

          <ul className={`nav__list ${isOpenMenu ? "nav__list--open" : ""}`}>
            {navLinks.map((link, index) => (
              <li className="nav__item" key={index}>
                <Link to={link.path} className="nav__link">
                  {link.title}
                </Link>
              </li>
            ))}
            <button type="button">тема</button>
            <button type="button" onClick={handleLang}>{currentLang}</button>
          </ul>

      </nav>
    </header>
  );
}
