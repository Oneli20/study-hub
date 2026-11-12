
export default function CourseCard({
  code,
  title,
  credits,
  level,
  completed,
  enrolled,
  onToggleEnrol,
}) {
  
  return (
    <article className="card">
      <span className="code">{code}</span>

      <h3>{title}</h3>

      <p className="meta">
        {credits} credits · {level}
      </p>

      <span className={completed ? 'badge done' : 'badge todo'}>
        {completed ? 'Completed' : 'In progress'}
      </span>
      <button onClick={() => onToggleEnrol(code)}>
  {enrolled ? 'Unenrol' : 'Enrol'}
</button>
    </article>
  )
}