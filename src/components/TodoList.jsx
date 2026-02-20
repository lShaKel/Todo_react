import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
  const {
    tasks = [],
  } = props


  const hasTasks = true

  if(!hasTasks) {
    return (
      <div className="todo__empty-message"></div>
    )
  }
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className = 'todo__item'
          {...task} // Знизу теж саме
          // key = {task.id}
          // id = {task.id}
          // title = {task.title}
          // idDone = {task.isDone}
        />
      ))}
    </ul>
  )
}

export default TodoList