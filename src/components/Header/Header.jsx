import React from "react";
import { Link } from "react-router-dom";
import texts from "../../utils/texts.js";
import "./Header.scss";
import imgLogo from '../../assets/logo_m.png'

export default function Header({ setCurrentLang,
                                 currentLang,
                                 activeLink,
                                 handleLinkClick,
                                 handleMenuClick,
                                 isOpenMenu }) {
  const navLinks = [
    { title: texts[currentLang].home, path: "/", color: "red" },
    { title: texts[currentLang].projects, path: "/projects", color: "green" },
    { title: texts[currentLang].contacts, path: "/contacts", color: "blue" },
  ];

  const handleLang = () => {
    currentLang === "ru" ? setCurrentLang("en") : setCurrentLang("ru");
  };

  return (
    <header className="header">
      <div className={"header__branding"}>
        <h2 className={"header__title"}>TearsOprah</h2>
        <img className={"header__logo"} src={imgLogo}/>
      </div>

      <nav className="nav">
        <button className="menu-icon" onClick={handleMenuClick}>
          Меню
        </button>

        <ul className={`nav__list ${isOpenMenu ? "nav__list--open" : ""}`}>
          {navLinks.map((link, index) => (
            <li
              className={`nav__item ${
                activeLink === link.path ? "nav__item-active" : ""
              }`}
              key={index}
            >
              <div
                className="nav__icon"
                style={{ backgroundColor: link.color }}
              ></div>
              <Link
                to={link.path}
                className={`nav__link`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <button
            className={"header__button"}
            type="button"
            onClick={handleLang}
          >
            {currentLang === "ru" ? "en" : "ru"}
          </button>
        </ul>
      </nav>
    </header>
  );
}
