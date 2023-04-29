import React from "react";
import { Link } from "react-router-dom";
import texts from "../../utils/texts.js";
import "./Header.scss";
import imgLogoWhite from '../../assets/white.gif'
import menuImg from '../../assets/menu.svg'
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ setCurrentLang,
                                 currentLang,
                                 activeLink,
                                 handleLinkClick,
                                 handleMenuClick,
                                 isOpenMenu,
                                 animateProps }) {
  const navLinks = [
    { title: texts[currentLang].home, path: "/", color: "#C778DD" },
    { title: texts[currentLang].projects, path: "/projects", color: "#ff3f69" },
    { title: texts[currentLang].contacts, path: "/contacts", color: "#ea6e0e" },
  ];

  const handleLang = () => {
    currentLang === "ru" ? setCurrentLang("en") : setCurrentLang("ru");
  };

  return (
    <motion.header className="header" {...animateProps}>
      <div className={"header__branding"}>
        <Link to={"/"} onClick={() => handleLinkClick("/")}>
          <h2 className={"header__title"}>TearsOprah</h2>
        </Link>
        <img className={"header__logo"} src={imgLogoWhite} alt="Logo" />
      </div>

      <nav className="nav">
        <button className="menu-icon" onClick={handleMenuClick}>
          <img src={menuImg} alt="Menu" />
        </button>

        <AnimatePresence>
          {isOpenMenu && (
            <motion.ul
              className={`nav__list motion ${
                isOpenMenu ? "nav__list--open" : ""
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  className={`nav__item ${
                    activeLink === link.path ? "nav__item-active" : ""
                  }`}
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </motion.li>
              ))}
              <button
                className={"header__button button"}
                type="button"
                onClick={handleLang}
              >
                {currentLang === "ru" ? "en" : "ru"}
              </button>
            </motion.ul>
          )}
        </AnimatePresence>

        {!isOpenMenu && (
          <ul className={`nav__list`}>
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
              className={"header__button button"}
              type="button"
              onClick={handleLang}
            >
              {currentLang === "ru" ? "en" : "ru"}
            </button>
          </ul>
        )}
      </nav>
    </motion.header>
  );

}
