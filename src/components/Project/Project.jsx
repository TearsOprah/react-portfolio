import { useParams } from 'react-router-dom';
import './Project.scss'
import texts from "../../utils/texts.js";

export default function Project({ projects, currentLang }) {
  const params = useParams();
  const project = projects[parseInt(params.id)];

  if (!project) {
    return <h2 className={'project__title'}>Project not found</h2>;
  }

  return (
    <section className="project">
      <h2 className={'project__title'}>{project.title[currentLang]}</h2>
      <img className={'project__image'} src={project.image} alt={project.title[currentLang]}/>
      <p className={'project__description'}>{project.description[currentLang]}</p>
      <div className={'project__stack'}>
        {texts[currentLang].tech}:
        {project.stack.map((item, i) =>
          <span key={i}>{item}</span>
        )}
      </div>
      <div className={'project__links'}>
        <a href={project.demoLink} target={'_blank'} className={'project__button button'}>{texts[currentLang].demo}</a>
        <a href={project.codeLink} target={'_blank'} className={'project__button button'}>{texts[currentLang].code}</a>
      </div>
    </section>
  );
}
