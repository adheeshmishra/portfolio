import { useEffect, useRef, useState } from 'react'
import { TAGLINES } from '../data'
import Magnetic from './Magnetic'

function HeroChars({ text }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const chars = el.querySelectorAll('.char')
    chars.forEach((c, i) => setTimeout(() => c.classList.add('in'), 250 + i * 55))
  }, [text])
  return (
    <h1 className="hero-title" ref={ref}>
      {[...text].map((ch, i) => (
        <span key={i} className={`char${ch === '.' ? ' char-dot' : ''}`}>{ch}</span>
      ))}
    </h1>
  )
}

function HeroTagSwap() {
  const [idx, setIdx] = useState(0)
  const [out, setOut] = useState(false)
  useEffect(() => {
    const t = setInterval(() => {
      setOut(true)
      setTimeout(() => { setIdx(i => (i + 1) % TAGLINES.length); setOut(false) }, 500)
    }, 3800)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="hero-tag reveal d3">
      <span className={`swap${out ? ' out' : ''}`}>{TAGLINES[idx]}</span>
    </div>
  )
}

function HeroParallaxDeco() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => { el.style.transform = `translateY(${window.scrollY * 0.22}px)` }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="hero-deco" ref={ref}>
      <div className="frame">
        <div className="deco-lab">01 · INDEX</div>
        <img className="deco-img" src="/portrait.jpg" alt="" />
      </div>
    </div>
  )
}

export default function Hero({ variant }) {
  return (
    <section className="hero" id="home">
      <HeroParallaxDeco />
      <div className="hero-num reveal">
        <span>N° 01</span>
        <span className="sep">/</span>
        <span>Index — Senior Software Engineer · PharmaACE</span>
      </div>
      <HeroChars text="Adheesh." />
      <HeroTagSwap />

      <div className="hero-foot">
        {variant === 2 ? (
          <>
            <div className="hero-blurb reveal d3">
              Software engineer with <em>four years</em> across backend, data, and product. Currently building HR and payroll platforms at PharmaACE — and leading an <em>8-member</em> engineering team.
            </div>
            <div className="hero-meta reveal d4">
              <div><div className="k">Focus</div><div className="v"><em>Backend</em> · distributed systems</div></div>
              <div><div className="k">Stack</div><div className="v">Python · TS · SQL</div></div>
              <div><div className="k">Years</div><div className="v">04</div></div>
              <div><div className="k">Team</div><div className="v">Leads <em>8</em> engineers</div></div>
            </div>
            <div className="hero-cta reveal d5">
              <Magnetic><a href="#work" className="btn btn-accent">View Work <span className="arr">→</span></a></Magnetic>
              <Magnetic><a href="#contact" className="btn btn-ghost">Say Hello</a></Magnetic>
            </div>
          </>
        ) : variant === 3 ? (
          <>
            <div className="hero-blurb reveal d3">
              <em>Four years</em> of shipping software, mostly backend — rules engines, event-driven workflows, and query layers that stay fast at scale.
            </div>
            <div className="hero-blurb reveal d4" style={{ color: 'var(--muted)' }}>
              Currently <em>Senior Software Engineer</em> at PharmaACE, building salary and payroll platforms on FastAPI &amp; PostgreSQL.
            </div>
            <div className="hero-cta reveal d5">
              <Magnetic><a href="#work" className="btn btn-dark">View Work <span className="arr">→</span></a></Magnetic>
              <Magnetic><a href="mailto:adheeshmishra525@gmail.com" className="btn btn-ghost btn-mail">adheeshmishra525@gmail.com</a></Magnetic>
            </div>
          </>
        ) : (
          <>
            <div className="hero-blurb reveal d3">
              Software engineer with four years across backend, data, and product. Currently building HR and payroll platforms at PharmaACE — and leading an <em>8-member</em> engineering team.
            </div>
            <div className="hero-meta reveal d4">
              <div><div className="k">Focus</div><div className="v"><em>Backend</em> · distributed systems</div></div>
              <div><div className="k">Stack</div><div className="v">Python · TS · SQL</div></div>
              <div><div className="k">Years</div><div className="v">04</div></div>
              <div><div className="k">Team</div><div className="v">Leads <em>8</em> engineers</div></div>
            </div>
            <div className="hero-cta reveal d5">
              <Magnetic><a href="#work" className="btn btn-dark">View Work <span className="arr">→</span></a></Magnetic>
              <Magnetic><a href="#contact" className="btn btn-ghost">Say Hello</a></Magnetic>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
