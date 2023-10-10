import { useSelector } from 'react-redux/es/hooks/useSelector';
import Task from './Task/Task';


function Tasks() {
  const tasks = useSelector( state => state.todos.todos);

  return(
    <ul>
      {tasks.map((task) => (
        <Task
          name={task.title}
          key={task.id}
          id={task.id}
          status={task.status}
        />  
      ))}
    </ul>
  )
}    

export default Tasks;    