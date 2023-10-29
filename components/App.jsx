import Todos from './TodoList/indexTodos';
import TaskPage from '././TaskPage/TaskPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='description' element={<TaskPage/>}/>
      </Routes>
     
    </section>
  )    
}

export default App;