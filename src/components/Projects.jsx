import FadeIn from './FadeIn'
import styles from './Projects.module.css'
import { projects } from '@/data/content'

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className={`${styles.section} bleed-alt bleed-top`}>
      <div className="container">
        <FadeIn>
          <div className={styles.header}>
            <div>
              <div className="section-label">Work</div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Selected projects</h2>
            </div>
            <span className={styles.period}>2025 — ongoing</span>
          </div>
        </FadeIn>

        {/* Featured */}
        <FadeIn delay={0.1}>
          <div className={styles.featured}>
            <div className={styles.featuredLeft}>
              <div className={styles.featuredMeta}>
                <span className={styles.projNum}>{featured.id}</span>
                <span className="tag">{featured.subtitle}</span>
              </div>
              <h3 className={styles.projName}>{featured.name}</h3>
              <p className={styles.projDesc}>{featured.desc}</p>
              <div className={styles.tags}>
                {featured.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div className={styles.featuredRight}>
              <div className={styles.bigNum}>01</div>
            </div>
          </div>
        </FadeIn>

        <div className={styles.grid}>
          {rest.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <span className={styles.cardNum}>{p.id}</span>
                </div>
                <p className={styles.cardSubtitle}>{p.subtitle}</p>
                <p className={styles.projDesc} style={{ fontSize: 13 }}>{p.desc}</p>
                <div className={styles.tags} style={{ marginTop: 'auto' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className={styles.cardLink}>
                    View live →
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
