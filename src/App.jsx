import { useState } from 'react'
import Form from './Form'
import TaskList from './TaskList';

function App() {
  const [value, setValue] = useState('');
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);
  
  const addTask = () => {
    setId(i => i+1);
    setTasks((task) =>([...task, {title: value, id: id, status: false, edit: false}]));
    setValue('');
  }  
  
  const onValue = (e) => {
    setValue(e.target.value)
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }
  
  const doneTask = (id) => {
    const newTasks= [...tasks].filter((task) => {
      if(task.id == id){
        task.status = !task.status
      }
      return task
    })
    setTasks(newTasks)
  }
  
  const editTask = (id) => {
    const newTasks= [...tasks].filter((task) => {
      if(task.id == id){
        task.edit= !task.edit
      }
      return task
    })
    setTasks(newTasks)
  }
    
  return (
    <section className='todo'>
      <Form  
        addTask = {addTask}
        value = {value} 
        onValue = {onValue}
      />
      <TaskList 
        tasks ={tasks} 
        onDelete = {deleteTask} 
        doneTask = {doneTask} 
        editTask = {editTask} 
        value = {value} 
        onValue = {onValue}
      />
    </section>
  )    
}

export default App;