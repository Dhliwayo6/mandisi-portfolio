import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.35 }
    )
    elements.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ids.join(',')])

  return active
}
