import styles from './Footer.module.css';

export default function Footer({ personal }) {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {year} {personal.name} · {personal.location}</p>
        <p>Built with React + Vite</p>
      </div>
    </footer>
  );
}