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
        <img className="p-img" src="/portrait.jpg" alt="Adheesh Mishra" />
      </div>
      <div className="portrait-cap">
        <span>Adheesh Mishra</span><span>2026</span>
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
                A <span className="italic">backend engineer</span> who cares about correctness as much as speed.
              </h3>
              <p className="reveal d2">
                I'm a Senior Software Engineer at PharmaACE, where I own the HR and payroll platform end to end. I architected its configurable salary increment engine on FastAPI and PostgreSQL — eligibility rules, hike slabs, approvals, and effective-dated revisions that used to live in spreadsheets. Rolling out a new compensation policy went from <em>roughly two months to under a day</em>.
              </p>
              <p className="reveal d3">
                Most of my work sits where <em>money meets concurrency</em>. Approvals run asynchronously on Amazon SQS with durable messaging, retries, and idempotent consumers, so no revision is ever approved twice. Row-level locking, optimistic concurrency, and transactional guarantees close the race conditions — and salary history is modelled so any payroll can be reconstructed at a point in time for audit.
              </p>
              <p className="reveal d4">
                I care about the <em>details that hold up under load</em>. I replaced JSON-based payroll storage with normalized schemas and targeted indexes, tuning execution plans for 35% faster queries, and rebuilt reporting with server-side pagination and virtualized rendering for a 60% faster p95.
              </p>
              <p className="reveal d4">
                Earlier at PharmaACE, on the analytics side, I built a reusable faceted-query framework shared across 11 modules, a React/TypeScript chart library adopted by other teams, a RAG pipeline on Llama 3 and FAISS, and hybrid keyset/offset pagination that took deep pages over 300K+ clinical trials from ~1.8s to ~50ms.
              </p>
              <p className="reveal d5">
                Before that, I spent two years at HealthAssure owning the Distributor and Internal Manager portals — shipping revenue features for 500+ distributors, cutting API response times by ~45%, and moving production to AWS with Terraform. Today I lead an <em>8-member cross-functional team</em> through architecture, reviews, sprint planning, and mentoring. I studied at SGSITS, Indore.
              </p>
              <div className="about-stats">
                <div className="reveal d1"><div className="stat-num">04</div><div className="stat-label">Years shipping</div></div>
                <div className="reveal d2"><div className="stat-num">60%</div><div className="stat-label">Faster p95 reporting</div></div>
                <div className="reveal d3"><div className="stat-num">08</div><div className="stat-label">Engineers led</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
