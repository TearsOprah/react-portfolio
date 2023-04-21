import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {useState, useEffect} from "react";
import './App.css'

function App() {

  // мультиязычность
  const [currentLang, setCurrentLang] = useState('ru')

  // активная ссылка
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  const handleLinkClick = (link) => {
    setIsOpenMenu(false);
    setActiveLink(link)
  }

  // меню для малой ширины экрана
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
    <div className="wrapper">
      <Header setCurrentLang={setCurrentLang}
              currentLang={currentLang}
              isOpenMenu={isOpenMenu}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              handleMenuClick={handleMenuClick}
      />
      <Routes>
        <Route path={'/'} element={<Home currentLang={currentLang}
                                         handleLinkClick={handleLinkClick} />} />
        <Route path={'/projects'} element={<Projects currentLang={currentLang} />} />
        <Route path={'/contacts'} element={<Contacts />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
