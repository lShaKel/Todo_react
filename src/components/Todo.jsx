import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {

  const tasks = [
    { id: 'task-1', title: 'Купити молоко', isDone: false},
    { id: 'task-2', title: 'Погладити кішку', isDone: true},
  ]

  const deleteAllTasks = () => {
    console.log('Deleted')
  }

  const deleteTask = (taskId) => {
    console.log(`Deleting task with id, ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'Зроблена' : 'Не зроблена'}`)
  }

  const filterTasks = (query) => {
    console.log(`Finding: ${query}`)
  }

  const addTask = () => {
    console.log('Task added')
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask = {addTask}
      />
      <SearchTaskForm
        onSearchInput = {filterTasks}
      />
      <TodoInfo
        total = {tasks.length}
        done = {tasks.filter(({isDone}) =>isDone).length}
        onDeleteAllButtonClick = {deleteAllTasks}
      />
      <TodoList
        tasks ={tasks}
        onDeleteTaskButtonClick = {deleteTask}
        onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
  )
}

export default Todo