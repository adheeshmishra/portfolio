import { useEffect, useRef } from 'react'
import { SKILLS, MAX_YEARS } from '../data'
import SectionLabel from './SectionLabel'

export default function SkillsSection() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const bars = root.querySelectorAll('.skill .bar i')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const pct = e.target.dataset.pct
          requestAnimationFrame(() => e.target.style.setProperty('--pct', pct + '%'))
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    bars.forEach((b) => io.observe(b))
    return () => io.disconnect()
  }, [])

  return (
    <section id="skills" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="06" name="Stack & Skills" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">The <span className="italic">toolkit.</span></h2>
            <p className="h2-sub reveal d1">
              Years and reaches. Not exhaustive — just the ones I'd still pick on a <em>Sunday afternoon</em>.
            </p>
          </div>
          <div className="skills-list" ref={rootRef}>
            {SKILLS.map((s, i) => {
              const pct = Math.round((s.years / MAX_YEARS) * 100)
              return (
                <div className={`skill reveal d${(i % 4) + 1}`} key={i}>
                  <div className="label-row">
                    <div className="sk-name">
                      {s.italic ? <span className="italic">{s.name}</span> : s.name}
                    </div>
                    <div className="sk-years">{s.years} yrs</div>
                  </div>
                  <div className="bar"><i data-pct={pct} /></div>
                  <div className="pills">
                    {s.related.map((t, j) => <span key={j}>{t}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
