import { useParams } from 'react-router-dom';
import texts from "../../utils/texts.js";
import { motion } from "framer-motion";

export default function TestTask({ testTasks, currentLang, animateProps }) {
  const params = useParams();
  const project = testTasks[parseInt(params.id)];

  if (!project) {
    return <h2 className={'project__title'}>Project not found</h2>;
  }

  return (
    <motion.section className="project" {...animateProps}>
      <h2 className={'project__title'}>{project.title[currentLang]}</h2>
      {project.imageTask && <img className={'project__image'} src={project.imageTask} alt={project.title[currentLang]}/>}
      {project.image && <img className={'project__image'} src={project.image} alt={project.title[currentLang]}/>}
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
    </motion.section>
  );
}
