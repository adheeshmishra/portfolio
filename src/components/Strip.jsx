const ITEMS = [
  "Full-stack engineering", "Distributed systems", "Developer tools",
  "TypeScript & Go", "Postgres", "Design systems", "Open source",
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
