import { useEffect, useRef } from 'react'

export default function Nav() {
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    const links = nav.querySelectorAll('.nav-links a')
    const ids = ['work', 'about', 'experience', 'skills', 'contact']

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40)
      const midY = nav.getBoundingClientRect().bottom - 10
      const onAlt = [...document.querySelectorAll('.alt-band')].some((s) => {
        const r = s.getBoundingClientRect()
        return r.top <= midY && r.bottom >= midY
      })
      nav.classList.toggle('on-dark', onAlt)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const linkIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id
          links.forEach((l) => l.classList.toggle('active', l.dataset.section === id))
        }
      })
    }, { threshold: 0.4 })
    ids.forEach((id) => { const s = document.getElementById(id); if (s) linkIo.observe(s) })

    return () => { window.removeEventListener('scroll', onScroll); linkIo.disconnect() }
  }, [])

  return (
    <nav className="nav" ref={navRef}>
      <a href="#" className="brand">
        <div className="mark">A</div>
        <div>
          <div className="brand-name">Adheesh</div>
          <div className="brand-sub">Software · Engineer</div>
        </div>
      </a>
      <div className="nav-links">
        <a href="#work" data-section="work">Work</a>
        <a href="#about" data-section="about">About</a>
        <a href="#experience" data-section="experience">Experience</a>
        <a href="#skills" data-section="skills">Skills</a>
        <a href="#contact" data-section="contact">Contact</a>
      </div>
      <button
        className="nav-cta"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="nav-dot" />
        <span className="nav-cta-text">Contact</span>
      </button>
    </nav>
  )
}
