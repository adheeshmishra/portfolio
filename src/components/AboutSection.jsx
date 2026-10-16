import { useEffect, useRef } from 'react'
import SectionLabel from './SectionLabel'

function PortraitParallax() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const r = el.parentElement.getBoundingClientRect()
      const wh = window.innerHeight
      const p = (wh / 2 - (r.top + r.height / 2)) / (wh / 2 + r.height / 2)
      el.style.transform = `translateY(${p * 30}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="portrait-wrap reveal">
      <div className="portrait" ref={ref}>
        <img className="p-img" src="/portrait.jpg" alt="Adheesh Mishra" />
      </div>
      <div className="portrait-cap">
        <span>Adheesh Mishra</span><span>2026</span>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about">
      <div className="sec-row">
        <SectionLabel num="03" name="About" />
        <div>
          <div className="about-grid">
            <PortraitParallax />
            <div className="about-body">
              <h3 className="reveal d1">
                A <span className="italic">backend engineer</span> who cares about correctness as much as speed.
              </h3>
              <p className="reveal d2">
                I'm a Senior Software Engineer at PharmaACE, where I architected a configurable salary increment platform on FastAPI and PostgreSQL — with asynchronous approval workflows on Amazon SQS, idempotent consumers, and point-in-time payroll reconstruction for audit.
              </p>
              <p className="reveal d3">
                I care about the <em>details that hold up under load</em> — row-level locking and optimistic concurrency, normalized schemas with targeted indexes, keyset pagination that takes deep pages from ~1.8s to ~50ms.
              </p>
              <p className="reveal d4">
                Before PharmaACE, I owned the Distributor and Internal Manager portals at HealthAssure and migrated production to AWS with Terraform. I studied at SGSITS, Indore, and today lead an 8-member cross-functional team.
              </p>
              <div className="about-stats">
                <div className="reveal d1"><div className="stat-num">04</div><div className="stat-label">Years shipping</div></div>
                <div className="reveal d2"><div className="stat-num">255+</div><div className="stat-label">API endpoints</div></div>
                <div className="reveal d3"><div className="stat-num">08</div><div className="stat-label">Engineers led</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
