import { NOW } from '../data'
import SectionLabel from './SectionLabel'

export default function NowSection() {
  return (
    <section id="now">
      <div className="sec-row">
        <SectionLabel num="05" name="Currently" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">Now, <span className="italic">in season.</span></h2>
            <p className="h2-sub reveal d1">
              A <em>small field journal</em> — what's on my desk this quarter.
            </p>
          </div>
          <div className="journal">
            {NOW.map((n, i) => (
              <article className={`post reveal d${(i % 4) + 1}`} key={i}>
                <div className="stamp">{n.tag}</div>
                <div className="date">{n.date}</div>
                <h4>
                  {n.title}
                  {n.titleSuffix ? <> <span className="italic">{n.titleSuffix}</span></> : null}
                </h4>
                <p>{n.body}</p>
                <div className="corner" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
