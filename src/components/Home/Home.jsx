import texts from "../../utils/texts.js";
import {Link} from "react-router-dom";
import projects from "../../utils/projects.js";

export default function Home({currentLang}) {
  return (
    <main>
      <h1>{`${texts[currentLang].name} ${texts[currentLang].profession}`}</h1>
      <button>{texts[currentLang].contactButton}</button>

      <section className="projects-container">
        <div className="projects-header">
          <h2>{texts[currentLang].projects}</h2>
          <Link className="projects-link" to={'/projects'}>{texts[currentLang].linkToProjects}</Link>
        </div>
        <div className="projects-list">
          {projects.slice(3).reverse().map((project, i) => <div key={i} className="project-title">{project.title}</div>)}
        </div>
      </section>

      <section className="contacts-container">
        <p className="contacts-description"></p>
        <div className="contacts-list">

        </div>
      </section>

    </main>
  )
}