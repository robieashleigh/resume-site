import styles from './Hero.module.css';

export default function Hero({ personal, stats }) {
  const [firstName, lastName] = personal.name.split(' ');
  return (
    <section className={styles.hero} id="about" aria-label="Introduction">
      <div className={styles.ringOuter} aria-hidden="true" />
      <div className={styles.ringInner} aria-hidden="true" />
      <div className={styles.content}>
        {/* Tagline badge — comment out to hide, uncomment to show availability */}
        {/* <div className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          {personal.tagline}
        </div> */}
        <h1 className={styles.headline}>
          {personal.title}<br />
          <em className={styles.nameAccent}>{firstName}</em><br />
          {lastName}.
        </h1>
        <p className={styles.summary}>{personal.summary}</p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View my work</a>
          <a href="#contact" className={styles.btnOutline}>Get in touch</a>
        </div>
        <dl className={styles.statsStrip}>
          {stats.map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <dt className={styles.statNum}>{value}</dt>
              <dd className={styles.statLabel}>{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}