import { useState } from "react";

function Form({addTask}) {

  const [value, setValue] = useState('');

  const handleClickButton = () => {
    addTask(value);
    setValue('')
  }
  
  return (
    <div>
      <input type="text" placeholder="новая задача" value={value} onChange={(e) => {setValue(e.target.value)}}></input>
      <button onClick={handleClickButton}>добавить</button>
    </div>
  )
}

export default Form;