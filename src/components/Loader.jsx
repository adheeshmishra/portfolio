import { useState, useEffect } from 'react'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let n = 0
    const tick = setInterval(() => {
      n = Math.min(100, n + Math.random() * 14)
      setPct(Math.floor(n))
      if (n >= 100) {
        clearInterval(tick)
        setTimeout(() => setGone(true), 240)
      }
    }, 80)
    return () => clearInterval(tick)
  }, [])

  return (
    <div className={`loader${gone ? ' gone' : ''}`}>
      <div className="loader-inner">
        <div className="loader-mark">A</div>
        <div className="loader-label">Loading portfolio</div>
        <div className="loader-pct">{String(pct).padStart(3, '0')}</div>
      </div>
    </div>
  )
}
