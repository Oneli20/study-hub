
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span className={task.done ? 'struck' : ''}>
        {task.text}
      </span>

      <button onClick={() => onToggle(task.id)}>
        {task.done ? 'Undo' : 'Done'}
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  )
}
