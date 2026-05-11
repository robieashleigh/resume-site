import styles from './Projects.module.css';

function ProjectCard({ number, title, description, tags, link }) {
  const CardWrapper = link ? 'a' : 'div';
  const linkProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <CardWrapper className={styles.card} {...linkProps}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags} role="list">
        {tags.map((tag) => <li key={tag} className={styles.tag}>{tag}</li>)}
      </ul>
    </CardWrapper>
  );
}

export default function Projects({ projects }) {
  return (
    <section className={`${styles.section} bg-off`} id="projects" aria-labelledby="projects-heading">
      <div className={styles.inner}>
        <p className="section-label" id="projects-heading">// Selected projects</p>
        <div className={styles.grid}>
          {projects.map((project) => <ProjectCard key={project.id} {...project} />)}
        </div>
      </div>
    </section>
  );
}