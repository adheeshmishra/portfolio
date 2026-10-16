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

      <div className="c-eyebrow reveal">N° 06 · Get in touch</div>
      <h2 className="c-big reveal d1">Let's <span className="italic">talk.</span></h2>

      <Magnetic strength={0.15}>
        <a href="mailto:adheeshmishra525@gmail.com" className="c-mail reveal d2" data-hover="big">
          adheeshmishra525@gmail.com <span className="arr">→</span>
        </a>
      </Magnetic>

      <div className="c-secondary reveal d3">
        <Magnetic><a className="btn btn-ghost" href="/Adheesh_Mishra_Resume.pdf" target="_blank" rel="noopener noreferrer" data-hover="big">Resume (PDF)</a></Magnetic>
      </div>

      <div className="footer">
        <div>© 2026 — Adheesh Mishra / built quietly, in forest green</div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/adheesh-mishra-118a061b3/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
