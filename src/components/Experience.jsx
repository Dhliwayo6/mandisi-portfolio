import FadeIn from './FadeIn'
import styles from './Experience.module.css'
import { experience, education } from '@/data/content'
import eventImg from '@/assets/event.jpg'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <FadeIn>
          <div className="section-label">Experience</div>
          <h2 className="section-title">Where I've been</h2>
        </FadeIn>

        <div className={styles.grid}>
          <div className={styles.expList}>
            {experience.map((e, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={styles.expItem}>
                  <div className={styles.expHeader}>
                    <div>
                      <h3 className={styles.expRole}>{e.role}</h3>
                      <div className={styles.expOrg}>{e.org} · {e.location}</div>
                    </div>
                    <span className={styles.expPeriod}>{e.period}</span>
                  </div>
                  <p className={styles.expDesc}>{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className={styles.sidebar}>
            <FadeIn delay={0.1} className={styles.imageWrap}>
              <img src={eventImg} alt="Tech community event" className={styles.image} />
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className={styles.eduCard}>
                <div className={styles.eduLabel}>Education</div>
                {education.map((e, i) => (
                  <div key={i} className={styles.eduItem}>
                    <div className={styles.eduQual}>{e.qualification}</div>
                    <div className={styles.eduInst}>{e.institution} · {e.period}</div>
                    {e.notes && <div className={styles.eduNotes}>{e.notes}</div>}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
