
import CourseCard from './CourseCard.jsx'

export default function CourseList({
  courses,
  enrolledCodes,
  onToggleEnrol,
}) {
  return (
    <div className="grid">
      {courses.map((c) => (
        <CourseCard
          key={c.code}
          code={c.code}
          title={c.title}
          credits={c.credits}
          level={c.level}
          completed={c.completed}
          enrolled={enrolledCodes.includes(c.code)}
          onToggleEnrol={onToggleEnrol}
        />
      ))}
    </div>
  )
}