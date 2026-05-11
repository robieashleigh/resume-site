import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar({ name }) {
  const [first] = name.toLowerCase().split(' ');
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#" className={styles.logo} aria-label="Home">
          {first}<span className={styles.accent}>.dev</span>
        </a>
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}