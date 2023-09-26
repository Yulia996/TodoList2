import { useState } from 'react'
import PropTypes from 'prop-types';

function Task({name, id, status, onDelete, onDone,  onEdit}){
  const [nameFieldValue, setNameFieldValue] = useState(name)
  const [isEditMode, setIsEditMode] = useState(false)

  const handleClickDelete = () => {
    onDelete(id)
  }

  const handleClickDone = () => {
    onDone(id)
  }
  
  const handleClickEdit = () => {
    setIsEditMode(!isEditMode)

    if (isEditMode){
      onEdit(id, nameFieldValue)
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
  status: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}