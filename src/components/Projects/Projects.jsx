import texts from "../../utils/texts.js";
import projects from "../../utils/projects.js";

export default function Projects({currentLang}) {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h2>{texts[currentLang].projects}</h2>
      </div>
      <div className="projects-list">
        {projects.reverse().map((project, i) =>
          <div key={i} className="projects-list-item">
            <img className="project-image" src={project.image} />
            <h3 className="project-title">{project.title}</h3>
          </div>)}
      </div>
    </section>
  )
}
