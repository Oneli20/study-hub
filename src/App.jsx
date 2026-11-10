
import Header from './components/Header.jsx'
import CourseList from './components/CourseList.jsx'
import Section from './components/Section.jsx'
import { courses } from './data/courses.js'

export default function App() {
  return (
    <main>
      <Header
        title="Study Hub"
        subtitle="Your courses in one place"
      />

      <Section title="My courses">
        <CourseList courses={courses} />
      </Section>
    </main>
  )
}
