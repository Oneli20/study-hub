import TaskForm from './components/TaskForm.jsx'
import TaskList from './components/TaskList.jsx'
import FilterBar from './components/FilterBar.jsx'
import DailyQuote from './components/DailyQuote.jsx'
import { useState } from 'react'
import Header from './components/Header.jsx'
import CourseList from './components/CourseList.jsx'
import Section from './components/Section.jsx'
import { courses } from './data/courses.js'
import { useLocalStorage } from './hooks/useLocalStorage.js'

export default function App() {
  const [enrolledCodes, setEnrolledCodes] = useLocalStorage(
  'study-hub-enrolled',
  [],
)
  const [tasks, setTasks] = useLocalStorage('study-hub-tasks', [])
  const [filter, setFilter] = useState('all')
  function toggleEnrol(code) {
  setEnrolledCodes((prev) =>
    prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
  )
}
function addTask(text) {
  setTasks((prev) => [
    ...prev,
    { id: Date.now(), text, done: false },
  ])
}
function toggleTask(id) {
  setTasks((prev) =>
    prev.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    ),
  )
}
function deleteTask(id) {
  setTasks((prev) => prev.filter((task) => task.id !== id))
}
const remaining = tasks.filter((task) => !task.done).length
const visibleTasks = tasks.filter((task) => {
  if (filter === 'active') return !task.done
  if (filter === 'done') return task.done
  return true
})
const enrolledCredits = courses
  .filter((c) => enrolledCodes.includes(c.code))
  .reduce((sum, c) => sum + c.credits, 0)

  return (
    <main>
      <Header
        title="Study Hub"
        subtitle="Your courses in one place"
      />
      <Section title="Daily Quote">
  <DailyQuote />
</Section>

      <Section title="My courses">
        <p>
  Enrolled in {enrolledCodes.length} courses · {enrolledCredits} credits
</p>

        <CourseList
  courses={courses}
  enrolledCodes={enrolledCodes}
  onToggleEnrol={toggleEnrol}
/>
      </Section>

<Section title="Study tasks">
  <p>{remaining} tasks remaining</p>

  <TaskForm onAdd={addTask} />

  <FilterBar filter={filter} onChange={setFilter} />

  <TaskList
    tasks={visibleTasks}
    onToggle={toggleTask}
    onDelete={deleteTask}
  />
</Section>

    </main>
  )
}