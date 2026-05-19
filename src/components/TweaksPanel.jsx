import { useRef, useEffect, useCallback } from 'react'

const PANEL_CSS = `
.twk-panel{position:fixed;right:16px;bottom:64px;z-index:2147483646;width:280px;max-height:calc(100vh - 80px);display:flex;flex-direction:column;background:rgba(250,249,247,.95);color:#29261b;-webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);border:.5px solid rgba(255,255,255,.6);border-radius:14px;box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
.twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 8px 10px 14px;cursor:move;user-select:none;border-bottom:.5px solid rgba(0,0,0,.06)}
.twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
.twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px;line-height:22px;display:flex;align-items:center;justify-content:center}
.twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
.twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto;overflow-x:hidden;min-height:0;scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
.twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(41,38,27,.45);padding:10px 0 0}
.twk-row{display:flex;flex-direction:column;gap:5px}
.twk-lbl{font-weight:500;color:rgba(41,38,27,.72);font-size:11px}
.twk-field{appearance:none;box-sizing:border-box;width:100%;height:26px;padding:0 22px 0 8px;border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.7);color:inherit;font:inherit;outline:none;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6'><path fill='rgba(0,0,0,.4)' d='M0 0h10L5 6z'/></svg>");background-repeat:no-repeat;background-position:right 8px center}
.twk-field:focus{border-color:rgba(0,0,0,.25)}
.twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06);user-select:none}
.twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
.twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;border-radius:6px;cursor:pointer;padding:4px 4px;line-height:1.2;font-size:11px}
`

function Seg({ options, value, onChange }) {
  const idx = Math.max(0, options.findIndex(o => String(o.value) === String(value)))
  const n = options.length
  return (
    <div className="twk-seg">
      <div
        className="twk-seg-thumb"
        style={{
          left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
          width: `calc((100% - 4px) / ${n})`,
        }}
      />
      {options.map(o => (
        <button key={o.value} type="button" onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl">{label}</div>
      {children}
    </div>
  )
}

export default function TweaksPanel({ open, onClose, tweaks, setTweak }) {
  const dragRef = useRef(null)
  const offsetRef = useRef({ x: 16, y: 64 })

  const clampToViewport = useCallback(() => {
    const panel = dragRef.current
    if (!panel) return
    const w = panel.offsetWidth, h = panel.offsetHeight
    const PAD = 16
    offsetRef.current = {
      x: Math.min(Math.max(PAD, window.innerWidth - w - PAD), Math.max(PAD, offsetRef.current.x)),
      y: Math.min(Math.max(PAD, window.innerHeight - h - PAD), Math.max(PAD, offsetRef.current.y)),
    }
    panel.style.right = offsetRef.current.x + 'px'
    panel.style.bottom = offsetRef.current.y + 'px'
  }, [])

  useEffect(() => {
    if (!open) return
    clampToViewport()
    window.addEventListener('resize', clampToViewport)
    return () => window.removeEventListener('resize', clampToViewport)
  }, [open, clampToViewport])

  const onDragStart = (e) => {
    const panel = dragRef.current
    if (!panel) return
    const r = panel.getBoundingClientRect()
    const sx = e.clientX, sy = e.clientY
    const startRight = window.innerWidth - r.right
    const startBottom = window.innerHeight - r.bottom
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      }
      clampToViewport()
    }
    const up = () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
  }

  if (!open) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PANEL_CSS }} />
      <div
        ref={dragRef}
        className="twk-panel"
        style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}
      >
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>Tweaks</b>
          <button className="twk-x" onMouseDown={e => e.stopPropagation()} onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="twk-body">
          <div className="twk-sect">Palette</div>
          <Row label="Background">
            <Seg
              value={tweaks.bg}
              options={[{ label: 'Cream', value: 'cream' }, { label: 'Forest', value: 'forest' }]}
              onChange={v => setTweak('bg', v)}
            />
          </Row>
          <Row label="Accent">
            <Seg
              value={tweaks.accent}
              options={[
                { label: 'Moss', value: 'moss' },
                { label: 'Clay', value: 'clay' },
                { label: 'Dusk', value: 'dusk' },
              ]}
              onChange={v => setTweak('accent', v)}
            />
          </Row>

          <div className="twk-sect">Typography</div>
          <Row label="Display serif">
            <select
              className="twk-field"
              value={tweaks.serif}
              onChange={e => setTweak('serif', e.target.value)}
            >
              <option value="cormorant">Cormorant Garamond</option>
              <option value="fraunces">Fraunces</option>
              <option value="playfair">Playfair Display</option>
            </select>
          </Row>

          <div className="twk-sect">Layout</div>
          <Row label="Hero variant">
            <Seg
              value={tweaks.heroVariant}
              options={[
                { label: '1 · Foot', value: 1 },
                { label: '2 · Meta', value: 2 },
                { label: '3 · Lead', value: 3 },
              ]}
              onChange={v => setTweak('heroVariant', Number(v))}
            />
          </Row>
          <Row label="Work layout">
            <select
              className="twk-field"
              value={tweaks.workLayout}
              onChange={e => setTweak('workLayout', e.target.value)}
            >
              <option value="slabs">Slabs (text only)</option>
              <option value="cards">Image cards</option>
              <option value="hybrid">Hybrid (reveal)</option>
            </select>
          </Row>
          <Row label="Density">
            <Seg
              value={tweaks.density}
              options={[{ label: 'Airy', value: 'airy' }, { label: 'Cozy', value: 'cozy' }]}
              onChange={v => setTweak('density', v)}
            />
          </Row>
        </div>
      </div>
    </>
  )
}
