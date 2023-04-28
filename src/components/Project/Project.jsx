import { useParams } from 'react-router-dom';
import './Project.scss'

export default function Project({ projects, currentLang }) {
  const params = useParams();
  const project = projects[parseInt(params.id)];

  if (!project) {
    return <h2 className={'project__title'}>Project not found</h2>;
  }

  return (
    <section className="project">
      <h2 className={'project__title'}>{project.title[currentLang]}</h2>
      <p className={'project__description'}>{project.description[currentLang]}</p>
      <img className={'project__image'} src={project.image}/>
      <div className={'project__stack'}>
        {project.stack.map((item, i) =>
          <span>{item}</span>
        )}
      </div>
      <div className={'project__links'}>
        <a href={project.demoLink} target={'_blank'} className={'project__button button'}>Демо</a>
        <a href={project.codeLink} target={'_blank'} className={'project__button button'}>Код</a>
      </div>
    </section>
  );
}
