import FadeIn from './FadeIn'
import styles from './Contact.module.css'

const links = [
  { icon: '@', label: 'taromchitumwa@gmail.com', href: 'mailto:taromchitumwa@gmail.com' },
  { icon: 'in', label: 'linkedin.com/in/taropafadzwa-chitumwa', href: 'https://linkedin.com/in/taropafadzwa-chitumwa' },
  { icon: 'gh', label: 'github.com/Dhliwayo6', href: 'https://github.com/Dhliwayo6' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          <FadeIn className={styles.left}>
            <div className="section-label">Contact</div>
            <h2 className={styles.heading}>
              Let's build<br />
              something <span className={styles.accent}>impactful.</span>
            </h2>
            
            <div className={styles.body}>
              <p>
                I am a versatile software engineer passionate about solving complex problems through clean code and scalable infrastructure. Trained in WeThinkCode_'s rigorous peer-to-peer learning model with no lecturers, I developed a research-driven, "forever learning" attitude. This environment taught me to be intensely curious and independently figure things out, rather than waiting for answers to be handed to me.
              </p>
              <br />
              <p>
                I am currently seeking <strong>graduate, internship, or junior opportunities</strong> where I can add immediate value in Backend (Java, Spring Boot, Python), Full Stack, or Cloud & DevOps roles.
              </p>
              <br />
              <p>
                <strong>For Small to Medium Enterprises:</strong> Beyond corporate roles, I partner with SMEs to build digital solutions that drive growth. Having successfully delivered web projects for the construction sector, I know how to translate business needs into custom, high-performing websites and web applications.
              </p>
              <br />
              <p>
                Whether you are a tech team looking for a dedicated engineer who knows how to adapt and deliver, or a business looking to upgrade its digital presence, I would love to hear from you.
              </p>
            </div>

            <div className={styles.contactLinks}>
              {links.map(l => (
                <a key={l.href} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.contactLink}>
                  <span className={styles.contactIcon}>{l.icon}</span>
                  <span>{l.label}</span>
                </a>
              ))}
              <div className={styles.contactMeta}>078-340-4259 · Johannesburg, Gauteng</div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className={styles.right}>
            <a href="mailto:taromchitumwa@gmail.com" className={`btn btn-primary ${styles.actionBtn}`}>
              Send me an email
            </a>
            <a href="https://www.linkedin.com/in/taropafadzwa-chitumwa-7681b2206/" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.actionBtn}`}>
              Connect on LinkedIn
            </a>
            <a href="https://github.com/Dhliwayo6" target="_blank" rel="noreferrer" className={`btn btn-outline ${styles.actionBtn}`}>
              View GitHub
            </a>
            <a
              href="/Taropafadzwa_Mandisi_Chitumwa_CV_2026.pdf"
              download="Taropafadzwa_Mandisi_Chitumwa_CV.pdf"
              className={`btn btn-outline ${styles.actionBtn}`}
            >
              Download CV
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}