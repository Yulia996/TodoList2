import { useState } from 'react'

function TasksElement({task, text, id, status, edit, onDelete, doneTask,  editTask}){
  const [valueEdit, setValueEdit] = useState(text)

  const handleClickDel = () => {
    onDelete(id)
  }

  const handleClickDone = () => {
    doneTask(id)
  }
  
  const handleClickEdit = () => {
    editTask(id)
    task.title = valueEdit;
  }
    
  return (
    <li key = {id} className = {`todo ${status ? 'done':''}`}>
      {edit ? <input value = {valueEdit} onChange = {(e) => setValueEdit(e.target.value)}></input>: <span>{text}</span>}
      <button onClick={handleClickEdit}>редактировать</button>
      <button onClick={handleClickDone}>сделано</button>
      <button onClick = {handleClickDel}>удалить</button>
    </li>
  )
}  

export default TasksElement;