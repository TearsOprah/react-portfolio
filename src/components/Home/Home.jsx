import texts from "../../utils/texts.js";
import {Link} from "react-router-dom";
import projects from "../../utils/projects.js";
import "./Home.scss"

export default function Home({currentLang}) {
  return (
    <main>
      <div className={'presentation-container'}>
        <div className={'presentation-info'}>
          <h1 className={'presentation-name'}>{`${texts[currentLang].name}`}</h1>
          <p className={'presentation-name'}>{`${texts[currentLang].profession}`}</p>
          <p className={'presentation-tagline'}>{`${texts[currentLang].tagline}`}</p>
          <button className={'presentation-button'}>{texts[currentLang].contactButton}</button>
        </div>
        <div>
          <img className={'presentation-image'} src={'https://i.pinimg.com/originals/42/e5/bc/42e5bcb99c7dd3f93a652df702bc33b1.png'} alt={'portfolio author photo'} />
        </div>
      </div>

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
