import { useState } from 'react'
export default function TaskForm({ onAdd }) {
const [text, setText] = useState('')
function handleSubmit(e) {
e.preventDefault()
const trimmed = text.trim()
if (!trimmed) return
onAdd(trimmed)
setText('')
}
return (
<form onSubmit={handleSubmit}>
<input
aria-label="New study task"
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="e.g. Finish Lab 2"
/>{' '}
<button type="submit">Add task</button>
</form>
)
}