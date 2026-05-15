// portfolio-sections.jsx — section components.
// Uses global components from portfolio-data.jsx (WORK, EXPERIENCE, NOW, SKILLS, TAGLINES, MAX_YEARS).

// ─────────────────────────────────────────────────────────────
// Useful hooks
// ─────────────────────────────────────────────────────────────
function useReveal() {
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// Sticky section label
function SectionLabel({ num, name }) {
  return (
    <div className="stick">
      <div className="num">N° {num}</div>
      <div className="rule" />
      <div className="name">{name}</div>
      <svg className="leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c0-6 0-10 6-14C12 8 12 14 12 22z" />
        <path d="M12 22c0-6 0-10-6-14C12 8 12 14 12 22z" />
      </svg>
    </div>
  );
}

// Magnetic-button wrapper
function Magnetic({ children, strength = 0.25 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const reset = () => { el.style.transform = 'translate(0,0)'; };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', reset); };
  }, [strength]);
  return React.cloneElement(children, { ref });
}

// ─────────────────────────────────────────────────────────────
// Hero — 3 variants
// ─────────────────────────────────────────────────────────────
function HeroChars({ text }) {
  // split into chars; preserve a '.' as accent
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const chars = el.querySelectorAll('.char');
    chars.forEach((c, i) => setTimeout(() => c.classList.add('in'), 250 + i * 55));
  }, [text]);
  return (
    <h1 className="hero-title" ref={ref}>
      {[...text].map((ch, i) => (
        <span key={i} className={`char${ch === '.' ? ' dot' : ''}`}>{ch}</span>
      ))}
    </h1>
  );
}

function HeroTagSwap() {
  const [idx, setIdx] = React.useState(0);
  const [out, setOut] = React.useState(false);
  React.useEffect(() => {
    const t = setInterval(() => {
      setOut(true);
      setTimeout(() => { setIdx((i) => (i + 1) % TAGLINES.length); setOut(false); }, 500);
    }, 3800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="hero-tag reveal d3">
      <span className={`swap ${out ? 'out' : ''}`}>{TAGLINES[idx]}</span>
    </div>
  );
}

function HeroParallaxDeco() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.22}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="hero-deco" ref={ref}>
      <div className="frame">
        <div className="lab">01 · INDEX</div>
        <div className="pl">— portrait —</div>
      </div>
    </div>
  );
}

function Hero({ variant }) {
  return (
    <section className="hero" id="home">
      <HeroParallaxDeco />
      <div className="hero-num reveal">
        <span>N° 01</span><span className="sep">/</span><span>Index — Software Engineer · Bengaluru</span>
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
  );
}

// ─────────────────────────────────────────────────────────────
// Strip
// ─────────────────────────────────────────────────────────────
function Strip() {
  const items = [
    "Full-stack engineering", "Distributed systems", "Developer tools",
    "TypeScript & Go", "Postgres", "Design systems", "Open source",
  ];
  const Row = () => (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          {t}<span className="dot" />
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="strip">
      <div className="strip-track">
        <Row /><Row />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Work — three layouts (slabs / cards / hybrid)
// ─────────────────────────────────────────────────────────────
function WorkSection({ layout }) {
  // Hover preview only for slabs
  React.useEffect(() => {
    if (layout !== 'slabs') return;
    const preview = document.getElementById('work-preview');
    const label = preview.querySelector('.frame');
    let raf = 0;
    let tx = 0, ty = 0;
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      preview.style.left = tx + 'px';
      preview.style.top = ty + 'px';
    };
    const onEnter = (e) => {
      const t = e.currentTarget;
      label.textContent = '— ' + t.dataset.name + ' —';
      preview.classList.add('show');
    };
    const onLeave = () => preview.classList.remove('show');
    const slabs = document.querySelectorAll('.slab[data-name]');
    slabs.forEach((s) => {
      s.addEventListener('mousemove', onMove);
      s.addEventListener('mouseenter', onEnter);
      s.addEventListener('mouseleave', onLeave);
    });
    return () => {
      slabs.forEach((s) => {
        s.removeEventListener('mousemove', onMove);
        s.removeEventListener('mouseenter', onEnter);
        s.removeEventListener('mouseleave', onLeave);
      });
      preview.classList.remove('show');
    };
  }, [layout]);

  return (
    <section id="work" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="02" name="Selected Work" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">Selected <span className="italic">works.</span></h2>
            <p className="h2-sub reveal d1">
              Six projects from the past few years — <em>most shipped, some still humming, one quietly retired.</em>
            </p>
          </div>

          {layout === 'cards' && (
            <div className="cards">
              {WORK.map((w) => (
                <a className="card reveal" key={w.id} href="#" data-hover="big">
                  <div className="card-media">
                    <div className="lab">{w.num}</div>
                    <div className="pl">— project tile —</div>
                  </div>
                  <div className="card-meta">
                    <div className="card-name">{w.name} <span className="italic">— {w.kind}</span></div>
                    <div className="card-year">{w.year} ↗</div>
                  </div>
                  <div className="card-tags">{w.tags.map((t, i) => <span key={i}>{t}</span>)}</div>
                </a>
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
                    <div className="reveal-img"><div style={{ position: 'absolute', top: 14, left: 16, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '.2em', textTransform: 'uppercase' }}>{w.num}</div></div>
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
  );
}

// ─────────────────────────────────────────────────────────────
// About — portrait + bio + stats
// ─────────────────────────────────────────────────────────────
function PortraitParallax() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const onScroll = () => {
      const r = el.parentElement.getBoundingClientRect();
      const wh = window.innerHeight;
      // progress: -1 (below) -> 0 (centered) -> 1 (above)
      const p = (wh / 2 - (r.top + r.height / 2)) / (wh / 2 + r.height / 2);
      el.style.transform = `translateY(${p * 30}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="portrait-wrap reveal">
      <div className="portrait" ref={ref}>
        <div className="lab">PORTRAIT</div>
        <div className="pl">— your photo here —</div>
      </div>
      <div className="portrait-cap">
        <span>Bengaluru</span><span>2026</span>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <div className="sec-row">
        <SectionLabel num="03" name="About" />
        <div>
          <div className="about-grid">
            <PortraitParallax />
            <div className="about-body">
              <h3 className="reveal d1">
                A <span className="italic">software engineer</span> who treats interfaces with the same care as databases.
              </h3>
              <p className="reveal d2">
                I build calm, well-considered tools. Mostly backend and full-stack, with a soft spot for developer experience and the small interactions that make products feel alive.
              </p>
              <p className="reveal d3">
                I care about the <em>small moments</em> — the right query plan, the cleanest API surface, the exact easing of a tooltip. The difference between fine and great lives there.
              </p>
              <p className="reveal d4">
                Before this, I studied CS and spent four years on the platform team at a Series-B startup. Outside work I read a lot, run slowly, and write occasionally.
              </p>
              <div className="about-stats">
                <div className="reveal d1"><div className="stat-num">07</div><div className="stat-label">Years shipping</div></div>
                <div className="reveal d2"><div className="stat-num">32</div><div className="stat-label">Projects shipped</div></div>
                <div className="reveal d3"><div className="stat-num">∞</div><div className="stat-label">Cups of chai</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Experience timeline
// ─────────────────────────────────────────────────────────────
function ExperienceSection() {
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const root = rootRef.current; if (!root) return;
    const rail = root.querySelector('.tl-rail');
    const rows = root.querySelectorAll('.tl-row');
    const onScroll = () => {
      const r = root.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const total = r.height;
      const traveled = Math.max(0, Math.min(total, mid - r.top));
      rail.style.setProperty('--rail', (traveled / total * 100) + '%');
      rows.forEach((row) => {
        const rr = row.getBoundingClientRect();
        row.classList.toggle('active', rr.top < mid && rr.bottom > mid - 80);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section id="experience" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="04" name="Where I've been" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">A short <span className="italic">history.</span></h2>
            <p className="h2-sub reveal d1">Five stations, roughly chronological. <em>Most are still in touch.</em></p>
          </div>
          <div className="timeline" ref={rootRef}>
            <div className="tl-rail" />
            {EXPERIENCE.map((e, i) => (
              <div className="tl-row reveal" key={i}>
                <div className="tl-dot" />
                <div className="tl-year">{e.year}</div>
                <div className="tl-role">{e.italic ? <span className="italic">{e.role}</span> : e.role}</div>
                <div className="tl-co">{e.co}</div>
                <div className="tl-loc">{e.loc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Now — journal/postcard cards
// ─────────────────────────────────────────────────────────────
function NowSection() {
  return (
    <section id="now">
      <div className="sec-row">
        <SectionLabel num="05" name="Currently" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">Now, <span className="italic">in season.</span></h2>
            <p className="h2-sub reveal d1">A <em>small field journal</em> — what's on my desk this quarter.</p>
          </div>
          <div className="journal">
            {NOW.map((n, i) => (
              <article className={`post reveal d${(i % 4) + 1}`} key={i}>
                <div className="stamp">{n.tag}</div>
                <div className="date">{n.date}</div>
                <h4>
                  {n.title}{n.titleSuffix ? <> <span className="italic">{n.titleSuffix}</span></> : null}
                </h4>
                <p>{n.body}</p>
                <div className="corner" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Skills — experience bars
// ─────────────────────────────────────────────────────────────
function SkillsSection() {
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const root = rootRef.current; if (!root) return;
    const bars = root.querySelectorAll('.skill .bar i');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const pct = e.target.dataset.pct;
          requestAnimationFrame(() => e.target.style.setProperty('--pct', pct + '%'));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);
  return (
    <section id="skills" className="alt-band">
      <div className="sec-row">
        <SectionLabel num="06" name="Stack & Skills" />
        <div>
          <div className="work-head">
            <h2 className="h2 reveal">The <span className="italic">toolkit.</span></h2>
            <p className="h2-sub reveal d1">Years and reaches. Not exhaustive — just the ones I'd still pick on a <em>Sunday afternoon</em>.</p>
          </div>
          <div className="skills-list" ref={rootRef}>
            {SKILLS.map((s, i) => {
              const pct = Math.round((s.years / MAX_YEARS) * 100);
              return (
                <div className={`skill reveal d${(i % 4) + 1}`} key={i}>
                  <div className="label-row" style={{ gridColumn: '1 / -1' }}>
                    <div className="name">{s.italic ? <span className="italic">{s.name}</span> : s.name}</div>
                    <div className="years">{s.years} yrs</div>
                  </div>
                  <div className="bar"><i data-pct={pct} /></div>
                  <div className="pills">{s.related.map((t, j) => <span key={j}>{t}</span>)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Contact + footer
// ─────────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="contact" id="contact">
      <svg className="c-leaf tl" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c0-7 0-12 8-18C12 6 12 13 12 22zM12 22c0-7 0-12-8-18C12 6 12 13 12 22z"/></svg>
      <svg className="c-leaf br" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c0-7 0-12 8-18C12 6 12 13 12 22zM12 22c0-7 0-12-8-18C12 6 12 13 12 22z"/></svg>

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
          <a href="#">Twitter</a><a href="#">LinkedIn</a><a href="#">GitHub</a><a href="#">Read.cv</a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Nav
// ─────────────────────────────────────────────────────────────
function Nav() {
  const navRef = React.useRef(null);
  React.useEffect(() => {
    const nav = navRef.current;
    const progress = document.getElementById('progress');
    const links = nav.querySelectorAll('.nav-links a');
    const altSections = [...document.querySelectorAll('.alt-band')];
    const ids = ['work', 'about', 'experience', 'now', 'skills', 'contact'];
    const onScroll = () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 40);
      // Color swap when over an alt-band
      const midY = nav.getBoundingClientRect().bottom - 10;
      const onAlt = altSections.some((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= midY && r.bottom >= midY;
      });
      nav.classList.toggle('on-dark', onAlt);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = Math.min(100, (y / Math.max(1, max)) * 100) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const linkIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id;
          links.forEach((l) => l.classList.toggle('active', l.dataset.section === id));
        }
      });
    }, { threshold: 0.4 });
    ids.forEach((id) => { const s = document.getElementById(id); if (s) linkIo.observe(s); });
    return () => { window.removeEventListener('scroll', onScroll); linkIo.disconnect(); };
  }, []);

  return (
    <nav className="nav" id="nav" ref={navRef}>
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
        <a href="#now" data-section="now">Now</a>
        <a href="#skills" data-section="skills">Skills</a>
        <a href="#contact" data-section="contact">Contact</a>
      </div>
      <button className="nav-cta" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
        <span className="dot" /><span>Available</span>
      </button>
    </nav>
  );
}

Object.assign(window, {
  Nav, Hero, Strip, WorkSection, AboutSection, ExperienceSection,
  NowSection, SkillsSection, ContactSection, useReveal, Magnetic,
});
