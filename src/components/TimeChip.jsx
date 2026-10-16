import { useState, useEffect } from 'react'

export default function TimeChip() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const fmt = () => {
      const opts = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }
      setTime(new Date().toLocaleTimeString('en-GB', opts))
    }
    fmt()
    const id = setInterval(fmt, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="timechip">
      <span className="tc-dot" />
      <span>{time}</span>
      <span>IST · India</span>
    </div>
  )
}
