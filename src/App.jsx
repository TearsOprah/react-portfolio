import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import './App.css'

function App() {

  // мультиязычность
  const [currentLang, setCurrentLang] = useState('ru')

  return (
    <div className="wrapper">
      <Header setCurrentLang={setCurrentLang} currentLang={currentLang} />
      <Routes>
        <Route path={'/'} element={<Home currentLang={currentLang} />} />
        <Route path={'/projects'} element={<Projects currentLang={currentLang} />} />
        <Route path={'/contacts'} element={<Contacts />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
