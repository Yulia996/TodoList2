import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask, editTask } from '../../store/todoSlice';
import PropTypes from 'prop-types';

function Task({name, id, status}) {
  const [nameFieldValue, setNameFieldValue] = useState(name);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleClickDelete = () => {
    dispatch(deleteTask({id}))
  }

  const handleClickDone = () => {
    dispatch(doneTask({id}))
  }
  
  const handleClickEdit = () => {
    setIsEditMode(!isEditMode)

    if (isEditMode){
      dispatch(editTask({id, nameFieldValue}))
    }
  }
  
  return (
    <li className={`todo ${status ? 'done' : ''}`}>
      {isEditMode ? <input value={nameFieldValue} onChange={(e) => setNameFieldValue(e.target.value)}/> : <span>{name}</span>}
      <button onClick={handleClickEdit}>редактировать</button>
      <button onClick={handleClickDone}>сделано</button>
      <button onClick={handleClickDelete}>удалить</button>
    </li>
  )
}  

export default Task;

Task.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired
}