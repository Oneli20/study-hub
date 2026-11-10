
import CourseCard from './CourseCard.jsx'

export default function CourseList({ courses }) {
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
        />
      ))}
    </div>
  )
}
