import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Software Engineer · Johannesburg
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameLine}>Taropafadzwa</span>
          <span className={`${styles.nameLine} ${styles.accent}`}>
            Mandisi
          </span>
          <span className={styles.nameLine}>Chitumwa</span>
        </h1>

        <p className={styles.sub}>
          Software engineer. Former scientist. Perpetual problem solver.
        </p>

        <div className={styles.btns}>
          <button
            className="btn btn-primary"
            onClick={() => scrollTo('projects')}
          >
            View work
          </button>

          <button
            className="btn btn-outline"
            onClick={() => scrollTo('contact')}
          >
            Get in touch
          </button>

          <Link to="/article" className={`btn ${styles.articleBtn}`}>
            Read my story →
          </Link>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaNum}>5+</span>
            <span className={styles.metaLabel}>Projects</span>
          </div>

          <div className={styles.metaDivider} />

          <div className={styles.metaItem}>
            <span className={styles.metaNum}>17</span>
            <span className={styles.metaLabel}>
              Certifications & Licenses
            </span>
          </div>

          <div className={styles.metaDivider} />

          <div className={styles.metaItem}>
            <span className={styles.metaNum}>3</span>
            <span className={styles.metaLabel}>
              Qualifications earned
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}