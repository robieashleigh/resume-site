import styles from './Contact.module.css';

export default function Contact({ personal }) {
    const links = [
        { label: personal.email, href: `mailto:${personal.email}`, ariaLabel: 'Send email' },
        { label: 'LinkedIn', href: personal.linkedin, ariaLabel: 'LinkedIn profile', external: true },
        ...(personal.github ? [{ label: 'GitHub', href: personal.github, ariaLabel: 'GitHub profile', external: true }] : []),
        // { label: personal.phone, href: `tel:${personal.phone.replace(/\D/g, '')}`, ariaLabel: 'Phone number' },
    ];

    return (
        <section className={styles.band} id="contact" aria-labelledby="contact-heading">
            <div className={styles.inner}>
                <div className={styles.cta}>
                    <h2 className={styles.heading} id="contact-heading">Let's work together.</h2>
                    <p className={styles.note}>{personal.contactNote}</p>
                </div>
                <ul className={styles.links} role="list">
                    {links.map(({ label, href, ariaLabel, external }) => (
                        <li key={label}>
                            <a href={href} className={styles.link} aria-label={ariaLabel}
                                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}