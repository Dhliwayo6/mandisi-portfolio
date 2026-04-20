import styles from './Marquee.module.css'
import {
  SiPython,
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiReact,
  SiJunit5,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiGithubactions
} from "react-icons/si";

const ROW1 = [
  { icon: SiPython, label: 'Python' },
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiMysql, label: 'SQL' },
  { icon: SiSpringboot, label: 'Spring Boot' },
  { icon: SiReact, label: 'React' },
  { icon: SiJunit5, label: 'JUnit' },
  { icon: SiFastapi, label: 'FastAPI' },
  { icon: SiFlask, label: 'Flask' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiGithubactions, label: 'GitHub Actions' },
];


function Track({ items, direction = 'left', variant = 'dark' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`${styles.track} ${styles[variant]}`}>
      <div className={`${styles.inner} ${direction === 'right' ? styles.reverse : ''}`}>
        {doubled.map((item, i) => {
          const Icon = item.icon

          return (
            <span key={i} className={styles.pill}>
              <span className={styles.symbol}>
                <Icon />
              </span>
              <span className={styles.label}>{item.label}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className={styles.wrapper}>
      <Track items={ROW1} direction="left"  variant="dark" />
    </div>
  )
}