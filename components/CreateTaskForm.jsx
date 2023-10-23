import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/todoSlice";

function CreateTaskForm() {
  const [value, setValue] = useState('');
  const [id, setId] = useState(1)
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if(value !== ''){
      setId(i => i + 1)
      dispatch(addTask({value, id}))
      setValue('')
    } else {
      alert('Введите задачу')
    }
  }
  
  return (
    <div>
      <input type="text" placeholder="новая задача" value={value} onChange={(e) => {setValue(e.target.value)}}></input>
      <button onClick={handleAddTask}>добавить</button>
    </div>
  )
}

export default CreateTaskForm;