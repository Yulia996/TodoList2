import './style.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, editDescription } from "../../store/todoSlice";
import PropTypes from 'prop-types';

function TaskDescription({name, description, id}) {
    const [nameFieldValue, setNameFieldValue] = useState(name);
    const [descriptionFieldValue, setDescriptionFieldValue] = useState(description)
    const [isEditMode, setIsEditMode] = useState(false);
    const [isEditMode2, setIsEditMode2] = useState(false);
    const dispatch = useDispatch();

    const handleClickEdit = () => {
        setIsEditMode(!isEditMode)
    
        if (isEditMode){
          dispatch(editTask({id, nameFieldValue}))
        }
    }

    const handleClickEditDescr = () => {
        setIsEditMode2(!isEditMode2)
    
        if (isEditMode2){
          dispatch(editDescription({id, descriptionFieldValue}))
        }
    }

    return(
        <>
            <div>
               {isEditMode ? <input value={nameFieldValue} onChange={(e) => setNameFieldValue(e.target.value)}/> : <p><span className="span">Название: </span>{name}</p>}
                <button onClick={handleClickEdit}>редактировать</button> 
            </div>
            <div>
                {isEditMode2 ? <input value={descriptionFieldValue} onChange={(e) => setDescriptionFieldValue(e.target.value)}/> : <p><span className="span">Описание: </span>{description}</p>}
                <button onClick={handleClickEditDescr}>редактировать</button>
            </div>
        </>
    )
}

export default TaskDescription;

TaskDescription.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}