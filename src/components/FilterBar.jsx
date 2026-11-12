
export default function FilterBar({ filter, onChange }) {
  return (
    <div className="filters">
      <button onClick={() => onChange('all')}>
        All
      </button>

      <button onClick={() => onChange('active')}>
        Active
      </button>

      <button onClick={() => onChange('done')}>
        Done
      </button>
    </div>
  )
}
