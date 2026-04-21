import { Link } from 'react-router-dom'
import FadeIn from './FadeIn'
import styles from './About.module.css'
import seatedImg from '@/assets/seated.jpg'

export default function About() {
  return (
    <section id="about" className={`${styles.section} bleed-bg bleed-bottom`}>
      <div className="container">
        <div className={styles.grid}>

          <FadeIn className={styles.text}>
            <div className="section-label">About</div>
            <h2 className={styles.heading}>
              Engineer.<br />
              <span className={styles.accent}>Builder.</span><br />
              Mentor.
            </h2>
            <p className={styles.body}>
              I'm a software engineer and recent WeThinkCode graduate with a background that cuts across biotechnology,
              cloud infrastructure, and full-stack development. I build things that are secure, maintainable, and built to last.
            </p>
            <p className={styles.body}>
              My journey is unconventional, from a Cum Laude Diploma in Biotechnology to deploying serverless
              applications on AWS, and that cross-disciplinary thinking shapes how I approach every engineering problem.
              I'm passionate about using technology to drive financial inclusion and economic opportunity across Africa.
            </p>
            <Link to="/article" className={styles.articleLink} data-hover="true">
              Read the full story about my journey →
            </Link>
          </FadeIn>

          <div className={styles.visuals}>
            <FadeIn delay={0.1} className={styles.imageWrap}>
              <img src={seatedImg} alt="Mandisi at a tech event" className={styles.image} />
            </FadeIn>

            <FadeIn delay={0.2} className={styles.statsRow}>
              <div className={styles.statCard}>
                <span className={styles.statNum}>5+</span>
                <span className={styles.statLabel}>Projects </span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>17</span>
                <span className={styles.statLabel}>Certifications & Licenses</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNum}>3</span>
                <span className={styles.statLabel}>Qualifications earned</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
