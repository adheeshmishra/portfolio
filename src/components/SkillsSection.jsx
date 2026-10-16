import { SKILLS } from '../data'
import SectionLabel from './SectionLabel'

export default function SkillsSection() {
  return (
    <section id="skills" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="05" name="Stack & Skills" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">The <span className="italic">toolkit.</span></h2>
            <p className="h2-sub reveal d1">
              Languages, frameworks, and infrastructure I <em>use in production.</em>
            </p>
          </div>
          <div className="skills-list">
            {SKILLS.map((s, i) => (
              <div className={`skill reveal d${(i % 4) + 1}`} key={i}>
                <div className="label-row">
                  <div className="sk-name">
                    {s.italic ? <span className="italic">{s.name}</span> : s.name}
                  </div>
                </div>
                <div className="pills">
                  {s.related.map((t, j) => <span key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
