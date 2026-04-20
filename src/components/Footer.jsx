import styles from './Footer.module.css'

const sections = ['about', 'projects', 'skills', 'experience', 'interests', 'contact']

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>TMC</div>
      <div className={styles.mid}>Johannesburg · Built with passion</div>
      <div className={styles.links}>
        {sections.map(s => (
          <button key={s} className={styles.link} onClick={() => scrollTo(s)}>{s}</button>
        ))}
      </div>
    </footer>
  )
}
