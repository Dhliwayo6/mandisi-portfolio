import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useActiveSection } from '@/hooks/useActiveSection'

const HOME_SECTIONS = ['home', 'about', 'projects', 'skills', 'experience', 'interests', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(HOME_SECTIONS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>TMC</Link>

      <div className={styles.links}>
        {HOME_SECTIONS.filter(s => s !== 'home').map(s => (
          <button
            key={s}
            className={`${styles.link} ${isHome && active === s ? styles.active : ''}`}
            onClick={() => scrollTo(s)}
          >
            {s}
          </button>
        ))}
        <Link
          to="/article"
          className={`${styles.link} ${location.pathname === '/article' ? styles.active : ''}`}
        >
          article
        </Link>
      </div>

      <a
        href="/Taropafadzwa_Mandisi_Chitumwa_CV_2026.pdf"
        download="Mandisi_Chitumwa_CV.pdf"
        className={styles.cta}
      >
        Download CV
      </a>
    </nav>
  )
}
