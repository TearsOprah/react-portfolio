import texts from "../../utils/texts.js";
import projects from "../../utils/projects.js";
import {Link} from "react-router-dom";

export default function Projects({ currentLang, handleLinkClick }) {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h2>{texts[currentLang].projects}</h2>
      </div>
      <div className="projects-list">
        {projects.reverse().map((project, i) =>
          <div key={i} className="projects-list-item">
            <Link to={`/projects/${project.id}`} onClick={() => handleLinkClick('/project')}>
              <img className="project-image" src={project.image} alt={project.title[currentLang]} />
              <h3 className="project-title">{project.title[currentLang]}</h3>
            </Link>
          </div>)}
      </div>
    </section>
  )
}
