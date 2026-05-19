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
        <div className="deco-pl">— portrait —</div>
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
        <span>Index — Software Engineer · Bengaluru</span>
      </div>
      <HeroChars text="Adheesh." />
      <HeroTagSwap />

      <div className="hero-foot">
        {variant === 2 ? (
          <>
            <div className="hero-blurb reveal d3">
              Full-stack engineer with <em>seven years</em> across product, infra, and developer tools. Currently shaping platform work at a small team — and shipping <em>side projects</em> on weekends.
            </div>
            <div className="hero-meta reveal d4">
              <div><div className="k">Focus</div><div className="v"><em>Backend</em> · devtools</div></div>
              <div><div className="k">Stack</div><div className="v">Go · TS · Rust</div></div>
              <div><div className="k">Years</div><div className="v">07</div></div>
              <div><div className="k">Open to</div><div className="v"><em>Founding</em> roles</div></div>
            </div>
            <div className="hero-cta reveal d5">
              <Magnetic><a href="#work" className="btn btn-accent">View Work <span className="arr">→</span></a></Magnetic>
              <Magnetic><a href="#contact" className="btn btn-ghost">Say Hello</a></Magnetic>
            </div>
          </>
        ) : variant === 3 ? (
          <>
            <div className="hero-blurb reveal d3">
              <em>Seven years</em> of shipping software, mostly backend, occasionally beautiful. I write code the way I'd build furniture — slowly, on purpose, and with the grain showing.
            </div>
            <div className="hero-blurb reveal d4" style={{ color: 'var(--muted)' }}>
              Currently building <em>quietly</em>. Available for <em>founding</em> &amp; senior IC roles, Q3 2026.
            </div>
            <div className="hero-cta reveal d5">
              <Magnetic><a href="#work" className="btn btn-dark">View Work <span className="arr">→</span></a></Magnetic>
              <Magnetic><a href="mailto:hello@adheesh.in" className="btn btn-ghost">hello@adheesh.in</a></Magnetic>
            </div>
          </>
        ) : (
          <>
            <div className="hero-blurb reveal d3">
              Full-stack engineer with seven years across product, infra, and developer tools. Currently shaping platform work at a small team — and shipping <em>side projects</em> on weekends.
            </div>
            <div className="hero-meta reveal d4">
              <div><div className="k">Focus</div><div className="v"><em>Backend</em> · devtools</div></div>
              <div><div className="k">Stack</div><div className="v">Go · TS · Rust</div></div>
              <div><div className="k">Years</div><div className="v">07</div></div>
              <div><div className="k">Open to</div><div className="v"><em>Founding</em> roles</div></div>
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
