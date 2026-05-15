// portfolio.jsx — main app, tweaks wiring, page-level effects.

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Push tweaks to body data-attrs so CSS variables react
  React.useEffect(() => {
    document.body.dataset.bg = t.bg;
    document.body.dataset.accent = t.accent;
    document.body.dataset.serif = t.serif;
    document.body.dataset.density = t.density;
  }, [t.bg, t.accent, t.serif, t.density]);

  useReveal();

  // Page effects: loader, cursor, clock, scroll progress (progress lives in Nav).
  React.useEffect(() => {
    // Loader: progress count to 100, then slide up.
    const loader = document.getElementById('loader');
    const pct = document.getElementById('loader-pct');
    let n = 0;
    const tick = setInterval(() => {
      n = Math.min(100, n + Math.random() * 14);
      pct.textContent = String(Math.floor(n)).padStart(3, '0');
      if (n >= 100) {
        clearInterval(tick);
        setTimeout(() => loader.classList.add('gone'), 240);
      }
    }, 80);

    // Cursor blob
    const cursor = document.getElementById('cursor');
    let cx = -100, cy = -100, tx = -100, ty = -100;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; cursor.classList.add('active'); };
    const onLeave = () => cursor.classList.remove('active');
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    let raf;
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    const hovEnter = () => cursor.classList.add('hovering');
    const hovLeave = () => cursor.classList.remove('hovering');
    const bind = () => {
      const all = document.querySelectorAll('a, button, [data-hover="big"]');
      all.forEach((el) => {
        el.addEventListener('mouseenter', hovEnter);
        el.addEventListener('mouseleave', hovLeave);
      });
      return all;
    };
    const bound = bind();
    // Re-bind on layout swap (cheap MutationObserver)
    const mo = new MutationObserver(() => bind());
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });

    // Local clock
    const fmt = () => {
      const opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false };
      const el = document.getElementById('local-time');
      if (el) el.textContent = new Date().toLocaleTimeString('en-GB', opts);
    };
    fmt(); const clockI = setInterval(fmt, 1000 * 30);

    return () => {
      clearInterval(tick); clearInterval(clockI);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      bound.forEach((el) => { el.removeEventListener('mouseenter', hovEnter); el.removeEventListener('mouseleave', hovLeave); });
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <Nav />
      <Hero variant={t.heroVariant} />
      <Strip />
      <WorkSection layout={t.workLayout} />
      <AboutSection />
      <ExperienceSection />
      <NowSection />
      <SkillsSection />
      <ContactSection />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette">
          <TweakRadio label="Background"
            value={t.bg}
            options={[{ label: 'Cream', value: 'cream' }, { label: 'Forest', value: 'forest' }]}
            onChange={(v) => setTweak('bg', v)} />
          <TweakRadio label="Accent"
            value={t.accent}
            options={[
              { label: 'Moss', value: 'moss' },
              { label: 'Clay', value: 'clay' },
              { label: 'Dusk', value: 'dusk' },
            ]}
            onChange={(v) => setTweak('accent', v)} />
        </TweakSection>

        <TweakSection label="Typography">
          <TweakSelect label="Display serif"
            value={t.serif}
            options={[
              { label: 'Cormorant Garamond', value: 'cormorant' },
              { label: 'Fraunces', value: 'fraunces' },
              { label: 'Playfair Display', value: 'playfair' },
            ]}
            onChange={(v) => setTweak('serif', v)} />
        </TweakSection>

        <TweakSection label="Layout">
          <TweakRadio label="Hero variant"
            value={t.heroVariant}
            options={[
              { label: '1 · Foot', value: 1 },
              { label: '2 · Meta', value: 2 },
              { label: '3 · Lead', value: 3 },
            ]}
            onChange={(v) => setTweak('heroVariant', v)} />
          <TweakSelect label="Work layout"
            value={t.workLayout}
            options={[
              { label: 'Slabs (text only)', value: 'slabs' },
              { label: 'Image cards', value: 'cards' },
              { label: 'Hybrid (reveal)', value: 'hybrid' },
            ]}
            onChange={(v) => setTweak('workLayout', v)} />
          <TweakRadio label="Density"
            value={t.density}
            options={[{ label: 'Airy', value: 'airy' }, { label: 'Cozy', value: 'cozy' }]}
            onChange={(v) => setTweak('density', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
