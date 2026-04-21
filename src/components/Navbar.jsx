import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useActiveSection } from '@/hooks/useActiveSection'

const HOME_SECTIONS = ['home', 'about', 'projects', 'skills', 'experience', 'interests', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const active = useActiveSection(HOME_SECTIONS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = HOME_SECTIONS.filter(s => s !== 'home')

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuIsOpen : ''}`}>
        <Link to="/" className={styles.logo}>TMC</Link>

        <div className={styles.links}>
          {navLinks.map(s => (
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

        <div className={styles.navRight}>
          <a
            href="/Taropafadzwa_Mandisi_Chitumwa_CV_2026.pdf"
            download="Mandisi_Chitumwa_CV.pdf"
            className={styles.cta}
          >
            Download CV
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.overlayGrid} />

        <div className={styles.overlayInner}>

          {/* Nav items */}
          <nav className={styles.overlayNav}>
            {navLinks.map((s, i) => (
              <button
                key={s}
                className={`${styles.overlayLink} ${isHome && active === s ? styles.overlayLinkActive : ''}`}
                onClick={() => scrollTo(s)}
                style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
              >
                <span className={styles.overlayLinkNum}>0{i + 1}</span>
                {s}
              </button>
            ))}
            <Link
              to="/article"
              className={`${styles.overlayLink} ${location.pathname === '/article' ? styles.overlayLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${navLinks.length * 0.06}s` : '0s' }}
            >
              <span className={styles.overlayLinkNum}>0{navLinks.length + 1}</span>
              article
            </Link>
          </nav>

          <div className={styles.overlayBottom}>
            <a
              href="/Taropafadzwa_Mandisi_Chitumwa_CV_2026.pdf"
              download="Taropafadzwa_Mandisi_Chitumwa_CV.pdf"
              className={`btn btn-primary ${styles.overlayBtn}`}
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
            <div className={styles.overlaySocials}>
              <a href="https://linkedin.com/in/taropafadzwa-chitumwa" target="_blank" rel="noreferrer" className={styles.socialLink}>LI</a>
              <a href="https://github.com/Dhliwayo6" target="_blank" rel="noreferrer" className={styles.socialLink}>GH</a>
              <a href="mailto:taromchitumwa@gmail.com" className={styles.socialLink}>@</a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}