import FadeIn from './FadeIn'
import styles from './Skills.module.css'
import { skills, certifications } from '@/data/content'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <FadeIn>
          <div className="section-label">Skills</div>
          <h2 className="section-title">Technical toolkit</h2>
        </FadeIn>

        <div className={styles.grid}>
          {skills.map((s, i) => (
            <FadeIn key={s.category} delay={i * 0.07}>
              <div className={styles.group}>
                <div className={styles.category}>{s.category}</div>
                <div className={styles.pills}>
                  {s.items.map(item => (
                    <span key={item} className={styles.pill}>{item}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className={styles.certs}>
            <div className={styles.certsLabel}>Certifications</div>
            <div className={styles.certsGrid}>
              {certifications.map((c, i) => (
                <div key={i} className={styles.certCard}>
                  <div className={styles.certName}>{c.name}</div>
                  <div className={styles.certMeta}>{c.issuer} · {c.year}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
