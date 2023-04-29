import texts from "../../utils/texts.js";
import {testTasks} from "../../utils/testTasks.js";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";


export default function TestTasks({currentLang, handleLinkClick, animateProps}) {
  return (
    <section className={'projects-container'}>
      <div className="projects-header">
        <h2>{texts[currentLang].testTasks}</h2>
      </div>
      <div className="projects-list">
        {testTasks.map((project, i) =>
          <div key={i} className="projects-list-item">
            <Link to={`/tests/${project.id}`} onClick={() => handleLinkClick('/test')}>
              <motion.img {...animateProps} className="project-image" src={project.image} alt={project.title[currentLang]} />
              <motion.h3 {...animateProps} className="project-title">{project.title[currentLang]}</motion.h3>
            </Link>
          </div>)}
      </div>
    </section>
  )
}
