import texts from "../../utils/texts.js";
import projects from "../../utils/projects.js";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects({ currentLang, handleLinkClick, animateProps }) {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h2>{texts[currentLang].projects}</h2>
      </div>
      <div className="projects-list">
        {projects.map((project, i) =>
          <div key={i} className="projects-list-item">
            <Link to={`/projects/${project.id}`} onClick={() => handleLinkClick('/project')}>
              <motion.img {...animateProps} className="project-image" src={project.image} alt={project.title[currentLang]} />
              <motion.h3 {...animateProps} className="project-title">{project.title[currentLang]}</motion.h3>
            </Link>
          </div>)}
      </div>
    </section>
  )
}
