import TasksElement from './TaskElement';

function TaskList ({tasks, onDelete, doneTask, editTask}){
  const taskEl = tasks.map((task) => (
    <TasksElement
      task = {task}
      text = {task.title}
      key = {task.id}
      id = {task.id}
      status = {task.status}
      edit = {task.edit}
      onDelete = {onDelete}
      doneTask = {doneTask}
      editTask = {editTask}
    />  
  ))
  
  return(
    <ul>
      {taskEl}
    </ul>
  )
}    

export default TaskList;
    