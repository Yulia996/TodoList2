import Task from './Task/Task';
import PropTypes from 'prop-types';

function Tasks ({tasks, onDelete, onDone, onEdit}){
  return(
    <ul>
      {tasks.map((task) => (
        <Task
          name={task.title}
          key={task.id}
          id={task.id}
          status={task.status}
          onDelete={onDelete}
          onDone={onDone}
          onEdit={onEdit}
        />  
      ))}
    </ul>
  )
}    

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired
  })),
  onDelete: PropTypes.func.isRequired, 
  onDone: PropTypes.func.isRequired, 
  onEdit: PropTypes.func.isRequired
}
    