import { useEffect } from 'react'
import { WORK } from '../data'
import SectionLabel from './SectionLabel'

export default function WorkSection({ layout }) {
  useEffect(() => {
    if (layout !== 'slabs') return
    const preview = document.getElementById('work-preview')
    const label = preview?.querySelector('.frame')
    if (!preview || !label) return

    const onMove = (e) => {
      preview.style.left = e.clientX + 'px'
      preview.style.top = e.clientY + 'px'
    }
    const onEnter = (e) => {
      label.textContent = '— ' + e.currentTarget.dataset.name + ' —'
      preview.classList.add('show')
    }
    const onLeave = () => preview.classList.remove('show')

    const slabs = document.querySelectorAll('.slab[data-name]')
    slabs.forEach((s) => {
      s.addEventListener('mousemove', onMove)
      s.addEventListener('mouseenter', onEnter)
      s.addEventListener('mouseleave', onLeave)
    })
    return () => {
      slabs.forEach((s) => {
        s.removeEventListener('mousemove', onMove)
        s.removeEventListener('mouseenter', onEnter)
        s.removeEventListener('mouseleave', onLeave)
      })
      if (preview) preview.classList.remove('show')
    }
  }, [layout])

  return (
    <section id="work" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="02" name="Selected Work" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">Selected <span className="italic">works.</span></h2>
            <p className="h2-sub reveal d1">
              Six systems from PharmaACE and HealthAssure — <em>all shipped, all in production.</em>
            </p>
          </div>

          {layout === 'cards' && (
            <div className="cards">
              {WORK.map((w) => (
                <div className="card reveal" key={w.id} data-hover="big">
                  <div className="card-media">
                    <div className="card-lab">{w.num}</div>
                    <div className="card-metric">{w.metric}</div>
                    <div className="card-metric-label">{w.metricLabel}</div>
                    <ul className="card-points">
                      {w.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                  <div className="card-meta">
                    <div className="card-name">{w.name} <span className="italic">— {w.kind}</span></div>
                    <div className="card-year">{w.year}</div>
                  </div>
                  <div className="card-tags">{w.tags.map((t, i) => <span key={i}>{t}</span>)}</div>
                </div>
              ))}
            </div>
          )}

          {layout === 'hybrid' && (
            <div className="slabs hybrid">
              {WORK.map((w) => (
                <a className="slab reveal" key={w.id} href="#" data-name={w.name} data-hover="big">
                  <div className="slab-num">{w.num}</div>
                  <div className="slab-name">
                    {w.name} <span className="italic">— {w.kind}</span>
                    <div className="reveal-img">
                      <div style={{ position: 'absolute', top: 14, left: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.2em', textTransform: 'uppercase' }}>{w.num}</div>
                    </div>
                  </div>
                  <div className="slab-tags">{w.tags.map((t, i) => <span key={i}>{t}</span>)}</div>
                  <div className="slab-year">{w.year} ↗</div>
                </a>
              ))}
            </div>
          )}

          {layout === 'slabs' && (
            <div className="slabs">
              {WORK.map((w) => (
                <a className="slab reveal" key={w.id} href="#" data-name={w.name} data-hover="big">
                  <div className="slab-num">{w.num}</div>
                  <div className="slab-name">{w.name} <span className="italic">— {w.kind}</span></div>
                  <div className="slab-tags">{w.tags.map((t, i) => <span key={i}>{t}</span>)}</div>
                  <div className="slab-year">{w.year} ↗</div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
