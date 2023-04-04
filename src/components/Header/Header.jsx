import {useState, useEffect} from "react";
import './Header.scss'

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function Header() {
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

  return (
    <header className="header">
      <div className={'header__branding'}>
        <h1>Заголовок</h1>
        <div>Logo</div>
      </div>
      <nav className="nav">

          <button className="menu-icon" onClick={handleMenuClick}>
            Меню
          </button>
          <ul className={`nav__list ${isOpenMenu ? "nav__list--open" : ""}`}>
            {navLinks.map((link, index) => (
              <li className="nav__item" key={index}>
                <a href={link.path} className="nav__link">
                  {link.title}
                </a>
              </li>
            ))}
            <button type="button">тема</button>
            <button type="button">язык</button>
          </ul>

      </nav>
    </header>
  );
}
