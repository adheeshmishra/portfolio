export default function SectionLabel({ num, name }) {
  return (
    <div className="stick">
      <div className="s-num">N° {num}</div>
      <div className="s-rule" />
      <div className="s-name">{name}</div>
      <svg className="s-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c0-6 0-10 6-14C12 8 12 14 12 22z" />
        <path d="M12 22c0-6 0-10-6-14C12 8 12 14 12 22z" />
      </svg>
    </div>
  )
}
