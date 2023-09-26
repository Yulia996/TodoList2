import Task from './Task/Task';
import PropTypes from 'prop-types';

function Tasks ({tasks, onDelete, doneTask, editTask}){

  return(
    <ul>
      {tasks.map((task) => (
        <Task
          name={task.title}
          key={task.id}
          id={task.id}
          status={task.status}
          onDelete={onDelete}
          doneTask={doneTask}
          editTask={editTask}
        />  
      ))}
    </ul>
  )
}    

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired, 
  onDelete: PropTypes.func.isRequired, 
  doneTask: PropTypes.func.isRequired, 
  editTask: PropTypes.func.isRequired
}
    