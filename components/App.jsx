import Todos from './TodoList/indexTodos';
import { Routes, Route } from 'react-router-dom';
import TaskPage from './TaskPage/TaskPage';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='description/:index' element={<TaskPage/>}/>
      </Routes>
     
    </section>
  )    
}

export default App;