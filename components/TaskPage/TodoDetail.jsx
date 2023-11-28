import './style.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { editTask} from "../../store/todoSlice";

function TodoDetail() {
    const {taskId} = useParams();
    const tasks = useSelector(state => state.todos.todos);
    const task = tasks.find(task => task.id == taskId);
    const [nameFieldValue, setNameFieldValue] = useState(task.title);
    const [descriptionFieldValue, setDescriptionFieldValue] = useState(task.description)
    const [isEditMode, setIsEditMode] = useState(false);
    const dispatch = useDispatch();

    const handleClickEdit = () => {
        setIsEditMode(!isEditMode)
    
        if (isEditMode){
          dispatch(editTask(taskId, nameFieldValue))
        }
    }

    return( 
        <div key={task.id}>
            {isEditMode ? 
                <div>
                    <input value={nameFieldValue} onChange={(e) => setNameFieldValue(e.target.value)}/>
                    <input value={descriptionFieldValue} onChange={(e) => setDescriptionFieldValue(e.target.value)}/>
                </div> : 
                <p><span className="span">Название: </span>{task.title} <span className="span">Описание: </span>{task.description}</p>
            }
            <button onClick={handleClickEdit}>редактировать</button> 
        </div>  
    )
}

export default TodoDetail;