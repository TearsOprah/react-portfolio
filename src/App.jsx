import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
