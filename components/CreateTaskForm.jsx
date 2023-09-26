import { useState } from "react";
import PropTypes from 'prop-types';

function CreateTaskForm  ({onSubmit}) {
  const [value, setValue] = useState('');
  const [id, setId] = useState(1);

  const handleAddTask = () => {
    if(value != ''){
      setId(i => i+1);
      onSubmit({title: value, id: id, status: false});
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

CreateTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}