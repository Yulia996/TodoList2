import TaskDescription from './TaskDescription'
import { useSelector } from 'react-redux/es/hooks/useSelector';

function TaskPage() {
    const tasks = useSelector(state => state.todos.todos)

    return(
        <>
            {tasks.map((task) => (
                <TaskDescription
                    name={task.title}
                    description={task.description}
                    id={task.id}
                    key={task.id}
                />
            ))}   
        </>
    )
}

export default TaskPage;