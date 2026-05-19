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
        <div className="p-lab">Portrait</div>
        <div className="p-pl">— your photo here —</div>
      </div>
      <div className="portrait-cap">
        <span>Bengaluru</span><span>2026</span>
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
                A <span className="italic">software engineer</span> who treats interfaces with the same care as databases.
              </h3>
              <p className="reveal d2">
                I build calm, well-considered tools. Mostly backend and full-stack, with a soft spot for developer experience and the small interactions that make products feel alive.
              </p>
              <p className="reveal d3">
                I care about the <em>small moments</em> — the right query plan, the cleanest API surface, the exact easing of a tooltip. The difference between fine and great lives there.
              </p>
              <p className="reveal d4">
                Before this, I studied CS and spent four years on the platform team at a Series-B startup. Outside work I read a lot, run slowly, and write occasionally.
              </p>
              <div className="about-stats">
                <div className="reveal d1"><div className="stat-num">07</div><div className="stat-label">Years shipping</div></div>
                <div className="reveal d2"><div className="stat-num">32</div><div className="stat-label">Projects shipped</div></div>
                <div className="reveal d3"><div className="stat-num">∞</div><div className="stat-label">Cups of chai</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
