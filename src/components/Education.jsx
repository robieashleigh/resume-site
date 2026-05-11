import styles from './Education.module.css';

export default function Education({ education }) {
  return (
    <section className={`${styles.section} bg-white`} id="education" aria-labelledby="education-heading">
      <div className={styles.inner}>
        <p className="section-label" id="education-heading">// Education</p>
        {education.map(({ id, school, location, period, degree, minor, gpa, highlights }) => (
          <div key={id} className={styles.entry}>
            <div className={styles.meta}>
              <time className={styles.period}>{period}</time>
              <span className={styles.school}>{school}</span>
              <span className={styles.location}>{location}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.degree}>{degree}</h3>
              <p className={styles.sub}>{minor}&nbsp;&nbsp;·&nbsp;&nbsp;GPA {gpa}</p>
              <ul className={styles.highlights} role="list">
                {highlights.map(({ title, description }) => (
                  <li key={title} className={styles.highlight}>
                    <strong className={styles.highlightTitle}>{title}</strong>
                    <span className={styles.highlightDesc}>{description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}