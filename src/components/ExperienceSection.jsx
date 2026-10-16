import { useEffect, useRef } from 'react'
import { EXPERIENCE } from '../data'
import SectionLabel from './SectionLabel'

export default function ExperienceSection() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const rail = root.querySelector('.tl-rail')
    const rows = root.querySelectorAll('.tl-row')
    const onScroll = () => {
      const r = root.getBoundingClientRect()
      const mid = window.innerHeight * 0.5
      const total = r.height
      const traveled = Math.max(0, Math.min(total, mid - r.top))
      rail.style.setProperty('--rail', (traveled / total * 100) + '%')
      rows.forEach((row) => {
        const rr = row.getBoundingClientRect()
        row.classList.toggle('active', rr.top < mid && rr.bottom > mid - 80)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="04" name="Where I've been" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">A short <span className="italic">history.</span></h2>
            <p className="h2-sub reveal d1">
              Three roles and a degree, <em>most recent first.</em>
            </p>
          </div>
          <div className="timeline" ref={rootRef}>
            <div className="tl-rail" />
            {EXPERIENCE.map((e, i) => (
              <div className="tl-row reveal" key={i}>
                <div className="tl-dot" />
                <div className="tl-year">{e.year}</div>
                <div className="tl-role">
                  {e.italic ? <span className="italic">{e.role}</span> : e.role}
                </div>
                <div className="tl-co">{e.co}</div>
                <div className="tl-loc">{e.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
