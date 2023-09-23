import Task from './Task/Task';

function Tasks ({tasks, onDelete, doneTask, editTask}){
  
  return(
    <ul>
      {tasks.map((task) => (
        <Task
          text={task.title}
          key={task.id}
          id={task.id}
          status={task.status}
          edit={task.edit}
          onDelete={onDelete}
          doneTask={doneTask}
          editTask={editTask}
        />  
      ))}
    </ul>
  )
}    

export default Tasks;
    