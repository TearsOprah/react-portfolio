import texts from "../../utils/texts.js";
import {Link} from "react-router-dom";
import projects from "../../utils/projects.js";
import "./Home.scss"
import birdsImg from "../../assets/birds.png"
import skills from "../../utils/skills.js";

export default function Home({ currentLang, handleLinkClick }) {
  return (
    <main className={'home'}>
      <div className={'presentation-container'}>
        <div className={'presentation-info'}>
          <h1 className={'presentation-name'}>{`${texts[currentLang].name}`}</h1>
          <p className={'presentation-name'}>{`${texts[currentLang].profession}`}</p>
          <p className={'presentation-tagline'}>{`${texts[currentLang].tagline}`}</p>
          <Link className="presentation-button button" onClick={() => handleLinkClick('/contacts')} to={'/contacts'}>{texts[currentLang].contactButton}</Link>
        </div>
        <div>
          <img className={'presentation-image'} src={birdsImg} alt={'portfolio author photo'} />
        </div>
      </div>

      <section className="projects-container">
        <div className="projects-header">
          <h2>{texts[currentLang].projects}</h2>
          <Link className="projects-link button" to="/projects" onClick={() => handleLinkClick('/projects')}>
            {texts[currentLang].linkToProjects}
          </Link>
        </div>
        <div className="projects-list">
          {projects.slice(3).reverse().map((project, i) => (
            <div key={i} className="projects-list-item">
              <Link to={`/projects/${project.id}`} onClick={() => handleLinkClick('/project')}>
                <img className="project-image" src={project.image} alt={project.title[currentLang]} />
                <h3 className="project-title">{project.title[currentLang]}</h3>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={'skills'}>
        <h3 className={'skills-title'}>{texts[currentLang].skills}</h3>
        <div className={'skills-container'}>
          {skills.map((skill, i) =>
            <div className={'skill-block'} key={i}>
              <h4 className={'skill-title'}>{skill.label[currentLang]}</h4>
              <div className={'skill-items'}>
                {skill.items.map((item, i) => <label key={i}>{item}</label>)}
              </div>
            </div>
          )}
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
