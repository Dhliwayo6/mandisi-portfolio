import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Interests from '@/components/Interests'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import styles from './Home.module.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}
