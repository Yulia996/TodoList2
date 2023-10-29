import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/todoSlice";

function CreateTaskForm() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState(1)
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if(value !== ''){
      setId(i => i + 1)
      dispatch(addTask({value, id, description}))
      setValue('')
      setDescription('')
    } else {
      alert('Введите задачу')
    }
  }
  
  return (
    <div>
      <input type="text" placeholder="новая задача" value={value} onChange={(e) => {setValue(e.target.value)}}></input>
      <input type="text" placeholder="Описание" value={description} onChange={(e) => {setDescription(e.target.value)}}></input>
      <button onClick={handleAddTask}>добавить</button>
    </div>
  )
}

export default CreateTaskForm;