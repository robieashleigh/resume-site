import styles from './Experience.module.css';

function ExperienceItem({ role, company, location, period, bullets }) {
  return (
    <article className={styles.item}>
      <div className={styles.meta}>
        <time className={styles.period}>{period}</time>
        <span className={styles.company}>{company}</span>
        <span className={styles.location}>{location}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.role}>{role}</h3>
        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default function Experience({ experience }) {
  return (
    <section className={`${styles.section} bg-white`} id="experience" aria-labelledby="experience-heading">
      <div className={styles.inner}>
        <p className="section-label" id="experience-heading">// Experience</p>
        <div className={styles.list}>
          {experience.map((job) => <ExperienceItem key={job.id} {...job} />)}
        </div>
      </div>
    </section>
  );
}