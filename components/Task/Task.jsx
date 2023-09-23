import { useState } from 'react'

function Task({text, id, status, onDelete, doneTask,  editTask}){

  const [valueEdit, setValueEdit] = useState(text)
  const [edit, setEdit] = useState(false)

  const handleClickDel= () => {
    onDelete(id)
  }

  const handleClickDone = () => {
    doneTask(id)
  }
  
  const handleClickEdit = () => {
    editTask(id, valueEdit)
    setEdit(!edit)
  }
    
  return (
    <li className={`todo ${status ? 'done':''}`}>
      {edit ? <input value={valueEdit} onChange={(e) => setValueEdit(e.target.value)}></input>: <span>{text}</span>}
      <button onClick={handleClickEdit}>редактировать</button>
      <button onClick={handleClickDone}>сделано</button>
      <button onClick={handleClickDel}>удалить</button>
    </li>
  )
}  

export default Task;