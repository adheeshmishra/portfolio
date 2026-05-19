import Magnetic from './Magnetic'

const LeafSvg = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 22c0-7 0-12 8-18C12 6 12 13 12 22z" />
    <path d="M12 22c0-7 0-12-8-18C12 6 12 13 12 22z" />
  </svg>
)

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <LeafSvg className="c-leaf tl" />
      <LeafSvg className="c-leaf br" />

      <div className="c-eyebrow reveal">N° 07 · Get in touch</div>
      <h2 className="c-big reveal d1">Let's <span className="italic">talk.</span></h2>

      <Magnetic strength={0.15}>
        <a href="mailto:hello@adheesh.in" className="c-mail reveal d2" data-hover="big">
          hello@adheesh.in <span className="arr">→</span>
        </a>
      </Magnetic>

      <div className="c-secondary reveal d3">
        <Magnetic><a className="btn btn-ghost" href="#" data-hover="big">Schedule a call</a></Magnetic>
        <Magnetic><a className="btn btn-ghost" href="#" data-hover="big">Resume (PDF)</a></Magnetic>
      </div>

      <div className="footer">
        <div>© 2026 — Adheesh / built quietly, in cream</div>
        <div className="socials">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Read.cv</a>
        </div>
      </div>
    </section>
  )
}
