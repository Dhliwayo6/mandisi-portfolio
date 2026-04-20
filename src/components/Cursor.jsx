import { useEffect, useRef, useState } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
  const dot = dotRef.current
  const ring = ringRef.current

  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0

  const onMove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY

    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
  }

  const animate = () => {
    ringX += (mouseX - 18 - ringX) * 0.15
    ringY += (mouseY - 18 - ringY) * 0.15

    ring.style.transform = `translate(${ringX}px, ${ringY}px)`

    requestAnimationFrame(animate)
  }

  animate()

  const onEnter = (e) => {
    if (e.target.closest('a, button, [data-hover]')) setHovering(true)
  }

  const onLeave = (e) => {
    if (e.target.closest('a, button, [data-hover]')) setHovering(false)
  }

  window.addEventListener('mousemove', onMove)
  document.addEventListener('mouseover', onEnter)
  document.addEventListener('mouseout', onLeave)

  return () => {
    window.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseover', onEnter)
    document.removeEventListener('mouseout', onLeave)
  }
}, [])
  return (
    <>
      <div ref={dotRef} className={`${styles.dot} ${hovering ? styles.dotHover : ''}`} />
      <div ref={ringRef} className={`${styles.ring} ${hovering ? styles.ringHover : ''}`} />
    </>
  )
}
