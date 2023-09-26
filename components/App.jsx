import { useState } from 'react'
import CreateTaskForm   from './CreateTaskForm'
import Tasks from './Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    setTasks((task) => ([...task, newTask]));
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return task.id !== id
    }))
  }
  
  const doneTask = (id) => {
    const newTasks = tasks.map((task) => {
      if(task.id == id){
        return {...task, status: !task.status}
      }
      return task
    })
    setTasks(newTasks)
  }
  
  const editTask = (id, newTitle) => {
    const newTasks = tasks.map((task) => {
      if(task.id == id){
        return {...task, title: newTitle}
      }
      return task
    })
    setTasks(newTasks)
  }
    
  return (
    <section>
      <CreateTaskForm  
        onSubmit={addTask}
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