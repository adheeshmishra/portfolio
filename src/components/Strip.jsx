const ITEMS = [
  "Backend engineering", "Distributed systems", "Event-driven architecture",
  "FastAPI & Node.js", "PostgreSQL", "Concurrency control", "AWS",
]

function Row() {
  return (
    <span className="strip-item">
      {ITEMS.map((t, i) => (
        <span key={i} className="strip-item">
          {t}<span className="strip-dot" />
        </span>
      ))}
    </span>
  )
}

export default function Strip() {
  return (
    <div className="strip">
      <div className="strip-track">
        <Row /><Row />
      </div>
    </div>
  )
}
