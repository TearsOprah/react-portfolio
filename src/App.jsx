import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {useState, useEffect} from "react";
import './App.scss'
import Project from "./components/Project/Project";
import projects from "./utils/projects.js";
import {testTasks} from "./utils/testTasks.js";
import TestTask from "./components/TestTask/TestTask.jsx";

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

  // настройки анимации

  const animateProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  };


  return (
    <>
      {/*<Canvas />*/}
      <div className="wrapper">
        <Header setCurrentLang={setCurrentLang}
                currentLang={currentLang}
                isOpenMenu={isOpenMenu}
                activeLink={activeLink}
                handleLinkClick={handleLinkClick}
                handleMenuClick={handleMenuClick}
                animateProps={animateProps}
        />
        <Routes>
          <Route path={'/'} element={<Home currentLang={currentLang}
                                           handleLinkClick={handleLinkClick}
                                           animateProps={animateProps}/>} />
          <Route path={'/projects'} element={<Projects currentLang={currentLang}
                                                       handleLinkClick={handleLinkClick}
                                                       animateProps={animateProps} />} />
          <Route path={'/contacts'} element={<Contacts currentLang={currentLang}
                                                       animateProps={animateProps}/>} />
          <Route path="/projects/:id" element={<Project currentLang={currentLang}
                                                        projects={projects}
                                                        animateProps={animateProps}/>} />
          <Route path="/tests/:id" element={<TestTask currentLang={currentLang}
                                                     testTasks={testTasks}
                                                     animateProps={animateProps}/>} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
        <Footer handleLinkClick={handleLinkClick}
                currentLang={currentLang}
                animateProps={animateProps} />
      </div>
    </>
  )
}

export default App
