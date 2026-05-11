import styles from './Skills.module.css';

export default function Skills({ skills }) {
  return (
    <section className={`${styles.section} bg-off`} id="skills" aria-labelledby="skills-heading">
      <div className={styles.inner}>
        <p className="section-label" id="skills-heading">// Skills &amp; stack</p>
        <div className={styles.groups}>
          {skills.map(({ group, items, level }) => (
            <div key={group} className={styles.group}>
              <h3 className={styles.groupTitle}>{group}</h3>
              <ul className={styles.chipList} role="list">
                {items.map((item) => (
                  <li key={item} className={`${styles.chip} ${styles[level]}`}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}