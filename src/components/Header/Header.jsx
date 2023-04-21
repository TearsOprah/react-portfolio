import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import texts from "../../utils/texts.js";
import "./Header.scss";

export default function Header({ setCurrentLang, currentLang }) {
  const navLinks = [
    { title: texts[currentLang].home, path: "/", color: "red" },
    { title: texts[currentLang].projects, path: "/projects", color: "green" },
    { title: texts[currentLang].contacts, path: "/contacts", color: "blue" },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

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

  const handleLang = () => {
    currentLang === "ru" ? setCurrentLang("en") : setCurrentLang("ru");
  };

  return (
    <header className="header">
      <div className={"header__branding"}>
        <h2 className={"header__title"}>TearsOprah</h2>
        <div className={"header__logo"}>Logo</div>
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
                onClick={() => setActiveLink(link.path)}
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
