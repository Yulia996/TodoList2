import { useState } from 'react'
import Form from './Form'
import Tasks from './Tasks';

function App() {
  
  const [id, setId] = useState(1);
  const [tasks, setTasks] = useState([]);
  
  const addTask = (value) => {
    setId(i => i+1);
    setTasks((task) => ([...task, {title: value, id: id, status: false}]));
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }
  
  const doneTask = (id) => {
    const newTasks = [...tasks].map((task) => {
      if(task.id == id){
        return {...task, status: !task.status}
      }
      return task
    })
    setTasks(newTasks)
  }
  
  const editTask = (id, newTitle) => {
    const newTasks = [...tasks].map((task) => {
      if(task.id == id){
        return {...task, title: newTitle}
      }
      return task
    })
    setTasks(newTasks)
  }
    
  return (
    <section>
      <Form  
        addTask={addTask}
      />
      <Tasks
        tasks={tasks} 
        onDelete={deleteTask} 
        doneTask={doneTask} 
        editTask={editTask}
      />
    </section>
  )    
}

export default App;