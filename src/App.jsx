import { useState, useEffect, useRef } from 'react'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Strip from './components/Strip'
import WorkSection from './components/WorkSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import NowSection from './components/NowSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import TimeChip from './components/TimeChip'
import TweaksPanel from './components/TweaksPanel'

const DEFAULTS = {
  bg: 'cream',
  accent: 'moss',
  serif: 'cormorant',
  heroVariant: 3,
  workLayout: 'cards',
  density: 'cozy',
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' })
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}

export default function App() {
  const [tweaks, setTweaks] = useState(DEFAULTS)
  const [tweaksOpen, setTweaksOpen] = useState(false)
  const cursorRef = useRef(null)
  const progressRef = useRef(null)

  const setTweak = (key, value) => setTweaks(prev => ({ ...prev, [key]: value }))

  useEffect(() => {
    document.body.dataset.bg = tweaks.bg
    document.body.dataset.accent = tweaks.accent
    document.body.dataset.serif = tweaks.serif
    document.body.dataset.density = tweaks.density
  }, [tweaks.bg, tweaks.accent, tweaks.serif, tweaks.density])

  useReveal()

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    let cx = -100, cy = -100, tx = -100, ty = -100
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; cursor.classList.add('active') }
    const onLeave = () => cursor.classList.remove('active')
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)
    let raf
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }
    loop()
    const hovEnter = () => cursor.classList.add('hovering')
    const hovLeave = () => cursor.classList.remove('hovering')
    const bind = () => {
      document.querySelectorAll('a, button, [data-hover="big"]').forEach((el) => {
        el.removeEventListener('mouseenter', hovEnter)
        el.removeEventListener('mouseleave', hovLeave)
        el.addEventListener('mouseenter', hovEnter)
        el.addEventListener('mouseleave', hovLeave)
      })
    }
    bind()
    const mo = new MutationObserver(bind)
    const root = document.getElementById('root')
    if (root) mo.observe(root, { childList: true, subtree: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
      mo.disconnect()
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = Math.min(100, (window.scrollY / Math.max(1, max)) * 100)
      if (progressRef.current) progressRef.current.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.metaKey) {
        setTweaksOpen(v => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Loader />
      <div className="progress" ref={progressRef} />
      <div className="cursor" ref={cursorRef} />
      <div className="work-preview" id="work-preview">
        <div className="frame">— project tile —</div>
      </div>

      <Nav />
      <Hero variant={tweaks.heroVariant} />
      <Strip />
      <WorkSection layout={tweaks.workLayout} />
      <AboutSection />
      <ExperienceSection />
      <NowSection />
      <SkillsSection />
      <ContactSection />

      <TimeChip />
      <button className="tweaks-trigger" onClick={() => setTweaksOpen(true)}>
        Tweaks
      </button>

      <TweaksPanel
        open={tweaksOpen}
        onClose={() => setTweaksOpen(false)}
        tweaks={tweaks}
        setTweak={setTweak}
      />
    </>
  )
}
