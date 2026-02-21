import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
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
          key = {task.id}
          onDeleteTaskButtonClick ={onDeleteTaskButtonClick}
          onTaskCompleteChange = {onTaskCompleteChange}
          {...task} // Знизу теж саме
          // id = {task.id}
          // title = {task.title}
          // idDone = {task.isDone}
        />
      ))}
    </ul>
  )
}

export default TodoList